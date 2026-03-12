# Contributing to .ai

<!-- AI: Contains subprompts. Scan for task-specific instructions. Preferences: see PREFERENCES block if present. -->
<!-- PREFERENCES (edit for your project): -->
<!-- (none) -->

Thanks for your interest in the .ai system. This guide explains how the repository works in both **template repo** and **plugin repo** modes, and how humans and AI agents can contribute.

## Branch model and workflow

- **main** — User-facing docs only (README, CONTRIBUTING, LICENSE, NEW_USER_GUIDE). Kept minimal on purpose; no full project content here.
- **desktop-app** — **Nightly:** full project (Orchestration, Documents, Extensions, START_HERE.md, skills, rules, harness). **Use this branch for the desktop app and all in-repo content.**
- **development** — Legacy development branch.
- **Production** — Releases when used; promoted from development/desktop-app; do not commit directly to Production.

**Users:** For the full project and desktop app, use the **`desktop-app`** (nightly) branch. Flow: open feature or contributor branches from `desktop-app`, do work, then merge (or open a PR) into `desktop-app`.

## Interactive rebase before merging into desktop-app

Before merging your feature or contributor branch into `desktop-app`:

1. **Rebase onto desktop-app** — `git fetch origin desktop-app && git rebase origin/desktop-app` (or equivalent).
2. **Use interactive rebase to clean history** — `git rebase -i origin/desktop-app` (or squash onto a single commit if preferred). During the rebase:
   - **Squash** fixup and WIP commits into logical steps.
   - **Reword** commit messages so they are intention-rich and useful for future AI-assisted evolution (what changed and why).
   - **Keep** distinct logical steps as separate commits where it helps readability.
3. **Branch protection** — Do not push directly to `Production`. All changes reach Production via `desktop-app` or `development` after review/promotion.

## Repository modes

- **Template repo mode** — Create a new project from this repository, then customize it.
- **Plugin repo mode** — Embed the `.ai` system into an existing repository while keeping the host project structure.

## Adding this repo to your project

When you add this repository (by cloning, copying the `.ai/` tree, or using it as a template):

- Your project gets the **.ai** system: markdown-first agent orchestration, skills, rules, and local GGUF inference.
- AI agents that work in your repo read the START_HERE (or equivalent) in your chosen AI operation directory and use the same conventions (skills, config).
- You can customize per project via `config/local/`, `project/RULES.md`, and your own PRDs under `project/`.

No protocol servers or cloud APIs are required—just the AI operation directory and (optionally) Docker for local models. See [README — AI operation directory](README.md#ai-operation-directory) for supported directory names and how to specify a custom path.

For template mode, preserve branch policy and docs. For plugin mode, keep AI files isolated to the chosen operation directory so host-project boundaries stay clear.

### AI directory compatibility

Supported names for the AI operation root (single directory per project, or use a user-specified path override):

| Name        | Notes                    |
|------------|--------------------------|
| `Project/Ai/` | Project-scoped          |
| `.ai/`     | Default in this repo     |
| `dotai`    | No leading dot           |
| `.AI/`     | Uppercase                |
| `AI`       | Uppercase, no slash      |
| `ai`       | Lowercase                |
| Custom path| Override via config/env  |

**Precedence when multiple exist:** use explicit user-specified path if set; otherwise tools may auto-detect using a deterministic order (e.g. `.ai/` then `Project/Ai/` then `dotai` then `.AI/` then `AI` then `ai`). Document the chosen order in your tool’s docs so behavior is predictable.

## Research policy {#research-policy}

AI research is **not** done in this repo (Codex). Use the dedicated research repository instead.

- **Use:** [agi-research](https://github.com/shahzebqazi/agi-research)
- **Do not use:** this repo for research capture, literature review, or research artifacts.

agi-research is the canonical place for: Learning (LFM2, MoE, agent memory), Research (Ref-Agent, academic synthesis, benchmarking), and Testing (Docker/venv, GitHub Pages, license audit). See agi-research's README, Playbook.md, Research.md, and REFERENCES.md.

**Approval before push:** Before pushing any research-related files (in agi-research or anywhere), the agent must (1) **review** the changes (summary of what was added/changed), (2) **get your explicit approval** before running `git push` or opening a PR that would push, (3) never do automated or unapproved pushes of research content. This applies to all workspaces that contain your AI research (e.g. dotai, my-dotfiles, Cursor/dotcursor, skills-cursor). When in doubt, ask for approval before pushing.

**Relation:** Codex = .ai orchestration, template/plugin, docs, and process (e.g. TAXONOMY for scaffold findings). agi-research = all substantive AI/AGI research, playbooks, and references. Cross-link when useful, but keep research artifacts and commits in agi-research.

## Cursor config repo {#cursor-config-repo}

This repo (Codex) is **not** used for Cursor-specific work. All Cursor-specific tasks use the **Cursor config repo**.

The **Cursor config repo** is the canonical place for: Cursor plugins and extensions; rules, skills, and project conventions for Cursor; MCP servers and other Cursor integrations; Cursor IDE config, dotfiles, and settings. **Agents and users:** when the task is Cursor-specific (plugins, rules, tools, integrations, config), use the Cursor config repo—not Codex.

**Cursor config repo:** [shahzebqazi/my-cursor-config](https://github.com/shahzebqazi/my-cursor-config). We recommend users also look at the maintainer's Cursor config repo for the full Cursor setup. Codex works with Cursor (e.g. the `.ai` system runs inside Cursor), but Cursor-specific content lives in the config repo.

**List or count Cursor-related repos** (after `gh auth login`): `gh repo list --limit 500 | grep -i cursor` and `gh repo list --limit 500 | grep -i cursor | wc -l`.

**Relation:** Codex = .ai layer and workflow. Cursor config repo = Cursor IDE–specific tasks and setup.

## AI intake agent workflow

When an AI agent is helping you capture iterations and research:

1. **Intake loop** — The agent prompts you to place iteration artifacts (prompt files, scaffold snippets, component docs, findings notes) into a **recognized operation directory** (any of the names above, e.g. `.ai/`, `Project/Ai/`, or your custom path). For **research** artifacts, use agi-research; do not use this repo (Codex) for research.
2. **Expected artifact types** — Prompt files (e.g. `.md`), scaffold snippets, component documentation, and short findings notes. The agent may suggest subdirectories (e.g. `inbox/`, `prompts/`, `findings/`) for organization.
3. **Repeatable cycle** — Collect artifacts into that directory → classify and normalize names → summarize (e.g. in a taxonomy or index) → commit with intention-rich messages. The agent should ask you to add files to the chosen directory when it needs more input or when compiling research. **Before pushing**, the agent must get your approval (see [Research policy](#research-policy)).

## Prompt and commit conventions

- **Files as prompts** — Any file in the repo can serve as a prompt surface; agents may read markdown, code, and config to infer intent and next steps.
- **Comments for AI** — Code and config comments may include AI guidance or subprompts (e.g. `<!-- AI: ... -->` in markdown, or inline instructions in code). Use them to steer agents without changing runtime behavior.
- **Commit messages** — Write intention-rich messages (what changed and why) so future AI-assisted work can reason about history. Prefer this over vague one-liners.

## How AI agents use GitHub issues

When this base repo is used in a project that hosts its code on GitHub, AI agents can integrate with GitHub Issues so that findings and suggestions are tracked in one place.

- **Bug reports** — Agents can open issues for bugs they find (config: `github.report_bugs_to_issues` in `.ai/config/SETTINGS.json`, default on).
- **Suggestions** — Agents can open issues for feature or improvement suggestions (config: `github.allow_agent_suggestions`, default on).
- **Branches** — Agents can use branches for their work; human approval can be required initially (config: `github.allow_agent_branches`).

So: add this base repo to your project, point your AI agent at `.ai/START_HERE.md`, and the agent can both do work in the repo and report bugs or ideas via GitHub issues. Details and overrides live in `.ai/project/RULES.md` and `.ai/config/SETTINGS.json`.

## How to contribute (humans)

- **Code and docs** — Open a pull request from a branch. Prefer small, focused PRs.
- **Bugs and ideas** — Open a [GitHub issue](https://github.com/shahzebqazi/Codex/issues). Use the issue templates if present (e.g. bug report, feature suggestion).
- **Template/plugin compatibility** — Keep changes backward compatible across both template mode and plugin mode. Document assumptions if a change affects embedding behavior.

## How to contribute (AI agents)

- Read `.ai/START_HERE.md` first.
- Follow `.ai/project/RULES.md` and respect `config/SETTINGS.json` (including GitHub integration settings).
- For bugs or suggestions, create GitHub issues when allowed by config; use the repository’s issue templates when available.

## License

Contributions are made under the same license as the project. See [LICENSE](LICENSE) for details.
