# Longentis Design System

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--navy-deepest` | `#06081a` | Primary background, hero sections |
| `--navy-dark` | `#0B1029` | Dark section backgrounds |
| `--navy-primary` | `#1B2B4B` | Navigation, buttons, card borders |
| `--navy-accent` | `#243656` | Labels, subtle accents |
| `--white` | `#FFFFFF` | Primary text on dark backgrounds |
| `--cream` | `#F5F0EB` | Light section backgrounds |
| `--cream-dark` | `#E8E0D8` | Cream borders, muted elements |
| `--cta-orange` | `#E8670A` | Primary CTA buttons, action links |
| `--cta-orange-hover` | `#D05A00` | CTA hover state |

### Rules
- Dark backgrounds **always** pair with white or cream text.
- Orange is reserved **exclusively** for CTAs and active-state indicators. Never decorative.
- Cream backgrounds use navy text — never light-on-light.

## Typography

| Utility | Font | Role |
|---------|------|------|
| `font-sans` | Plus Jakarta Sans | Hero H1s, UI elements, nav, buttons |
| `font-lora` | Lora (italic) | Hero H1 emphasis words, pull quotes |
| `font-mono` | IBM Plex Mono | Section labels, stat counters, badges |
| `font-space` | Space Grotesk | Body paragraphs, descriptions |

### Rules
- H1 headlines: `font-sans` with the final emphasis phrase in `font-lora italic`.
- Body copy: `font-space` at `text-base` or `text-lg`.
- Section labels: `font-mono uppercase tracking-widest text-xs`.
- Never mix more than two typefaces in a single component.

## Spacing & Layout
- Max content width: `max-w-7xl` (1280px).
- Section padding: `py-20 lg:py-32`.
- Card padding: `p-6 lg:p-8`.
- Consistent `gap-6` or `gap-8` between grid items.

## Dark Mode
- The application is dark-first. Light mode is not currently supported.
- All color tokens in `index.css` are defined for the dark palette.
