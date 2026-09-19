# DEBUGGING WORKFLOW

> **Version 1.3** | 2026-09-19

Loaded by `engineering` when a task IS a bug (`fix` mode – the DESIGN research core) or when checks fail mid-build (EXECUTE/REVIEW). Evidence before hypothesis, cheapest tool first.

---

## SKIP GATE

*IF the fix is obvious from the error message alone (typo, missing import, clear one-liner)* → fix directly, note the evidence, and return to the calling step. No protocol for trivial bugs.

---

## THE PROTOCOL

### 1. Capture & Reproduce

- Capture the EXACT error – message, stack trace, screenshot, failing input.
- Establish reproduction: what action, what conditions, how often. **A bug you can't reproduce, you can't prove fixed.**
- Note environment (browser/device/platform, live vs dev) and WHAT CHANGED recently (`git log`/`git diff` when in a repo).

### 2. Isolate

- Narrow the scope: which layer – frontend, backend, data, integration, configuration?
- Bisect: does a minimal case fail? Does disabling the suspect component clear it?
- NEVER touch two variables at once – one change per observation.

### 3. Diagnose – cheapest evidence first

Climb the ladder only as far as needed; resolve tools by tag against the tool map, or from what the user named:

1. **Error output + logs already in hand** – read what you have before generating more.
2. **Code inspection** – Read/Grep the failing path; most bugs are visible in code once isolated.
3. **Runtime observation** – browser console/network via a `testing` / `browser-automation`-tagged tool; no tooling → guide the user through their browser DevTools (Console, Network) and capture what they see.
4. **Platform/server logs** – locations per the engineering conventions the connector points at; no access → ask the user to pull them. An automation platform's execution log is the primary record for a workflow bug – read the failed execution before the code.
5. **Interactive probing** – targeted debug logging or live probes (REMOVE after; never leave debug artefacts).

Form the hypothesis FROM the evidence, then confirm it with one targeted check. A pattern-matched guess ("this is usually X") is a hypothesis to TEST, never a diagnosis.

### 4. Fix & Verify

- *IF running as `fix`-mode DESIGN research* → STOP here: report root cause + WHY it broke + proposed fix to the user (they may redirect); the fix lands via `SKILL.md § STEP 3: EXECUTE`.
- *ELSE (mid-build entry)* → implement the minimal targeted fix, RE-RUN the exact failing check, then check the blast radius – what else uses this code path?

---

## EXIT GATES

✅ Root cause identified with evidence (not a symptom patched)?
✅ Fix verified by re-running the ORIGINAL failing case (or handed to EXECUTE with the proposal)?
✅ No debug artefacts left behind?
