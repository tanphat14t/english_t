<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Modules\Flashcard\Entities\Flashcard;
class MyFlashcardDetailPageSection extends Component
{
    public $id;
    public function __construct($id)
    {
        $this->id = $id;
    }

    public function render()
    {
        $flashcard = Flashcard::with('flashcardAssign')->find($this->id);
        return view(theme('components.my-flashcard-detail-page-section'), compact('flashcard'));
    }
}
