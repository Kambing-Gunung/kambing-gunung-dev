# Sprint R3 — Skills Section

## Objective

Audit the Skills section as a scene-heavy technology showcase and define the responsive strategy needed to keep the retro computer aesthetic intact while reducing the risk of overflow or overscaled layout on smaller breakpoints.

## Section Classification

### 1) Normal content layout

The Skills section contains important content hierarchy:

- hero text and display label of the computer environment
- list or UI panel content inside the computer composition
- button CTA or run interaction

These content blocks are secondary to the scene but still need to remain readable on smaller screens.

### 2) Artistic scene composition

This is one of the most scene-driven sections in the home page:

- large computer background image centered on a wide canvas
- top and bottom fade overlays
- wide landscape background aligned to a 2300px canvas
- absolute-positioned control button with pixel-art styling
- layered atmosphere used to create a retro KG-OS environment

This section is not a simple content container; it is an illustration + interface composition.

## Current Desktop Baseline

The desktop visual direction is strong:

- centered wide background scene provides a dramatic technology atmosphere
- button is anchored as a focal interaction point
- the section has an immersive aspect ratio and large vertical rhythm
- strong terminal-inspired styling remains consistent with the brand language

This is a design anchor and should remain intact.

## Responsive Risks

The responsive risks are severe because the section uses a large, fixed-scene composition:

- `min-height: 1400px` creates a large vertical footprint
- the background graphic is set to `width: 2300px` and centered with `translateX(-50%)`
- the button is placed absolutely and sized with fixed-width measurements
- the section relies on a large scenic canvas rather than flexible layout constraints
- the art layer can easily overflow or feel mismatched on tablet/mobile widths

## Recommended Responsive Behavior

### Mobile

- keep the atmospheric scene, but constrain it inside a safe viewport container
- reduce the vertical height dramatically and preserve the essential focal button
- allow the button to shrink or expand within a safe width rather than keeping a rigid 320px width
- keep the scene centered, but avoid allowing the background image to be too wide for the viewport

### Tablet

- keep the computer scene visible, but make it more compact than the desktop canvas
- maintain the button as a visual focal point while reducing overall section height
- allow the UI/terminal blocks to compress rather than overflow

### Desktop

- preserve the full scenic treatment and large atmospheric composition
- keep the retro button and broad background as baseline identity

### Wide Desktop

- maintain the wide computer environment and broad horizontal canvas while avoiding excessive stretching

## Implementation Guardrails

1. The terminal aesthetic is acceptable and should stay; do not flatten the retro styling.
2. The responsive fix should primarily affect the scene framing and vessel height, not the visual style.
3. The button should have a safer width/height contract on smaller screens.
4. The section should be treated as a contained scene layer inside a responsive wrapper instead of a full-viewport fixed canvas.

## Summary

The Skills section is one of the highest-risk home sections because it mixes a fixed scenic composition with interaction-focused UI. The correct refactor is not to remove the computer scene—it is to constrain the scene, reduce the oversized fixed height, and keep the technology aesthetic while making the user interface and layout behave safely across breakpoints.
