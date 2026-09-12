# Sprint R3 — About Section

## Objective

Audit the About section and define how to preserve the desktop editorial composition while making the layout safe for tablet and mobile without flattening the artistic illustration treatment.

## Section Classification

### 1) Normal content layout

The About section is a classic editorial split layout:

- left-side illustration block
- right-side informational copy
- CTA button row
- footer philosophy block and divider

The information hierarchy is intentionally readable and should be treated as a content block that can be responsive.

### 2) Artistic scene composition

The artwork is intentional but not a full scenic canvas:

- large photo-like illustration with masking
- subtle gradient treatment behind the section
- layered editorial framing for the visual split

This is decorative and layout-sensitive, but it does not require the same degree of scene complexity as the hero or journey sections.

## Current Desktop Baseline

The desktop composition is strong and balanced:

- a two-column split with illustration and narrative copy
- substantial negative offset on the visual side
- CTA buttons aligned under the visual area
- right-aligned paragraph block with display typography and divider emphasis

This layout is visually coherent and should be preserved as the design baseline.

## Responsive Risks

The risks are concentrated in the desktop-only assumptions:

- `margin-right: -24%` on the visual block creates horizontal tension
- large fixed widths such as `32rem` for description paragraphs can overflow narrow layouts
- `white-space: nowrap` on the kicker and greeting creates rigid text constraints
- CTA area uses fixed left padding and assumes a desktop arrangement
- the content uses a strong right-alignment pattern that is not guaranteed to hold on smaller screens

## Recommended Responsive Behavior

### Mobile

- convert the two-column split into a stacked layout
- move the illustration above the text, or keep it reduced but still visible
- allow the kicker, greeting, and description blocks to wrap naturally
- allow the CTA buttons to wrap or stack rather than remain in a rigid row
- reduce the footer divider and philosophy block spacing to avoid vertical squeeze

### Tablet

- keep the visual and text relation close, but reduce the visual offset
- allow paragraph widths to shrink to a more readable maximum
- treat the CTA area as a flexible wrapping row

### Desktop

- preserve the current split composition and negative-offset visual framing
- keep the editorial rhythm and strong alignment of the narrative content

### Wide Desktop

- maintain the wide editorial breathing room without stretching the illustration or text too much

## Implementation Guardrails

1. Preserve the illustration as a visual anchor, not as a block that forces the layout width.
2. Convert rigid desktop measurements into max-width + fluid sizing rules.
3. Keep the brand-heavy kicker and greeting treatment, but allow wrapping where necessary.
4. Use the section footer as a strong divider and statement block, not as an inflexible layout anchor.

## Summary

The About section is one of the more manageable refactor targets because it is clearly content-led rather than art-led. The main work is to preserve the desktop editorial rhythm while making the visual offset, paragraph widths, and CTA arrangement behave safely at smaller widths.
