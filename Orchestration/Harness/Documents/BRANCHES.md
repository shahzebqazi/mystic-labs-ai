# Branch list and descriptions

Quick reference for what each branch is for. Updated after branch and documentation refactor.

---

## Primary / trunk

| Branch | Description |
|--------|-------------|
| **main** | Stable, deployable trunk. GitHub Pages site (Brand Guide + Mockups) deploys from here. No `Documentation/` dir. |
| **production** | Release line. In sync with main. CI runs on PRs to this and main. |
| **development** | Dev-docs branch. Everything main has **plus** `Documentation/` (PRDs, Plans, Papers, References, Requirements, UserStories, Reports, Prompts). Feature branches are created from here and merged back here. |

---

## Feature and topic branches

| Branch | Description |
|--------|-------------|
| **feature/desktop-app** | Desktop app and GUI features. Branches from and merges into **development**. |
| **assets** | Asset generators and static output only. Kotlin toolchain in `Assets/`, output in `Assets/output/`. Deploy workflow fetches from this branch for Brand Guide content. |

---

## AGI-research (on origin)

Consolidated from former agi-research branches. Research/toolkit-focused.

| Branch | Description |
|--------|-------------|
| **agi-research** | Consolidated research (main + libra-ai + type-system + research). LFM2 toolkit, Libra AI Library, type-system exploration. |
| **agi-research-benchmarks** | Benchmarking and training content (`.ai/prompts`, evaluation). |

---

## Remotes

- **origin** — GitHub (e.g. `shahzebqazi/Codex`). All active branches are pushed here.

---

## Conventions (from [GIT.md](../../Tasks/VCS/GIT.md))

- `main` = stable, deployable; `production` = release; `development` = dev docs + feature base.
- All product and process docs live under **Documentation/** on the **development** branch only (PRDs, Plans, Papers, References, Requirements, UserStories, Reports, Prompts).
- Human feature branches: `feature/name`, `docs/name`, `chore/name`, `hotfix/name`. Branch from **development** for feature work.
- Agent work: `agent-name/task-id` (often managed by jj).
