# Global CSS Audit

## Files Audited

Primary files reviewed:

- `src/styles/globals.css`
- `src/styles/base/variables.css`
- `src/styles/base/typography.css`
- `src/styles/base/utilities.css`
- `src/styles/components/*.css`
- `src/components/layout/Container/Container.module.css`
- `src/components/layout/Section/Section.module.css`
- `src/components/navigation/Navbar/Navbar.module.css`
- `src/components/sections/home/**/*.module.css`

## Current Architecture

The styling architecture is a hybrid model:

- Global CSS imports base design tokens, typography, utilities, and component styles.
- Vite plugin configuration includes Tailwind, but the actual project styling is still dominated by custom CSS and CSS modules.
- Design tokens are centralized in `src/styles/base/variables.css` and used as CSS variables.
- Typography is globally defined in `src/styles/base/typography.css` using variable-driven type scale and imported font families.
- A subset of utilities such as border, shadow, and hover helpers lives in `src/styles/base/utilities.css`.
- Layout containers are intentionally simple, with `Container` setting a max-width based on size tokens and `Section` only controlling vertical padding.

Key observations:

- `globals.css` sets `html { scroll-behavior: smooth; }` and `body { overflow-x: hidden; }`.
- The design system uses strong semantic variables for spacing, sizes, colors, and typography.
- Global CSS intentionally keeps a desktop-first baseline, especially for section composition and layered backgrounds.
- Many home sections rely on full-bleed backgrounds, oversized layered art, and fixed dimensions to preserve the retro composition.

## Responsive Problems Found

1. `body { overflow-x: hidden; }` is a safety measure, not a real responsive fix.
   - It prevents visible horizontal scroll, but it also hides layout issues.
   - It does not solve the root cause of oversized scene elements.

2. Large fixed visual widths are used as a design language.
   - Several section backgrounds use widths such as `2160px` and fixed positioning with `left: 50%` and `transform: translateX(-50%)`.
   - This creates strong desktop composition but is risky on narrow viewports.

3. Many sections use oversized height values.
   - Examples include `height: 1850px`, `height: 800px`, `min-height: 1400px`, and large absolute layered scenes.
   - These values are appropriate for a desktop showcase, but not for mobile or tablet without a responsive strategy.

4. Visual scenes are treated as full-viewport art canvases rather than flexible content regions.
   - This is a valid artistic approach, but it needs a clear distinction between visual scene, content, and layout container.

5. Some typography and spacing values are strong desktop presets, not inherently wrong, but fragile in smaller screens.
   - Static `white-space: nowrap` in some UI labels and headings can create overflow when content is constrained.

6. A few components use negative margins and large offset values for composition.
   - This design strategy is intentional for the current art direction, but it increases risk when the section content is squeezed by smaller viewports.

## Hardcoded Values Classification

### Safe Hardcode

These values are the visual identity layer and should remain protected:

- Pixel-art decorative borders and pixel-based geometry
- Border thickness and their visual treatment
- Theme decorations and layered scene composition
- Icon-sized details and small decorative spacing
- Fixed scene art proportions inside a designated art canvas
- Some absolute positioning used within a controlled scene container

Examples from the codebase:

- Pixel border definitions in `Skills.module.css`
- Layered scene assets like `skyLayer`, `boardLayer`, and background image composition
- Emphasis on decorative shadows, gradients, and atmospheric overlays
- Fixed background art remains safe when contained within a wide scene canvas

### Responsive Candidate

These values are not fundamentally wrong, but they should be reviewed for scaling:

- `--space-*` tokens used in large section padding and margin chains
- `--fs-display-*`, `--fs-heading-*`, and body scale variables
- `max-width` values on content wrappers and text blocks
- Large static paddings and large component gaps used across sections
- Some consistent `width: 100%` wrappers and `max-width` textual constraints

The current variables CSS already partly reflects responsive intent via `clamp()`, which is a good base for future refinements.

### Problematic Layout Hardcode

These are the values most likely to break smaller screens:

- Fixed large widths such as `2160px` for panoramic scenes
- `left: 50%` + fixed width + `transform: translateX(-50%)` on full-scene art layers
- Large fixed section heights like `1850px`, `800px`, `1400px`
- `min-height` values used as design scaffolding for scenes
- Negative offsets like `margin-right: -24%` and `margin-left: -100px`
- `white-space: nowrap` on headings and labels that may wrap poorly
- `position: absolute` with large offsets for desktop composition

## Overflow Risks

Primary risks:

- Horizontal overflow on sections using wide fixed art canvases and large absolute elements
- Clipped elements when `overflow: hidden` is applied to the whole section to mask a layout issue
- Text overflow when headings or descriptions are forced to stay on a single line
- Visual cropping when large decorative elements exceed the viewport on smaller screens
- Desktop art composition collapsing under narrow layouts

The current strategy is defensive: `overflow-x: hidden` on `body` suppresses the problem rather than solving it. This is acceptable as a temporary guard, but not as the final responsive solution.

## Recommended Refactor Direction

1. Preserve the visual language but separate art scenes from content layout.
2. Introduce a clear container hierarchy:
   - content container for text and readable blocks
   - wide container for large background scenes
   - full-width section for immersive backgrounds
   - scene container for art with its own internal coordinate system
3. Keep pixel-art and decorative values safe within the scene canvas.
4. Replace rigid desktop-only dimensions with responsive rules only at the section shell and text container layers.
5. Use structured breakpoints to collapse oversized scene assets gracefully without changing the desktop arrangement.

## Priority Checklist

- [ ] Audit and classify all global width and height constraints
- [ ] Separate decorative scene area from main readable content area
- [ ] Review all large absolute-positioning patterns for mobile risk
- [ ] Reduce reliance on `white-space: nowrap` in text-heavy UI
- [ ] Protect safe decorative hardcodes
- [ ] Establish responsive container rules before refactoring any section
- [ ] Validate overflow risk for hero, journey, skills, and featured-project sections
- [ ] Keep desktop baseline unchanged while mobile layout is designed
