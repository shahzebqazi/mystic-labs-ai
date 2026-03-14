# Documents

This directory contains **only this README** and branch list (BRANCHES.md). It explains where project and user documents live.

## For users

All **project and user documents** (PRDs, requirements, user stories, use cases, domain model, UML, traceability, reports, plans, prompts, references) live under **Documentation/** at the repo root.

- **PRDs:** `Documentation/PRDs/`
- **Requirements:** `Documentation/Requirements/` (Functional, NFR, TRACEABILITY.md)
- **User stories:** `Documentation/UserStories/`
- **Reports and reviews:** `Documentation/Reports and Reviews/`
- **Plans:** `Documentation/Plans/`
- **Papers:** `Documentation/Papers/`
- **References:** `Documentation/References/` (e.g. URLS.md)
- **Prompts:** `Documentation/Prompts/` (create if missing)

Do not add subdirectories or files under `Orchestration/Harness/Documents/` for product docs; use `Documentation/` at repo root instead.

## For AI agents

- **Authority:** See [SYSTEM_PROMPT.md](../SYSTEM_PROMPT.md) first.
- **Project and user documents:** All such artifacts live under **Documentation/** (see paths above). When documentation automation or PRD work produces artifacts, create them under `Documentation/` as specified in DOCUMENTATION_AUTOMATION and START_HERE.
- **AI harness documentation:** See `Orchestration/Harness/` for harness specs and API.
