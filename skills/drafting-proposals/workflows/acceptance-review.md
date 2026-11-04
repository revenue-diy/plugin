# ACCEPTANCE REVIEW

> **Version 1.12** | 2026-11-04

How every skill proves its output meets its acceptance checklist. Read in full at the skill's REVIEW step. That step names this skill's own parts: its checks, any test or eval run and where it runs, and the final reviewer's model, rubric and announce noun. Everything else runs as written here.

Cheaper checks first; never self-certify a fix – re-run the failed check, a P3 fix aside (`§ ROUTE FINDINGS`); never review your own work alone.

---

## THE ACCEPTANCE CHECKLIST

The plan opened with the acceptance checklist – in the brief's `§ PLAN` where the brief is open, otherwise in the reply: `- [ ] A<n> <criterion>`, one provable line each. A review pass ticks it item by item, ONE checklist per pass:
- `- [x] A<n> <criterion> – <proof>` – the proof is an observation (output, a file and line, a link that opens, a quote), never "done";
- `- [ ] A<n> <criterion> – OPEN: <what is missing>`;
- closed by `Verdict: all <n> met` or `Verdict: <m> of <n> open`.

**No proof, no tick** – an item's proof is written beside it before it is ticked. *IF an item is ticked with no proof, or with one that is not an observation* → it is open, wherever the checklist is read: rewrite it `- [ ] A<n> <criterion> – OPEN: no proof` in your own record and count it in the verdict.

The final review writes the checklist, every item, one by one; an unticked item is a P1. The final independent review writes it where one runs; *ELSE* your own integrated review writes it.

---

## SELF-CHECK

1. **This skill's checks first** – the ones its REVIEW step names, cheapest first; a scripted check gates on its exit code.
2. **Then, always** – output landed where agreed; references and paths sane; **decision distribution** – every D-ID → the work item that implemented it or an explicit exclusion – the table is built, never assumed; every acceptance line passes with evidence.

*IF a check fails* → trivial → fix and re-run; else → go back to the skill's EXECUTE step, fix, and re-run this review.

**Self-tick path** – *IF this skill is `tier: light`, or its REVIEW step names a simple path this run is on* → tick the acceptance checklist yourself in the format `§ THE ACCEPTANCE CHECKLIST` sets, item by item, with its proof, and deliver it with the output – the user is the independent check; iterate on their feedback, re-ticking what changed. On a simple path with the brief open, also put the ticked checklist in `<worklog>`; a light skill posts no report. Then go to the skill's WRAP-UP step; the rest of this file does not run.

---

## INDEPENDENT REVIEW

*IF the plan's Reviews setting includes the final review* → dispatch `revenue-diy:reviewer` on the INTEGRATED whole, its target cut into units by `workflows/plan.md` § 5 item 3 like any other work – ONE reviewer per unit, a whole that fits one unit going to ONE reviewer – announce **`Reviewer (<model>): <the announce noun the skill's REVIEW step names>`** – with `{brief:[the work-log item, or brief.md], task:[its acceptance checklist – review the integrated whole, or this unit's part and the seams given to it, against the rubric and tick every item given to it, in the format § THE ACCEPTANCE CHECKLIST sets], target:[the integrated artefacts], rubric:[the rubric the skill's REVIEW step names + the acceptance checklist and its tick format, verbatim], review:[a new report in <scratch> named review_final], context_files:[the modules the rubric rests on]}`. The model and any effort are the ones the plan set for reviews, else the default the skill's REVIEW step names. A re-run's report is named `review_final_<k>`. With several units, write the cut – in `§ PLAN` where the brief is open, otherwise in the reply – before any unit goes out: the units together cover the whole target (for a code change, the whole diff), every changed file in exactly one unit; every seam – an interface one unit changes and another reads – is named and given to exactly one unit; every checklist item `A<n>` is given to exactly one unit. Every unit is a reviewer that did not build the work, on the model and any effort set for reviews. Each unit reviews its part and the seams given to it, ticks exactly the items given to it, and names its report `review_final_u<n>` (its re-run `review_final_u<n>_<k>`). Together the unit reports are the pass's one checklist: an item no unit ticked is a P1.

THEN, always: review the INTEGRATED whole yourself against the brief – seams, consistency, decision distribution. *IF per-phase or per-item reviews ran* → your pass is about the seams rather than the pieces. *IF no independent review ran* → say so at WRAP-UP, so the user knows what the output was and was not judged by.

---

## ROUTE FINDINGS

P1 blocks · P2 should fix · P3 nice.

**Class every finding SURFACE or TOOLING.** SURFACE is the thing being shipped; TOOLING is what helped build or prove it – test harnesses, proving scripts and test helpers. A TOOLING finding is P3 by default; a tooling defect that hides a surface defect makes the hidden surface defect the finding, classed SURFACE at its own severity, and a surface defect is never down-rated because the tooling found it. Weak evidence that a check ran – a bare "checked by hand", no screenshot or log, a check script that crashed – is TOOLING, P3, when the shipped surface is verified correct; it is SURFACE only when it leaves a surface defect unfound.

- **Wrong or missing runtime inputs** → fix, re-run.
- **Impeaches a locked input** → STOP and report to the user.
- **P1 / P2** → fixed per the skill's Execution rules, then the final review re-runs in full.
- **P3** → fixed straight away, with no re-review.
- **Outside this work's acceptance** → a follow-up, named in the report and put in `<worklog>`, never left only in a review report.

**An edit after the final review re-runs it** – any change to the output after the final review but a P3 fix, by a worker or by you, runs the final review again, in full, before the report: round after round, while it finds a P1 or P2. A P3 or a point the final review raises may be fixed by you rather than its agent.

Log every review with `F<n>` IDs, classes and verdicts – in the brief's `§ REVIEW RESULTS` where the brief is open, otherwise in the reply.

---

## RECORD THE REVIEW

When the routing closes, write your own integrated review – with the ticked checklist where you wrote it – and put it in `<worklog>`, then every final review report, the last pass last: here, where they are written, not at WRAP-UP.

---

## REVIEW QUALITY GATES

✅ Self-checks pass, decision table built, your own integrated review done?
✅ Every finding fixed – a P1 or P2 re-reviewed – or named as a follow-up; all logged as `F<n>`; every review report in `<worklog>`?
✅ The last pass's acceptance checklist – across all its unit reports where the review was cut – covers every item exactly once, each ticked with its proof or named as open, and no edit to the output but a P3 fix came after it?
