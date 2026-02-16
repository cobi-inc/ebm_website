# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interactive EBM (Energy-Based Models) Tutorial & Cobi Library Guide — an educational platform deployed to `learn.cobi.tech`.

## Development Setup

- **Node version management:** nvm — pinned in `.nvmrc` (v24.13.1 LTS)
- **Package manager:** pnpm (enabled via `corepack enable pnpm`)

```bash
nvm use          # switch to project Node version
pnpm install     # install dependencies
```

## Tech Stack (per design doc)

- **Framework:** Next.js (React)
- **Hosting:** Vercel
- **Styling:** Tailwind CSS (using `prose` for readable content)
- **Animations:** Framer Motion or CSS transitions
- **Visualizations:** React Flow (node-based diagrams/process flows), VisX (D3-based data visualization and mathematical plotting)
- **Typography:** Serif fonts (Merriweather) for body text, monospace for code blocks

## Brand & Styling (Cobi)

### Colors
- **Primary Background:** `#FFFCF5` (Quarter Pearl Lusta) — off-white/cream "book paper" aesthetic
- **Accent Color:** `#BE11FF` (Electric Violet) — highlights, active states, call-to-actions
- **Text Color:** `#000000` (Black) — primary body text and headings
- **Border/Muted:** Subtle variants of Black or Violet for section dividers

### Typography
- **Body Text:** Serif (Merriweather) to mimic printed book text
- **Headings:** Bold sans-serif or matching serif for a classic look
- **Code Blocks:** Monospace fonts
- **Readability:** Tailwind `prose` class with centered, readable max-width

## Architecture Notes

- The site follows a "book" metaphor: linear chapter-based navigation with a sidebar table of contents, previous/next arrows, and a progress bar
- Sidebar is fixed-left, collapsible on mobile, with current chapter highlighted and completion indicators
- Navigation arrows are fixed to viewport edges with hover previews of chapter titles
- Keyboard navigation (left/right arrow keys) required for accessibility
- Page transitions should simulate page-turning with smooth sliding animations

## Key Design Documents

- `WEBSITE_DESIGN_DOC.md` — Full project specification (infrastructure, UI/UX, content structure)
