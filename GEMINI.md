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

## Development Conventions
- **SEO & Performance:** Leverage Next.js SSR and SSG where appropriate.
- **Accessibility:** Ensure keyboard navigation is supported for page transitions.
- **Styling:** Follow Tailwind CSS conventions and use the `@tailwindcss/typography` plugin.
- **Deployment:** Configuration should be optimized for Vercel.
