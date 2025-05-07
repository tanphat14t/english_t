<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Modules\Flashcard\Entities\Flashcard;
class MyFlashcardPageSection extends Component
{

    public function __construct()
    {
    }

    public function render()
    {
        $flashcard = Flashcard::with('flashcardAssign')->get();
        return view(theme('components.my-flashcard-page-section'), compact('flashcard'));
    }
}
