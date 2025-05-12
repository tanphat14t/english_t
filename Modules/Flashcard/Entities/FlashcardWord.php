<?php

namespace Modules\Flashcard\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FlashcardWord extends Model
{
    use HasFactory;
    protected $fillable = [
        'flashcard_id', 'word', 'word_type', 'word_read', 'word_trans', 'word_note'
    ];
}
