# Starter Prompt: AI Research & Testing Toolkit

**Objective:** Initialize a Git repository for a high-performance AI Research & Testing Toolkit. The project is inspired by the LFM2 (Liquid Foundation Model) architecture—prioritizing efficiency, hybrid MoE (Mixture of Experts), and edge-compatibility.

## 1. Initial Git & Environment Setup

**Action:** Create a local directory, run git init, and create the following branch structure:

- **main** (Production/Stable)
- **research** (Primary working branch for docs/tools)
- **development** (Feature staging)
- **training** (Model training scripts)
- **benchmarking** (Evaluation suites)

**Action:** Checkout to research. Initialize a `python -m venv venv` and a `docker-compose.yml` for the dev environment.

## 2. Research & Link Retrieval (The "Ref-Agent")

Scrape and verify non-broken documentation and repository links for the following:

- **Hugging Face:** transformers, accelerate, peft, smolagents.
- **Ollama:** LFM2 model library and API docs.
- **OpenAI/Anthropic:** SDKs, MCP (Model Context Protocol), and latest Claude 4.6/GPT-5.2 docs.
- **DeepSeek/Kimi K2.5:** MoE architecture papers and API integration guides.
- **Kaggle:** Benchmarking SDK and dataset retrieval APIs.

## 3. Deliverable Construction (Markdown Only)

Generate the following files in the research branch:

- **Executive Summary (README.md):** Define a 2-month scope for an AI toolkit covering Learning, Research, and Testing. Reference the LFM2 hardware-in-the-loop search methodology.
- **Playbook (PLAYBOOK.md):** Step-by-step guide for docker compose up, venv activation, and deploying the initial documentation to GitHub Pages.
- **Project Management (PM_DOC.md):** Map the critical path. Include the Research Onboarding process and an Open Source Licensing strategy (Apache 2.0).
- **PRD (PRD.md):** Detail the "Harnessed Agent Swarm" goals:
  - Infinite context scaling & context refreshing.
  - Multi-modal support (Vision, Reasoning, Coding).
  - HCI/UX for AI guardrails.
- **Research Paper (RESEARCH_DOC.md):** An academic-style review. Synthesize Google Scholar data on Liquid Foundation Models, MoE scaling laws, and perpetual agent memory.

## 4. Constraints & Formatting

- **Strict:** No broken links. Verify every URL before committing.
- **Style:** Use professional, technical, yet concise language.
- **Architecture Reference:** Compare system efficiency and "Liquid" state transitions to the LFM2-8B MoE variant.

## Implementation Table for the Swarm

| Agent Role   | Primary Task                    | Branch Context   |
|-------------|---------------------------------|------------------|
| Architect   | Repository structure & PRD     | main / research  |
| Researcher  | Link verification & Academic Doc| research         |
| DevOps      | Docker, Venv, & Playbook       | research         |
| QA/Validator| Link health checks & License audit | All          |
