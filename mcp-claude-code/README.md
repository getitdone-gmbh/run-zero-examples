# Deployed from Claude Code via MCP

A zero-dependency Node server that an agent pushed and deployed through the run.zero MCP server at https://api.run-zero.de/mcp. No Git push, no terminal on the server side.

- Live demo: https://web-example-mcp-b21eac7c.run-zero.de
- Guide: https://run-zero.de/en/guides/mcp-claude-code (German: https://run-zero.de/anleitungen/mcp-claude-code)

## Files

- `package.json`: Node 22 pinned, `start: node server.js`
- `server.js`: listens on `$PORT`
- `run-zero.yaml`: one public service named `web`

## Deploy it

1. Copy this folder into the root of your repository.
2. On https://dashboard.run-zero.de create an app and connect the repository, or let your agent do it through the MCP server (`runzero_create_app`, `runzero_push_files`, `runzero_deploy`).
3. Deploy once. `run-zero.yaml` creates the services and addons, every later push rebuilds.
4. The app is live at `https://<service>-<app-slug>.run-zero.de`.

## Good to know

- Connect once: `claude mcp add --transport http -s user run-zero https://api.run-zero.de/mcp --client-id runzero-cli --callback-port 53761`, then `/mcp` and Authenticate.
- The agent used `runzero_create_app`, `runzero_push_files`, `runzero_deploy` and `runzero_wait_for_build`.
- `runzero_push_files` writes to a platform-managed repo. Apps linked to your own GitHub repo get their code by a normal Git push.
