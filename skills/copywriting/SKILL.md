---
name: copywriting
description: "Writes and sharpens on-brand copy in the user's voice, ready to send. Load it first whenever they want copy written, polished or tightened, however short: a LinkedIn or social post, newsletter, announcement, article or blog post, an email, message or reply, a customer letter, a headline, a page section, a profile or collateral. Works from rough notes, a brief, only an idea or a draft, even a stiff or AI-sounding one. Includes their own text for any reader: an email, message or follow-up to a prospect or customer, made clearer, warmer, shorter or less pushy. Not for sequences, proposals, page layouts, lists of ideas or angles, one-off letters or explanations of a contract, commercial terms or a decision, or planning what to write and when."
job: Write any on-brand piece meant for an audience – a post, an email, an announcement, a page section, an article – from an idea, a brief, notes or a draft, or sharpen existing text so it sounds like the user.
tier: light
status: built
origin: baseline
license: "Copyright Revenue DIY Ltd. Licensed under PolyForm Shield 1.0.0 – see LICENSE.txt in this folder. Use and adapt it for your own business; do not sell it or use it to provide a competing product."
version: "0.9"
generated: { at: "2026-10-19T04:03:29+01:00" }
type: skill
---

After a compaction, ALWAYS re-read this SKILL.md in full, read the workflow file of the step you are in, and reload your context: `get_context` with `{"files": ["PRINCIPLES.md", "OPERATIONS.md", "BRAND.md", "MESSAGING.md"]}`.

# COPYWRITING

---

## CRITICAL RULES

✅ **ALWAYS write WITH the user** – collaborative by default: angles offered, the piece drafted in sections, refined on their feedback. A finished piece in one go only when they gave clear direction and asked for one.
✅ **ALWAYS take voice and substance from the business context and the user** – every fact, number, name, quote and claim traces to a context file or the user's own material; a gap is marked `[SOURCE NEEDED]`, never invented.
✅ **ALWAYS keep every decision labelled** – `D<n> (topic) – text`, never a bare ID.
❌ **NEVER hand over a finished piece without the brand-rule scan** – the first delivery and every revision, over the full text, as `§ STEP 4: REVIEW` sets it.
❌ **NEVER weaken a check to pass it** – a failing test, validator or acceptance line is fixed in the work, never loosened, skipped or reworded to go green.
❌ **NEVER persist a business fact outside the context system** – no local files, no memory tools; the connector is the only save path.
❌ **NEVER edit a file through a replacement STRING built from free text** – a function replacer or split and join, always (a dollar sign in a replacement string is read as an instruction, not as text).
❌ **NEVER send, post or publish** – the piece lands as a draft (in a connected tool's drafts, a file or the reply); the user sends it.

---

## STEP 0: SETUP

Connect first, before any prose, answer, search or other work. The brief follows only when the task needs one (`§ OPEN THE BRIEF`).

### 0.1 CONNECT

**The connector is present when `get_context` is in your tools.** *IF it is not listed* → it may be deferred or still connecting, so make two attempts, then stop: (1) search for it with your tool-search tool, the query the bare name `get_context`; (2) *IF still missing* → retry once before your first reply; where the brief is already open, its `connector:` and `worklog:` read `pending` until the retry lands. Only after both attempts fail is it absent.

- *IF present* → call `get_context` NOW with this skill's staple files: `{"skill": "copywriting", "start": true, "files": ["PRINCIPLES.md", "OPERATIONS.md", "BRAND.md", "MESSAGING.md"]}`. `start: true` fires ONCE per session, on this call; later calls carry `skill` and `files`, never `start`.
- *IF absent* → print exactly this, then work from what the user gives you – NEVER invent a business fact:
  > Revenue.DIY MCP is not connected, so I can't reach your business context system. Working from what you give me. What it is and how to connect it: revenue.diy/mcp

**Context pointers:** a context file this skill names – a staple, or a file `OPERATIONS.md` points to – is read with `get_context` with `{"skill": "copywriting", "files": ["PRINCIPLES.md", <that file>]}` when it is not already in your context.

**Set the two homes** – once, here; every later step uses them and never re-decides them:
- **`<scratch>`** – one task folder, `<YYYY-MM-DD>_<task>`, wherever this session already writes its scratch files on this surface; NEVER inside a skill, plugin or agent folder. The brief, the working files and every agent report go here. Its full path goes into the brief and into every agent dispatch.
- **`<worklog>`** – *IF present AND `OPERATIONS.md` names a work log for this task* → that work log, used as `OPERATIONS.md` instructs; *ELSE* → `<scratch>`. "Put it in `<worklog>`" in any later step means exactly this; when `<worklog>` is `<scratch>`, the file is already there. *IF the work log can't be reached when something is due there* → keep it in `<scratch>` and carry on; put it in `<worklog>` once it can be reached.

### 0.2 OPEN THE BRIEF

**Open the brief the moment the task needs a question to the user, runs past one turn, or sends out an agent. A task done in one turn from the user's own words needs none.** One brief, `<scratch>/brief.md`, as short as the task needs – the session's single record and the file a fresh session resumes from:

```yaml
---
task: [kebab-task]
skill: copywriting
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
4. *IF context compresses* → READ the brief, where it is open – `brief.md`, and the work-log item's body where that holds the sections – and continue from the first step or work item not completed. *IF the session comes back after a usage limit, a seat switch or a restart* → READ the brief the same way, where it is open, then check its agents and work items in flight per the context system's rule, as written in `OPERATIONS.md` (`get_context` with `{"skill": "copywriting", "files": ["PRINCIPLES.md", "OPERATIONS.md"]}`), and resume only what it says to – never resume outright. *IF it holds no such rule, or the connector is absent* → check each agent and work item in flight yourself (still running, finished or lost), then continue from the first one not completed.

---

## STEP 1: DESIGN

Goal: **full alignment on every `design input`**. Facilitate the user's thinking – research unknowns, ask sharp questions, give trade-offs at equal depth, play devil's advocate.

### 1.1 LOAD THE COPY CONTEXT

*IF the connector is present* → ONE `get_context` call, `{"skill": "copywriting", "files": ["PRINCIPLES.md", <the files this piece needs>]}`, naming only what the piece needs beyond the staples: `ICP.md` (the reader and the words they use), `OFFERING.md` (the product, its price, what is promised), `MARKET.md` (a competitor or category claim) – and a deeper module only where a loaded pillar file, or the index under it, points at one for this piece (a channel's tone, a phrase bank, the design rules), named as the index lists them. Each is `optional`: absent → the missing-input note in `§ REVIEW DESIGN INPUTS`.

### 1.2 REVIEW DESIGN INPUTS

| `Design Inputs` | Tier | Notes |
|---|---|---|
| **The piece** | MUST-HAVE | what is written – its format and channel (a post, an email, a one-to-one message, an article, a page section, a headline) – and its length or limit |
| **Reader and goal** | MUST-HAVE | who reads it, and the one thing they should think, feel or do after it |
| **Angle** | MUST-HAVE | the one main idea and its stand – offer 2 to 4 angles from the user's material and the context, never from thin air; a brainstorming shortlist the user brings supplies the options |
| **Raw material** | MUST-HAVE | the draft, notes or facts the piece is built from – every claim it makes traces here or to the context; `must-get`: ask for what is missing |
| **Output** | NICE-TO-HAVE | where the piece lands – default the reply; a draft in a connected tool (by tag against the tool map: `email`, `email-marketing`, `cms`) or a file in the project when the user names one. The tool is `optional`: missing or unreachable → the next landing down |
| **Visual** | NICE-TO-HAVE | an on-brand image prompt, for a piece that will carry an image – default none |
| **Edge cases** | NICE-TO-HAVE | what the output must survive – a claim with no source, a limit the message cannot fit, a request outside the job – settled here, not found at review |

`MUST-HAVE` = the design is incomplete without it. `NICE-TO-HAVE` = a default is acceptable.

**Missing-input note:** where a step's quality drops for lack of an input, say so ONCE and specifically (*"no brand voice on file, so the draft follows your own words"*). *IF the connector is present* (`§ CONNECT`'s finding, with or without a brief) → name the context system as where to add it. *IF it is absent* → say nothing more. Never note an input the user supplied in this session.

*IF EDITING an existing artefact* → re-open only the inputs the change touches.
A choice the user hands over ("you work out…", "your call") is not missing: it is the session's to make, recorded as a `D<n>` line with its reason – and when every `MUST-HAVE` is answered in the user's words, the design-clear rule below still gives `D1 (design clear)`.
*IF EVERY `MUST-HAVE` input is already answered – in the user's own words, this session or in the work-log item the task started from, or by the artefact being edited* → write `**D1 (design clear)** – every MUST-HAVE input already answered: <one clause per input naming where>` into the brief's `§ DECISIONS` where the brief is open, state that line to the user either way, and GO to `§ STEP 2: PLAN`; *IF the user also asked for the finished piece outright, or asked to tighten a short draft they brought* → FLAG `finished piece` in that line. A `MUST-HAVE` you would have to infer is not answered. *ELSE* → run `§ READ & EVALUATE`, then `§ RESEARCH AND INTERVIEW`.

### 1.3 READ & EVALUATE

1. **Analyse targets** – read the user's draft, notes or brief in full (never from memory).
2. **Check direct references** – one hop max: a page, an earlier piece or a thread they point to.
3. **Find related files** – earlier pieces on the same topic or channel in the project folder; one that landed well is a style reference.
4. **Check freshness** – *IF a dated fact looks stale* (a price, a statistic, a date) → flag it and offer to refresh it.
5. **List the facts the piece needs** – each claim the angle rests on, with its source: the user, a context file, or missing.

### 1.4 RESEARCH AND INTERVIEW

READ `workflows/design-interview.md` NOW – NEVER skip this step.

### DESIGN STAGE QUALITY GATES

✅ `design clear` recorded as a D-ID – or targets read in full and every gate in `workflows/design-interview.md` passed; every fact the piece needs has a source in the user's material or the context, or is named as missing?

---

## STEP 2: PLAN

READ `workflows/plan.md` NOW – NEVER skip this step. `§ THIS SKILL'S PART` runs on top of it.

### 2.1 THIS SKILL'S PART

- **The craft** – READ `assets/good-writing-principles.md` NOW – NEVER skip this step – with the format track for this piece: `assets/short-form-conventions.md` (posts, social, headlines and hooks), `assets/long-form-conventions.md` (articles, newsletters, pages and page sections) or `assets/1-1-message-conventions.md` (an email or message to one person). *IF the piece has to persuade* (a page, an offer, a cold message, a headline) → READ `assets/copy-frameworks.md` NOW – NEVER skip this step – and name the framework in the plan, or say that none fits.
- **The acceptance checklist** – READ `assets/checklist.md` NOW – NEVER skip this step: its lines that apply to this piece, plus the piece's own – its limit, its call to action, any line it must carry.
- **Work-item fields** – the work items are the piece's sections in reading order (hook, body, close, call to action), each naming the job it does for the reader; the image prompt is one more item where the `Visual` input is on. On `finished piece` the whole piece is one item.
- **Autonomy boundaries** – collaborative: stop after each section for the user's reaction before the next. `finished piece`: draft the whole piece, stop at delivery.
- **Simple path** – `finished piece`: the plan is the acceptance checklist and one line (in `§ PLAN` where the brief is open, otherwise in the reply), not confirmed first – the user's ask is the go-ahead; its **What I assumed** and **Most likely wrong** lines go out with the piece. Put the brief, where open, in `<worklog>` and GO to `§ STEP 3: EXECUTE`.
- **Simple-path checklist** – on every run, the acceptance checklist goes to the user numbered `A1…An`, and the self-tick ticks every item as `- [x] A<n> <criterion> – <proof>` (or `- [ ] A<n> <criterion> – OPEN: <what is missing>`), never a sweep. A fact the piece needs is read from the file the served index lists for it before it is called unknown: a limit on which facts the user wants shown never limits which files are read to state them correctly.

### PLAN STAGE QUALITY GATES

✅ Every gate in `workflows/plan.md` passed (`finished piece`: the checklist and the one-line plan written); the format track read, and a framework named or ruled out where the piece persuades?

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
7. **Fix rounds** – a P1 or P2 finding is fixed, then the check that found it re-runs, writing a new report, never over a finished one. **Three failed fix rounds on one finding → stop and ask the user**, naming what was tried. Work you did yourself, you fix.

### 3.1 DO THE WORK

Do every work item yourself, in sequence – the simplest solution that meets the brief, or the agreed plan where no brief is open. Close each per execution rule 5.

1. **Draft** – to the track, the principles and any framework read at PLAN; *IF a compaction has dropped them* → READ them again NOW – NEVER skip this step. Collaborative: one section per turn, shown with the job it does; take the user's reaction before the next, and offer 2 to 4 variants where the choice is theirs (the hook, the call to action). These stops are the plan's autonomy boundary, not a pause under execution rule 2, and a section shown with its job and variants is the work, not commentary under rule 3. `finished piece`: the whole piece in one go. Keep the piece in `<scratch>/draft.md`, each section written there as it is agreed; its evidence line names the file.
2. **Work on their words** – a draft the user brought is edited, never replaced: keep their voice and their best lines. Apply the editorial lenses in `assets/good-writing-principles.md` and keep a change log, each change keyed to its lens.
3. **Refine on feedback** – change what they asked for and keep the rest; feedback that moves the angle, the reader or the piece is a late topic (execution rule 6).
4. **Image prompt** – *IF the `Visual` input is on* → READ `assets/visual-prompting.md` NOW – NEVER skip this step – and build the prompt from the design rules `BRAND.md` states – and the design module it points at, read as `§ LOAD THE COPY CONTEXT` names a deeper module, when it is not already in your context. Prompt-craft only: the prompt is the deliverable and the user runs it in their own image tool – never say or imply that this skill makes the image.

### EXECUTE STAGE QUALITY GATES

✅ Every work item implemented and verified against its acceptance lines (evidence read)?
✅ Every work item closed with an evidence line – its `progress:` key `true` where the brief is open – and the piece current in `<scratch>/draft.md`?
✅ Every reaction the user gave is in the piece, and every claim has its source or a `[SOURCE NEEDED]` mark?

---

## STEP 4: REVIEW

Goal: **prove the output meets every acceptance line**.

READ `workflows/acceptance-review.md` and `assets/checklist.md` NOW – NEVER skip this step. This skill's parts of it:

### 4.1 SELF-CHECK

1. **Brand-rule scan** – on the FULL text of every version you hand over, first or revised. Search, never skim – a rule you can recite is not a rule you kept. Search `<scratch>/draft.md` for each category's literal tells – with a search or code tool where one is in your tools, else line by line – against the rule `BRAND.md` states (and any voice module loaded with it). *IF `BRAND.md` states no rule for a category* → READ `assets/good-writing-principles.md` NOW – NEVER skip this step – and take that category's line in its `§ DEFAULT AI TELLS`; none there and no fallback in the category's own line → log `<category> – no brand rule`.
   - **Em dashes** – the em dash character (U+2014) and a spaced double hyphen.
   - **Anti-AI patterns** – "it's not X, it's Y" flips, throat-clearing openers, lists and runs of exactly three, banned and hype words.
   - **Pronoun rule** – how the business refers to itself (for example "I", never "we"): every first-person pronoun.
   - **Spelling variant** – the brand's (for example British English, `-ise`, `-our`, `-re`), else the user's own: search for the other variant's endings.
   - **Any other rule a search can check** – a banned word, an emoji limit, how a brand term is written.

   Fix every hit to its rule. Log one line per category – `<rule> – pass`, `<rule> – fixed <n>: <what changed>` or `<category> – no brand rule` – and re-run the scan after fixing, until nothing is left.
2. **Mechanical** – the track's form: within the limit, the planned structure, a call to action where the plan has one; every `[SOURCE NEEDED]` listed.
3. **Quality** – **anti-workslop**: does it say something the reader needs, or only sound finished? Then the panel of critics: re-read it as the reader, as a sceptical expert on the topic, and as the brand's editor; fix each objection, or name it.
4. **Land** – once the scan passes on the text as it now stands (re-run item 1 after any fix from items 2 and 3), put the piece at its `Output` landing (a revision updates the same draft or file) and confirm it is there: the draft or the file opens, or the text is in the reply. Never sent or published.

The scan log, and the change log where the user's draft was refined, go out with the piece and its ticked checklist – every item ticked as `- [x] A<n> <criterion> – <proof>` (or `- [ ] A<n> <criterion> – OPEN: <what is missing>`), one by one, never a sweep.

### REVIEW STAGE QUALITY GATES

✅ This skill's checks passed – the last scan log shows every category `pass` or `no brand rule` on the full final text, and the piece at its landing?
✅ Every gate in `workflows/acceptance-review.md` passed?

---

## STEP 5: WRAP-UP

Goal: **hand off, close the run, capture what should outlive the session.** Order is mechanical.

### 5.1 FINALISE

1. **Confirm the landing** – the last version handed over is at its `Output` landing; never sent or published.
2. **An open item stops the wrap-up** – *IF the last acceptance checklist has an open item* → fix what can be fixed now (GO back to `§ STEP 3: EXECUTE`); whatever is still open is named in the report and in `<worklog>`; the work-log item, where one exists, stays open, and the brief, where open, stays `in_progress`. *ELSE* → where the brief is open, set its `status: completed`.
3. **Close the work-log item** – *IF `<worklog>` is a work log and holds an item for this run* → close it as `OPERATIONS.md` instructs. That is the item this skill created or adopted at PLAN.
4. READ `workflows/compound-knowledge.md` NOW – NEVER skip this step – and run its `§ PART 1: BEFORE THE REPORT – SILENTLY` now.

### 5.2 REPORT TO USER

One message: **output** first – the final text, ready to copy, when the reply is its home, else where it landed · **work done** (problems) · **review results** (the last scan log's verdict, the feedback rounds, the acceptance checklist's verdict) · **follow-ups** (open acceptance items first; every `[SOURCE NEEDED]`; an image prompt, where the piece will carry an image and none was made; then, only where the piece clearly feeds a bigger job, ONE dismissable line naming its skill – `managing-content` to plan what to write next, `designing-landing-pages` for its page, `building-campaigns` for a sequence – handing over the piece as a file, never calling that skill).

### 5.3 FEEDBACK

In the SAME message, after the report text, run `workflows/compound-knowledge.md § PART 2: AFTER THE REPORT – SAME MESSAGE`: its one call to your question tool is the last of the session.

### WRAP-UP STAGE QUALITY GATES

✅ The piece landed where agreed; the brief, where open, `completed` – or `in_progress` with every open acceptance item named; the work-log item, where one exists, closed as `OPERATIONS.md` instructs, or left open saying what is open?
✅ Report delivered BEFORE any dialog?
✅ `workflows/compound-knowledge.md` run in full, or its skip line printed?
