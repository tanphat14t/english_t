<div>
    <style>
        .right-sticky {
            position: sticky;
            top: 60px;
        }
    </style>
    @php
        if ($quiz->random_question == 1) {
            $questions = $quiz->assignRand;
        } else {
            $questions = $quiz->assign;
        }
        $losing_count = $quiz->losing_focus_acceptance_number;
        $question_time_type = $quiz->question_time_type;
        $losing_type = $quiz->losing_type;
    @endphp
    <input type="hidden" name="quiz_assign" class="quiz_assign" value="{{ count($questions) }}">
    <input type="hidden" name="" class="losing_count" value="{{ $losing_count }}">
    <input type="hidden" name="" class="question_time_type" value="{{ $question_time_type }}">
    <input type="hidden" name="" class="losing_question_time_type" value="{{ $losing_type }}">
    <input type="hidden" name="" class="losing_count_message"
        value="{{ trans('quiz.times you have been out of quiz') }}">
    <input type="hidden" name="" class="losing_message"
        value="{{ trans('quiz.times you have been out of quiz') . ' ' . trans('quiz.Your answer has been submitted') }}">

    <div class="quiz__details">
        <div class="container">
            <div class="row justify-content-center ">
                <div class="col-xl-12">
                    <div class="row">
                        <div class="col-12">
                            <div class="quiz_questions_wrapper mb_30">
                                <!-- quiz_test_header  -->

                                @if ($alreadyJoin != 0 && $quiz->multiple_attend == 0)
                                    <div class="quiz_test_header d-flex justify-content-between align-items-center">
                                        <div class="quiz_header_left text-center">
                                            <h3>{{ __('frontend.Sorry! You already attempted this quiz') }}</h3>
                                        </div>


                                    </div>
                                @else
                                    <div class="quiz_test_header d-flex justify-content-between align-items-center">
                                        <div class="quiz_header_left">
                                            <h3>{{ $quiz->title }}</h3>
                                        </div>

                                        <div class="quiz_header_right">

                                            <span class="question_time">
                                                @php
                                                    $timer = 0;
                                                    if (!empty($course->duration)) {
                                                        $timer = $course->duration;
                                                    } else {
                                                        if (!empty($quiz->question_time_type == 1)) {
                                                            $timer = $quiz->question_time;
                                                        } else {
                                                            $timer = $quiz->question_time * count($questions);
                                                        }
                                                    }

                                                @endphp

                                                <span id="timer">{{ $timer }}:00</span>
                                                {{ __('Phút') }}</span>
                                            <p>{{ __('Thời gian còn lại') }}</p>
                                        </div>
                                    </div>
                                    <!-- quiz_test_body  -->
                                    <form action="{{ route('quizSubmit') }}" method="POST" id="quizForm">
                                        <input type="hidden" name="quizType" value="2">
                                        <input type="hidden" name="courseId" value="{{ $course->id }}">
                                        <input type="hidden" name="quizId" value="{{ $quiz->id }}">
                                        <input type="hidden" name="question_review" id="question_review"
                                            value="{{ $quiz->question_review }}">
                                        <input type="hidden" name="start_at" value="">
                                        <input type="hidden" name="quiz_test_id" value="">
                                        <input type="hidden" name="quiz_start_url"
                                            value="{{ route('quizTestStart') }}">
                                        <input type="hidden" name="single_quiz_submit_url"
                                            value="{{ route('singleQuizSubmit') }}">
                                        <input type="hidden" name="show_ans"
                                            value="{{ $quiz->question_review != 1 && $quiz->show_result_each_submit == 1 ? 1 : 0 }}">
                                        <input type="hidden" name="show_ans_success"
                                            value="{{ __('quiz.Correct Answer') }}">
                                        <input type="hidden" name="show_ans_failed"
                                            value="{{ __('quiz.Wrong Answer') }}">
                                        @csrf

                                        <div class="quiz_test_body ">
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        <div class="content">
                                                            @php
                                                                $count = 1;
                                                            @endphp
                                                            @if (isset($questions))
                                                                @foreach ($questions as $key => $assign)
                                                                    @php
                                                                        $options = [];
                                                                        if (isset($assign->questionBank->questionMu)) {
                                                                            $options =
                                                                                $assign->questionBank->questionMu;
                                                                        }

                                                                        $qusBank = $assign->questionBank;
                                                                        if (isset($previous)) {
                                                                            $already = $previous
                                                                                ->where('qus_id', $qusBank->id)
                                                                                ->first();
                                                                        }

                                                                        $groupQuizz = @$assign->questionBank->parent_id == 0 && @$assign->questionBank->type == "X" ? true : false;

                                                                    @endphp
                                                                    <div class="singleQuestion"
                                                                        data-qus-id="{{ $assign->id }}"
                                                                        data-qus-type="{{ $assign->questionBank->type }}">
                                                                        <!-- content  -->
                                                                        <div class="multypol_qustion mb_20">
                                                                            @if($groupQuizz)<div class="font-24 font-weight-bold mb_40" style="color: #995fff;">Câu {{($count) . ' - ' . ($count+@$assign->questionBank->questionChild->count())}}</div>@endif
                                                                            <div class="d-flex font_18 f_w_700 mb-0">
                                                                                {!! $groupQuizz ? '' : '<div>' . $count . ' .</div> ' !!} <div class="quest-cnt">{!! @$assign->questionBank->question !!}</div>
                                                                            </div>
                                                                            @if (@$quiz->show_total_correct_answer == 1)
                                                                                <small>({{ __('quiz.Choose') }} <span
                                                                                        class="questionAnsTotal text-danger font-weight-bold">
                                                                                        {{ count($options->where('status', 1)) }}</span>
                                                                                    @if (count($options->where('status', 1)) <= 1)
                                                                                        {{ __('quiz.answer') }})
                                                                                    @else
                                                                                        {{ __('quiz.answers') }})
                                                                                    @endif
                                                                                </small>
                                                                            @endif
                                                                        </div>
                                                                        <input type="hidden" class="question_type"
                                                                            name="type[{{ $assign->questionBank->id }}]"
                                                                            value="{{ @$assign->questionBank->type }}">
                                                                        <input type="hidden" class="question_id"
                                                                            name="question[{{ $assign->questionBank->id }}]"
                                                                            value="{{ @$assign->questionBank->id }}">

                                                                        @if ($assign->questionBank->type == 'M')
                                                                            <ul class="quiz_select">
                                                                                @foreach ($options as $option)
                                                                                    <li>
                                                                                        <label
                                                                                            class="primary_bulet_checkbox d-flex">
                                                                                            <input class="quizAns"
                                                                                                data-question_id="{{ $assign->questionBank->id }}"
                                                                                                data-assign_id="{{ $assign->id }}"
                                                                                                data-question_type="{{ $assign->questionBank->type }}"
                                                                                                name="ans[{{ $option->question_bank_id }}][]"
                                                                                                type="radio"
                                                                                                value="{{ $option->id }}">

                                                                                            <span
                                                                                                class="checkmark mr_10"></span>
                                                                                            <span
                                                                                                class="label_name">{{ $option->title }}
                                                                                            </span>
                                                                                        </label>
                                                                                    </li>
                                                                                @endforeach
                                                                            </ul>
                                                                        @elseif($assign->questionBank->type == 'X')
                                                                            @if($assign->questionBank->questionChild)
                                                                                @foreach ($assign->questionBank->questionChild as $key => $assignChild)
                                                                                    @php
                                                                                        $options = [];
                                                                                        if (isset($assignChild->questionMu)) {
                                                                                            $options = $assignChild->questionMu;
                                                                                        }
                                                                                    @endphp
                                                                                    <div class="singleQuestionChild"
                                                                                        data-qus-id="{{ $assign->id }}"
                                                                                        data-qus-type="{{ $assignChild->type }}">
                                                                                        <!-- content  -->
                                                                                        <div class="multypol_qustion mb_20">
                                                                                            <div class="d-flex font_18 f_w_700 mb-0">
                                                                                                {!! '<div>' . $count . ' . </div>' !!} <div class="quest-cnt">{!! $assignChild->question !!}</div></div>
                                                                                            @if (@$quiz->show_total_correct_answer == 1)
                                                                                                <small>({{ __('quiz.Choose') }} <span
                                                                                                        class="questionAnsTotal text-danger font-weight-bold">
                                                                                                        {{ count($options->where('status', 1)) }}</span>
                                                                                                    @if (count($options->where('status', 1)) <= 1)
                                                                                                        {{ __('quiz.answer') }})
                                                                                                    @else
                                                                                                        {{ __('quiz.answers') }})
                                                                                                    @endif
                                                                                                </small>
                                                                                            @endif
                                                                                        </div>
                                                                                        <input type="hidden" class="question_type"
                                                                                            name="type[{{ $assignChild->id }}]"
                                                                                            value="{{ @$assignChild->type }}">
                                                                                        <input type="hidden" class="question_id"
                                                                                            name="question[{{ $assignChild->id }}]"
                                                                                            value="{{ @$assignChild->id }}">
                                                                                        <ul class="quiz_select">
                                                                                            @foreach ($options as $option)
                                                                                                <li>
                                                                                                    <label
                                                                                                        class="primary_bulet_checkbox d-flex">
                                                                                                        <input class="quizAns"
                                                                                                            data-question_id="{{ $assign->questionBank->id }}"
                                                                                                            data-assign_id="{{ $assign->id }}"
                                                                                                            data-question_type="{{ $assign->questionBank->type }}"
                                                                                                            name="ans[{{ $option->question_bank_id }}][]"
                                                                                                            type="radio"
                                                                                                            value="{{ $option->id }}">
            
                                                                                                        <span
                                                                                                            class="checkmark mr_10"></span>
                                                                                                        <span
                                                                                                            class="label_name">{{ $option->title }}
                                                                                                        </span>
                                                                                                    </label>
                                                                                                </li>
                                                                                            @endforeach
                                                                                        </ul>
                                                                                    </div>
                                                                                    @php
                                                                                        $count++;
                                                                                    @endphp
                                                                                @endforeach
                                                                            @endif
                                                                        @endif
                                                                        @if (!empty($assign->questionBank->image))
                                                                            <div class="ques_thumb mb_50">
                                                                                <img src="{{ asset($assign->questionBank->image) }}"
                                                                                    class="img-fluid" alt="">
                                                                            </div>
                                                                        @endif
                                                                        <!-- content::end  -->
                                                                    </div>
                                                                    @php
                                                                        if( !$groupQuizz )
                                                                            $count++;
                                                                    @endphp
                                                                @endforeach
                                                            @endif
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-4">
                                                        <div class="right-sticky">
                                                            @php
                                                                $count2 = 1;
                                                            @endphp
                                                            <div class="nav question_number_lists mb-3" id="nav-tab"
                                                                role="tablist">
                                                                @if (isset($questions))
                                                                    @foreach ($questions as $key2 => $assign)
                                                                        <a class="nav-link questionLink link_{{ $assign->id }} {{ $key2 == 0 ? 'skip_qus' : 'pouse_qus' }}"
                                                                            href=""
                                                                            data-qus="{{ $assign->id }}"
                                                                            aria-selected="true">{{ $count2 }}</a>
                                                                        @php
                                                                            $count2++;
                                                                        @endphp
                                                                    @endforeach
                                                                @endif
                                                            </div>
                                                            <div class="sumit_skip_btns d-flex align-items-center mb_50 justify-content-center">
                                                                <button type="button"
                                                                    class="submitBtn theme_btn small_btn  mr_20">
                                                                    {{ __('student.Submit') }}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </form>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
