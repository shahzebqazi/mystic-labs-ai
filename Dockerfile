# AI Research & Testing Toolkit — Dev image
FROM python:3.12-slim

WORKDIR /app

# System deps for common ML tooling
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy dependency files first for layer caching
COPY requirements.txt* ./
RUN pip install --no-cache-dir -r requirements.txt 2>/dev/null || true

COPY . .

CMD ["python", "-c", "import sys; print('AGI Research environment ready.'); sys.exit(0)"]
