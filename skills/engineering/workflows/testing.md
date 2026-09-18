# TESTING WORKFLOW

> **Version 2.1** | 2026-09-16

Loaded by `engineering` for per-item tests (EXECUTE, dispatched), the final integration test (REVIEW) and `test` mode. Testing gathers EVIDENCE against the test plan – a validator passing is never proof; observation is.

**YOU ARE THE TEST-DRIVER.** Four rules govern every run:
1. **Testers RUN, the main agent JUDGES** – scenario execution dispatches to `revenue-diy:tester` (sonnet); the verdict is never theirs.
2. **NEVER accept a pass claim without the observed output** – a reported PASS is a claim; read the captured observation. A verdict without its observation is a FAIL.
3. **Lane by tooling** – browser scenarios run in ONE serial lane (one session, closed between scenarios); scriptable checks, validators and HTTP probes run in parallel.
4. **Every guard is SHOWN to fail** – seed the violation it exists to catch, watch it fail, restore. A guard proven only by passing is unproven.

---

## 1. DERIVE THE TEST CASES

From the locked test plan (or the `test`-mode scope), each case is **action → expected observation**, in priority order: happy path; failure paths (bad input, empty state, the thing it talks to being down); edge cases the design named; integration seams (data crossing item or system boundaries). Scale to risk: a static lead magnet needs a render and click-through; a form with a webhook needs failure paths and the far side of the seam.

**Automations** add: the trigger fires on the real event shape; the ACTIVE version is the one edited (an MCP edit can sit as a draft); the user-error path is retryable and the system-error path alerts a human; idempotency on a duplicate event.

---

## 2. RESOLVE THE RUNNER

Resolve test tooling by tag (`testing`, `browser-automation`) against the tool map, or from what the user named:

| Situation | Runner |
|---|---|
| Per-item test during EXECUTE | DISPATCH `revenue-diy:tester` – `§ Dispatched runs` |
| Final integration test at REVIEW | DISPATCH the runs; YOU read every evidence file and own the verdict |
| No testing tool configured | MAIN THREAD `§ Manual walkthrough` – the user's observations are the evidence |
| Scriptable checks (validators, unit tests, HTTP) | either – cheapest first, before browser work |

**Why `tester`:** a test run is observation without repair. The tester's contract forbids fixing anything and forbids editing a scenario – a scenario that needed correcting is a finding, and the re-run after the fix earns the PASS. `worker` PRODUCES (a rig, a harness, a fix); `reviewer` JUDGES an artefact; `researcher` never runs tests.

**Browser tooling hygiene:** one session at a time; close it when done; screenshots and logs land in `<scratch>`, never in tracked folders.

**Channel by need:** static self-contained HTML opens by file path – navigate the browser tool to `file:///<abs path>`. An artefact that needs an HTTP origin (module imports, fetch, service workers, a backend, a full site) gets a local server per `§ Local server recipe`, never ad hoc.

**Local server recipe (collision-free, race-free, orphan-free):**
1. `<scratch>/serve.js` – a zero-dependency static server that lets the OS pick the port and writes it to a file once listening:
```js
const http=require('http'),fs=require('fs'),path=require('path'),root=process.argv[2];
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.svg':'image/svg+xml'};
const srv=http.createServer((q,r)=>{const f=path.join(root,decodeURIComponent(q.url.split('?')[0]).replace(/^\/+/,'')||'index.html');
  fs.readFile(f,(e,d)=>{e?(r.writeHead(404),r.end('404')):(r.writeHead(200,{'Content-Type':mime[path.extname(f)]||'application/octet-stream'}),r.end(d))})});
srv.listen(0,'127.0.0.1',()=>{fs.writeFileSync(path.join(__dirname,'serve.port'),String(srv.address().port));console.log('READY',srv.address().port)});
```
2. Launch backgrounded: `node <scratch>/serve.js "<abs artefact dir>" > <scratch>/serve.log 2>&1 & echo $! > <scratch>/serve.pid` – READ `<scratch>/serve.port` (it exists only once listening).
3. Navigate the browser tool to `http://127.0.0.1:<port>/<file>`.
4. **TEARDOWN always** – `kill $(cat <scratch>/serve.pid)` on success or failure and confirm the process is gone.

**NEVER open artefacts in the user's own browser** (`start`, `explorer`, `Start-Process`): it hijacks their desktop and proves nothing. No browser tool → verify what is scriptable and DISCLOSE that no rendering check ran.

---

## 3. EXECUTE THE TESTS

### Dispatched runs (default – per-item and final)

Write the scenarios to `<scratch>/scenarios_<scope>.md` (each case: pre-conditions, steps, expected observation, cleanup). DISPATCH `revenue-diy:tester` (sonnet) – **`Tester (sonnet): run <scope> scenarios`** – with `{progress:[<scratch>/test_<scope>.md], scenarios:[<scratch>/scenarios_<scope>.md], conventions:[the testing conventions doc, if the connector named one], references:[brief.md]}`. Browser scenarios go in ONE dispatch run serially; scriptable cases split freely.

**Then YOU read the evidence** – every verdict against its captured observation. "Worked as expected" is a FAIL to re-run. FAIL findings → fix main-thread (or a `worker`), RE-DISPATCH with the same progress path (the tester resumes the unrun scenarios).

### Main-thread runs

For a case too small or too entangled to brief: perform the action, capture the observation, mark PASS / FAIL vs the expected observation. A FAIL → `workflows/debugging.md`, fix, re-run the case and every case on the same path.

### Guard proof (mandatory where the artefact has guards)

For every guard, validator or error path: SEED the violation, OBSERVE the failure, RESTORE; record both observations. A guard trippable against a COPY → the tester seeds the copy under `<scratch>`. A guard only trippable in place → main thread or a `worker` seeds and restores before any review that reads the file.

### Manual walkthrough (no testing tool)

*IF self-contained HTML and the surface supports Claude artifacts* → publish as an artifact first – the user tests a live link. Then a numbered checklist: one action + one expected observation per step, plain words. Capture the answers as the evidence record. Include the 2–3 failure paths that matter most.

---

## 4. RECORD THE EVIDENCE

`<scratch>/test-evidence_<scope>.md`: the case list, PASS/FAIL with the captured observation, guard-proof observations (tripped + restored), environment tested, what was NOT tested and why. Feeds the REVIEW-stage test-plan review and, where the engineering conventions require, the persisted testing docs at WRAP-UP.

---

## EXIT GATES

✅ Every case ran with a recorded observation (or an explicit not-tested note)?
✅ Every dispatched verdict READ against its observation by the main agent?
✅ Every guard shown to fail on a seeded violation, then restored?
✅ Every FAIL fixed and re-run to green; sessions closed; evidence file written?
