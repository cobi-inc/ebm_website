# Project Specification: Interactive EBM Tutorial & Cobi Library Guide

## 1. Infrastructure and Deployment
**Goal:** Deploy a high-performance, interactive educational platform to `learn.cobi.tech`.

* **Framework:** Use **Next.js** (React). This is the optimal choice for Vercel deployment, offering server-side rendering for SEO and static generation for speed.
* **Hosting Platform:** Vercel.
* **Domain Configuration:**
    * The application must be configured to accept traffic from `learn.cobi.tech`.
    * *Instruction for Agent:* Ensure the `next.config.js` is optimized for a production build.
    * *DNS Note:* We will configure the CNAME record for `learn` on the `cobi.tech` DNS settings to point to `cobi-learning.vercel.app` (or the assigned project URL) once deployed.

## 2. User Interface & Experience (The "Book" Metaphor)
**Goal:** Create an immersive, linear learning experience that feels like reading an interactive digital textbook.

* **Global Layout:**
    * **Sidebar (Table of Contents):**
        * Position: Fixed to the left (collapsible on mobile).
        * Content: A hierarchical list of chapters/modules (e.g., "Introduction to Energy," "Langevin Dynamics," "Using the Cobi Library").
        * State: The current chapter must be highlighted. Completed chapters should have a visual indicator (checkmark).
    * **Main Content Area:**
        * Centered, readable max-width (e.g., `prose` class from Tailwind CSS).
        * Typography: Serif fonts for body text (Merriweather or similar) to mimic book print; Monospace for code blocks.
    * **Navigation Controls (The "Flipping" Mechanism):**
        * **Right Arrow:** Fixed to the vertical center of the right edge. Hovering shows the title of the *Next* chapter.
        * **Left Arrow:** Fixed to the vertical center of the left edge. Hovering shows the title of the *Previous* chapter.
        * **Keyboard Support:** Bind `Left Arrow` and `Right Arrow` keys to page navigation for accessibility.
    * **Progress Bar:** A subtle progress indicator at the top or bottom of the viewport showing how far through the "book" the user is.

* **Brand Colors & Styling (consistent with cobi.tech):**
    * **Primary Background:** `#FFFCF5` (Quarter Pearl Lusta) — off-white/cream supporting the "book paper" aesthetic.
    * **Accent Color:** `#BE11FF` (Electric Violet) — used for highlights, active states, and call-to-actions.
    * **Text Color:** `#000000` (Black) — for primary body text and headings.
    * **Border/Muted:** Subtle variants of Black or Violet to define sections.
    * **Body Typography:** Serif fonts (Merriweather preferred) to mimic printed book text.
    * **Heading Typography:** Bold sans-serif or the same serif font for a classic look.
    * **Code Blocks:** Monospace fonts.
    * **Readability:** Use Tailwind's `prose` class with a centered, readable max-width.

* **Transitions:**
    * Implement smooth sliding transitions (using Framer Motion or CSS transitions) when the user clicks the navigation arrows to simulate turning a page.

## 3. Interactive Graphics & Visualizations
**Goal:** Use interactive visualizations to demystify Energy-Based Models (EBMs), allowing users to "play" with the concepts described in the paper (e.g., Langevin Dynamics, Energy Landscapes).

* **Technology Stack:**
    * **React Flow:** Use for node-based architectural diagrams and process flows.
    * **VisX:** Use for data visualization, mathematical plotting, and animations (D3-based).