# Navbar Responsive Audit

## Component Location

- `src/components/navigation/Navbar/Navbar.tsx`
- `src/components/navigation/Navbar/Navbar.module.css`
- `src/content/common.ts` (brand and navigation configuration)
- `src/components/layout/Container/Container.tsx` and `src/components/layout/Stack/Stack.tsx` are the layout dependencies used by the navbar

## Current Layout Behavior

The navbar is a fixed header with a desktop-first composition:

- `position: fixed`
- `top: 0`
- full-width background using translucent overlay
- logo and navigation are arranged horizontally
- the nav uses a full row of top-level items spaced with a large gap

The current structure is:

- left group: brand icon + brand name
- right group: horizontal nav items
- wrapper uses a two-axis `Stack` with `justify=between` and `align=center`

This is a clean desktop layout and visually fits the brand, but it is tightly optimized for desktop width.

## Dependency Map

- `Container` provides max-width and horizontal padding
- `Stack` handles row layout and spacing
- `NavLink` from React Router manages route navigation
- `common.ts` supplies brand metadata and nav labels

## Desktop Behavior

Desktop behavior is intentionally simple and stable:

- brand remains left-aligned
- nav items remain visible inline
- large spacing between nav items provides a premium, spacious aesthetic
- fixed header is visually consistent with the rest of the page

This is acceptable as a desktop baseline and should remain unchanged.

## Mobile Risk

The main risk is not the fixed header itself, but the assumption that all nav items remain visible inline on smaller screens.

Risks include:

- nav gap becomes too large for narrow viewport widths
- logo + text combination may compress
- brand name may overflow if text width exceeds available space
- nav item list may push beyond the viewport on mobile
- fixed header has no dedicated mobile collapse strategy

## Hardcoded Values

Safe hardcode:

- logo size is intentionally small and part of the brand identity
- fixed translucent header treatment is part of the visual atmosphere

Responsive candidate:

- nav gap values (`var(--space-32)` in CSS)
- `min-height: 72px`
- logo spacing (`gap: var(--space-12)`) 
- fixed translucent backdrop blur intensity

Problematic layout hardcode:

- horizontal nav layout without mobile fallback
- no collapse/stack breakpoints for navigation items
- desktop-only assumption that all menu items fit in a single row

## Responsive Problems

- There is no mobile-specific layout strategy
- The nav is visually designed to live on one line, which creates risk for smaller screens
- The header structure is not self-protecting against long brand names or many nav items
- Without a collapse/fold pattern, the component can overflow on small devices

## Overflow Risks

- horizontal overflow if nav labels and logo exceed available width
- compression of logo and brand text on narrow screens
- inability to fit long nav labels in the available row width

## Reusability Assessment

The navbar is reusable in concept, but it is not yet fully responsive-component-safe because it assumes a wide desktop row layout and lacks a mobile mode.

## Recommended Responsive Strategy

### Preferred direction

Keep the desktop behavior intact, but add a mobile-aware mode.

Recommended plan:

1. Keep the current horizontal navbar for desktop and wide screens.
2. Introduce a compact mobile mode with a menu trigger or collapsed nav.
3. Preserve the KG identity via a strong logo treatment and a minimal, atmospheric header frame.
4. Keep the desktop nav visible and full, but only after the content width and viewport are confirmed safe.

### Menu behavior recommendation

- Mobile: collapse navigation into a drawer, menu button, or stacked menu pattern
- Tablet: either keep inline nav with reduced gap or switch to a compact stacked configuration
- Desktop: preserve the current horizontal row

### Visual identity guidance

The KG brand should survive responsive adaptation through:

- strong icon and wordmark treatment
- same translucent header background
- consistent contrast and spacing
- minimal, controlled menu interaction

## Required Refactor Plan

Refactor should be planned in the following order:

1. Separate the brand block from the navigation block as distinct subcomponents
2. Add a mobile menu state and trigger
3. Add nav layout variants for `desktop`, `tablet`, and `mobile`
4. Keep the desktop row layout as the default baseline
5. Avoid changing the visual identity of the existing desktop header while introducing collapse logic

## Checklist

- [ ] Audit current responsive width assumptions
- [ ] Define menu strategy for mobile/tablet
- [ ] Preserve the desktop baseline
- [ ] Add mobile nav state without breaking existing brand visuals
- [ ] Confirm no header overflow for common viewport widths
