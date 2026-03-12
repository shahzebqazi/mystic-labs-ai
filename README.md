# .ai

**An intuitive AI agent tool.** Deploy AI into any project with markdown and local inference — no protocol servers, no cloud APIs. This reduces the attack surface of AI applications and allows a declarative agentic workflow.

This repository is designed to be used in two modes:

- **Template repo mode** — Create a new repository from this base and evolve it for your project.
- **Plugin repo mode** — Embed the `.ai` system into an existing repository as a reusable plugin-like layer.

**This branch (`main`)** is a minimal, user-facing landing: README, LICENSE, CONTRIBUTING, and a new-user guide only. We keep `main` light on purpose.

**For the full project** — orchestration, Documents, Extensions, harness, START_HERE, skills, and all project content — **use the nightly branch: `desktop-app`.**

- **main** — docs and process only (this page and a few root files)
- **desktop-app** — **nightly:** full project (Orchestration, Documents, Extensions, START_HERE.md, skills, rules, local model config). Use this branch for the desktop app and all in-repo content.
- **development** — legacy development branch
- **Production** — release snapshots when used

See [LICENSE](LICENSE) and [CONTRIBUTING](CONTRIBUTING.md).

## Install or embed in your project

You can use this repo as a base inside another project in several ways:

1. **Template repo mode** — Use GitHub's "Use this template" (or clone and replace remote) to start a new project from this base.
2. **Plugin repo mode (embed)** — Copy or sync the project tree from the **`desktop-app`** (nightly) branch into an existing project. Keep your host app code where it is, and add the AI layer as a directory in the host repo.
3. **Clone as base** — Clone this repo, **check out `desktop-app`** for the full layout, then add your project code and AI artifacts.

**Quick start (full project):**

```bash
git clone https://github.com/shahzebqazi/Codex.git
cd Codex
git checkout desktop-app   # nightly branch — full project, START_HERE.md, Orchestration, Documents, Extensions
# Point your agent at Project/START_HERE.md (or the path indicated there)
```

**Where this repo (or its project tree) should live in a host project:** typically at the project root or in a `Project/` directory, so `START_HERE.md` and config paths are consistent. For plugin mode, keep the AI directory colocated with project docs/config.

## AI operation directory

The system supports multiple directory names for the AI operation root. You can use any of the following, or specify a custom path in your tooling:

- `Project/` (used on `desktop-app`)
- `.ai/`
- `dotai`, `.AI/`, `AI`, `ai`
- A custom path you specify (e.g. via config or environment)

On the **desktop-app** branch, the AI content lives under `Project/` (Orchestration, Documents, Extensions, START_HERE.md). When multiple directory names exist, tools should resolve them in a deterministic order (see [CONTRIBUTING](CONTRIBUTING.md)#ai-directory-compatibility).

## Docs

- [NEW_USER_GUIDE.md](NEW_USER_GUIDE.md) — **New here?** Concepts: AI, LLM, agents, scaffolds, guardrails, harnesses, MCP, and how they fit this repo.
- [CONTRIBUTING](CONTRIBUTING.md) — Branch model, rebase policy, install/embed, AI directory compatibility, research policy, Cursor config repo, intake workflow.

## Positioning

- Treat this project as a **template repo** when starting net-new projects.
- Treat this project as a **plugin repo** when embedding AI orchestration into existing projects.
- **Use the `desktop-app` (nightly) branch** for the full desktop app and all in-repo content; keep `main` minimal and user-facing.
