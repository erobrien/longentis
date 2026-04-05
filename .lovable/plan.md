

# Site-Wide Diamond/Spark Aesthetic + Contrast Overhaul

## Overview
Two goals: (1) weave the ✦ diamond/spark motif throughout the entire site as a signature brand element, and (2) fix contrast issues across all pages where text is too faint to read comfortably.

---

## 1. Diamond/Spark Motif — Expand Site-Wide

The ✦ currently appears only in the Header logo and Footer logo. It should become a recurring visual signature.

**Where to add ✦ diamonds:**

- **SectionHeader component** — Replace the pinging dot indicator with a small ✦ in CTA orange. This propagates to About, Treatments, Coverage, and every page using SectionHeader.
- **SectionLabel component** — Prepend a tiny ✦ before the label text.
- **Index.tsx hero** — Add a subtle ✦ beside "Delivered." as a typographic flourish.
- **Index.tsx trust strip** — Replace the 4 Lucide icons (BadgeCheck, Lock, Star, CreditCard) with ✦ diamonds.
- **Index.tsx How It Works** — Replace the faint large step numbers ("1", "2"...) with ✦ markers at smaller size in CTA color.
- **Index.tsx Why Longentis** — Add ✦ before each differentiator heading.
- **Index.tsx Social Proof** — Use ✦ as the opening quotation mark instead of `"`.
- **Index.tsx Final CTA** — The existing `◆` at 56px/6% opacity is nearly invisible; make it a proper ✦ at ~15% opacity, larger.
- **TreatmentTemplate** — Add ✦ before the hero label text. Use ✦ instead of CheckCircle2 for symptoms. Add ✦ separator before approach point numbers.
- **Footer** — Add ✦ separators between the trust signals row ("10,000+ Patients ✦ Since 2015 ✦ ...").
- **Pricing cards** — Use ✦ instead of CheckCircle2 for included items.
- **FAQ** — Use ✦ as bullet before each category label in the sidebar.
- **Careers** — Use ✦ before "Why Longentis" card titles.
- **Press** — Use ✦ before the "Featured" label.
- **ForProviders** — Use ✦ before numbered step badges.
- **Coverage** — Add ✦ to the "In-Person Care" and "Telehealth" info boxes.
- **Resources** — Use ✦ as category badge prefix.
- **GetStarted** — Add ✦ before each "What to expect" step.

**Implementation:** Create a reusable `<Diamond />` component (a styled `<span>` rendering "✦" in Bebas Neue with configurable size and color) to keep it consistent.

---

## 2. Color Contrast Fixes — Human-Readable Text

Many pages use extremely low-opacity text that fails WCAG AA. The fix is to bump opacity/lighten colors to at least 4.5:1 ratio on their backgrounds.

### On Dark Backgrounds (navy-950 `#06081a`)
| Current | Fix |
|---|---|
| `text-white/30`, `text-white/25`, `text-white/20` | Minimum `text-white/50` for body, `text-white/60` for important |
| `text-cream-200/40`, `text-cream-200/45`, `text-cream-200/50` | Minimum `text-cream-200/60` |
| `text-cream-200/25` (footer trust signals) | `text-cream-200/50` |
| `text-cream-200/15` (copyright, privacy) | `text-cream-200/35` |
| `text-cream-200/30` (footer links) | `text-cream-200/50` |
| `text-cream-200/20` (footer section headers) | `text-cream-200/40` |
| `text-cta/50`, `text-cta/60` | `text-cta/80` minimum |
| `text-white/35` (step labels, secondary) | `text-white/50` |
| `text-[#C5CDE0]/70` → fine, but `text-[#C5CDE0]/50` | bump to `/70` |
| `text-[#E8E2D9]/50` | `text-[#E8E2D9]/65` |
| `text-[#E8E2D9]/70` | fine |

### On Light Backgrounds (cream-100 `#F0EBE3`, cream-200, white)
| Current | Fix |
|---|---|
| `text-navy-700/50`, `text-navy-700/55` | `text-navy-700/70` minimum |
| `text-navy-700/60` | `text-navy-700/75` |
| `text-navy-700/35` (timestamps, metadata) | `text-navy-700/50` |
| `text-navy-700/30` (placeholders) | fine (placeholders are exempt) |
| `text-navy-400` | fine (~55% on cream) |
| `text-navy-500` | fine |
| `text-[#555]` (Careers, Press, ForProviders) | `text-navy-600` (consistent + better contrast) |
| `text-[#243656]` | `text-navy-700` |
| `text-[#C5CDE0]/50` | `text-navy-400` |

### Hardcoded Color Cleanup
Several pages (Careers, Press, ForProviders, GetStarted) use raw hex values instead of the design system tokens. Migrate these:
- `text-[#0B1029]` → `text-navy-900`
- `text-[#555]` → `text-navy-600`
- `text-[#243656]` → `text-navy-700`
- `text-[#E8E2D9]` → `text-cream-200`
- `text-[#E8E2D9]/70` → `text-cream-200/70`
- `bg-[#FAFAF7]` → `bg-cream-50`
- `bg-[#06081a]` → `bg-navy-950`
- `bg-[#E8EDF5]` → `bg-cream-200` (or a new token if needed)
- `bg-[#1B2B4B]` → `bg-navy-700`
- `border-gray-100` → `border-navy-900/[0.06]`
- `border-gray-200` → `border-navy-900/[0.08]`

---

## Files to Modify

1. **New:** `src/components/Diamond.tsx` — Reusable ✦ component
2. **Edit:** `src/components/SectionHeader.tsx` — ✦ replaces pinging dot
3. **Edit:** `src/components/SectionLabel.tsx` — ✦ prefix
4. **Edit:** `src/components/Footer.tsx` — Contrast + ✦ separators
5. **Edit:** `src/pages/Index.tsx` — ✦ motif in all sections + contrast fixes
6. **Edit:** `src/components/TreatmentTemplate.tsx` — ✦ motif + contrast
7. **Edit:** `src/pages/About.tsx` — Contrast fixes
8. **Edit:** `src/pages/Treatments.tsx` — Contrast + ✦
9. **Edit:** `src/pages/Pricing.tsx` — ✦ for checkmarks + contrast
10. **Edit:** `src/pages/FAQ.tsx` — ✦ + contrast
11. **Edit:** `src/pages/Resources.tsx` — ✦ + contrast
12. **Edit:** `src/pages/Careers.tsx` — Token migration + contrast + ✦
13. **Edit:** `src/pages/Press.tsx` — Token migration + contrast + ✦
14. **Edit:** `src/pages/ForProviders.tsx` — Token migration + contrast + ✦
15. **Edit:** `src/pages/GetStarted.tsx` — Token migration + contrast + ✦
16. **Edit:** `src/pages/Coverage.tsx` — Contrast + ✦

