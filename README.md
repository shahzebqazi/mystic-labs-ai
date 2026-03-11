# .ai

**An intuitive AI agent tool.** Deploy AI into any project with markdown and local inference — no protocol servers, no cloud APIs.

This repository is designed to be used in two modes:

- **Template repo mode** — Create a new repository from this base and evolve it for your project.
- **Plugin repo mode** — Embed the `.ai` system into an existing repository as a reusable plugin-like layer.

This branch (`main`) is a minimal landing: README, LICENSE, CONTRIBUTING, and an empty `.ai/` directory.

For the full .ai system (skills, rules, config, docs), use the **`development`** branch (nightly) or **`Production`** (releases).

- **main** — docs and process only
- **development** — full .ai orchestration, START_HERE.md, skills, project rules, local model config (nightly builds)
- **Production** — release snapshots promoted from `development`

See [LICENSE](LICENSE) and [CONTRIBUTING](CONTRIBUTING.md).

## Install or embed in your project

You can use this repo as a base inside another project in several ways:

1. **Template repo mode** — Use GitHub's "Use this template" (or clone and replace remote) to start a new project from this base. The clone includes a default `.ai/` directory.
2. **Plugin repo mode (embed)** — Copy or sync the `.ai` tree from `development` or `Production` into an existing project. Keep your host app code where it is, and add the AI layer as a directory in the host repo.
3. **Clone as base** — Clone this repo directly, then add your project code and AI artifacts.

**Where this repo (or its `.ai` tree) should live in a host project:** typically at the project root (e.g. `your-project/.ai/`), so `START_HERE.md` and config paths are consistent. For plugin mode, keep the AI directory colocated with project docs/config. If you use a different directory name, configure tools and agents to use that path (see [AI operation directory](#ai-operation-directory)).

**Quick start after cloning:**

```bash
git clone https://github.com/shahzebqazi/Codex.git
cd Codex
git checkout development   # or Production for a release snapshot
# .ai/ is present; point your agent at .ai/START_HERE.md
```

## AI operation directory

The system supports multiple directory names for the AI operation root. You can use any of the following, or specify a custom path in your tooling:

- `Project/Ai/`
- `.ai/` (default in this repo)
- `dotai`
- `.AI/`
- `AI`
- `ai`
- A custom path you specify (e.g. via config or environment)

When multiple of these exist, tools should resolve them in a deterministic order (see [CONTRIBUTING](CONTRIBUTING.md)#ai-directory-compatibility). Cloning this repo gives you `.ai/` by default.

## Docs

- [CONTRIBUTING](CONTRIBUTING.md) — Branch model, rebase policy, install/embed, AI directory compatibility, intake workflow.
- [docs/TAXONOMY.md](docs/TAXONOMY.md) — Taxonomy for compiling research and scaffold findings (components, prompts, workflows, patterns, templates).

## Positioning

- Treat this project as a **template repo** when starting net-new projects.
- Treat this project as a **plugin repo** when embedding AI orchestration into existing projects.
- Keep docs and contribution workflows aligned to both paths.
