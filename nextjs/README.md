# Next.js on run.zero

A Next.js 16 App Router app with a server-rendered page and a route handler, run with `next start` as a normal Node server.

- Live demo: https://web-example-nextjs-6733689e.run-zero.de
- Guide: https://run-zero.de/en/guides/nextjs (German: https://run-zero.de/anleitungen/nextjs)

## Files

- `package.json`: `build: next build --webpack`, `start: next start -p ${PORT:-8080}`, Node 22 pinned
- `app/page.js`: rendered on every request
- `app/api/health/route.js`: a route handler
- `run-zero.yaml`: one public service named `web`

## Deploy it

1. Copy this folder into the root of your repository.
2. On https://dashboard.run-zero.de create an app and connect the repository, or let your agent do it through the MCP server (`runzero_create_app`, `runzero_push_files`, `runzero_deploy`).
3. Deploy once. `run-zero.yaml` creates the services and addons, every later push rebuilds.
4. The app is live at `https://<service>-<app-slug>.run-zero.de`.

## Good to know

- Build with `next build --webpack`. Turbopack, the default in Next.js 16, cannot resolve `next` from the buildpack's module layer and fails the build.
- The buildpack runs `npm run build` itself. Do not build again in `start`.
- Vercel platform services (Edge Network, Blob, KV, Analytics) are not part of run.zero. `next start` runs as one Node process per replica.
