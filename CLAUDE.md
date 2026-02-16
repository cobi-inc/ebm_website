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

## Responsive Design Rules

- All UI components **must** work correctly on both mobile and desktop viewports
- Fixed-position elements (nav arrows, floating buttons, tooltips) must account for the sidebar width (`w-64` / 16rem) on `md:` breakpoints so they are never hidden behind it
- Always test layout at mobile (<768px) and desktop (>=768px) sizes before considering a UI task complete
- Use Tailwind responsive prefixes (`md:`, `lg:`) to adjust positioning and sizing per breakpoint

## Git Workflow Rules

- **Use git worktrees for major work:** Before starting any major feature or bug fix, create a new git worktree (e.g., `git worktree add ../ebm-website-<branch-name> -b <branch-name>`) and work there. This keeps `master` clean and allows safe parallel development. Skip this only for trivial single-file edits.
- **Commit after every major change:** After completing any significant code change (new feature, bug fix, refactor), immediately create a commit with a descriptive message. This preserves a granular history so any change can be easily reverted if it introduces problems. Do not batch multiple unrelated changes into a single commit.

## Key Design Documents

- `WEBSITE_DESIGN_DOC.md` — Full project specification (infrastructure, UI/UX, content structure)
