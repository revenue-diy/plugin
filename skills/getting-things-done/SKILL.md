---
name: getting-things-done
description: "Thinks a tricky decision through, pressure-tests a plan before anyone else sees it, drafts an odd one-off document, works through a questionnaire or a batch of questions from what is already on file, runs a check or an audit over a record, a policy or a set of claims, for a pattern or an inconsistency, and reports what it can see in this session, which tools it can reach and what it has access to. Use it to weigh pausing against halving a budget, renewing against switching a supplier, or doing a piece of work against skipping it. Triggers on: help me think through this, think this through with me, what should I do about X, is this worth doing, pressure-test this, draft this letter, get through these questions, check this for a pattern, what are you connected to right now."
job: Run any revenue task that fits no named skill through a controlled, context-aware process – the user's right-hand for messy decisions and odd jobs.
tier: standard
status: built
origin: baseline
license: "Copyright Revenue DIY Ltd. Licensed under PolyForm Shield 1.0.0 – see LICENSE.txt in this folder. Use and adapt it for your own business; do not sell it or use it to provide a competing product."
version: "3.40"
generated: { at: "2026-09-19T14:25:00+01:00" }
type: skill
---

# GETTING THINGS DONE

The user's right-hand for messy decisions and odd jobs no named skill owns – and the **DEFAULT workflow** for every Revenue.DIY session when no more specific `revenue-diy:*` skill matches.

---

## CRITICAL RULES

✅ **ALWAYS ground the work in the business context** where the connector is present – fetch the modules the task genuinely needs; the value is "done for THIS business", never generic.
✅ **ALWAYS act as a thinking partner** – challenge assumptions, surface trade-offs, play devil's advocate; never a yes-man.
✅ **ALWAYS judge whether the task is worth doing** – pressure-test its value against the business's goals; recommend SKIP when it doesn't earn the user's time.
✅ **ALWAYS keep every decision labelled** – `D<n> (topic) – text`, never a bare ID.
✅ **ALWAYS dispatch by literal type** – `revenue-diy:worker`, `revenue-diy:researcher`, `revenue-diy:reviewer`; announce each as **`Worker (<model>): <one-line task>`** – same string in the description field.
✅ **ALWAYS answer once** – no text while any agent is out.
❌ **NEVER run more than 5 agents at once.** ❌ **NEVER default below sonnet** – mechanical work runs sonnet; haiku only when the user picks it.
❌ **NEVER dress thin content up as finished work** – if there's nothing real to say, say so.
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
skill: getting-things-done
date: [YYYY-MM-DD]
connector: pending   # present | absent – set by workflows/connector.md § DETECT, never re-detected
worklog: pending     # required | none – set by workflows/connector.md § CONVENTIONS, never re-decided
log:                 # work-log reference, set at PLAN
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

READ `workflows/connector.md § DETECT` and follow it exactly. Staple files: `["PRINCIPLES.md"]` – the task shape is unpredictable, so the bare summary and index come with it; add `OPERATIONS.md` in the same call when the task touches tooling, documentation or work-log conventions.

---

## STEP 1: DESIGN

Goal: **full alignment on every `design input`**. Facilitate the user's thinking – research unknowns, ask sharp questions, give trade-offs at equal depth, play devil's advocate.

**Decisions lock in prose only.** NEVER use `AskUserQuestion` in DESIGN. An input is `LOCKED` when the user says so or clearly accepts a proposal – never because you reasoned to an answer.

### 1.1 REVIEW DESIGN INPUTS

| `Design Inputs` | Tier | Notes |
|---|---|---|
| **Task & goal** | MUST-HAVE | what the user needs and the outcome it delivers |
| **Worth-doing check** | MUST-HAVE | pressure-test the value against the business's goals – recommend SKIP or a cheaper version when it doesn't earn the time |
| **Runtime inputs** | MUST-HAVE | what the task reads (context modules, user files, prior outputs), the tools it needs (by tag against the tool map, degrade gracefully), what to ask for |
| **Output** | MUST-HAVE | what is produced and where it lands – direct via tool > file in project > response block |
| **Acceptance criteria** | MUST-HAVE | what "good" looks like for THIS task – the review bar |
| **Constraints** | NICE-TO-HAVE | boundaries, budget, tone, deadline |

`MUST-HAVE` = the design is incomplete without it. `NICE-TO-HAVE` = a default is acceptable.

**Missing-input note:** where a step's quality drops for lack of an input (no ICP, no brand voice, no tool), say so ONCE and specifically. *IF `connector: present`* → name the context system as where to add it. *IF `absent`* → say nothing more. Never note an input the user supplied in this session.

*IF EDITING* → re-open only the inputs the change touches.
*IF the user's message names the whole deliverable AND every `MUST-HAVE` input above is answered in their own words* → write `**D1 (design clear)** – every MUST-HAVE input already answered: <one clause per input naming where>` into brief `§ DECISIONS`, FLAG `simple task`, confirm it back in one line, and SKIP to `§ STEP 2: PLAN`. A `MUST-HAVE` you would have to infer is not answered. *ELSE* → open `§ AGENDA` and interview.

### 1.2 READ & EVALUATE

1. **Analyse targets** – read target files in full (never from memory).
2. **Check direct references** – one hop max.
3. **Find related files** – `grep` the target names.
4. **Load task-relevant context** – *IF `connector: present`* → the modules the task genuinely needs in ONE `get_context` call, named as the index lists them; start from the pillar trunk, take a branch module only when the trunk points at one.
5. **Check freshness** – *IF a dated fact looks stale* → flag and offer to refresh.

**Then decompose:** what's being built, what's hard, unknown, or needs research.

### 1.3 RESEARCH UNKNOWNS

- *IF bounded to known files and no unknowns* → SKIP to `§ INTERVIEW THE USER`. *IF a few targeted reads* → do them yourself.
- *ELSE* → ONE topic (two if closely aligned) per dispatch: **web** → `revenue-diy:researcher` (sonnet) `{questions, references, research:[<scratch>/research_<topic>.md]}` – researchers carry no business context and no MCPs, so inline the facts the topic needs and pre-fetch scraping-heavy sources on the main thread; **local repo or files** → `revenue-diy:worker` (sonnet), report-only.
- **Read every report in full** as it lands. Expect `ANOMALIES NOTICED` and `UNVERIFIED`. Flag single-source claims "unverified". THEN READ `workflows/connector.md § LOG` and follow it for each report as you read it.

### 1.4 INTERVIEW THE USER

1. **Summarise research.**
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

✅ Worth-doing check done – the task earns its place, or the user chose to proceed knowingly?
✅ Targets read, unknowns researched?
✅ `§ AGENDA` in the brief, every row `LOCKED → D-ID`, NO `structural` row numbered after any `detailed` row, and every `detailed` row's `depends on` naming a `structural` row that is already `LOCKED` (or `design clear` recorded as a D-ID)?
✅ Every `design input` `LOCKED` in the user's words (or `design clear` recorded as a D-ID)?
✅ Every decision in brief `§ DECISIONS` with a labelled D-ID, and every `§ AGENDA` D-ID found there?

*IF the user asks to move on with gates open* → name what is missing and the risk; ask them to confirm in prose.

---

## STEP 2: PLAN

Goal: **turn the locked design into an executable plan**. Re-read brief `§ DECISIONS` in full first.

### 2.1 MAP THE PLAN

1. **Quality bar** – what each acceptance line needs.
2. **Tooling check** – for every capability the task needs: resolve it (*IF `connector: present`* → by tag against the tool map in `OPERATIONS.md` (fetched with the staples or in this step); *ELSE* → from what the user named), run a safe read-only probe, record `capability → tool → reachable | missing | no access` in brief `§ PLAN`; the table is written even when no capability resolves to a tool – a "none required" row, never prose. A missing must-have is surfaced BEFORE approval.
3. **Conventions** – READ `workflows/connector.md § CONVENTIONS` and follow it.
4. **Work items** – a flat list, each with the work, its D-IDs, 1–3 acceptance lines and, when subagents drive, its class: `complex` (judgement, core content) or `mechanical` (sweeps, formatting, simple edits). Sequence by FILE COLLISION.
5. **Autonomy boundaries.**

### 2.2 SET EXECUTION PREFERENCES

Build the array, then ONE `AskUserQuestion`; *IF empty* → skip; *IF the user skips* → recommended values. The tool takes at most four questions per call: *IF the array exceeds four* → ask the first four in the order built and apply the recommended default to the rest, naming those defaults in the plan summary block. `preferences(a* | b)` = the value chosen here; `*` marks the default used when the user skips. A `multiSelect` dial is referenced as `preferences(<dial>)` and its branches read *IF `<option>` selected*.
- *Driver: who does the work?* – **Main agent (Recommended)** – full context, best for one-piece output · **Subagents** – fresh workers per item; better for many parallel or long-running pieces.
- *IF Subagents* → *Execution mode:* **Sequential (Recommended)** · **Parallel** – up to 5 at once.
- *IF the output is client-facing or published* → *Review model:* **Sonnet (Recommended)** · **Opus** – deeper judgement, costs more.
- *Reviews: which independent reviews run?* (`multiSelect`; Final independent review selected by default, the other two not) – **Brief review** – a sonnet check of the brief before the approval question · **Per-item review** – every delivery reviewed before the next item starts · **Final independent review** – one reviewer over the integrated whole at `§ STEP 4`. The main agent's own integrated review always runs and is not on this dial; eval and test runs are not reviews.
- *IF the approved scope adds agent work outside these lanes* → *Execution mode (added scope):* **Sequential (Recommended)** · **Parallel**. A preference set for one lane never generalises.

### 2.3 WRITE THE PLAN

Fill brief `§ PLAN` (items, tooling table, preferences), `§ WHAT-NOT-TO-DO` (exclusions with D-IDs; close with: anything not covered by a decision or this plan is out of scope – raise it, don't build it), one `progress:` key per item.

*IF `simple task`* → the plan is one line in `§ PLAN`; confirm it in prose and GO to `§ STEP 3: EXECUTE` when the user agrees.

### 2.4 GET APPROVAL

1. **Print the plan summary block** as message text – four headed paragraphs, always: **Plan overview** (items in order, what each produces, the D-IDs each implements) · **Autonomy boundaries** · **Review and test approach** · **Runs** (*IF the plan includes eval or test runs* → the run count as prompts × tiers × rosters, and the per-run estimate from the last measured batch; cost is reported after the runs, never capped before them). Never skip to the question.
2. *IF `Brief review` is selected* → after the summary block is printed and before the question, dispatch `revenue-diy:reviewer` (sonnet) – **`Reviewer (sonnet): brief vs decisions`** – `{target:[brief.md § PLAN + § WHAT-NOT-TO-DO + the summary block as printed], rubric:[the summary reproduces § PLAN's items, D-IDs and boundaries with nothing added or omitted; every § AGENDA row LOCKED with a D-ID and no detailed row locked before its structural parent; every D-ID mapped to a work item or an explicit exclusion; no omission, duplication or contradiction], references:[brief.md § AGENDA + § DECISIONS], review:[<scratch>/review_brief.md]}`. FIX findings and re-print the block before asking.
3. **Link the brief.**
4. **Ask via `AskUserQuestion`:** *Plan approval: do you approve the plan as briefed?* – **Approve** · **Adjust** – tell me what to change.
5. **On Approve** – READ `workflows/connector.md § LOG` and follow it for `brief.md` and every research report not yet logged.

A go-ahead given BEFORE the plan existed is direction, not approval. Loop until **Approve** (or an explicit post-plan yes via Other). *IF Adjust touches design inputs* → GO back to `§ INTERVIEW THE USER`.

### PLAN STAGE QUALITY GATES

✅ Tooling table in the brief, missing tools surfaced?
✅ Conventions read per `workflows/connector.md § CONVENTIONS`; the connector-absent skip line printed as message text where it applies; `worklog:` decided; `log:` set where a convention applies?
✅ Items sequenced with `progress:` keys; `§ WHAT-NOT-TO-DO` present (or `simple task`)?
✅ Every `§ AGENDA` D-ID present in `§ PLAN` or `§ WHAT-NOT-TO-DO`?
✅ The summary block was printed as message text BEFORE the approval question, and approval was given on it (or `simple task`: the one-line plan confirmed in prose)?

---

## STEP 3: EXECUTE

Goal: **deliver the approved plan**.

**Execution rules:** the brief is the contract – *IF the plan must change* → STOP and confirm; work until done – never pause to report a milestone or ask for something you can do yourself; no commentary – one-line status per item at most, no text while any agent is out; blocked → finish everything not blocked, then ONE `AskUserQuestion`; A TOPIC RAISED HERE IS A LATE TOPIC – add it to brief `§ AGENDA` IN CLASS ORDER (classed, dependants noted, a late `structural` topic numbered into the structural block) and take it under `§ INTERVIEW THE USER` rule 3 at the next natural pause, one topic per turn, recorded before the next opens; never re-cut work in flight mid-turn. On completing each item: flip its key, one evidence line in `§ PROGRESS TRACKING`, mirror the task-list tool if present, one-line status – the item is not closed until written.

### 3.1 DO THE WORK

This lane runs when Driver = main agent (the default); Driver = subagents uses `§ DISPATCH THE WORK` instead.

**Execution mode:** `direct`. Do the work yourself – full context and design intent produce the best output; simplest solution that meets the brief. Close each item per the execution rules.

### 3.2 DISPATCH THE WORK

**Execution mode:** `preferences(sequential* | parallel)` – when Driver = subagents · **Model:** complex items `opus`; mechanical items `sonnet`.

**FOR EACH work item, in order – the loop closes on the progress write:**
1. **Re-anchor** – re-read the brief's `progress:` keys; take the first `false`.
2. **Dispatch** `revenue-diy:worker` – **`Worker (<model>): <one-line task>`** – `{task:[the work + boundaries + the VERBATIM text of every D-ID it implements + acceptance lines], references:[brief.md, files], context:[business facts only if the unit needs them – workers never hunt], progress:[<scratch>/<item>-progress.md]}`. Parallel: max 5 in flight, never two items on one file.
3. **Verify** – read the report against the item's acceptance lines; never accept a pass claim without the observed output; treat worker output as input to fact-check against the business context. *IF `Per-item review` is selected* → dispatch `revenue-diy:reviewer` (opus for a complex item, sonnet for mechanical) – **`Reviewer (<model>): <item>`** – fix P1/P2, re-run the review, then continue.
4. **Progress write** – per the execution rules.

**An agent is running until its own completion notice arrives** – a report at `status: in_progress` is work in flight; never re-dispatch or touch its files.

### EXECUTE STAGE QUALITY GATES

✅ Every item implemented and verified (evidence read)?
✅ Every `progress:` key `true` with an evidence line?
✅ Work log updated per the convention (*IF `worklog: required`*)?
✅ Output grounded in the business context where the connector is present – no generic filler?

---

## STEP 4: REVIEW

Goal: **prove the output meets every acceptance line**. Cheaper checks first; never self-certify a fix; never review your own work alone.

### 4.1 SELF-CHECK

1. **Mechanical** – output landed at the agreed location; references and paths sane; **brand mechanics** (written content, connector present) – the voice, spelling and punctuation rules the brand context states, applied exactly; **decision distribution** – every D-ID → the item that implemented it or an explicit exclusion – the table is built, never assumed.
2. **Quality** – **anti-workslop** – does it say something the intended reader needs?; every acceptance line passes with evidence.

*IF a check fails* → trivial → fix and re-run; else → GO back to `§ STEP 3: EXECUTE`, fix, re-run this STEP.
*IF `simple task`* → self-check only; SKIP to `§ STEP 5: WRAP-UP`.

### 4.2 INDEPENDENT REVIEW

*IF `Final independent review` is selected* → dispatch ONE `revenue-diy:reviewer` – **`Reviewer (<model>): <output>`** – model per preference (sonnet default), `{target:[artefacts], rubric:[assets/checklist.md + brief acceptance lines (+ another skill's checklist by stable path when the output clearly belongs to its domain)], references:[brief.md], review:[<scratch>/review_final.md]}`. *IF `Per-item review` ran* → this pass is about the seams rather than the pieces. *IF no independent review was selected* → say so at WRAP-UP, so the user knows what the output was and was not judged by.

**Route findings** (P1 blocks · P2 should fix · P3 nice): wrong or missing runtime inputs → fix, re-run; impeaches a locked input → STOP and report; P1/P2 → fix, re-run this STEP; P3 → trivial fix or report at WRAP-UP. Log every review in brief `§ REVIEW RESULTS` with `F<n>` IDs and verdicts.

Write your own integrated review to `<scratch>/review_integrated.md`, then READ `workflows/connector.md § LOG` and follow it for that file and `<scratch>/review_final.md` – here, where they are written, not at WRAP-UP.

### REVIEW STAGE QUALITY GATES

✅ Self-checks pass, decision table built?
✅ Independent review passed (or `simple task`)?
✅ Every finding fixed, re-verified and logged, every review report `logged:` (*IF `worklog: required`*)?

---

## STEP 5: WRAP-UP

Goal: **hand off, close the run, capture what should outlive the session.** Runs on EVERY task – `simple task` included, a one-turn answer included. Order is mechanical.

### 5.1 FINALISE

1. Finish documentation per the conventions read at PLAN; *IF it touches more than 2 files* → `revenue-diy:worker` (sonnet).
2. **Log the final report and sweep** – write the `§ REPORT TO USER` text to `<scratch>/final_summary.md`, READ `workflows/connector.md § LOG` and follow it for that file and for every other report in `<scratch>` still without a `logged:` line; THEN VERIFY: every `*.md` report in `<scratch>` carries a `logged: <file> → <url>` line in brief `§ PROGRESS TRACKING`; post any that do not, and record the result in `§ PROGRESS TRACKING` as `sweep: <n> reports, <m> posted now, 0 missing`. *IF `worklog: required`* → closing with one missing is a gate failure.
3. Brief `status: completed`.
4. READ `workflows/connector.md § CLOSE`; run steps 1–2 now, silently.

### 5.2 REPORT TO USER

One message: **work done** (highlights, issues) · **review results** (verdicts, fix loops) · **output** (links) · **follow-ups** (P3s, improvements, open questions).

### 5.3 FEEDBACK

In the SAME message, after the report text, run `workflows/connector.md § CLOSE` steps 3–4: the ONE `AskUserQuestion` (save questions, then the rating) is the last tool call of the session. *IF `connector: absent`* → the session ends on the report.

### WRAP-UP STAGE QUALITY GATES

✅ Brief `completed`; work log closed per the convention?
✅ Every `*.md` report in `<scratch>` carrying a `logged:` line, the sweep result recorded in `§ PROGRESS TRACKING` as `sweep: <n> reports, <m> posted now, 0 missing` (*IF `worklog: required`*)?
✅ Report delivered BEFORE any dialog?
✅ `workflows/connector.md § CLOSE` run in full (present) or its skip line printed (absent)?
