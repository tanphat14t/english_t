<?php

namespace App\View\Components;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\Component;
use Modules\CourseSetting\Entities\Category;
use Modules\CourseSetting\Entities\CourseEnrolled;
use Modules\Quiz\Entities\OnlineQuiz;
use Modules\CPD\Repositories\Interfaces\CpdRepositoryInterface;

class MyQuizzDetailPageSection extends Component
{
    public $quizzid;

    public function __construct(
        $quizzid
    )
    {
        $this->quizzid = $quizzid;
    }

    public function render()
    {
        return view(theme('components.my-quizz-detail-page-section'));
       
    }
}
