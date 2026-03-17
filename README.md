# EKSTREM ⚡

A component playground built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui** structure.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui structure (`/components/ui`)
- **Animations**: Framer Motion
- **3D**: Spline + React Three Fiber

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Components

| Component | Path | Description |
|---|---|---|
| `NavBar` | `components/ui/tubelight-navbar.tsx` | Animated tubelight navigation bar |
| `DisplayCards` | `components/ui/display-cards.tsx` | Stacked skewed display cards |
| `SplineScene` | `components/ui/splite.tsx` | Lazy-loaded Spline 3D scene |
| `Spotlight` | `components/ui/spotlight.tsx` | SVG spotlight effect |
| `RadialOrbitalTimeline` | `components/ui/radial-orbital-timeline.tsx` | Orbital rotating timeline |
| `Card` | `components/ui/card.tsx` | shadcn Card primitive |
| `Badge` | `components/ui/badge.tsx` | shadcn Badge primitive |
| `Button` | `components/ui/button.tsx` | shadcn Button primitive |

## Adding New Components

All new UI components go into `/components/ui`. Demos go into `/components/demos`. Import and render demos in `app/page.tsx`.
