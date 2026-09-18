// Revenue.DIY SessionStart + MessageDisplay hook - JOBS 2 and 3 of 3: THE GREETING and
// THE VERSION NAG (hooks v3, 2026-07-31).
//
// THIS FILE WRITES NO TELEMETRY. Every session, skill-run and wrap-up signal is emitted
// server-side by the MCP Worker and by the log convention inside each skill
// (architecture.md § SESSION TELEMETRY). Deleted at v3 and never to be re-added here:
// skillLoaded()/todoDone() and their PostToolUse wiring, every telemetry POST, the
// telemetry_key/bearer machinery, the rdiy_session beacon, and the HEALTH_FILES probe
// (superseded by the Worker's fail-loud read path, which is live and proven). A hook
// cannot see an authenticated identity, so anything it reported was always guesswork
// attached to a key shipped inside the plugin zip.
//
// THE ONE NETWORK CALL is the version lookup: POST {event, repo_id, version} ->
// {ok, latest_version}. UNSIGNED and read-only - it is keyed on the opaque repo_id, it
// writes nothing, and it returns a release number that is public anyway, so a signature
// would have bought nothing but a per-client secret in every client's plugin zip. An
// unknown or unreachable id answers with no latest_version, which reads as "not stale":
// a cosmetic nudge must never be the thing that breaks a session.
//
// THE CALL IS MADE ON EVERY SESSION, WITH `repo_id` WHATEVER IT IS. A client install
// carries its own opaque id; the public install's manifest carries no `repo_id` at all and
// the field goes up as the empty string. Server-side, empty MEANS the public install and is
// answered from the public repo's own latest release - so an install without an id is a
// first-class case here, not a reason to skip the check.
//
// GREETING: "Revenue.DIY plugin loaded (v<version>)", rendered through MessageDisplay, which
// is the only channel that shows on Cowork - SessionStart additionalContext reaches the model,
// not the user.
//
// WHO GETS THE GREETING DEPENDS ON WHICH INSTALL IT IS, and `repo_id` is the whole test.
//
//   A FORK (`repo_id` present) greets on every session. A fork is a delivered, per-client
//   artefact: the banner is that client's standing confirmation that what their seats paid
//   for actually loaded, and the version it names is the thing their admin quotes when
//   something looks wrong. It carries reinforcement value on a repo nobody browses.
//
//   THE PUBLIC INSTALL (`repo_id` absent or empty) says NOTHING while it is current - no
//   banner, no toast, no agent-side note - and speaks only when the installed version is
//   behind. A marketplace install is chosen, visible and self-evident to the person who
//   installed it, so a per-session "it loaded" line is noise in someone else's terminal
//   rather than reassurance. The staleness nag is the one thing that still earns its place
//   there, because nothing else tells that user their copy has gone stale.
//
// The version lookup itself is unchanged by the split: it runs on every session, on both
// installs, because the public install cannot know it is behind without asking.
//
// Fail-soft everywhere: every entry point is wrapped, and a throw would cost the session
// its greeting, never its work.

const fs = require('fs');
const os = require('os');
const path = require('path');
const cp = require('child_process');
const crypto = require('crypto');

const VERSION_URL = 'https://n8n.revenue.diy/webhook/version';

// ── USER + AGENT MESSAGE COPY (single source of truth - edit HERE, not inline) ──
const T = {
  greeting: (v) => `Revenue.DIY plugin loaded (v${v})`,
  userOutdated: (latest) => `⚠️ Your Revenue.DIY plugin is outdated (latest version v${latest}). Please update it and make sure auto-updates are enabled.`,
  toast: (latest) => `⚠️ Revenue.DIY plugin needs updating (latest version v${latest}).`,
  agentBehind: (latest) => `A Revenue.DIY plugin update is available (latest v${latest}). At the end of your reply, ask the user whether they would like help updating the plugin before you continue with the task.`,
};

// plugin.json carries exactly what the hook's two jobs need, and this reads exactly those
// two fields: the installed `version` (banner + staleness compare) and `repo_id` (the
// version lookup key). A manifest holds no client-identifying text and the banner names no
// client, so there is nothing else here to read.
//
// A MISSING `repo_id` IS A VALUE, NOT A FAILURE: it is what the public install looks like,
// and `''` is exactly what the lookup sends for it.
function meta(root) {
  try {
    const pj = JSON.parse(fs.readFileSync(path.join(root, '.claude-plugin', 'plugin.json'), 'utf8'));
    return {
      version: pj.version || '0',
      // TRIMMED, because the endpoint decides the lane on a trimmed value and the hook decides the
      // greeting on the same field: an untrimmed "   " would greet as a fork here while being
      // answered from the public repo's tag there.
      repoId: String(pj.repo_id || '').trim(),
      unreadable: false,
    };
  } catch (e) {
    // A MANIFEST THAT WILL NOT PARSE IS NOT A PUBLIC INSTALL. The public install is identified by
    // a manifest that reads cleanly and carries no `repo_id`; a manifest that cannot be read at all
    // says nothing about which install this is, and silence is the one answer that would hide the
    // fault. `unreadable` keeps such an install on the FORK side of the greeting split, so it still
    // renders - with an obviously wrong version - instead of going quietly dark.
    return { version: '0', repoId: '', unreadable: true };
  }
}

function stdinJson() {
  try { return JSON.parse(fs.readFileSync(0, 'utf8')) || {}; } catch (e) { return {}; }
}

// A LOCAL filename key for the one-shot banner state, and nothing else. Hashed so any
// session id shape yields a safe filename; never sent anywhere.
function sidOf(j) {
  const s = (j.session_id || process.env.CLAUDE_CODE_SESSION_ID || '').toString();
  if (!s) return 'nosid';
  return crypto.createHash('sha256').update(s).digest('hex').slice(0, 12);
}

function stateFile(sid) { return path.join(os.tmpdir(), 'rdiy-banner-' + sid + '.json'); }
function loadState(sid) { try { return JSON.parse(fs.readFileSync(stateFile(sid), 'utf8')) || {}; } catch (e) { return {}; } }
function saveState(sid, st) { try { fs.writeFileSync(stateFile(sid), JSON.stringify(st)); } catch (e) {} }

// A SESSION THAT RENDERS NOTHING MUST STILL CLAIM ITS STATE KEY. Every session used to overwrite
// this file unconditionally, and that overwrite was load-bearing: `sidOf` falls back to the SHARED
// literal 'nosid' when no session id reaches the hook, nothing ever cleans os.tmpdir(), and
// `banner_shown: false` is the ordinary resting state of any session that started and never
// displayed a message. Leave a stale file in place and `messageDisplay()` will happily render
// someone else's banner on an install that is meant to be silent - so the silent path CLEARS.
//
// Removing the file rather than writing an empty one keeps tmpdir clean and makes the absence
// itself assertable; the write is only a fallback for the case where the unlink fails but the
// file is really there.
//
// ENOENT RETURNS RATHER THAN FALLING BACK, and that is the whole reason this is not a stat
// followed by an unlink: a stat-then-unlink has a window in which the file disappears between
// the two calls, the unlink throws ENOENT, and the fallback WRITES the very file this exists to
// remove. Letting the unlink itself report "already absent" closes the window and costs a syscall
// less.
function clearState(sid) {
  try { fs.unlinkSync(stateFile(sid)); }
  catch (e) {
    if (e && e.code === 'ENOENT') return;
    try { saveState(sid, {}); } catch (e2) {}
  }
}

// The version lookup. Unsigned POST, short timeout, failure answers '' - a nag that cannot
// resolve is simply not shown, and no stale toast is rendered off a lookup that did not land.
//
// POSTED ON EVERY SESSION, `repo_id` AND ALL. `repoId` is `''` on the public install, which
// the endpoint reads as "the public install" and answers from the public repo's own latest
// release; a client id is answered from that client's row. There is no id shape this hook
// declines to ask about - deciding what an id means is the endpoint's job, not the hook's.
function latestVersion(repoId, version) {
  try {
    const raw = JSON.stringify({ event: 'version_check', repo_id: repoId || '', version: version });
    const tmp = path.join(os.tmpdir(), 'rdiy-ver-' + process.pid + '-' + Math.floor(Math.random() * 1e6) + '.json').split(path.sep).join('/');
    fs.writeFileSync(tmp, raw);
    try {
      // execFileSync, never a shell string: os.tmpdir() embeds the username on
      // Windows, and a username containing `&` or `"` breaks a shell-assembled
      // command (or injects into it).
      const out = cp.execFileSync('curl', ['-s', '-m', '8', '-X', 'POST', VERSION_URL,
        '-H', 'Content-Type: application/json', '--data-binary', '@' + tmp], { timeout: 10000 }).toString();
      const resp = JSON.parse(out);
      return (resp && resp.latest_version) ? ('' + resp.latest_version) : '';
    } finally { try { fs.unlinkSync(tmp); } catch (e) {} }
  } catch (e) { return ''; }
}

// Semver-aware "is `latest` newer than `cur`" (string compare breaks on .9 vs .10).
function isBehind(cur, latest) {
  if (!cur || !latest) return false;
  const a = String(cur).replace(/^v/, '').split('.').map((n) => parseInt(n, 10) || 0);
  const b = String(latest).replace(/^v/, '').split('.').map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const x = a[i] || 0, y = b[i] || 0;
    if (y > x) return true;
    if (y < x) return false;
  }
  return false;
}

function xmlEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

// Renderer-independent OS notification for the stale-version nudge, so the nag survives
// a host whose renderer swallows the banner. Fires ONLY when stale, so the couple of
// seconds the Windows branch costs are paid once per stale session and never otherwise.
// Never throws.
function notify(title, body) {
  try {
    const p = os.platform();
    if (p === 'win32') {
      const ps = "$null=[Windows.UI.Notifications.ToastNotificationManager,Windows.UI.Notifications,ContentType=WindowsRuntime];$null=[Windows.UI.Notifications.ToastNotification,Windows.UI.Notifications,ContentType=WindowsRuntime];$null=[Windows.Data.Xml.Dom.XmlDocument,Windows.Data.Xml.Dom,ContentType=WindowsRuntime];$x=New-Object Windows.Data.Xml.Dom.XmlDocument;$x.LoadXml('<toast><visual><binding template=\"ToastGeneric\"><text>" + xmlEsc(title) + "</text><text>" + xmlEsc(body) + "</text></binding></visual></toast>');[Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier('{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\\WindowsPowerShell\\v1.0\\powershell.exe').Show([Windows.UI.Notifications.ToastNotification]::new($x))";
      // NOT detached, and deliberately synchronous. detached:true hands the child
      // DETACHED_PROCESS on Windows; powershell.exe is a console host, finds no console,
      // and exits 0 WITHOUT ever running -Command, so the toast silently never fired.
      // Measured 2026-09-11 on Windows 11 26200: the same argv running only an exit 7
      // returns 7 undetached and 0 detached, with stdio irrelevant. A spawned-and-unref'd
      // child is no good either: the toast needs roughly two seconds and the child does
      // not reliably outlive this short-lived hook process. spawnSync also reports a
      // missing binary in its RETURN VALUE rather than as an async 'error' event, so it
      // cannot throw past the try/catch the way spawn can.
      cp.spawnSync('powershell', ['-NoProfile', '-Command', ps], { stdio: 'ignore', windowsHide: true, timeout: 10000 });
    } else if (p === 'darwin') {
      const b = String(body).replace(/["\\]/g, '\\$&'), t = String(title).replace(/["\\]/g, '\\$&');
      // .on('error') is load-bearing: a spawn failure arrives as an ASYNC 'error' event,
      // by which time the try/catch below has already returned, and an unhandled 'error'
      // event takes the whole hook down with exit 1.
      const mac = cp.spawn('osascript', ['-e', 'display notification "' + b + '" with title "' + t + '"'], { detached: true, stdio: 'ignore' });
      mac.on('error', function () {});
      mac.unref();
    } else {
      // notify-send (libnotify-bin) is frequently absent on Linux, WSL and containers,
      // which is exactly the ENOENT the 'error' guard exists to swallow.
      const lin = cp.spawn('notify-send', [title, body], { detached: true, stdio: 'ignore' });
      lin.on('error', function () {});
      lin.unref();
    }
  } catch (e) {}
}

// SessionStart: run the version lookup, compose the banner for MessageDisplay to render, and
// emit an agent-side note ONLY when the installed version is stale. A current version emits
// NOTHING to the model - silence is the whole point - and on the public install a current
// version emits nothing to the USER either (see the header: `repo_id` is the whole test).
//
// The public install CLEARS the session's banner state (see `clearState`) rather than leaving it
// alone: not writing would let a stale file under the same key - and `sidOf` has a shared fallback
// key - render a banner on the one install that is meant to be silent.
module.exports.sessionStart = function (root) {
  try {
    const j = stdinJson();
    const m = meta(root);
    const sid = sidOf(j);
    const isFork = !!m.repoId || m.unreadable;

    // THE CLEAR HAPPENS BEFORE THE NETWORK CALL, and that ordering is deliberate. Which install
    // this is depends only on the manifest, so it is knowable with no network at all, while the
    // lookup below can sit in a curl for seconds. Clear afterwards and a hook process killed
    // mid-lookup leaves a stale file for `messageDisplay()` to render on a public install. Doing
    // it first makes the silence survive the hook dying.
    //
    // A public install that turns out to be BEHIND writes its banner below; nothing between here
    // and there writes state, so this clear is never undone by accident.
    if (!isFork) clearState(sid);

    const latest = latestVersion(m.repoId, m.version);
    const behind = isBehind(m.version, latest);

    // The banner is composed identically for both installs when there IS one to show: the
    // greeting names the INSTALLED version and the warning names the LATEST, and a nag that
    // dropped the greeting would name only the version the user does not have.
    if (isFork || behind) {
      let banner = '*' + T.greeting(m.version) + '*';
      if (behind) banner += '\n' + T.userOutdated(latest);
      const st = loadState(sid);
      st.banner = banner;
      st.banner_shown = false;
      saveState(sid, st);
    }

    if (behind) {
      notify('Revenue.DIY', T.toast(latest));
      process.stdout.write(JSON.stringify({
        hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: T.agentBehind(latest) },
      }));
    }
  } catch (e) {}
};

// MessageDisplay: prepend the composed banner to the FIRST displayed assistant message
// of the session, once, via the documented displayContent field. Fires on every message;
// the banner_shown flag makes it a one-shot per session.
module.exports.messageDisplay = function () {
  try {
    const j = stdinJson();
    const sid = sidOf(j);
    const st = loadState(sid);
    if (!st.banner || st.banner_shown) return;  // nothing to show, or already shown
    if (j.final === false) return;              // wait for the complete message, not a mid-stream chunk
    const delta = (j.delta != null ? j.delta : '').toString();
    if (!delta) return;                         // don't spend the one-shot on an empty message
    st.banner_shown = true;
    saveState(sid, st);
    // NBSP spacer line: a plain blank line collapses in the VS Code renderer, so the
    // banner fuses with the first real paragraph without it. The spacer between the
    // \n\n pairs below is a LITERAL U+00A0 char - invisible, load-bearing, do not "fix".
    process.stdout.write(JSON.stringify({
      hookSpecificOutput: { hookEventName: 'MessageDisplay', displayContent: st.banner + '\n\n \n\n' + delta },
    }));
  } catch (e) {}
};
