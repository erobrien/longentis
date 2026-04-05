

## Problem

On mobile (390×844), the hero CTA ("Start Your Free Visit") is below the fold. The content is positioned at `bottom: 72px` inside a frame that ends at `52px` from the bottom, pushing the CTA out of the initial viewport. For a high-end telehealth brand targeting aging men, the CTA must be immediately visible — no scrolling required.

## Audience Context

This is a premium men's health telehealth service for aging men. The hero needs to feel:
- **Authoritative and calm** — not cluttered or startup-y
- **Immediately actionable** — CTA above the fold, no question
- **Confident** — short, punchy copy; let the video do the heavy lifting

## Plan

### 1. Restructure mobile hero content positioning

Move the hero content from absolute bottom positioning to a vertically centered layout on mobile. Use `top: 50%; transform: translateY(-50%)` instead of `bottom: 72px` so the headline + CTA sit mid-frame regardless of device height.

### 2. Trim mobile copy further

- Keep only the H1: "Clinic-grade men's health, *delivered.*"
- Remove the subtitle entirely on mobile (it's already shortened but still adds visual weight)
- Keep just the CTA button

This gives: **Logo → Video → H1 → CTA** — clean, premium, above the fold.

### 3. Keep the partners bar

The bottom credential bar (LegitScript, HIPAA, etc.) stays — it builds trust and sits outside the video frame.

### 4. Desktop unchanged

All desktop layout (announcement pill, full subtitle, metrics column) remains exactly as-is.

### Files Changed

- `src/pages/Index.tsx` — Update mobile positioning of `.hero-content-pos` from `bottom: 72px` to vertically centered, hide subtitle on mobile (`hidden lg:block` on the subtitle paragraph).

