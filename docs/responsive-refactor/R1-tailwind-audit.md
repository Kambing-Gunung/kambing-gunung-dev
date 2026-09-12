# Tailwind Responsive Audit

## Current Tailwind Strategy

Tailwind is configured in the project through Vite:

- `vite.config.ts` loads `@tailwindcss/vite`
- The project includes Tailwind as a dependency
- Tailwind is not the primary layout engine for the site

The actual application is primarily built using:

- CSS modules
- custom CSS files under `src/styles`
- imported design tokens and utility helpers
- custom classes like `.container`, `.section`, `.bg-primary`, etc.

In practice, Tailwind is present as a capability, but the project has not adopted it as a consistent responsive system across the app. The design language is still mostly custom CSS-driven, which is important for preserving the retro scene composition.

## Responsive Utilities Currently Used

The codebase does not show a wide or systematic Tailwind responsive utility usage pattern. The few obvious utility patterns are mostly limited to generic UI primitives rather than broad layout composition.

Observed examples:

- `Input.tsx` uses utility-like classes such as `d-flex`, `flex-column`, `gap-2`, and `w-100`.
- These are not part of a broad, systematized responsive strategy.
- There are no large-scale responsive utility patterns such as `sm:`, `md:`, `lg:`, or `xl:` used consistently across major sections.

This means the project is currently closer to a custom CSS + CSS-module architecture than a Tailwind-first architecture.

## Hardcoded Arbitrary Values

The primary risk is not random Tailwind use, but arbitrary widths/heights and absolute offsets implemented in CSS modules and custom class styles.

Examples of patterns that would be considered responsive candidates or problematic layout hardcode:

- `width: 2160px`
- `height: 1400px`
- `top: 450px`
- `left: 50%`
- `transform: translateX(-50%)`
- large background frames shaped for desktop-only composition
- `min-height: 1400px` and other large fixed section heights

These patterns are not inherently Tailwind misuses; they are representative of a desktop scene-driven layout system that needs a container abstraction layer before responsive conversion.

## Problem Areas

1. Tailwind is not used as the dominant responsive system.
2. The project relies on custom CSS for layout composition, especially in sections with layered backgrounds.
3. Scene-based sections are structurally optimized for desktop and are not designed around mobile-safe width constraints.
4. Without explicit wrapper rules, responsive behavior becomes a patchwork of `overflow: hidden` and fixed-size art layers.
5. There is a risk of conflicting conventions between utility classes and custom design system CSS.

## Consistency Issues

The biggest inconsistency is that the project defines a design-token system and custom utility layer, while also configuring Tailwind as if it may be used later. This creates an architectural split:

- custom CSS token system is the real style layer
- Tailwind configuration is only partially adopted
- layout logic is spread across CSS modules and utility CSS

This is not inherently wrong, but it does mean responsive refactoring must be planned as a system cleanup, not as a simple utility conversion.

## Recommended Tailwind Strategy

1. Keep Tailwind as a utility layer, but do not force it to own all visual art composition.
2. Use Tailwind for:
   - layout wrappers
   - spacing
   - breakpoints
   - content readability
   - mobile/desktop differences in text blocks
3. Keep custom CSS for:
   - layered scene art
   - pixel-art decoration
   - oversized background composition
   - scene-specific positions and overlays
4. Prefer responsive utility classes on content containers and wrappers, not directly on artistic scene layers.
5. Use a few clear breakpoints rather than many overrides.

## Refactor Checklist

- [ ] Define the actual responsive source of truth for layout decisions
- [ ] Decide whether Tailwind or CSS modules own each class of layout pattern
- [ ] Restrict Tailwind use to content containers, spacing, and breakpoint behavior
- [ ] Keep all art-scene coordinates inside custom CSS layers
- [ ] Remove reliance on ad hoc hardcoded utility classes for art composition
- [ ] Validate major section layouts against mobile breakpoints before converting more classes
- [ ] Preserve current desktop composition while introducing responsive wrappers
