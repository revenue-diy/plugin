# ACCEPTANCE REVIEW

> **Version 1.2** | 2026-10-12

How every skill proves its output meets its acceptance checklist. Read in full at the skill's REVIEW step. That step names this skill's own parts: its checks, any test or eval run and where it runs, and the final reviewer's model, rubric and announce noun. Everything else runs as written here.

Cheaper checks first; never self-certify a fix – re-run the failed check; never review your own work alone.

---

## THE ACCEPTANCE CHECKLIST

The plan opened the brief's `§ PLAN` with the acceptance checklist: `- [ ] A<n> <criterion>`, one provable line each. A review pass ticks it item by item, ONE checklist per pass:
- `- [x] A<n> <criterion> – <proof>` – the proof is an observation (output, a file and line, a link that opens, a quote), never "done";
- `- [ ] A<n> <criterion> – OPEN: <what is missing>`;
- closed by `Verdict: all <n> met` or `Verdict: <m> of <n> open`.

The final review writes it, every item, one by one; an unticked item is a P1. The final independent review writes it where one runs; *ELSE* your own integrated review writes it.

---

## SELF-CHECK

1. **This skill's checks first** – the ones its REVIEW step names, cheapest first; a scripted check gates on its exit code.
2. **Then, always** – output landed where agreed; references and paths sane; **decision distribution** – every D-ID → the work item that implemented it or an explicit exclusion – the table is built, never assumed; every acceptance line passes with evidence.

*IF a check fails* → trivial → fix and re-run; else → go back to the skill's EXECUTE step, fix, and re-run this review.

**Self-tick path** – *IF this skill is `tier: light`, or its REVIEW step names a simple path this run is on* → tick the acceptance checklist yourself in the format `§ THE ACCEPTANCE CHECKLIST` sets, item by item, with its proof, and deliver it with the output – the user is the independent check; iterate on their feedback, re-ticking what changed. On a simple path, also put the ticked checklist in `<worklog>`; a light skill posts no report. Then go to the skill's WRAP-UP step; the rest of this file does not run.

---

## INDEPENDENT REVIEW

*IF the plan's Reviews setting includes the final review* → dispatch ONE `revenue-diy:reviewer` on the INTEGRATED whole – announce **`Reviewer (<model>): <the announce noun the skill's REVIEW step names>`** – with `{brief:[the work-log item, or brief.md], task:[its acceptance checklist – review the integrated whole against the rubric and tick every item in the format § THE ACCEPTANCE CHECKLIST sets], target:[the integrated artefacts], rubric:[the rubric the skill's REVIEW step names + the acceptance checklist and its tick format, verbatim], review:[a new report in <scratch> named review_final]}`. The model is the one the plan set for reviews, else the default the skill's REVIEW step names. A re-run's report is named `review_final_<k>`.

THEN, always: review the INTEGRATED whole yourself against the brief – seams, consistency, decision distribution. *IF per-phase or per-item reviews ran* → your pass is about the seams rather than the pieces. *IF no independent review ran* → say so at WRAP-UP, so the user knows what the output was and was not judged by.

---

## ROUTE FINDINGS

P1 blocks · P2 should fix · P3 nice.
- **Wrong or missing runtime inputs** → fix, re-run.
- **Impeaches a locked input** → STOP and report to the user.
- **P1 / P2** → fixed per the skill's Execution rules, then this review re-runs.
- **P3** → a trivial fix, or reported at WRAP-UP.
- **Outside this work's acceptance** → a follow-up, named in the report and put in `<worklog>`, never left only in a review report.

Log every review in the brief's `§ REVIEW RESULTS` with `F<n>` IDs and verdicts.

---

## RECORD THE REVIEW

When the routing closes, write your own integrated review – with the ticked checklist where you wrote it – and put it in `<worklog>`, then every final review report, the last pass last: here, where they are written, not at WRAP-UP.

---

## REVIEW QUALITY GATES

✅ Self-checks pass, decision table built, your own integrated review done?
✅ Every finding fixed and re-verified, or named as a follow-up; all logged as `F<n>`; every review report in `<worklog>`?
✅ The last pass's acceptance checklist covers every item, each ticked with its proof or named as open?
