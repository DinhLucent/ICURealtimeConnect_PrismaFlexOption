# ICU-B Connect Public Site

Standalone public landing page for the ICU-B Connect project.

This repo is intentionally separated from the main application so it can be published safely as a marketing and presentation surface.

## What this repo contains

- product-level messaging for clinicians, health operations, and IT teams
- public-safe diagrams for workflow and architecture
- static export configuration for GitHub Pages or Vercel

## What this repo should never contain

- patient data or screenshots with real clinical information
- internal deployment scripts, secrets, or private endpoints
- hospital-only identifiers unless explicitly approved for public use

## Local run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The output is exported statically through Next.js.

## Deploy to GitHub Pages

1. Create a new GitHub repository from this folder.
2. Push the `main` branch to that repository.
3. In GitHub repo settings, enable `Pages` with `GitHub Actions` as the source.
4. The included workflow at `.github/workflows/deploy-pages.yml` will publish the `out/` export on every push to `main`.

## Deploy to Vercel

1. Import the repository into Vercel.
2. Keep the default Next.js build settings.
3. Optional: set `NEXT_PUBLIC_REPO_URL` to your final public repository or project page.
4. Optional but recommended: set `NEXT_PUBLIC_SITE_URL` to the deployed site origin for correct Open Graph and Twitter metadata.

## Optional environment variables

- `NEXT_PUBLIC_REPO_URL`: primary external CTA for the public repository or project page
- `NEXT_PUBLIC_BASE_PATH`: override base path for GitHub Pages deployment
- `NEXT_PUBLIC_SITE_URL`: canonical deployed origin such as `https://your-org.github.io/your-repo`
