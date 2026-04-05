

## Updated Block Menu Grid — Rounded Cards, Varied Backgrounds, Foreground Photos

Replace the current video hero with a block menu grid. Cards use **rounded corners** (`rounded-2xl`, matching site-wide `border-radius: 16px`), **varied solid background colors** from the brand palette, and **foreground-positioned photos** (not background images).

### Layout

```text
┌──────────────────────────────────┬──────────────────────────────────┐
│  TRT                             │  Erectile Dysfunction            │
│  bg: #0B1029                     │  bg: #1B2B4B                     │
│  [photo bottom-right]  [Start →] │  [photo bottom-right]  [Start →] │
│  rounded-2xl, ~360px tall        │  rounded-2xl, ~360px tall        │
├────────────────────┬─────────────┴──────────┬───────────────────────┤
│  Peptides          │  Weight Loss           │  Get Started          │
│  bg: #243656       │  bg: #06081a           │  bg: #E8670A          │
│  rounded-2xl       │  rounded-2xl           │  rounded-2xl          │
│  ~240px tall       │  ~240px tall           │  ~240px tall          │
└────────────────────┴────────────────────────┴───────────────────────┘
```

### Card Design
- **Rounded**: `rounded-2xl` (16px) on all cards
- **Backgrounds**: Solid navy variants — `#0B1029`, `#1B2B4B`, `#243656`, `#06081a`; Get Started uses `#E8670A`
- **Photos**: Positioned as foreground `<img>` elements (bottom-right or right-aligned, with `object-contain` or natural sizing), not as CSS backgrounds
- **Title**: White sans-serif, top-left corner
- **Button**: Black pill with white text + arrow icon, bottom-left — ro.co style
- **Mobile**: Cards stack vertically, full-width, shorter heights (~200px)

### Above the Grid
- Headline "Private wellness, for the *discerning gent.*" on cream `#FAFAF7` background
- Trust badges row stays at bottom

### Image Assignments
- **TRT**: `fitMan` (older fit man)
- **ED**: `coupleJog` (couple jogging)
- **Peptides**: `oceanRunner` (man running by ocean)
- **Weight Loss**: `trackCrouch` (man crouching)
- **Get Started**: `heroImg` (man at railing)

### File Changes
- **`src/pages/Index.tsx`**: Replace entire `Hero` component. Remove video element and overlay code. Build new grid with 5 card components using the layout above. Keep existing asset imports.

