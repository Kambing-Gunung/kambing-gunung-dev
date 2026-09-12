# Responsive Breakpoint System

## Design Philosophy

The project is desktop-first by design. The visual identity is a layered, artistic, scene-based interface with retro computer styling and a strong pixel-art aesthetic. The refactor should therefore not attempt to flatten the site into a generic mobile-first pattern.

The breakpoint strategy must:

- protect the existing desktop composition
- maintain readability and layout safety on smaller screens
- introduce a simple and maintainable set of viewport ranges
- work cleanly with React, Tailwind CSS, and custom CSS modules

This project should use a compact, intentional breakpoint set rather than a broad, over-engineered grid.

## Recommended Breakpoints

Recommended scale:

- Mobile: 0–767px
- Tablet: 768–1023px
- Desktop: 1024–1439px
- Wide Desktop: 1440px+

This is enough for:

- narrow mobile layout adjustments
- tablet stacking and scaling
- the main desktop baseline
- large wide-screen art scenes without forcing more breakpoint complexity

## Tailwind Mapping

A minimal Tailwind mapping should look like this:

- `sm`: 640px or 768px depending on project consistency
- `md`: 768px
- `lg`: 1024px
- `xl`: 1440px

For this project, the most practical and maintainable mapping is:

- `sm`: mobile/tablet transition
- `md`: tablet to desktop
- `lg`: standard desktop baseline
- `xl`: wide desktop scenic composition

The current project already uses variables and CSS tokens that are tuned for desktop; therefore, breakpoint behavior should primarily affect layout constraints, not core visual identity.

## Usage Rules

Use breakpoints to adjust:

- container width
- text block width
- section stacking or multi-column arrangements
- padding and margin scale in readable areas
- image and scene scaling only after the content wrapper is stabilized

Do not use breakpoints to change:

- safe pixel-art decorative styling
- precise artistic decoration inside a scene canvas
- core branded colors, borders, and theme treatment
- desktop composition rules that belong inside the art layer

## When To Use Breakpoints

Breakpoints are appropriate when:

- a horizontal layout is too wide for a small screen
- a fixed width or rigid content block becomes unreadable
- a section is built with two-column desktop layout but needs a single-column mobile layout
- large artwork must scale down or be constrained to an internal canvas
- text is too narrow or too wide for comfortable reading

## When NOT To Use Breakpoints

Breakpoints should not be used for:

- every decorative detail or pixel adjustment
- the actual illustration layer of a scene
- small borders, icons, and pixel decorations
- the fundamental art direction itself

The general rule is: breakpoints should address layout constraints, not artistic intent.

## Examples of Layout Behavior

### Mobile

- content container becomes narrower and more readable
- scene composition is contained inside a safe area
- text blocks stack vertically
- horizontal art canvases are clamped or cropped to a controlled width

### Tablet

- mid-size scene containers may scale down
- multiple content blocks may compress into a stack or a simpler grid
- large fixed margins are reduced gradually

### Desktop

- current composition remains intact
- sections retain their visual density and artistic framing
- content columns can use irregular but readable proportions

### Wide Desktop

- allow more generous side spacing and wide art canvases
- retain the composition without excessive stretching
- support wide panoramic sections where useful

---

Recommended responsive principle:

The project should remain desktop-first in visual baseline, but adopt mobile-safe and tablet-safe content containers and layout rules without erasing the identity of the site.
