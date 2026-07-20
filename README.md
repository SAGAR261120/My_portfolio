# Sagar Sengar — Portfolio

Modern, production-ready personal portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Live site (after deploy): see Vercel URL in the repository deployments.

## Features

- Futuristic dark UI with glassmorphism, particles, and smooth motion
- Sections: Hero, About, Skills, Stats, Experience timeline, Projects, Education, Services, GitHub, Contact
- Theme switcher (dark by default)
- Command palette (`Ctrl/Cmd + K`)
- Contact form API with Resend support + mailto fallback
- Live GitHub repos / stars / languages
- SEO: metadata, Open Graph, sitemap, robots.txt
- Blog placeholder at `/blog`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and fill values as needed:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO |
| `RESEND_API_KEY` | Enables real email delivery from the contact form |
| `CONTACT_TO_EMAIL` | Inbox for form submissions |
| `CONTACT_FROM_EMAIL` | Verified Resend sender |
| `GITHUB_TOKEN` | Optional GitHub API token for higher rate limits |

Without `RESEND_API_KEY`, the contact form opens the visitor's email client via `mailto:`.

## Scripts

```bash
npm run dev      # development
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Deploy on Vercel

1. Push this repository to GitHub
2. Import the repo in [Vercel](https://vercel.com/new)
3. Framework preset: **Next.js** (auto-detected)
4. Add env vars from `.env.example` if needed
5. Deploy

Or with Vercel CLI:

```bash
npx vercel
npx vercel --prod
```

## Content

Portfolio copy lives in [`src/lib/data.ts`](src/lib/data.ts). Update experience, projects, skills, and links there.

## License

Personal portfolio — all rights reserved.
