---
description: "Use when creating or modifying design tokens, themes, color palettes, typography scales, spacing systems, component patterns, or visual consistency rules. Covers design system architecture, token naming, theming strategy, and component API design."
---

# Design System

## Token Architecture

- Use a layered token system: **primitive** → **semantic** → **component**
  - Primitive: raw values (`--gray-900: #111`)
  - Semantic: intent-based (`--color-bg-primary: var(--gray-900)`)
  - Component: scoped (`--btn-bg: var(--color-bg-primary)`)
- Name tokens by purpose, not appearance: `--color-danger` not `--color-red`
- Use consistent naming convention: `--{category}-{property}-{variant}-{state}`
  - Example: `--color-text-secondary`, `--space-lg`, `--radius-md`

## Color

- Define a complete palette with consistent lightness steps (50–950)
- Always provide sufficient contrast ratios: 4.5:1 for normal text, 3:1 for large text (WCAG AA)
- Design for dark mode from the start — use semantic color tokens that map differently per theme
- Limit accent colors to 1–2; use neutrals and subtle tints for hierarchy
- Use `oklch()` or `hsl()` for color manipulation — more perceptually uniform than hex/rgb

## Typography

- Establish a type scale with consistent ratios (1.125 minor second, 1.2 minor third, 1.25 major third)
- Define font stacks with proper fallbacks: `'Inter', system-ui, -apple-system, sans-serif`
- Use font-weight ranges: 400 (regular), 500 (medium), 600 (semibold), 700 (bold) — avoid more than 4 weights
- Set line-heights relative to font size: 1.1–1.2 for headings, 1.5–1.7 for body
- Use `letter-spacing` subtly: slightly negative for large headings, slightly positive for small caps/labels

## Spacing

- Use a base-4 or base-8 spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- Apply spacing consistently: use the scale for padding, margins, gaps — never arbitrary values
- Define spacing tokens: `--space-xs` (4px), `--space-sm` (8px), `--space-md` (16px), `--space-lg` (24px), `--space-xl` (32px), `--space-2xl` (48px), `--space-3xl` (64px)

## Elevation & Depth

- Use layered shadows for realistic depth: combine a tight shadow (form) with a diffuse shadow (ambient)
- Define elevation levels: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`
- Use backdrop-blur for glass/frosted effects: `backdrop-filter: blur(16px) saturate(180%)`
- Borders for subtle separation: prefer `1px solid rgba(255,255,255,0.06)` over shadows for flat UI

## Component Patterns

- Components should be self-contained with their own token-based styling
- Use consistent interactive states: default → hover → active → focus → disabled
- Focus states must be visible: use `outline` or `box-shadow`, never remove without replacement
- Transitions: use `150ms ease` for micro-interactions, `300ms ease` for layout changes
- Border-radius should be consistent: pick 2–3 values (e.g., 6px, 12px, 9999px) and stick to them

## Principles

- **Consistency over novelty** — every element should feel like part of the same family
- **Constraint enables creativity** — fewer choices, better designs
- **Hierarchy is everything** — size, weight, color, and spacing all work together to guide the eye
- **Whitespace is a feature** — generous spacing creates premium feel
