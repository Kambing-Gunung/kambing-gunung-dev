# Kambing Gunung Developer Platform
# Responsive Refactor Blueprint

## Purpose

This documentation set defines the responsive refactor strategy for the Kambing Gunung Developer Platform without changing the live source code. It captures the current design risks, the reusable component contract, the home-section strategy, and the validation approach needed before implementation begins.

The purpose is to preserve the visually complete desktop baseline while preparing a controlled, low-risk path for responsive adaptation on smaller screens.

## Current Problem

The project is strong visually on desktop, but many sections rely on:

- large fixed scenic canvases
- absolute positioning and transform offsets
- rigid widths and large vertical heights
- text that assumes desktop-only wrapping behavior
- scene-heavy composition that is difficult to shrink without careful containment

These patterns are not inherently wrong, but they create risk when the viewport becomes narrow. The current problem is not the design language itself; it is the interaction between the visual identity and the assumptions baked into layout behavior.

## Core Philosophy

The project should remain desktop-first in visual baseline but must not ignore mobile, tablet, and wide desktop behavior.

The guiding principle is:

"Do not remove hardcoded values blindly."

This means that the refactor must distinguish between different categories of hardcoded design decisions:

- Safe Hardcode: intentional aesthetic values such as decorative geometry, atmospheric styling, pixel-art motifs, and branded visual identity
- Responsive Candidate: values that are fixed but still valid candidates for scaling or breakpoint control without changing the design intent
- Problematic Layout Hardcode: values that lock the layout to a desktop assumption and create breakage on smaller screens

The objective is to keep the safe and intentional parts of the design while converting the risky layout assumptions into responsive-safe rules.

## Sprint Overview

### Sprint R1 — Responsive Foundation

This sprint establishes the global baseline:

- responsive breakpoints
- container system
- spacing system
- typography rules
- overflow and layout risk classification
- framework for safe hardcode vs. problematic hardcode

Key documents:

- [R1-breakpoints.md](./R1-breakpoints.md)
- [R1-container-system.md](./R1-container-system.md)
- [R1-spacing-system.md](./R1-spacing-system.md)
- [R1-typography-system.md](./R1-typography-system.md)
- [R1-overflow-audit.md](./R1-overflow-audit.md)
- [R1-global-css-audit.md](./R1-global-css-audit.md)
- [R1-tailwind-audit.md](./R1-tailwind-audit.md)
- [R1-responsive-foundation.md](./R1-responsive-foundation.md)

### Sprint R2 — Reusable Components

This sprint reviews reusable UI and layout primitives:

- navbar behavior
- section-heading contract
- button responsiveness
- divider usage
- frames and panels
- common container semantics

Key documents:

- [R2-navbar.md](./R2-navbar.md)
- [R2-section-heading.md](./R2-section-heading.md)
- [R2-divider.md](./R2-divider.md)
- [R2-buttons.md](./R2-buttons.md)
- [R2-frames.md](./R2-frames.md)
- [R2-common-containers.md](./R2-common-containers.md)
- [R2-reusable-components.md](./R2-reusable-components.md)

### Sprint R3 — Home Sections

This sprint audits the home page by section:

- Hero
- About
- Skills
- Featured Projects
- Journey
- Contact
- Footer

Key documents:

- [R3-hero.md](./R3-hero.md)
- [R3-about.md](./R3-about.md)
- [R3-skills.md](./R3-skills.md)
- [R3-featured-projects.md](./R3-featured-projects.md)
- [R3-journey.md](./R3-journey.md)
- [R3-contact.md](./R3-contact.md)
- [R3-footer.md](./R3-footer.md)
- [R3-home-sections.md](./R3-home-sections.md)

### Sprint R4 — Device Validation

This sprint creates the validation and testing strategy for the real device widths that matter:

- 320px
- 375px
- 390px
- 414px
- 768px
- 1024px
- 1280px
- 1440px+

Key document:

- [R4-device-validation.md](./R4-device-validation.md)

## Recommended Implementation Order

1. Stabilize the responsive foundation from Sprint R1
2. Standardize reusable patterns from Sprint R2
3. Validate each home section with section-level rules from Sprint R3
4. Use Sprint R4 to test against real viewport targets and acceptance criteria
5. Only then begin any actual code implementation work

This keeps the refactor layered and risk-managed.

## Refactor Rules

- Preserve the current desktop baseline as the reference state
- Do not remove hardcoded values blindly
- Separate content layout from scenic composition
- Constrain scene-heavy elements instead of flattening them
- Make text wrapping and readibility the first priority at narrow widths
- Treat motion, hover states, and decorative effects as secondary to safe layout behavior
- Use breakpoint logic to protect layout integrity, not to destroy design identity

## Desktop Preservation Rules

- Keep the existing desktop visual identity as the primary baseline
- Do not make desktop sections flatter or less atmospheric just because mobile needs adaptation
- Do not reduce the visual richness of scene-heavy sections unless it is required for structural safety
- Validate all responsive rules against desktop integrity before implementation acceptance

## Mobile Stress Test Rules

- Treat 320px, 375px, and 390px as the critical stress-test widths
- Expect narrow-width overflow, wrapping, clipping, and spacing problems first
- Preserve usability over perfect visual symmetry
- Ensure touch targets remain comfortable and readable
- Ensure no horizontal scrolling appears from art, overlays, or absolute-positioned elements

## Definition of Responsive Done

Responsive work is considered complete only when:

- no horizontal overflow remains across target widths
- no major content clipping occurs in home sections
- headings and paragraphs are readable and properly wrapped
- all key interactions remain usable on touch devices
- the desktop baseline stays visually complete and stable
- the validation checklist passes for all target viewports

This blueprint is intentionally documentation-first. It exists to make the actual implementation safer, more controlled, and better aligned with the project’s visual identity.
