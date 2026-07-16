# PULP. — a living cultural universe

A vibrant, Gen-Z editorial platform in the spirit of Service95 — built with Next.js 15 (App Router), TypeScript, Tailwind CSS and Framer Motion only (no GSAP, no Three.js). Beyond the magazine homepage, this now includes a full connected-discovery layer: the Culture Graph, vibe-based guides, curated collections, an interactive city map, a personal collection, and a rule-based curator.

## What's inside

- **The Culture Graph** (signature feature) — every book, film, album, place, quote and interview is tagged with shared "vibes." Visit any item's page at `/graph/[id]` and it surfaces one connected recommendation per category — grouped as **Read / Watch / Listen / Wear / Visit / Explore** — so there's always another click. See `lib/data.ts` → `cultureGraph()` and `groupGraphByVerb()`.
- **Discover the Vibe** (`/vibe`, `/vibe/[slug]`) — eight aesthetics (Dark Academia, Coastal Summer, Parisian, Old Money, Y2K, Japanese Calm, Late Night, Golden Hour), each with its own complete guide across every content type.
- **Curated Collections** (`/collections`, `/collections/[slug]`) — hand-picked editorial lists (e.g. "10 Books That Changed Fashion").
- **What's Trending Now** — a homepage section pulling items flagged `trending: true`.
- **Explore by City** (`/map`) — a stylized, clickable city map (London, Paris, Milan, New York, Tokyo, Seoul) surfacing bookstores, coffee shops and local picks. Built with CSS/SVG positioning, not a real map-tile provider.
- **Collect** (`/my-collection`) — visitors can heart anything to save it. Stored in `localStorage` on that device only — there's no account system, so it doesn't sync across browsers or devices.
- **Editorial Surprises** — a floating "🎲 Surprise me" button (every page) opens a random pick from the whole archive.
- **Ask the Curator** — a two-question, rule-based recommendation flow (mood → discovery type → match). This is client-side logic against the static dataset, not a connected AI model — there's no backend or API key wired up, so it's intentionally transparent about being "rule-based, not magic."

All content (books, films, shows, albums, podcasts, fashion trends, places, destinations, quotes, interviews) is original and fictional, written for this demo — see `lib/data.ts`.

## Design system

- **Colour** — electric blue `#4F6BFF`, bubblegum pink `#FF4FA0`, soft lavender `#ECE7FD`, white/paper `#FFFDF9`, ink `#15112A`, neon yellow `#E4FF3D` (tiny accents only).
- **Type** — Archivo (black weight, huge headlines), Instrument Serif italic (editorial accent words and pull-quotes), Inter (body), Space Grotesk (small tracked eyebrows/labels).
- **Signature moment** — the sticky navigation capsule morphs its border/status-dot colour to match the section in view on the homepage; the Culture Graph is the deeper signature feature of the whole platform.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The first install needs an internet connection once so `next/font` can fetch and self-host Archivo, Instrument Serif, Inter and Space Grotesk.

```bash
npm run build
npm run start
```

The production build statically generates every graph, vibe and collection page (~80 routes) at build time — there's no database or server required to run this as-is.

## Structure

```
app/
  layout.tsx                – fonts, metadata, site-wide Surprise Me button
  page.tsx                  – homepage: hero → trending → vibes → departments →
                               feature spread → Culture Graph teaser → collections →
                               quote → AI curator → newsletter
  globals.css               – glassmorphism, halftone texture, marquee + conic-border keyframes
  vibe/page.tsx              – all vibes
  vibe/[slug]/page.tsx        – one vibe's full guide
  collections/page.tsx        – all collections
  collections/[slug]/page.tsx – one collection
  graph/[slug]/page.tsx        – Culture Graph page for one item
  map/page.tsx                – interactive city map
  my-collection/page.tsx       – the visitor's saved items (client component)
components/
  Navigation.tsx, PillButton.tsx, Hero.tsx, Ticker.tsx, FeatureCard.tsx,
  DepartmentsSection.tsx, FeatureSpread.tsx, QuoteSection.tsx,
  NewsletterSection.tsx, Footer.tsx        – from the original redesign
  ItemCard.tsx, SaveButton.tsx              – shared content card + collect toggle
  CultureGraph.tsx, CultureGraphTeaser.tsx   – the connected-recommendations UI
  VibeGrid.tsx, TrendingSection.tsx,
  VibeTeaserSection.tsx, CollectionsTeaser.tsx
  WorldMap.tsx, SurpriseButton.tsx, AICurator.tsx
lib/
  data.ts          – the whole content graph: items, vibes, collections, cities,
                      and the matching/grouping functions that power discovery
  useCollection.ts – localStorage-backed "Collect" hook
```

## Notes

- No real photography is used — "photo" moments are bold color-blocked gradients, halftone texture and simple shapes.
- All motion is Framer Motion (`whileInView`, `whileHover`, `useScroll`/`useTransform`). The ticker marquee and card-border spin are ambient CSS keyframes, not interactive.
- Reduced-motion users get all CSS animation durations collapsed via `prefers-reduced-motion`.
- To extend the dataset (more books, more vibes, more cities), everything lives in one place: `lib/data.ts`.
