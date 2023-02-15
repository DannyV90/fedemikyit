<?php

use App\Http\Controllers\FormController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'goldImage' => Storage::url('/images/gold.jpg'),
        'foto3' => Storage::url('/images/foto3.png'),
        'fotoFamiglia' => Storage::url('/images/famiglia.png'),
        'logo' => Storage::url('/images/DVW_logo_light.png'),
        'fotoDrago' => Storage::url('/images/foto_drago.png')
    ]);
});

Route::post('/message', [FormController::class, '__invoke'])->name('message');
