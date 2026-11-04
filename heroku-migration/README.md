# From Heroku to run.zero

A typical Heroku app: Flask, gunicorn started from the `Procfile` and Postgres through `DATABASE_URL`. The code is unchanged, only `run-zero.yaml` is new.

- Live demo: https://web-example-heroku-b24cc7f1.run-zero.de
- Guide: https://run-zero.de/en/guides/heroku-alternative (German: https://run-zero.de/anleitungen/heroku-alternative)

## Files

- `Procfile`: the same `web:` line you used on Heroku
- `app.py`: counts visits in Postgres via `DATABASE_URL`
- `requirements.txt`: flask, gunicorn, psycopg
- `run-zero.yaml`: service `web` plus a `postgres` addon attached to it

## Deploy it

1. Copy this folder into the root of your repository.
2. On https://dashboard.run-zero.de create an app and connect the repository, or let your agent do it through the MCP server (`runzero_create_app`, `runzero_push_files`, `runzero_deploy`).
3. Deploy once. `run-zero.yaml` creates the services and addons, every later push rebuilds.
4. The app is live at `https://<service>-<app-slug>.run-zero.de`.

## Good to know

- `DATABASE_URL` carries `sslmode=require` against a self-signed certificate. psycopg accepts it as is. With node-postgres pass `ssl: { rejectUnauthorized: false }` and drop `sslmode` from the URL.
- There is no `app.json` and no add-on marketplace. Addons today: postgres and keycloak.
- There is no dump import yet. Small datasets go in as SQL through the dashboard SQL console or `runzero_db_query`, a full dump of the run.zero database can be downloaded from the dashboard export.
