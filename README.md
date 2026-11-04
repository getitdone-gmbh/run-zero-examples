# run.zero examples

Working example apps for [run.zero](https://run-zero.de), the Platform-as-a-Service of Get IT Done GmbH, hosted in Germany. Every folder is a complete app with its own `run-zero.yaml` and README, and every one of them runs as a live demo.

| Folder | Stack | Live demo | Guide |
| --- | --- | --- | --- |
| [docker-compose](docker-compose) | compose file translated to run-zero.yaml, Postgres addon, image service | https://web-example-docker-compose-da4587ce.run-zero.de | [EN](https://run-zero.de/en/guides/docker-compose) · [DE](https://run-zero.de/anleitungen/docker-compose) |
| [node-express](node-express) | Node.js 22, Express | https://web-example-node-express-2311463c.run-zero.de | [EN](https://run-zero.de/en/guides/node-express) · [DE](https://run-zero.de/anleitungen/node-express) |
| [nextjs](nextjs) | Next.js 16, next start | https://web-example-nextjs-6733689e.run-zero.de | [EN](https://run-zero.de/en/guides/nextjs) · [DE](https://run-zero.de/anleitungen/nextjs) |
| [python-fastapi](python-fastapi) | Python, FastAPI, Uvicorn | https://web-example-fastapi-84f30cf3.run-zero.de | [EN](https://run-zero.de/en/guides/python-fastapi) · [DE](https://run-zero.de/anleitungen/python-fastapi) |
| [php-laravel](php-laravel) | PHP 8.5, Laravel 13, nginx | https://web-example-laravel-8c606360.run-zero.de | [EN](https://run-zero.de/en/guides/php-laravel) · [DE](https://run-zero.de/anleitungen/php-laravel) |
| [heroku-migration](heroku-migration) | Flask, gunicorn Procfile, Postgres | https://web-example-heroku-b24cc7f1.run-zero.de | [EN](https://run-zero.de/en/guides/heroku-alternative) · [DE](https://run-zero.de/anleitungen/heroku-alternative) |
| [lovable-bolt-v0](lovable-bolt-v0) | Vite, React, client-side routing | https://web-example-vite-spa-efd7ddd7.run-zero.de | [EN](https://run-zero.de/en/guides/lovable-bolt-v0) · [DE](https://run-zero.de/anleitungen/lovable-bolt-v0) |
| [mcp-claude-code](mcp-claude-code) | Node.js, deployed by an agent over MCP | https://web-example-mcp-b21eac7c.run-zero.de | [EN](https://run-zero.de/en/guides/mcp-claude-code) · [DE](https://run-zero.de/anleitungen/mcp-claude-code) |

## What every example follows

- The build runs on Paketo buildpacks. They detect Node.js, Python, Go, PHP and Java from `package.json`, `requirements.txt`, `go.mod`, `composer.json`, `pom.xml` or `build.gradle`. Dockerfiles are not built.
- The web process listens on `$PORT` (default 8080).
- Node apps pin `"engines": {"node": "22.x"}`.
- Addons are declared top level in `run-zero.yaml` with `attachTo`. Available: `postgres` and `keycloak`.

## License

MIT, see [LICENSE](LICENSE). The Laravel skeleton in `php-laravel` is MIT licensed by Taylor Otwell.
