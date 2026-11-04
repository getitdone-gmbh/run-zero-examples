# A typical Heroku app: Flask, gunicorn from the Procfile, Postgres from DATABASE_URL.
import os

import psycopg
from flask import Flask, jsonify

app = Flask(__name__)
DATABASE_URL = os.environ.get("DATABASE_URL")


def count_visit() -> int:
    # run.zero injects DATABASE_URL with sslmode=require, psycopg accepts it as is.
    with psycopg.connect(DATABASE_URL) as conn:
        conn.execute("CREATE TABLE IF NOT EXISTS visits (id serial PRIMARY KEY, at timestamptz DEFAULT now())")
        conn.execute("INSERT INTO visits DEFAULT VALUES")
        return conn.execute("SELECT count(*) FROM visits").fetchone()[0]


@app.get("/")
def index():
    visits = count_visit() if DATABASE_URL else "no database attached"
    return f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>From Heroku to run.zero</title></head>
<body style="font-family:system-ui,sans-serif;max-width:640px;margin:64px auto;padding:0 24px">
<h1>From Heroku to run.zero</h1>
<p>Same Procfile, same DATABASE_URL. Visits stored in Postgres: <strong id="visits">{visits}</strong></p>
<p><a href="/api/health">/api/health</a></p>
</body></html>"""


@app.get("/api/health")
def health():
    return jsonify(status="ok", database=bool(DATABASE_URL), platform="run.zero")
