# Sprint R2 — Reusable Components

## Objective

Sprint R2 audits the reusable component layer and defines the responsive contract for components that need to remain stable while the site adapts across mobile, tablet, desktop, and wide desktop breakpoints.

This sprint uses the assumptions and recommendations established in the R1 foundation documents as its baseline, especially:

- responsive container separation
- scene-first vs content-first layout rules
- breakpoint guidance
- type and spacing recommendations
- overflow prevention strategy

The goal is not to rewrite code or change the desktop baseline, but to create a structured responsive plan for reusable components so future refactor work is predictable and low-risk.

## Components Audited

- Navbar
- Section Heading
- Divider
- Buttons
- Frames
- Common Containers

## Current Reusability Problems

The project already has some reusable abstractions, but the design still mixes multiple responsibilities into the same layout logic:

- some components are purely reusable UI elements
- some are really content-specific scene wrappers
- some are decorative UI pieces that happen to be reused across sections
- the desktop baseline is strong, but the responsiveness contract for each reusable layer is inconsistent

This creates a risk that a generic component is treated as a content container when it actually depends on a scene or artistic layout system.

## Responsive Problems

The main responsive problems are not isolated to one component. They are shared patterns across the reusable layer:

- desktop-first assumptions
- fixed widths and large spacing in the layout shell
- lack of explicit mobile mode on nav and some wrappers
- heading and label assumptions that do not handle wrapping well
- generic containers used for both art and readable content
- frames and decorative separators that may not adapt well in tight mobile layouts

## Recommended Component Architecture

The recommended structure is a layered component architecture:

1. Base UI components
   - Button
   - Divider
   - Card or panel component
   - generic input and field primitives

2. Layout primitives
   - Container
   - Section
   - Stack
   - Grid

3. Scene-aware components or patterns
   - large decorative panels
   - artful background wrappers
   - scenic frame compositions

4. Section-specific composition patterns
   - heading composition
   - hero patterns
   - project panel patterns
   - journey timeline patterns

The key decision is to avoid using the same logic for content blocks and scene art.

## Component Refactor Priority

| Priority | Component | Problem | Recommended Action | Risk |
|----------|-----------|---------|--------------------|------|
| 1 | Navbar | Inline desktop nav with no mobile fallback | Add mobile collapse/menu pattern while preserving desktop baseline | High |
| 2 | Common Containers | Generic wrappers combine content and scene responsibilities | Separate content, wide, full-width, and scene containers | High |
| 3 | Section Heading | Repeated pattern but no reusable contract | Standardize heading props and responsive wrapping rules | Medium |
| 4 | Buttons | Good reusable API, but mobile usage depends on parent layout | Add mobile-friendly usage guidance and optional responsive props | Medium |
| 5 | Frames | Panel and scene responsibilities overlap | Separate content panel from decorative scene frame | Medium |
| 6 | Divider | Low risk but can overuse width/strength in narrow layouts | Keep as generic, layout-agnostic separator | Low |

## Proposed Refactor Order

1. Standardize container semantics and scene/container separation
2. Define a mobile-safe menu pattern for the navbar
3. Establish a section-heading contract and safe mobile wrapping rules
4. Review button sizes and full-width usage in narrow layouts
5. Separate content panel frames from scene art frames
6. Finalize divider usage and spacing rules in smaller layouts

## Dependencies Between Components

- Navbar depends on Container and Stack for layout
- Section heading depends on typography tokens and often Divider
- Divider is often used inside heading and section layouts
- Buttons are commonly used inside content panels and CTA areas
- Frames and Card-like patterns depend on the container system and spacing tokens
- Common container semantics determine how all of the above behave at mobile widths

This means the container strategy is the foundation for the rest of the refactor plan.

## Components Ready For Refactor

These are the most ready because they already have a clear abstraction and a good baseline:

- Buttons
- Divider
- Common containers
- Card/panel-like frame abstraction

These components can be refactored with a controlled contract and minimal visual risk.

## Components That Should Not Be Changed Yet

These should be treated carefully because their identity is tied to the desktop visual design:

- Navbar as a whole, because it is part of the atmospheric page shell
- Decorative scene framing and art-heavy layout layers
- Section heading variations that rely on strong display branding
- Any component where the visual identity is intentionally retro and scene-based

The goal is not to eliminate those design details, but to make them safer within a responsive container system.

## Sprint R2 Completion Checklist

- [x] Navbar audited
- [x] Section heading pattern audited
- [x] Divider audited
- [x] Buttons audited
- [x] Frames/panels audited
- [x] Common containers audited
- [x] Reusable-component architecture documented
- [x] Refactor priority table created
- [x] Sprint summary created

## Ready For Sprint R3?

Yes, but only if Sprint R3 focuses on section-by-section implementation planning, not on component rewrites themselves. The component audit now defines the rules that future refactor work must follow:

- separate content layout from scene layout
- preserve desktop baseline
- introduce mobile-safe wrappers and menu patterns
- keep art-driven components contained and intentional

With this foundation in place, the next sprint can proceed to a more concrete section implementation plan without violating the design baseline.
