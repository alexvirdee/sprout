# Sprout — Landing Page

> Watching your garden thrive.

A production-quality marketing landing page for **Sprout**, a modern gardening
companion that tracks plants, watering schedules, harvests, tasks, and seasonal
progress. Built to validate beta interest and structured so Sprout can become a
full web app once the mobile launch lands.

The visual system is implemented directly from the
[Sprout Design System](https://api.anthropic.com/v1/design/h/igCUxBnQZdbDXgDjc0FO-w)
bundle: warm cream backgrounds, sprout green / sage / harvest gold / terracotta
brand palette, Outfit + Hanken Grotesk typography, organic radii, and soft
warm-tinted shadows.

## Tech stack

- **Next.js 14 (App Router)** + **TypeScript**
- **Tailwind CSS** with the full Sprout token system
- **shadcn-style** UI primitives (Button, Card, Badge, Input, Accordion)
- **Framer Motion** + **GSAP** (incl. `ScrollTrigger`)
- **Three.js** + **React Three Fiber** + **Drei** for the hero garden scene
- **Lucide React** icons

## Getting started

```bash
# 1. install
npm install

# 2. dev server
npm run dev

# 3. production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx          # Root layout, fonts (Outfit, Hanken, JetBrains Mono)
  page.tsx            # Composes the full landing page
  globals.css         # Sprout token layer + base styles

components/
  ui/                 # shadcn-style primitives (Button, Card, Badge, Input, Accordion)
  landing/
    brand-mark.tsx
    nav.tsx
    hero.tsx
    garden-scene.tsx  # React Three Fiber scene (client only)
    features.tsx
    plant-tracking.tsx
    watering-reminders.tsx
    garden-journal.tsx
    harvest-tracking.tsx
    seasonal-planning.tsx
    app-preview.tsx
    testimonials.tsx
    pricing.tsx
    faq.tsx
    final-cta.tsx
    footer.tsx
    reveal.tsx        # GSAP ScrollTrigger reveal wrapper

lib/
  constants.ts        # Features, testimonials, FAQs, pricing data
  utils.ts            # cn() helper

public/
  logo-mark.svg
  logo-mark-cream.svg
  favicon.svg
```

## Design system

Tailwind is configured with the Sprout palette and tokens (see
`tailwind.config.ts` and `app/globals.css`):

| Role       | Color                | Token                          |
| ---------- | -------------------- | ------------------------------ |
| Primary    | Sprout Green #4CAF50 | `bg-sprout-500`, scale 50→900  |
| Secondary  | Sage #A8C686         | `bg-sage-400`                  |
| Accent     | Harvest Gold #F4B942 | `bg-gold-400`                  |
| Supporting | Terracotta #C86B3C   | `bg-terra-400`                 |
| Surface    | Warm Cream #FAF8F2   | `bg-cream`                     |
| Ink        | Earth Brown #5A4634  | `text-ink-body`, `text-ink`    |
| Border     | Stone #E7E2D8        | `border-stone`                 |

Brand gradients (`bg-gradient-meadow`, `bg-gradient-dawn`, `bg-gradient-leaf`,
`bg-gradient-sun`, `bg-gradient-harvest`) and warm shadows
(`shadow-brand`, `shadow-gold`, `shadow-{xs..xl}`) are all available as Tailwind
utilities.

## Three.js hero scene

`components/landing/garden-scene.tsx` is loaded with `next/dynamic` (`ssr: false`).
It renders:

- A stylized terracotta pot with soil + stem + five low-poly leaves.
- Warm sunlit lighting (key directional + ambient + a sage rim light).
- Floating pollen particles (animated via `useFrame`, count auto-scales for mobile).
- Slow parallax driven by the global mouse position.
- A `<Float>`-wrapped sprout with a gentle living idle.
- Drei `<Environment preset="sunset">` for warm reflections.
- Soft contact shadows beneath the pot.
- Falls back to a gradient blob + 🌱 emoji if WebGL is unavailable.
- Respects `prefers-reduced-motion` (parallax is disabled).

## Animation

- **GSAP** powers the hero entrance timeline (`hero.tsx`) and on-scroll reveals
  (`reveal.tsx` — wraps a section, finds `[data-reveal]` / `[data-card]` / etc.
  children, and animates them in once with `ScrollTrigger`).
- **`ScrollTrigger`** is registered once and only on the client.
- Every animation is short-circuited when `prefers-reduced-motion: reduce`.

## Deployment

The page is fully static after `next build`. Push the repo to GitHub and import
into Vercel — no env vars are required.

## Notes & caveats

- The waitlist form in `pricing.tsx` is **UI-only** and just toggles a thank-you
  state on submit. Wire it to your provider of choice (Resend, Loops, ConvertKit…).
- Fonts are loaded from Google Fonts (Outfit, Hanken Grotesk, JetBrains Mono).
  Swap in licensed display fonts later if desired — change `app/layout.tsx`.
- All copy is real product-ready copy in the Sprout voice (sentence case,
  sensory, optimistic) — no Lorem Ipsum anywhere.
- The hero uses React Three Fiber v8 + React 18 for the broadest R3F ecosystem
  compatibility.
