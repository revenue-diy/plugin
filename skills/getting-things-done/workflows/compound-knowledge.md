# COMPOUND KNOWLEDGE

> **Version 1.11** | 2026-10-23

The wrap-up every skill shares: clearing away what this run created, capturing what this session learned that should outlive it, and the skill's rating. Read in full at the skill's WRAP-UP step, once documentation is final and the final report is in `<worklog>`. Part 1 runs BEFORE the report is delivered; part 2 runs in the SAME message, after the report text. `<skill-name>` is the calling skill's frontmatter `name`.

---

## PART 1: BEFORE THE REPORT – SILENTLY

**Clean up first, connector or not** – remove only what THIS run created, by you or an agent you sent; NEVER touch anything the user or another session made, or the AI app's own data (its session records, settings and caches). *IF this run created nothing* → go on to the connector check.
- **Keep** – the brief and every report until each is in `<worklog>`, and all of them where `<worklog>` is `<scratch>`; everything the skill's own steps say to keep (its state, its verdicts, the records of calls it sent – above all one not yet read back); and anything a later step of this run still needs, such as the brief for the connector check or a go-live after the report – clean that up by these rules once that step has run.
- **Temp files and folders** – `<scratch>` itself too, once nothing else is in it and no agent of this run still writes there: delete each by its full literal path, never with a wildcard or a force flag, and read it back gone. One holding a record not in `<worklog>` → move it first to the documentation store the context names; *IF none is named* → keep it. One in the user's own workspace, outside `<scratch>` → do not delete it now: ask about it in the closing question call (`§ PART 2` step 4), never in prose; with the connector absent there is no such call, so keep it.
- **Branches** – merge or close one only through the repository's normal review and merge path; delete it, locally and remotely, only once its work is merged, or abandoned on the word of the user or of its owner (whoever asked for that work; never this run or an agent it sent), recorded in `<worklog>`.
- **Worktrees and clones** – remove one only once its changes are committed and pushed, or discarded with the user's agreement.
- **Never act just to clear** – never commit, push or merge work in progress, or call your own branch abandoned, only so it can be removed.
- **Name what stays** – a branch still in review, a brief still `in_progress`, a record kept for a later step, a file kept in the user's own workspace: name each, with why, in the report and in `<worklog>`.

*IF the connector is absent* (the brief's `connector: absent`, or STEP 0's finding where no brief is open) → print "Skipping the compounding knowledge step – the Revenue.DIY MCP is not connected." The session ends on the report; no dialog follows and the rest of this file does not run.

1. **Sweep** – the candidates are facts from this session that pass the capture rule the context connector states in its instructions and its `submit_context` description, and were NOT already saved mid-session. Never anything personal or sensitive, never a preference of one user.
2. **Did anything keep going wrong?** – a failure or problem that recurred this session (a step that failed more than once, a fix that took several rounds, a tool that kept refusing) and is worth adding to the context system → it is a candidate too, written as the lesson.
3. **Read once** – *IF there is a candidate* → ONE `get_context` call: `{"skill": "<skill-name>", "files": [<every module a candidate would land in, named as the index lists them>]}`, carrying no `start`. Drop any candidate a returned module already holds; keep at most three, by value – two when the clean-up left a workspace question or kept a workspace file for a later step.

---

## PART 2: AFTER THE REPORT – SAME MESSAGE

4. **Ask** – in the SAME message as the report text, ONE call to your question tool, the session's last question: one single-select question per candidate – *"Save to the context system? – <the fact, in the user's words>"* with **Save** / **Skip** (the free-text "Other" is the user's own version, filed verbatim) – then, *IF the clean-up left a workspace question*, ONE question *"Delete what this run made in your workspace? – <each full path>"* with **Delete** / **Keep** – and, ALWAYS LAST, *"Skill rating: how did `<skill-name>` do this session?"* with **Good (⭐⭐⭐⭐)** / **OK (⭐⭐⭐)** / **Meh (⭐⭐)** / **Bad (⭐)**. This closing question does not by itself open a brief.
5. **Route the answers** – every Save in ONE `submit_context` call: `{"skill": "<skill-name>", "changes": [{"file": "<the module the index names>", "add": "<the fact>"}]}`; when unsure of the module, read the index first (`get_context` with `{"skill": "<skill-name>", "files": ["index"]}`). A rating the user gave in the rating question (an option, or a clear rating typed under "Other": one of the four ratings by name, or a star count or number on their 1–4 scale) → `rate_skill` with `<skill-name>` and that rating – *IF `rate_skill` is not in your tools* → search for it with your tool-search tool, the query the bare name `rate_skill`. A skill problem written under "Other" → `send_feedback` with `{"skill": "<skill-name>", "feedback": "<their words verbatim>", "bug": true | false}` – `bug` is true when something is technically broken. The workspace question: **Delete** → delete each path it listed, by its full literal path, never with a wildcard or a force flag, and read it back gone; any other answer, or none → delete nothing. An answer meaning no → that answer forwards nothing. No rating answer (the rating question not asked, skipped or unanswered), an unclear one, or praise, thanks or any other free text without a rating → no `rate_skill`; NEVER infer, default or carry over a rating. NEVER re-ask. `skill` on these calls attributes them to the skill and counts no session.

---

## GATE

✅ Clean-up run – everything this run created, `<scratch>` included, removed, kept by the **Keep** line, or named in the report with why it stays – then the rest run in full (connector present), or its skip line printed (connector absent)?
✅ `rate_skill` called only with a rating the user gave in the rating question – never inferred, defaulted or carried over?
