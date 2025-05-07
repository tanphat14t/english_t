<div>
    <div class="main_content_iner main_content_padding">
        <div class="dashboard_lg_card">
            <div class="container-fluid no-gutters">
                <div class="my_courses_wrapper">
                    <div class="row">
                        <div class="col-12">
                        </div>
                        @php
                            if (routeIs('myClasses')) {
                                $search_text = trans('frontend.Search My Classes');
                                $search_route = '';
                            } elseif (routeIs('myQuizzes')) {
                                $search_text = trans('frontend.Search My Quizzes');
                                $search_route = '';
                            } else {
                                $search_text = trans('frontend.Search My Courses');
                                $search_route = '';
                            }
                        @endphp
                    </div>
                    <div class="row d-flex align-items-center mb-2 ">
                        <div class="col-xl-6 col-md-6 col-sm-12 mt-3">
                            <div class="section__title3">
                                <h3>
                                    @if (routeIs('myClasses'))
                                        {{ __('courses.Live Class') }}
                                    @elseif(routeIs('myQuizzes'))
                                        Bài tập trắc nghiệm
                                    @else
                                        Khóa học của tôi
                                    @endif
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        @if (count($onlineQuizs) > 0)
                            @foreach ($onlineQuizs as $quiz)
                                <div class="col-md-6">
                                    <a target="_blank" href="{{ route('quizDetailsView', ['slug' => $quiz['slug'], 'id' => $quiz['id'] . rand(10000000, 99999999)]) }}"
                                        class=" m-auto mt-4">
                                        <div class="quiz_wizged">
                                            <div class="course_content">
                                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M5.88533 18.4476V1.6979C5.88533 1.31246 5.57287 1 5.18743 1H1.6979C1.31246 1 1 1.31246 1 1.6979V18.4476C1 18.8331 1.31246 19.1455 1.6979 19.1455H5.18743C5.57287 19.1455 5.88533 18.8331 5.88533 18.4476ZM5.88533 18.4476C5.88533 18.8331 6.19779 19.1455 6.58324 19.1455H10.0728C10.4582 19.1455 10.7707 18.8331 10.7707 18.4476V4.48952C10.7707 4.10408 10.4582 3.79162 10.0728 3.79162H6.58324C6.19779 3.79162 5.88533 4.10408 5.88533 4.48952L5.88533 18.4476ZM1 14.2602H5.88533M5.88533 12.8644H10.7707M14.2602 15.656L18.2801 14.651M12.0358 4.08721L14.7439 3.4095C15.1178 3.31592 15.4968 3.54318 15.5904 3.91709L18.979 17.4576C19.0725 17.8315 18.8453 18.2105 18.4714 18.3041L15.7633 18.9818C15.3893 19.0754 15.0104 18.8481 14.9168 18.4742L11.5282 4.93367C11.4346 4.55976 11.6619 4.18079 12.0358 4.08721Z"
                                                        stroke="currentColor" stroke-width="1.71429" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </svg>
                                                <span>{{ $quiz['title']}}</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            @endforeach
                        @endif
                        @if (count($courses) == 0)
                            <div class="col-12">
                                <div class="section__title3 margin_50">
                                    @if (routeIs('myClasses'))
                                        <p class="text-center">{{ __('student.No Class Purchased Yet') }}!</p>
                                    @elseif(routeIs('myQuizzes'))
                                        <p class="text-center">{{ __('student.No Quiz Purchased Yet') }}!</p>
                                    @else
                                        <p class="text-center">{{ __('student.No Course Purchased Yet') }}!</p>
                                    @endif
                                </div>
                            </div>
                        @else

                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@if (isModuleActive('CPD'))
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ __('cpd.CPD') }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="ti-close"></i></span>
                    </button>
                </div>

                {!! Form::open(['route' => 'cpd.course_to_cpd', 'method' => 'POST']) !!}
                <input type="hidden" name="course_id" id="cpd_course_id" value="">

                <div class="modal-body">
                    <div class="input-control">
                        <label for="#">{{ __('cpd.CPD') }}</label>
                        <select name="" id="" class="theme_select">
                            <option value="">{{ __('cpd.Select CPD') }}</option>
                            @foreach ($cpds as $cpd)
                                <option value="{{ $cpd->id }}">{{ $cpd->title }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="modal-footer mntop">
                    <button type="button" class="theme_btn small_btn bg-transparent"
                        data-dismiss="modal">{{ __('common.Cancel') }}</button>
                    <button type="button" class="theme_btn small_btn ">{{ __('common.Submit') }}</button>
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@endif