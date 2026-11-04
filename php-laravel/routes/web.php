<?php

use Illuminate\Support\Facades\Route;

// One page and one JSON route that prove PHP and Laravel run on run.zero.
Route::get('/', fn () => view('run-zero', [
    'php' => PHP_VERSION,
    'laravel' => app()->version(),
]));

Route::get('/api/health', fn () => response()->json([
    'status' => 'ok',
    'runtime' => 'php '.PHP_VERSION,
    'laravel' => app()->version(),
    'platform' => 'run.zero',
]));
