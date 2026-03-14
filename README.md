# AGI Research & Testing Toolkit

**Summary**

A research and testing toolkit built around the [LFM2 (Liquid Foundation Model)](https://arxiv.org/abs/2511.23404) work: hybrid MoE, efficiency-focused, and usable on edge or on-device. The repo is set up for **Learning**, **Research**, and **Testing** over an initial 2-month window.

## Scope (2 Months)

| Phase   | Focus                          | Deliverables                          |
|--------|----------------------------------|----------------------------------------|
| **Learning**  | LFM2 hardware-in-the-loop methodology, MoE scaling, agent memory | Docs, playbooks, verified ref links |
| **Research**  | Ref-Agent link verification, academic synthesis, benchmarking APIs | Playbook, Project_Management, PRD, Research, REFERENCES |
| **Testing**   | Docker/venv dev environment, GitHub Pages deployment, license audit | Repo structure, CI-ready baseline |

The approach follows LFM2’s hardware-in-the-loop style: iterate under latency and memory limits, with an eye to edge deployment (see [LFM2-8B MoE](https://www.liquid.ai/blog/lfm2-8b-a1b-an-efficient-on-device-mixture-of-experts)).

## Branch Structure

- **main** — Stable baseline
- **research** — Documentation only (Playbook, Project_Management, PRD, Research, REFERENCES). Kept separate from code branches.
- **training** — Model training scripts
- **benchmarking** — Evaluation suites

All docs live on `research`; clone and checkout `research` for the playbook and references.

## Quick Start

1. Clone and checkout `research`: `git checkout research`
2. Create venv: `python -m venv venv` then `source venv/bin/activate` (or `venv\Scripts\activate` on Windows)
3. Run stack: `docker compose --profile full up` (see [Playbook.md](Playbook.md))

## Documentation

- [Playbook.md](Playbook.md) — Docker, venv, GitHub Pages deployment
- [Project_Management.md](Project_Management.md) — Critical path, onboarding, Apache 2.0 licensing
- [PRD.md](PRD.md) — Harnessed Agent Swarm goals (context scaling, multi-modal, guardrails)
- [Research.md](Research.md) — Academic review: Liquid FMs, MoE scaling, agent memory
- [REFERENCES.md](REFERENCES.md) — Verified URLs used across the repo

## License

Apache 2.0. See [Project_Management.md](Project_Management.md) for licensing strategy.
