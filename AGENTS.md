# Agent Instructions

Scope: this repository and any automation run by librarian agents.

## SD Card Rule (Hard Requirement)
When working with SD cards (for example `/Volumes/X4-SD`):

1. Do not write scripts to the SD card.
2. Do not write Markdown files (`*.md`) to the SD card.
3. Do not create skills, repos, reports, or code artifacts on the SD card.
4. Use this GitHub repository for all librarian skills, scripts, prompts, reports, and Markdown documentation.

## Allowed SD Card Contents
Only user content and device/runtime data should remain on SD cards:
- books, manuals, documents, notes, wallpapers, tickets
- device-managed runtime folders (for example `.crosspoint`, cache, sleep assets)

## Required Workflow
1. Keep librarian logic and documentation in this repo.
2. Run scripts from the repo and target SD card paths as input/output data only.
3. If a task would require writing scripts or `.md` files to an SD card, stop and store them in this repo instead.
