

# Make the Homepage Feel Human-Crafted

## What looks AI-generated right now

1. **Uniform card grid with identical hover effects** — every card has the same rounded-2xl, same gradient overlay, same hover scale. Real agency sites vary card treatments.
2. **Monotone section rhythm** — every section follows the exact same pattern: mono label → big headline → grid of items. This cadence is a dead giveaway.
3. **"How It Works" cards** — dark icon boxes with mono step numbers, time badges. Very template-y. Ro and Hims use simple numbered text, no badge widgets.
4. **Testimonial cards** — uniform grid of quote boxes with avatar initials and treatment tags. Feels like a SaaS template.
5. **Why Longentis** — left-border accent list is a common AI pattern. Needs more editorial variation.
6. **Press section** — ghost text for logos is clearly placeholder. Press cards are generic.
7. **Trust strip** — fine but the Shield icons repeated twice feels lazy.
8. **Too many mono/uppercase labels** — every section starts with the same `font-mono text-[10px] tracking-[0.18em] uppercase` label. Real sites vary their section intros.
9. **Editorial break** — centered text over a stock photo is the most generic pattern possible.
10. **Final CTA** — centered headline + button on dark bg. Every AI site ends this way.

## Plan

### 1. Break the section rhythm
- Remove the repetitive mono uppercase labels from most sections (keep 1-2 max)
- Vary headline alignment — not every section needs top-left mono label → big headline
- Use different intro patterns: some sections lead with a stat, some with a question, some with no intro at all

### 2. Simplify "How It Works"
- Replace the card grid with a clean numbered list — horizontal on desktop, stacked on mobile
- No dark icon boxes, no time badges. Just: number, title, one line of text
- More like Ro's approach: minimal, confident, unhurried

### 3. Rethink "Why Longentis"
- Replace the border-left list with an asymmetric 2-column layout
- First item gets a large pull-quote style treatment, others are compact
- Remove the stock consultation photo — use a simple typographic treatment instead

### 4. Upgrade testimonials
- Replace the uniform grid with a staggered masonry-like layout (varying heights)
- Feature one testimonial large with the clinical metric prominently displayed
- Remove the avatar initial circles (screams template)
- Use real quotation marks and vary card backgrounds slightly

### 5. Editorial break — make it useful
- Replace centered text overlay with a split layout: image on one side, a compelling stat or data point on the other
- Or remove it entirely and let the coverage section breathe

### 6. Press section — streamline
- Remove ghost-text logo bar (it looks fake without real logos)
- Keep the article cards but style them as simple text links with source attribution, not as boxed cards

### 7. Final CTA — differentiate
- Move away from centered dark-bg pattern
- Use a split layout or asymmetric composition
- Add a subtle detail (the Longentis diamond mark, a single stat) to break symmetry

### 8. Trust strip refinement
- Remove duplicate Shield icons, use distinct icons for each trust signal
- Or collapse into a single line of text without icons

### Files to modify
- `src/pages/Index.tsx` — all section components rewritten

### What stays the same
- Hero bento grid (already approved)
- Header and footer
- Color palette and typography system
- Overall page composition order

