<?php

use Illuminate\Support\Facades\Route;


Route::prefix('page-builder/')->as('page_builder.')->middleware(['auth'])->group(function () {
    Route::resource('pages', 'PageBuilderController')->except(['destroy', 'create']);
    Route::post('page/delete', 'PageBuilderController@destroy')->name('pages.destroy');
    Route::post('page/status', 'PageBuilderController@status')->name('pages.status');
    Route::get('page/design/{id}', 'PageBuilderController@design')->name('pages.design');
    Route::post('page/design/update/{id}', 'PageBuilderController@designUpdate')->name('pages.design.update');
    Route::get('snippet', 'PageBuilderController@affSnippet')->name('snippet');


    Route::post('new-upload', 'ImageUploadController@upload')->name('pageBuilderImageUpload');
    Route::get('exam-online', 'PageBuilderController@examOnline')->name('pages.examOnline');
    Route::get('do-exam', 'PageBuilderController@doExamOnline')->name('pages.doExamOnline');
    Route::get('dashboard', 'PageBuilderController@dashBoard')->name('pages.dashBoard');
    Route::get('flashcard', 'PageBuilderController@flashCard')->name('pages.flashCard');

});
