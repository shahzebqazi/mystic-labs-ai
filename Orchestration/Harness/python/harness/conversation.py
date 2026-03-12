# In-memory conversation state and system prompt.
from typing import Optional

from .config import start_here_path
from .guard_rails import trim_conversation, trim_messages_for_context


def load_system_prompt_from_start_here() -> str:
    """Load START_HERE.md as default system/behavior source if present."""
    p = start_here_path()
    if p.exists():
        return p.read_text(encoding="utf-8")
    return ""


class Conversation:
    def __init__(self, system_prompt: Optional[str] = None, use_start_here: bool = True):
        if system_prompt is not None:
            self._system = system_prompt
        elif use_start_here:
            self._system = load_system_prompt_from_start_here()
        else:
            self._system = ""
        self._messages: list[dict] = []

    @property
    def system_prompt(self) -> str:
        return self._system

    def set_system_prompt(self, value: str) -> None:
        self._system = value

    def messages_for_api(self) -> list[dict]:
        """Messages to send to Ollama (system + last N)."""
        out = []
        if self._system.strip():
            out.append({"role": "system", "content": self._system.strip()})
        trimmed = trim_messages_for_context(self._messages)
        out.extend(trimmed)
        return out

    def add_user(self, content: str) -> None:
        self._messages.append({"role": "user", "content": content})
        self._messages = trim_conversation(self._messages)

    def add_assistant(self, content: str) -> None:
        self._messages.append({"role": "assistant", "content": content})
        self._messages = trim_conversation(self._messages)

    def clear(self) -> None:
        self._messages.clear()

    def history(self) -> list[dict]:
        return list(self._messages)
