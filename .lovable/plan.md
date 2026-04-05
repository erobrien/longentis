

## Fix Header — Floating Rounded Bar with Darker Navy

The current header is a full-width edge-to-edge bar. It needs to be a **floating, rounded, outlined pill** sitting inside the page with a darker navy glassmorphic background — matching the premium card style used elsewhere.

### Changes to `src/components/Header.tsx`

**Outer header element**: Keep `fixed inset-x-0 top-0 z-[310]` but make it a transparent wrapper with padding (`px-4 pt-3`).

**Inner nav container**: Move all styling to the inner `div`:
- `rounded-2xl` for consistent rounded corners
- `bg-[#0B1029]/80 backdrop-blur-xl` — darker navy with glass effect
- `border border-white/[0.10]` — subtle outline frame
- `shadow-[0_4px_30px_rgba(0,0,0,0.25)]` — soft elevation
- `max-w-[1400px] mx-auto px-6 lg:px-10 h-[56px]`

This creates a floating outlined capsule header that sits slightly inset from the edges, darker than before, with the same glassmorphic blur.

