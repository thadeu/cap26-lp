---
description: "Use when building UI components, pages, layouts, animations, interactions, or any frontend/web development task. Covers React, JSX, CSS, HTML, accessibility, performance, and responsive design."
applyTo: "**/*.{jsx,tsx,js,ts,css,html}"
---

# Frontend Development

## Core Principles

- Write semantic HTML — use `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, `<main>`, `<aside>` over generic `<div>`
- Favor native CSS over JS-based styling solutions; use CSS custom properties for theming
- Prioritize performance: lazy-load images, minimize layout shifts (CLS), use `loading="lazy"` and `decoding="async"` on images
- Keep components small and composable — one responsibility per component
- Accessibility first: proper heading hierarchy, ARIA labels where needed, keyboard navigability, sufficient color contrast (WCAG AA minimum)

## React / JSX

- Use functional components with hooks exclusively
- Keep state as local as possible; lift only when truly shared
- Use `key` props meaningfully — never use array index as key for dynamic lists
- Avoid inline object/array literals in JSX props (causes unnecessary re-renders)
- Prefer named exports for components
- Use fragments `<>...</>` instead of wrapper `<div>` when no semantic element is needed

## CSS

- Use CSS custom properties (`--var`) for colors, spacing, typography, and breakpoints
- Mobile-first responsive design: write base styles for mobile, use `min-width` media queries for larger screens
- Use `rem` for typography, `em` for component-relative sizing, `px` only for borders and fine details
- Prefer `gap` over margins for spacing between flex/grid children
- Use `clamp()` for fluid typography and spacing
- Avoid `!important` — fix specificity instead
- Use logical properties (`inline-size`, `block-size`, `margin-inline`) for internationalization readiness

## Performance

- Minimize DOM depth — flatter trees render faster
- Use CSS `will-change` sparingly and only for elements that actually animate
- Prefer CSS animations/transitions over JS animations
- Use `transform` and `opacity` for animations (GPU-composited, no layout thrashing)
- Optimize images: use WebP/AVIF with `<picture>` fallbacks, serve appropriately sized images

## Responsive Design

- Design for touch targets: minimum 44×44px interactive areas on mobile
- Test at breakpoints: 320px, 480px, 768px, 1024px, 1280px, 1440px
- Use CSS Grid for page-level layouts, Flexbox for component-level layouts
- Hide/show content responsibly — don't render then hide with CSS for mobile

## Frameworks & Libraries

- Use tailwindcss for utility-first styling, but abstract common patterns into components
- Use React Router for client-side routing, but keep routes simple and flat
- Use state management libraries (Redux, Zustand) only when necessary — prefer React context or local
- Use testing libraries (Jest, React Testing Library) for unit and integration tests, but focus on testing behavior over implementation details
