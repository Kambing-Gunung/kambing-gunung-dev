# Sprint R3 — Hero Section

## Objective

Audit the hero section as the primary atmospheric entry point and define the responsive contract that preserves the current desktop baseline while safely adapting the hero to tablet and mobile widths.

## Section Classification

### 1) Normal content layout

The hero content is structurally straightforward:

- central stacked text block
- kicker, title, tagline, and description
- centered scroll hint
- optional CTA or visual emphasis in later iterations

This part should behave like a normal content layer and should be the first area to receive responsive text wrapping and spacing rules.

### 2) Artistic scene composition

The hero is strongly scene-driven:

- full-bleed background image
- dark atmospheric overlay gradient
- bottom fade to the next section
- min-height-driven visual cadence
- strong pixel/retro presentation in the title and kicker

This is not just a generic container. It is an atmospheric scene that must remain visually intact on desktop.

## Current Desktop Baseline

The desktop baseline is intentionally strong:

- full-screen hero composition with immersive background
- centered title stack with strong branded typography
- high-contrast text on a dark atmospheric overlay
- scroll indicator anchored at the bottom of the viewport

The combination of a background image, overlays, and long-form hero treatment is a core part of the visual identity.

## Responsive Risks

The main risk is not the art direction itself but the assumptions inside the text layer:

- `white-space: nowrap` is used on kicker, title, and tagline
- `min-height: 100vh` can create oversized vertical spacing on smaller screens
- single-line typography can overflow horizontally when viewport narrows
- background image and overlay are designed for a wide desktop canvas and may not be ideal on mobile without a safe framing strategy

## Recommended Responsive Behavior

### Mobile

- reduce hero height to a content-driven minimum rather than a strict full viewport height
- allow text stack lines to wrap naturally in kicker, title, and tagline
- keep the background image centered and constrained within a safe frame
- maintain the atmospheric overlay, but avoid overly aggressive vertical spacing
- keep the scroll indicator compact and centered

### Tablet

- keep the full hero mood, but relax the rigid vertical compression
- allow text to wrap slightly more freely without losing hierarchy
- reduce the large spacing used around the text stack

### Desktop

- preserve the current composition, spacing, and scale
- keep the layered background and centered hero treatment as the baseline

### Wide Desktop

- allow the background to breathe, but do not stretch the text beyond its current comfortable proportions

## Implementation Guardrails

1. Do not remove the atmospheric background or dark gradient treatment.
2. Treat the text stack as the part that should adapt, not the art layer.
3. Convert rigid desktop typography assumptions into responsive type flow.
4. Keep the scroll hint and hero symmetry, but avoid forcing a single-line layout on small screens.

## Summary

The hero should remain visually faithful to the desktop baseline, but the actual refactor should target the content text flow and viewport assumptions rather than the background art itself. The hero is a high-visibility section, but the main responsive fix is to make the text layout more flexible while preserving the framed atmospheric mood.
