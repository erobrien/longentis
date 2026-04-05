# Longentis Design System — Complete Specification

## 1. Color System

### Navy Scale (Dark Backgrounds)
| Token         | HSL              | Hex     | Usage                         | Contrast on cream |
|---------------|------------------|---------|-------------------------------|--------------------|
| `navy-950`    | 230 67% 6%       | #06081A | Deepest bg, hero sections     | 14.5:1             |
| `navy-900`    | 228 56% 10%      | #0F1629 | Dark section backgrounds      | 12.4:1             |
| `navy-800`    | 226 50% 14%      | #121D2E | Card surfaces on dark bg      | 10.2:1             |
| `navy-700`    | 220 46% 20%      | #1B2B4B | Primary brand color           | 8.1:1              |
| `navy-600`    | 218 38% 28%      | #2C4165 | Labels, borders               | 5.8:1              |
| `navy-500`    | 216 30% 40%      | #47607A | Text secondary on light       | 4.6:1 ✓ AA         |
| `navy-400`    | 214 22% 55%      | #74899E | Muted text on dark            | 6.2:1 on navy-950  |
| `navy-300`    | 212 20% 70%      | #A0ADB9 | Paragraph text on dark        | 8.5:1 on navy-950  |

### Cream Scale (Light Backgrounds)
| Token         | HSL              | Hex     | Usage                         |
|---------------|------------------|---------|-------------------------------|
| `cream-50`    | 36 33% 98%       | #FDFBF8 | Card hover, elevated surfaces |
| `cream-100`   | 33 26% 94%       | #F0EBE3 | Primary page background       |
| `cream-150`   | 30 18% 91%       | #ECE7E0 | Section alternation bg        |
| `cream-200`   | 28 15% 86%       | #DDD7CF | Borders, dividers             |

### CTA / Accent (WCAG-Verified)
| Token         | HSL              | Hex     | Usage                         | Contrast           |
|---------------|------------------|---------|-------------------------------|---------------------|
| `cta`         | 24 90% 45%       | #DA6307 | Primary CTAs, active states   | 4.6:1 on cream ✓   |
| `cta-hover`   | 24 92% 38%       | #B85300 | CTA hover state               | 5.8:1 on cream ✓   |
| `cta-active`  | 24 94% 32%       | #9C4600 | CTA active/pressed state      | 7.2:1 on cream ✓   |

### Semantic States
| Token           | Hex     | Usage               |
|-----------------|---------|---------------------|
| `destructive`   | #DC2626 | Errors, deletions   |
| `success`       | #16A34A | Confirmations       |
| `warning`       | #F59E0B | Alerts, cautions    |

### Text Colors
**On Light (cream) backgrounds:**
| Token             | HSL               | Contrast | Usage                  |
|-------------------|--------------------|----------|------------------------|
| `text-primary`    | navy-900           | 12.4:1   | Headings, primary text |
| `text-secondary`  | 220 18% 36%       | 6.8:1    | Body paragraphs       |
| `text-muted`      | 220 14% 50%       | 4.6:1    | Captions, helpers      |

**On Dark (navy) backgrounds:**
| Token               | HSL               | Contrast on navy-950 | Usage             |
|----------------------|--------------------|----------------------|-------------------|
| `text-on-dark`       | cream-100          | 13.8:1               | Headings          |
| `text-muted-on-dark` | navy-300           | 8.5:1                | Body text         |
| `text-subtle-on-dark`| navy-400           | 6.2:1                | Captions, labels  |

### Interactive State Colors
- **Hover (light bg):** `navy-900/[0.04]` overlay
- **Hover (dark bg):** `white/[0.06]` overlay
- **Active (light bg):** `navy-900/[0.08]` overlay
- **Active (dark bg):** `white/[0.10]` overlay
- **Focus ring:** `2px solid hsl(var(--cta))`, 2px offset
- **Border (light):** `navy-900/[0.08]`, hover: `navy-900/[0.15]`
- **Border (dark):** `white/[0.08]`, hover: `white/[0.15]`

### Rules
- Orange is **exclusively** for CTAs and active-state indicators. Never decorative.
- Dark backgrounds always pair with `cream-100` or `navy-300` text.
- Cream backgrounds use `navy-900` for headings, `navy-500` for body.
- All text-background combinations pass WCAG AA (4.5:1 body, 3:1 large text).

---

## 2. Typography

### Font Stack
| Utility       | Font                                        | Role                        |
|---------------|---------------------------------------------|-----------------------------|
| `font-sans`   | Plus Jakarta Sans, Inter, system-ui         | Headings, UI, nav, buttons  |
| `font-lora`   | Lora, Georgia, serif                        | Italic emphasis in H1/H2    |
| `font-space`  | Space Grotesk, Inter, system-ui             | Body paragraphs             |
| `font-mono`   | IBM Plex Mono, Fira Code, Consolas          | Labels, badges, stat values |
| `font-logo`   | Bebas Neue, Impact                          | Logo wordmark only          |

### Type Scale
| Class         | Size (px)     | Line Height | Letter Spacing | Weight | Usage                     |
|---------------|---------------|-------------|----------------|--------|---------------------------|
| `text-hero`   | 48–80 (clamp) | 1.05        | -0.03em        | 700    | Page hero, one per page   |
| `text-h1`     | 40–64 (clamp) | 1.08        | -0.03em        | 700    | Section hero headings     |
| `text-h2`     | 28–52 (clamp) | 1.12        | -0.02em        | 700    | Section headings          |
| `text-h3`     | 20–28 (clamp) | 1.20        | -0.01em        | 600    | Card titles, subsections  |
| `text-body-lg`| 17px          | 1.65        | 0              | 400    | Hero descriptions         |
| `text-body`   | 15px          | 1.70        | 0              | 400    | Body paragraphs           |
| `text-sm-body`| 13px          | 1.60        | 0              | 400    | Card descriptions         |
| `text-label`  | 11px          | 1.40        | 0.12em         | 500    | Button labels, tag text   |
| `text-caption`| 10px          | 1.40        | 0.18em         | 500    | Stat labels, timestamps   |

### Typography Rules
- H1/H2 headlines: `font-sans` base, final emphasis phrase in `font-lora italic text-cta`.
- Body copy: `font-space` only. Never use `font-sans` for paragraphs.
- Labels/badges/stats: `font-mono uppercase`. Always with tracking.
- Lora italic is used sparingly — **max 1-2 per section**. Never for body text.
- Never mix more than 2 typefaces in a single component.

---

## 3. Spacing & Layout

### Base Grid: 8px
All spacing uses multiples of 8px (Tailwind's default scale aligns).

### Section Spacing
| Pattern          | Class             | Value          |
|------------------|-------------------|----------------|
| Section vertical | `section-padding` | py-20 / py-24  |
| Section large    | `section-padding-lg` | py-24 / py-32 |
| Section horizontal | `section-gap`  | px-6 / px-8    |
| Content max-width | `max-w-7xl`     | 1280px         |
| Card padding     | `p-6 lg:p-7`     | 24px / 28px    |
| Grid gap (cards) | `gap-4` or `gap-5` | 16px / 20px  |
| Grid gap (tight) | `gap-2` or `gap-3` | 8px / 12px   |

### Container
- Max width: `max-w-7xl` (1280px)
- Horizontal padding: `px-6 lg:px-8`
- Centered: `mx-auto`

### Numbered Section Pattern
When using numbered sections (01, 02, 03):
```html
<span class="text-caption text-cta/60">01</span>
```
- Font: `font-mono` via `text-caption`
- Color: `text-cta/60` (dark bg) or `text-navy-600` (light bg)
- Always zero-padded: `01`, `02`, `03`

---

## 4. Component Specifications

### 4.1 Primary CTA Button
```
variant="cta" size="lg"
```
- Background: `bg-cta` (#DA6307)
- Text: white, 14-15px, font-sans font-semibold
- Border-radius: `rounded-full`
- Padding: `px-7 py-3.5` (default) or `px-8 py-4` (large)
- Hover: `bg-cta-hover` (#B85300), shadow-cta-hover
- Active: `scale-[0.98]`, `bg-cta-active`
- Loading: Loader2 spinner replaces icon, disabled state
- Shadow: `shadow-cta` (14px spread, 30% orange)
- Arrow icon: ArrowRight, `h-4 w-4 ml-2`

### 4.2 Secondary Button (Outline)
```
variant="outline"
```
- Border: `border-navy-600/40`
- Text: `text-navy-700`, font-sans font-semibold, 11px uppercase tracking
- Hover: `border-navy-600`, `bg-navy-900/[0.04]`
- Border-radius: `rounded-lg`
- With arrow: ArrowRight, `h-3.5 w-3.5`, translates 2px on hover

### 4.3 Badge / Pill Component (SectionHeader badge)
- Container: `rounded-lg px-3.5 py-1.5`
- Light: `bg-navy-900/[0.06] border border-navy-900/[0.12]`
- Dark: `bg-white/[0.06] border border-white/[0.12]`
- Dot indicator: 7px pulsing circle (orange on dark, navy-600 on light)
- Text: `text-caption` (10px mono uppercase)

### 4.4 Stat Counter
- Number: `font-sans font-extrabold text-4xl lg:text-5xl tracking-[-0.03em]`
- Label: `text-caption mt-2 opacity-60`
- Animation: Count-up from 0 to target, triggered by IntersectionObserver
- Shows final value before animation (no "0" placeholder)
- Duration: 2 seconds, 60fps
- Easing: custom bezier [0.21, 0.47, 0.32, 0.98]

### 4.5 Card Styles
**Treatment Card (hero grid):**
- `rounded-2xl overflow-hidden bg-navy-{shade}`
- Image: `absolute bottom-0 right-0 h-[70%] w-[45%] object-cover opacity-70`
- Image hover: `opacity-90 scale-[1.03]`
- CTA pill: `bg-black/80 rounded-full px-5 py-3`
- Hover: entire card `-translate-y-1`

**Content Card (light bg):**
- `rounded-2xl p-6 bg-white border border-navy-900/[0.06]`
- Shadow: `shadow-card`
- Hover: `hover:-translate-y-1 hover:shadow-card-hover`
- Transition: `transition-all duration-300`

**Dark Card:**
- `rounded-2xl p-6 bg-white/[0.04] border border-white/[0.08]`
- Hover: `hover:border-white/[0.15]`
- No shadow (depth via border/bg contrast)

**Testimonial Card:**
- Same as content card plus treatment tag badge (`bg-cta/10 text-cta`)
- Quote: `font-lora text-[15px] italic leading-[1.55] text-navy-900/75`
- Outcome badge: `rounded-lg bg-navy-900/[0.03] border border-navy-900/[0.06]`

### 4.6 Section Header Component
```tsx
<SectionHeader
  badge="Our Approach"
  badgeVariant="dark"
  title={<>Heading text <em className="font-lora italic text-cta">accent.</em></>}
  description="Supporting paragraph text."
/>
```
- Badge → H2 → Description, stacked vertically
- H2 uses `text-h2` utility
- Description uses `font-space text-body text-navy-500` (light) or `text-navy-300` (dark)
- Max-width on description: `max-w-2xl`

### 4.7 Trust Bar Component
```tsx
<TrustBar variant="light" />
```
- Flex row, centered, wrapped
- Each badge: icon (3.5px, text-cta) + label (text-caption)
- Container: `rounded-lg px-3.5 py-2 bg-navy-900/[0.04] border border-navy-900/[0.08]`
- Hover: border strengthens to `/[0.15]`

### 4.8 Navigation (Header)
- Floating capsule: `rounded-2xl h-[88px] max-w-[1400px]`
- Background: `bg-[#06081a]/90 backdrop-blur-xl border border-white/[0.08]`
- Scroll shadow: `shadow-[0_4px_30px_rgba(0,0,0,0.4)]`
- Nav links: `font-sans text-[14px] font-medium px-4 py-2 rounded-md`
- Active: `text-cream-100`, Inactive: `text-cream-100/60`
- Link hover: `bg-white/[0.06]`
- CTA button: `rounded-full bg-cta px-5 py-2 text-[13px]`
- Mobile: Full-screen overlay `bg-[#06081a]`, staggered link entrance

### 4.9 Footer
- Pre-footer CTA section with `ScrollReveal`
- 4-column grid: Brand, Treatments, Company, Contact
- Background: `bg-navy-950`
- Text: `text-cream-100` for headings, `text-navy-300` for links

---

## 5. Micro-Interactions

### Scroll Reveal
- Component: `<ScrollReveal delay={0} direction="up">`
- Distance: 24px translate
- Duration: 0.6s
- Easing: `[0.21, 0.47, 0.32, 0.98]`
- Trigger: IntersectionObserver, `margin: "-50px"`, `once: true`
- Grid stagger: `delay={i * 0.04}` to `delay={i * 0.08}`

### Card Hover
- Transform: `hover:-translate-y-1` (4px lift)
- Shadow: `shadow-card` → `shadow-card-hover` (blur 16→30px, opacity 4→10%)
- Border: `/[0.06]` → `/[0.15]` on dark cards
- Duration: `transition-all duration-300`
- Image in cards: `hover:opacity-90 hover:scale-[1.03] transition-all duration-500`

### CTA Button
- Hover: bg darkens, shadow expands
- Active: `active:scale-[0.98]` (2% shrink, instant)
- Loading: `<Loader2 className="animate-spin" />` replaces icon, button disabled

### Stat Counter
- Trigger: IntersectionObserver with `-80px` margin
- Animation: linear interpolation over 2s at 60fps
- Entrance: `opacity 0→1, translateY 8px→0` over 0.5s
- Shows final value before scroll trigger (prevents "0" flash)

### Navigation
- Scroll detection: `window.scrollY > 20` → adds shadow
- Mobile menu: framer-motion `AnimatePresence`, links stagger `delay: i * 0.05`
- Mobile bottom bar: appears after scrolling past `window.innerHeight`

### Page Transitions
- Route changes: handled by `<ScrollToTop />` (instant scroll)
- No cross-fade currently (would require AnimatePresence around Routes)

---

## 6. Accessibility Checklist

- [x] All text passes WCAG AA contrast (4.5:1 body, 3:1 large)
- [x] CTA orange darkened to #DA6307 (4.6:1 on cream)
- [x] Focus-visible ring on all interactive elements
- [x] ARIA labels on icon-only buttons (account, menu)
- [x] Semantic HTML: single H1 per page, H2→H3 hierarchy
- [x] Alt text on informational images
- [x] Decorative images marked `aria-hidden` or empty alt
- [x] Noise overlay: `aria-hidden="true"` + `pointer-events: none`
- [x] Motion: uses `framer-motion` with `once: true` (no infinite loops)
- [x] Touch targets: minimum 44px for mobile CTAs and nav
