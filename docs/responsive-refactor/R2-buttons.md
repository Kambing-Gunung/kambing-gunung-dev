# Buttons Responsive Audit

## Component Location

- `src/components/ui/Button.tsx`
- `src/styles/components/button.css`

## Current Layout Behavior

The button system is centralized and fairly reusable. It supports:

- variant: primary, secondary, outline, ghost, link
- size: sm, md, lg
- full width mode
- loading state
- disabled state

This is already a good pattern for reuse and maintainability.

## Dependency Map

- visual design tokens from `src/styles/base/variables.css`
- typography and border radius rules from the global theme system
- parent layout width from wrappers and containers
- hover and focus interactions through CSS pseudo-classes

## Desktop Behavior

The current button design is comfortable and intentionally polished on desktop:

- height is set for primary actions
- border radius is pill-shaped for a modern UI feel
- hover lift is present and consistent with the design system

This is a strong baseline and should remain the default design.

## Mobile Risk

The primary mobile risks are not about complexity, but about interaction assumptions:

- `min-height` and padding should remain comfortable on touch devices
- large button width may become too wide in narrow layouts
- `fullWidth` mode can become too aggressive in small panels if used carelessly
- hover-only behavior should not be the primary visual cue, because touch devices do not use hover

## Hardcoded Values

Safe hardcode:

- pill border radius and subtle hover movement remain part of the design language
- border thickness and icon alignment are acceptable visual choices

Responsive candidate:

- `padding` values for button sizes
- `min-height` for each size
- typography scale tied to button size

Problematic layout hardcode:

- if full-width buttons are used inside narrow content panels without responsive constraints, they can cause crowded mobile layouts
- buttons that include long labels or icons may wrap poorly if not designed for compact layouts

## Responsive Problems

- The button system is already reusable, but responsiveness depends on parent layout decisions rather than button-level logic
- Some usage patterns may create too-wide actions on mobile, especially where button text is long
- `hover` effects are not mobile-native and should not be treated as core affordance

## Reusability Assessment

This is one of the stronger reusable components in the project.

It already has a clean API for:

- variants
- sizes
- full-width mode
- loading state

This is a good component to keep, but it should be extended with responsive usage guards rather than redesigned from scratch.

## Recommended Responsive Strategy

### For mobile

- preserve generous tap targets
- prefer `min-height` values that remain touch-friendly
- allow parent containers to constrain buttons in a stack when needed
- avoid forcing full-width buttons in narrow layouts unless explicitly intended

### For desktop

- keep the current button rhythm and styling baseline

### For future component contract

Consider adding explicit props for:

- `compact`
- `fullWidthOnMobile`
- `stackOnMobile`
- `iconLeading` / `iconTrailing` (if icon usage becomes formalized)

## Refactor Plan

1. Keep the existing button API as the base abstraction
2. Define responsive usage rules rather than changing the base aesthetic
3. Add mobile-aware layout props only when necessary
4. Ensure long labels and icon combinations remain wrap-safe and readable
5. Preserve hover emphasis but do not rely on hover as the only signal for action affordance

## Checklist

- [ ] Verify touch target sizes on small screens
- [ ] Audit buttons with long labels and icon combinations
- [ ] Review usage of `fullWidth` in mobile contexts
- [ ] Keep primary desktop style while adjusting mobile usage rules
- [ ] Preserve hover/focus behavior without making it mobile-dependent
