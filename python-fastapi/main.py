# Minimal FastAPI app for run.zero. Uvicorn binds to $PORT, see Procfile.
import platform

from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI(title="FastAPI on run.zero")


@app.get("/", response_class=HTMLResponse)
def index() -> str:
    return """<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>FastAPI on run.zero</title></head>
<body style="font-family:system-ui,sans-serif;max-width:640px;margin:64px auto;padding:0 24px">
<h1>FastAPI on run.zero</h1>
<p>This Python app was built by a Paketo buildpack and runs under Uvicorn.</p>
<p><a href="/api/health">/api/health</a> · <a href="/docs">/docs</a></p>
</body></html>"""


@app.get("/api/health")
def health() -> dict:
    return {"status": "ok", "runtime": f"python {platform.python_version()}", "platform": "run.zero"}
