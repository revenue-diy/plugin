---
name: engineering
description: "Builds, fixes, tests and automates anything technical, through a controlled engineering workflow. Use when the user wants a tool, app, lead magnet, calculator, quiz, booking page or dashboard built or changed; a feature added; a bug, error, wrong result or failing thing fixed; something tested or verified before release; a repetitive process automated, two apps connected or a Zapier or Make flow replaced; or a script, data pipeline, API, integration, server, hosting, repo, config or migration changed. Triggers on: build a tool, make a calculator, create a quiz, spin up a dashboard, add this feature, this is broken, debug this, why is X failing, test this, automate this process, connect these tools, replace my Zapier flow, write a script, set up the server, fix the deploy. Applies to code, config, workflow and system changes with no build wording. Pure wording edits to existing content belong to copywriting; page structure and layout belong to designing-landing-pages."
job: Own every technical task – build, fix, test, automate, integrate, script, configure and deploy – through a controlled, context-aware engineering workflow.
tier: complex
status: built
origin: baseline
license: "Copyright Revenue DIY Ltd. Licensed under PolyForm Shield 1.0.0 – see LICENSE.txt in this folder. Use and adapt it for your own business; do not sell it or use it to provide a competing product."
version: "1.51"
generated: { at: "2026-09-19T14:25:00+01:00" }
type: skill
---

# ENGINEERING

THE technical skill. Automation is code: a workflow, a script, an app and a fix all run the same loop. White-collar output is judged by a reader; **technical output is judged by reality** – so this workflow verifies empirically, treats post-ship failure as a first-class loop, and ships documentation with every artefact.

---

## CRITICAL RULES

✅ **ALWAYS resolve HOW to build through three layers** – skill defaults ← the engineering conventions the business context names (optional) ← repo or project rules. Degrade to safe defaults when a layer is absent.
✅ **ALWAYS verify empirically before declaring done** – a green validator is not proof; open it in the platform's own UI; an edit made through an MCP can be a draft until published – verify the active version.
✅ **ALWAYS ship artefact + documentation** – what it does, how it's built, how to run or host it, how to change it. Never a black box.
✅ **ALWAYS save the DELIVERABLE at a `./` path (the current working directory)** – `<scratch>` holds working files only; a deliverable under a temp path is not delivered.
✅ **ALWAYS keep every decision labelled** – `D<n> (topic) – text`, never a bare ID.
✅ **ALWAYS dispatch by literal type** – `revenue-diy:worker`, `revenue-diy:researcher`, `revenue-diy:reviewer`, `revenue-diy:tester`; announce each as **`Worker (<model>): <one-line task>`** – same string in the description field.
✅ **ALWAYS answer once** – no text while any agent is out.
❌ **NEVER run more than 5 agents at once.** ❌ **NEVER default below sonnet** – mechanical work runs sonnet; haiku only when the user picks it.
❌ **NEVER hardcode vendor or client specifics** – tools resolve by tag; deploy mechanics via the conventions or repo rules.
❌ **NEVER over-promise the boundary** – complex, integrated, maintained or monitored systems are a Custom engagement; this skill builds self-serve artefacts and walks the user through hosting them.
❌ **NEVER persist a business fact outside the context system** – no local files, no memory tools; the connector is the only save path.
❌ **NEVER edit a file through a replacement STRING built from free text** – a function replacer or split and join, always (a dollar sign in a replacement string is read as an instruction, not as text).

**Session scratch location:**
- *IF filesystem is writable* → <scratch> = `.temp/<YYYY-MM-DD>_<task>/`.
- *ELSE* → <scratch> = project artefact.

---

## STEP 0: SETUP

Two actions, in this order, before any prose, answer, search or other work.

### 0.1 OPEN THE BRIEF

**Create `<scratch>/brief.md` NOW** – the session's single record and the file a fresh session resumes from:

```yaml
---
task: [kebab-task]
skill: engineering
date: [YYYY-MM-DD]
mode: build           # build | fix | test – set at DESIGN
connector: pending    # present | absent – set by workflows/connector.md § DETECT, never re-detected
worklog: pending      # required | none – set by workflows/connector.md § CONVENTIONS, never re-decided
log:                  # work-log reference, set at PLAN
status: in_progress   # completed at WRAP-UP
steps: { setup: in_progress, design: pending, plan: pending, execute: pending, review: pending, wrap_up: pending }  # each: pending | in_progress | completed
progress: {}          # one flat boolean per work item, added at PLAN – no roll-up keys
---
# [TASK] BRIEF
## AGENDA
## DECISIONS
## PLAN
## WHAT-NOT-TO-DO
## PROGRESS TRACKING
## REVIEW RESULTS
```

**Brief rules:**
1. `steps` and `progress` change status only – never renamed, never deleted.
2. A STEP closes with its status flip and a 2–3 sentence progress report to the user (what landed, what's next) – the ONE sanctioned break in the no-commentary rule.
3. *IF a task-list tool is in your tools (`TodoWrite` or the `TaskCreate` family)* → mirror the six STEPs and, from PLAN, the work items – nothing finer. Never search for it, block on it or mention it to the user.
4. *IF context compresses or the session restarts* → READ the brief and continue from the first step or work item not completed.
5. `§ AGENDA` is the interview's tracker – one row per open design topic, opened at `§ INTERVIEW THE USER` and kept live until WRAP-UP:

    | # | topic | class | depends on | status |
    |---|---|---|---|---|
    | 1 | [what is built and where its boundary sits] | structural | – | LOCKED → D1 (topic) |
    | 2 | [a choice that row 1 settles] | detailed | 1 | open |

    `structural` = what is built, its boundary, who owns it, where it lives, what surface it targets. `detailed` = every choice the structural rows settle. EVERY `structural` row is numbered BEFORE every `detailed` row, with no exceptions and none appended later out of order; a `detailed` row's `depends on` names a `structural` row, never another detailed one, and the row NEVER opens until that parent reads `LOCKED`.

### 0.2 CONNECT

READ `workflows/connector.md § DETECT` and follow it exactly. Staple files: `["PRINCIPLES.md", "OPERATIONS.md", "BRAND.md"]` (operating rules, tool map and engineering conventions, brand tokens).

---

## STEP 1: DESIGN

Goal: **classify the task and get full alignment on every `design input`**. Facilitate the user's thinking – research unknowns, ask sharp questions, give trade-offs at equal depth, play devil's advocate.

**Decisions lock in prose only.** NEVER use `AskUserQuestion` in DESIGN. An input is `LOCKED` when the user says so or clearly accepts a proposal – never because you reasoned to an answer.

### 1.1 CLASSIFY THE TASK

Set `mode` in the brief – all three run the same steps; a mode skips WITHIN a step, never a step:

| `mode` | Signal | What changes |
|---|---|---|
| **build** (default) | make, build, add, automate, connect, set up, script, migrate | full workflow |
| **fix** | broken, error, bug, "why is X failing" | READ and EXECUTE `workflows/debugging.md` as the research core of DESIGN – reproduce → root cause → proposed fix. *IF ONE simple issue* → FLAG `simple fix`: the user's approval of the fix in prose doubles as plan approval → SKIP the plan and GO to `§ STEP 3: EXECUTE` |
| **test** | test this, verify, does it work | DESIGN scopes coverage; EXECUTE runs `workflows/testing.md`; REVIEW reports results |

### 1.2 REVIEW DESIGN INPUTS

| `Design Inputs` | Tier | Notes |
|---|---|---|
| **Task & goal** | MUST-HAVE | what the user needs, the outcome, the mode |
| **Runtime inputs** | MUST-HAVE | what it reads (code, docs, data), the tools it needs (by tag against the tool map; degrade gracefully), what to ask the user for |
| **Output** | MUST-HAVE | what is produced and WHERE it lives: self-contained HTML or a Claude artifact (default, hostable anywhere) vs code in a repo vs a platform build (an automation platform, a CMS, a server). *IF the environment does not already determine the target* → ask in prose: standalone HTML / Claude artifact / "help me publish to my site" (the last becomes a DESIGN topic). The locked target is executed verbatim at `§ GO LIVE`. Brand look = best-effort from the brand tokens |
| **Test plan** | MUST-HAVE | what observation proves it works – AI-runnable where tooling allows, people-runnable otherwise. Trivially verifiable → say so and move on |
| **Acceptance criteria** | MUST-HAVE | the verifiable bar – the review rubric at `§ STEP 4: REVIEW` |
| **Constraints** | NICE-TO-HAVE | standards, deadline, platform limits |

`MUST-HAVE` = the design is incomplete without it. `NICE-TO-HAVE` = a default is acceptable.

**Missing-input note:** where a step's quality drops for lack of an input (no brand tokens, no engineering conventions, no test tooling), say so ONCE and specifically. *IF `connector: present`* → name the context system as where to add it. *IF `absent`* → say nothing more. Never note an input the user supplied in this session.

*IF EDITING* → re-open only the inputs the change touches.
*IF the user's message names the whole deliverable AND every `MUST-HAVE` input above is answered in their own words* (a `simple fix` qualifies when both hold) → write `**D1 (design clear)** – every MUST-HAVE input already answered: <one clause per input naming where>` into brief `§ DECISIONS`, confirm it back in one line, and SKIP to `§ STEP 2: PLAN`. A `MUST-HAVE` you would have to infer is not answered. *ELSE* → open `§ AGENDA` and interview.

### 1.3 READ & EVALUATE – SYSTEM ARCHAEOLOGY

1. **Analyse targets** – read the target files or artefacts in full (never from memory).
2. **Read the build rules** – *IF `connector: present`* → the engineering conventions `OPERATIONS.md` points at (standards, testing expectations, deploy rules, platform notes) + any repo or project rules in scope. Absent → "safe defaults apply".
3. **Map the system** – how the surrounding code or platform works, prior implementations to follow, which files change. *IF unfamiliar or large* → `revenue-diy:worker` (sonnet), report-only.
4. **Discover test coverage** – what testing documentation exists and what this change owes it.
5. **Check freshness** – *IF a dated fact looks stale* (a token, a URL, a version pin) → flag and offer to refresh.

**Then decompose:** what's being built, what's hard, unknown, or needs research.

### 1.4 RESEARCH UNKNOWNS

- *IF bounded to known files and no unknowns* → SKIP to `§ INTERVIEW THE USER`. *IF a few targeted reads* → do them yourself.
- *ELSE* → ONE topic (two if closely aligned) per dispatch: **web** → `revenue-diy:researcher` (sonnet) `{questions, references, research:[<scratch>/research_<topic>.md]}` – researchers carry no business context and no MCPs, so inline the facts the topic needs and pre-fetch scraping-heavy sources on the main thread; **local repo or files** → `revenue-diy:worker` (sonnet), report-only.
- **Read every report in full**; expect `ANOMALIES NOTICED` and `UNVERIFIED` – an agent that silently fills gaps is reporting fiction; flag single-source claims "unverified". THEN READ `workflows/connector.md § LOG` and follow it for each report as you read it.

### 1.5 INTERVIEW THE USER

1. **Summarise research** (fix mode: root cause, WHY it broke, the proposed fix – the user may redirect).
2. **Write `§ AGENDA` FIRST** – one row per open `design input` and per topic the user has raised, classed and ordered per brief rule 5. The table goes into the brief before the first topic opens, and its row count is the `<N>` the reply shape names.
3. **One topic per reply, fixed shape** – every interview turn is exactly this and nothing else:

    ```
    Topic <n> of <N>: <topic>
    <the research bearing on THIS topic – at most 5 lines>
    Recommended: <default> – <the trade-off it accepts>
    <ONE question>
    ```

    No other topic is mentioned, answered or pre-empted in that reply. *IF the user's message raises several topics at once* → the reply is `§ AGENDA` (structural rows first, one recommended default each) and then Topic 1 – NEVER an answer to each of them.
4. **Record before the next topic opens** – the moment a topic locks, mint it in brief `§ DECISIONS` as `**D<n> (topic)** – text · LOCKED | OPEN` AND flip its `§ AGENDA` row to `LOCKED → D<n> (topic)`, in the SAME turn. IDs never renumber; a reversal is a status change with a note.
5. **Work the rows in order** – structural before detailed, `MUST-HAVE` before `NICE-TO-HAVE`; then list the `NICE-TO-HAVE` defaults and ask whether any needs discussion.
6. **A topic raised late** (mid-interview, at PLAN, during EXECUTE) → ADD it to `§ AGENDA` IN CLASS ORDER, classed, with its dependants noted: a late `structural` topic is numbered INTO the structural block and the rows under it shift down. Take it under this same one-per-turn rule at the next natural pause. Work already in flight is never re-cut mid-turn.

*IF new unknowns surface* → GO back to `§ RESEARCH UNKNOWNS`.

### DESIGN STAGE QUALITY GATES

✅ Mode set; archaeology done (targets, build rules, coverage)?
✅ Unknowns researched?
✅ `§ AGENDA` in the brief, every row `LOCKED → D-ID`, NO `structural` row numbered after any `detailed` row, and every `detailed` row's `depends on` naming a `structural` row that is already `LOCKED` (or `design clear` recorded as a D-ID)?
✅ Every `design input` `LOCKED` in the user's words (or `design clear` recorded as a D-ID)?
✅ Every decision in brief `§ DECISIONS` with a labelled D-ID, and every `§ AGENDA` D-ID found there?

*IF the user asks to move on with gates open* → name what is missing and the risk; ask them to confirm in prose.

---

## STEP 2: PLAN

Goal: **turn the locked design into an executable plan**. Re-read brief `§ DECISIONS` in full first.

*IF `simple fix`* → SKIP the plan and preferences; READ `workflows/connector.md § CONVENTIONS` (trivial rules usually apply); GO to `§ STEP 3: EXECUTE`.

### 2.1 MAP THE PLAN

1. **Quality bar** – what each acceptance line needs.
2. **Tooling check** – for every capability the task needs (testing, browser automation, automation platform, CMS, hosting, repo access): resolve it (*IF `connector: present`* → by tag against the tool map; *ELSE* → from what the user named), run a safe read-only probe, record `capability → tool → reachable | missing | no access` in brief `§ PLAN`; the table is written even when no capability resolves to a tool – a "none required" row, never prose. *IF a must-have tool is missing* → tell the user what to connect BEFORE approval and state the degradation (file output, manual testing) if they proceed without it.
3. **Conventions** – READ `workflows/connector.md § CONVENTIONS` and follow it.
4. **Work items** – a flat list, each one buildable, reviewable and observable (seams: one module, one feature, one integration, one workflow); each names the work, its D-IDs, 1–3 acceptance lines, its **landing** (how it becomes observable: a dev environment per the conventions, a Claude artifact preview, the files themselves) and its class: `complex` (code, logic, integrations) or `mechanical` (docs, sweeps, config copies, test scaffolding). Sequence by FILE COLLISION.
5. **Documentation plan** – what the artefact owes per the documentation conventions (+ testing docs if the engineering conventions require them).
6. **Autonomy boundaries.**

### 2.2 SET EXECUTION PREFERENCES

Build the array, then ONE `AskUserQuestion`; *IF empty* → skip; *IF the user skips* → recommended values. The tool takes at most four questions per call: *IF the array exceeds four* → ask the first four in the order built and apply the recommended default to the rest, naming those defaults in the plan summary block. `preferences(a* | b)` = the value chosen here; `*` marks the default used when the user skips. A `multiSelect` dial is referenced as `preferences(<dial>)` and its branches read *IF `<option>` selected*.
- *Complex-item model:* **Opus (Recommended)** – code and judgement · **Sonnet** – cheaper, fine for simpler solutions · **Fable** – frontier tier, highest cost. Mechanical items run sonnet regardless.
- *Execution mode:* **Sequential (Recommended)** · **Parallel** – up to 5 at once.
- *IF a test plan was locked* → *Testing approach:* **Full (Recommended)** – per-item checks + a final end-to-end test · **Final only** · **Manual walkthrough** – I guide you through it (also the fallback when no testing tool is configured).
- *Reviews: which independent reviews run?* (`multiSelect`, all three selected by default) – **Brief review** – a sonnet check of the brief before the approval question · **Per-item review** – every delivery reviewed before the next item starts (opus for complex items, sonnet for mechanical) · **Final independent review** – one reviewer over the integrated whole at `§ STEP 4`. The main agent's own integrated review always runs and is not on this dial; eval and test runs are not reviews.
- *IF the approved scope adds agent work outside these lanes* → *Execution mode (added scope):* **Sequential (Recommended)** · **Parallel**. A preference set for one lane never generalises.

### 2.3 WRITE THE PLAN

Fill brief `§ PLAN` (items with class, D-IDs, acceptance, landing, docs plan, tooling table, preferences), `§ WHAT-NOT-TO-DO` (exclusions with D-IDs; close with: anything not covered by a decision or this plan is out of scope – raise it, don't build it), one `progress:` key per item.

### 2.4 GET APPROVAL

1. **Print the plan summary block** as message text – four headed paragraphs, always: **Plan overview** (items in order, what each produces and where it lands, the D-IDs each implements) · **Autonomy boundaries** · **Review and test approach** · **Runs** (*IF the plan includes eval or test runs* → the run count as prompts × tiers × rosters, and the per-run estimate from the last measured batch; cost is reported after the runs, never capped before them). Never skip to the question.
2. *IF `Brief review` is selected* → dispatch `revenue-diy:reviewer` (sonnet) – **`Reviewer (sonnet): brief vs decisions`** – `{target:[brief.md § PLAN + § WHAT-NOT-TO-DO + the summary block as printed], rubric:[the summary reproduces § PLAN's items, D-IDs and boundaries with nothing added or omitted; every § AGENDA row LOCKED with a D-ID and no detailed row locked before its structural parent; every D-ID mapped to a work item or an explicit exclusion; no omission, duplication or contradiction], references:[brief.md § AGENDA + § DECISIONS], review:[<scratch>/review_brief.md]}`. FIX findings and re-print the block before asking.
3. **Link the brief.**
4. **Ask via `AskUserQuestion`:** *Plan approval: do you approve the plan as briefed?* – **Approve** · **Adjust** – tell me what to change.
5. **On Approve** – READ `workflows/connector.md § LOG` and follow it for `brief.md` and every research report not yet logged.

A go-ahead given BEFORE the plan existed is direction, not approval. Loop until **Approve** (or an explicit post-plan yes via Other). *IF Adjust touches design inputs* → GO back to `§ INTERVIEW THE USER`.

### PLAN STAGE QUALITY GATES

✅ Tooling table in the brief, missing tools surfaced?
✅ Conventions read per `workflows/connector.md § CONVENTIONS`; the connector-absent skip line printed as message text where it applies; `worklog:` decided; `log:` set where a convention applies?
✅ Items classed, sequenced, each with a landing; docs plan; `§ WHAT-NOT-TO-DO`; `progress:` keys?
✅ Every `§ AGENDA` D-ID present in `§ PLAN` or `§ WHAT-NOT-TO-DO`?
✅ Brief review passed *IF selected*; the summary block was printed as message text BEFORE the approval question, and approval was given on it (`simple fix`: work log only)?

---

## STEP 3: EXECUTE

Goal: **deliver the approved plan, nothing unreviewed shipping**.

**Execution rules:** the brief is the contract – *IF the plan must change* → STOP and confirm; work until done – never pause to report a milestone or ask for something you can do yourself; no commentary – one-line status per item at most, no text while any agent is out; blocked → finish everything not blocked, then ONE `AskUserQuestion` (*IF `PushNotification` is in your tools* → one push first). A TOPIC RAISED HERE IS A LATE TOPIC – add it to brief `§ AGENDA` IN CLASS ORDER (classed, dependants noted, a late `structural` topic numbered into the structural block) and take it under `§ INTERVIEW THE USER` rule 3 at the next natural pause, one topic per turn, recorded before the next opens; never re-cut work in flight mid-turn.

### 3.1 DISPATCH THE WORK

**Execution mode:** `preferences(sequential* | parallel)` · **Model:** complex items `preferences(opus* | sonnet | fable)`; mechanical items `sonnet`.

#### Standards every brief carries

The engineering conventions → repo rules → safe defaults; accessibility (semantic markup, WCAG-minded contrast), responsive by default, light + dark on best effort (mandatory when the brand tokens specify parity), security hygiene (no secrets, sanitise input, escape output), a valid document skeleton; documentation written alongside, not after. Automation builds: default to separate workflows; every trigger's happy, user-error and system-error paths wired.

**FOR EACH work item, in order – the loop closes on the progress write:**
1. **Re-anchor** – re-read the brief's `progress:` keys; take the first `false`.
2. **Build** – dispatch `revenue-diy:worker` – **`Worker (<model>): <one-line task>`** – `{task:[the work + boundaries + the VERBATIM text of every D-ID it implements + acceptance lines + the standards at `§ Standards every brief carries`], references:[brief.md, the files and interfaces it needs], context:[brand tokens or business facts only if the item is user-facing], progress:[<scratch>/<item>-progress.md]}`. Parallel mode: max 5 in flight, never two items on one file.
3. **Verify** – read the report against the item's acceptance lines; a green validator is not proof – never accept a pass claim without the observed output. **Make it observable** per the item's landing: static self-contained HTML → the browser tool at `file:///<abs path>`; anything needing an HTTP origin → `workflows/testing.md § Local server recipe`; an automation → open it in the platform's own UI and confirm the ACTIVE version is the one edited; a repo change → the conventions' dev environment. Never open an artefact in the user's own browser. *IF `Per-item review` is selected* → `revenue-diy:reviewer` (opus for complex, sonnet for mechanical) – **`Reviewer (<model>): <item>`** – rubric `assets/checklist.md § CODE / ARTEFACT REVIEW` + the conventions; chunk >400 changed lines or >6 files by module, never one file across reviewers; fix P1/P2, re-run. *IF testing approach = Full and the item is independently testable* → `workflows/testing.md § Dispatched runs` (a `revenue-diy:tester` runs, you judge). *IF the item is trivial (under 100 changed lines, one file, no security surface)* → skip the per-item review; *IF the plan has ONE item* → skip its per-item review and test; `§ STEP 4: REVIEW` still runs in full, including `§ 4.3 INDEPENDENT REVIEW` where the dial selected it.
4. **Log the item** – READ `workflows/connector.md § LOG` and follow it for this item's progress report and its review report. *IF `worklog: required`* → the item is NOT closed and the next item is NOT dispatched until both `logged:` lines stand in `§ PROGRESS TRACKING`.
5. **Progress write** – flip the item's key, one evidence line in `§ PROGRESS TRACKING` (what was observed, where), mirror the task-list tool if present, one-line status. Not closed until written.

**An agent is running until its own completion notice arrives** – a report at `status: in_progress` is work in flight; never re-dispatch or touch its files.

*`test` mode:* EXECUTE = run `workflows/testing.md` against the scoped coverage. *`fix` mode:* EXECUTE = apply the approved fix + check the blast radius (what else touches the path).

### 3.2 KEEP-WARM

*IF the session states a one-hour prompt-cache TTL AND agents are running* → *IF a session-timer tool is in your tools* → a 55-minute timer doing a silent status check, re-armed while agents remain, deleted when they land. Never on a shorter TTL; never as an excuse for commentary.

### EXECUTE STAGE QUALITY GATES

✅ Every item built, verified against its acceptance lines and observed at its landing?
✅ Every `progress:` key `true` with an evidence line; documentation written alongside?
✅ Work log updated per the convention; every item's progress and review report carrying a `logged:` line (*IF `worklog: required`*)?

---

## STEP 4: REVIEW

Goal: **prove the integrated result works and meets every acceptance line** – empirically first, then by judgement. Cheaper checks first; never self-certify a fix; never review your own work alone.

### 4.1 SELF-CHECK

1. **Mechanical** – output landed per the `Output` input; documentation present; conventions followed; no debug leftovers, no hardcoded secrets; references and paths sane; **decision distribution** – every D-ID → the item that implemented it or an explicit exclusion, table built never assumed.
2. **Quality** – every acceptance line passes with evidence.

*IF a check fails* → trivial → fix and re-run; else → GO back to `§ STEP 3: EXECUTE`, fix, re-run this STEP.

### 4.2 EMPIRICAL GATE – FINAL INTEGRATION TEST

Execute `workflows/testing.md` end-to-end against the integrated whole per the approved testing approach: `revenue-diy:tester` RUNS the scenarios (browser scenarios in one serial lane, closed between scenarios; everything else parallel-safe); YOU judge every captured observation and never accept a pass claim alone; every guard is SHOWN to fail on a seeded violation. No testing tool → guide the user through the manual walkthrough.

*IF failures* → `workflows/debugging.md` → fix → re-run the failed cases. *IF `simple fix`* → re-test the fixed path + blast radius; SKIP to `§ STEP 5: WRAP-UP` when green.

### 4.3 INDEPENDENT REVIEW

*IF `Final independent review` is selected* → dispatch `revenue-diy:reviewer` (opus) on the INTEGRATED whole at architecture altitude – **`Reviewer (opus): integrated build`** – `{target:[all artefacts], rubric:[assets/checklist.md § FINAL SWEEP + brief acceptance lines], references:[brief.md], review:[<scratch>/review_final.md]}`. THEN, always, review the integrated whole yourself. *IF `Per-item review` ran* → your pass is about the seams rather than the pieces; *IF no independent review was selected* → say so at WRAP-UP.
*IF a test plan exists* → a separate `revenue-diy:reviewer` (sonnet) on `{target:[test plan + evidence], rubric:[assets/checklist.md § TESTING REVIEW]}` – coverage matches the build, results prove the criteria, gaps declared.

**Route findings** (P1 blocks · P2 should fix · P3 nice): impeaches a locked input → STOP and report; P1/P2 → fix, re-run this STEP; P3 → trivial fix or report at WRAP-UP. Log every review in brief `§ REVIEW RESULTS` with `F<n>` IDs and verdicts.

Write your own integrated review to `<scratch>/review_integrated.md`, then READ `workflows/connector.md § LOG` and follow it for that file and `<scratch>/review_final.md` – here, where they are written, not at WRAP-UP.

### REVIEW STAGE QUALITY GATES

✅ Self-checks pass, decision table built?
✅ Empirical gate green – observed working, or the user completed the walkthrough?
✅ Independent reviews passed (or `simple fix`); every finding fixed, re-verified and logged, every review report `logged:` (*IF `worklog: required`*)?

---

## STEP 5: WRAP-UP

Goal: **hand off a working, documented, hosted artefact.** Order is mechanical.

### 5.1 FINALISE

1. Finish the artefact documentation per the conventions read at PLAN (what it does, how it's built, how to run or host it, how to change it); *IF the engineering conventions require testing docs* → fold the test plan into them. *IF more than 2 files* → `revenue-diy:worker` (sonnet); you review.
2. **Log the final report and sweep** – write the `§ REPORT TO USER` text to `<scratch>/final_summary.md`, READ `workflows/connector.md § LOG` and follow it for that file and for every other report in `<scratch>` still without a `logged:` line. THEN VERIFY: every `*.md` report in `<scratch>` carries a `logged: <file> → <url>` line in brief `§ PROGRESS TRACKING`; post any that do not, and record the result in `§ PROGRESS TRACKING` as `sweep: <n> reports, <m> posted now, 0 missing`. *IF `worklog: required`* → closing with one missing is a gate failure.
3. Brief `status: completed`.
4. READ `workflows/connector.md § CLOSE`; run steps 1–2 now, silently.

### 5.2 REPORT TO USER

One message: **work done** · **test and review results** (fix loops included) · **output and documentation** (links) · **follow-ups** (P3s; a named skill the task outgrew into, e.g. `revenue-diy:designing-landing-pages`; the Custom route for deploy-and-maintain asks). Always before go-live and before any dialog.

### 5.3 THE ITERATION LOOP

*IF the user reports a bug after handoff* → re-enter `§ STEP 1: DESIGN` in `fix` mode on the SAME work-log item (reopen if closed) and loop until they confirm. Same artefact + new ask = same loop; a new feature = a new task.

### 5.4 GO LIVE

**Confirm BEFORE anything publishes** – ONE `AskUserQuestion`: *Go live: publish [artefact] to [the target recorded in the brief] now?* – **Go live** · **Not yet**. *IF the build was multi-item AND test docs were persisted AND a testing tool is present* → a SECOND question in the same call: *Documented tests: run the persisted suite cold to prove the docs stand alone?* – **Run it** · **Skip**.

Then execute the recorded `Output` decision – never re-decide it: a repo or platform deploy → the conventions' deploy path with the user; standalone HTML or a Claude artifact → publish or hand over per the recorded choice (artifacts are private until shared; Team or Enterprise organisations need external sharing enabled by an admin; a live-Claude artifact needs viewer sign-in, so never a public lead magnet; a published artifact offers an embed code and an allowed-domains list); a deferred "help me publish to my site" → present shared artifact / embedded artifact / HTML in their CMS and guide the choice (running it for them = Custom).

**Verify the landing:** web → fetch the live URL; artifact → the link opens; files → they exist at the agreed location and the user opens them. An unverified go-live is not complete.

*IF Run it* → run the suite from the persisted docs ONLY (no session memory); a failure means the docs or the build are wrong – fix via `§ THE ITERATION LOOP` before the feedback dialog.

### 5.5 FEEDBACK

In the SAME message as the report, after go-live is settled, run `workflows/connector.md § CLOSE` steps 3–4: the ONE `AskUserQuestion` (save questions, then the rating) is the last tool call of the session. *IF `connector: absent`* → the session ends on the report and go-live.

### WRAP-UP STAGE QUALITY GATES

✅ Documentation final, test plan persisted where required; brief `completed`; work log closed, every `*.md` report in `<scratch>` carrying a `logged:` line and the sweep result recorded in `§ PROGRESS TRACKING` as `sweep: <n> reports, <m> posted now, 0 missing` (*IF `worklog: required`*)?
✅ Report delivered BEFORE go-live and BEFORE any dialog?
✅ Go-live confirmed and the landing verified, or explicitly deferred?
✅ `workflows/connector.md § CLOSE` run in full (present) or its skip line printed (absent)?
