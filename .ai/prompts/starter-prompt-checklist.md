# AI Coding Agent Checklist: Starter Prompt Execution

## Phase 0: Safety and Scope Lock

- [ ] Preserve all human-defined goals and ideas from `starter-prompt.md`.
- [ ] Do not delete or rewrite the canonical references in the original prompt.
- [ ] Keep tone technical and concise in all generated docs.

## Phase 1: Repository and Branch Preconditions

- [ ] Ensure the repo has branches: `main`, `research`, `training`, `benchmarking`. Docs live on `research` only; no pull-request workflow.
- [ ] Checkout `research` before generating deliverables.
- [ ] Confirm remote repository URL is configured.

## Phase 2: Environment Setup

- [ ] Create Python venv with `python -m venv venv`.
- [ ] Ensure `docker-compose.yml` exists and is usable for dev workflow.
- [ ] Confirm quickstart steps in docs reference venv and Docker Compose.

## Phase 3: Link Verification Intake (Ref-Agent)

- [ ] Collect canonical references from `starter-prompt.md`.
- [ ] Verify each URL resolves (GET/HEAD with redirects).
- [ ] If a canonical URL is currently unreachable, replace only in deliverables with a reachable official equivalent and document the substitution.

## Phase 4: Required Deliverable Files on `research`

- [ ] `README.md` with 2-month scope: Learning, Research, Testing.
- [ ] `Playbook.md` with venv setup, `docker compose up`, and GitHub Pages deployment steps.
- [ ] `Project_Management.md` with critical path, onboarding, and Apache 2.0 strategy.
- [ ] `PRD.md` describing Harnessed Agent Swarm:
  - infinite context scaling and context refresh
  - multimodal capability (vision, reasoning, coding)
  - HCI/UX guardrails
- [ ] `Research.md` with short academic-style synthesis and citations.
- [ ] `REFERENCES.md` containing every URL used in the repo deliverables.

## Phase 5: Naming and Constraint Enforcement

- [ ] Do not use `PM_DOC.md`, `RESEARCH_DOC.md`, or `PLAYBOOK.md`.
- [ ] Use exact names: `Project_Management.md`, `Research.md`, `Playbook.md`.
- [ ] Ensure all links used in deliverables are present in `REFERENCES.md`.
- [ ] Tie efficiency claims to LFM2-8B MoE active-vs-total parameter framing where relevant.

## Phase 6: Validation

- [ ] Run automated URL checks across required deliverable markdown files.
- [ ] Resolve any broken links before finalizing.
- [ ] Verify working tree includes all required files and expected updates.

## Phase 7: Handoff

- [ ] Provide a short sanity-check report: conflicts found, missing details found, and applied resolutions.
- [ ] Provide execution report: what was created/updated and what was validated.
