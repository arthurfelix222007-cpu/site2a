# 2A Educação — Agent Instructions

## Project Type
Static multi-page HTML site. No build step. Open HTML files directly in a browser or serve with any static server (e.g. `npx serve`).

## File Structure
```
*.html         — 11 pages (index, sobre, jovens, jovens-academy, jovens-growy,
                  empresas, empresas-growy, empresas-aceleracao, empresas-2ahire,
                  blog, contato)
style.css      — shared design system (all pages)
main.js        — shared JS (nav, modals, forms, scroll animations)
assets/        — logos and images
GROWY/         — event photos and videos
CONTEXT.md     — design brief / source of truth for brand rules
```

## Brand Design Rules
- **Colors:** Black `#0D0D0A`, White `#FFFFFF`, Yellow `#F5C800`, Gray `#F4F4F4`
- **Fonts:** Sora (headings, Google Fonts), DM Sans (body, Google Fonts)
- **DO NOT** use Inter, Roboto, Arial
- **DO NOT** add a blog/news section to the main nav or landing page
- All text in Brazilian Portuguese

## CSS Architecture
- Single shared `style.css` — edit here, not inline
- CSS custom properties on `:root` for all tokens (colors, fonts, spacing, radii, shadows)
- No Tailwind — pure CSS with semantic class names
- Breakpoints: `1024px` (tablet) and `768px` (mobile)
- All animations respect `prefers-reduced-motion`

## JS Architecture
- Single shared `main.js` (IIFE, `'use strict'`)
- Modal functions (`openYouthModal`, `openCompanyModal`) are exposed on `window` for inline `onclick` usage
- Forms submit via AJAX to Formspree (`https://formspree.io/f/mdapdonj`)
- Scroll animations use IntersectionObserver; no external animation libraries
- Counter animations on elements with `data-target` attribute

## Forms
- All forms point to Formspree endpoint `mdapdonj`
- Each form has a hidden `_subject` field for routing
- Form success is handled by showing `.form-success` div, hiding the form

## Adding New Pages
- Copy an existing `.html` file as a base
- Keep `<link rel="stylesheet" href="style.css" />` and `<script src="main.js"></script>`
- Update the active nav link class to `active`
- All 11 pages share the same nav, footer, and modal infrastructure

## Key CSS Classes Reference
| Class | Purpose |
|---|---|
| `.container` | Max-width 1200px, centered, 1.5rem padding |
| `.section` | 5–7.5rem vertical padding |
| `.section-gray` / `.section-dark` | Background variants |
| `.card-product` | Product feature cards with hover border highlight |
| `.reveal` | Scroll-triggered fade-in-up (needs `.in-view` class added by JS) |
| `.btn-primary` / `.btn-outline` | Yellow filled / black outlined buttons |
| `.link-arrow` | Text link with yellow underline and arrow |
