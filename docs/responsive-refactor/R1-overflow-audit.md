# Global Overflow Audit

## Critical Issues

1. Full-scene art layers use very wide dimensions such as `2160px` and are centered with `left: 50%` and `transform: translateX(-50%)`.
   - This is a major risk for narrow screens.
   - It is ideal for a desktop composition but not self-scaling on mobile.

2. Several sections use large fixed heights and min-heights.
   - Examples: `height: 1850px`, `height: 800px`, `min-height: 1400px`
   - These create very large vertical space that can collapse awkwardly on smaller screens.

3. Some layouts rely on `overflow: hidden` to mask layout problems.
   - This prevents visual overflow, but it hides the underlying responsive issue.
   - It should be treated as a temporary safety layer, not a final design fix.

4. Negative margins and large offsets are used in visual composition.
   - `margin-right: -24%`, `margin-left: -100px`, and similar patterns create risk when the viewport narrows.

## High Risk Issues

- `body { overflow-x: hidden; }` is used as a blanket shield rather than a responsive fix
- art layers are often absolutely positioned and displaced by large percentages or fixed values
- background scenes are intentionally oversized and may exceed viewport width on lower resolutions
- labels and headings with `white-space: nowrap` can crop or overflow when content is narrow

## Medium Risk Issues

- some section backgrounds rely on a fixed panoramic composition without a responsive fallback
- component spacing and text blocks may look sharp on desktop but become too dense or cramped on mobile
- decorative text and labels may wrap poorly if the layout becomes narrower than the current composition expects

## Potential Mobile Problems

- hero composition can be visually cramped or horizontally clipped
- project feature areas may not fit the viewport cleanly
- travel/journey timeline may lose its intended scenic alignment
- skills section may overflow due to layered device art and fixed game-screen background sizes
- any content that assumes 2160px art width will be fragile on small screens

## Source Files Affected

Primary affected files by risk:

- `src/components/sections/home/FeaturedProjects/FeaturedProjects.module.css`
- `src/components/sections/home/Journey/Journey.module.css`
- `src/components/sections/home/Skills/Skills.module.css`
- `src/components/sections/home/Contact/Contact.module.css`
- `src/components/sections/home/About/About.module.css`
- `src/components/sections/home/Hero/HeroIntro.module.css`
- `src/components/navigation/Navbar/Navbar.module.css`
- `src/styles/globals.css`
- `src/components/layout/Container/Container.module.css`

## Recommended Fix Strategy

1. Keep the artistic scene layer separate from the readable content layer.
2. Introduce a controlled scene wrapper with a safe internal canvas size and explicit viewport constraints.
3. Convert large desktop-art widths to responsive canvas rules rather than direct fixed dimensions.
4. Reduce the use of full-width fixed art outside the scene system.
5. Use `overflow: hidden` only as a visual containment mechanism inside a design container, not as a primary layout strategy.
6. Review and remove unnecessary `white-space: nowrap` on content-critical text.

## Checklist

- [ ] Audit all fixed scene widths above 1200px
- [ ] Identify art layers that should move behind a safe scene container
- [ ] Review absolute-positioned layout blocks for mobile overflow risk
- [ ] Check for text that is forced to stay on one line
- [ ] Preserve desktop composition while establishing responsive containment
- [ ] Keep the page safe from horizontal scrolling without hiding root cause issues
