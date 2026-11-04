# Node.js (Express) on run.zero

A minimal Express server. The Paketo Node.js buildpack detects `package.json`, installs the dependencies and runs `npm start`.

- Live demo: https://web-example-node-express-2311463c.run-zero.de
- Guide: https://run-zero.de/en/guides/node-express (German: https://run-zero.de/anleitungen/node-express)

## Files

- `package.json`: pins `"engines": {"node": "22.x"}` and has a `start` script
- `server.js`: listens on `process.env.PORT`, default 8080
- `run-zero.yaml`: one public service named `web` on port 8080

## Deploy it

1. Copy this folder into the root of your repository.
2. On https://dashboard.run-zero.de create an app and connect the repository, or let your agent do it through the MCP server (`runzero_create_app`, `runzero_push_files`, `runzero_deploy`).
3. Deploy once. `run-zero.yaml` creates the services and addons, every later push rebuilds.
4. The app is live at `https://<service>-<app-slug>.run-zero.de`.

## Good to know

- Pin Node 22. Node 23 and newer crash at runtime on the current build stack.
- Anything the build needs belongs in `dependencies`. The buildpack prunes `devDependencies`.
