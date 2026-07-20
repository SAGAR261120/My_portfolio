# Sagar Sengar — Portfolio

Modern personal portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Live portfolio URL

**https://sagar261120.github.io/My_portfolio**

(Deployed automatically to GitHub Pages on every push to `main`.)

## Features

- Futuristic dark UI with glassmorphism, particles, and smooth motion
- Sections: Hero, About, Skills, Stats, Experience, Projects, Education, Services, GitHub, Contact
- Theme switcher (dark by default)
- Command palette (`Ctrl/Cmd + K`)
- Contact form via email client (`mailto:`)
- Live GitHub repos / stars / languages (fetched at build time)
- SEO: metadata, Open Graph, sitemap, robots.txt
- Blog placeholder at `/blog`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment (optional)

Copy `.env.example` to `.env.local` if needed:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO |
| `GITHUB_TOKEN` | Optional GitHub API token for higher rate limits |

## Scripts

```bash
npm run dev      # development
npm run build    # production static export
npm run lint     # ESLint
```

## Deploy

Pushing to `main` runs GitHub Actions and updates GitHub Pages.

One-time setup in the repo (if Pages is not enabled):

1. GitHub → **Settings** → **Pages**
2. **Source**: GitHub Actions

## Content

Edit portfolio copy in [`src/lib/data.ts`](src/lib/data.ts).

## License

Personal portfolio — all rights reserved.
