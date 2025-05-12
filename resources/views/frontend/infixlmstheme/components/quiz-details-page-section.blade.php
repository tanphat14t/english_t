<div>
    @php
    if (@$course->discount_price!=null) {
    $course_price=@$course->discount_price;
    } else {
    $course_price=@$course->price;
    }
    $showWaitList =false;
    $alreadyWaitListRequest =false;
    if(isModuleActive('WaitList') && $course->waiting_list_status == 1 && auth()->check()){
    $count = $course->waitList->where('user_id',auth()->id())->count();
    if ($count==0){
    $showWaitList=true;
    }else{
    $alreadyWaitListRequest =true;
    }
    }
    @endphp
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
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-9">
                        <div class="heading">
                            <h2 class="title">{{$currentQuiz->title}}</h2>
                            <p class="last-note">(Ghi nhận lần cuối lúc: 11:21 - 09/05/2025)</p>
                        </div>
                        <div class="result-grid">
                            <div class="result-item">
                                <div class="inner">
                                    <div class="progress">
                                        <div class="condition-pass-wrap">
                                            <div class="condition-pass" style="transform: rotate(294deg) translate(90px) rotate(-294deg);">
                                                <img src="{{ asset('/public/images/icon-check.svg') }}" alt="">
                                            </div>
                                        </div>
                                        <svg class="rc-progress-circle" viewBox="0 0 100 100" role="presentation" style="width: 191px; height: 191px;">
                                            <circle class="rc-progress-circle-trail" r="46.5" cx="50" cy="50" stroke="var(--extend-background-color, #F9F5FA)" stroke-linecap="round" stroke-width="7" style="stroke: var(--extend-background-color, #F9F5FA); stroke-dasharray: 191.532px, 292.168; stroke-dashoffset: 0; transform: rotate(152deg); transform-origin: 50px 50px; transition: stroke-dashoffset 0.3s, stroke-dasharray 0.3s, stroke 0.3s, stroke-width 0.06s 0.3s, opacity 0.3s; fill-opacity: 0;"></circle>
                                            <circle class="rc-progress-circle-path" r="46.5" cx="50" cy="50" stroke-linecap="round" stroke-width="7" opacity="0" style="stroke: var(--extend-product-color-failed, #D43B37); stroke-dasharray: 191.532px, 292.168; stroke-dashoffset: 191.522; transform: rotate(152deg); transform-origin: 50px 50px; transition: stroke-dashoffset 0.3s, stroke-dasharray 0.3s, stroke 0.3s, stroke-width 0.06s 0.3s, opacity; fill-opacity: 0;"></circle>
                                        </svg>
                                        <div class="score-progress">
                                            <div class="score-text">Điểm của bạn</div>
                                            <div class="score-number pont-quiz">100</div>
                                        </div>
                                    </div>
                                    <div class="condition-text">Bạn chưa vượt qua bài thi này!</div>
                                </div>
                            </div>
                            <div class="result-item">
                                <h4 class="title">Số câu đúng</h4>
                                <div class="result-item-content">
                                    <span><img src="{{ asset('/public/images/icon-question1.svg') }}" alt=""></span>
                                    0/{{$currentQuiz->total_questions}}
                                </div>
                            </div>
                            @php

                            $duration =0;

                            $type =$currentQuiz->question_time_type;
                            if ($type==0){
                            $duration = $currentQuiz->question_time*$currentQuiz->total_questions;
                            }else{
                            $duration = $currentQuiz->question_time;
                            }

                            @endphp
                            <div class="result-item">
                                <h4 class="title">Thời gian làm bài</h4>
                                <div class="result-item-content">
                                    <span><img src="{{ asset('/public/images/icon-time.svg') }}" alt=""></span>
                                    {{formatTimeFromMinutes($duration)}}
                                </div>
                            </div>
                            <div class="result-item">
                                <h4 class="title">Số lần tạm dừng</h4>
                                <div class="result-item-content">
                                    <span><img src="{{ asset('/public/images/icon-pause1.svg') }}" alt=""></span>
                                    0/3
                                </div>
                            </div>
                            <div class="result-item">
                                <h4 class="title">Số lần làm bài</h4>
                                <div class="result-item-content">
                                    <span><img src="{{ asset('/public/images/icon-video.svg') }}" alt=""></span>
                                    2/10
                                </div>
                            </div>
                        </div>
                        <div class="encourage">
                            <div class="encourage-image">
                                <img src="{{ asset('/public/images/icon-sad3.svg') }}" alt="">
                            </div>
                            <div class="encourage-tooltip">
                                <span> Hành trình vạn dặm đều bắt đầu từ một bước chân, em đừng chùn bước nhé!</span>
                            </div>
                        </div>
                        <div class="lecture-information-button">
                            <a href="" class="btn-border-primary review-btn">Xem giải thích chi tiết</a>
                            <a href="" class="btn-bg-primary remake-btn">Làm lại</a>
                        </div>
                        <div class="lecture-information-button">
                            <a href="{{route('quizStart',[$course->id,$currentQuiz->id,$course->slug])}}"
                                class="doexam-btn theme_btn mr_15 m-auto mt-4 text-center">{{__('Làm Bài')}}</a>
                        </div>

                        <div class="lecture-page-block-left">
                            <h4>
                                <span><img src="{{asset('/public/images/icon-history.svg')}}" alt=""></span>
                                Lịch sử làm bài kiểm tra
                            </h4>
                            <div class="chart-container">
                                <svg version="1.1" class="highcharts-root" style="font-family: &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif; font-size: 12px;" xmlns="http://www.w3.org/2000/svg" width="815" height="400" viewBox="0 0 815 400" role="img" aria-label="">
                                    <desc>Created with Highcharts 10.3.3</desc>
                                    <defs>
                                        <clipPath id="highcharts-omfjoi1-1-">
                                            <rect x="0" y="0" width="767" height="296" fill="none"></rect>
                                        </clipPath>
                                        <clipPath id="highcharts-omfjoi1-4-">
                                            <rect x="0" y="0" width="767" height="296" fill="none"></rect>
                                        </clipPath>
                                    </defs>
                                    <rect fill="#ffffff" class="highcharts-background" x="0" y="0" width="815" height="400" rx="0" ry="0"></rect>
                                    <rect fill="none" class="highcharts-plot-background" x="38" y="10" width="767" height="296"></rect>
                                    <g class="highcharts-pane-group" data-z-index="0"></g>
                                    <g class="highcharts-grid highcharts-xaxis-grid" data-z-index="1">
                                        <path fill="none" stroke="#e6e6e6" stroke-width="0" stroke-dasharray="none" data-z-index="1" class="highcharts-grid-line" d="M 421.5 10 L 421.5 306" opacity="1"></path>
                                        <path fill="none" stroke="#e6e6e6" stroke-width="0" stroke-dasharray="none" data-z-index="1" class="highcharts-grid-line" d="M 804.5 10 L 804.5 306" opacity="1"></path>
                                        <path fill="none" stroke="#e6e6e6" stroke-width="0" stroke-dasharray="none" data-z-index="1" class="highcharts-grid-line" d="M 37.5 10 L 37.5 306" opacity="1"></path>
                                    </g>
                                    <g class="highcharts-grid highcharts-yaxis-grid" data-z-index="1">
                                        <path fill="none" stroke="#e6e6e6" stroke-width="1" stroke-dasharray="none" data-z-index="1" class="highcharts-grid-line" d="M 38 306.5 L 805 306.5" opacity="1"></path>
                                        <path fill="none" stroke="#e6e6e6" stroke-width="1" stroke-dasharray="none" data-z-index="1" class="highcharts-grid-line" d="M 38 257.5 L 805 257.5" opacity="1"></path>
                                        <path fill="none" stroke="#e6e6e6" stroke-width="1" stroke-dasharray="none" data-z-index="1" class="highcharts-grid-line" d="M 38 207.5 L 805 207.5" opacity="1"></path>
                                        <path fill="none" stroke="#e6e6e6" stroke-width="1" stroke-dasharray="none" data-z-index="1" class="highcharts-grid-line" d="M 38 158.5 L 805 158.5" opacity="1"></path>
                                        <path fill="none" stroke="#e6e6e6" stroke-width="1" stroke-dasharray="none" data-z-index="1" class="highcharts-grid-line" d="M 38 109.5 L 805 109.5" opacity="1"></path>
                                        <path fill="none" stroke="#e6e6e6" stroke-width="1" stroke-dasharray="none" data-z-index="1" class="highcharts-grid-line" d="M 38 59.5 L 805 59.5" opacity="1"></path>
                                        <path fill="none" stroke="#e6e6e6" stroke-width="1" stroke-dasharray="none" data-z-index="1" class="highcharts-grid-line" d="M 38 9.5 L 805 9.5" opacity="1"></path>
                                    </g>
                                    <rect fill="none" class="highcharts-plot-border" data-z-index="1" stroke="#cccccc" stroke-width="0" x="38" y="10" width="767" height="296"></rect>
                                    <g class="highcharts-axis highcharts-xaxis" data-z-index="2">
                                        <path fill="none" class="highcharts-axis-line" stroke="#ccd6eb" stroke-width="1" data-z-index="7" d="M 38 306.5 L 805 306.5"></path>
                                    </g>
                                    <g class="highcharts-axis highcharts-yaxis" data-z-index="2">
                                        <path fill="none" class="highcharts-axis-line" stroke="#ccd6eb" stroke-width="0" data-z-index="7" d="M 38 10 L 38 306"></path>
                                    </g>
                                    <g class="highcharts-series-group" data-z-index="3">
                                        <g class="highcharts-series highcharts-series-0 highcharts-spline-series" data-z-index="0.1" opacity="1" transform="translate(38,10) scale(1 1)" clip-path="url(#highcharts-omfjoi1-4-)">
                                            <path fill="none" d="M 191.75 49.33333333332999 C 191.75 49.33333333332999 575.25 296 575.25 296" class="highcharts-graph" data-z-index="1" stroke="var(--extend-success-color-default, #0EC122)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                                            <path fill="none" d="M 191.75 49.33333333332999 C 191.75 49.33333333332999 575.25 296 575.25 296" data-z-index="2" class="highcharts-tracker-line" stroke-linecap="round" stroke-linejoin="round" stroke="rgba(192,192,192,0.0001)" stroke-width="22" style="cursor: pointer;"></path>
                                        </g>
                                        <g class="highcharts-markers highcharts-series-0 highcharts-spline-series highcharts-tracker" data-z-index="0.1" opacity="1" transform="translate(38,10) scale(1 1)" clip-path="none" style="cursor: pointer;">
                                            <path fill="var(--extend-success-color-default, #0EC122)" d="M 191 49.33333333332999 A 0 0 0 1 1 191 49.33333333332999 Z" class="highcharts-halo highcharts-color-undefined" data-z-index="-1" fill-opacity="0.25" visibility="hidden"></path>
                                            <path fill="var(--extend-success-color-default, #0EC122)" d="M 191 53.33333333332999 A 4 4 0 1 1 191.00399999933333 53.33333133333016 Z" stroke="#ffffff" stroke-width="0" opacity="1" class="highcharts-point"></path>
                                            <path fill="var(--extend-success-color-default, #0EC122)" d="M 575 300 A 4 4 0 1 1 575.0039999993334 299.9999980000002 Z" stroke="#ffffff" stroke-width="0" opacity="1" class="highcharts-point"></path>
                                        </g>
                                        <g class="highcharts-series highcharts-series-1 highcharts-spline-series" data-z-index="0.1" opacity="1" transform="translate(38,10) scale(1 1)" clip-path="url(#highcharts-omfjoi1-4-)">
                                            <path fill="none" d="M 191.75 148 C 191.75 148 575.25 296 575.25 296" class="highcharts-graph" data-z-index="1" stroke="var(--extend-error-color-default, #EF5350)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                                            <path fill="none" d="M 191.75 148 C 191.75 148 575.25 296 575.25 296" data-z-index="2" class="highcharts-tracker-line" stroke-linecap="round" stroke-linejoin="round" stroke="rgba(192,192,192,0.0001)" stroke-width="22" style="cursor: pointer;"></path>
                                        </g>
                                        <g class="highcharts-markers highcharts-series-1 highcharts-spline-series highcharts-tracker" data-z-index="0.1" opacity="1" transform="translate(38,10) scale(1 1)" clip-path="none" style="cursor: pointer;">
                                            <path fill="var(--extend-error-color-default, #EF5350)" d="M 191 148 A 0 0 0 1 1 191 148 Z" class="highcharts-halo highcharts-color-undefined" data-z-index="-1" fill-opacity="0.25" visibility="hidden"></path>
                                            <path fill="var(--extend-error-color-default, #EF5350)" d="M 191 152 A 4 4 0 1 1 191.00399999933333 151.99999800000018 Z" stroke="#ffffff" stroke-width="0" opacity="1" class="highcharts-point"></path>
                                            <path fill="var(--extend-error-color-default, #EF5350)" d="M 575 300 A 4 4 0 1 1 575.0039999993334 299.9999980000002 Z" stroke="#ffffff" stroke-width="0" opacity="1" class="highcharts-point"></path>
                                        </g>
                                    </g>
                                    <g class="highcharts-exporting-group" data-z-index="3">
                                        <g class="highcharts-no-tooltip highcharts-button highcharts-contextbutton" stroke-linecap="round" style="cursor: pointer;" transform="translate(781,10)">
                                            <title>Chart context menu</title>
                                            <rect fill="#ffffff" class="highcharts-button-box" x="0.5" y="0.5" width="24" height="22" rx="2" ry="2" stroke="none" stroke-width="1"></rect><text x="0" data-z-index="1" y="15.5" style="color: rgb(51, 51, 51); font-weight: normal; fill: rgb(51, 51, 51);"></text>
                                        </g>
                                    </g><text x="408" text-anchor="middle" class="highcharts-title" data-z-index="4" style="color: rgb(51, 51, 51); font-size: 18px; fill: rgb(51, 51, 51);" y="24"></text><text x="408" text-anchor="middle" class="highcharts-subtitle" data-z-index="4" style="color: rgb(102, 102, 102); fill: rgb(102, 102, 102);" y="24"></text><text x="10" text-anchor="start" class="highcharts-caption" data-z-index="4" style="color: rgb(102, 102, 102); fill: rgb(102, 102, 102);" y="397"></text>
                                    <g class="highcharts-legend highcharts-no-tooltip" data-z-index="7" transform="translate(251,357)">
                                        <rect fill="none" class="highcharts-legend-box" rx="0" ry="0" stroke="#999999" stroke-width="0" x="0" y="0" width="313" height="28"></rect>
                                        <g data-z-index="1">
                                            <g>
                                                <g class="highcharts-legend-item highcharts-spline-series highcharts-color-undefined highcharts-series-0" data-z-index="1" transform="translate(8,3)">
                                                    <path fill="none" class="highcharts-graph" stroke-width="2" stroke-linecap="round" d="M 1 13 L 1 13" stroke="var(--extend-success-color-default, #0EC122)"></path>
                                                    <path fill="var(--extend-success-color-default, #0EC122)" d="M 1.0000000000000002 17 A 4 4 0 1 1 1.003999999333336 16.99999800000017 Z" class="highcharts-point" stroke="#ffffff" stroke-width="0" opacity="1"></path>
                                                </g>
                                                <g class="highcharts-legend-item highcharts-spline-series highcharts-color-undefined highcharts-series-1" data-z-index="1" transform="translate(175,3)">
                                                    <path fill="none" class="highcharts-graph" stroke-width="2" stroke-linecap="round" d="M 1 13 L 1 13" stroke="var(--extend-error-color-default, #EF5350)"></path>
                                                    <path fill="var(--extend-error-color-default, #EF5350)" d="M 1.0000000000000002 17 A 4 4 0 1 1 1.003999999333336 16.99999800000017 Z" class="highcharts-point" stroke="#ffffff" stroke-width="0" opacity="1"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g class="highcharts-axis-labels highcharts-xaxis-labels" data-z-index="7"><text x="229.75" style="color: var(--extend-default-text, #000); cursor: default; font-size: 14px; font-weight: 400; fill: var(--extend-default-text, #000);" text-anchor="middle" transform="translate(0,0)" y="341" opacity="1">10:47:12 25/04</text><text x="613.25" text-anchor="middle" transform="translate(0,0)" style="color: var(--extend-default-text, #000); cursor: default; font-size: 14px; font-weight: 400; fill: var(--extend-default-text, #000);" y="341" opacity="1">11:18:37 09/05</text></g>
                                    <g class="highcharts-axis-labels highcharts-yaxis-labels" data-z-index="7"><text x="23" style="color: var(--extend-default-text, #000); cursor: default; font-size: 14px; font-weight: 400; fill: var(--extend-default-text, #000);" text-anchor="end" transform="translate(0,0)" y="311" opacity="1">0</text><text x="23" style="color: var(--extend-default-text, #000); cursor: default; font-size: 14px; font-weight: 400; fill: var(--extend-default-text, #000);" text-anchor="end" transform="translate(0,0)" y="262" opacity="1">5</text><text x="23" style="color: var(--extend-default-text, #000); cursor: default; font-size: 14px; font-weight: 400; fill: var(--extend-default-text, #000);" text-anchor="end" transform="translate(0,0)" y="212" opacity="1">10</text><text x="23" text-anchor="end" transform="translate(0,0)" style="color: var(--extend-default-text, #000); cursor: default; font-size: 14px; font-weight: 400; fill: var(--extend-default-text, #000);" y="163" opacity="1">15</text><text x="23" text-anchor="end" transform="translate(0,0)" style="color: var(--extend-default-text, #000); cursor: default; font-size: 14px; font-weight: 400; fill: var(--extend-default-text, #000);" y="114" opacity="1">20</text><text x="23" text-anchor="end" transform="translate(0,0)" style="color: var(--extend-default-text, #000); cursor: default; font-size: 14px; font-weight: 400; fill: var(--extend-default-text, #000);" y="64" opacity="1">25</text><text x="23" text-anchor="end" transform="translate(0,0)" style="color: var(--extend-default-text, #000); cursor: default; font-size: 14px; font-weight: 400; fill: var(--extend-default-text, #000);" y="15" opacity="1">30</text></g>
                                    <g class="highcharts-label highcharts-tooltip highcharts-color-undefined" data-z-index="8" style="cursor: default; white-space: nowrap; pointer-events: none;" transform="translate(158,98)" opacity="0" visibility="hidden">
                                        <path fill="none" class="highcharts-label-box highcharts-tooltip-box highcharts-shadow" d="M 3.5 0.5 L 140.5 0.5 C 143.5 0.5 143.5 0.5 143.5 3.5 L 143.5 41.5 C 143.5 44.5 143.5 44.5 140.5 44.5 L 77.5 44.5 L 71.5 50.5 L 65.5 44.5 L 3.5 44.5 C 0.5 44.5 0.5 44.5 0.5 41.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" stroke-width="5" stroke="#000000" stroke-opacity="0.049999999999999996" transform="translate(1, 1)"></path>
                                        <path fill="none" class="highcharts-label-box highcharts-tooltip-box highcharts-shadow" d="M 3.5 0.5 L 140.5 0.5 C 143.5 0.5 143.5 0.5 143.5 3.5 L 143.5 41.5 C 143.5 44.5 143.5 44.5 140.5 44.5 L 77.5 44.5 L 71.5 50.5 L 65.5 44.5 L 3.5 44.5 C 0.5 44.5 0.5 44.5 0.5 41.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" stroke-width="3" stroke="#000000" stroke-opacity="0.09999999999999999" transform="translate(1, 1)"></path>
                                        <path fill="none" class="highcharts-label-box highcharts-tooltip-box highcharts-shadow" d="M 3.5 0.5 L 140.5 0.5 C 143.5 0.5 143.5 0.5 143.5 3.5 L 143.5 41.5 C 143.5 44.5 143.5 44.5 140.5 44.5 L 77.5 44.5 L 71.5 50.5 L 65.5 44.5 L 3.5 44.5 C 0.5 44.5 0.5 44.5 0.5 41.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" stroke-width="1" stroke="#000000" stroke-opacity="0.15" transform="translate(1, 1)"></path>
                                        <path fill="rgba(247,247,247,0.85)" class="highcharts-label-box highcharts-tooltip-box" d="M 3.5 0.5 L 140.5 0.5 C 143.5 0.5 143.5 0.5 143.5 3.5 L 143.5 41.5 C 143.5 44.5 143.5 44.5 140.5 44.5 L 77.5 44.5 L 71.5 50.5 L 65.5 44.5 L 3.5 44.5 C 0.5 44.5 0.5 44.5 0.5 41.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" stroke-width="1" stroke="var(--extend-error-color-default, #EF5350)"></path><text x="8" data-z-index="1" y="18" style="color: rgb(51, 51, 51); font-size: 12px; fill: rgb(51, 51, 51);">
                                            <tspan style="font-size: 10px;">10:47:12 25/04</tspan>
                                            <tspan class="highcharts-br" dy="15" x="8">​</tspan>
                                            <tspan style="color: var(--extend-error-color-default, #EF5350); fill: var(--extend-error-color-default, #EF5350);">●</tspan> Số câu trả lời sai: <tspan style="font-weight: bold;">15</tspan>
                                            <tspan class="highcharts-br">​</tspan>
                                        </text>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div class="box document">
                            <div class="scenario-attach mobile">
                                <div class="heading d-flex align-items-center justify-content-between m-0 pb-1">
                                    <span>Tài liệu đi kèm bài thi</span>
                                    <span>Tải về</span>
                                </div>
                                <div class="content d-flex align-items-center justify-content-between m-0 pb-1">
                                    <a href="/" target="_blank" download>[ Cô Vũ Mai Phương ] Bộ đề VIP 2025 - PRO 3M_Đề số 08.pdf</a>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_8744_51494)">
                                            <path d="M20.6466 14.0838C20.4113 13.8483 20.125 13.7305 19.7886 13.7305H13.9326L12.2163 15.4467C11.7283 15.9178 11.1562 16.1535 10.5 16.1535C9.84389 16.1535 9.27164 15.9181 8.78368 15.4467L7.07995 13.7305H1.21152C0.875048 13.7305 0.589009 13.8484 0.353361 14.0838C0.117758 14.3193 0 14.6054 0 14.9421V18.9804C0 19.317 0.117758 19.6031 0.353361 19.8386C0.588964 20.0741 0.875004 20.1918 1.21152 20.1918H19.7887C20.125 20.1918 20.4113 20.0741 20.6466 19.8386C20.8823 19.6031 21 19.317 21 18.9804V14.9421C21 14.6054 20.8823 14.3193 20.6466 14.0838ZM15.9143 18.3368C15.7542 18.4967 15.5649 18.5766 15.3461 18.5766C15.1273 18.5766 14.9382 18.4967 14.7782 18.3368C14.6185 18.1769 14.5386 17.9877 14.5386 17.7691C14.5386 17.5503 14.6185 17.3608 14.7782 17.2012C14.9382 17.0412 15.1273 16.9611 15.3461 16.9611C15.5649 16.9611 15.7542 17.0412 15.9143 17.2012C16.074 17.3608 16.1539 17.5503 16.1539 17.7691C16.1539 17.9876 16.074 18.1769 15.9143 18.3368ZM19.1448 18.3368C18.9851 18.4967 18.7957 18.5766 18.5769 18.5766C18.3582 18.5766 18.169 18.4967 18.009 18.3368C17.8493 18.1769 17.7694 17.9877 17.7694 17.7691C17.7694 17.5503 17.8493 17.3608 18.009 17.2012C18.1689 17.0412 18.3581 16.9611 18.5769 16.9611C18.7957 16.9611 18.985 17.0412 19.1448 17.2012C19.3047 17.3608 19.3847 17.5503 19.3847 17.7691C19.3847 17.9876 19.3048 18.1769 19.1448 18.3368Z" fill="var(--extend-info-color, #81D4FA)"></path>
                                            <path d="M9.93205 14.2979C10.0836 14.4576 10.2729 14.5375 10.4999 14.5375C10.7272 14.5375 10.9162 14.4576 11.0678 14.2979L16.7217 8.64392C16.9825 8.39997 17.0415 8.10544 16.8984 7.76048C16.7556 7.43245 16.5073 7.26841 16.1538 7.26823H12.923V1.61437C12.923 1.39565 12.8429 1.20633 12.6834 1.04649C12.5233 0.886604 12.3341 0.806641 12.1155 0.806641H8.88439C8.66576 0.806641 8.47644 0.886604 8.31651 1.04649C8.15672 1.20633 8.07675 1.3956 8.07675 1.61437V7.26827H4.84598C4.49244 7.26827 4.24438 7.43249 4.10133 7.76052C3.95838 8.10535 4.01721 8.40001 4.2781 8.64397L9.93205 14.2979Z" fill="var(--extend-info-color, #81D4FA)"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_8744_51494">
                                                <rect width="21" height="21" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="box" id="comment-page-container">
                            <div class="comment-header">
                                <div class="title">Thảo luận</div>
                            </div>
                            <div class="comment-body">
                                <div class="new-comment-new comment-parent">
                                    <div class="image-avatar">
                                        <img src="{{asset('/public/images/default-avatar.webp')}}" alt="">
                                    </div>
                                    <div class="comment-input">
                                        <form class="form-comment">
                                            <textarea placeholder="Viết bình luận..."></textarea>
                                            <button class="btn-send" type="button">
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 3.15467C2.07423 3.46725 2.16894 3.88385 2.27235 4.29789C2.6901 5.97659 3.1104 7.65426 3.52968 9.33245C3.62388 9.70908 3.68941 9.76955 4.08667 9.81362C6.14878 10.0437 8.21139 10.2722 10.2735 10.5013C10.3687 10.512 10.4639 10.5238 10.5586 10.5356C10.8264 10.57 11.004 10.7585 10.9994 11.0035C10.9948 11.2407 10.8202 11.4231 10.5602 11.4529C9.76104 11.5436 8.96139 11.6322 8.16173 11.7209C6.75952 11.8761 5.3568 12.0304 3.95459 12.1867C3.7319 12.2112 3.61876 12.3189 3.55733 12.5638C3.0976 14.3972 2.6389 16.2297 2.18225 18.0631C2.12082 18.3106 2.05529 18.5586 2.01741 18.8102C1.95648 19.2145 2.08037 19.5604 2.41723 19.8049C2.75358 20.0488 3.1145 20.0549 3.48463 19.874C6.09912 18.5981 8.71412 17.3232 11.3286 16.0467C13.9605 14.7621 16.5924 13.478 19.2222 12.1892C20.1207 11.749 20.2707 10.6038 19.5151 9.98374C19.4127 9.8997 19.2929 9.83309 19.1736 9.77467C13.9682 7.23202 8.76173 4.69092 3.55579 2.15032C3.02286 1.89052 2.54215 1.97046 2.22423 2.36707C2.06399 2.56641 2.00205 2.79546 2 3.15467Z" fill="#0C93F4"></path>
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                    <div class="comment-input send-actions">
                                        <form class="form-comment">
                                            <button class="comment-action-item file-upload" tabindex="0" type="button">
                                                <label for="upload-comment-file-false" style="cursor: pointer;">
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.4662 5.94802C20.1841 4.51603 19.2014 3.66071 17.829 3.65783C16.757 3.65568 16.3606 3.65712 15.2886 3.65712C15.2108 3.65712 15.1323 3.65712 15.0566 3.65712C15.0268 3.45316 15.0167 3.27937 14.9747 3.11419C14.7198 2.11596 14.0048 1.51774 12.9855 1.50984C10.8705 1.49404 11.1305 1.5005 9.01553 1.50697C8.16601 1.50984 7.51399 1.89836 7.14199 2.72136C7.01483 3.00288 6.97358 3.32892 6.887 3.65712C6.82951 3.65712 6.74902 3.65712 6.66853 3.65712C5.61813 3.65712 5.24478 3.65352 4.19438 3.65999C3.96644 3.66142 3.73377 3.67579 3.51192 3.72749C2.34113 3.99967 1.50919 5.10635 1.50311 6.39902C1.49702 7.85975 1.50175 9.31975 1.50175 10.7805C1.50175 13.0893 1.50311 15.3975 1.5004 17.7063C1.49973 18.2198 1.59036 18.7082 1.85076 19.1441C2.39727 20.0605 3.18794 20.5007 4.21061 20.4992C8.39666 20.4949 10.7182 20.4978 14.9042 20.4978C16.5018 20.4978 16.2355 20.4921 17.8324 20.5C18.759 20.5043 19.5166 20.1395 20.0232 19.3164C20.243 18.9595 20.3444 18.52 20.5 18.1178C20.5 14.0804 20.5 10.0429 20.5 6.00548C20.4885 5.9868 20.4702 5.96885 20.4662 5.94802ZM19.3414 17.8572C19.2365 18.8123 18.6988 19.2856 17.7844 19.2856C15.2034 19.2863 14.4862 19.2856 11.9052 19.2856C11.6022 19.2856 11.2985 19.2856 10.9955 19.2856C8.11143 19.2856 7.09059 19.2841 4.20655 19.287C3.58835 19.2877 3.08243 19.0637 2.80579 18.4525C2.70434 18.2284 2.65699 17.9555 2.65632 17.7049C2.64752 13.9511 2.6482 10.1981 2.65158 6.44427C2.65226 5.50349 3.24205 4.88229 4.12945 4.87869C5.44566 4.87367 6.08618 4.87798 7.40239 4.87726C7.90832 4.87726 8.1234 4.64529 8.12814 4.10309C8.13017 3.89123 8.12475 3.67794 8.14437 3.46824C8.1836 3.04022 8.48526 2.73501 8.89176 2.70987C9.12037 2.69623 9.35033 2.70269 9.57962 2.70269C11.4579 2.70197 10.9619 2.72064 12.8401 2.69407C13.6457 2.68258 13.948 3.15369 13.8993 3.81511C13.8899 3.94007 13.8966 4.06646 13.898 4.19214C13.9034 4.62303 14.1401 4.87654 14.5486 4.87726C15.85 4.87941 16.4756 4.88085 17.7769 4.87654C18.1476 4.8751 18.4986 4.92968 18.8043 5.17314C19.2311 5.51354 19.382 5.98321 19.382 6.53188C19.3799 9.81456 19.382 13.0965 19.3793 16.3792C19.3786 16.8711 19.3948 17.3688 19.3414 17.8572Z" fill="#EAEAEA"></path>
                                                        <path d="M10.9988 6.25C8.38754 6.25121 6.26458 8.37065 6.25008 10.9912C6.23497 13.5991 8.38633 15.7542 11 15.75C13.6155 15.7458 15.7342 13.6318 15.7499 11.0112C15.765 8.40692 13.6119 6.24879 10.9988 6.25ZM10.9994 14.7296C8.95077 14.729 7.29252 13.0665 7.29796 11.019C7.3034 8.96005 8.95137 7.31214 11.0018 7.31516C13.0662 7.31818 14.7075 8.97214 14.7014 11.0426C14.6954 13.0841 13.0426 14.7302 10.9994 14.7296Z" fill="#EAEAEA"></path>
                                                        <path d="M17.543 5.45713C16.8973 5.46477 16.3726 5.99566 16.3711 6.64267C16.3696 7.2996 16.9065 7.83432 17.5643 7.83202C18.2251 7.82973 18.7506 7.29655 18.7461 6.6335C18.7407 5.97351 18.2046 5.44873 17.543 5.45713Z" fill="#EAEAEA"></path>
                                                    </svg>
                                                </label>
                                                <input type="file" accept="image/*" id="upload-comment-file-false" style="display: none;">
                                            </button>
                                            <button class="comment-action-item emoji" tabindex="0" type="button">
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.0151 2C15.9849 2.00503 20.015 6.05187 20 11.0226C19.9899 15.9932 15.9397 20.02 10.9698 19.9999C6.01507 19.9849 2 15.9531 2 10.9975C2 6.02677 6.04522 1.99498 11.0151 2ZM10.9899 3.12469C6.64823 3.12971 3.12563 6.6594 3.12563 11.0025C3.12563 15.3456 6.65325 18.8702 10.995 18.8752C15.3517 18.8803 18.8844 15.3405 18.8743 10.9824C18.8643 6.63932 15.3316 3.11967 10.9899 3.12469Z" fill="#EAEAEA"></path>
                                                    <path d="M5.96022 11.0137C6.33208 11.0137 6.67882 11.0137 7.05067 11.0137C7.10595 12.2538 7.57329 13.2881 8.54313 14.0714C9.28182 14.6639 10.1361 14.9501 11.0808 14.935C13.1713 14.8998 14.5883 13.4739 14.9652 11.0187C15.317 11.0187 15.6738 11.0187 16.0306 11.0187C16.1361 13.3333 14.1914 15.9994 11.0909 16.0597C8.04565 16.1149 5.89992 13.5693 5.96022 11.0137Z" fill="#EAEAEA"></path>
                                                    <path d="M9.31068 8.17519C9.3157 8.78774 8.81822 9.29987 8.21018 9.30991C7.58204 9.31995 7.06445 8.80782 7.06445 8.18021C7.06948 7.56766 7.57199 7.06557 8.18505 7.06055C8.79812 7.06055 9.30565 7.56264 9.31068 8.17519Z" fill="#EAEAEA"></path>
                                                    <path d="M12.6928 8.1368C12.7229 7.52425 13.2455 7.04224 13.8586 7.06734C14.4867 7.09245 14.9742 7.63471 14.934 8.2573C14.8938 8.86985 14.3611 9.34181 13.7531 9.30666C13.14 9.27654 12.6626 8.74935 12.6928 8.1368Z" fill="#EAEAEA"></path>
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                        <div class="lecture-page-block-right-stickyy">
                            <div class="lecture-page-block-right box">
                                <div class="scenario-attach mobile">
                                    <h4 class="scenario-attach-title">Danh sách bài học </h4>
                                    <div id="tree-container">
                                        <div class="tree-list">
                                            <div class="tree-item-panel">
                                                <div class="tree-item-panel-icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM9.87005 7.21132L5.7517 9.89292C5.47448 10.1219 5 9.95897 5 9.63753V4.3646C5 4.04096 5.47448 3.87803 5.7517 4.10701L9.87005 6.69614C10.0433 6.83924 10.0433 7.06821 9.87005 7.21132Z" fill="#62646a"></path>
                                                    </svg>
                                                    <svg class="d-none" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM7.19018 6.34293C7.19134 6.22234 7.1925 6.10176 7.1925 5.9813C7.1925 5.85011 7.1927 5.71893 7.19289 5.58776C7.19336 5.28179 7.19382 4.97593 7.19177 4.67042C7.18884 4.25735 6.96 4 6.60174 4C6.24202 4 6.00732 4.25077 6.00513 4.66823C5.99928 5.66034 5.99562 6.65319 6.01025 7.6453C6.01317 7.81565 6.05704 8.03352 6.16671 8.14757C6.90516 8.91523 7.6597 9.66681 8.42228 10.4111C8.66209 10.645 9.00792 10.6151 9.23238 10.384C9.46781 10.1413 9.45319 9.78379 9.1812 9.50816C8.95913 9.28367 8.73547 9.06068 8.5118 8.83767C8.12939 8.45641 7.74695 8.07511 7.37236 7.68624C7.27366 7.58315 7.20785 7.40915 7.20054 7.26439C7.18426 6.95821 7.18722 6.65051 7.19018 6.34293Z" fill="#62646a"></path>
                                                    </svg>
                                                </div>
                                                <div class="tree-item-panel-label">
                                                    <div class="tree-box-item-content">
                                                        <a href="/">Phát triển đề thi minh họa THPT 2025: Đề số 05</a>
                                                    </div>
                                                    <div class="tree-box-item-new">
                                                        <img src="{{ asset('/public/images/new-topic.svg') }}" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="user-block box">
                                <div class="scenario-attach">
                                    <div class="item">
                                        <div class="item-avatar">
                                            <img src="{{ asset('/public/images/default-avatar.webp') }}" alt="">
                                        </div>
                                        <div class="item-details">
                                            <div class="item-name">Nguyễn Linh</div>
                                            <a href="mailto: nguyenhphp187@gmail.com" class="item-email">nguyenhphp187@gmail.com</a>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <p>Điểm kinh nghiệm: <span>875</span></p>
                                    </div>
                                    <div class="item">
                                        <p>Bài học gần đây: <a href="/">Thi online: Phát triển đề thi minh họa THPT 2025: Đề số 08</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="utils-block box">
                                <div class="scenario-attach add-margin">
                                    <div class="title-box">Tiện ích</div>
                                    <div class="item">
                                        <div class="icon">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.81251 20.775H4.8118C3.86154 20.7705 2.95067 20.3948 2.27352 19.7281L2.27255 19.7272C1.93962 19.3934 1.67574 18.9973 1.49599 18.5615C1.31627 18.1257 1.22418 17.6588 1.22501 17.1874M4.81251 20.775L1.22501 17.1872C1.22501 17.1873 1.22501 17.1873 1.22501 17.1874M4.81251 20.775H11C11.2221 20.775 11.4351 20.6868 11.5922 20.5297C11.7493 20.3726 11.8375 20.1596 11.8375 19.9375C11.8375 19.7154 11.7493 19.5024 11.5922 19.3453C11.4351 19.1882 11.2221 19.1 11 19.1H4.81316C4.30651 19.096 3.82139 18.8946 3.46082 18.5387C3.10217 18.1804 2.90045 17.6943 2.90001 17.1874M4.81251 20.775L2.90001 17.1874M1.22501 17.1874V4.8125C1.22501 3.86104 1.60297 2.94854 2.27576 2.27575C2.94855 1.60297 3.86104 1.225 4.81251 1.225H17.1875C18.139 1.225 19.0515 1.60297 19.7243 2.27575C20.397 2.94854 20.775 3.86104 20.775 4.8125V10.9037C20.775 11.1259 20.6868 11.3389 20.5297 11.496C20.3726 11.653 20.1596 11.7413 19.9375 11.7413C19.7154 11.7413 19.5024 11.653 19.3453 11.496C19.1882 11.3389 19.1 11.1259 19.1 10.9037V4.8125C19.1 4.30527 18.8985 3.81882 18.5398 3.46016C18.1812 3.10149 17.6947 2.9 17.1875 2.9H4.81251C4.30528 2.9 3.81883 3.1015 3.46016 3.46016C3.1015 3.81882 2.90001 4.30527 2.90001 4.8125V17.1874M1.22501 17.1874L2.90001 17.1874M17.1863 19.4412H17.1875C18.139 19.4412 19.0515 19.0633 19.7243 18.3905C20.397 17.7177 20.775 16.8052 20.775 15.8537C20.775 14.9023 20.397 13.9898 19.7243 13.317C19.0515 12.6442 18.139 12.2662 17.1875 12.2662C16.236 12.2662 15.3235 12.6442 14.6508 13.317C13.978 13.9898 13.6 14.9023 13.6 15.8537L13.6 15.8568C13.6165 16.6685 13.9108 17.4485 14.4315 18.0676L13.1562 19.3429C13.1562 19.3429 13.1562 19.343 13.1561 19.343C13.0777 19.4208 13.0154 19.5134 12.9729 19.6154C12.9304 19.7175 12.9085 19.8269 12.9085 19.9375C12.9085 20.0481 12.9304 20.1575 12.9729 20.2596C13.0154 20.3615 13.0775 20.4539 13.1558 20.5317C13.2336 20.61 13.3261 20.6721 13.4279 20.7146C13.53 20.7571 13.6394 20.779 13.75 20.779C13.8606 20.779 13.97 20.7571 14.0721 20.7146C14.1741 20.6721 14.2667 20.6098 14.3445 20.5314C14.3446 20.5313 14.3446 20.5313 14.3446 20.5313L15.7481 19.1278C16.2003 19.3304 16.69 19.4373 17.1863 19.4412ZM18.7777 14.7912C18.9878 15.1057 19.1 15.4755 19.1 15.8537C19.1 16.361 18.8985 16.8474 18.5398 17.2061C18.1812 17.5648 17.6947 17.7663 17.1875 17.7663C16.8092 17.7663 16.4395 17.6541 16.125 17.4439C15.8105 17.2338 15.5653 16.9351 15.4206 16.5856C15.2758 16.2362 15.238 15.8516 15.3118 15.4806C15.3855 15.1097 15.5677 14.7689 15.8352 14.5014C16.1026 14.2339 16.4434 14.0518 16.8144 13.978C17.1854 13.9042 17.5699 13.9421 17.9194 14.0868C18.2689 14.2316 18.5675 14.4767 18.7777 14.7912ZM6.87501 9.0875H15.125C15.3471 9.0875 15.5601 8.99926 15.7172 8.8422C15.8743 8.68514 15.9625 8.47212 15.9625 8.25C15.9625 8.02788 15.8743 7.81486 15.7172 7.6578C15.5601 7.50074 15.3471 7.4125 15.125 7.4125H6.87501C6.65289 7.4125 6.43987 7.50074 6.2828 7.6578C6.12574 7.81486 6.03751 8.02788 6.03751 8.25C6.03751 8.47212 6.12574 8.68514 6.2828 8.8422C6.43987 8.99926 6.65289 9.0875 6.87501 9.0875ZM11.6875 12.9125H6.87501C6.65289 12.9125 6.43987 13.0007 6.2828 13.1578C6.12574 13.3149 6.03751 13.5279 6.03751 13.75C6.03751 13.9721 6.12574 14.1851 6.2828 14.3422C6.43987 14.4993 6.65289 14.5875 6.87501 14.5875H11.6875C11.9096 14.5875 12.1226 14.4993 12.2797 14.3422C12.4368 14.1851 12.525 13.9721 12.525 13.75C12.525 13.5279 12.4368 13.3149 12.2797 13.1578C12.1226 13.0007 11.9096 12.9125 11.6875 12.9125Z" fill="var(--extend-body-color, #BEBEC9)" stroke="var(--extend-body-color, #BEBEC9)" stroke-width="0.3"></path>
                                            </svg>
                                        </div>
                                        Tài liệu:
                                        <span class="number">35</span>
                                    </div>
                                    <div class="item">
                                        <div class="icon">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.66847 19.8473C6.95767 19.8437 7.25826 19.8413 7.55545 19.8568C8.12136 19.8879 8.57032 20.3463 8.57756 20.9006C8.58591 21.4054 8.19805 21.9532 7.60939 21.9627C7.36915 21.9662 7.12777 21.972 6.88639 21.9789C6.50269 21.9893 6.11443 21.9997 5.72388 22C5.19557 22.0004 4.66383 21.9828 4.14002 21.9213C2.28051 21.7034 1.02467 20.2393 1.01411 18.2784C1.00577 16.749 1.00578 15.1967 1.00578 13.6844L1.00577 13.1997C1.0055 12.8336 1.00552 12.4678 1.00553 12.1021C1.00554 11.7367 1.00555 11.3714 1.00528 11.0061L1.00377 8.97668C1.00138 7.28566 1.00012 5.59352 1 3.9025C0.999354 1.50201 2.50804 0.00890679 4.93669 0.0071539C8.24093 0.0036447 11.544 0.00126067 14.8483 1.63697e-07C17.1984 -0.000571674 18.7207 1.49709 18.7258 3.81437C18.727 4.33015 18.7271 4.84593 18.7272 5.36171L18.7279 6.77399C18.7281 7.4132 18.7284 8.05225 18.7306 8.69067C18.7321 9.22811 18.4933 9.60044 18.0755 9.71206C17.7419 9.80112 17.2694 9.77897 17.0119 9.56666C16.7294 9.333 16.5935 8.87998 16.5865 8.55842C16.5641 7.50155 16.5644 6.42779 16.5659 5.39002C16.5667 4.87507 16.5674 4.36011 16.5648 3.84629C16.5635 3.63941 16.5576 3.40217 16.5028 3.19758C16.3304 2.55683 15.7915 2.14233 15.1323 2.14056C11.5285 2.12967 7.9943 2.13222 4.62858 2.14701C3.86458 2.14981 3.29793 2.66068 3.18579 3.4478C3.16994 3.56025 3.16206 3.68618 3.16217 3.8346L3.16293 4.85888C3.16395 9.29556 3.16611 13.7322 3.17283 18.1689C3.17478 19.2663 3.76046 19.8472 4.86605 19.8509L6.31095 19.8498C6.42951 19.8497 6.54696 19.8485 6.66551 19.8473L6.66847 19.8473Z" fill="var(--extend-body-color, #BEBEC9)"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3075 11.6643C20.3416 12.0997 20.9263 12.947 20.9988 14.115L21 14.1252L21 14.1364C20.9699 14.9526 20.7028 15.6004 20.1817 16.1168C18.4911 17.7932 17.0804 19.1894 15.6071 20.6273C15.4251 20.8039 15.1667 20.9514 14.897 21.0292C13.7974 21.3481 12.6864 21.6469 11.7451 21.896C11.5994 21.9343 11.4582 21.9535 11.325 21.9536C11.0142 21.9539 10.7443 21.8529 10.5506 21.6574C10.2737 21.3777 10.196 20.946 10.3357 20.4737C10.673 19.3346 10.9808 18.3371 11.2772 17.4207C11.3567 17.1744 11.5 16.9348 11.6707 16.7649L11.7651 16.6716C13.2338 15.2056 14.7538 13.689 16.2737 12.2218C17.1407 11.387 18.1891 11.194 19.3075 11.6643ZM17.0156 16.2293C17.0395 16.2045 17.0634 16.1787 17.0861 16.1528L16.2122 15.272C16.0302 15.4565 15.8482 15.6433 15.6719 15.8267L15.6514 15.8478C15.1231 16.3936 14.5777 16.957 13.9858 17.4558C13.3998 17.9487 13.1521 18.5649 12.9363 19.3532C13.1435 19.2901 13.3416 19.2326 13.5453 19.1998C13.9699 19.131 14.3159 18.9295 14.7027 18.5278C15.2181 17.9912 15.7573 17.4635 16.2795 16.9527C16.525 16.7122 16.7712 16.471 17.0156 16.2293ZM17.8278 13.7328L18.6618 14.5586C18.7699 14.4292 18.8301 14.2931 18.8357 14.1638C18.8413 14.0154 18.7763 13.8749 18.643 13.7457C18.5131 13.6199 18.3639 13.5582 18.2136 13.5662C18.0838 13.573 17.9507 13.6304 17.8278 13.7328Z" fill="var(--extend-body-color, #BEBEC9)"></path>
                                                <path d="M6.34203 5.05412L5.80123 5.05451C5.35379 5.05484 5.01013 5.28889 4.83625 5.71165C4.69419 6.05458 4.72634 6.41875 4.92352 6.71086C5.12412 7.00746 5.46011 7.17919 5.84721 7.18116C6.41191 7.18525 6.98231 7.18596 7.54815 7.18555C7.75125 7.1854 7.95377 7.18497 8.15527 7.18454C8.35479 7.18412 8.55331 7.18369 8.75043 7.18355C9.14181 7.18215 9.53207 7.18186 9.92345 7.18158H9.92501C10.3152 7.18129 10.7067 7.18101 11.098 7.18185C12.0362 7.1823 13.0062 7.18272 13.9614 7.1764C14.599 7.17257 15.0438 6.73387 15.0411 6.10891C15.0395 5.49744 14.5985 5.05264 13.994 5.05083C11.4426 5.04593 8.84904 5.05006 6.34203 5.05412Z" fill="var(--extend-body-color, #BEBEC9)"></path>
                                                <path d="M11.4949 8.81428C11.7033 9.00971 11.8174 9.28165 11.8165 9.58177C11.8147 10.1921 11.3368 10.6387 10.6833 10.6437C10.1209 10.6486 9.55846 10.6479 8.99717 10.6472L8.28446 10.6465C8.16434 10.6466 8.04394 10.647 7.92355 10.6474C7.80315 10.6477 7.68275 10.6481 7.56264 10.6482C7.33038 10.6495 7.09471 10.6497 6.8579 10.6498C6.53342 10.6501 6.2078 10.6492 5.88446 10.6472C5.2264 10.6431 4.75016 10.1939 4.75199 9.58014C4.75381 8.96754 5.23166 8.52095 5.88858 8.51823C7.51893 8.51255 9.13221 8.51138 10.684 8.51475C11.0005 8.51565 11.2886 8.6211 11.4949 8.81428Z" fill="var(--extend-body-color, #BEBEC9)"></path>
                                            </svg>
                                        </div>
                                        Ghi chú:
                                        <span class="number">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<div class="modal cs_modal fade admin-query" id="myModal" role="dialog">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ __('frontend.Review') }}</h5>
                <button type="button" class="close" data-dismiss="modal"><i
                        class="ti-close "></i></button>
            </div>

            <form action="{{route('submitReview')}}" method="Post">
                <div class="modal-body">
                    @csrf
                    <input type="hidden" name="course_id" id="rating_course_id"
                        value="">
                    <input type="hidden" name="rating" id="rating_value" value="">

                    <div class="text-center">
                        <textarea class="lms_summernote" name="review" id=""
                            placeholder="{{__('frontend.Write your review') }}"
                            cols="30"
                            rows="10">{{old('review')}}</textarea>
                        <span class="text-danger" role="alert">{{$errors->first('review')}}</span>
                    </div>
                </div>
                <div class="modal-footer justify-content-center">
                    <div class="mt-40 d-flex justify-content-between">
                        <button type="button" class="theme_line_btn mr-2"
                            data-dismiss="modal">{{ __('common.Cancel') }}
                        </button>
                        <button class="theme_btn "
                            type="submit">{{ __('common.Submit') }}</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
</div>

@include(theme('partials._delete_model'))
</div>