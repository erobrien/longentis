
# Longentis Strategic UX Improvements

## Priority 1 — Conversion Architecture

### A. "How It Works" Section (Homepage)
- 4-step horizontal timeline on desktop, vertical on mobile
- Steps: Free Assessment (5 min) → Lab Panel (kit or Quest) → Provider Consult (video) → Treatment Delivered
- Each step: icon, title, description, estimated time badge
- Connecting line/dots between steps with subtle animation
- Single CTA at bottom: "Start Your Free Visit"
- Premium feel: cream background, navy cards, orange accents

### B. Pricing Section (New `/pricing` page + homepage preview)
- 3 treatment cards: TRT ($149/mo), Sexual Health ($99/mo), Weight Loss ($199/mo)
- Each card lists what's included: labs, consultations, medication, shipping
- "FSA/HSA Accepted" badge prominently displayed
- Cost comparison callout: "vs. $300+ per in-office visit"
- "No hidden fees. Cancel anytime." messaging
- CTA per card: "Start Your Free Visit"

### C. Individual Treatment Pages (`/treatments/trt`, `/treatments/ed`, `/treatments/weight-loss`)
- Shared template component with treatment-specific data
- Sections: Hero → Condition Education → Our Approach → Lab Panel → Provider Expertise → FAQ → CTA
- Treatment-specific FAQ accordion
- Cross-links to related treatments
- Treatment-specific hero copy and stats

### D. Provider Profiles Section (Homepage + `/about` enhancement)
- "Meet Your Providers" grid with placeholder bios
- Each card: photo placeholder, name, credentials, specialty, years experience, patient count
- Designed for real photos to be dropped in later
- Counters the "rotating roster" concern with "Same provider, every visit" messaging

### E. Social Proof Upgrade (Homepage testimonials redesign)
- Outcome-focused testimonials with treatment tags (TRT, ED, Weight Loss)
- Star rating display with "4.9 on Google Reviews" badge
- Before/after lab panel comparison card (anonymized)
- Video testimonial placeholder slots
- More testimonials (6-8 vs current 3)

### F. Trust Badges Redesign
- Sticky trust bar below header on scroll, or integrated into hero
- Badges: LegitScript, HIPAA Compliant, Physician-Led (12+ providers), 4.9★ Google Rating
- Proper sizing, real badge styling, tooltips on hover
- Visible above the fold

### G. Educational Content Hub (`/resources` page)
- Card grid layout for articles
- Categories: Lab Guides, Treatment Guides, Men's Health
- Each card: title, excerpt, category badge, read time, CTA to treatment page
- Placeholder articles with real-feeling titles
- SEO-optimized page structure

### H. FAQ Page (`/faq`)
- Accordion pattern organized by category tabs
- Categories: Getting Started, Labs, Treatments, Billing, Privacy
- 5-8 questions per category with detailed answers
- Search input at top (client-side filter)
- Links to relevant treatment pages within answers

## Implementation Order
1. Treatment template + 3 treatment pages (C) — fixes critical nav issue
2. How It Works section (A) — homepage conversion
3. Trust badges redesign (F) — above-fold trust
4. Pricing page (B) — conversion transparency
5. Provider profiles (D) — trust amplification
6. Social proof upgrade (E) — homepage testimonials
7. FAQ page (H) — objection handling
8. Resources page (G) — content/SEO hub

## Technical Notes
- All pages use semantic design tokens from index.css
- New routes added to App.tsx
- Shared `TreatmentTemplate` component for treatment pages
- Nav links updated to point to individual treatment pages
- All copy follows brand_voice.md guidelines
