---
name: connector
description: The Revenue.DIY connector steps every skill shares – read one section at a time, only where a skill's stub names it.
origin: baseline
license: "Copyright Revenue DIY Ltd. Licensed under PolyForm Shield 1.0.0 – see LICENSE.txt in this folder. Use and adapt it for your own business; do not sell it or use it to provide a competing product."
version: "1.5"
generated: { at: "2026-09-19T01:55:00+01:00" }
type: skill-doc
---

# CONNECTOR

The context-system steps every skill shares. A skill reads ONE section here at the point its stub names it – never the whole file. Every skill runs in full without the connector; only these steps are skipped. `<skill-name>` is the calling skill's frontmatter `name`.

This file is the CANONICAL copy, synced into `workflows/connector.md` in every skill folder by `rdiy-runner/scripts/sync-files.js` – edit it here and nowhere else.

---

## DETECT

Run ONCE, at the skill's STEP 0, after the brief exists.

**The connector is PRESENT when `get_context` is in your tools.** *IF it is not listed* → it may be deferred or still connecting – two attempts, then stop: (1) `ToolSearch` for `select:get_context`; (2) *IF still missing* → do the next task step, then retry once. Only after both attempts fail is it ABSENT. Record `connector: present | absent` in the brief frontmatter – later stubs read it and never re-detect.

*IF PRESENT* → call `get_context` NOW: `{"skill": "<skill-name>", "log": "start", "files": [<the skill's staple files, PRINCIPLES.md always first>]}`. `log: "start"` fires ONCE per session – later fetches carry `skill` and `files`, never `log`. `skill` and `log` are telemetry only; they decide nothing about what returns.

*IF ABSENT* → print exactly this, then continue the skill on what the user gives you:
> Revenue.DIY MCP is not connected, so I can't reach your business context system. Working from what you give me. What it is and how to connect it: revenue.diy/mcp

That is the only link and the only explanation of the connector in the session. NEVER invent business facts; NEVER store a business fact anywhere else.

---

## CONVENTIONS

Run at the skill's PLAN step, before the plan is approved.

*IF ABSENT* → print "Skipping the work-log and documentation conventions check – the Revenue.DIY MCP is not connected." and plan with no work log. Record `worklog: none`.

*IF PRESENT* → ONE call: `{"skill": "<skill-name>", "files": ["OPERATIONS.md", "operations_work-log.md"]}` (add `operations_documentation.md` only when the task authors or edits documents). Then ONE test, on facts, recorded: *IF `operations_work-log.md` did not return, OR its stated scope names neither this repository nor this task type* → record `worklog: none` and write which of the two applied into brief `§ PLAN`. *ELSE* → record `worklog: required`, and the convention it states is the contract for the rest of the session: at PLAN create the work-log item with the brief as its body and put its reference in the brief's `log:` field; at EXECUTE and REVIEW log what it names; at WRAP-UP close it, commit and push exactly as it rules. Every report the session produces reaches the item through `§ LOG`, at each `§ LOG` stub this skill's tier carries and at the phase that produced it, never in one batch at the end; a light skill carries no stub and logs nothing – it creates the item at PLAN and closes it at WRAP-UP, and posts no report.

`worklog: required | none` is written to the brief frontmatter beside `connector:` HERE, once, and is never re-decided. It is what every `§ LOG` call reads.

---

## LOG

Run wherever a skill's stub names it, for the files that stub names. `<n>` is the work-log reference in the brief's `log:` field.

*IF `worklog: none`* → print "Skipping the report log – no work-log convention applies to this task." ONCE in the session, then continue. No `logged:` line is required anywhere.

*IF `worklog: pending`* (`§ CONVENTIONS` has not run yet, so no work-log item exists) → record nothing and post nothing; these files log at the first `§ LOG` call after `log:` is set, and nothing is dropped.

*IF `worklog: required`* → FOR EACH file, in the order given:

1. **Skip what is already logged** – *IF brief `§ PROGRESS TRACKING` already carries a `logged: <file> →` line* → do nothing for that file. The step is idempotent: a re-run posts nothing twice. A named file that does not exist on disk is skipped silently – it was never produced.
2. **Build the body** – copy the file to `<scratch>/log_<file name>` with ONE header line first: `<work item or phase> – <file name>`. *IF the body exceeds 60,000 characters* (the platform rejects a comment over 65,536) → split it into `<k>` parts at the last heading boundary that falls inside the budget, or at a line boundary where no heading does, each part repeating the header with ` (part <i> of <k>)`.
3. **Post it** – ONE comment per body, parts in order: `gh issue comment <n> --repo <owner>/<repo> --body-file <body>`.
4. **Record it** – append a `logged: <file> → <comment url>` entry to brief `§ PROGRESS TRACKING` – as its own line or as a list item under a dated block – one per file (a split file records its first part's url). *IF you edit the brief with code* → use a function replacer or split and join, never a replacement string built from free text.

A report that exists only in the session's scratch folder is not logged.

---

## CLOSE

Run at the skill's WRAP-UP, after documentation is final and the final report has been logged, and BEFORE the report is delivered to the user.

*IF ABSENT* → print "Skipping the compounding knowledge step – the Revenue.DIY MCP is not connected." The session ends on the report; no dialog follows.

*IF PRESENT:*
1. **Close the run** – ONE call, never conditional: `{"skill": "<skill-name>", "log": "end", "files": ["OPERATIONS.md", "operations_work-log.md", <every module a candidate below would land in>]}`. Follow the work-log convention for WRAP-UP.
2. **Sweep silently** – candidates are facts from this session that pass the capture rule the Revenue.DIY MCP states in its instructions and `submit_context` description, and were NOT already saved mid-session. Drop any fact the returned modules already hold. Never anything personal or sensitive, never a preference of one user.
3. **Ask, after the report** – in the SAME message as the report text, ONE `AskUserQuestion`: one single-select question per candidate (at most three, by value) – *"Save to the context system? – <the fact, in the user's words>"* with options **Save** / **Skip** (the free-text "Other" is the user's own version, filed verbatim) – and, ALWAYS LAST, *"Skill rating: how did `<skill-name>` do this session?"* with **Good (⭐⭐⭐⭐)** / **OK (⭐⭐⭐)** / **Meh (⭐⭐)** / **Bad (⭐)**.
4. **Route the answers** – every Save in ONE `submit_context` call: `{"changes": [{"file": "<the module the index names>", "add": "<the fact>"}]}` – read the index (`get_context` with `files: ["index"]`) when unsure of the module. A rating → `send_feedback` `{"rating": 4|3|2|1}`. A skill problem written under "Other" → `send_feedback` `{"content": "<their words verbatim>", "bug": true}` when something is technically broken, without `bug` otherwise. A reply meaning no → nothing forwarded. NEVER re-ask.
