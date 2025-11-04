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

Deployment

- The project is ready to deploy to Vercel, Netlify or similar. Point the build command to `npm run build` and the publish directory to `dist`.

SEO & accessibility notes

- Per-route meta tags are injected by `src/components/Seo.jsx`. Update titles and descriptions where needed.
- Sitemap and robots are in `public/`.
- Use lighthouse to target >95 performance — remove dev-only scripts and optimize images when adding real assets.

Next steps (suggested)

- Add real images, logos and production tracking setup (ensure cookie banner covers analytics consent).
- Wire the contact form to a serverless function or backend endpoint.
- Add tests and CI steps for linting/build on PRs.

Contact

vdfcsoft@outlook.com
