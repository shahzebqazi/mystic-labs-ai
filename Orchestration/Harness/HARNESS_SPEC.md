# Harness spec — Python + Lua GUI + Ollama

Use with `Orchestration/Agents/AGENT_PROMPT.md` and `Documents/PRDs/FEATURES_PRD.md`. This stack: **Python harness** (Ollama client, guard rails, HTTP API) + **Lua GUI** (terminal or IUP).

## Core (MVP)

- [x] **Ollama** — Base URL `http://localhost:11434`; list models (`GET /api/tags`), chat (`POST /v1/chat/completions`, stream or not).
- [x] **Python harness** — Conversation state, context cap (20 msgs), memory cap (50), response truncation (16k chars), input cap (32k).
- [x] **HTTP API** — `/api/models`, `/api/chat`, `/api/new_chat`, `/api/system_prompt`, `/api/history`.
- [x] **Lua client** — Terminal client and IUP GUI calling the API.
- [x] **System prompt** — Load `START_HERE.md` by default; overridable via API.
- [x] **Blocklist** — `Orchestration/Memories/blocklist.txt`; harness rejects messages matching patterns.
- [ ] **Docs** — README in `Harness/` and `Harness/lua_gui/` (done); add run instructions to project README if desired.

## File layout

```
Harness/
  README.md
  HARNESS_SPEC.md
  python/
    requirements.txt
    harness/
      __init__.py
      config.py
      ollama_client.py
      guard_rails.py
      blocklist.py
      conversation.py
      server.py
      __main__.py
  lua_gui/
    README.md
    api.lua
    client_terminal.lua
    client_gui_iup.lua
Orchestration/Memories/
  blocklist.txt
```

## MVP gate

Ollama runs locally; harness server starts; Lua client (terminal or IUP) can list models and chat.
