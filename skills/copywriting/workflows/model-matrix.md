# MODEL MATRIX

> **Version 1.1** | 2026-11-01

The one source of the recommended model and effort for every task a skill gives an agent; skills and briefs point here and restate none. Read in full at the skill's DESIGN and PLAN steps, beside the design interview and the plan step; the orchestrating session picks each task's row by its difficulty.

| Row | Holds when | Model, effort |
|---|---|---|
| `complex` work | ANY one: it is judgement, core content or a design; it is a count a decision will rest on; it acts on a live system. For work that is not code, also ANY one: it changes logic where a mistake costs money, exposes or deletes personal data, reaches real people, opens a security boundary or silences an alert; it settles a behaviour by reading a platform's own source; it is a proof with no exact expected answer that would pass silently if misread; it is a first build, with no template to follow | Opus, `high` |
| `code` work | its deliverable is code, even a first build or code that meets a `complex` trigger for work that is not code; code that is ALSO judgement (its real output is the behaviour it settles, not the code), core content, a design, a count a decision will rest on or a live action is `complex` | Opus, `medium`; its redo: **Code redo** |
| `mechanical` work | ALL three: it follows a written or approved source; it changes no logic, workflow, test or tool; and a test or validator would catch a mistake | Sonnet, `high` |
| review | ALL the reviewed work is `mechanical` work or checks | Opus, `low` |
| review | the reviewed work touches money, customer data, security, or an alert that must never be silent | Opus, `max` where the surface offers it, else `xhigh` |
| review | any other review, such as code | Opus, `high` |
| check | confirming an exact expected answer: files moved, a count, a hash, a deletion | Sonnet, `high` |
| research | every run | Sonnet, `high` |
| test run | every run; `medium` for a script-run or read-only scenario, else `high` | Sonnet, `medium` or `high` |

- **Ties go up:** *IF a unit could be `complex` and another row, or fits no row* → it is `complex`; *IF it could be `code` and `mechanical`* → it is `code`; *IF more than one review line applies* → the higher effort holds.
- **Code redo:** *IF a `code` unit's own tests or validator fail, or its review finds a P1 or P2* → its fix round goes to a new agent on Opus, `high`, working from the findings, never as a message to the failed agent.
- **Haiku** runs only when the user picks it.
- **Levels by surface:** *IF a surface lacks a row's level* → use the next lower level it offers (Claude Code does this itself). Agent and skill frontmatter and the dispatch take `max`.
- **Best fit, the recommended option, in the user's words:** Opus at high effort for judgement, design, core content and live work, and for other risky work that is not code; Opus at medium effort for code, risky code and first builds included, redone at high effort by a new agent when its tests or review fail; Opus reviews at max effort (extra-high where max is not offered) when the work touches money, customer data, security, or an alert that must never be silent, at low effort only when all it reviews is mechanical work or checks, and at high effort otherwise; Sonnet at high effort for mechanical work, checks, research and other test runs, and at medium effort for script-run and read-only tests.
- **Other options:** a single-model option names a model only, so effort stays the user's own setting; a free-text answer may name both. *IF there is no Models answer* → a dispatch runs on the recommended model and effort.
