# Terminal Portfolio - Next.js

A minimalist, strictly monochrome developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Design Features

- **Monochrome Aesthetic**: Black, white, and grays only
- **Terminal DNA**: CLI-inspired navigation and styling
- **Performance First**: Optimized for speed and minimal payload
- **Accessible**: WCAG 2.1 AA compliance with ≥7:1 contrast
- **Responsive**: Mobile-first design that scales beautifully

## 🚀 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Font**: Courier New (monospace)
- **Icons**: Material Symbols Outlined

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page (projects listing)
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact form page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Footer component
├── next.config.js          # Next.js configuration
└── tailwind.config.ts      # Tailwind CSS configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 🎯 Pages

- **Home** (`/`): Projects showcase with tech stack and contact form
- **About** (`/about`): Personal bio, directives, and skills
- **Contact** (`/contact`): Contact form with links

## 🎨 Color Palette

All colors are monochrome derivations:

- `bg`: #000000 (Pure black background)
- `fg`: #ffffff (Pure white foreground)
- `dim`: #666666 (Dimmed/secondary text)
- `focus`: #ffffff (Focus ring)

Additional semantic colors from Material Design Dark theme are available in the Tailwind config.

## ✨ Features

- Fully responsive design (mobile-first)
- Keyboard navigable
- Fast page loads with Next.js optimizations
- Server-side rendering for SEO
- Automatic code splitting
- Image optimization

## 📝 License

MIT
