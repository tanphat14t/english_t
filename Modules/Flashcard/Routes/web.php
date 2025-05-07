<?php

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

Route::prefix('flashcard')->group(function() {
    Route::get('/', 'FlashcardController@index')->name('flashcard.index')->middleware('RoutePermissionCheck:flashcard');;
    Route::get('/get-all', 'FlashcardController@getFlashcardAll')->name('getFlashcardAll')->middleware('RoutePermissionCheck:flashcard');;
    Route::get('/add', 'FlashcardController@create')->name('flashcard.create')->middleware('RoutePermissionCheck:flashcard.create');
    Route::post('/store', 'FlashcardController@store')->name('flashcard.store')->middleware('RoutePermissionCheck:flashcard.store');
    Route::get('/edit/{id}', 'FlashcardController@edit')->name('flashcard.edit')->middleware('RoutePermissionCheck:flashcard.edit');
    Route::put('/update/{id}', 'FlashcardController@update')->name('flashcard-update')->middleware('RoutePermissionCheck:flashcard.edit');
    Route::delete('/destroy/{id}', 'FlashcardController@destroy')->name('flashcard-delete')->middleware('RoutePermissionCheck:flashcard.delete');
});
