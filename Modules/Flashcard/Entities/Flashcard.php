<?php

namespace Modules\Flashcard\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Flashcard\Entities\FlashcardWord;

class Flashcard extends Model
{
    use HasFactory;

    public function flashcardAssign()
    {
        return $this->hasMany(FlashcardWord::class, 'flashcard_id');
    }
}
