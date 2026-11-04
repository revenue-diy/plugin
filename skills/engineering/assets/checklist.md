# ENGINEERING REVIEW CHECKLIST

> **Version 1.12** | 2026-11-01

Rubric for `reviewer` dispatches from `engineering`. The sub-brief's Review section, or the dispatch's rubric, states WHICH section applies (code or artefact review / testing review / final sweep); at the final review, the acceptance checklist and its tick format come with it – score every line in the named section(s) with evidence; tier findings P1 (blocks ship) / P2 (should fix) / P3 (nice-to-have).

**Class every finding SURFACE or TOOLING.** SURFACE is the thing being shipped; TOOLING is what helped build or prove it – test harnesses, proving scripts and test helpers. A TOOLING finding is P3 by default; a tooling defect that hides a surface defect makes the hidden surface defect the finding, classed SURFACE at its own severity, and a surface defect is never down-rated because the tooling found it. Weak evidence that a check ran – a bare "checked by hand", no screenshot or log, a check script that crashed – is TOOLING, P3, when the shipped surface is verified correct; it is SURFACE only when it leaves a surface defect unfound.

---

## CODE / ARTEFACT REVIEW (per item or chunk)

- [ ] **Does what the brief says** – behaviour matches the item's acceptance lines; no silent scope drift.
- [ ] **Simplest thing that works** – nothing the acceptance lines don't need (no extra mechanism, option, abstraction or tooling) unless what breaks without it is named and likely; a one-off uses what already exists.
- [ ] **Standards compliance** – follows the standards named in the dispatch (the engineering conventions the connector points at / repo rules); review against THOSE, never generic best-practice memory.
- [ ] **Efficient and on the documented path** – no needless work, repeated calls or reads, or avoidable loops or round trips, each flag quoting the code that shows it; no departure from the platform's official documentation or a named standard, each flag citing it.
- [ ] **Automation hygiene** *(workflows and integrations)* – the ACTIVE version is the edited one (no unpublished draft); separate workflows unless triggers share downstream logic; happy, user-error and system-error paths each wired; idempotent on a duplicate event; no credential or instance ID in the artefact.
- [ ] **Security basics** – inputs validated/sanitised, outputs escaped, no secrets/keys/credentials in the artefact, no unsafe third-party calls.
- [ ] **Self-contained where promised** – a standalone artefact carries its CSS/JS embedded and runs without external setup.
- [ ] **Valid document skeleton** *(HTML artefacts)* – `<!DOCTYPE html>`, `lang` attribute, charset AND viewport meta present; without the viewport meta, mobile scaling is broken.
- [ ] **Responsive** – renders usably on a phone-width screen (mobile-first layout or working breakpoints), not just desktop.
- [ ] **Light + dark parity** *(user-facing artefacts)* – dark mode supported on best effort (`prefers-color-scheme`); MANDATORY when the brand context (its `BRAND.md` tokens) specifies parity.
- [ ] **Accessible** – semantic markup, labelled inputs, WCAG-minded contrast on best effort.
- [ ] **No leftovers** – no debug logging, dead code, TODO stubs or commented-out blocks.
- [ ] **Maintainable** – a competent stranger could change it: clear naming, sane structure, documentation present and accurate.
- [ ] **On-brand** *(user-facing artefacts)* – best-effort brand tokens applied; copy in the voice and language rules the brand context states.

## TESTING REVIEW (test plan + evidence)

- [ ] **Coverage matches the build** – every acceptance criterion has at least one test case; failure paths and named edge cases are covered, not just the happy path. Tests the change made out of date are updated; an update that weakens a check carries the user's approval.
- [ ] **Evidence is real** – each PASS cites a concrete observation (output, screenshot, log), never an assertion; environment stated.
- [ ] **Results prove the criteria** – the passing cases actually demonstrate the acceptance criteria, not adjacent behaviour.
- [ ] **Gaps declared** – anything untested is explicitly listed with a reason; re-run any scriptable checks in the shell to confirm they still pass.
- [ ] **Guards proven, not assumed** – every guard, validator or error path the build introduces was SHOWN to fail on a seeded violation and then restored; both observations are in the evidence file. A guard evidenced only by passing runs is untested. Evidence: quote the tripped + restored observations (or name the guard that has none).
- [ ] **Verdicts rest on observed output** – no case passes on a runner's claim alone: each PASS is backed by the observation captured at the time, and browser-lane cases ran serially in one session, closed after use. Evidence: quote one captured observation per lane.

## FINAL SWEEP (integrated whole – architecture altitude)

- [ ] **Items integrate** – seams between items and modules carry data correctly; no orphaned or duplicated logic across chunks.
- [ ] **Consistency** – naming, patterns and error handling are uniform across the whole (per-item reviews can't see this).
- [ ] **Documentation complete** – what it does, how it's built, how to run/host it, how to change it – accurate against the final state.
