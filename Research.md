# Research Notes: Liquid FMs, MoE Scaling, and Perpetual Agent Memory

## Abstract

This review examines Liquid Foundation Models (LFM2), MoE efficiency trade-offs, and practical pathways for perpetual agent memory in a research toolkit. The focus is execution constraints: active-vs-total parameter economics, edge deployment implications, and citation-grounded long-context workflows.

## 1) Liquid Foundation Models and Efficient Inference

LFM2 research emphasizes high-quality inference with constrained active compute, using MoE routing to activate only a subset of experts per token. This supports lower effective compute at inference time compared with dense models of similar total parameter count.

Citations:

- LFM2 paper: https://arxiv.org/abs/2511.23404
- LFM2 model doc: https://huggingface.co/docs/transformers/model_doc/lfm2_moe
- Liquid AI blog index: https://www.liquid.ai/blog
- LFM2-8B (A1B) post: https://www.liquid.ai/blog/lfm2-8b-a1b-an-efficient-on-device-mixture-of-experts
- LFM2-24B (A2B) post: https://www.liquid.ai/blog/lfm2-24b-a2b

## 2) MoE Scaling Laws in Practice

For tool builders, the key scaling axis is not only total parameters, but active parameters per forward pass. A practical implication for an edge-oriented harness is to report both:

- **Total parameters** (model capacity envelope)
- **Active parameters** (runtime cost proxy)

This framing aligns benchmarking with deployment reality: latency, memory pressure, and throughput targets on constrained hardware.

Related materials:

- DeepSeek MoE repository: https://github.com/deepseek-ai/DeepSeek-MoE
- DeepSeek API docs: https://api-docs.deepseek.com/

## 3) Perpetual Agent Memory and Context Refresh

Perpetual memory in an agent swarm should prioritize refreshability over raw transcript accumulation. A robust approach uses:

1. Source-backed memory objects (URL + summary + timestamp)
2. Periodic context refresh from canonical docs and APIs
3. Citation constraints on generated outputs

MCP-style tool access is a fit for externalized context retrieval and auditable memory updates:

- MCP specification: https://modelcontextprotocol.io/specification/2025-03-26
- OpenAI MCP docs: https://developers.openai.com/codex/mcp

## 4) Testing and Data Workflow Implications

Benchmarking should connect model behavior to real datasets and reproducible evaluation scripts:

- Kaggle API repo: https://github.com/Kaggle/kaggle-api
- Kaggle API docs: https://github.com/Kaggle/kaggle-api/blob/main/docs/README.md

For model-ops experimentation and adapters:

- Transformers docs: https://huggingface.co/docs/transformers
- Accelerate docs: https://huggingface.co/docs/accelerate
- PEFT docs: https://huggingface.co/docs/peft

## Conclusion

An LFM2-aligned toolkit should evaluate quality-per-active-parameter, preserve citation-grounded memory refresh, and provide edge-conscious workflows for local or near-edge deployment. The practical outcome is not just higher benchmark scores, but repeatable, auditable research-to-testing loops.
