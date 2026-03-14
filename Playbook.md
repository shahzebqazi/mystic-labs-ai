# Playbook

## Prerequisites

- Python 3.9+ installed: https://www.python.org/downloads/
- Docker Engine/Desktop installed: https://docs.docker.com/get-docker/
- Docker Compose available: https://docs.docker.com/compose/install/

## Branch and Environment

1. Ensure you are on `research`.
   - `git checkout research`
2. Create a virtual environment.
   - `python -m venv venv`
3. Activate the virtual environment.
   - macOS/Linux: `source venv/bin/activate`
   - Windows PowerShell: `venv\Scripts\Activate.ps1`
4. (Optional) Install Python dependencies.
   - `pip install -r requirements.txt`

## Start Development Stack

1. Build and start the app service.
   - `docker compose --profile full up --build`
2. Stop services.
   - `docker compose down`

## Pull and Run LFM2 Locally with Ollama (Optional)

1. Verify Ollama API docs: https://docs.ollama.com/api
2. Pull the model:
   - `ollama pull lfm2`
3. Confirm model card:
   - https://ollama.com/library/lfm2

## Deploy Docs to GitHub Pages

1. Confirm Pages endpoint:
   - https://docs.github.com/en/pages
2. Push docs updates from `research` to GitHub:
   - `git push origin research`
3. Open repository settings and configure Pages (source branch, e.g. `research`).
4. Check the site at the repo’s Pages URL (e.g. https://shahzebqazi.github.io/agi-research/). See REFERENCES.md for the canonical list.
