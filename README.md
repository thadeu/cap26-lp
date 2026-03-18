<p align="center">
  <img src="public/b/cap26-lockup-horizontal.svg" alt="Cap26" width="320" />
</p>

## Table of Contents

- [Overview](#overview)
- [Naming Convention](#naming-convention)
- [Product Highlights](#product-highlights)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Brand Assets](#brand-assets)
- [Localization](#localization)
- [License](#license)

## Overview

This repository contains the public landing page for Cap26. It highlights the product, pricing, feature sections, FAQ, localization support, and brand assets used across the site.

## Naming Convention

Cap26 follows a year-based product naming system inspired by Apple's platform naming rhythm.

The number represents the release year in short form:

- `Cap26` for the 2026 release cycle
- `Cap27` for the 2027 release cycle

We adopted this approach for three reasons:

- It makes the release generation immediately clear to users and the team
- It keeps the brand simple while giving each major yearly release a distinct identity
- It aligns the product story with the cadence users already recognize from Apple ecosystem software

In practice, the name communicates both the brand and the expected era of the release without relying on semantic version numbers in user-facing branding.

## Product Highlights

- Screen, microphone, webcam, and system audio capture in one session
- Built-in editing workflow for cuts, rearranging, and refinement
- Automatic captions, cursor smoothing, zoom, and background customization
- Fast export flow for tutorials, demos, and product videos
- English and Brazilian Portuguese content support

## Tech Stack

- Vike
- React 19
- Vite
- Tailwind CSS 4
- Cloudflare Pages via Wrangler

## Requirements

- Node.js 24 or newer
- pnpm 10 or newer

## Getting Started

```bash
pnpm install
pnpm dev
```

The local development server starts with Vike and Vite.

## Available Scripts

```bash
pnpm dev
pnpm build
pnpm preview
pnpm deploy:prod
```

## Deployment

Production deployment is configured for Cloudflare Pages.

```bash
pnpm deploy:prod
```

This command builds the site and deploys `dist/client` to the `cap26-lp` Cloudflare Pages project.

## Project Structure

```text
.
├── components/   # Shared UI pieces and logo experiments
├── i18n/         # Translation utilities and locale content
├── pages/        # Vike routes, layout, and page-level styles
├── public/       # Static assets, screenshots, videos, and brand files
├── vite.config.ts
└── wrangler.toml
```

## Brand Assets

Brand SVG files are available in `public/b/`.

- `cap26-lockup-horizontal.svg`
- `cap26-lockup-vertical.svg`
- `cap26-icon.svg`

## Localization

The site currently ships with:

- English (`en`)
- Brazilian Portuguese (`pt-BR`)

Translations live in `i18n/translations.ts`.

## License

This project is private unless stated otherwise by the repository owner.