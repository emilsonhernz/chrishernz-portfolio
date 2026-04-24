# Chris Emilson Hernaez Portfolio

Technical documentation for the portfolio application.

## Overview

This project is a personal portfolio website built to present Emil Hernaez as both:

- a back-end software engineer
- an automation and integration specialist

The site is intentionally structured around those two professional tracks. Instead of acting like a generic marketing website, it separates content into focused user journeys:

- `Resume` for engineering and hiring conversations
- `Services` for automation, integration, and business workflow clients
- `Projects` as a shared proof-of-work library
- `Contact` as the conversion point

## Tech Stack

### Core Framework

- `Next.js` using the App Router
- `React`
- `TypeScript`

### Styling and UI

- `Tailwind CSS` via `@import "tailwindcss"` in [src/app/globals.css](/abs/path/src/app/globals.css)
- `lucide-react` for icons
- `next/font` for Geist and Geist Mono font loading

### Motion and Visual Effects

- `framer-motion` for section reveals, page transitions, and modal animation
- `@react-three/fiber` and `three` for the hero 3D visualization

### Tooling

- `ESLint`
- `TypeScript`
- `PostCSS`

## Architectural Pattern

The application follows a **component-based, data-driven, route-oriented architecture**.

### 1. Route-Oriented Composition

Pages are defined through the Next.js App Router under [src/app](/abs/path/src/app):

- [src/app/page.tsx](/abs/path/src/app/page.tsx)
- [src/app/projects/page.tsx](/abs/path/src/app/projects/page.tsx)
- [src/app/resume/page.tsx](/abs/path/src/app/resume/page.tsx)
- [src/app/services/page.tsx](/abs/path/src/app/services/page.tsx)
- [src/app/contact/page.tsx](/abs/path/src/app/contact/page.tsx)

Each route acts mainly as a composition layer. The page files are intentionally thin and mostly assemble reusable sections and content modules.

Why this pattern is used:

- keeps route files readable
- makes each page easy to change without touching unrelated logic
- supports Next.js metadata per route
- helps separate page structure from presentation details

### 2. Component-Based UI

Reusable UI is placed in [src/components](/abs/path/src/components). Examples:

- `Navbar`, `Footer`, `SectionHeader`, `CTA`
- `ProjectCard`, `ProjectModal`, `ProjectFilter`
- `MotionSection`
- `WorkflowVisualizer`
- `Hero`, `Hero3D`

Why this pattern is used:

- promotes reuse across multiple pages
- avoids duplicated markup and styling
- keeps interactive behavior isolated
- makes the UI easier to maintain and scale

### 3. Data-Driven Content Layer

Content is centralized in typed data files under [src/data](/abs/path/src/data):

- [src/data/profile.ts](/abs/path/src/data/profile.ts)
- [src/data/projects.ts](/abs/path/src/data/projects.ts)
- [src/data/resume.ts](/abs/path/src/data/resume.ts)
- [src/data/services.ts](/abs/path/src/data/services.ts)

Why this pattern is used:

- separates content from rendering logic
- makes text updates faster and safer
- allows the same source data to feed multiple views
- improves maintainability for portfolio content that changes often

This is especially visible in the `Projects`, `Resume`, and `Services` pages, where structured arrays drive cards, filters, timelines, and grouped skills.

## Rendering Strategy

The project uses a **hybrid server/client rendering approach**.

### Server Components by Default

Most route files are server components because they do not declare `"use client"`.

Examples:

- [src/app/page.tsx](/abs/path/src/app/page.tsx)
- [src/app/resume/page.tsx](/abs/path/src/app/resume/page.tsx)
- [src/app/services/page.tsx](/abs/path/src/app/services/page.tsx)

Why this is used:

- reduces unnecessary client-side JavaScript
- keeps static content efficient
- fits portfolio pages that are mostly content presentation

### Client Components for Interaction

Interactive features are isolated into client components:

- [src/components/ProjectFilter.tsx](/abs/path/src/components/ProjectFilter.tsx)
- [src/components/ProjectModal.tsx](/abs/path/src/components/ProjectModal.tsx)
- [src/components/ContactForm.tsx](/abs/path/src/components/ContactForm.tsx)
- [src/components/WorkflowVisualizer.tsx](/abs/path/src/components/WorkflowVisualizer.tsx)
- [src/components/Hero3D.tsx](/abs/path/src/components/Hero3D.tsx)
- [src/app/template.tsx](/abs/path/src/app/template.tsx)

Why this is used:

- limits hydration to places that truly need state, effects, animation, or browser APIs
- keeps the overall site lighter
- makes interactivity easier to reason about

## Design Approach

The visual design follows a **modern technical portfolio style** with a dark interface, subtle grid textures, cyan/green accent lighting, and motion-led hierarchy.

### Design Characteristics

- dark background with layered gradients and grid overlays
- strong section spacing and card-based layout
- technical visual language rather than a corporate template feel
- restrained accent colors for calls to action and focus states
- animated entry transitions for a more polished experience

These are mainly defined in:

- [src/app/globals.css](/abs/path/src/app/globals.css)
- shared component class names throughout [src/components](/abs/path/src/components)

Why this design is used:

- matches the technical positioning of the portfolio
- helps the site feel more engineering-focused than generic
- creates a clear visual separation between content blocks
- supports both recruiter browsing and client scanning behavior

## Motion System

Motion is handled with `framer-motion` and shared presets in [src/lib/motion.ts](/abs/path/src/lib/motion.ts).

Patterns used:

- fade-up section reveals
- staggered card entrance animations
- animated route transitions in [src/app/template.tsx](/abs/path/src/app/template.tsx)
- modal open/close transitions

Accessibility consideration:

- reduced-motion users are respected through `useReducedMotion` and CSS fallbacks in [src/app/globals.css](/abs/path/src/app/globals.css)

Why this is used:

- improves perceived polish
- gives sections a clearer reading flow
- keeps animation reusable instead of redefining it everywhere

## 3D Hero Design

The homepage includes a custom 3D hero visualization in [src/components/Hero3D.tsx](/abs/path/src/components/Hero3D.tsx).

Implementation details:

- built with `@react-three/fiber`
- uses `three` primitives and wireframe geometry
- responds to pointer movement
- degrades gracefully when reduced motion is preferred

Why this is used:

- gives the landing page a stronger technical identity
- creates a more memorable first impression
- visually reinforces systems, networks, and engineering themes

## Information Architecture

The site has a clear content model:

- `Home`: positioning, featured work, and primary calls to action
- `Projects`: filtered project library with modal detail views
- `Resume`: skills, summary, timeline, and engineering-focused projects
- `Services`: business automation offerings, process, and workflow examples
- `Contact`: inquiry routing and communication entry point

Why this structure is used:

- supports different audiences without mixing all messaging together
- gives recruiters and clients distinct paths
- keeps navigation simple while still covering multiple professional angles

## Current Implementation Notes

### Strengths

- clean separation between content, routes, and reusable components
- good use of client/server boundaries
- strong reuse of section-level building blocks
- metadata is configured in the root layout and per page
- content is easy to update through typed arrays and objects

### Current Limitations

- the contact form is currently a front-end shell and uses `mailto:` rather than a real backend or form provider
- project media includes placeholder slots where real assets can be added later
- dependency versions are set to `"latest"` in `package.json`, which is convenient during early development but less predictable for long-term reproducibility

## Suggested Future Improvements

- connect the contact form to an API route or external form service
- add project screenshots and demo videos to replace placeholders
- pin dependency versions for more stable builds
- add automated tests for key interactive components
- add SEO enhancements such as richer Open Graph assets and structured data

## Summary

This portfolio uses a practical modern front-end architecture:

- Next.js App Router for route structure and metadata
- React components for reusable UI composition
- TypeScript for safer development
- Tailwind CSS for fast and consistent styling
- Framer Motion for controlled animation
- React Three Fiber for a branded technical hero effect
- a data-driven content model for easier maintenance

The overall design choice is intentional: keep the site visually modern and technically credible while maintaining a simple internal structure that is easy to update as Emil's projects and services evolve.
