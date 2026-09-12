# Sprint R3 — Journey Section

## Objective

Audit the Journey section and define how to preserve the constellation timeline aesthetic while making the section safer for smaller viewports and less dependent on a fixed desktop positioning model.

## Section Classification

### 1) Normal content layout

The Journey section includes standard editorial structure:

- heading area with kicker and title
- timeline-oriented milestone list
- label content for each period and role

These are content blocks, but they are embedded inside an atmospheric scene.

### 2) Artistic scene composition

This section is strongly art-driven:

- wide sky background with layered overlays
- constellation path with SVG line work
- star-based milestones placed across a large canvas
- decorative hover reveal cards and glow effects

The astronomy/constellation treatment is a scenic composition and should remain in a scene-aware layout shell.

## Current Desktop Baseline

The desktop experience is cohesive and intentional:

- a wide scene with sky and stars
- timeline graph spanning the section width
- milestone positions distributed across the canvas
- hover interaction reveals a small detail card aligned above the star marker

This is a high-quality desktop composition that should be respected as a baseline.

## Responsive Risks

The main risks are related to fixed scene sizing and node positioning:

- `height: 800px` on the section
- `width: 2160px` on the sky layer
- `constellation` width set to `calc(100% + 200px)` with negative margin
- milestone positions anchored by exact percentages across a wide canvas
- hover interactions are highly dependent on desktop-scale geometry

The section already contains a small mobile adjustment for `max-width: 900px`, but the current implementation still relies on a large scenic canvas and highly precise composition.

## Recommended Responsive Behavior

### Mobile

- reduce the section height and compress the path layout
- keep the timeline readable without forcing a large horizontal spread
- allow milestone blocks to stack or shrink into a simpler arrangement if necessary
- treat the path as decorative and allow it to simplify or disappear in narrow layouts

### Tablet

- preserve the constellation feel but reduce the canvas scale and overall density
- compress milestone spacing while keeping major milestones legible

### Desktop

- preserve the full constellation storyline and wide sky composition
- keep the path and star markers as a key visual anchor

### Wide Desktop

- maintain the extra horizontal space, but avoid forcing the timeline to become too stretched

## Implementation Guardrails

1. The star-path aesthetic is a design feature, not a bug; it should remain intact.
2. The timeline should be reduced to a more flexible geometry at smaller widths rather than destroyed outright.
3. The hover detail cards should be considered an enhancement, not a primary interaction model for mobile.
4. The actual responsive work should focus on the scene framing and milestone distribution rather than on altering the visual language.

## Summary

The Journey section is similar to the Featured Projects section in that it depends on a scenic composition with exact positioning. The correct responsive treatment is not to remove the constellation idea, but to protect it as a scene layer while allowing the timeline content and the scenic canvas to adapt more safely across smaller screens.
