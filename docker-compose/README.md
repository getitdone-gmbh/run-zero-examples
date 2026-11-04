# docker compose on run.zero

A two-container compose setup (Node web app plus Postgres) and the `run-zero.yaml` that runs the same app on run.zero. run.zero does not read `docker-compose.yml` and does not build Dockerfiles: `./web` is built by a Paketo buildpack, the `db` container becomes the managed postgres addon. The `whoami` service shows the second way in: a ready-made image from a registry.

- Live demo: https://web-example-docker-compose-da4587ce.run-zero.de
- Guide: https://run-zero.de/en/guides/docker-compose (German: https://run-zero.de/anleitungen/docker-compose)

## Files

- `docker-compose.yml`: the local setup, unchanged
- `web/Dockerfile`: used only by compose on your machine
- `web/server.js`: reads `DATABASE_URL`, counts visits
- `run-zero.yaml`: `web` from `./web`, `whoami` from an image, `db` as postgres addon

## Deploy it

1. Copy this folder into the root of your repository.
2. On https://dashboard.run-zero.de create an app and connect the repository, or let your agent do it through the MCP server (`runzero_create_app`, `runzero_push_files`, `runzero_deploy`).
3. Deploy once. `run-zero.yaml` creates the services and addons, every later push rebuilds.
4. The app is live at `https://<service>-<app-slug>.run-zero.de`.

## Good to know

- No volumes for your own containers. Persistent data goes into the postgres addon.
- No Redis or MongoDB addon in `run-zero.yaml` today, only postgres and keycloak.
- An image service must listen on the port you declare. The `whoami` demo is at https://whoami-example-docker-compose-da4587ce.run-zero.de
