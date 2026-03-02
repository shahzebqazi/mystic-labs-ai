# AGI Research & Testing Toolkit

**Executive Summary**

An AI Research & Testing Toolkit inspired by the [LFM2 (Liquid Foundation Model)](https://arxiv.org/abs/2511.23404) architecture—prioritizing efficiency, hybrid MoE (Mixture of Experts), and edge-compatibility. This repository supports **Learning**, **Research**, and **Testing** workflows with a 2-month scope for initial delivery.

## Scope (2 Months)

| Phase   | Focus                          | Deliverables                          |
|--------|----------------------------------|----------------------------------------|
| **Learning**  | LFM2 hardware-in-the-loop methodology, MoE scaling, agent memory | Docs, playbooks, verified ref links |
| **Research**  | Ref-Agent link verification, academic synthesis, benchmarking APIs | Playbook, Project_Management, PRD, Research, REFERENCES |
| **Testing**   | Docker/venv dev environment, GitHub Pages deployment, license audit | Repo structure, CI-ready baseline |

Methodology is aligned with LFM2’s hardware-in-the-loop search: iterative, efficiency-focused, and suitable for edge and on-device deployment (e.g. [LFM2-8B MoE](https://www.liquid.ai/blog/lfm2-8b-a1b-an-efficient-on-device-mixture-of-experts)).

## Branch Structure

- **main** — Production/stable
- **research** — Primary working branch for docs and tools (current)
- **development** — Feature staging
- **training** — Model training scripts
- **benchmarking** — Evaluation suites

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
