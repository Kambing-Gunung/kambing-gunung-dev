# Responsive Spacing System

## Audit of Current Spacing

The project uses a token-based spacing system defined in `src/styles/base/variables.css`:

- `--space-1` through `--space-52`
- Several values correspond to typical spacing scales in rem units

This is a strong base for a consistent design system. The issue is not the token system itself; it is the way spacing is applied in highly specific scene layouts and artistic compositions.

## Current Spacing Patterns

Across the project, spacing is used in several ways:

1. Layout spacing
   - section padding and layout gaps
   - containers and wrappers
   - general grid and flex spacing

2. Component spacing
   - internal padding of cards, chips, info modules, and interface elements

3. Section spacing
   - vertical spacing between major content blocks
   - large atmospheric transitions and section separators

4. Artistic positioning
   - absolute offsets
   - negative margins
   - vertical positioning used to align scene art

## Identified Risks

The biggest spacing issues come from a desktop composition approach:

- several sections use top and bottom offsets to align dramatic layered art
- large negative margins create a composition rhythm that is difficult to scale to mobile
- a few text blocks use tight or fixed spacing values that are visually elegant on desktop but brittle on smaller screens

This does not mean the spacing system is wrong; it means the spacing pattern sits on two different layers:

- readable layout spacing should be responsive
- artistic positioning can remain intentionally fixed within a scene

## Recommended System

### 1. Layout Spacing

This should be the responsive layer.

Recommended behavior:

- keep a simple scale based on the existing token system
- reduce large section spacing on smaller screens
- allow the content to breathe without stretching the page
- use a modest mobile-to-desktop scale with breakpoints

### 2. Component Spacing

This should remain stable and predictable.

Rules:

- keep internal component spacing aligned to the design token scale
- use consistent gaps within cards, forms, and content groups
- do not force large decorative gaps into every component

### 3. Section Spacing

This should be designed in relation to the overall page rhythm.

Rules:

- larger top/bottom section spacing is valid on desktop
- reduce the section gap on tablet and mobile
- preserve atmospheric separators but avoid over-padding a mobile layout

### 4. Artistic Positioning

This is the safe zone for intentional hardcoded placement.

Rules:

- if the spacing is part of a scene composition, it may remain pixel-like or fixed
- retain artistic offsets inside a controlled scene container
- do not use artistic offsets for core content layout

## Core Principle

Do not turn all pixels into fluid values. The project needs a differentiated approach:

- responsive spacing for text and structure
- fixed positioning for visual composition inside art scenes

## Recommended Refactor Direction

1. Keep the existing spacing tokens as the anchor for the design system.
2. Use them for layout and component spacing, with small breakpoint adjustments.
3. Keep artistic offsets in a separate category.
4. Avoid converting every decorative position into a fluid rule.

## Checklist

- [ ] Classify all spacing as layout, component, section, or artistic
- [ ] Keep visual composition spacing safe inside scene wrappers
- [ ] Reduce large layout gaps for small viewports
- [ ] Preserve desktop rhythm for the main baseline
- [ ] Avoid forcing fluid spacing across all pixel-art moments
