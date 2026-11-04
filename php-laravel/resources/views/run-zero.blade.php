<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Laravel on run.zero</title>
</head>
<body style="font-family:system-ui,sans-serif;max-width:640px;margin:64px auto;padding:0 24px">
    <h1>Laravel on run.zero</h1>
    <p>Laravel {{ $laravel }} on PHP {{ $php }}, built by the Paketo PHP buildpack and served by nginx.</p>
    <p>Visits stored in Postgres: <strong id="visits">{{ $visits }}</strong></p>
    <p><a href="/api/health">/api/health</a></p>
</body>
</html>
