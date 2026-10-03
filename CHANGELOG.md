# Changelog

What changed in each release of the Revenue.DIY plugin.

---

## [v0.30.0] – 2026-10-03 – baseline sync (v0.30.0)

Your plugin is up to date again – every improvement from v0.28 to v0.30, in one release

These are the baseline updates released since your last one – this release brings you all of them at once:

### v0.29.0

### Highlights

Agents now read how your business runs before they start a task, so the work they hand back follows your tools and ways of working from the first step. Without the Revenue.DIY connector they work from the task alone, as before.

### Changed

- The worker, reviewer and tester agents read the operations part of your business context at the start of every task, plus any further part a skill names for them – the engineering skill names your engineering and testing conventions
- The README points straight to the install guide

Revenue.DIY plugin system testing:
✅ Release checks on the baseline - PASS


---

### v0.30.0

### Highlights

Agents now read how your business runs before they start a task, so the work they hand back follows your tools and ways of working from the first step. This release carries that change, first cut as v0.29.0, to every install.

### Changed

- The worker, reviewer and tester agents read the operations part of your business context at the start of every task, plus any further part a skill names for them – the engineering skill names your engineering and testing conventions
- The README points straight to the install guide

Revenue.DIY plugin system testing:
✅ Release checks on the baseline - PASS


---



Revenue.DIY plugin system testing:
✅ Claude Code CLI - PASS
✅ Release checks on this repository (baseline v0.30.0) - PASS

---

## [v0.28.0] – 2026-09-30 – baseline sync (v0.28.0)

What changed in baseline v0.28:

### v0.28.0

### Highlights

Sessions start lighter: the plugin no longer runs a version check when a session opens, and the Revenue.DIY tools now load when a task needs them. Rating a skill at the end of a session is now one simple step.

### Changed

- Skill ratings you give at the end of a session now go through a dedicated rating step
- Choosing "Other" at the end of a skill now sends your note as feedback on that skill
- The Revenue.DIY tools load when a task needs them instead of at the start of every session

### Removed

- The start-of-session version check

Revenue.DIY plugin system testing:
✅ Release checks on the baseline - PASS


---



Revenue.DIY plugin system testing:
✅ Claude Code CLI - PASS
✅ Release checks on this repository (baseline v0.28.0) - PASS

---

## [v0.27.0] – 2026-09-25 – baseline sync (v0.27.0)

Your plugin is up to date again – every improvement from v0.25 to v0.27, in one release

These are the baseline updates released since your last one – this release brings you all of them at once:

### v0.26.0

### Highlights
A small release: the plugin now describes itself in one plain line, so it is easier to see what it does when you browse your plugins.

### Changed
- Shortened the plugin description to "Sales, marketing, and revenue operations skills for B2B revenue teams."

Revenue.DIY plugin system testing:
✅ Release checks on the baseline - PASS


---

### v0.27.0

### Highlights
A maintenance release. Nothing changes in how the plugin works.

Revenue.DIY plugin system testing:
✅ Release checks on the baseline - PASS


---



Revenue.DIY plugin system testing:
✅ Claude Code CLI - PASS
✅ Release checks on this repository (baseline v0.27.0) - PASS

---

## [v0.25.0] – 2026-09-19 – baseline sync (v0.25.0)

Your plugin is up to date again – every improvement from v0.24 to v0.25, in one release

These are the baseline updates released since your last one – this release brings you all of them at once:

### v0.25.0

### Highlights
One README for every install, and the `engineering` and `getting-things-done` skills follow the hardened template: one design decision at a time, the full plan shown before you approve it, and every report filed where your work is tracked.

### Changed
- README rewritten: one version for every install, with the setup and updating instructions living on revenue.diy where they stay current. It states plainly that no business context is stored in the plugin – context is served by the connector to the account that owns it.
- `engineering` and `getting-things-done`: the design interview takes one topic at a time and records each decision before the next; the plan summary is printed in full before you are asked to approve it; every report reaches your work-log issue at the phase that produced it.
- Agents (worker, researcher, tester, reviewer) report anomalies and unverified items in every report and resume from where they stopped; the tester carries its acceptance criteria.

### Fixed
- Several in-skill references that pointed at guidance headings that did not exist.
- The review-model dial names one condition (client-facing or published) instead of a judgement call.

### Removed
- The separate README variant for the public repository; every repository carries the same file.


---



Revenue.DIY plugin system testing:
✅ Baseline v0.25.0 – owner-certified release (deterministic gates PASS; canary plugin-test-b9xt2ywjwzfz released green at v0.25.1)

---

## [v0.24.0] – 2026-09-18 – baseline sync (v0.24.0)

### Highlights

Baseline update inherited from v0.24.0.


Revenue.DIY plugin system testing:
✅ Inherited from the baseline v0.24.0 certification (no fork-specific run)

---

