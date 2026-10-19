---
name: getting-things-done
description: "The user's right-hand for messy business decisions and odd one-off jobs no other skill owns, worked through with what is known about the business. Use it to weigh courses of action and land on one, judge whether a piece of work is worth the time, pressure-test a plan before others see it, answer an outside questionnaire or form from what is on file and flag the gaps, check a record for anything doubled, odd or forming a pattern, or draft a one-off document that no other skill covers: a letter whose substance needs working out, such as terms, a commitment or a decision, or an internal write-up built from someone's rough notes, even when the notes are still to come. Load it first, before any reply, question or request for material, whenever a job needs judgement like this. Not for a one-line answer; on-brand writing for an audience or for publication, letters included, goes to copywriting, and answers that belong in a proposal or quote go to drafting-proposals."
job: "Run any revenue task that fits no named skill through a controlled, context-aware process – the user's right-hand for messy decisions and odd jobs, odd one-off documents among them, where the work is thinking the content through: a letter about terms, a board paper, a questionnaire, an explanation of a decision."
tier: standard
status: built
origin: baseline
license: "Copyright Revenue DIY Ltd. Licensed under PolyForm Shield 1.0.0 – see LICENSE.txt in this folder. Use and adapt it for your own business; do not sell it or use it to provide a competing product."
version: "3.45"
generated: { at: "2026-10-18T02:48:06+01:00" }
type: skill
---

After a compaction, ALWAYS re-read this SKILL.md in full, read the workflow file of the step you are in, and reload your context: `get_context` with `{"files": ["PRINCIPLES.md", "OPERATIONS.md"]}`.

# GETTING THINGS DONE

The user's right-hand for messy decisions and odd jobs no named skill owns – and the **DEFAULT workflow** for every Revenue.DIY session when no more specific `revenue-diy:*` skill matches.

---

## CRITICAL RULES

✅ **ALWAYS ground the work in the business context** where the connector is present – fetch the modules the task needs; done for THIS business, never generic.
✅ **ALWAYS act as a thinking partner** – challenge assumptions, surface trade-offs, play devil's advocate; never a yes-man.
✅ **ALWAYS judge whether the task is worth doing** – pressure-test it against the business's goals, at design and whenever the work shows it; recommend SKIP when it doesn't earn the user's time.
✅ **ALWAYS close every task with the four-part report, then the closing question-tool dialog** (save, then rating; never a prose ask; *IF the connector is absent* → the skip line, no dialog) – `§ REPORT TO USER`, `§ FEEDBACK`; on the full route, `review_integrated` first (`§ INDEPENDENT REVIEW`).
✅ **ALWAYS keep every decision labelled** – `D<n> (topic) – text`, never a bare ID.
✅ **ALWAYS dispatch by literal type** – `revenue-diy:worker`, `revenue-diy:researcher`, `revenue-diy:reviewer`, `revenue-diy:tester`; never a generic agent, except one that loads a skill the work must follow. Announce each dispatch: **`Worker (<model>): <one-line task>`** – same string in the description field.
✅ **ALWAYS answer once** – no text while any agent is out, in any stage.
❌ **NEVER default below sonnet** – mechanical work runs sonnet; haiku only when the user picks it.
❌ **NEVER weaken a check to pass it** – fix the work; never loosen, skip or reword a failing test, validator or acceptance line.
❌ **NEVER dress thin content up as finished work** – if there's nothing real to say, say so.
❌ **NEVER persist a business fact outside the context system** – no local files, no memory tools; the connector is the only save path.
❌ **NEVER edit a file through a replacement STRING built from free text** – a function replacer or split and join, always (a `$` in a replacement string is read as an instruction).

---

## STEP 0: SETUP

Connect first, before any prose, answer, search or other work. The brief follows only when the task needs one (`§ OPEN THE BRIEF`).

### 0.1 CONNECT

**The connector is present when `get_context` is in your tools.** *IF it is not listed* → it may be deferred or still connecting, so make two attempts, then stop: (1) search for it with your tool-search tool, the query the bare name `get_context`; (2) *IF still missing* → retry once before your first reply; where the brief is already open, its `connector:` and `worklog:` read `pending` until the retry lands. Only after both attempts fail is it absent.

- *IF present* → call `get_context` NOW with this skill's staple files: `{"skill": "getting-things-done", "start": true, "files": ["PRINCIPLES.md", "OPERATIONS.md"]}`. `start: true` fires ONCE per session, on this call; later calls carry `skill` and `files`, never `start`.
- *IF absent* → print exactly this, then work from what the user gives you – NEVER invent a business fact:
  > Revenue.DIY MCP is not connected, so I can't reach your business context system. Working from what you give me. What it is and how to connect it: revenue.diy/mcp

**Context pointers:** a context file this skill names – a staple, or a file `OPERATIONS.md` points to – is read with `get_context` with `{"skill": "getting-things-done", "files": ["PRINCIPLES.md", <that file>]}` when it is not already in your context.

**Set the two homes** – once, here; every later step uses them and never re-decides them:
- **`<scratch>`** – one task folder, `<YYYY-MM-DD>_<task>`, wherever this session already writes its scratch files on this surface; NEVER inside a skill, plugin or agent folder. The brief, the working files and every agent report go here. Its full path goes into the brief and into every agent dispatch.
- **`<worklog>`** – *IF present AND `OPERATIONS.md` names a work log for this task* → that work log, used as `OPERATIONS.md` instructs; *ELSE* → `<scratch>`. "Put it in `<worklog>`" in any later step means exactly this; when `<worklog>` is `<scratch>`, the file is already there. *IF the work log can't be reached when something is due there* → keep it in `<scratch>` and carry on; put it in `<worklog>` once it can be reached.

### 0.2 OPEN THE BRIEF

**Open the brief the moment the task needs a question to the user, runs past one turn, or sends out an agent. A task done in one turn from the user's own words needs none.** One brief, `<scratch>/brief.md`, as short as the task needs – the session's single record and the file a fresh session resumes from:

```yaml
---
task: [kebab-task]
skill: getting-things-done
date: [YYYY-MM-DD]
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
4. *IF context compresses* → READ the brief, where it is open – `brief.md`, and the work-log item's body where that holds the sections – and continue from the first step or work item not completed. *IF the session comes back after a usage limit, a seat switch or a restart* → READ the brief the same way, where it is open, then check its agents and work items in flight per the context system's rule, as written in `OPERATIONS.md` (`get_context` with `{"skill": "getting-things-done", "files": ["PRINCIPLES.md", "OPERATIONS.md"]}`), and resume only what it says to – never resume outright. *IF it holds no such rule, or the connector is absent* → check each agent and work item in flight yourself (still running, finished or lost), then continue from the first one not completed.

---

## STEP 1: DESIGN

Goal: **full alignment on every `design input`**.

### 1.1 REVIEW DESIGN INPUTS

| `Design Inputs` | Tier | Notes |
|---|---|---|
| **Task & goal** | MUST-HAVE | what the user needs and the outcome it delivers |
| **Worth-doing check** | MUST-HAVE | the value pressure-tested against the business's goals – go, a cheaper version, or SKIP |
| **Runtime inputs** | MUST-HAVE | what the task reads (context files, the user's files, prior outputs), the assets it applies (templates, rubrics, examples), the tools it needs (by tag against the tool map; degrade gracefully), what to ask for – each `must-get` or `optional` |
| **Output** | MUST-HAVE | what is produced and where it lands – direct via tool > file in project > response block |
| **Acceptance criteria** | MUST-HAVE | what "good" looks like for THIS task, one provable line each – the checklist REVIEW ticks |
| **Constraints** | NICE-TO-HAVE | boundaries, budget, tone, deadline |
| **Edge cases** | NICE-TO-HAVE | what the output must survive – empty or odd input, a missing tool, a request outside the job – settled here, not at review |

`MUST-HAVE` = the design is incomplete without it. `NICE-TO-HAVE` = a default is acceptable.

**Missing-input note:** where a step's quality drops for lack of an input, say so ONCE, specifically; *IF the connector is present* (`§ CONNECT`'s finding, with or without a brief) → name the context system as where to add it. Never note an input the user supplied this session.

*IF EDITING an existing artefact* → re-open only the inputs the change touches.
A request that names no output or goal, or points at files without naming the decision or deliverable it wants, leaves Output and Acceptance open: those slots would be your words, not the user's. Answer it with a question, not a finished answer: one topic, your recommended default and its trade-off (what the default gives up), then one question in prose; the question tool is not used at DESIGN. That question opens the brief (`§ OPEN THE BRIEF`).
A choice the user hands over ("you work out…", "your call") is not missing: it is the session's to make, recorded as a `D<n>` line with its reason – and when every `MUST-HAVE` is answered in the user's words, the design-clear rule below still gives `D1 (design clear)`.
*IF EVERY `MUST-HAVE` input but worth-doing is already answered – in the user's own words this session, in the work-log item the task started from, or by the artefact being edited* → write `**D1 (design clear)** – task & goal: <user's words>; worth-doing: <your one-line go, and why>; runtime inputs: <user's words>; output: <user's words>; acceptance: <user's words>` and state it to the user exactly as written, before anything is produced – into the brief's `§ DECISIONS` too where a brief is open – then GO to `§ STEP 2: PLAN`; *IF the user's message also names the whole deliverable* → end that line `FLAG simple task`. Any other slot you would fill in your own words is not answered – no `D1 (design clear)`. *ELSE* → no `D1 (design clear)`: run `§ READ & EVALUATE`, then `§ RESEARCH AND INTERVIEW`.

### 1.2 READ & EVALUATE

1. **Analyse targets** – read target files in full (never from memory).
2. **Check direct references** – one hop max.
3. **Find related files** – search the repository or folder for the target names.
4. **Check conventions** – *IF the connector is present* → the conventions `OPERATIONS.md` points at, for the parts this task touches.
5. **Load task-relevant context** – *IF the connector is present* → the modules the task needs in ONE `get_context` call, named as the index lists them; start from the pillar trunk, a branch module only when the trunk points at one.
6. **Check freshness** – *IF a dated fact looks stale* → flag it and offer to refresh it.

**Then decompose:** what's being built, what's hard, unknown, or needs research.

### 1.3 RESEARCH AND INTERVIEW

READ `workflows/design-interview.md` NOW – NEVER skip this step.

### DESIGN STAGE QUALITY GATES

✅ `D1 (design clear)` stated as written (and in the brief where one is open), all five slots filled (worth-doing yours, the rest the user's words) – or targets read in full and every gate in `workflows/design-interview.md` passed; the worth-doing check done – the task earns its place, or the user chose to proceed knowingly?

---

## STEP 2: PLAN

READ `workflows/plan.md` NOW – NEVER skip this step. `§ THIS SKILL'S PART` runs on top of it.

### 2.1 THIS SKILL'S PART

- **Testing** – none: the work is judged at REVIEW, so the box leaves its Testing question out.
- **Simple path** – `simple task`: the plan is the acceptance checklist and one plan line – no route, no box. *IF the plan rests on nothing the user did not state* → the message is the approved spec and the task is done in one turn, so no brief opens: STATE `D1 (design clear)` to the user before the deliverable, give the checklist in prose (at the latest at the self-tick; the plan line may go with it), and GO to `§ STEP 3: EXECUTE` in the same turn. *ELSE* → confirm the checklist and the plan line in prose, naming what you assumed – a question to the user, so the brief opens (`§ OPEN THE BRIEF`), with everything already stated written in (`D1 (design clear)`, the checklist, the plan line) and its `steps` set to where the run is – then do the same once the user agrees.
- **Simple-path checklist** – on the simple path, the acceptance checklist goes to the user numbered `A1…An`, and the self-tick ticks every item as `- [x] A<n> <criterion> – <proof>` (or `- [ ] A<n> <criterion> – OPEN: <what is missing>`), never a sweep. A fact the task needs is read from the file the served index lists for it before it is called unknown: a limit on which facts the user wants shown never limits which files are read to state them correctly.
- **Plan summary** – full route: `workflows/plan.md § GET APPROVAL`'s six headed paragraphs, printed in full before the approval call – never one line.

### 2.2 SET EXECUTION PREFERENCES

Added to `workflows/plan.md § THE QUESTION BOX`: nothing.

### PLAN STAGE QUALITY GATES

✅ Every gate in `workflows/plan.md` passed (`simple task`: `D1 (design clear)` stated before the deliverable and the checklist given in prose, with no brief – or confirmed when they rest on an assumption)?

---

## STEP 3: EXECUTE

Goal: **deliver the approved plan**.

**Execution rules:**
1. **The brief is the contract** – or, where no brief is open, the agreed plan in the reply; *IF the plan must change* → STOP and confirm with the user.
2. **Work until done** – never pause to report a milestone or ask for something you can do yourself.
3. **No commentary** – one-line status per work item at most.
4. **Blocked** – finish everything not blocked first; then ONE call to your question tool, naming the decision.
5. **Progress write** – on completing each work item: where the brief is open, flip its key and add one evidence line in `§ PROGRESS TRACKING` (otherwise the evidence line goes in the reply); mirror the task-list tool if present; one-line status – the item is not closed until written.
6. **A topic raised here is a late topic** – READ `workflows/design-interview.md` NOW – NEVER skip this step – and take it under its `§ INTERVIEW THE USER` rule 6 at the next natural pause.
7. **Fix rounds** – a P1 or P2 finding is fixed, then the check that found it re-runs, writing a new report, never over a finished one. **Three failed fix rounds on one finding → stop and ask the user**, naming what was tried. Work you did yourself, you fix. Agents report only to you: an agent's finding goes back to the SAME agent – resume it; a new agent only when the fix won't fit its room. A P3, or a point the final review raises, you may fix yourself, on condition that the final review runs again afterwards.

### 3.1 DO THE WORK

The do-it-myself route runs here.

Do every work item yourself, in sequence – the simplest solution that meets the brief, or the agreed plan where no brief is open. Close each per execution rule 5.

### 3.2 DISPATCH THE WORK

The agents route runs here.

**Sequence and models** – the box answers and each unit's model, as `§ PLAN` records them.

**Every dispatch carries three fields:** `brief` – the phase's sub-brief (its `<worklog>` link or full path); `task` – one line naming the part the agent runs; and its output path – a new report in `<scratch>`, named by phase and stage.

**FOR EACH phase – independent phases side by side, as many as the Sequence answer allows; a phase that waits on another starts when that one closes:**
1. **Re-anchor** – re-read the brief's `progress:` keys; take every phase with a key still `false` that waits on nothing still open.
2. **Work** – dispatch one `revenue-diy:worker` per unit – **`Worker (<model>): <one-line task>`** – `{brief, task:[unit <n> of the Execution section], progress:[<phase>_work_<n>]}`.
3. **Read the outcome** – every agent ends on **done**, **done with concerns** or **blocked**. Done → verify against the sub-brief's done criteria and fact-check against the business context; never accept a pass claim without the observed output. Done with concerns → a concern that touches an acceptance line is a finding. Blocked → give it what it names and resume it, or ask the user when only they can.
4. **Review** – *IF the Reviews answer includes per-phase review* → `revenue-diy:reviewer` – **`Reviewer (<model>): <phase>`** – `{brief, task:[the Review section, which names the target and rubric], review:[<phase>_review]}`.
5. **Route findings** – per execution rule 7.
6. **Record** – put each report in `<worklog>` as it lands. A phase is not closed, and nothing that waits on it is dispatched, until its reports are there.
7. **Progress write** – per execution rule 5, for every work item in the phase.

**An index is yours to write** – a README or index that only links the pieces and restates their facts may be your own, when `§ PLAN` names it and the final review covers it; every other piece is a worker's.

**An agent is running until its own completion notice arrives** – a report at `status: in_progress` is work in flight; never re-dispatch or touch its files.

### EXECUTE STAGE QUALITY GATES

✅ Every work item implemented and verified against its acceptance lines (evidence read)?
✅ Every work item closed with an evidence line – its `progress:` key `true` where the brief is open?
✅ Every agent report in `<worklog>`; every finding fixed, or asked about after three failed rounds?
✅ Output grounded in the business context where the connector is present – no generic filler?

---

## STEP 4: REVIEW

Goal: **prove the output meets every acceptance line**.

READ `workflows/acceptance-review.md` and `assets/checklist.md` NOW – NEVER skip this step. This skill's parts of it:

### 4.1 SELF-CHECK

1. **Mechanical** – **brand mechanics** (written content, connector present): the voice, spelling and punctuation rules `BRAND.md` states, applied exactly.
2. **Quality** – **anti-workslop**: does it say something the intended reader needs?
3. **Simple path** – `simple task`: this run takes the self-tick path, every item ticked as `- [x] A<n> <criterion> – <proof>` (or `- [ ] A<n> <criterion> – OPEN: <what is missing>`), one by one, never a sweep.

### 4.2 INDEPENDENT REVIEW

The final reviewer: default model sonnet; rubric `assets/checklist.md`, plus another skill's `assets/checklist.md` by stable path when the output clearly belongs to its domain; announce noun `<output>`.

**An edit after the final review re-runs it** – any change to the output after the final review, by a worker or by you, runs the final review again before the report. A fix-then-re-run loop runs at most two re-runs, and a new P3 a re-run raises is reported, not fixed again.

**Your own integrated review is a file** – full route: after the last independent review and its fixes, write `review_integrated` in `<scratch>` (`workflows/acceptance-review.md § RECORD THE REVIEW`) – seams, consistency, the decision-distribution table, and the checklist re-ticked after any later fix. A passed final review never replaces it; the report waits for it.

### REVIEW STAGE QUALITY GATES

✅ This skill's checks passed – on the full route, `review_integrated` written after the last fix?
✅ Every gate in `workflows/acceptance-review.md` passed?

---

## STEP 5: WRAP-UP

Goal: **hand off, close the run, capture what should outlive the session.** Runs on EVERY task – `simple task` and a one-turn answer included; with no brief open, the brief and `<worklog>` steps fall away and the report and the closing call remain.

### 5.1 FINALISE

1. Finish documentation per the conventions `OPERATIONS.md` points at; *IF it touches more than 2 files* → `revenue-diy:worker` – **`Worker (<model>): documentation`** – `{brief:[the work-log item, or brief.md], task:[the documentation the plan names], progress:[final_docs]}`.
2. **The final report** – write the `§ REPORT TO USER` text to a new report in `<scratch>` named `final_summary` and put it in `<worklog>`, with any report in `<scratch>` not yet there.
3. **An open item stops the wrap-up** – *IF the last acceptance checklist has an open item* → fix what can be fixed now (GO back to `§ STEP 3: EXECUTE`); whatever is still open is named in the report and in `<worklog>`; the work-log item, where one exists, stays open, and the brief, where open, stays `in_progress`. *ELSE* → where the brief is open, set its `status: completed`.
4. **Close the work-log item** – *IF `<worklog>` is a work log and holds an item for this run* → close it as `OPERATIONS.md` instructs.
5. READ `workflows/compound-knowledge.md` NOW – NEVER skip this step – and run its `§ PART 1: BEFORE THE REPORT – SILENTLY` now.

### 5.2 REPORT TO USER

One message, the four parts under their own headings, never a one-line summary: **Work done** (highlights, problems) · **Review results** (verdicts, fix loops, the acceptance checklist's verdict) · **Output** (links) · **Follow-ups** (open acceptance items first; P3s, improvements, open questions). It comes right before the closing call in `§ FEEDBACK`.

### 5.3 FEEDBACK

In the SAME message, after the report text, run `workflows/compound-knowledge.md § PART 2: AFTER THE REPORT – SAME MESSAGE`: its one call to your question tool – the save questions, then the rating – is the last of the session; never a prose ask.

### WRAP-UP STAGE QUALITY GATES

✅ Documentation final; the brief, where open, `completed` – or `in_progress` with every open acceptance item named; the work-log item, where one exists, closed as `OPERATIONS.md` instructs, or left open saying what is open?
✅ The final report and every other report in `<scratch>` in `<worklog>`?
✅ The four-part report delivered, then the closing question-tool call – never a prose ask (the connector absent → the skip line, no dialog)?
✅ `workflows/compound-knowledge.md` run in full, or its skip line printed?
