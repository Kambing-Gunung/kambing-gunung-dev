# Responsive Container System

## Review of Current Container Model

The current project already has a container abstraction:

- `src/components/layout/Container/Container.module.css`
- `src/components/layout/Section/Section.module.css`

This is a good foundation and clearly shows the intent to separate layout shell from content. However, the current system is still centered around desktop proportions and a single content width approach.

The current container sizes are:

- `size-sm`: `max-width: 24rem`
- `size-md`: `max-width: 32rem`
- `size-lg`: `max-width: 48rem`
- `size-xl`: `max-width: 72rem`

This is useful for text and component grouping, but it is not enough for a project that uses decorative scene layers and art-heavy sections.

## Recommended Container Model

### 1. Content Container

Purpose:

- readable text and standard UI blocks
- narrow-to-medium width content
- primary text column constraints

Rules:

- use a `max-width` around readable line lengths
- allow safe inner padding on mobile
- keep spacing consistent with the text flow
- do not use for panoramic visual scenes

Recommended behavior:

- mobile: `padding-inline: 1rem` to `1.25rem`
- tablet: `padding-inline: 1.5rem`
- desktop: `padding-inline: 2rem` and a centered max width

### 2. Wide Container

Purpose:

- section content that is wider than standard editorial blocks
- cards, project grids, or content clusters that need more area without becoming full-bleed

Rules:

- keep `max-width` much wider than standard text containers
- allow scenic composition to fit without forcing full bleed
- maintain safe horizontal padding on small screens

### 3. Full Width Section

Purpose:

- background bands, atmospheric gradients, and full-bleed visual stretches
- not intended for text-first readability alone

Rules:

- should not enforce rigid text widths
- should operate as a visual shell around a nested content block
- should be allowed to extend beyond the central content area if required by the design

### 4. Responsive Scene Container

Purpose:

- artistic layers like a sky, mountains, constellation, campsite, city, or decorative overlays
- scenes that intentionally use a large art canvas and layered positioning

Rules:

- reserve a dedicated scene canvas with its own width and internal coordinate system
- keep the art layers constrained within a `scene` wrapper
- allow the visual layer to overflow safely inside the scene bounds
- do not assign the same readability expectations to scene composition as to content blocks

This is the most important concept for the current project: scene art and main content are not the same type of layout.

## Critical Design Rule

Artistic scene layers should not be treated like normal content layout. They must be kept inside a controlled scene container that preserves their composition across screens.

For example:

- a full-bleed gradient layer may work naturally as a section background
- a panoramic image layer should stay in a `scene` wrapper, not directly in the main content width
- an absolute-positioned art layer inside a scene should use a controlled internal origin

## Recommended Responsiveness Strategy

1. Keep the outer page in a flexible content shell.
2. Introduce a scene wrapper for all art-heavy sections.
3. Use content containers for readable text blocks only.
4. Use wide containers for project and content grids.
5. Use full-width sections for atmospheric background layering.
6. Add safe inset padding on mobile to prevent edge clipping.

## Summary

The current design already contains a useful conceptual separation between sections, but the project needs a stricter hierarchy:

- content block for readables
- scene block for visual composition
- section block for atmospheric surfaces
- wide block for extended layouts

This will prevent the current desktop scenes from becoming mobile-breaking when the site is refactored.
