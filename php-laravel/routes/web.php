<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

// One page that proves PHP, Laravel and the postgres addon work on run.zero.
Route::get('/', function () {
    $visits = 'no database attached';
    if (env('DATABASE_URL')) {
        DB::statement('CREATE TABLE IF NOT EXISTS visits (id serial PRIMARY KEY, at timestamptz DEFAULT now())');
        DB::insert('INSERT INTO visits DEFAULT VALUES');
        $visits = DB::scalar('SELECT count(*) FROM visits');
    }

    return view('run-zero', [
        'visits' => $visits,
        'php' => PHP_VERSION,
        'laravel' => app()->version(),
    ]);
});

Route::get('/api/health', fn () => response()->json([
    'status' => 'ok',
    'runtime' => 'php '.PHP_VERSION,
    'laravel' => app()->version(),
    'platform' => 'run.zero',
]));
