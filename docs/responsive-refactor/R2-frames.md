# Frames / Panels Responsive Audit

## Component/Pattern Location

There is no single central frame component with a distinct file name dedicated exclusively to framing. The current project uses several frame-like patterns and panel-like compositions across:

- `src/components/ui/Card.tsx`
- `src/styles/components/card.css`
- project detail paper components under `src/components/sections/home/FeaturedProjects/`
- scene wrappers and layered panels in several section CSS modules

## Current Layout Behavior

The site uses a mix of:

- generic card panels
- framed project detail surfaces
- decorative scene panels
- UI surfaces built as blocks with background colors and border styles

The common visual pattern is a contained panel or framed block that sits inside the larger artwork or content narrative.

## Dependency Map

- `Card` is the main reusable panel abstraction
- global theme variables provide color, radius, and shadow scale
- section-specific CSS controls more complex art framing and layered backgrounds

## Desktop Behavior

The desktop baseline strongly relies on framed panels for:

- project cards
- detail surfaces
- content blocks inside scenes
- visual dimensionality and retro interface depth

This reinforces the style and should remain the broad baseline.

## Mobile Risk

The primary risk is not in the panel as a concept, but in how frame dimensions and padding are used in narrow contexts.

Potential issues:

- content panels becoming too dense on mobile
- border radii and shadows still looking acceptable but visually heavy in a limited viewport
- large project surfaces or detail frames may overflow if they are treated like desktop art panels
- decorative frame usage may become too rigid inside stacked layouts

## Hardcoded Values

Safe hardcode:

- border radii and shadow semantics remain part of the identity
- decorative framing and panel depth are part of the visual atmosphere
- pixel boundary thinking for art frames remains acceptable inside a scene

Responsive candidate:

- card padding values (`sm`, `md`, `lg`)
- border and shadow treatment applied to panels that sit in content layout

Problematic layout hardcode:

- frame sizes that assume a wide desktop canvas
- content frames that are not constrained by a responsive layout shell
- card-like structures used to hold art compositions that should instead be in a scene container

## Reusability Assessment

The reusable panel concept is viable, but the current implementation is a hybrid between a true UI frame and a decorative scene element.

This means the refactor should not treat every panel as the same thing:

- content panel: reusable and responsive
- artistic frame: scene-level and not a normal content container

## Recommended Responsive Strategy

1. Keep `Card` as the generic content-panel abstraction.
2. Separate decorative scene frame behavior from content panel behavior.
3. Use responsive padding and width rules only on content panels.
4. Preserve decorative frame treatment inside scene-specific CSS, not in the generic reusable UI API.

## Refactor Plan

1. Define clear responsibilities for `Card` vs. scene frames
2. Preserve the desktop panel style as the base visual model
3. Add mobile-safe padding variants when necessary
4. Avoid forcing large decorative frames into a standard content layout
5. Treat scene framing as a specialized component class, not a general UI assumption

## Checklist

- [ ] Separate content panels from decorative art frames
- [ ] Confirm card padding works across mobile widths
- [ ] Preserve desktop framing aesthetic
- [ ] Align frame behavior with the scene-container strategy from R1
- [ ] Avoid overusing generic frame styling for art-heavy media sections
