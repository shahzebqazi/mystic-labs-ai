# Starter Prompt: AI Research & Testing Toolkit

**Objective:** Set up a Git repo for an AI research and testing toolkit aligned with LFM2 (Liquid Foundation Model): efficient inference, hybrid MoE, edge-friendly tooling. No marketing fluff; deliverables are concrete and link-verified.

---

## 1. Git & Environment Setup

- Create branch structure (no orphan branches unless specified):
  - **main** — production/stable
  - **research** — documentation only (all project docs live here; kept separate from code branches)
  - **training** — model training scripts
  - **benchmarking** — evaluation suites
- Checkout **research** for deliverables. Add a Python venv (`python -m venv venv`) and a **docker-compose.yml** for the dev environment. Do not use pull requests; keep research, training, and benchmarking as separate branches.

---

## 2. Ref-Agent: Link Retrieval & Verification

Verify that each of the following has a working documentation or repo URL (no 404s). Use the **References** section at the end of this prompt as the canonical list. Any new link added to deliverables must be checked and added to **REFERENCES.md** (see §3).

- **Hugging Face:** transformers, accelerate, peft, smolagents.
- **Ollama:** LFM2 model and API.
- **OpenAI / Anthropic:** SDKs, MCP (Model Context Protocol), API docs.
- **DeepSeek:** MoE materials and API.
- **Kaggle:** API and dataset retrieval.

---

## 3. Deliverables (Markdown Only)

Generate exactly these files on **research**. Use the filenames as given.

| Filename | Purpose |
|----------|--------|
| **README.md** | Executive summary: 2-month scope (Learning, Research, Testing). Mention LFM2 hardware-in-the-loop methodology. |
| **Playbook.md** | Steps: venv create/activate, `docker compose up`, deploy docs to GitHub Pages. |
| **Project_Management.md** | Critical path (branch flow), research onboarding, Apache 2.0 licensing strategy. |
| **PRD.md** | Harnessed Agent Swarm: (1) infinite context scaling & context refresh, (2) multi-modal (vision, reasoning, coding), (3) HCI/UX guardrails. |
| **Research.md** | Short academic-style review: Liquid FMs, MoE scaling laws, perpetual agent memory. Use citations; no broken links. |
| **REFERENCES.md** | Single file listing every URL used in the repo (docs, APIs, papers). One URL per line or grouped by category. All links in other deliverables must appear here and be verified. |

Do not create files named `PM_DOC.md`, `RESEARCH_DOC.md`, or `PLAYBOOK.md`; use **Project_Management.md**, **Research.md**, and **Playbook.md** respectively.

---

## 4. Constraints

- **Links:** Every URL must be verified before commit. No broken links in any deliverable.
- **Tone:** Technical and concise. Avoid vague “high-performance” or “state-of-the-art” without concrete scope.
- **Architecture:** When discussing efficiency or “liquid” state, tie to LFM2-8B MoE (e.g. active vs total params, edge deployment).

---

## 5. Swarm Roles (Reference Only)

| Role | Responsibility | Branches |
|------|-----------------|----------|
| Architect | Repo layout, PRD | main, research |
| Researcher | Link verification, Research.md | research |
| DevOps | Docker, venv, Playbook.md | research |
| QA/Validator | Link checks, license audit | all |

---

## References (Use for Ref-Agent and REFERENCES.md)

All URLs below must be verified before use. Populate REFERENCES.md from this list; add any new URLs you introduce.

**Tooling**
- https://git-scm.com/downloads
- https://www.python.org/downloads/
- https://docs.docker.com/get-docker/
- https://docs.docker.com/compose/install/

**Repo & Pages**
- https://github.com/shahzebqazi/agi-research.git
- https://docs.github.com/en/pages
- https://shahzebqazi.github.io/agi-research/

**Hugging Face**
- https://huggingface.co/docs/transformers
- https://huggingface.co/docs/accelerate
- https://huggingface.co/docs/peft
- https://huggingface.co/docs/smolagents
- https://huggingface.co/docs/transformers/model_doc/lfm2_moe

**Ollama**
- https://docs.ollama.com/api
- https://ollama.com/library/lfm2

**OpenAI**
- https://developers.openai.com/api/docs
- https://developers.openai.com/codex/mcp

**Anthropic**
- https://docs.anthropic.com/en/api/client-sdks
- https://docs.anthropic.com/en/api/getting-started

**DeepSeek**
- https://api-docs.deepseek.com/
- https://github.com/deepseek-ai/DeepSeek-MoE

**Kaggle**
- https://github.com/Kaggle/kaggle-api
- https://github.com/Kaggle/kaggle-api/blob/main/docs/README.md

**LFM2 / Liquid AI**
- https://arxiv.org/abs/2511.23404
- https://www.liquid.ai/blog/lfm2-8b-a1b-an-efficient-on-device-mixture-of-experts
- https://www.liquid.ai/blog/lfm2-24b-a2b
- https://www.liquid.ai/blog

**MCP**
- https://modelcontextprotocol.io/specification/2025-03-26

**License**
- https://www.apache.org/licenses/LICENSE-2.0
