---
name: "Features PRD — dotAi (Electron + Ollama + LFM2)"
overview: "Product requirements for the AI coding harness desktop app: settings menu, chat, models, UI. Includes MVP decisions and deferred items for refinement."
todos:
  - id: settings-endpoint-config
    content: "Refine: Model endpoint configuration (per-provider base URL/path) in Settings PRD"
    status: pending
  - id: settings-api-keys
    content: "Refine: API keys & secrets management in Settings PRD (when cloud/paid backends added)"
    status: pending
  - id: settings-execution-level
    content: "Refine: Execution level / autonomy beyond two presets (restricted, full access)"
    status: pending
  - id: settings-budget
    content: "Refine: Budget / rate limits in Settings PRD (when non-local backends supported)"
    status: pending
  - id: settings-self-update
    content: "Refine: Self-update behavior in Settings PRD; for now recommend nightly (development) branch"
    status: pending
  - id: settings-jj-memory
    content: "Determine solution: JJ + local project memory + JJ commits + dotai GitHub repo integration"
    status: pending
  - id: settings-file-allow-blocklist
    content: "Refine: File and path allowlist/blocklist in Settings PRD (deferred for MVP)"
    status: pending
  - id: settings-blocklist-memories
    content: "Add blocklists for destructive/catastrophic commands in Project/Orchestration/Memories"
    status: pending
  - id: hotkeys-prd
    content: "Create HOTKEYS_PRD.md and determine all hotkeys and default mappings"
    status: pending
  - id: feature-41
    content: "Settings persistence & config source: where UI settings stored, relationship to SETTINGS.json"
    status: pending
  - id: feature-42
    content: "Backend URL (Ollama host/port): user-configurable base URL, default localhost:11434"
    status: pending
  - id: feature-43
    content: "Max output tokens: user-configurable per response, optional per-persona default"
    status: pending
  - id: feature-44
    content: "Confirm before destructive actions: run shell, commit, delete/move file"
    status: pending
  - id: feature-45
    content: "Default Personality on startup: last used, fixed, or ask each time"
    status: pending
  - id: feature-46
    content: "Local-only / no external requests: user-facing checkbox or statement"
    status: pending
  - id: feature-47
    content: "Session restore on reopen: restore last session or always start fresh"
    status: pending
  - id: feature-48
    content: "Config path override: optional path to SETTINGS.json or config directory"
    status: pending
isProject: false
---

# Features PRD — dotAi (Electron + Ollama + LFM2)

**Purpose:** Product requirements for the AI coding harness (desktop app). Includes settings menu decisions and deferred items for later refinement.

**Project:** Desktop chat app (Electron) for local LLM (Ollama, default model LFM2). OpenCode-style coding assistant; vanilla HTML/CSS/JS. **Agents:** Modular agents with interchangeable **personas** (see `Project/Orchestration/Agents/Personas/`). **Personality** = persona + skillset.

---

## Settings Menu (Decisions & Deferred)

Settings control backend, model, execution level, VCS, logging, and updates. Below: current decisions for MVP vs. items deferred to this PRD for refinement.

### 1. Backend / MVP gate
- **Decision:** MVP acceptance test is whether **Ollama CLI server works locally as the backend**. See MVP_PRD.md success criteria.

### 2. Model endpoint configuration
- **Status:** Add to this feature PRD to refine later. (Future: per-provider base URL/path overrides when multiple backends exist.)

### 3. API keys & secrets
- **Status:** Add to this feature PRD to refine later. (MVP: local Ollama only, no API keys required.)

### 4. Default model
- **Decision:** For now use **Liquid LFM2**.

### 5. Execution level / autonomy
- **Status:** Add to this feature PRD to refine later.
- **Decision for now:** Two presets only — **restricted** and **full access**.

### 6. Commit identity
- **Decision:** Default commit must include **`<ai_model_name>`** (or another stable way to identify that the commit was made by an AI). Configurable in settings.

### 7. VCS integration
- **Decision:** Default VCS is **JJ** (jujutsu).
- **Open:** Models should use the **local project memory system** with JJ commits of the project/product and JJ commit messages on the **dotai GitHub repo**. Solution TBD (to be determined).

### 8. Logging
- **Decision:** Settings must offer **options for logging types** (e.g. level, destination, format). No server-side telemetry; FOSS-compliant local-only logging.

### 9. Budget / rate limits
- **Status:** Add to this feature PRD to refine later. For now: **local LLM only, no cost**; budget/limits apply when cloud or paid backends are added.

### 10. Self-update
- **Status:** Add to this feature PRD to refine later.
- **Decision for now:** Recommend users use the **nightly build** (nightly/development branch). No auto-update requirement for MVP.

### 11. System prompt / behavior source
- **Decision:** Use **START_HERE.md** as the system/behavior source (canonical entry point for the agent).

### 12. Context window / chat history
- **Decision for MVP:** Setting to **select how far back chat history goes** (e.g. last N turns or last N tokens).
- **Checkbox:** **Automatic Context refresh** — when enabled, the AI compresses context when it reaches **33%** and **66%** context saturation to avoid hitting the model limit while retaining recent and salient content.

### 13. Temperature & sampling (explained)
- **What it does:** Temperature controls randomness of the model’s next-token choices. Lower (e.g. 0.1–0.3) = more deterministic, reproducible, good for code and edits. Higher (e.g. 0.7–0.9) = more varied, creative, good for brainstorming or open-ended text.
- **Settings:** Global or per-model **temperature**; where supported by the backend, **top_p** (nucleus sampling) and **top_k** (limit vocabulary per step).
- **Presets:** e.g. **Precise** (low temp), **Balanced** (mid), **Creative** (higher) for quick selection without exposing raw numbers.
- **Integration:** Temperature and sampling are **integrated into Personas**. Each persona under `Project/Orchestration/Agents/Personas/` defines its own temperature (and optional top_p/top_k). See Personas README and § Personality below.

### 14. Streaming (explained)
- **What it does:** When **on**, the harness shows the model’s reply token-by-token as it arrives (faster perceived response, progressive display). When **off**, the UI waits for the full response then shows it at once (simpler, easier to copy/paste, sometimes required for tool-use or parsing).
- **Settings:** Toggle **Streaming on/off** in settings. **Fallback:** If the backend or network doesn’t support streaming, the harness automatically uses non-streaming and may show a short “buffering” state.
- **Integration:** Streaming preference is **integrated into Personas**. Each persona can specify streaming on/off; global settings can default from the selected persona. See `Project/Orchestration/Agents/Personas/README.md`.

### 15. Tool use / function calling
- **Decision:** Maintain a **list of functions in the system** and a **list of functions enabled/disabled** (per function or per category). User can turn specific tools on or off (e.g. `read_file` on, `run_terminal` off).

### 16. Guard rails / safety (MVP)
- **Decision for MVP:** Provide **blocklists for system destructive and catastrophic commands**, stored in or referenced from **`Project/Orchestration/Memories`** (e.g. a dedicated blocklist file or section in existing Memory files). The harness blocks or requires confirmation for any command matching these lists.

### 17. Workspace / project root
- **Decision:** **Prompt the user** on whether they want to change the project root (e.g. on first run or when opening a different folder). **Default:** use or create a **`Project/`** directory as the workspace root.

### 18. File and path allowlist/blocklist
- **Status:** Add to this feature PRD to refine later. **MVP:** no file/path allowlist or blocklist; implement in a future release.

### 19. Theme / appearance
- **Decision for now:** Use a **White, Grays and Black** color palette (no accent colors or density options for MVP).

### 20. Keyboard shortcuts
- **Decision:** Create a **PRD to determine all hotkeys and default mappings** (see `HOTKEYS_PRD.md`). Settings will expose view/customize and, later, export/import of keymap.

### Personality: persona + skillset

- The project uses **modular agents** with **interchangeable personas** that have **skillsets**.
- **Personality** (term used in the project) = a **persona** paired with a **skillset** (and optionally an agent implementation). The runnable “who + what” the user selects.
- **Persona:** Behavioral profile (tone, style, temperature/sampling, streaming) — defined under `Project/Orchestration/Agents/Personas/`.
- **Skillset:** The set of tools/functions enabled for that agent (see §15). Personas are interchangeable; the same persona can be paired with different skillsets to form different Personalities.

### Settings Menu Features 21–30 (candidate list)

21. **Persona selector** — Choose active persona from `Personas/`; display name and short description; optionally edit or add custom persona.
22. **Skillset selector** — Choose which skillset (tool set) is active for the current agent; show enabled/disabled functions (ties to §15).
23. **Personality quick-switch** — One-click or dropdown to switch between saved Personalities (persona + skillset combinations) without reconfiguring each part.
24. **New chat from Personality** — Start a new chat with the currently selected Personality (persona + skillset) and optional system prompt override.
25. **Export / import chat** — Export current conversation to file (e.g. markdown or JSON); import to resume or share context.
26. **System prompt override** — Per-session or per-chat override of the default system prompt (START_HERE or persona); plain text or load from file.
27. **Notification preferences** — When to show notifications (e.g. long run complete, error, backend disconnect): always, only when minimized, or off.
28. **Audio / sound** — Toggle sound for send, receive, error (or mute all); optional distinct tones for different events.
29. **Language / locale** — **MVP:** **English-US** only. (Future: UI language, date/time format, optional locale for model output.)
30. **Accessibility** — **MVP:** Optimize for **high DPI screens**. Default **screen goal compliance** is the **MacBook Pro** display (resolution and scaling). Font size, contrast, reduced motion, and screen-reader-friendly labels remain in scope; optional high-contrast within White/Grays/Black palette.

### Settings Menu Features 31–40 (candidate list)

31. **Backend health / connection status** — Show backend (e.g. Ollama) connection status in UI; auto-detect reachable/unreachable; optional retry or “Start Ollama” hint.
32. **Request timeout** — Configurable timeout for chat/completion requests (seconds); show “Request timed out” and option to retry or increase.
33. **Retry on failure** — Number of automatic retries on transient errors (e.g. 0, 1, 2); optional exponential backoff; user can disable.
34. **Copy response format** — When copying assistant message: plain text only, or markdown preserved; optional “Copy as code block” for code snippets.
35. **Chat title / naming** — Auto-name or user-editable chat title (e.g. first message summary); show in sidebar or tab; used for export filename.
36. **Sidebar visibility & width** — Toggle sidebar on/off; persist state; **each bar has a minimum width**; optional adjustable sidebar width (min/max) or collapse to icons only.
37. **Message density** — Compact vs comfortable spacing for message bubbles and input area; persist per user.
38. **Headless mode** — Run the harness without a visible window (e.g. for scripts, CI, or background agent); optional CLI flag or config to enable headless.
39. **Default new chat behavior** — On “New chat”: start blank, or preload a template (e.g. “Coding task”, “Explain”), or reuse last Personality only.
40. **Diagnostics / debug mode** — Toggle debug or verbose logging; optional “Copy diagnostics” (version, backend URL, last error, OS) for support; dev-only options in non-release builds.

---

## Critical settings review — gaps and additions

Review of settings 1–40 against a full configuration surface for the harness. **Already well covered:** backend, model, execution level, commit identity, VCS, logging, context/history, temperature & streaming (personas), tools, guard rails, workspace root, theme, hotkeys, persona/skillset/Personality, export/import, notifications, audio, locale, accessibility, backend health, timeout, retry, copy format, chat title, sidebar, message density, headless, default new chat, diagnostics.

**Critical or important gaps identified:**

| Gap | Risk | Addition |
|-----|------|----------|
| **Settings persistence** | Unclear where UI settings are stored and whether they override or merge with `config/SETTINGS.json`. | Define: user-level vs project-level storage; sync with or document relationship to `config/SETTINGS.json` and `Orchestration/Memories/SETTINGS.json`. |
| **Ollama URL / host:port** | MVP assumes localhost:11434; users may run Ollama on another host or port. | Make **backend URL** (e.g. Ollama base URL) a first-class MVP setting, not only “refine later” (extends §2). |
| **Max output tokens** | Input context is covered (§12); per-response output cap is only implicit in guard rails. | Add **max output tokens** (or max response length) as a user-configurable setting; can default from persona. |
| **Confirm before destructive actions** | Blocklists (§16) block commands; “confirm before run” for shell/commit/delete is a key safety control. | Add **confirm before: run shell, commit, delete file** (or tie explicitly to execution level “restricted” and §5). |
| **Default Personality on startup** | Quick-switch (§23) and new-chat-from-Personality (§24) exist; “which Personality to use when app opens” is not explicit. | Add **default Personality on app start** (or “remember last Personality”) as a preference. |
| **Local-only / no telemetry (user-facing)** | START_HERE states no telemetry; users may want a visible guarantee. | Add **“Local only” / “No external requests”** checkbox or short note in settings (reassurance, no new behavior). |
| **Session restore** | Whether to restore last chat(s) on app reopen vs always start fresh is not specified. | Add **session restore**: restore last session (chats, sidebar state) on reopen, or always start fresh; persist per user. |
| **Config file path override** | Power users / multi-project may need to point at a specific SETTINGS.json or config dir. | Add **config path override** (optional): path to SETTINGS.json or config directory for profile/project-specific config. |

The following **settings (41–48)** are first-class features in this PRD; see todos in frontmatter. Items already partly covered elsewhere (e.g. BEHAVIOR_CONFIG, RULES) are aligned by reference.

### Settings Menu Features 41–48

41. **Settings persistence & config source** — Define where harness UI settings are stored (e.g. Electron user data, or project `config/SETTINGS.json`). Document relationship to `config/SETTINGS.json` and `Orchestration/Memories/SETTINGS.json`; support user-level vs project-level where applicable.
42. **Backend URL (Ollama host/port)** — **MVP:** User-configurable **Ollama base URL** (e.g. `http://localhost:11434` or custom host:port). Default: `http://localhost:11434`. Required for non-default Ollama setups.
43. **Max output tokens** — User-configurable **max tokens (or max length) per assistant response**; optional per-persona default; hard cap to avoid runaway output (align with guard rails).
44. **Confirm before destructive actions** — Explicit settings: **confirm before run shell**, **confirm before commit**, **confirm before delete/move file**. Can map to execution level “restricted”; must be clearly visible in UI.
45. **Default Personality on startup** — Preference: **default Personality when app starts** (e.g. “last used”, “always [named Personality]”, or “ask each time”). Persist choice.
46. **Local-only / no external requests (user-facing)** — **Checkbox or short statement** in settings: “Local only — no data sent to external servers” (reassurance; behavior already required by START_HERE). No telemetry; optional “strict local” that disables any future optional network features.
47. **Session restore on reopen** — **On app reopen:** restore last session (open chats, sidebar state, selected Personality) or **always start fresh**. Persist preference and state.
48. **Config path override** — **Optional:** Path to **SETTINGS.json** or config directory for profile/project-specific config (power users, multi-project, CI/headless).

---

## Executive

*High-level goals, success criteria, and scope.*

### Vision & objectives
- [To be populated by AI agent]

### Success criteria
- [To be populated by AI agent]

### Out of scope
- [To be populated by AI agent]

### Stakeholders / users
- [To be populated by AI agent]

---

## Software

*Product features, UX, and functional requirements.*

### User-facing features
- [To be populated by AI agent]

### Chat & conversation
- [To be populated by AI agent]

### Models & parameters
- [To be populated by AI agent]

### UI/UX & accessibility
- [To be populated by AI agent]

### Settings & persistence
- Backend: Ollama as local backend (MVP gate).
- Model: Liquid LFM2 default; endpoint config deferred (see Settings Menu above).
- Execution: Two presets — restricted, full access; refinement deferred.
- Commit: Include `<ai_model_name>` (or equivalent) in default commit identity.
- VCS: JJ default; project memory + JJ commits + dotai GitHub integration solution TBD.
- Logging: Options for logging types (level, destination, format); local-only, no telemetry.
- Budget/rate limits and self-update: deferred; for now local-only (no cost), recommend nightly branch.
- Personas: temperature/sampling and streaming integrated into Personas; Personality = persona + skillset (see § Settings 13–14 and § Personality).
- **Full settings menu:** Features 1–48 (see § Settings Menu and § Critical settings review). Features 41–48: settings persistence & config source, backend URL, max output tokens, confirm before destructive actions, default Personality on startup, local-only (user-facing), session restore, config path override.

### Non-functional (performance, security, guard rails)
- [To be populated by AI agent]

---

## Infrastructure

*Runtime, deployment, and operational requirements.*

### Runtime & dependencies
- [To be populated by AI agent]

### Ollama integration
- [To be populated by AI agent]

### Build, package & distribution
- [To be populated by AI agent]

### Observability & diagnostics
- [To be populated by AI agent]

### Platform support
- [To be populated by AI agent]
