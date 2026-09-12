# Sprint R3 — Featured Projects Section

## Objective

Audit the Featured Projects section and define the responsive plan for a strong desktop composition that relies on a sky backdrop, an overlaid board, and a card grid with heavy absolute positioning.

## Section Classification

### 1) Normal content layout

This section contains a recognizable content structure:

- section header with eyebrow, title, and supporting description
- project grid arranged as cards or papers
- content slots inside each paper tile
- optional detail panel for selected project

The content hierarchy is logical and readable, but it is wrapped inside a highly art-driven shell.

### 2) Artistic scene composition

This is a heavily scenic section:

- sky layer, wide backdrop, and quest-board image
- cards positioned as paper slips arranged on a board
- layered art, gradients, and atmospheric overlays
- visual hover treatments for each card

The board and the paper stack are intentional art-driven layout objects and must remain in a protected scene layer rather than a generic content grid.

## Current Desktop Baseline

The section uses a dramatic composition:

- tall full background scene with sky + board layers
- header centered over the board
- project paper tiles arranged in a 3x2 grid with offset positioning
- hover detail panel appearing as a floating paper overlay

This looks coherent on desktop and is effectively a key visual anchor for the home page.

## Responsive Risks

This section is high-risk because it relies on large fixed scene dimensions and absolute offsets:

- `height: 1850px` for the whole section
- `width: 2160px` for sky and board layers
- `top`, `left`, and `translateX(-50%)` positioning for multiple layered elements
- project paper cards use fixed `150px` width and transform offsets like `translateX(100px)` and `translateX(-100px)`
- the layout assumes a wide desktop canvas and uses a large grid area with centered positioning

## Recommended Responsive Behavior

### Mobile

- reduce the board to a contained, safe wrapper rather than a full-width giant scenic panel
- consider collapsing the paper grid into a simpler stacked or partially reduced arrangement
- keep the header readable and compact without forcing a wide board composition
- reduce hover-only complexity or convert it to a tap-friendly interaction pattern

### Tablet

- keep a strong board composition but shrink the overall scene scale
- allow the project cards to reflow or compress while preserving the board geography
- reduce large spacing and transform offsets gradually

### Desktop

- preserve the board composition and the floating card arrangement
- keep the overall scenic layout as the primary baseline

### Wide Desktop

- maintain the expansive composition and wide sky, but avoid stretching any card to the point that the board loses intentional spacing

## Implementation Guardrails

1. Preserve the concept of a quest-board scene; do not convert it into a plain flat card grid.
2. Treat the board and sky as the scene layer; treat the paper list as a content layer inside that scene.
3. Mobile refactor should not flatten the board entirely, but should keep it inside a constrained, readable frame.
4. Hover interactions should not be treated as the only discoverable behavior; tap and stacked layout states should be considered.

## Summary

The Featured Projects section is visually rich and strongly tied to the desktop composition, but the refactor should focus on the scene shell and card positioning, not on removing the retro board aesthetic. The board should remain as a scene, while the content and interaction model should become more safe and compact on narrower screens.
