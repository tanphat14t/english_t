<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Flashcard\Entities\Flashcard;
use Modules\Flashcard\Entities\FlashcardWord;

class FlashcardApiControlder extends Controller
{
    public function flashcardDetail($id){
        $Flashcard = Flashcard::find($id);
        $FlashWord = $Flashcard->flashcardAssign;
        $response = [
            'success' => true,
            'data' => $FlashWord,
            'message' => 'Getting Word info',
        ];
        return response()->json($response, 200);
    }
}
