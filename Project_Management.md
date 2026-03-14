# Project Management

## Branch Model

Branches are kept separate by purpose; no pull-request workflow.

- **main**: stable baseline.
- **research**: documentation only. All project docs (Playbook, Project_Management, PRD, Research, REFERENCES) live here. This branch is separate from code branches.
- **training**: model-training scripts and experiments.
- **benchmarking**: evaluation and regression harnesses.

Work on docs on `research`; work on training code on `training`; work on evaluation on `benchmarking`. Research is not a merge target for other branches.

## Research Onboarding

1. Clone repo and switch to `research` for docs.
2. Read:
   - `README.md`
   - `PRD.md`
   - `Research.md`
   - `REFERENCES.md`
3. Create and activate a venv:
   - `python -m venv venv`
   - `source venv/bin/activate`
4. Start local environment:
   - `docker compose --profile full up`
5. Validate links in docs (no broken URLs).

## Apache 2.0 Licensing Strategy

License target:

- Apache License 2.0: https://www.apache.org/licenses/LICENSE-2.0

Strategy:

1. Keep all authored docs and scripts under Apache 2.0.
2. Preserve third-party attribution in `REFERENCES.md`.
3. Do not copy proprietary source text into the repo.
4. Track model/API terms separately when integrating providers:
   - OpenAI docs: https://developers.openai.com/api/docs
   - Anthropic SDK docs: https://docs.anthropic.com/en/api/client-sdks
   - DeepSeek API docs: https://api-docs.deepseek.com/

## Quality Gates

- All URLs used in docs must be present in `REFERENCES.md`.
- Research claims must include a citation URL.
- Environment smoke test and link verification before considering docs complete.
