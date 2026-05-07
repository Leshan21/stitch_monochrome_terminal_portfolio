---
name: Monochrome Coder Portfolio
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c7c6c6'
  on-secondary: '#303031'
  secondary-container: '#464747'
  on-secondary-container: '#b6b5b5'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
  bg: '#000000'
  fg: '#ffffff'
  dim: '#666666'
  focus: '#ffffff'
typography:
  headline-xl:
    fontFamily: Courier New, Courier, monospace
    fontSize: clamp(1.5rem, 4vw, 2.5rem)
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Courier New, Courier, monospace
    fontSize: 1.2rem
    fontWeight: '700'
    lineHeight: '1.2'
  body-base:
    fontFamily: Courier New, Courier, monospace
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Courier New, Courier, monospace
    fontSize: 0.85rem
    fontWeight: '400'
    lineHeight: '1.5'
  label-xs:
    fontFamily: Courier New, Courier, monospace
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: '1.2'
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 4rem
  gutter: 1rem
  margin: 2rem
---

# Portfolio Design Specification
## 📖 Overview
A minimalist, strictly monochrome portfolio with a developer/CLI aesthetic. Prioritizes content clarity, performance, and code-centric visuals. Zero frameworks, zero decorative fluff.
---
##  Design Principles
| Principle        | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Monochrome**   | Only `#000`, `#fff`, and calculated grays. No accent colors.                |
| **Terminal DNA** | CLI navigation, monospace typography, window chrome, blinking cursor.       |
| **Content-First**| Layout serves the text. Whitespace and borders structure, never decorate.   |
| **Performance**  | < 50KB total, no external fonts/JS libraries, pure HTML/CSS/JS.             |
| **Accessible**   | ≥ 7:1 contrast, keyboard navigable, respects `prefers-reduced-motion`.      |
---
## 🌈 Color Palette
| Role        | CSS Variable | Hex     | Usage                                              |
|-------------|--------------|---------|----------------------------------------------------|
| Background  | `--bg`       | `#000`  | Page background, inverted card state               |
| Foreground  | `--fg`       | `#fff`  | Primary text, borders, interactive elements        |
| Dimmed      | `--dim`      | `#666`  | Secondary text, dashed lines, inactive states      |
| Focus Ring  | `--focus`    | `#fff`  | Keyboard focus outline                             |
> **Rule:** Never use `rgba()`, gradients, or external color values. All states must derive from the three base tokens.
---
## 🔤 Typography
- **Primary Stack:** `'Courier New', Courier, monospace`
- **Recommended Alternatives:** `Fira Code`, `JetBrains Mono`, `IBM Plex Mono` (if self-hosted)
- **Scale:**
  ```css
  --text-xs:   0.75rem;  /* Tags, footer */
  --text-sm:   0.85rem;  /* Body, links */
  --text-base: 1rem;     /* Paragraphs */
  --text-lg:   1.2rem;   /* Section headings */
  --text-xl:   clamp(1.5rem, 4vw, 2.5rem); /* Hero title */