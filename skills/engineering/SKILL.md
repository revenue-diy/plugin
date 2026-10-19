---
name: engineering
description: "Use when the user wants anything technical built, changed, fixed, tested or automated: a tool, app, lead magnet, calculator, quiz, form, booking page or dashboard; code and repositories; infrastructure; automation and integration. For any of these, load it FIRST, before any file search, code read, question, advice or pushback. Triggers on: this is broken, debug this, why is X failing, automate this, connect these apps."
job: Own every technical task – build, fix, test, automate, integrate, script, configure and deploy – through a controlled, context-aware engineering workflow.
tier: complex
status: built
origin: baseline
license: "Copyright Revenue DIY Ltd. Licensed under PolyForm Shield 1.0.0 – see LICENSE.txt in this folder. Use and adapt it for your own business; do not sell it or use it to provide a competing product."
version: "1.67"
generated: { at: "2026-10-16T21:13:47+01:00" }
type: skill
---

After a compaction, ALWAYS re-read this SKILL.md in full, read the workflow file of the step you are in, and reload your context: `get_context` with `{"files": ["PRINCIPLES.md", "OPERATIONS.md", "BRAND.md"]}`.

# ENGINEERING

THE technical skill. Automation is code: a workflow, a script, an app and a fix all run the same loop. White-collar output is judged by a reader; **technical output is judged by reality** – so this workflow verifies empirically, treats post-ship failure as a first-class loop, and ships documentation with every artefact.

---

## CRITICAL RULES

✅ **ALWAYS resolve HOW to build through three layers** – skill defaults ← the engineering conventions `OPERATIONS.md` points at (optional) ← repo or project rules. Degrade to safe defaults when a layer is absent.
✅ **ALWAYS verify empirically before declaring done** – a green validator is not proof; open it in the platform's own UI; an edit made through an MCP can be a draft until published – verify the active version.
✅ **ALWAYS ship artefact + documentation** – what it does, how it's built, how to run or host it, how to change it. Never a black box.
✅ **ALWAYS capture every finding** – every bug, gap or risk you or an agent meet while working gets an `F<n>` line – in the brief's `§ REVIEW RESULTS` where the brief is open, otherwise in the reply. Inside this work's scope → fixed in this build, before it ships. Outside it → a follow-up put in `<worklog>`, linking back to this work. The final report lists every finding as filed (its reference), fixed in this change, or ruled out (why).
✅ **ALWAYS save the DELIVERABLE in the work folder** – the folder this session works in, named by its full path; `<scratch>` holds working files only; a deliverable under a temp path is not delivered.
✅ **ALWAYS keep every decision labelled** – `D<n> (topic) – text`, never a bare ID.
✅ **ALWAYS dispatch by literal type** – `revenue-diy:worker`, `revenue-diy:researcher`, `revenue-diy:reviewer`, `revenue-diy:tester`; never a generic agent, except one that loads a skill the work must follow. Announce each dispatch as you make it: **`Worker (<model>): <one-line task>`** – same string in the description field.
✅ **ALWAYS answer once** – no text while any agent is out, in any stage.
❌ **NEVER default below sonnet** – mechanical work runs sonnet; haiku only when the user picks it.
❌ **NEVER weaken a check to pass it** – a failing test, validator or acceptance line is fixed in the work, never loosened, skipped or reworded to go green.
❌ **NEVER over-engineer** – build the simplest thing that works; for every mechanism nobody asked for, ask what breaks without it and how likely that is; a one-off never gets its own tooling – it uses what already exists.
❌ **NEVER leave dead code** – a retired feature is removed, never left switched off: its code, UI, data columns, config, tests and docs go in the same change, or in a follow-up put in `<worklog>`. Inert values, hidden columns, flags pinned off and "kept for later" branches are dead code; one found in review is removed in this build when it is in scope, else filed and scheduled – never just noted.
❌ **NEVER hardcode vendor or client specifics** – tools resolve by tag; deploy mechanics via the conventions or repo rules.
❌ **NEVER over-promise the boundary** – complex, integrated, maintained or monitored systems are a Custom engagement; this skill builds self-serve artefacts and walks the user through hosting them.
❌ **NEVER persist a business fact outside the context system** – no local files, no memory tools; the connector is the only save path.
❌ **NEVER edit a file through a replacement STRING built from free text** – a function replacer or split and join, always (a dollar sign in a replacement string is read as an instruction, not as text).

---

## STEP 0: SETUP

Connect first, before any prose, answer, search or other work. The brief follows only when the task needs one (`§ OPEN THE BRIEF`).

### 0.1 CONNECT

**The connector is present when `get_context` is in your tools.** *IF it is not listed* → it may be deferred or still connecting, so make two attempts, then stop: (1) search for it with your tool-search tool, the query the bare name `get_context`; (2) *IF still missing* → retry once before your first reply; where the brief is already open, its `connector:` and `worklog:` read `pending` until the retry lands. Only after both attempts fail is it absent.

- *IF present* → call `get_context` NOW with this skill's staple files: `{"skill": "engineering", "start": true, "files": ["PRINCIPLES.md", "OPERATIONS.md", "BRAND.md"]}`. `start: true` fires ONCE per session, on this call; later calls carry `skill` and `files`, never `start`.
- *IF absent* → print exactly this, then work from what the user gives you – NEVER invent a business fact:
  > Revenue.DIY MCP is not connected, so I can't reach your business context system. Working from what you give me. What it is and how to connect it: revenue.diy/mcp

**Context pointers:** a context file this skill names – a staple, or a file `OPERATIONS.md` points to – is read with `get_context` with `{"skill": "engineering", "files": ["PRINCIPLES.md", <that file>]}` when it is not already in your context.

**Set the two homes** – once, here; every later step uses them and never re-decides them:
- **`<scratch>`** – one task folder, `<YYYY-MM-DD>_<task>`, wherever this session already writes its scratch files on this surface; NEVER inside a skill, plugin or agent folder. The brief, the working files and every agent report go here. Its full path goes into the brief and into every agent dispatch.
- **`<worklog>`** – *IF present AND `OPERATIONS.md` names a work log for this task* → that work log, used as `OPERATIONS.md` instructs; *ELSE* → `<scratch>`. "Put it in `<worklog>`" in any later step means exactly this; when `<worklog>` is `<scratch>`, the file is already there. *IF the work log can't be reached when something is due there* → keep it in `<scratch>` and carry on; put it in `<worklog>` once it can be reached.

### 0.2 OPEN THE BRIEF

**Open the brief the moment the task needs a question to the user, runs past one turn, or sends out an agent. A task done in one turn from the user's own words needs none.** One brief, `<scratch>/brief.md`, as short as the task needs – the session's single record and the file a fresh session resumes from:

```yaml
---
task: [kebab-task]
skill: engineering
date: [YYYY-MM-DD]
mode: build          # build | fix | test – set at DESIGN
connector: [present | absent | pending]   # set at § CONNECT; pending only until its retry lands, then never re-detected
scratch: [the full path of <scratch>]
worklog: [the work log OPERATIONS.md names, <scratch>, or pending]   # set with connector:, then never re-decided
log:                 # the work-log item's reference – set once, when an item is first tied to the brief, and never changed
status: in_progress  # completed at WRAP-UP
steps: { setup: in_progress, design: pending, plan: pending, execute: pending, review: pending, wrap_up: pending }  # each: pending | in_progress | completed
progress: {}         # one flat boolean per work item, added at PLAN – no roll-up keys
---
# [TASK] BRIEF
## AGENDA
## DECISIONS
## PLAN
## WHAT-NOT-TO-DO
## PROGRESS TRACKING
## REVIEW RESULTS
```

**One shape, two homes.** The six sections are the same wherever the brief lives – `brief.md`, or the work-log item once the brief is put in `<worklog>`: same headings, same order, so every step reads and writes them the same way in either home. *IF the task starts from an existing work-log item* → its body is the brief's starting point: put its reference in `log:` and take its acceptance criteria as the brief's. `brief.md` always keeps the frontmatter – the resume state.

**Brief rules:**
1. `steps` and `progress` change status only – never renamed, never deleted.
2. A STEP closes with its status flip, where the brief is open, and a 2–3 sentence progress report to the user (what landed, what's next) – the ONE sanctioned break in the no-commentary rule.
3. *IF a task-list tool is in your tools* → mirror the six STEPs and, from PLAN, the work items – nothing finer. Never search for it, block on it or mention it to the user.
4. *IF context compresses* → READ the brief, where it is open – `brief.md`, and the work-log item's body where that holds the sections – and continue from the first step or work item not completed. *IF the session comes back after a usage limit, a seat switch or a restart* → READ the brief the same way, where it is open, then check its agents and work items in flight per the context system's rule, as written in `OPERATIONS.md` (`get_context` with `{"skill": "engineering", "files": ["PRINCIPLES.md", "OPERATIONS.md"]}`), and resume only what it says to – never resume outright. *IF it holds no such rule, or the connector is absent* → check each agent and work item in flight yourself (still running, finished or lost), then continue from the first one not completed.

---

## STEP 1: DESIGN

Goal: **classify the task and get full alignment on every `design input`**. Facilitate the user's thinking – research unknowns, ask sharp questions, give trade-offs at equal depth, play devil's advocate.

### 1.1 CLASSIFY THE TASK

Set `mode` – in the brief where it is open, otherwise in the reply – all three run the same steps; a mode skips WITHIN a step, never a step:

| `mode` | Signal | What changes |
|---|---|---|
| **build** (default) | make, build, add, automate, connect, set up, script, migrate | full workflow |
| **fix** | broken, error, bug, "why is X failing" | the debugging protocol is the research core of DESIGN, run first: reproduce → root cause → proposed fix. *IF ONE simple bug* → FLAG `simple fix` (`§ THIS SKILL'S PART`) |
| **test** | test this, verify, does it work | DESIGN scopes coverage; EXECUTE runs the tests; REVIEW reports results |

*IF `mode: fix`* → READ `workflows/debugging.md` NOW – NEVER skip this step – and run it to the proposed fix BEFORE `§ REVIEW DESIGN INPUTS`, design clear or not.

### 1.2 REVIEW DESIGN INPUTS

| `Design Inputs` | Tier | Notes |
|---|---|---|
| **Task & goal** | MUST-HAVE | what the user needs, the outcome, the mode |
| **Runtime inputs** | MUST-HAVE | what it reads (code, docs, data), the tools it needs (by tag against the tool map; degrade gracefully), what to ask the user for |
| **Output** | MUST-HAVE | what is produced and WHERE it lives: self-contained HTML or a Claude artifact (default, hostable anywhere) vs code in a repo vs a platform build (an automation platform, a CMS, a server). *IF the environment does not already determine the target* → ask in prose: standalone HTML / Claude artifact / "help me publish to my site" (the last becomes a DESIGN topic). The locked target is executed verbatim at `§ GO LIVE`. Brand look = best-effort from the brand tokens |
| **Test plan** | MUST-HAVE | what observation proves it works – AI-runnable where tooling allows, people-runnable otherwise. Trivially verifiable → say so and move on |
| **Acceptance criteria** | MUST-HAVE | the verifiable bar, one provable line each – the checklist the final review ticks at `§ STEP 4: REVIEW` |
| **Edge cases** | MUST-HAVE | the failure and edge cases the output must survive – empty or odd input, a missing tool, the system it talks to being down, a request outside the job – settled here, not found at review |
| **Constraints** | NICE-TO-HAVE | standards, deadline, platform limits |

`MUST-HAVE` = the design is incomplete without it. `NICE-TO-HAVE` = a default is acceptable.

**Missing-input note:** where a step's quality drops for lack of an input (no brand tokens, no engineering conventions, no test tooling), say so ONCE and specifically. *IF the connector is present* (`§ CONNECT`'s finding, with or without a brief) → name the context system as where to add it. *IF it is absent* → say nothing more. Never note an input the user supplied in this session.

*IF EDITING an existing artefact* → re-open only the inputs the change touches.
A choice the user hands over ("you work out…", "your call") is not missing: it is the session's to make, recorded as a `D<n>` line with its reason – and when every `MUST-HAVE` is answered in the user's words, the design-clear rule below still gives `D1 (design clear)`.
*IF EVERY `MUST-HAVE` input is already answered – in the user's own words, this session or in the work-log item the task started from, or by the artefact being edited* → write `**D1 (design clear)** – every MUST-HAVE input already answered: <one clause per input naming where>` into the brief's `§ DECISIONS` where the brief is open, state that line to the user either way, and GO to `§ STEP 2: PLAN`. A `MUST-HAVE` you would have to infer is not answered. *ELSE* → run `§ READ & EVALUATE`, then `§ RESEARCH AND INTERVIEW`.

### 1.3 READ & EVALUATE

System archaeology:
1. **Analyse targets** – read the target files or artefacts in full (never from memory).
2. **Check direct references** – one hop max.
3. **Find related files** – search the repository or folder for the target names.
4. **Check conventions** – *IF the connector is present* → the documentation and engineering conventions `OPERATIONS.md` points at, for the parts this task touches. These are the build rules – standards, testing expectations, deploy rules, platform notes – read with any repo or project rules in scope; absent → "safe defaults apply".
5. **Map the system** – how the surrounding code or platform works, prior implementations to follow, which files change. *IF unfamiliar or large* → research it as an unknown at `§ RESEARCH AND INTERVIEW`.
6. **Discover test coverage** – what testing documentation exists and what this change owes it.
7. **Check freshness** – *IF a dated fact looks stale* (a token, a URL, a version pin) → flag it and offer to refresh it.

**Then decompose:** what's being built, what's hard, unknown, or needs research.

### 1.4 RESEARCH AND INTERVIEW

READ `workflows/design-interview.md` NOW – NEVER skip this step.

### DESIGN STAGE QUALITY GATES

✅ `design clear` recorded as a D-ID – or targets read in full and every gate in `workflows/design-interview.md` passed; mode set, the build rules and test coverage read where `§ READ & EVALUATE` ran, and in `fix` mode the root cause found?

---

## STEP 2: PLAN

READ `workflows/plan.md` NOW – NEVER skip this step. `§ THIS SKILL'S PART` runs on top of it.

### 2.1 THIS SKILL'S PART

- **Work-item fields** – each item is buildable, reviewable and observable (one module, one feature, one integration, one workflow) and names its **landing** – how it becomes observable: a dev environment per the conventions, a Claude artifact preview, the files themselves. `complex` = code, logic, integrations; `mechanical` = docs, sweeps, config copies, test scaffolding. Parallel by default: an item waits for another only where they truly collide – the same file, the same workflow, or one repo-wide step (a deploy, a merge).
- **Tooling** – the capabilities to probe: testing, browser automation, the automation platform, CMS, hosting, repo access. A must-have one missing → the plan states the degradation (file output, the manual walkthrough).
- **Documentation plan** – what the artefact owes per the documentation conventions `OPERATIONS.md` points at, plus testing docs where the engineering conventions require them.
- **Sub-briefs** – the top of every sub-brief carries `§ Standards every build meets`. Its Review section names the rubric `assets/checklist.md § CODE / ARTEFACT REVIEW` plus the conventions, chunked by module above 400 changed lines or 6 files – never one file across reviewers. Its Testing section names the scenarios, derived per `workflows/testing.md § DERIVE THE TEST CASES`, and is written only for a phase complete on its own. A trivial phase (under 100 changed lines, one file, no security surface) carries no Review section; a one-phase plan carries neither – `§ STEP 4: REVIEW` still runs in full.
- **Testing** – the test plan locked at DESIGN, run per `workflows/testing.md`.
- **Simple path** – `simple fix`: the plan is the acceptance checklist alone – no route, no box, no other plan; the user's approval of the fix in prose is the plan approval. Put the brief, where open, in `<worklog>` and GO to `§ STEP 3: EXECUTE`.
- **Simple-path checklist** – on `simple fix`, the acceptance checklist goes to the user numbered `A1…An`, and the self-tick ticks every item as `- [x] A<n> <criterion> – <proof>` (or `- [ ] A<n> <criterion> – OPEN: <what is missing>`), never a sweep. A fact the task needs is read from the file the served index lists for it before it is called unknown: a limit on which facts the user wants shown never limits which files are read to state them correctly.

#### Standards every build meets

The engineering conventions (named in `context_files` on a sub-brief) → repo rules → safe defaults; accessibility (semantic markup, WCAG-minded contrast), responsive by default, light + dark on best effort (mandatory when the brand tokens specify parity), security hygiene (no secrets, sanitise input, escape output), a valid document skeleton; brand tokens or business facts only where the item is user-facing; documentation written alongside, not after; no over-engineering – the `NEVER over-engineer` rule in `§ CRITICAL RULES`, copied verbatim into every sub-brief; no dead code – the `NEVER leave dead code` rule in `§ CRITICAL RULES`, copied verbatim into every sub-brief; no new check mechanism (CI workflow, guard, gate, lint, validator) unless the approved plan names it. Automation builds: default to separate workflows; every trigger's happy, user-error and system-error paths wired.

### 2.2 SET EXECUTION PREFERENCES

*IF the work-log item the task started from carries a `## Execution settings` section* → it answers `workflows/plan.md § THE QUESTION BOX` and nothing is asked: "Use the recommended defaults." → every recommended value; otherwise each line sets its question in the box's words (`Models: Sonnet`, `Sequence: sequential`, `Reviews: final only`, `Testing: final only`), and every question it leaves out takes its recommended value. `§ PLAN` records the answers and names the section as their source.

Added to `workflows/plan.md § THE QUESTION BOX`: no question – its Testing question gains **Manual walkthrough** – I guide you through it; also the answer when no testing tool is reachable.

### PLAN STAGE QUALITY GATES

✅ Every gate in `workflows/plan.md` passed; every work item with its landing, and the documentation plan written (`simple fix`: the checklist alone)?

---

## STEP 3: EXECUTE

Goal: **deliver the approved plan**.

**Execution rules:**
1. **The brief is the contract** – or, where no brief is open, the agreed plan in the reply; *IF the plan must change* → STOP and confirm with the user.
2. **Work until done** – never pause to report a milestone or ask for something you can do yourself.
3. **No commentary** – one-line status per work item at most.
4. **Blocked** – finish everything not blocked first; then ONE call to your question tool, naming the decision. *IF a push-notification tool is in your tools* → send one push before the question.
5. **Progress write** – on completing each work item: where the brief is open, flip its key and add one evidence line in `§ PROGRESS TRACKING` (otherwise the evidence line goes in the reply); mirror the task-list tool if present; one-line status – the item is not closed until written.
6. **A topic raised here is a late topic** – READ `workflows/design-interview.md` NOW – NEVER skip this step – and take it under its `§ INTERVIEW THE USER` rule 6 at the next natural pause.
7. **Fix rounds** – a P1 or P2 finding is fixed, then the check that found it re-runs, writing a new report, never over a finished one. **Three failed fix rounds on one finding → stop and ask the user**, naming what was tried. Work you did yourself, you fix. Agents report only to you, never to each other: an agent's finding goes back to the SAME agent – resume it with the finding, so it fixes with the context it holds; a new agent takes it only when the fix will not fit in the room left. A P3, or a point the final review raises, you may fix yourself, on condition that the final review runs again afterwards.
8. **Run when ready** – work is ordered by dependency, never by a clock: a blocked item names what it waits on and starts when that lands, and waiting on a running job is a state check, never a fixed sleep.

### 3.1 DISPATCH THE WORK

*IF the plan took the do-it-myself route* → do every work item yourself, to `§ Standards every build meets`, in sequence, closing each per execution rule 5 once it is observable at its landing (`§ Make it observable`); this loop does not run.

**Sequence and models** – the box answers and each unit's model, as `§ PLAN` records them.

**Every dispatch carries three fields:** `brief` – the phase's sub-brief, as its link in `<worklog>` or its full path; `task` – one line naming the part of it the agent runs; and its output path – the full path of a new report in `<scratch>`, named by phase and stage.

| Agent | Fields | Optional fields | Never – no sub-brief asks it to |
|---|---|---|---|
| `revenue-diy:worker` | `brief`, `task`, `progress` | `context_files` (the engineering-convention modules the unit follows, named as the index lists them), `references` | edit the brief or the work-log item, close the work-log item or change its status, act on scope the brief does not hold, open a credential or key file the brief does not name |
| `revenue-diy:reviewer` | `brief`, `task`, `review` | `target`, `rubric`, `context_files`, `references` | fix anything – it judges; the worker fixes |
| `revenue-diy:tester` | `brief`, `task`, `progress` | `scenarios`, `conventions`, `context_files`, `references` | fix anything or edit a scenario – a scenario that needs changing is a finding |

**FOR EACH phase – independent phases run side by side, as many at once as the Sequence answer allows, and a phase that waits on another starts when that one closes; the loop closes on the progress write:**
1. **Re-anchor** – re-read the brief's `progress:` keys; take every phase with a key still `false` that waits on nothing still open.
2. **Work** – dispatch one `revenue-diy:worker` per unit – **`Worker (<model>): <one-line task>`** – `{brief, task:[unit <n> of the Execution section], progress:[<phase>_work_<n>], context_files}`.
3. **Read the outcome** – every agent ends on **done**, **done with concerns** or **blocked**. Done → verify it against the sub-brief's done criteria and make it observable at its landing (`§ Make it observable`); never accept a pass claim without the observed output. Done with concerns → weigh each concern; one that touches an acceptance line is a finding. Blocked → give it what it names and resume it, or ask the user when only they can.
4. **Review, then test** – *IF the Reviews answer includes per-phase review and the sub-brief has a Review section* → `revenue-diy:reviewer` – **`Reviewer (<model>): <phase>`** – `{brief, task:[the Review section, which names the target and rubric], review:[<phase>_review], context_files}`. *IF the Testing answer includes per-phase tests and the sub-brief has a Testing section* → READ `workflows/testing.md` NOW – NEVER skip this step – and run its `§ Dispatched runs` – **`Tester (<model>): <phase>`** – `{brief, task:[the Testing section, which names the scenarios], progress:[<phase>_test]}`.
5. **Route findings** – per execution rule 7.
6. **Record** – put each report in `<worklog>` as it lands. A phase is not closed, and nothing that waits on it is dispatched, until its reports are there; independent phases still run side by side.
7. **Progress write** – per execution rule 5, for every work item in the phase.

**An index is yours to write** – a README or index that only links the pieces and restates their facts may be your own, when `§ PLAN` names it and the final review covers it; every other piece is a worker's.

**An agent is running until its own completion notice arrives** – a report at `status: in_progress` is work in flight; never re-dispatch or touch its files.

*`test` mode:* EXECUTE = READ `workflows/testing.md` NOW – NEVER skip this step – and run its `§ Dispatched runs` against the scoped coverage – **`Tester (<model>): <scope>`** – `{brief:[the work-log item, or brief.md], task:[the scoped coverage], progress:[<scope>_test]}`; a main-thread FAIL → READ `workflows/debugging.md` NOW – NEVER skip this step. *`fix` mode:* EXECUTE = apply the approved fix + check the blast radius (what else touches the path).

#### Make it observable

Per the item's landing: static self-contained HTML → a browser at `file:///<abs path>`; anything needing an HTTP origin → READ `workflows/testing.md § Local server recipe` NOW – NEVER skip this step – and serve it that way; an automation → open it in the platform's own UI and confirm the ACTIVE version is the one edited; a repo change → the conventions' dev environment. Close a browser session you opened as soon as its check is done. Never open an artefact in the user's own browser.

### 3.2 KEEP-WARM

*IF the session states a one-hour prompt-cache TTL AND agents are running* → *IF a session-timer tool is in your tools* → arm a 55-minute timer that does a silent status check and re-arms while agents remain; delete it when they land. Never on a shorter TTL; never as an excuse for commentary.

### EXECUTE STAGE QUALITY GATES

✅ Every work item implemented and verified against its acceptance lines (evidence read)?
✅ Every work item closed with an evidence line – its `progress:` key `true` where the brief is open?
✅ Every agent report in `<worklog>`; every finding fixed, or asked about after three failed rounds?
✅ Every item observed at its landing, its documentation written alongside?

---

## STEP 4: REVIEW

Goal: **prove the integrated result works and meets every acceptance line** – empirically first, then by judgement.

**The end-to-end test opens this step** – *IF the plan's Testing setting includes a final test (Manual walkthrough included)* → READ `workflows/testing.md` NOW – NEVER skip this step – and run its `§ Dispatched runs` over the integrated whole – **`Tester (<model>): end-to-end`** – `{brief:[the work-log item, or brief.md], task:[its acceptance checklist], scenarios:[this skill's end-to-end scenarios, over the integrated whole], progress:[final_test]}`. On Manual walkthrough, or with no testing tool, guide the user through the walkthrough instead. A failure is a finding: READ `workflows/debugging.md` NOW – NEVER skip this step – then route it per execution rule 7 and re-run the failed cases.

READ `workflows/acceptance-review.md` and `assets/checklist.md` NOW – NEVER skip this step. This skill's parts of it:

### 4.1 SELF-CHECK

1. **Scripted** – the checks the repo or the conventions already run (tests, linters, validators), gated on exit code.
2. **Mechanical** – documentation present; conventions followed; no debug leftovers, no hardcoded secrets.
3. **Quality** – the simplest thing that works; documentation a stranger can follow to run, host and change it; **anti-workslop** (written content only): does it say something the reader needs?
4. **Simple path** – `simple fix`: re-test the fixed path and its blast radius; when green, take the self-tick path, every item ticked as `- [x] A<n> <criterion> – <proof>` (or `- [ ] A<n> <criterion> – OPEN: <what is missing>`), one by one, never a sweep.

### 4.2 INDEPENDENT REVIEW

The final reviewer: default model opus; rubric `assets/checklist.md § FINAL SWEEP`, at architecture altitude – plus `§ CODE / ARTEFACT REVIEW` when no per-phase review ran (Final only, a one-phase plan, or the do-it-myself route); announce noun `integrated build`.

*IF a test plan ran* → also ONE `revenue-diy:reviewer` – **`Reviewer (<model>): test plan`** – `{brief:[the work-log item, or brief.md], task:[judge the test plan and its evidence], target:[the test plan + every evidence file], rubric:[assets/checklist.md § TESTING REVIEW], review:[test_review]}`.

**Findings** – a P3 inside this work's scope is fixed in this build, never only reported, except a new P3 a re-run raises (below).

**An edit after the final review re-runs it** – any change to the output after the final review, by a worker or by you, runs the final review again before the report. A fix-then-re-run loop runs at most two re-runs, and a new P3 a re-run raises is reported, not fixed again.

### REVIEW STAGE QUALITY GATES

✅ This skill's checks passed (and the end-to-end test green where it ran – or the user completed the walkthrough)?
✅ Every gate in `workflows/acceptance-review.md` passed?

---

## STEP 5: WRAP-UP

Goal: **hand off a working, documented, hosted artefact, close the run, capture what should outlive the session.** Order is mechanical.

### 5.1 FINALISE

1. Finish documentation per the documentation conventions `OPERATIONS.md` points at; *IF it touches more than 2 files* → `revenue-diy:worker` – **`Worker (<model>): documentation`** – `{brief:[the work-log item, or brief.md], task:[the documentation the plan names], progress:[final_docs]}`. The documentation is what `ALWAYS ship artefact + documentation` names; *IF the engineering conventions require testing docs* → the test plan is folded into them. You review a worker's documentation before it closes.
2. **The final report** – write the `§ REPORT TO USER` text to a new report in `<scratch>` named `final_summary` and put it in `<worklog>`; then check that every report in `<scratch>` is in `<worklog>`, and put any that is not.
3. **An open item stops the wrap-up** – *IF the last acceptance checklist has an open item* → fix what can be fixed now (GO back to `§ STEP 3: EXECUTE`); whatever is still open is named in the report and in `<worklog>`; the work-log item, where one exists, stays open, and the brief, where open, stays `in_progress`. *ELSE* → where the brief is open, set its `status: completed`.
4. **Close the work-log item** – *IF `<worklog>` is a work log and holds an item for this run* → close it as `OPERATIONS.md` instructs.
5. READ `workflows/compound-knowledge.md` NOW – NEVER skip this step – and run its `§ PART 1: BEFORE THE REPORT – SILENTLY` now.

### 5.2 REPORT TO USER

One message: **work done** · **test and review results** (fix loops included; the acceptance checklist's verdict) · **findings** (every `F<n>`: filed with its reference, fixed in this change, or ruled out with why) · **output and documentation** (links) · **follow-ups** (open acceptance items first; P3s; a named skill the task outgrew into, e.g. `revenue-diy:designing-landing-pages`; the Custom route for deploy-and-maintain asks). Always before go-live and before any dialog.

### 5.3 THE ITERATION LOOP

*IF the user reports a bug after handoff* → re-enter `§ STEP 1: DESIGN` in `fix` mode on the SAME work-log item where one exists (reopen if closed) and loop until they confirm. Same artefact + new ask = same loop; a new feature = a new task.

### 5.4 GO LIVE

**Confirm BEFORE anything publishes** – ONE call to your question tool: *Go live: publish [artefact] to [the target recorded in the brief] now?* – **Go live** · **Not yet**. *IF the build was multi-item AND test docs were persisted AND a testing tool is present* → a SECOND question in the same call: *Documented tests: run the persisted suite cold to prove the docs stand alone?* – **Run it** · **Skip**.

Then execute the recorded `Output` decision – never re-decide it: a repo or platform deploy → the conventions' deploy path with the user; standalone HTML or a Claude artifact → publish or hand over per the recorded choice (artifacts are private until shared; Team or Enterprise organisations need external sharing enabled by an admin; a live-Claude artifact needs viewer sign-in, so never a public lead magnet; a published artifact offers an embed code and an allowed-domains list); a deferred "help me publish to my site" → present shared artifact / embedded artifact / HTML in their CMS and guide the choice (running it for them = Custom).

**Verify the landing:** web → fetch the live URL; artifact → the link opens; files → they exist at the agreed location and the user opens them. An unverified go-live is not complete.

*IF Run it* → run the suite from the persisted docs ONLY (no session memory); a failure means the docs or the build are wrong – fix via `§ THE ITERATION LOOP` before the feedback dialog.

### 5.5 FEEDBACK

In the message that settles go-live – after its landing is verified, or after **Not yet** – run `workflows/compound-knowledge.md § PART 2: AFTER THE REPORT – SAME MESSAGE`: its one call to your question tool is the last of the session.

### WRAP-UP STAGE QUALITY GATES

✅ Documentation final, test plan persisted where required; the brief, where open, `completed` – or `in_progress` with every open acceptance item named; the work-log item, where one exists, closed as `OPERATIONS.md` instructs, or left open saying what is open?
✅ The final report and every other report in `<scratch>` in `<worklog>`?
✅ Report delivered BEFORE go-live and BEFORE any dialog, listing every finding as filed, fixed or ruled out; go-live then confirmed and the landing verified, or explicitly deferred?
✅ `workflows/compound-knowledge.md` run in full, or its skip line printed?
