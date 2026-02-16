# Danova Renovations

Marketing website for Danova Renovations — premium paint, flooring, and renovation services in Fort Lauderdale and Miami, Florida.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + Shadcn UI
- **Fonts**: Playfair Display, Source Sans 3

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `app/` — Next.js App Router pages
- `components/` — React components (layout, home, shared, ui)
- `lib/` — Constants, content, utilities

## Images

- Hero and service images: `public/images/`
- Blog images: `public/images/blog/`
- **Nano Banana API**: For AI-generated images, set `NANO_BANANA_API_KEY` or `GOOGLE_AI_API_KEY` in `.env.local`. See `lib/image-generation.ts`.

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

Deploy via [Vercel](https://vercel.com) or any Next.js-compatible host.
