
# Longentis — Full Site Implementation Plan

## Overview
A 1:1 design clone of agentislongevity.com rebranded as "Longentis" (Men's Wellness Centers telehealth brand), with the teal/green palette swapped to deep navy blue (#0B1029 family) and orange CTA (#E8670A). 8 pages, all interactive components, framer-motion animations throughout.

## Setup & Foundation
- Install framer-motion, embla-carousel-react, embla-carousel-autoplay, @radix-ui/react-tabs, @radix-ui/react-accordion, @radix-ui/react-dialog
- Add Google Fonts: Plus Jakarta Sans (300-800), Lora (400/400i/500-700), IBM Plex Mono (400,500), Space Grotesk (300-500)
- Define navy color system in CSS variables and Tailwind config
- Create noise texture overlay CSS utility for dark sections

## Shared Components
- **Header**: Sticky nav with backdrop-blur on scroll, text logo "Longentis" + "by Men's Wellness Centers", nav links (About, Treatments, Coverage, For Providers), orange "Get Started" CTA button, mobile hamburger with full-screen dark overlay (Radix Dialog)
- **Footer**: Dark 4-row footer — pre-footer CTA section, stats bar, 4-column links, copyright row
- **Section label component**: IBM Plex Mono uppercase with orange dot
- **Stat counter component**: Animated count-up on viewport entry
- **US Map SVG component**: Interactive state hover/select with orange fill
- **Scroll animation wrapper**: framer-motion fade+translateY on viewport entry

## Pages

### 1. Homepage (/)
9 sections: Full-viewport dark hero with announcement pill + staggered text animation + bottom metrics bar → Logo ticker (embla autoplay infinite scroll) → Health Assessment 3×3 grid → Editorial statement with image collage + parallax → Our Approach dark section with 3 Radix tabs + crossfade animation → Coverage map with interactive SVG → Testimonials embla carousel → Press horizontal scroll carousel → Pre-footer CTA + Footer

### 2. About (/about)
Dark hero with floating headshot images → Driven by Purpose section → Mission & Vision split layout (dark left / light right) → How We Work values accordion (6 Radix accordion items) → Scale stats section → MWC Partnership section → Team section with 3 Radix tabs (Leadership / Medical / Advisory) with portrait cards

### 3. Treatments (/treatments)
Hero with H1 + subtitle + CTA → 9-card responsive service grid (3 cols desktop, 2 tablet, 1 mobile) with hover lift animations

### 4. Coverage (/coverage)
Hero with stat pills → Interactive SVG US map with sidebar clinic list → 3 Virginia clinic detail cards → Telehealth banner CTA

### 5. For Providers (/for-providers)
Hero with stat pills → Leading Network section → Why Providers Choose Us (sticky sidebar, 4 items) → Platform Scale (4 cards) → Coverage map reuse → Benefits (4 icon cards) → Growth Roadmap (3-phase timeline)

### 6. Careers (/careers)
Hero → Join the Team section with photo → What You Can Expect (dark section, 4 cards) → Current Openings with 4 department Radix accordions

### 7. Get Started (/get-started)
Split-screen layout: Left 40% dark with steps list + testimonial card + phone number, Right 60% light with multi-field intake form (name, email, phone, state dropdown, concern select, message textarea) + orange submit button

### 8. Press (/press)
Hero with breadcrumb → Featured article large card → Category filter buttons with active state → 3-column article grid with framer-motion AnimatePresence filtering

## Animations (all framer-motion)
- Hero text stagger (H1 → subtitle → CTA → metrics)
- Scroll-triggered fade-in + translateY(24px) on all sections
- Tab crossfade with sliding active indicator
- Accordion spring height + chevron rotation
- Button press scale(0.98) + hover shadow lift
- Logo ticker continuous scroll, pause on hover
- Testimonial slide + scale on active card
- Map state hover highlight + orange fill on select
- Stat count-up animation on viewport entry
- Nav backdrop-blur transition on scroll
- Mobile sticky bottom "Start Free Visit" bar after hero scroll
- Noise texture overlay on all dark sections
