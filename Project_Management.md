# Project Management

## Critical Path and Branch Flow

The project follows a constrained branch model to separate risk:

- `main`: stable baseline and release-ready docs.
- `research`: primary integration branch for documentation and tooling.
- `development`: short-lived feature integration before merge to `research`.
- `training`: model-training scripts and experiments.
- `benchmarking`: evaluation and regression harnesses.

Flow:

1. Start work in `development`, `training`, or `benchmarking`.
2. Open PRs into `research` after link and docs validation.
3. Promote from `research` to `main` only after QA checks pass.

## Research Onboarding

1. Clone repo and switch to `research`.
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
5. Validate links before opening a PR (no broken URLs).

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
- Branch PRs require successful environment smoke test and link verification.
