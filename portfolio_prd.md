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