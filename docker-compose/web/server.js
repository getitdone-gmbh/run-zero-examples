// Web service of the compose example. Locally DATABASE_URL comes from docker-compose.yml, on run.zero from the postgres addon.
const express = require('express');
const { Pool } = require('pg');

const port = process.env.PORT || 8080;
const url = process.env.DATABASE_URL;
// run.zero: the addon URL carries sslmode=require against a self-signed cert, so drop it and pass ssl explicitly.
const onPlatform = !!url && url.includes('sslmode=');
const pool = url
  ? new Pool({
      connectionString: onPlatform ? url.replace(/[?&]sslmode=[^&]*/, '') : url,
      ssl: onPlatform ? { rejectUnauthorized: false } : false,
    })
  : null;

async function countVisit() {
  await pool.query('CREATE TABLE IF NOT EXISTS visits (id serial PRIMARY KEY, at timestamptz DEFAULT now())');
  await pool.query('INSERT INTO visits DEFAULT VALUES');
  const { rows } = await pool.query('SELECT count(*)::int AS n FROM visits');
  return rows[0].n;
}

const app = express();

app.get('/', async (req, res) => {
  const visits = pool ? await countVisit() : 'no database attached';
  res.type('html').send(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>docker compose on run.zero</title></head>
<body style="font-family:system-ui,sans-serif;max-width:640px;margin:64px auto;padding:0 24px">
<h1>docker compose on run.zero</h1>
<p>The web service came from ./web, the database from the postgres addon. Visits stored in Postgres: <strong id="visits">${visits}</strong></p>
<p><a href="/api/health">/api/health</a></p>
</body></html>`);
});

app.get('/api/health', (req, res) => res.json({ status: 'ok', database: !!pool, platform: 'run.zero' }));

app.listen(port, () => console.log(`listening on ${port}`));
