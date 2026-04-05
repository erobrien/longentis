

# Rebuild Pricing Page — Starter / Advanced / Custom Tiers

## Overview
Replace the current per-treatment pricing cards ($99/$149/$199) with the three-tier product packaging model (Starter $299/mo, Advanced $549/mo, Custom from $6,700/yr). This is a complete rewrite of `src/pages/Pricing.tsx`.

## Page Structure

### Section 1 — Hero
Keep the existing hero pattern but update copy:
- Headline: "Clinic-grade men's health. Three ways in."
- Subhead: positioning statement about the gap between TRT mills and Fountain Life
- FSA/HSA badge stays

### Section 2 — Tier Cards (3-column grid)
Three cards: Starter, Advanced (featured/popular), Custom

**Starter card** (light bg):
- $299/mo, $269/mo annual option noted
- Tagline: "Clinical-grade care. No clinic required."
- Key highlights as ✦ bullets: 20+ biomarkers, same dedicated physician, labs every 12 weeks, single-condition focus, medication included, Quest/Labcorp draws
- CTA: "Start Your Free Visit"

**Advanced card** (dark bg, border-cta, "Most Popular" badge):
- $549/mo, $499/mo annual option
- Tagline: "Your complete men's health team."
- "Everything in Starter, plus:" label
- Key highlights: 40+ biomarkers, labs every 8 weeks, multi-condition treatment, care coordinator, peptide therapy, same-day messaging, nutrition guidance
- CTA: "Start Your Free Visit"

**Custom card** (light bg with subtle cta accent):
- "From $6,700/yr" — "Custom-built"
- Tagline: "Concierge medicine. Built around you."
- "Everything in Advanced, plus:" label
- Key highlights: named physician + NP, direct physician access, unlimited labs, specialty panels, DEXA coordination, wearable integration, annual health dossier, GH optimization
- CTA: "Book a Consultation"

### Section 3 — Comparison Table (dark bg)
Replace the old Longentis vs. in-office table with a Starter vs. Advanced vs. Custom feature comparison. Key rows from the provided table: biomarkers tested, lab frequency, conditions treated, consultation frequency, messaging response, care coordinator, peptide therapy, etc. Use ✦ for "included" and — for "not included."

### Section 4 — Positioning Section (light bg)
A 3-column layout explaining what makes each tier different from competitors:
- Starter vs. telehealth TRT mills ($89–$250/mo)
- Advanced vs. boutique concierge ($5K–$15K/yr)
- Custom vs. Fountain Life ($19,500/yr)

### Section 5 — Annual Savings Callout
Simple centered section: "Save 10% with annual billing" with the annual prices shown.

### Section 6 — Bottom CTA
Keep existing "No hidden fees. No contracts." section.

## Technical Details

### Files to modify
1. `src/pages/Pricing.tsx` — complete rewrite with new tier data, comparison table, and positioning section

### Data structure
```typescript
const tiers = [
  {
    name: "Starter",
    tagline: "Clinical-grade care. No clinic required.",
    price: "$299",
    annualPrice: "$269",
    period: "/month",
    annualNote: "$3,228/yr billed annually",
    popular: false,
    highlights: [...],
    cta: "Start Your Free Visit",
    ctaHref: "/get-started",
  },
  // Advanced (popular: true), Custom (custom pricing)
];
```

### Comparison table
Rendered as a styled grid (not `<table>`) matching the existing dark-bg comparison section aesthetic but with 4 columns (feature + 3 tiers). Diamond ✦ marks for included features, em-dash for excluded.

### Design patterns
- Follows existing Diamond motif, contrast standards, and typography from the recent overhaul
- Advanced card uses `bg-navy-950 border-2 border-cta/30` (same pattern as current "popular" card)
- Custom card gets a subtle `bg-cta/[0.03] border border-cta/[0.12]` treatment to signal premium

