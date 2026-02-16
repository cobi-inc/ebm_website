# GEMINI.md - Project Context

## Project Overview
This project, **Interactive EBM Tutorial & Cobi Library Guide**, is an educational platform designed to provide an immersive, linear learning experience for Energy-Based Models (EBM) and the Cobi library. The application is built using the "Book" metaphor, featuring a hierarchical table of contents and page-turning navigation.

### Key Technologies
- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS (specifically using the `prose` class for readability)
- **Animations:** Framer Motion (for smooth "page" transitions)
- **Visualizations:** 
    - **React Flow:** For node-based architectural diagrams and process flows.
    - **VisX:** For data visualization, mathematical plotting, and D3-based animations.
- **Deployment:** Vercel (target domain: `learn.cobi.tech`)

## Brand & Styling Guide (Consistent with cobi.tech)
To maintain consistency with the Cobi brand, the following styles should be applied:

### Colors
- **Primary Background:** `#FFFCF5` (Quarter Pearl Lusta) - An off-white/cream color that supports the "book paper" aesthetic.
- **Accent Color:** `#BE11FF` (Electric Violet) - Used for highlights, active states, and call-to-actions.
- **Text Color:** `#000000` (Black) - For primary body text and headings.
- **Border/Muted Color:** Subtle variants of Black or Violet to define sections.

### Typography
- **Body Text:** Serif fonts (Merriweather preferred) to mimic printed book text.
- **Headings:** Bold sans-serif or the same serif font as body for a classic look.
- **Code Blocks:** Monospace fonts.
- **Readability:** Use Tailwind's `prose` class with a centered, readable max-width.

## Architecture & Design
The user interface is structured to mimic a digital textbook:
- **Sidebar:** A fixed, hierarchical Table of Contents with progress indicators.
- **Main Content:** A centered, readable prose area on the `#FFFCF5` background.
- **Navigation:** Fixed left/right arrows for chapter flipping, with keyboard support (`Left`/`Right` arrows).
- **Progress:** A global progress bar indicating the user's position in the tutorial.
- **Interactivity:** Uses interactive graphics to demystify EBM concepts.

## Building and Running
- **Node Environment:** v24.13.1 (managed via `nvm` and `.nvmrc`)
- **Package Manager:** `pnpm`

```bash
nvm use          # Switch to project Node version
pnpm install     # Install dependencies
pnpm dev         # Start development server
pnpm build       # Build for production
pnpm lint        # Run linting
```

## Responsive Design Rules
- All UI components **must** work correctly on both mobile and desktop viewports.
- Fixed-position elements (nav arrows, floating buttons, tooltips) must account for the sidebar width (`w-64` / 16rem) on `md:` breakpoints so they are never hidden behind it.
- Always test layout at mobile (<768px) and desktop (>=768px) sizes before considering a UI task complete.
- Use Tailwind responsive prefixes (`md:`, `lg:`) to adjust positioning and sizing per breakpoint.

## Git Workflow Rules
- **Use git worktrees for major work:** Before starting any major feature or bug fix, create a new git worktree (e.g., `git worktree add ../ebm-website-<branch-name> -b <branch-name>`) and work there. This keeps `master` clean and allows safe parallel development. Skip this only for trivial single-file edits.
- **Commit after every major change:** After completing any significant code change (new feature, bug fix, refactor), immediately create a commit with a descriptive message. This preserves a granular history so any change can be easily reverted if it introduces problems. Do not batch multiple unrelated changes into a single commit.

## Development Conventions
- **SEO & Performance:** Leverage Next.js SSR and SSG where appropriate.
- **Accessibility:** Ensure keyboard navigation is supported for page transitions.
- **Styling:** Follow Tailwind CSS conventions and use the `@tailwindcss/typography` plugin.
- **Deployment:** Configuration should be optimized for Vercel.
