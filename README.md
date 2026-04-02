This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## IndexNow

Set the IndexNow key in your environment:

```bash
INDEXNOW_KEY=your-indexnow-key
```

Trigger submissions through `POST /api/indexnow`.

- Empty body (or `{ "includeAllPublic": true }`) submits all known public URLs.
- `{ "urls": ["/calculators/new-tool"], "includeAllPublic": false }` submits only specific URLs.

Public URL coverage is managed in `lib/public-urls.ts` and reused by sitemap + IndexNow.

## Phase 2: Mini Client Workspace (Supabase)

New routes:

- `/workspace`
- `/workspace/clients`
- `/workspace/projects`
- `/workspace/projects/[id]`
- `/portal/[slug]`

### Environment variables

Copy `.env.example` into `.env.local` and set:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Database schema

Run SQL in `supabase/migrations/20260402_workspace_phase2.sql` to create:

- `clients`
- `projects`
- `deliverables`

If env values are missing, workspace pages still render and show setup guidance, so UI progress is not blocked.
