<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Modules\Flashcard\Entities\Flashcard;
use App\Models\FlashcardUser;
use Modules\Flashcard\Entities\FlashcardWord;
use Illuminate\Support\Facades\Auth;
class MyFlashcardDetailTestPageSection extends Component
{
    public $id;
    public function __construct($id)
    {
        $this->id = $id;
    }

    public function render()
    {
        $flashcard = Flashcard::with('flashcardAssign')->find($this->id);
        return view(theme('components.my-flashcard-detail-test-page-section'), compact('flashcard', 'data'));
    }
}
