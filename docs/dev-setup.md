# Dev Setup — УчётЛёгко

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | ≥ 20 | [nodejs.org](https://nodejs.org) |
| npm | ≥ 10 | bundled with Node |
| PostgreSQL | ≥ 15 | [postgresql.org](https://postgresql.org) or Docker |
| Git | any | system package manager |

## Quick Start

```bash
# 1. Clone the repo
git clone git@github.com:Kubalskiy/uchotlyogko-landing.git
cd uchotlyogko-landing

# 2. Set up the app
cd app
cp .env.example .env
# Edit .env — fill in DATABASE_URL with your local Postgres credentials

# 3. Install dependencies
npm install

# 4. Set up the database
npm run db:push       # push schema to local DB (dev only)
npm run db:generate   # generate Prisma client

# 5. Run the dev server
npm run dev
# App runs at http://localhost:3000
```

## Local PostgreSQL (Docker)

If you don't have Postgres installed locally:

```bash
docker run -d \
  --name uchotlyogko-db \
  -e POSTGRES_USER=uchet \
  -e POSTGRES_PASSWORD=uchet \
  -e POSTGRES_DB=uchotlyogko_dev \
  -p 5432:5432 \
  postgres:15-alpine
```

Then set `DATABASE_URL="postgresql://uchet:uchet@localhost:5432/uchotlyogko_dev"` in `app/.env`.

## Project Structure

```
/
├── app/                    # Next.js 14 application (App Router)
│   ├── src/
│   │   ├── app/           # Routes (page.tsx, layout.tsx, api/)
│   │   ├── components/    # Shared UI components
│   │   └── lib/           # Utilities, DB client, helpers
│   ├── prisma/
│   │   └── schema.prisma  # Database schema
│   ├── .env.example       # Environment variable template
│   └── package.json
├── landing/               # Static landing page (GitHub Pages source)
├── .github/
│   └── workflows/
│       ├── ci.yml         # Lint, typecheck, build on PR
│       └── deploy.yml     # Deploy to Vercel on main push
├── docs/
│   └── dev-setup.md       # This file
├── index.html             # Landing page (GitHub Pages root)
└── style.css
```

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js 14 (App Router) | Fullstack, fast iteration, Vercel-native |
| Language | TypeScript | Type safety for financial data |
| Database | PostgreSQL | Reliable, ACID, great for accounting |
| ORM | Prisma | Type-safe queries, easy migrations |
| Deployment | Vercel | Zero-ops, instant previews, GitHub integration |
| CI/CD | GitHub Actions | Free, integrates with repo |

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server locally
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript compiler check
npm run db:generate  # Regenerate Prisma client after schema changes
npm run db:migrate   # Run migrations (production-style)
npm run db:push      # Push schema directly (dev only)
npm run db:studio    # Open Prisma Studio GUI
```

## CI/CD

- **Every PR** → GitHub Actions runs lint, typecheck, and build.
- **Push to `main`** → Auto-deploys to Vercel production.

### Required GitHub Secrets

| Secret | Description |
|--------|-------------|
| `VERCEL_TOKEN` | Vercel personal access token |
| `VERCEL_ORG_ID` | Vercel org/team ID |
| `VERCEL_PROJECT_ID` | Vercel project ID |
| `DATABASE_URL` | Production DB connection string |
| `NEXTAUTH_SECRET` | Random secret for auth |

## Staging / Preview Deployments

Vercel automatically creates preview deployments for every PR. The preview URL follows the pattern `uchotlyogko-app-git-<branch>-<org>.vercel.app`.

## Adding a New Route

1. Create `src/app/<route>/page.tsx`
2. Export a default React component
3. The route is automatically available at `/<route>`

## Database Changes

1. Edit `prisma/schema.prisma`
2. Run `npm run db:migrate` (creates a migration file)
3. Commit the migration file — it runs automatically in CI
