#!/usr/bin/env node
/**
 * Printed when you run `npm run dev`.
 *
 * profithub.cloud:3000 does NOT work for local development because:
 * - DNS for profithub.cloud resolves to production hosting (e.g. Vercel), not your PC.
 * - Nothing listens on port 3000 at that remote address, so the browser times out.
 * - Use localhost / 127.0.0.1 (or your LAN IP) instead.
 */
console.log(`
Profithub local development
  Use:  http://localhost:3000
  Use:  http://127.0.0.1:3000
  LAN:  use the Network URL printed by Next.js below (e.g. http://192.168.x.x:3000)

  Do NOT use:  http://profithub.cloud:3000
  Reason:      profithub.cloud points to production servers, not this machine.
`);
