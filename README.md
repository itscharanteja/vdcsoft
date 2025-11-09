# VDCSoft — Starter Website (React + Vite)

This repository is a scaffold for the VDCSoft startup website built with React + Vite and Tailwind CSS. It's designed as a production-ready front-end skeleton focusing on performance, accessibility, and SEO.

Key features:

- React + Vite (fast dev + build)
- Tailwind CSS for utility-first styling
- React Router for routing
- React Hook Form for contact form validation
- Framer Motion for subtle animations
- Cookie consent banner, Privacy and Terms pages
- SEO helper with meta tags, Open Graph and JSON-LD Organization schema

Getting started

1. Install dependencies

```bash
cd vdcsoft
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm run preview
```

Environment variables

Copy `.env.example` to `.env` and adjust the values as needed:

```bash
cp .env.example .env
```

- `VITE_CONTACT_ENDPOINT` — Client-side endpoint the form POSTs to (defaults to `/api/send-contact`. During `npm run dev` it automatically falls back to FormSubmit so you can test without the serverless function running.).
- `RESEND_API_KEY` — API key used by the serverless function to send email via [Resend](https://resend.com).
- `CONTACT_FROM` — Email sender (Resend lets you use `onboarding@resend.dev` for quick tests).
- `CONTACT_TO` — Destination inbox (defaults to `vdfcsoft@outlook.com`).

> **Deploying the email function**
>
> - The repo ships with a Vercel-compatible function at `api/send-contact.js`. Deploying to Vercel automatically exposes it at `/api/send-contact`.
> - For Netlify (or other platforms), create an equivalent function that posts to the Resend API or forwards mail via your provider, then set `VITE_CONTACT_ENDPOINT` to its URL.
> - When running locally with `vercel dev`, the Vite dev server and API route share the same origin, so the default endpoint works. Otherwise, either override `VITE_CONTACT_ENDPOINT` with the fully-qualified URL of your backend or rely on the FormSubmit fallback that kicks in automatically during `npm run dev`.

Deployment

- The project is ready to deploy to Vercel, Netlify or similar. Point the build command to `npm run build` and the publish directory to `dist`.
- For GitHub Pages (client-side routing), run `npm run deploy`. The script copies `dist/index.html` to `dist/404.html` so deep links resolve correctly (GitHub Pages serves `404.html` for unknown routes).

SEO & accessibility notes

- Per-route meta tags are injected by `src/components/Seo.jsx`. Update titles and descriptions where needed.
- Sitemap and robots are in `public/`.
- Use lighthouse to target >95 performance — remove dev-only scripts and optimize images when adding real assets.

Next steps (suggested)

- Add real images, logos and production tracking setup (ensure cookie banner covers analytics consent).
- Add tests and CI steps for linting/build on PRs.

Contact

vdfcsoft@outlook.com
