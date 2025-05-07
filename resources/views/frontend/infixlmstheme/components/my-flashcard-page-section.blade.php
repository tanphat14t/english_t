<div>
    <div class="main_content_iner main_content_padding">
        <div class="dashboard_lg_card">
            <div class="container-fluid no-gutters">
                <div class="my_courses_wrapper">
                    <div class="row">
                        <div class="col-12">
                        </div>
                    </div>
                    <div class="row d-flex align-items-center mb-2 ">
                        <div class="col-xl-6 col-md-6 col-sm-12 mt-3">
                            <div class="section__title3">
                                <h3>
                                    {{__('Flashcard')}}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        @if ($flashcard->count() > 0)
                            @foreach ($flashcard as $card)
                                <div class="col-md-6">
                                    <a target="_blank" href="{{route('flashcard_detail', ['id' => $card->id . rand(10000000, 99999999)])}}" class=" m-auto mt-4">
                                        <div class="quiz_wizged">
                                            <div class="course_content">
                                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M5.88533 18.4476V1.6979C5.88533 1.31246 5.57287 1 5.18743 1H1.6979C1.31246 1 1 1.31246 1 1.6979V18.4476C1 18.8331 1.31246 19.1455 1.6979 19.1455H5.18743C5.57287 19.1455 5.88533 18.8331 5.88533 18.4476ZM5.88533 18.4476C5.88533 18.8331 6.19779 19.1455 6.58324 19.1455H10.0728C10.4582 19.1455 10.7707 18.8331 10.7707 18.4476V4.48952C10.7707 4.10408 10.4582 3.79162 10.0728 3.79162H6.58324C6.19779 3.79162 5.88533 4.10408 5.88533 4.48952L5.88533 18.4476ZM1 14.2602H5.88533M5.88533 12.8644H10.7707M14.2602 15.656L18.2801 14.651M12.0358 4.08721L14.7439 3.4095C15.1178 3.31592 15.4968 3.54318 15.5904 3.91709L18.979 17.4576C19.0725 17.8315 18.8453 18.2105 18.4714 18.3041L15.7633 18.9818C15.3893 19.0754 15.0104 18.8481 14.9168 18.4742L11.5282 4.93367C11.4346 4.55976 11.6619 4.18079 12.0358 4.08721Z"
                                                        stroke="currentColor" stroke-width="1.71429" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </svg>
                                                <span>{{ $card->title}}</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            @endforeach
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>