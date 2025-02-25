<?php

use App\Http\Controllers\DomainGenerationController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'home'])->name('home');
Route::get('/howto', [HomeController::class, 'howto'])->name('howto');
Route::get('/privacy', [HomeController::class, 'privacy'])->name('privacy');

Route::get('/generate', [DomainGenerationController::class, 'index'])->name('generate.index');
Route::post('/generate', [DomainGenerationController::class, 'generate'])->name('generate.post');
Route::get('/generate/available', [DomainGenerationController::class, 'checkDomain'])->name('generate.available');
