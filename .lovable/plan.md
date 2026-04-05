

# Hyper-Styled Refactor Plan

## What's Changing

The current site has the right structure but uses different font utility names and some styling details differ from the spec. This is primarily a **rename + polish pass** across all files.

## 1. Tailwind Config — Font Family Rename

Update `tailwind.config.ts` font families from the current names to match the prompt:
- `display` → `lora`
- `heading` → keep as `sans` (Plus Jakarta Sans becomes the default sans)
- `mono-label` → `mono`
- `body` → `space`

## 2. CSS — Update Utility Classes

In `src/index.css`, rename the utility classes:
- `.font-display` → `.font-lora`
- `.font-heading` → `.font-sans`
- `.font-mono-label` → `.font-mono`
- `.font-body` → `.font-space`

Also update the base body/heading font-family rules to use the new class names.

## 3. Global Find-and-Replace Across All Components and Pages

Replace every occurrence across all `.tsx` files:
- `font-display` → `font-lora`
- `font-heading` → `font-sans`
- `font-mono-label` → `font-mono`
- `font-body` → `font-space`

Files affected: `Header.tsx`, `Footer.tsx`, `MobileBottomBar.tsx`, `SectionLabel.tsx`, `StatCounter.tsx`, and all 8 page files (`Index.tsx`, `About.tsx`, `Treatments.tsx`, `Coverage.tsx`, `ForProviders.tsx`, `Careers.tsx`, `GetStarted.tsx`, `Press.tsx`).

## 4. Hero H1 Font Fix

The homepage hero H1 ("Clinic-grade men's health, delivered.") should use **Plus Jakarta Sans 600** (not Lora). The italic "delivered." word stays in Lora italic with `#E8670A`. Update the H1 element to use `font-sans font-semibold` and only wrap the italic word in `font-lora`.

## 5. H2 Headings — Confirm Lora Usage

All section H2s should use `font-lora` (formerly `font-display`). This is already correct structurally — just needs the class rename.

## 6. Minor Style Refinements

- Press cards: inactive opacity should be `0.25` (currently `0.5`)
- Ensure all section labels use the pulsing dot pill pattern consistently
- Verify diagonal stripe borders are present on the tabbed approach section (already implemented)

## Summary

This is a systematic rename of 4 font utility classes across ~14 files, plus one hero H1 font-family correction. No structural or layout changes needed — the bento grid, glassmorphism header, hero overlays, press cards, and all other design patterns are already in place.

