# Lovable, Bolt or v0 export on run.zero

A Vite and React app with client-side routing, the shape that Lovable and Bolt export. The buildpack runs `vite build`, `serve -s` serves `dist/` and answers deep links with `index.html`.

- Live demo: https://web-example-vite-spa-efd7ddd7.run-zero.de
- Guide: https://run-zero.de/en/guides/lovable-bolt-v0 (German: https://run-zero.de/anleitungen/lovable-bolt-v0)

## Files

- `package.json`: vite, the React plugin and serve in `dependencies`, Node 22 pinned
- `src/main.jsx`: two routes, `/` and `/about`
- `run-zero.yaml`: one public service named `web`

## Deploy it

1. Copy this folder into the root of your repository.
2. On https://dashboard.run-zero.de create an app and connect the repository, or let your agent do it through the MCP server (`runzero_create_app`, `runzero_push_files`, `runzero_deploy`).
3. Deploy once. `run-zero.yaml` creates the services and addons, every later push rebuilds.
4. The app is live at `https://<service>-<app-slug>.run-zero.de`.

## Good to know

- Keep `vite` in `dependencies`. The buildpack prunes `devDependencies` before the build has run.
- A v0 export is a Next.js project, follow the nextjs example instead.
- A database that the export talks to from the browser stays where it is. The postgres addon is only reachable from a server-side service.
