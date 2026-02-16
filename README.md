# Interactive EBM Tutorial & Cobi Library Guide

An immersive, interactive educational platform designed to teach Energy-Based Models (EBMs) and guide users through the Cobi library. Built with a "digital textbook" metaphor, the site provides a linear, high-performance learning experience.

## Project Overview

The website is designed to feel like reading an interactive book, featuring:
- **Linear Navigation:** Previous/Next chapter "page flipping" with keyboard support.
- **Interactive Visualizations:** Deep dives into EBM concepts like Langevin Dynamics and Energy Landscapes using **React Flow** and **VisX**.
- **Unified Branding:** Styling consistent with the `cobi.tech` ecosystem, featuring **Electric Violet** accents on a **Quarter Pearl Lusta** (off-white) background.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with Typography plugin
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Visualizations:** [React Flow](https://reactflow.dev/) and [VisX](https://airbnb.io/visx/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites

- **Node.js:** v24.13.1 (specified in `.nvmrc`)
- **Package Manager:** `pnpm` (enabled via `corepack enable pnpm`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/cobi-inc/ebm_website.git
   cd ebm_website
   ```

2. **Set up Node version:**
   ```bash
   nvm use
   ```

3. **Enable pnpm (if not available):**
   ```bash
   corepack enable pnpm
   ```

4. **Install dependencies:**
   ```bash
   pnpm install
   ```

### Development

Start the development server:
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production

Build the application for production:
```bash
pnpm build
```

Run the production build locally:
```bash
pnpm start
```

### Linting

Run ESLint to check for code quality issues:
```bash
pnpm lint
```

---

## Deployment

The project is configured for deployment on Vercel and is accessible at [learn.cobi.tech](https://learn.cobi.tech).
