# Sprint R4 — Device Validation

## Objective

This sprint defines the validation strategy for responsive refactor work across the home page and supporting layouts. The goal is to verify that the site remains stable across narrow mobile screens, tablet transitions, and large desktop layouts without compromising the existing desktop visual baseline.

The validation work is documentation-first and intentionally does not modify any source code. It is meant to provide a controlled acceptance standard for future implementation work.

## Target Viewports

- 320px
- 375px
- 390px
- 414px
- 768px
- 1024px
- 1280px
- 1440px+

## Device Testing Matrix

| Viewport | Category | Priority | Main Risks |
|----------|----------|----------|------------|
| 320px | Mobile stress | Critical | narrow width, text overflow, CTA wrapping, pixel-art scaling, horizontal scroll |
| 375px | Mobile stress | Critical | large typography, navbar overflow, clipped scene elements, stacked card density |
| 390px | Mobile stress | Critical | scene compression, CTA wrapping, fixed art width, touch target pressure |
| 414px | Mobile stress | High | slight widening but still narrow layout, absolute elements drifting, text wrapping inconsistencies |
| 768px | Tablet transition | High | breakpoint transition issues, awkward empty spaces, scene scaling problems, card wrapping |
| 1024px | Desktop baseline | High | preservation of desktop composition, overflow from content scaling, layout regression |
| 1280px | Desktop | Medium | large content widths, visual density, disproportionate spacing, scene stretch |
| 1440px+ | Wide desktop | Medium | wide-screen empty space, overscaled scenes, composition drift |

## Validation Strategy

### Mobile validation

For each mobile viewport, validate the following across the page:

- navigation behavior
- horizontal overflow
- text overflow
- section spacing
- typography readability
- button touch target
- image and asset clipping
- scene composition
- absolute elements
- card layout
- interaction behavior

The goal is not to remove the atmospheric design language, but to ensure the section remains legible and structurally safe when the available width shrinks dramatically.

### Tablet validation

At 768px, the project should be tested as a transition zone between mobile and desktop. This is the most likely size for breakpoint awkwardness because layout rules can shift too quickly while scenic compositions are still larger than the viewport.

### Desktop validation

At 1024px, 1280px, and 1440px+, the refactor must protect the current desktop baseline. The desktop composition is already visually complete and should be treated as the stable reference state. Any responsive rule added later must be checked for regression against this baseline.

## Mobile Stress Test

The primary mobile stress test is focused on 320px, 375px, and 390px. These sizes are the highest-risk viewports because they amplify the following problems:

- narrow width and reduced content area
- large typography causing wrapping or overlap
- pixel-art and decorative assets scaling poorly on small screens
- fixed scene dimensions that do not naturally fit the viewport
- navbar overflow or hidden content on touch screens
- CTA buttons wrapping awkwardly or becoming too small to tap
- horizontal scrolling caused by wide scenes or absolute elements

### Mobile-specific checks

For each section, test these mobile concerns:

- No horizontal scroll from fixed-width scenes or asset wrappers
- No text clipping under headings or labels
- No menu or nav item overlap
- CTA still readable and easy to tap
- Scene elements remain visually contained inside their intended frame
- Paragraph text remains readable without collapsing into dense blocks
- cards remain legible and not overly compressed

## Tablet Validation

### Target: 768px

Tablet is the transition viewport where it is easy to over-correct or change layout too quickly. The validation should identify:

- breakpoint transition problems
- layout changes that happen too early or too late
- scene scaling problems when wide scenic canvases are still larger than the viewport
- awkward empty or collapsed space caused by rigid margins and absolute positioning
- card wrapping and regrouping that feels uneven or rushed

### Tablet test focus

- confirm that sections transition gracefully, not abruptly
- ensure scenic sections still feel intentional rather than clipped or empty
- verify that card grids and editorial text reflow without severe spacing jumps
- make sure fixed-width elements do not appear to break away from their scene container

## Desktop Validation

### 1024px

Validate that the site retains its polished editorial and atmospheric desktop rhythm. The goal is to preserve the layout identity while checking for any new spacing or scale issues introduced by future responsive work.

### 1280px

This is a stable desktop size that should behave close to the current baseline. Validate that large type, section spacing, and wide scenic compositions remain balanced and intentional.

### 1440px+

Large desktop screens should not create visual drift. Confirm that wide scenes remain immersive without stretching or losing balance. Check that extra whitespace is purposeful rather than accidental.

### Desktop regression rules

- preserve the current baseline composition
- avoid shrinking or flattening visuals that are already visually complete
- ensure new responsive rules do not reflow desktop layouts into a less intentional composition
- verify that section spacing and art alignment remain coherent at all desktop widths

## Global Validation Checklist

### Global

- [ ] No horizontal scroll
- [ ] No clipped content
- [ ] No inaccessible content

### Typography

- [ ] Headings readable
- [ ] Text does not overflow
- [ ] Proper wrapping

### Navigation

- [ ] No overflow
- [ ] Usable on touch devices

### Components

- [ ] Buttons usable
- [ ] Frames scale correctly
- [ ] Containers respect viewport

### Artistic Scenes

- [ ] Background composition preserved
- [ ] Important assets remain visible
- [ ] Absolute elements remain inside intended scene
- [ ] No unwanted clipping

### Desktop Regression

- [ ] Desktop baseline preserved
- [ ] No unintended layout changes

## Section-by-Section Validation Checklist

### Hero

- [ ] Background remains atmospheric and centered
- [ ] Kicker, title, and tagline wrap properly at mobile widths
- [ ] No horizontal text overflow
- [ ] Scroll cue remains visible and usable
- [ ] Scene still feels intentional at desktop widths
- [ ] No clipping of text or overlay elements

### About

- [ ] Illustration remains visible without clipping
- [ ] Text blocks wrap naturally on narrow screens
- [ ] CTA buttons remain usable and readable
- [ ] Divider and footer statement remain balanced
- [ ] Split layout transitions cleanly at tablet widths
- [ ] Desktop editorial alignment is preserved

### Skills

- [ ] Computer scene remains visually coherent
- [ ] Background image is contained inside safe composition bounds
- [ ] Run button remains visible and usable across stressed mobile sizes
- [ ] Fixed scene dimensions do not create overflow
- [ ] Large atmospheric section does not collapse awkwardly at tablet widths
- [ ] Desktop retro computer composition remains intact

### Featured Projects

- [ ] Sky and board layers remain centered and contained
- [ ] Project cards do not overflow or misalign
- [ ] Interaction remains usable on touch devices
- [ ] Hover-only behavior is not the only path to understanding content
- [ ] Board composition remains readable across widths
- [ ] Desktop scene does not regress visually

### Journey

- [ ] Constellation path remains visible and not clipped
- [ ] Milestones stay readable and do not overlap
- [ ] Artifact spacing is safe at mobile widths
- [ ] Hover detail interaction remains non-essential for narrow layouts
- [ ] Section does not create awkward empty gaps at tablet widths
- [ ] Desktop constellation composition stays intact

### Contact

- [ ] Environment layers remain atmospheric and contained
- [ ] Contact cards wrap cleanly at mobile widths
- [ ] Text labels and values do not overflow or truncate awkwardly
- [ ] Closing divider and fire motif remain balanced
- [ ] Multi-column grid transitions smoothly at tablet widths
- [ ] Desktop landscape composition remains preserved

### Footer

- [ ] Message and copyright remain readable and aligned
- [ ] Stacked mobile layout remains centered and readable
- [ ] No awkward spacing or clipping
- [ ] Desktop row layout remains stable and unobtrusive

## Regression Testing Strategy

Regression testing should happen in three passes:

1. Mobile pass
   - validate 320px, 375px, 390px, and 414px
   - focus on overflow, wrap, nav usability, and clipping

2. Tablet pass
   - validate 768px for breakpoint transition and scene scaling
   - look for awkward empty space or sudden layout jumps

3. Desktop pass
   - validate 1024px, 1280px, and 1440px+
   - compare against the current visually complete baseline

The desktop baseline should be treated as the control state. If a responsive rule changes the page in a way that reduces the polish of the desktop composition, it should be considered a regression and rejected until it is corrected.

## Validation Order

1. Run the mobile stress test first: 320px, 375px, 390px, 414px
2. Validate the tablet transition at 768px
3. Validate the desktop baseline at 1024px, 1280px, and 1440px+
4. Run a full cross-section checklist across all home sections
5. Confirm no horizontal scroll, clipping, or content inaccessibility remains
6. Record any unresolved issue before implementation begins

## Definition of Done

Responsive work is considered ready only when all of the following are true:

- no horizontal scroll across the target viewports
- no clipped or hidden content in the key home sections
- headings and body copy remain readable
- navigation remains usable on touch devices
- button targets remain practical and accessible
- scene composition remains visually intentional without breaking at narrow widths
- desktop baseline remains preserved and free from regression
- all checklist items pass for the relevant viewport and section

## Summary

Sprint R4 is the validation gate for the responsive refactor plan. It turns the earlier design and component documentation into a practical test strategy. The intent is not to force the project into a generic mobile pattern. Instead, it is to confirm that responsive changes keep the existing desktop identity intact while making every targeted viewport safe, readable, and operational.
