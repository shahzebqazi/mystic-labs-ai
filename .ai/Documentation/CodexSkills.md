# Codex Skills Findings

## Overview
Codex skills are reusable, task-focused bundles of instructions (plus optional scripts/resources) that let the agent follow a workflow reliably. Skills are available in the Codex app, CLI, and IDE extension, can be shared across teams or the community, and build on the open Agent Skills standard. (Sources: OpenAI Codex skills docs and app overview.)

## Skill Structure
A skill is a folder with a required `SKILL.md` and optional supporting folders:
- `SKILL.md` (required) with instructions and metadata
- `scripts/` (optional) executable helpers
- `references/` (optional) documentation
- `assets/` (optional) templates/resources

## Discovery And Activation
- Codex uses progressive disclosure: it loads each skill’s `name` and `description` at startup and reads full instructions only when the skill is invoked.
- Explicit invocation: include `$skill-name` in the prompt, or use `/skills` or `$` in supported clients to select a skill. Explicit invocation is not supported in Codex web/iOS yet, but you can still ask Codex to use a skill checked into a repo.
- Implicit invocation: Codex can select skills automatically when the task matches the skill’s description. Because implicit matching depends on `description`, write descriptions with clear scope and boundaries.

## Skill Locations (Scan Targets)
Codex loads skills from multiple scopes. The skills docs list these locations:
- `$CWD/.codex/skills`
- `$CWD/../.codex/skills`
- `$REPO_ROOT/.codex/skills`
- `$CODEX_HOME/skills` (macOS/Linux default: `~/.codex/skills`)
- `/etc/codex/skills`
- System skills bundled with Codex

Notes:
- Team Config uses the same `.codex/skills` locations under each `.codex/` directory.
- Symlinked skill folders are supported.
- Docs differ on name collisions and precedence. One section notes same-name skills can both appear, while another describes higher-precedence locations overwriting lower ones. Treat duplicates cautiously and verify behavior in your client.

## Creating And Installing Skills
- Create a skill via the built-in `$skill-creator` flow, or by creating a folder with a `SKILL.md` file (must include `name` and `description`).
- `metadata.short-description` is optional in `SKILL.md` for a user-facing summary.
- Install curated or external skills via `$skill-installer` (including from other repositories).
- Experimental: per-skill enable/disable in `~/.codex/config.toml` using `[[skills.config]]` entries.

## Common Skills And Examples
- Built-in system skills include `$skill-creator` and plan skills. The Codex changelog also calls out `$skill-installer` as a built-in system skill.
- Docs mention an experimental `$create-plan` skill installable via `$skill-installer`. Availability may vary by client/version.
- Examples highlighted in docs and the Codex app include skills for Linear, Figma design implementation, cloud deployment (Cloudflare, Netlify, Render, Vercel), image generation, OpenAI API reference, and document creation (PDF/spreadsheet/docx).

## Notes
- Skills follow the open agent skills standard.
- OpenAI maintains an open-source skills catalog; see References.

## References
- OpenAI Codex skills documentation: https://developers.openai.com/codex/skills
- OpenAI Codex changelog entry on skills: https://developers.openai.com/codex/changelog
- OpenAI Codex Team Config documentation: https://developers.openai.com/codex/team-config
- Codex app overview (skills list and catalog reference): https://openai.com/index/introducing-the-codex-app/
- Open-source skills catalog: https://github.com/openai/skills
