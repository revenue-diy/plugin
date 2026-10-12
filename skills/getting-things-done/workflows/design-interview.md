# DESIGN INTERVIEW

> **Version 1.1** | 2026-10-12

The design method every skill shares. Read in full at the skill's DESIGN step when a MUST-HAVE design input is still open; when every one is already answered, the skill records design clear and skips this file. The skill's DESIGN step owns its design-inputs table and its own read-and-evaluate steps; this file runs after them: research the unknowns, interview the user, lock every input.

**Decisions lock in prose only.** NEVER use your question tool in DESIGN. An input is `LOCKED` when the user says so or clearly accepts a proposal – never because you reasoned to an answer.

---

## RESEARCH UNKNOWNS

- *IF bounded to known files and no unknowns* → go to `§ INTERVIEW THE USER`.
- *IF a few targeted reads* → do them yourself.
- *IF this skill is `tier: light`* → ask the user for the missing facts or research them yourself; a light skill never dispatches.
- *ELSE* → ONE topic (two if closely aligned) per agent: `revenue-diy:researcher` – **`Researcher (<model>): <topic>`** – `{brief:[the research brief, as text: the topic, what the answers feed, the references to start from and any business fact the questions need], questions:[the research questions, as an array], research:[the full path of a new report in <scratch> named research_<topic>]}` – the questions take the place of `task`. Investigation that needs a shell → `revenue-diy:worker` – **`Worker (<model>): <topic>`** – `{brief:[the same research brief, as text], task:[answer the questions; report only, edit nothing], progress:[the full path of a new report in <scratch> named research_<topic>]}`.
- **Read every report in full** as it lands. Expect `ANOMALIES NOTICED` and `UNVERIFIED` – an agent that silently fills gaps is reporting fiction; flag single-source claims "unverified". Put each report in `<worklog>` as you read it.

---

## INTERVIEW THE USER

1. **Summarise research** – the findings that matter.
2. **Write the brief's `§ AGENDA` FIRST**, before the first topic opens – one row per open design input and per topic the user has raised:

    | # | topic | class | depends on | status |
    |---|---|---|---|---|
    | 1 | [what is built and where its boundary sits] | structural | – | LOCKED → D<n> (topic) |
    | 2 | [a choice that row 1 settles] | detailed | 1 | open |

    `structural` = what is built, its boundary, who owns it, where it lives, what surface it targets. `detailed` = every choice the structural rows settle. EVERY `structural` row is numbered BEFORE every `detailed` row; a `detailed` row's `depends on` names a `structural` row, never another detailed one, and the row NEVER opens until that parent reads `LOCKED`. The row count is the `<N>` in rule 3.
3. **One topic per reply, fixed shape** – every interview turn is exactly this and nothing else:

    ```
    Topic <n> of <N>: <topic>
    <the research bearing on THIS topic – at most 5 lines>
    Recommended: <default> – <the trade-off it accepts>
    <ONE question>
    ```

    No other topic is mentioned, answered or pre-empted in that reply. *IF the user's message raises several topics at once* → the reply is `§ AGENDA` (structural rows first, one recommended default each) and then Topic 1 – NEVER an answer to each of them.
4. **Record before the next topic opens** – the moment a topic locks, mint it in the brief's `§ DECISIONS` as `**D<n> (topic)** – text · LOCKED | OPEN` AND flip its `§ AGENDA` row to `LOCKED → D<n> (topic)`, in the SAME turn. IDs never renumber; a reversal is a status change with a note.
5. **Work the rows in order** – structural before detailed, `MUST-HAVE` before `NICE-TO-HAVE`; then list the `NICE-TO-HAVE` defaults and ask whether any needs discussion.
6. **A topic raised late** (mid-interview, at PLAN, during EXECUTE) → ADD it to `§ AGENDA` IN CLASS ORDER, classed, with its dependants noted: a late `structural` topic is numbered INTO the structural block and the rows under it shift down. Take it under rule 3 at the next natural pause, one topic per turn, recorded before the next opens. Work already in flight is never re-cut mid-turn.

*IF new unknowns surface* → go back to `§ RESEARCH UNKNOWNS`.

---

## DESIGN QUALITY GATES

✅ Unknowns researched, every report read in full?
✅ `§ AGENDA` in the brief, every row `LOCKED → D-ID`, NO `structural` row numbered after any `detailed` row, and every `detailed` row's `depends on` naming a `structural` row that is already `LOCKED`?
✅ Every design input `LOCKED` in the user's words?
✅ Every decision in the brief's `§ DECISIONS` with a labelled D-ID, and every `§ AGENDA` D-ID found there?

*IF the user asks to move on with gates open* → name what is missing and the risk; ask them to confirm in prose.
