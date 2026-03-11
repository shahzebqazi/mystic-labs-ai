# Libra AI Library & Librarian

> Maintainers: Before any change, check [[prompt]].

This is an Obsidian-first, AI-assisted personal library. The library stores metadata and notes; large media files are ignored by default via `.jjignore`.

## Index
- [[README]] — this file
- [[prompt]] — versioned prompt, TODO, MCP mental map
- [[Books]] — style guide, librarian tasks, customization

## Structure (on-demand)
- Authors/ — each author has a folder (created when adding first work)
  - Authors/Last, First/ — author root
    - _Author.md — evolving author summary and bibliography
    - <Book Title>/ — one folder per work
      - _Book.md — book note (summary, insights, metadata, links)
      - media/ — user media (epub/pdf/audio/video); ignored by VCS
- Categories/ — only created when first used (topics, series, courses)
- .jjignore — excludes user media by default

## Conventions
- Each new book creates `Authors/<Author>/_Author.md` if missing, and `<Book Title>/_Book.md`
- Do not commit media; store links in `_Book.md` and place files in `media/`
- Keep author summary updated in `_Author.md` as you read more

## Open in Obsidian
- This repository is an Obsidian vault. In Obsidian, choose “Open folder as vault” and select this directory.
- Wikilinks like [[prompt]] and [[Books]] resolve within Obsidian.
- Keep large media in `media/` folders; they're ignored by VCS.

## GitHub
Remote: https://github.com/Shahzebqazi/Libra-AI-Library-Librarian.git

## Add a new book (one‑shot)
Copy, edit variables, and run in zsh:

```bash
# zsh
AUTHOR="Last, First"
BOOK="Book Title"
YEAR="2025"
PUBLISHER="Publisher"
ISBN=""
EDITION=""
SOURCE="epub"   # epub|pdf|torrent|webpage
LINK=""         # URL to source or local media path

AUTHOR_DIR="Authors/${AUTHOR}"
BOOK_DIR="${AUTHOR_DIR}/${BOOK}"
MEDIA_DIR="${BOOK_DIR}/media"
AUTHOR_MD="${AUTHOR_DIR}/_Author.md"
BOOK_MD="${BOOK_DIR}/_Book.md"

mkdir -p "$MEDIA_DIR"

# Derive display name "First Last" if AUTHOR is "Last, First"
DISPLAY="$AUTHOR"
if [[ "$AUTHOR" == *","* ]]; then
  DISPLAY="$(echo "$AUTHOR" | awk -F',' '{gsub(/^ /,"",$2); gsub(/ $/,"",$1); print $2" "$1}')"
fi

# Create author file if missing
if [[ ! -f "$AUTHOR_MD" ]]; then
  cat > "$AUTHOR_MD" <<EOF
---
name: $AUTHOR
display: $DISPLAY
aka: []
links: []
summary: |
  Short evolving summary of author’s themes and significance.
bibliography: []
---
EOF
fi

# Append book entry to bibliography (simple insert after "bibliography:")
if grep -q '^bibliography:' "$AUTHOR_MD"; then
  awk '1; /^bibliography:/ {print "  - '"$BOOK"' ("'"$YEAR"')"}' "$AUTHOR_MD" > "$AUTHOR_MD.tmp" && mv "$AUTHOR_MD.tmp" "$AUTHOR_MD"
fi

# Create per-book note
cat > "$BOOK_MD" <<EOF
---
title: $BOOK
author: $AUTHOR
publisher: $PUBLISHER
isbn: $ISBN
edition: $EDITION
year: $YEAR
source: $SOURCE
source_link: $LINK
notes_link: [[${AUTHOR}/${BOOK}/_Book]]
status: not-started
---

## Summary
Key insights, arguments, and takeaways.

## Historical Context
Relevant context and timelines.

## Key Insights
- 

## Quotes
- "Quote" — page

## References
- citation keys, DOIs, etc.

## Links
- media: ${AUTHOR}/${BOOK}/media/ (ignored by VCS)
EOF

# Optional: record the doc changes with jj
jj describe --reset-author -m "docs: add $BOOK by $AUTHOR ($YEAR)"
```

Notes:
- Media files go in `media/` and are ignored by `.jjignore`.
- Update `_Author.md` summary over time as you read more by the author.
- Use [[Books]] for full templates and style guide.
