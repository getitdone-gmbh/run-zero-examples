# Python (FastAPI) on run.zero

A FastAPI app served by Uvicorn. The Paketo Python buildpack detects `requirements.txt`, the `Procfile` sets the start command. Flask and Django work the same way with gunicorn in the Procfile.

- Live demo: https://web-example-fastapi-84f30cf3.run-zero.de
- Guide: https://run-zero.de/en/guides/python-fastapi (German: https://run-zero.de/anleitungen/python-fastapi)

## Files

- `requirements.txt`: fastapi and uvicorn, pinned
- `main.py`: the app with `/` and `/api/health`
- `Procfile`: `web: uvicorn main:app --host 0.0.0.0 --port $PORT`
- `run-zero.yaml`: one public service named `web`

## Deploy it

1. Copy this folder into the root of your repository.
2. On https://dashboard.run-zero.de create an app and connect the repository, or let your agent do it through the MCP server (`runzero_create_app`, `runzero_push_files`, `runzero_deploy`).
3. Deploy once. `run-zero.yaml` creates the services and addons, every later push rebuilds.
4. The app is live at `https://<service>-<app-slug>.run-zero.de`.

## Good to know

- The web process must bind to `0.0.0.0:$PORT`.
- The live demo runs the buildpack's default Python version (3.11 at the time of writing, see `/api/health`).
