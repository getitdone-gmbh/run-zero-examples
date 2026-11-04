// Minimal Express app for run.zero. The platform sets PORT, default 8080.
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.type('html').send(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Express on run.zero</title></head>
<body style="font-family:system-ui,sans-serif;max-width:640px;margin:64px auto;padding:0 24px">
<h1>Express on run.zero</h1>
<p>This Node.js app was built by a Paketo buildpack and listens on port ${port}.</p>
<p><a href="/api/health">/api/health</a></p>
</body></html>`);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', runtime: `node ${process.version}`, platform: 'run.zero' });
});

app.listen(port, () => console.log(`listening on ${port}`));
