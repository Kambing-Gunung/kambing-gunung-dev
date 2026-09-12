# Sprint R1 — Responsive Foundation

## Objective

The objective of Sprint R1 is to establish a responsive foundation for the Kambing Gunung Developer Platform without altering the visual desktop baseline or touching source code. The work is limited to analysis, classification, and documentation.

This sprint focuses on:

- identifying the current global CSS and layout assumptions
- auditing Tailwind usage and custom CSS overlap
- defining a lightweight but maintainable breakpoint model
- establishing a responsive container strategy
- reviewing spacing and typography for scale and readability
- identifying high-risk overflow patterns before any refactor work begins

## Current Architecture Summary

The project currently uses a hybrid styling model:

- Tailwind CSS is installed and configured through Vite
- custom CSS and CSS modules are the dominant actual styling layer
- global variables and utilities centralize the token system
- layered sections and scene-based compositions are heavily based on fixed dimensions and absolute positioning
- the site is intentionally desktop-first and strongly aligned with retro, pixel-art aesthetics

The core design foundation is sound, but it is fundamentally built around a desktop art composition rather than a responsive content framework.

## Main Problems Found

- Several sections rely on large fixed art canvas sizes such as `2160px`.
- Large section heights and min-heights create rigid desktop assumptions.
- Many elements are absolutely positioned for artistic composition without a mobile-safe container layer.
- `overflow-x: hidden` is being used to suppress horizontal overflow without solving the root issue.
- Typography and spacing are mostly tokenized, but some text styles and layout assumptions still behave as desktop-only patterns.
- Tailwind is not currently the project’s dominant responsive architecture, so the responsive strategy must be thoughtfully layered into an existing custom CSS system.

## Recommended Responsive Architecture

The recommended architecture is a layered model:

1. Content layer
   - readable UI and text blocks
   - responsive width constraints
   - standard spacing and typography rules

2. Section layer
   - atmospheric backgrounds and full-width assertions
   - simple vertical rhythm
   - safe padding rules

3. Wide layer
   - larger layout groups like project boards or extended content sections

4. Scene layer
   - art-heavy backgrounds and decorative compositions
   - fixed or internal coordinate-based positioning
   - designed with an internal container rather than viewport-level assumptions

This distinction is critical because the project contains both text-first content and art-first scene composition, and those should not be managed by the same rules.

## Proposed Breakpoint System

Recommended breakpoints:

- Mobile: 0–767px
- Tablet: 768–1023px
- Desktop: 1024–1439px
- Wide Desktop: 1440px+

This is a simple, maintainable set that supports the site’s current visual identity while allowing smaller screens to remain readable and stable.

## Proposed Container System

The container system should include:

- Content Container for text and ordinary layout blocks
- Wide Container for larger editorial or gallery-like layouts
- Full Width Section for atmospheric backgrounds and full-bleed decoration
- Responsive Scene Container for artistic backgrounds and layered visual scenes

The scene container is the most important part of the project’s future responsive structure, because decorative scenes should not be treated as ordinary content blocks.

## Proposed Spacing System

The project already has a good spacing token baseline. The recommended approach is:

- keep the token system as the foundation
- use responsive scaling for layout spacing and section rhythm
- allow fixed or artistic positioning inside scene compositions
- do not convert all decorative pixel spacing into fluid values

## Proposed Typography System

The project already uses a strong size token system with `clamp()`. The correct direction is to keep that foundation and apply it more systematically:

- display typography: strong but responsive
- section headings: clamp-based and safe for wrapping
- body text: readable and controlled by container width
- UI text: compact and predictable
- decorative pixel text: preserved as art-layer typography only

## Global Overflow Strategy

The project should move from a defense strategy based mainly on `overflow-x: hidden` to a containment strategy:

- wrap scene layers in safe scene containers
- constrain art to controlled widths
- ensure text blocks do not force a single-line layout
- reduce negative offsets and rigid fixed dimensions in content areas
- reserve fixed positioning for visual scene architecture only

## Files That Will Eventually Need Refactoring

These are the most likely candidates for future responsive rework:

- `src/components/sections/home/FeaturedProjects/FeaturedProjects.module.css`
- `src/components/sections/home/Journey/Journey.module.css`
- `src/components/sections/home/Skills/Skills.module.css`
- `src/components/sections/home/Contact/Contact.module.css`
- `src/components/sections/home/About/About.module.css`
- `src/components/sections/home/Hero/HeroIntro.module.css`
- `src/styles/globals.css`
- `src/styles/base/variables.css`
- `src/components/layout/Container/Container.module.css`
- `src/components/navigation/Navbar/Navbar.module.css`

## Priority Order

1. Global CSS and overflow risk review
2. Breakpoint system definition
3. Container strategy and scene-container separation
4. Typography and spacing normalization
5. Section-by-section adaptation for mobile and tablet conditions
6. Final validation of desktop baseline retention

## Sprint R1 Completion Checklist

- [x] Global CSS audit completed
- [x] Tailwind audit completed
- [x] Breakpoint recommendation created
- [x] Container system defined
- [x] Spacing direction documented
- [x] Typography direction documented
- [x] Overflow risks identified
- [x] Sprint summary created

## Ready For Sprint R2?

Yes, with one clear condition: Sprint R2 should begin with section-by-section responsive design rules using the container and scene boundaries defined in this sprint. The foundation is ready, and the next phase should focus on implementation planning for the actual refactor without violating the established desktop baseline.
