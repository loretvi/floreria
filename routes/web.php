<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('inicio');
Route::get('/nosotros', function () {
    return view('nosotros');
})->name('nosotros');
Route::get('/contacto', function () {
    return view('contacto');
})->name('contacto');
Route::get('/tienda', function () {
    return view('tienda');
})->name('tienda');
Route::get('/carrito', function () {
    return view('carrito');
})->name('carrito');
Route::get('/producto', function () {
    return view('producto');
})->name('producto');
Route::get('/deseos', function () {
    return view('lista_deseos');
})->name('deseos');
Route::get('/comprar', function () {
    return view('checkout');
})->name('comprar');

