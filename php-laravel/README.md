# Laravel on run.zero

A trimmed Laravel 13 skeleton. The Paketo PHP buildpack detects `composer.json`, runs `composer install --no-dev` and serves `public/` with nginx and PHP-FPM.

- Live demo: https://web-example-laravel-8c606360.run-zero.de
- Guide: https://run-zero.de/en/guides/php-laravel (German: https://run-zero.de/anleitungen/php-laravel)

## Files

- `project.toml`: `BP_PHP_SERVER=nginx` and `BP_PHP_WEB_DIR=public` for the build
- `run-zero.yaml`: service `web` with production env (stderr logs, cookie sessions, array cache, caches and compiled views in /tmp)
- `.nginx.conf.d/laravel-server.conf`: sends every route that is not a file to `index.php`
- `.php.ini.d/laravel.ini`: loads `openssl` and `mbstring` for PHP-FPM
- `routes/web.php`: `/` and `/api/health`

## Deploy it

1. Copy this folder into the root of your repository.
2. On https://dashboard.run-zero.de create an app and connect the repository, or let your agent do it through the MCP server (`runzero_create_app`, `runzero_push_files`, `runzero_deploy`).
3. Deploy once. `run-zero.yaml` creates the services and addons, every later push rebuilds.
4. The app is live at `https://<service>-<app-slug>.run-zero.de`.

## Good to know

- Set `APP_KEY` as a secret, never in `run-zero.yaml`: `php artisan key:generate --show`, then add it in the dashboard or with `runzero_set_secrets`.
- The PHP version comes from `require.php` in `composer.json`. The demo got PHP 8.5.
- Postgres from PHP does not work today: the build image lacks `libpq`, so `pdo_pgsql` fails to load. Use the postgres addon from a Node, Python, Go or Java service.
- The app filesystem is not persistent. Keep sessions in cookies, logs on stderr and uploads in external storage.
