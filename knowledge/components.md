# Longentis Component Patterns

## Treatment Cards

- Use `<Card>` from shadcn with navy background and subtle border (`border-navy-accent/20`).
- Each card displays: treatment name, one-line description, key stat, and a CTA button.
- Cards live in responsive grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
- Hover state: subtle lift (`hover:-translate-y-1`) and border glow.
- Icons: Lucide icons only, sized `w-5 h-5`, placed left of the treatment name.

## Tabbed Interfaces

- Built on Radix UI `<Tabs>` via shadcn.
- Tab triggers use `font-mono uppercase tracking-widest text-xs`.
- Active tab: orange underline (`border-b-2 border-cta`), white text.
- Inactive tab: muted text (`text-muted-foreground`).
- Tab content panels animate in with `framer-motion` fade (`opacity 0→1, y 8→0`).

## Trust Badges

- **LegitScript Certified** and **HIPAA Compliant** badges are mandatory on:
  - Footer (always visible)
  - Treatment detail sections
  - Checkout / Get Started flow
- Badge styling: `font-mono text-xs`, muted border, inline with a small shield icon.
- Never hide trust badges behind interactions — they must be immediately visible.

## Buttons

- Primary CTA: `bg-cta text-white font-sans font-semibold` with hover darkening.
- Secondary: `border border-white/20 text-white` ghost style.
- All buttons: `rounded-lg px-6 py-3` minimum touch target.

## Section Labels

- Use `<SectionLabel>` component: `font-mono uppercase tracking-widest text-xs text-navy-accent`.
- Placed above every section heading with `mb-4` spacing.

## Scroll Animations

- Use `<ScrollReveal>` wrapper for section-level entrance animations.
- Default: fade-up with 0.6s duration, 0.1s stagger for lists.
- Never animate trust badges or navigation — only content sections.
