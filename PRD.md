# PRD: Harnessed Agent Swarm

## Product Goal

Build an agent-driven research and testing toolkit that fits LFM2’s constraints: efficient inference, hybrid MoE, and execution that works on edge or on-device.

Primary references:

- LFM2 model docs: https://huggingface.co/docs/transformers/model_doc/lfm2_moe
- LFM2-8B blog: https://www.liquid.ai/blog/lfm2-8b-a1b-an-efficient-on-device-mixture-of-experts
- LFM2-24B blog: https://www.liquid.ai/blog/lfm2-24b-a2b

## Pillar 1: Infinite Context Scaling and Context Refresh

### Requirement

Agents must retain long-horizon task state while supporting explicit context refresh from source artifacts.

### Functional Scope

- Ingest docs and experiment outputs as refreshable context packets.
- Maintain compact summaries plus citations for replay.
- Support checkpointing and resume for research tasks.

### Acceptance Criteria

- A task can run in multiple sessions without losing citations.
- Context refresh can replace stale state with newest source docs.
- Generated reports map every claim to a URL in `REFERENCES.md`.

## Pillar 2: Multi-Modal Capability (Vision, Reasoning, Coding)

### Requirement

The swarm must coordinate reasoning and code-focused agents, with optional vision-capable components when evaluation artifacts include images.

### Functional Scope

- API and SDK integration targets:
  - OpenAI platform docs: https://developers.openai.com/api/docs
  - OpenAI MCP docs: https://developers.openai.com/codex/mcp
  - Anthropic API getting started: https://docs.anthropic.com/en/api/getting-started
  - DeepSeek API docs: https://api-docs.deepseek.com/
- Hugging Face research tooling:
  - Transformers: https://huggingface.co/docs/transformers
  - Accelerate: https://huggingface.co/docs/accelerate
  - PEFT: https://huggingface.co/docs/peft
  - Smolagents: https://huggingface.co/docs/smolagents

### Acceptance Criteria

- Toolkit can execute coding and reasoning workflows with provider abstraction.
- Agent outputs include reproducible steps and references.

## Pillar 3: HCI/UX Guardrails

### Requirement

Users must receive transparent, auditable outputs with minimal cognitive overhead.

### Functional Scope

- Enforce citation-first writing for research docs.
- Restrict vague claims; require concrete scope and testability.
- Surface branch, environment, and validation status in every runbook.

### Acceptance Criteria

- Every deliverable has concise structure and traceable references.
- No undocumented external links are introduced.

## Non-Goals

- Training a new base foundation model in this phase.
- Building a production-grade hosted inference platform.

## Success Metrics (2-Month Window)

- 100% of doc links resolve successfully.
- Branches `research`, `training`, and `benchmarking` are maintained; docs live on `research` only.
- Environment setup is reproducible on a clean machine in under 30 minutes.
