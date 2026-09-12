# Section Heading Responsive Audit

## Component/Pattern Location

This is not a single reusable component in the codebase. Instead, it is a repeated heading pattern used across sections such as:

- `src/components/sections/home/Hero/HeroContent.tsx`
- `src/components/sections/home/About/About.tsx`
- `src/components/sections/home/FeaturedProjects/FeaturedProjects.tsx`
- `src/components/sections/home/Journey/Journey.tsx`
- `src/components/sections/home/Skills/KGOS/*.tsx`
- `src/styles/base/typography.css`

## Current Layout Behavior

Section heading patterns usually consist of:

- a small kicker or eyebrow label
- a primary title or heading
- optional divider or accent element
- a descriptive sentence or subheading below

The typography system already establishes a desktop-first scale using CSS variables and `clamp()` values. The visual style strongly matches the retro brand identity and is consistent, but the repeated structure is not yet abstracted into a reusable heading component.

## Dependency Map

- typography tokens from `src/styles/base/variables.css`
- global heading styles from `src/styles/base/typography.css`
- per-section CSS modules for spacing, accent colors, and alignment
- optional `Divider` component integration in some sections

## Desktop Behavior

The heading system is intentionally strong and elegant on desktop:

- large display titles and section headings
- uppercase or strong condensed text style
- accent labeling and dramatic spacing
- centered or asymmetrical alignment depending on section context

This works well as a desktop baseline and should remain the reference behavior.

## Mobile Risk

The main mobile risks are:

- long headings can overflow the viewport when forced to stay in one line
- decorative uppercase treatment can make words awkward on narrow widths
- large decorative title text can become too dominant relative to the screen
- alignment changes from center to start may look inconsistent if not intentionally handled

## Hardcoded Values

Safe hardcode:

- display font treatment for decorative headings
- pixel-like uppercase styling in retro contexts
- accent colors and decorative separators

Responsive candidate:

- heading font size scale from `var(--fs-heading-xl)` and related tokens
- spacing above and below headings
- width constraints and text alignment

Problematic layout hardcode:

- repeated use of `white-space: nowrap` or single-line assumptions
- oversized desktop heading values that do not adapt to narrow screens
- heading blocks that assume the section has plenty of width

## Responsive Problems

- No single section-heading abstraction exists to enforce a consistent mobile strategy
- Sections define their own heading behavior individually, creating style drift
- The design works visually on wide desktop but depends on section-level CSS to hold together on smaller sizes

## Reusability Assessment

The project does not yet have a reusable section-heading component; it has a repeated design pattern.

This is an opportunity to standardize, but not necessarily to flatten the brand aesthetic.

## Recommended Responsive Strategy

### Mobile

- allow heading lines to wrap naturally
- reduce the size-rhythm of large titles
- maintain the official accent element but constrain its width
- support left-aligned or centered heading blocks depending on section structure

### Tablet

- keep the same hierarchy but slightly compress the display rhythm
- preserve accent separators while reducing large vertical gaps

### Desktop

- keep current strong baseline, including wide spacing and uppercase emphasis

## Refactor Plan

1. Define a shared section heading contract with optional props for:
   - kicker
   - title
   - description
   - alignment
   - variant (display, standard, compact)
2. Use the existing token scale as the responsive source of truth
3. Keep decorative variants separate from content-safe variants
4. Preserve the current desktop look while allowing mobile-safe wrapping
5. Standardize consistent spacing and alignment across sections

## Checklist

- [ ] Confirm whether heading pattern is a true reusable component or only a repeated style pattern
- [ ] Establish a shared heading contract
- [ ] Protect decorative display heading variations
- [ ] Reduce desktop-only single-line assumptions
- [ ] Keep the current desktop voice consistent while allowing mobile wrapping
