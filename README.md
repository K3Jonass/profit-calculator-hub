# ProfitHub

ProfitHub is a Next.js application focused on practical profitability workflows for freelancers, operators, and small teams.

## Getting Started

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` into `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

Required for core website features:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Required for AI document generation (server-side only):

- `OPENAI_API_KEY`

Optional for IndexNow:

- `INDEXNOW_KEY`

Optional but recommended for MCP security:

- `MCP_SERVER_TOKEN`

## IndexNow

Trigger submissions through `POST /api/indexnow`.

- Empty body (or `{ "includeAllPublic": true }`) submits all known public URLs.
- `{ "urls": ["/calculators/new-tool"], "includeAllPublic": false }` submits only specific URLs.

Public URL coverage is managed in `lib/public-urls.ts` and reused by sitemap + IndexNow.

## Phase 2: Mini Client Workspace (Supabase)

Routes:

- `/workspace`
- `/workspace/clients`
- `/workspace/projects`
- `/workspace/projects/[id]`
- `/portal/[slug]`

Database schema migration:

- `supabase/migrations/20260402_workspace_phase2.sql`

## ChatGPT App / MCP Scaffold (Prepared, Not Published)

The repository now includes a separate ChatGPT App foundation that **prepares** ProfitHub for ChatGPT connection and future directory submission. It does **not** publish ProfitHub to any store automatically.

### What was scaffolded

- MCP JSON-RPC endpoint: `POST /api/mcp`
- MCP manifest: `GET /.well-known/mcp.json`
- Three freelancer-focused tools:
  - `generate_invoice`
  - `generate_contract`
  - `generate_primary_doc`
- Reused existing ProfitHub generation flows through shared server utilities in `lib/freelancer-documents.ts`
- Added `chatgpt-app/connection.example.json` as a connection template for future submission workflows

### Local testing

1. Start the app:

```bash
npm run dev
```

2. List available MCP tools:

```bash
curl -s http://localhost:3000/api/mcp \
  -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

3. Call invoice generation:

```bash
curl -s http://localhost:3000/api/mcp \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc":"2.0",
    "id":2,
    "method":"tools/call",
    "params":{
      "name":"generate_invoice",
      "arguments":{
        "businessName":"ProfitHub Studio",
        "clientName":"Acme Client",
        "invoiceNumber":"INV-1001",
        "issueDate":"2026-04-06",
        "dueDate":"2026-04-20",
        "serviceDescription":"Brand strategy sprint",
        "amountDue":"1800",
        "country":"United States",
        "currency":"USD"
      }
    }
  }'
```

If `MCP_SERVER_TOKEN` is set, include:

```bash
-H "authorization: Bearer $MCP_SERVER_TOKEN"
```

### What remains before ChatGPT Apps Directory submission

- Deploy a stable production MCP endpoint and HTTPS domain
- Add production authentication / secret management policy for MCP access
- Run final security, compliance, and legal review for generated contract content
- Complete OpenAI ChatGPT App review/submission steps in the OpenAI platform workflow
