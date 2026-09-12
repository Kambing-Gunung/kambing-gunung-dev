# Design Tokens

## Background

| Token | Primitive |
|--------|-----------|
| Background Primary | Sky 700 |
| Background Secondary | Sky 600 |
| Background Tertiary | Sky 500 |

---

## Surface

| Token | Primitive |
|--------|-----------|
| Surface Primary | Mountain 600 |
| Surface Secondary | Mountain 500 |
| Surface Elevated | Mountain 400 |
| Surface Hover | Mountain 300 |

---

## Border

| Token | Primitive |
|--------|-----------|
| Border Subtle | Mountain 500 |
| Border Default | Mountain 400 |
| Border Strong | Moon 600 |

---

## Content

| Token | Primitive |
|--------|-----------|
| Text Primary | Moon 100 |
| Text Secondary | Moon 300 |
| Text Muted | Moon 500 |
| Text Disabled | Moon 700 |

---

## Brand

| Token | Primitive |
|--------|-----------|
| Primary | Glow 400 |
| Primary Hover | Glow 500 |
| Secondary | Forest 400 |
| Highlight | Cabin 300 |

---

## Feedback

| Token | Primitive |
|--------|-----------|
| Success | Forest 300 |
| Warning | Cabin 400 |
| Danger | Glow 500 |
| Info | Sky 300 |

---

# Styling Architecture Usage

Design tokens are part of the CSS Design System layer described in [docs/development/architecture.md](../development/architecture.md).

This means tokens are intended to be consumed by:

- shared visual foundations
- component styling
- design system utilities
- CSS Modules for targeted feature styling

Tokens should be used before raw values are introduced.

The following usage principle applies:

- Tailwind handles layout concerns and structural utilities
- CSS tokens provide visual consistency
- CSS Modules keep section-level styling scoped and maintainable

This keeps design decisions consistent without forcing the entire project into a single styling mechanism in one refactor.