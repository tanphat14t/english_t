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

    <div class="main quiz__details">
        <div class="path-link">
            <div class="container">
                <nav class="breadcrumb" aria-label="breadcrumb">
                    <ol class="breadcrumb-list">
                        <li class="breadcrumbs-li">
                            <div class="breadcrumb-item">Trang chủ</div>
                        </li>
                        <li>&#8250;</li>
                        <li class="breadcrumbs-li">
                            <div class="breadcrumb-last-item"><span>Thi online: Phát triển đề thi minh họa THPT 2025: Đề số 08</span></div>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="main-study-view">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-9">
                        <div class="study-layout-item study-layout-mid">
                            <div id="main-game-view">
                                <div class="game-test-utils">
                                    <div class="test-clock-panel">
                                        <svg class="test-clock-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_333_2076)">
                                                <path d="M9.19697 9.04133V5.09118C9.19697 4.62645 8.88715 4.31664 8.42243 4.31664C7.9577 4.31664 7.64789 4.62645 7.64789 5.09118V9.35114C7.64789 9.5835 7.72534 9.73841 7.88025 9.89332L10.901 12.914C11.0559 13.0689 11.2882 13.1464 11.4431 13.1464C11.6755 13.1464 11.8304 13.0689 11.9853 12.914C12.2951 12.6042 12.2951 12.1395 11.9853 11.8297L9.19697 9.04133ZM1.21922 3.23228L3.9301 1.29594C4.23992 1.06358 4.39483 0.598852 4.08501 0.211583C3.85265 -0.0982326 3.38792 -0.175686 3.00065 0.0566752L0.289769 1.99302C-0.0200466 2.22538 -0.0975004 2.69011 0.134861 3.07738C0.289769 3.30974 0.522131 3.38719 0.754492 3.38719C0.9094 3.38719 1.06431 3.38719 1.21922 3.23228ZM8.49988 1.37339C4.16246 1.37339 0.599585 4.85882 0.599585 9.19623C0.599585 13.5337 4.16246 17.0965 8.49988 17.0965C12.8373 17.0965 16.4002 13.5337 16.4002 9.19623C16.4002 4.85882 12.8373 1.37339 8.49988 1.37339ZM8.49988 15.5475C5.01446 15.5475 2.14866 12.6817 2.14866 9.19623C2.14866 5.71081 5.01446 2.92247 8.49988 2.92247C11.9853 2.92247 14.8511 5.78826 14.8511 9.27369C14.8511 12.7591 11.9853 15.5475 8.49988 15.5475ZM16.71 1.99302L13.9991 0.0566752C13.6893 -0.175686 13.1471 -0.0982326 12.9148 0.211583C12.6824 0.521398 12.7598 1.06358 13.0697 1.29594L15.7805 3.23228C15.9355 3.30974 16.0904 3.38719 16.2453 3.38719C16.4776 3.38719 16.71 3.30974 16.8649 3.07738C17.0973 2.69011 17.0198 2.22538 16.71 1.99302Z" fill="#0EC122"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_333_2076">
                                                    <rect width="17" height="17" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
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
                                        <span id="timer" style="color: rgb(38, 192, 72); font-size: 16px; font-weight: 600; line-height: 25px;">{{ $timer }}:00</span>
                                    </div>
                                </div>
                                <div class="main-game-object">
                                    <div class="game-object-view-aio">
                                        <div class="game-object-view-aio-question-index">
                                            Câu 1-6:
                                        </div>
                                        <div class="game-object-view-container">
                                            <div class="box-game-para">
                                                <div class="select-display-mode d-none d-md-block">
                                                    <div class="dropdown-mode">
                                                        <span class="selected-mode">Hiển thị dọc</span> <!-- Thêm dòng này -->
                                                        <ul class="list-mode">
                                                            <li data-mode="vertical">Hiển thị dọc</li>
                                                            <li data-mode="horizontal">Hiển thị ngang</li>
                                                        </ul>
                                                        <svg class="MuiSvgIcon-root" viewBox="0 0 24 24">
                                                            <path d="M7 10l5 5 5-5z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="game-object-view">
                                                    <div class="object-question">
                                                        <div class="game-object-question">
                                                            <div class="game-object-question-text">
                                                                <h3>
                                                                    Read the following email and mark the letter A, B, C or D on your answer sheet to indicate the option that best fits each of the numbered blanks from 1 to 6.
                                                                </h3>

                                                                <table aligns="center" class="Table" style="border-collapse:collapse; border:none" width="639">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="border-bottom:1px solid black; width:639px; padding:0in 7px 0in 7px; border-top:1px solid black; border-right:1px solid black; border-left:1px solid black" valign="top">
                                                                                <p style="margin-right:9px">
                                                                                    <span style="font-size:12pt">
                                                                                        <span style="line-height:115%">
                                                                                            <span style="font-family:Calibri,sans-serif">
                                                                                                <b>
                                                                                                    <i>
                                                                                                        <span style="font-family:&quot;Times New Roman&quot;,serif">Subject:

                                                                                                        </span>
                                                                                                    </i>
                                                                                                </b>
                                                                                                <i>
                                                                                                    <span style="font-family:&quot;Times New Roman&quot;,serif">
                                                                                                        Delayed Delivery
                                                                                                    </span>
                                                                                                </i>
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="border-bottom:1px solid black; width:639px; padding:0in 7px 0in 7px; border-top:none; border-right:1px solid black; border-left:1px solid black" valign="top">
                                                                                <p style="margin-right:9px"><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">Dear Customer Support Team,</span></span></span></span></p>

                                                                                <p><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">I am writing this email to (1) _______ a complaint regarding the delivery of my recent order (#12345) from your company, QuickShip Express. The delivery date initially (2) _______ was <u>December 1<sup>st</sup></u>, but I have yet to receive my package, and there has also been no update (3) _______ its status.</span></span></span></span></p>

                                                                                <p><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">I understand that delays can sometimes happen, but a(n) (4) _______ of communication is even more frustrating. Could you please provide me with information about the whereabouts of my order and let me know when I can expect it (5) _______? </span></span></span></span></p>

                                                                                <p><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">I would appreciate your prompt attention to this matter. Thank you for your time and (6) _______.</span></span></span></span></p>

                                                                                <p><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">Best regards,</span></span></span></span></p>

                                                                                <p style="margin-right:9px"><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Calibri,sans-serif"><i><span style="font-family:&quot;Times New Roman&quot;,serif">John Doe</span></i></span></span></span></p>

                                                                                <p style="margin-right:9px"><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">---------------</span></span></span></span></p>

                                                                                <p style="margin-right:9px"><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Calibri,sans-serif"><i><span style="font-family:&quot;Times New Roman&quot;,serif">Phone: 555-1234</span></i></span></span></span></p>

                                                                                <p style="margin-right:9px"><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Calibri,sans-serif"><i><span style="font-family:&quot;Times New Roman&quot;,serif">Email: </span></i><a href="mailto:johndoe@email.com"><i><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#0563c1">johndoe@email.com</span></span></i></a></span></span></span></p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="game-object-para-children">
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
                                                                    <div class="col-12">
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
                                                                                <div class="multypol_qustion">
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
                                                                                            {!! '<div>' . $count . ' . </div>' !!} <div class="quest-cnt">{!! $assignChild->question !!}</div>
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
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                        <div class="question-palette-panel d-none d-lg-block">
                            <div class="question-palette-main">
                                <div class="question-palette-header">
                                    <div class="question-palette-title"></div>
                                </div>
                                <div class="question-palette-body">
                                    <div class="questions-progress">
                                        <div class="game-progress-bar">
                                            <span class="" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                                <span class="progress-line" style="transform: translateX(-100%);"></span>
                                            </span>
                                        </div>
                                        <div class="progress-title">0/40</div>
                                    </div>
                                    <div class="questions-list">
                                        @php
                                        $count2 = 1;
                                        @endphp
                                        <div class="questions-list-row">
                                            @if (isset($questions))
                                            @foreach ($questions as $key2 => $assign)
                                            <a class="question-item  nav-link questionLink link_{{ $assign->id }} {{ $key2 == 0 ? 'skip_qus item-current-index' : 'pouse_qus' }}"
                                                href=""
                                                data-qus="{{ $assign->id }}"
                                                aria-selected="true">{{ $count2 }}</a>
                                            @php
                                            $count2++;
                                            @endphp
                                            @endforeach
                                            @endif

                                        </div>
                                    </div>
                                </div>
                                <div class="question-palette-footer">
                                    <div class="question-palette-function-buttons">
                                        <button class="button-pause-game" type="button">Tạm dừng</button>
                                    </div>
                                    <div class="question-palette-function-buttons">
                                        <button class="button-submit-game" type="button">Nộp bài</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tablet-study-view-nav d-block d-lg-none">
            <div class="tablet-study-main-nav">
                <div class="study-nav-item game-item">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="#397EE5" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_333_2083)">
                            <path d="M19.9135 18.7448C19.6298 18.7448 19.3835 18.5396 19.3361 18.2551C18.9133 15.7863 16.5226 11.4773 10.4583 11.2255V14.3932C10.4583 14.5009 10.4286 14.6065 10.3726 14.6984C10.3165 14.7903 10.2362 14.865 10.1405 14.9142C10.0448 14.9635 9.9373 14.9854 9.82992 14.9776C9.72254 14.9698 9.61939 14.9326 9.53178 14.87L0.745339 8.59396C0.669453 8.53974 0.607603 8.46819 0.564932 8.38526C0.522261 8.30233 0.5 8.21041 0.5 8.11714C0.5 8.02388 0.522261 7.93196 0.564932 7.84903C0.607603 7.7661 0.669453 7.69455 0.745339 7.64033L9.53182 1.36431C9.61943 1.30174 9.72258 1.26452 9.82995 1.25673C9.93732 1.24893 10.0448 1.27087 10.1405 1.32013C10.2362 1.36939 10.3165 1.44407 10.3726 1.53598C10.4286 1.62788 10.4583 1.73345 10.4583 1.84111V5.05654C14.2069 5.43045 20.5 8.13623 20.5 18.1588C20.5 18.4637 20.2662 18.7176 19.9624 18.7428C19.946 18.7441 19.9297 18.7448 19.9135 18.7448Z" fill="#397EE5"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_333_2083">
                                <rect width="20" height="20" fill="white" transform="translate(0.5)"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <div class="study-nav-item-label">Thoát</div>
                </div>
                <div class="study-nav-item game-item item-question">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="#397EE5" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_333_2089)">
                            <path d="M10.5106 0C4.97844 0 0.5 4.47844 0.5 10.0106C0.5 15.5428 4.97844 20.0212 10.5106 20.0212C16.0428 20.0212 20.5212 15.5428 20.5212 10.0106C20.5212 4.47844 16.0209 0 10.5106 0ZM11.4107 15.1916C11.1473 15.433 10.818 15.5428 10.4228 15.5428C10.0277 15.5428 9.69836 15.433 9.43492 15.1916C9.17148 14.9501 9.03977 14.6427 9.03977 14.2915C9.03977 13.9183 9.17148 13.6109 9.43492 13.3914C9.69836 13.1499 10.0277 13.0402 10.4228 13.0402C10.818 13.0402 11.1473 13.1499 11.4107 13.3914C11.6741 13.6329 11.8059 13.9402 11.8059 14.2915C11.8059 14.6647 11.6741 14.972 11.4107 15.1916ZM13.7597 8.53977C13.606 8.86906 13.3206 9.22031 12.9694 9.57156L12.1132 10.3619C11.8717 10.6034 11.6961 10.8448 11.6083 11.0863C11.5205 11.3278 11.4546 11.6352 11.4546 12.0303H9.32516C9.32516 11.3059 9.41297 10.7351 9.56664 10.318C9.72031 9.90086 10.0057 9.52766 10.357 9.22031C10.7302 8.91297 11.0155 8.62758 11.1912 8.36414C11.3888 8.1007 11.4766 7.81531 11.4766 7.50797C11.4766 6.76156 11.1473 6.38836 10.5106 6.38836C10.2033 6.38836 9.9618 6.49813 9.78617 6.71766C9.61055 6.93719 9.50078 7.22258 9.50078 7.59578H6.97617C6.97617 6.60789 7.30547 5.81758 7.92016 5.26875C8.53484 4.71992 9.41297 4.43453 10.5106 4.43453C11.6302 4.43453 12.4864 4.69797 13.1011 5.20289C13.7158 5.70781 14.0231 6.45422 14.0231 7.3982C14.0231 7.81531 13.9353 8.18852 13.7597 8.53977Z" fill="#397EE5"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_333_2089">
                                <rect width="20" height="20" fill="white" transform="translate(0.5)"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <div class="study-nav-item-label">Câu hỏi</div>
                </div>
                <div class="study-nav-item game-item ">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="#397EE5" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_333_2095)">
                            <path d="M10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 15.5229 4.97715 20 10.5 20C16.0229 20 20.5 15.5229 20.5 10C20.5 4.47715 16.0229 0 10.5 0ZM9.3916 12.6705C9.3916 13.3211 8.86418 13.8485 8.21355 13.8485C7.56293 13.8485 7.03551 13.3211 7.03551 12.6705V7.32953C7.03551 6.67891 7.56293 6.15148 8.21355 6.15148C8.86418 6.15148 9.3916 6.67891 9.3916 7.32953V12.6705ZM13.8781 12.6705C13.8781 13.3211 13.3507 13.8485 12.7001 13.8485C12.0495 13.8485 11.522 13.3211 11.522 12.6705V7.32953C11.522 6.67891 12.0495 6.15148 12.7001 6.15148C13.3507 6.15148 13.8781 6.67891 13.8781 7.32953V12.6705Z" fill="#397EE5"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_333_2095">
                                <rect width="20" height="20" fill="white" transform="translate(0.5)"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <div class="study-nav-item-label">Tạm dừng</div>
                </div>
                <div class="study-nav-item game-item">
                    <div class="study-nav-item-label submit">Nộp bài</div>
                </div>
            </div>
            <div class="tablet-study-menu-item-content">
                <div class="question-palette-panel">
                    <div class="question-palette-main">
                        <div class="question-palette-header">
                            <div class="question-palette-title"></div>
                        </div>
                        <div class="question-palette-body">
                            <div class="questions-progress">
                                <div class="game-progress-bar">
                                    <span class="" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        <span class="progress-line" style="transform: translateX(-100%);"></span>
                                    </span>
                                </div>
                                <div class="progress-title">0/40</div>
                            </div>
                            <div class="questions-list">
                                @php
                                $count2 = 1;
                                @endphp
                                <div class="questions-list-row">
                                    @if (isset($questions))
                                    @foreach ($questions as $key2 => $assign)
                                    <a class="question-item  nav-link questionLink link_{{ $assign->id }} {{ $key2 == 0 ? 'skip_qus item-current-index' : 'pouse_qus' }}"
                                        href=""
                                        data-qus="{{ $assign->id }}"
                                        aria-selected="true">{{ $count2 }}</a>
                                    @php
                                    $count2++;
                                    @endphp
                                    @endforeach
                                    @endif

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>


</div>