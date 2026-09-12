# Common Containers Responsive Audit

## Scope

This review covers general reusable layout wrappers and container abstractions used across the project, including:

- `src/components/layout/Container/Container.tsx`
- `src/components/layout/Container/Container.module.css`
- `src/components/layout/Section/Section.tsx`
- `src/components/layout/Section/Section.module.css`
- `src/components/layout/Stack/Stack.tsx`
- `src/components/layout/Stack/Stack.module.css`
- `src/components/layout/Grid/Grid.tsx` and related styles

## Current Layout Behavior

The project already has a good conceptual layout foundation:

- `Container` provides width limitations and horizontal spacing
- `Section` provides simple section padding and background support
- `Stack` abstracts flex layout and gap logic
- `Grid` is intended for multi-column arrangements

This is the correct starting point for a responsive system because the foundation already separates layout structure from visual art.

## Dependency Map

- `Container` is used by sections and nav wrappers
- `Stack` is used to arrange brand/navigation blocks and general content groups
- `Section` is the outer shell around many content areas
- `Grid` is likely used for content arrangement in reusable layout modules

## Desktop Behavior

The current layout abstractions are aligned with a desktop-first baseline:

- centered content containers
- consistent max widths
- stable spacing rhythm
- section-level padding values tied to the design tokens

This is strong and should remain the baseline for desktop.

## Mobile Risk

The current reusable containers are structurally sound but still assume a desktop rhythm in some cases.

Risks include:

- content container max-width values may still feel too narrow or too wide depending on section complexity
- outer section shells do not yet distinguish scenic layouts from content layouts
- `Stack` and `Grid` may be used without a responsive behavior contract
- containers may inherit too much responsibility, especially when section-specific spacing is applied externally

## Hardcoded Values

Safe hardcode:

- the concept of max-width container sizes is valid and part of the design system
- section padding tokens are stable and useful

Responsive candidate:

- `max-width` thresholds used across different layout roles
- spacing values assigned by `Container` and `Section`
- grid gaps and general layout spacing

Problematic layout hardcode:

- a single generic container can be misused for both normal text content and art-heavy scene layout
- fixed section wrappers can still be too rigid when used around large visual scenes
- no explicit separation between content container and scene container yet

## Responsive Problems

The main issue is not that the abstractions are wrong; it is that their responsibilities are not cleanly separated.

The container system currently does not clearly differentiate:

- content area
- scenic art region
- wide editorial block
- full-width atmospheric background

Without this distinction, the project can drift toward a single generic wrapper that handles both content and art.

## Reusability Assessment

The current reusable layout system is a solid foundation, but it is not yet fully standardized for the project’s art-heavy layout patterns.

It is reusable enough to keep, but it needs a stronger contract around:

- content container
- wide container
- scene container
- full-width section shell

## Recommended Responsive Strategy

Use the R1 container recommendation as the formal model:

### 1. Content Container

For readable text, forms, and general content blocks.

### 2. Wide Container

For larger panels and mixed content sections.

### 3. Full Width Section

For background layers and atmospheric surfaces.

### 4. Responsive Scene Container

For layered art, sky, mountains, campsite, city, and decorative visual scenes.

## Recommended Refactor Plan

1. Keep the current `Container` and `Section` abstractions and extend their semantic meaning.
2. Standardize a `scene` wrapper pattern for large decorative sections.
3. Split layout responsibilities so content blocks do not inherit visual-scene assumptions.
4. Use the existing `Container` for content readability, not for scenic art logic.
5. Treat `Stack` and `Grid` as responsive layout primitives, not scene composition primitives.

## Checklist

- [ ] Separate art-based layouts from content-based layouts
- [ ] Standardize container meaning across sections
- [ ] Define explicit scene wrapper usage
- [ ] Preserve desktop composition without making the containers rigid
- [ ] Use responsive padding and max-width rules only where content logic belongs
