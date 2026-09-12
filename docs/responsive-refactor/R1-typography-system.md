# Responsive Typography System

## Audit of Current Typography

Typography is defined centrally in `src/styles/base/variables.css` and `src/styles/base/typography.css`.

Current strengths:

- the project already uses a token-based type scale
- several font sizes use `clamp()` for scaling
- there is a clear distinction between display, heading, body, and caption levels
- the visual language is intentionally stylized and artful

This is a better foundation than a purely fixed-size system.

## Current Risks

The main risk is not that the typography scale is bad, but that some text styles are still paired with rigid layout assumptions:

- `white-space: nowrap` on headings and labels
- text sized for desktop composition
- decorative pixel display styles that may exceed comfortable reading width on mobile
- dense section headings that are visually expressive but not necessarily responsive in narrow layouts

These issues are not necessarily broken on desktop, but they become fragile once content is constrained.

## Recommended Typographic Structure

### 1. Display Typography

Use for large hero or section emphasis.

Recommended approach:

- keep a strong visual identity with `clamp()` or controlled scaling
- preserve pixel-art or arcade-inspired mood where appropriate
- limit the maximum width of the display line to avoid awkward wrapped words

### 2. Section Heading

Use for section titles and major headings.

Recommended approach:

- responsive heading size with `clamp()`
- allow safe line breaks when needed
- maintain strong contrast and uppercase styling where intentional

### 3. Body Text

Use for paragraph text and content density.

Recommended approach:

- maintain a comfortable desktop/mobile readable size
- ensure line length is controlled by content width
- avoid forcing layout into overly wide or narrow text regions

### 4. UI Text

Use for labels, metadata, chips, controls, and status text.

Recommended approach:

- small, readable interface text
- avoid overly decorative or narrow letter spacing in small viewport contexts
- keep labels wrapping only when necessary

### 5. Pixel Decorative Text

Use for highly stylized retro moments.

Recommended approach:

- keep these values intentionally fixed or decorative within a controlled composition
- do not apply the same mobile rules to decorative pixel text as to body copy
- treat decorative text as scene art, not as standard content

## Recommended Scaling Approach

The most suitable strategy is a hybrid approach:

- `clamp()` for general display and heading scales
- fixed typography for explicitly decorative or pixel-art immersion moments
- responsive adjustments at wrapper and content-block level instead of forcing fluid behavior into every element

This aligns with the project’s design identity: maintain the retro aesthetic while preventing the text from breaking on narrow screens.

## Key Recommendations

- Preserve the visual hierarchy of the current typography system
- Use `clamp()` for all standard headings and body text
- Keep decorative pixel typography inside scene-safe conditions
- Remove or reduce forced `white-space: nowrap` where it causes overflow risk
- Use container width as a constraint before shrinking font sizes further

## Checklist

- [ ] Audit all fixed font sizes used in headings and labels
- [ ] Identify text styles that are safe decorative vs. content text
- [ ] Introduce responsive scaling for general headings and body copy
- [ ] Keep pixel-based typography as a controlled art layer
- [ ] Validate wrapping and line length across mobile and tablet widths
