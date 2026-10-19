# PLAN

> **Version 1.4** | 2026-10-15

The plan step every skill shares. Read in full at the skill's PLAN step, together with the part that step adds on top – its own work-item fields, questions and shortcuts. Both apply; where they differ, the skill's part wins. `<skill-name>` is the calling skill's frontmatter `name`.

Goal: **turn the locked design into an executable plan**. Re-read the brief's `§ DECISIONS` in full first, where the brief is open.

---

## 1. THE ACCEPTANCE CHECKLIST

It comes first, at every tier: the acceptance criteria, numbered, one provable line each – `- [ ] A<n> <criterion>` – first in the brief's `§ PLAN` where the brief is open, otherwise first in the reply. No vague line: each names what is observed and where, never "works well", "looks right" or "is complete". REVIEW ticks it item by item.

---

## 2. PICK THE ROUTE

The size of the designed work picks one of two routes. State the route in the plan, with its reason in one clause; the user can switch it at approval.
- **Do it myself** – *IF this skill is `tier: light`* (a light skill never dispatches), *OR* the whole designed work is one piece, or a few small ones, that you can finish in this session without crowding your own context.
- **Agents do it** – *ELSE*: the work splits into several pieces that can be built apart, or a piece is too big to do here without risking a compaction mid-work.

**On "do it myself":**
- *IF this skill is `tier: light`* → from `§ MAP THE WORK`, do the Quality bar, the Tooling check and the Autonomy boundaries; then write the plan as one paragraph under the acceptance checklist – in `§ PLAN` where the brief is open, otherwise in the reply – in plain words, ending with **What I assumed** and **Most likely wrong**, one line each, and confirm both in prose. When the user agrees, put the brief, where open, in `<worklog>` – this creates or adopts the work-log item; record its reference in `log:` – and go to the skill's EXECUTE step. A light skill posts no report; nothing else in this file runs.
- *ELSE* → no question box: no work is dispatched, so there is nothing to choose. `§ THE QUESTION BOX` and `§ PHASES, UNITS AND SUB-BRIEFS` do not run, and you do every work item yourself, in sequence. The settings are fixed: Reviews = Final only, because you never review your own work alone; Testing = Final only where the skill's PLAN step names a test, else none.

---

## 3. THE QUESTION BOX

Agents route only. First, before any work is cut: ONE call to your question tool with these four questions, the recommended option first; each also takes a free-text answer, and there is no separate "customise?" question. Questions the skill's PLAN step adds join this box after the four and count toward the tool's limit of four questions per call: *IF the box holds more than four* → ask the first four in the order built and apply the recommended default to the rest, naming those defaults in the plan summary block. *IF the user does not answer* → the recommended values run.
- *Models:* **Best fit by task complexity (Recommended)** – complex work on Opus, mechanical work (documentation, tests, sweeps) on Sonnet, every review on Opus · **Opus** · **Sonnet**. A single-model answer runs every agent on that model, reviewers included; every model stays choosable for the core work, because Sonnet builds well once the task is described.
- *Sequence:* **Parallel, up to 3 agents at a time (Recommended)** · **Parallel, unlimited** – you pick the number of lanes, speed first without giving up quality · **Sequential**.
- *Reviews:* **Brief + per-phase + final (Recommended)** · **Per-phase + final** · **Final only**. Eval and test runs are not reviews.
- *Testing:* **Per-phase + final (Recommended)** · **Final only** · **None**. *IF the skill's PLAN step names no way its work is tested* → leave this question out; no test stage runs.

The answers hold for every agent this run dispatches.

---

## 4. MAP THE WORK

1. **Quality bar** – what each acceptance line needs to pass.
2. **Tooling check** – for every capability the task needs: resolve the tool (*IF the connector is present* → by tag against the tool map in `OPERATIONS.md` – `get_context` with `{"skill": "<skill-name>", "files": ["OPERATIONS.md"]}` when it is not already loaded this session; *ELSE* → from what the user named), run a safe read-only probe, and record `capability → tool → reachable | missing | no access` in `§ PLAN` where the brief is open, otherwise in the reply. The table is written even when no capability resolves to a tool – a "none required" row, never prose. *IF a must-have tool is missing* → tell the user what to connect BEFORE approval; the plan states the degradation if they go ahead without it.
3. **Work items** – a flat list; each names the work, the D-IDs it implements, 1–3 acceptance lines, and every field the skill's PLAN step adds. Sequence by FILE COLLISION: two items touching one file never run at the same time.
4. **Autonomy boundaries** – what runs without asking, and where you stop.

---

## 5. PHASES, UNITS AND SUB-BRIEFS

Agents route only.

1. **Phases** – group the work items into phases, each one deliverable that can be built, reviewed and tested on its own; order them by file collision and by what each needs from the one before.
2. **Class** – each work item is `complex` (judgement, code, core content) or `mechanical` (sweeps, documentation, conversions, simple edits); the Models answer turns the class into a model, written beside the class.
3. **Units** – cut each phase into units, one agent each, sized to finish inside 600k tokens (60% of a 1M context window; the same share of a smaller one). The room left is for that agent's own fix rounds. Never so small that reading in costs more than the work – never ~400k of getting up to speed for ~50k of work. A phase too big for one unit goes out as several, in sequence. Write each unit's estimate in the plan.
4. **Sub-briefs** – one per phase, self-contained: it is all its agents are handed.
    - **Top** – the task, stated as the behaviour to achieve, with every piece of context the agents need and the verbatim text of every D-ID the phase implements.
    - **Execution** – the to-do, and the done criteria as `- [ ] A<n>` lines, self-review included.
    - **Review** – only when the Reviews answer includes per-phase review: the target and the rubric the reviewer checks it against, and its done criteria.
    - **Testing** – only when the Testing answer includes per-phase tests: the testing method, the scenarios the tester runs, and its done criteria.

    Put each sub-brief in `<worklog>` beside the brief – locally, one file per phase next to it. The brief links each sub-brief and never repeats it. No agent edits a sub-brief or the brief: agents only write their own reports.

---

## 6. WRITE THE PLAN

Fill the brief where it is open, otherwise state the plan in the reply: `§ PLAN` (the acceptance checklist, then the route and its reason, the work items with their D-IDs and acceptance lines – plus class, model, phase and unit estimates on the agents route – the tooling table and the box answers), `§ WHAT-NOT-TO-DO` (exclusions with D-IDs, closing with: anything not covered by a decision or this plan is out of scope – raise it, don't build it), and one `progress:` key per work item. When the brief opens later than STEP 0 – at the first question, plan approval included – it opens with everything already stated in the reply written in: D1, the checklist, the plan, the tooling table and the Route line, with its `steps` set to where the run is, never `setup`.

---

## 7. GET APPROVAL

1. **Print the plan summary block** as message text, in plain words – six headed paragraphs, always: **Plan overview** (the route, the items or phases in order, what each produces, the D-IDs each implements) · **Autonomy boundaries** · **Review and test approach** · **Runs** (*IF the plan includes eval or test runs* → the run count as prompts × runs per prompt × tiers × rosters, and the per-run estimate from the last measured batch; the measured cost is reported with the results) · **What I assumed** (every assumption the plan rests on that the user did not state) · **Most likely wrong** (the one or two points most likely to be wrong, and what each would change). Never skip to the question.
2. *IF the Reviews answer includes the brief review* → dispatch `revenue-diy:reviewer` – **`Reviewer (<model>): brief vs decisions`**, the model per the Models answer – with `{brief:[the brief – its link in <worklog>, or its path], task:[check the plan against the decisions], target:[§ PLAN + § WHAT-NOT-TO-DO + the summary block as printed], rubric:[the summary reproduces § PLAN's items, D-IDs and boundaries with nothing added or omitted, and ends with What I assumed and Most likely wrong; every acceptance line provable, none vague; every § AGENDA row LOCKED with a D-ID and no detailed row locked before its structural parent; every D-ID mapped to a work item or an explicit exclusion; no omission, duplication or contradiction], review:[a new report in <scratch> named review_brief]}`. FIX the findings and re-print the block before asking.
3. **Link the brief.**
4. **Ask with your question tool:** *Plan approval: do you approve the plan as briefed?* – **Approve** · **Adjust** – tell me what to change.
5. **On Approve** – put the brief, and every research report not yet there, in `<worklog>`, and record the work-log item's reference in `log:`.

A go-ahead given BEFORE the plan existed is direction, not approval. Loop until **Approve** (or an explicit post-plan yes via Other). *IF Adjust touches design inputs* → go back to the skill's DESIGN step.

---

## PLAN QUALITY GATES

✅ Route stated with its reason; on the agents route, the box answered (or its recommended values applied), every phase with its sub-brief and every unit with an estimate inside 600k tokens?
✅ Tooling table in the brief where it is open, otherwise in the reply; every missing tool surfaced before approval?
✅ The acceptance checklist comes first (in `§ PLAN` where the brief is open, otherwise in the reply), every item provable; work items sequenced with `progress:` keys; `§ WHAT-NOT-TO-DO` present (light: the checklist and the one-paragraph plan confirmed in prose); every `§ AGENDA` D-ID present in `§ PLAN` or `§ WHAT-NOT-TO-DO`?
✅ The summary block, ending with What I assumed and Most likely wrong, printed as message text BEFORE the approval question, the brief review passed where it was set, and approval given on the block (light: confirmed in prose)?
