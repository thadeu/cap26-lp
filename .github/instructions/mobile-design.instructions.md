---
description: "Use when designing or building for mobile devices, responsive layouts, touch interfaces, native-feel web experiences, PWA, or adapting desktop designs to mobile. Covers mobile-first patterns, touch UX, viewport handling, mobile performance, and platform conventions (iOS/Android)."
---

# Mobile Design

## Mobile-First Approach

- Start with the smallest screen (320px) and progressively enhance
- Content hierarchy matters more on mobile — ruthlessly prioritize
- Every element must earn its place on a small screen; if it's not essential, hide or defer it
- Vertical rhythm is king — users scroll vertically, design for that flow

## Touch Interaction

- Minimum touch target: 44×44pt (iOS) / 48×48dp (Android) — never smaller
- Space interactive elements at least 8px apart to prevent mistaps
- Place primary actions in the thumb zone (bottom 1/3 of screen for one-handed use)
- Swipe, pull-to-refresh, and long-press are native patterns — use them when appropriate
- Avoid hover-dependent interactions — there is no hover on touch devices
- Use `@media (hover: hover)` to conditionally apply hover states only on pointer devices

## Navigation

- Bottom navigation for 3–5 primary destinations (iOS tab bar / Android bottom nav pattern)
- Hamburger menus hide navigation — use sparingly and only for secondary items
- Sticky headers should be compact (44–56px height) to preserve content space
- Use full-screen overlays or slide-in panels instead of dropdowns on mobile
- Back navigation should be predictable and consistent

## Typography on Mobile

- Minimum body text: 16px (prevents iOS auto-zoom on input focus)
- Headings: 24–32px for hero, 20–24px for section titles — don't go too large
- Line length: 35–50 characters per line on mobile for comfortable reading
- Use `-webkit-text-size-adjust: 100%` to prevent text scaling issues

## Layout Patterns

- Single column layout is the default on mobile — don't force multi-column below 480px
- Cards stack vertically with full width; use horizontal scroll for card carousels
- Use `100dvh` (dynamic viewport height) instead of `100vh` to account for browser chrome
- Safe areas: use `env(safe-area-inset-*)` for devices with notches/dynamic islands
- Avoid fixed positioning for large elements — it eats valuable viewport space

## Performance on Mobile

- Mobile networks are slower — optimize for 3G: target <3s Time to Interactive
- Lazy load images below the fold with `loading="lazy"`
- Use responsive images: `<picture>` with `srcset` for appropriate resolution per device
- Minimize JavaScript — every KB costs more on mobile (slower CPU + network)
- Use `font-display: swap` to prevent invisible text during font loading
- Preconnect to critical origins: `<link rel="preconnect" href="...">`

## Platform Conventions

### iOS
- SF-style UI: thin borders, subtle shadows, rounded corners (12–16px)
- System font: `-apple-system, BlinkMacSystemFont` for native feel
- Backdrop blur is a core iOS pattern — use `backdrop-filter: blur()` generously
- Respect Dynamic Island and Home indicator areas

### Android
- Material Design principles: surfaces, elevation, state layers
- System font: `Roboto, 'Google Sans'` for native feel
- Ripple/state-layer feedback on touch interactions
- Edge-to-edge design with system bar transparency

## Responsive Breakpoints

```
320px  — Small phones (iPhone SE)
375px  — Standard phones (iPhone 14)
414px  — Large phones (iPhone 14 Plus)
480px  — Small-to-medium transition
768px  — Tablets portrait
1024px — Tablets landscape / small laptops
1280px — Desktop
1440px — Large desktop
```

## Anti-patterns

- Don't shrink desktop layouts to fit mobile — redesign for the context
- Don't use tiny text to "fit more" — readability over density
- Don't rely on pinch-to-zoom as a substitute for proper sizing
- Don't use `position: fixed` for bottom CTAs without accounting for virtual keyboard
- Don't assume fast network — test on throttled connections
