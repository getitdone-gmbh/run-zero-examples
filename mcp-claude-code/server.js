// Zero-dependency Node server, pushed and deployed by an AI agent through the run.zero MCP server.
const http = require('node:http');

const port = process.env.PORT || 8080;
const started = new Date().toISOString();

const page = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Deployed from Claude Code via MCP</title></head>
<body style="font-family:system-ui,sans-serif;max-width:640px;margin:64px auto;padding:0 24px">
<h1>Deployed from Claude Code via MCP</h1>
<p>An agent called runzero_create_app, runzero_push_files, runzero_deploy and runzero_wait_for_build. No terminal, no Git push.</p>
<p><a href="/api/health">/api/health</a></p>
</body></html>`;

http
  .createServer((req, res) => {
    if (req.url === '/api/health') {
      res.writeHead(200, { 'content-type': 'application/json' });
      return res.end(JSON.stringify({ status: 'ok', started, platform: 'run.zero' }));
    }
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(page);
  })
  .listen(port, () => console.log(`listening on ${port}`));
