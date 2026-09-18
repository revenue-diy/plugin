# GETTING-THINGS-DONE – ACCEPTANCE CRITERIA

> **Version 0.8** | 2026-09-15

What GOOD output looks like for any task run through `getting-things-done`. Every line is pass/fail WITH EVIDENCE – the judge quotes the output (or states "none found" after checking), never scores on impression. Dual-consumer: the skill's own `§ STEP 4: REVIEW` scores real output against it AND eval graders score test output against it.

1. **Grounded in the business context** – claims about the business trace to a context module served by the Revenue.DIY connector, or to user-provided input; no fabricated facts, numbers or tools. Evidence: name the module (or the user turn) behind each load-bearing claim – or the fabricated line, expect none.
2. **Delivers the locked design** – the output matches the `design inputs` agreed at DESIGN (task & goal, output shape + location). Evidence: name each design input and where the output satisfies it.
3. **Real substance** – a genuine insight, decision, or action the reader needs; not filler dressed up as finished work. Evidence: quote the core insight/decision (or the filler, expect none).
4. **Brand mechanics** *(written content, connector present)* – the voice, spelling and punctuation rules the brand context states, applied exactly as it states them. Evidence: list every violation found (expect zero); absent connector: "not applicable".
5. **Trade-offs surfaced, not buried** – where the task involved a decision, options carry honest trade-offs and a clear recommendation; a not-worth-doing verdict is stated plainly when reached. Evidence: quote the recommendation line.
6. **Output landed where agreed** – delivered at the `Output` design input's location (tool > file > response block), not scattered. Evidence: the landing path/location.
7. **Session opened with STEP 0** – `brief.md` was created first (with `steps`, `progress`, `connector` and `log` keys), then `connector § DETECT` ran: with the connector present the opening `get_context` carried `skill` and `log: "start"`; absent, the single fixed line was printed – before any prose either way. Evidence: quote the brief header and the call (or the line), in the order they happened.
8. **Report preceded the feedback dialog** – the full report text reached the user BEFORE the one `AskUserQuestion` (per-candidate save questions, then the rating), in the same turn; any Save was filed via `submit_context`; with the connector absent the skip line printed and no dialog followed. Evidence: quote the report's closing line and the call or the skip line that follows it.
9. **Decisions carried into the brief** *(tasks with a brief)* – the brief restates every decision in full under its stable `D<n>` ID, its `progress:` frontmatter carries one flat key per work item, and every plan item names the D-IDs it implements. Evidence: quote the DECISIONS heading, two restated IDs and one item's ID list (`simple task`: "not applicable").
