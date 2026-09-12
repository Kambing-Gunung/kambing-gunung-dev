# Sprint R3 — Contact Section

## Objective

Audit the Contact section and define the responsive contract for a scenic environment layout that combines a landscape backdrop, a content block, and a contact-card grid.

## Section Classification

### 1) Normal content layout

The Contact section features a genuine content block:

- title and descriptive intro
- contact cards with icon, label, and value
- closing statement and divider/fire motif

This is the readable content layer and should respect spacing and readability across all breakpoints.

### 2) Artistic scene composition

The section has a clear scenic environment:

- mountain layer
- campsite layer
- foreground layer
- dark atmospheric overlay
- large background composition centered on a 2160px canvas

The landscape part is intentional and atmospheric, but it should be treated as a scene wrapper around the content.

## Current Desktop Baseline

The desktop section is strong and coherent:

- full landscape environment behind centered contact content
- large visual depth with layered mountains and campsite foreground
- contact cards displayed as a multi-column grid with strong spacing
- closing divider and fire icon provide a final branded moment

This section is visually stable and should remain largely intact.

## Responsive Risks

The risks are primarily centered on the scenic environment and the card grid:

- the mountain, campsite, and foreground layers all use a `2160px` wide canvas
- the entire section has a large fixed vertical height: `min-height: 1200px`
- the contact cards are laid out with a grid that is comfortable on desktop but becomes too dense on smaller screens
- the card value text uses `white-space: nowrap`, which risks overflow when the contact strings become longer or narrower

## Recommended Responsive Behavior

### Mobile

- keep the environmental scene, but render it as a constrained background rather than a full fixed landscape canvas
- switch the contact grid to a single-column stack with comfortable vertical spacing
- allow the card content to wrap without clipping or forcing a single-line label/value layout
- reduce section height to a compact but still atmospheric minimum

### Tablet

- allow a 2-column contact card arrangement
- reduce the large scenic vertical height slightly while preserving the mountain mood
- keep card content balanced and readable without excessive density

### Desktop

- preserve the layered atmospheric landscape and multi-column contact layout
- keep the closing divider and fire motif as a final visual accent

### Wide Desktop

- maintain the panoramic background scale without stretching the cards or making the landscape feel empty

## Implementation Guardrails

1. The landscape should remain atmospheric and scenic; it should not be flattened into a plain solid background.
2. The main responsive fix is in the `contacts` grid and the text wrapping inside each card.
3. The area around the closing divider should stay visually balanced but not oversized.
4. The card text should prioritize readability over forced single-line presentation.

## Summary

The Contact section is a good example of a section that is mostly content-led but framed by a scenic environment. The responsive refactor should preserve its atmosphere while internally reworking the card grid, text wrapping, and fixed-height assumptions to make the section practical and safe at smaller widths.
