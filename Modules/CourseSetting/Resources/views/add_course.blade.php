@extends('backend.master')
@push('styles')
    <style>
        .select2-container--default .select2-selection--single {
            background-color: #fff;
            width: 100%;
            height: 46px;
            line-height: 46px;
            font-size: 13px;
            padding: 3px 20px;
            padding-left: 20px;
            font-weight: 300;
            border-radius: 30px;
            color: var(--base_color);
            border: 1px solid #ECEEF4
        }

        .select2-container--default .select2-selection--single .select2-selection__arrow {
            height: 46px;
            position: absolute;
            top: 1px;
            right: 20px;
            width: 20px;
            color: var(--text-color);
        }

        .select2-dropdown {
            background-color: white;
            border: 1px solid #ECEEF4;
            border-radius: 4px;
            box-sizing: border-box;
            display: block;
            position: absolute;
            left: -100000px;
            width: 100%;
            width: 100%;
            background: var(--bg_white);
            overflow: auto !important;
            border-radius: 0px 0px 10px 10px;
            margin-top: 1px;
            z-index: 9999 !important;
            border: 0;
            box-shadow: 0px 10px 20px rgb(108 39 255 / 30%);
            z-index: 1051;
            min-width: 200px;
        }

        .select2-search--dropdown .select2-search__field {
            padding: 4px;
            width: 100%;
            box-sizing: border-box;
            box-sizing: border-box;
            background-color: #fff;
            border: 1px solid rgba(130, 139, 178, 0.3) !important;
            border-radius: 3px;
            box-shadow: none;
            color: #333;
            display: inline-block;
            vertical-align: middle;
            padding: 0px 8px;
            width: 100% !important;
            height: 46px;
            line-height: 46px;
            outline: 0 !important;
        }

        .select2-container {
            width: 100% !important;
            min-width: 90px;
        }

        .select2-container--default .select2-selection--single .select2-selection__rendered {
            color: #444;
            line-height: 40px;
        }


        .makeResize.responsiveResize.col-xl-6 {
            /*margin-top: 30px;*/
        }

        #durationBox {
            /*margin-top: 30px;*/
        }

        @media (max-width: 1199px) {
            .responsiveResize2 {
                margin-top: 30px;
            }
        }
    </style>
@endpush
@php
    $table_name='courses';
@endphp
@section('table')
    {{$table_name}}
@stop
@section('mainContent')
    @php
        $required_type =false;
        if(isModuleActive('Org')){
            $required_type =true;
        }
    @endphp
    {!! generateBreadcrumb() !!}
    <section class="admin-visitor-area up_st_admin_visitor">


        <div class="white_box mb_30  student-details header-menu">
            <div class="white_box_tittle list_header">
                <h4>{{__('common.Add New')}} {{__('quiz.Topic')}}</h4>
            </div>
            <div class="col-lg-12">


                <input type="hidden" id="url" value="{{url('/')}}">

                <form action="{{route('AdminSaveCourse')}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="row">
                        <div class="{{$required_type?'col-xl-4':'col-xl-6'}}  ">
                            <div class="primary_input ">
                                <div class="row">
                                    <input type="hidden" id="type2" name="type" checked value="2">
                                    {{-- <div class="col-md-12 ">
                                        <label class="primary_input_label"
                                               for=""> {{__('courses.Type')}} <strong class="text-danger">*</strong>
                                        </label>
                                    </div>
                                    <div class="col-md-4 col-sm-6 mb-25">
                                        <label class="primary_checkbox d-flex mr-12">
                                            <input type="radio" id="type2"
                                                   name="type"
                                                   checked
                                                   value="2" {{old('type')==2?"checked":""}}>
                                            <span class="checkmark mr-2"></span> {{__('quiz.Quiz')}}</label>
                                    </div> --}}
                                </div>
                            </div>
                        </div>
                        @if($required_type)
                            <div class="{{$required_type?'col-xl-4':'col-xl-6'}} ">
                                <div class="primary_input ">
                                    <div class="row">
                                        <div class="col-md-12 ">
                                            <label class="primary_input_label"
                                                   for=""> {{__('courses.Required Type')}} <strong
                                                    class="text-danger">*</strong> </label>
                                        </div>
                                        <div class="col-md-4  col-sm-6 mb-25">
                                            <label class="primary_checkbox d-flex mr-12">
                                                <input type="radio" id=""
                                                       name="required_type"
                                                       value="1"
                                                       checked>
                                                <span class="checkmark mr-2"></span>{{__('courses.Compulsory')}}
                                            </label>
                                        </div>
                                        <div class="col-md-4 col-sm-6 mb-25">
                                            <label class="primary_checkbox d-flex mr-12">
                                                <input type="radio"
                                                       name="required_type"
                                                       value="0">
                                                <span class="checkmark mr-2"></span> {{__('courses.Open')}}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endif
                    </div>
                    @php
                        $LanguageList = getLanguageList();
                    @endphp
                    <div class="row pt-0">
                        @if(isModuleActive('FrontendMultiLang'))
                            <ul class="nav nav-tabs no-bottom-border  mt-sm-md-20 mb-10 ml-3"
                                role="tablist">
                                @foreach ($LanguageList as $key => $language)
                                    <li class="nav-item">
                                        <a class="nav-link  @if (auth()->user()->language_code == $language->code) active @endif"
                                           href="#element{{$language->code}}"
                                           role="tab"
                                           data-toggle="tab">{{ $language->native }}  </a>
                                    </li>
                                @endforeach
                            </ul>
                        @endif
                    </div>
                    <div class="tab-content">
                        @foreach ($LanguageList as $key => $language)
                            <div role="tabpanel"
                                 class="tab-pane fade @if (auth()->user()->language_code == $language->code) show active @endif  "
                                 id="element{{$language->code}}">
                                <div class="row">

                                    <div
                                        class="col-xl-12">
                                        <div class="primary_input mb-25">
                                            <label class="primary_input_label d-flex"
                                                   for="">{{__('quiz.Topic')}} {{__('common.Title')}} <span
                                                    class="required_mark">*</span>
                                                @includeIf('aicontent::inc.button' , ['selected_template' => 1,'slug'=>'course-title'])
                                            </label>

                                            <input class="primary_input_field" name="title[{{$language->code}}]"
                                                   placeholder="-"
                                                   id="addTitle"
                                                   type="text" {{$errors->has('title') ? 'autofocus' : ''}}
                                                   value="{{old('title.'.$language->code)}}">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="primary_input mb-35">
                                            <label class="primary_input_label d-flex"
                                                   for="">{{__('courses.Course')}} {{__('courses.Requirements')}}
                                                @includeIf('aicontent::inc.button' , ['selected_template' => 4,'slug'=>'course-requirements'])
                                            </label>
                                            <textarea class="lms_summernote"
                                                      name="requirements[{{$language->code}}]"
                                                      id="addRequirements" cols="30"
                                                      rows="10">{!! old('requirements.'.$language->code) !!}</textarea>
                                        </div>

                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="primary_input mb-35">
                                            <label class="primary_input_label d-flex"
                                                   for="">{{__('courses.Course')}} {{__('courses.Description')}}
                                                @includeIf('aicontent::inc.button' , ['selected_template' => 3,'slug'=>'course-long-description'])
                                            </label>
                                            <textarea class="lms_summernote"
                                                      name="about[{{$language->code}}]" id="addAbout"
                                                      cols="30"
                                                      rows="10">{!! old('about.'.$language->code) !!}</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="primary_input mb-35">
                                            <label class="primary_input_label d-flex"
                                                   for="">{{__('courses.Course')}} {{__('courses.Outcomes')}}
                                                @includeIf('aicontent::inc.button' , ['selected_template' => 5,'slug'=>'course-outlines'])
                                            </label>
                                            <textarea class="lms_summernote"
                                                      name="outcomes[{{$language->code}}]"
                                                      id="addOutcomes"
                                                      cols="30"
                                                      rows="10">{!! old('outcomes.'.$language->code) !!}</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>

                    @php
                        if (courseSetting()->show_mode_of_delivery == 1 || isModuleActive('Org')) {
                            $col_size = 4;
                        } elseif (currentTheme()=='tvt'){
                            $col_size = 3;
                        }else {
                            $col_size = 6;
                        }
                    @endphp
                    <div class="row">

                        @if(currentTheme()=='tvt')
                            <div class="col-xl-{{$col_size}}  mb_30">
                                <label class="primary_input_label d-flex"
                                       for="">{{__('courses.School Subject')}}
                                </label>
                                <select class="primary_select school_subject_id" name="school_subject_id"
                                        id="school_subject_id" {{$errors->has('category') ? 'autofocus' : ''}}>
                                    <option data-display="{{__('common.Select')}} {{__('courses.School Subject')}} *"
                                            value="">{{__('common.Select')}} {{__('courses.School Subject')}} </option>
                                    @foreach($subjects as $subject)
                                        <option value="{{$subject->id}}">{{$subject->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                        @endif
                        <div class="col-xl-4   quizBox">
                            <label class="primary_input_label d-flex"
                                   for="">Bộ đề<span class="required_mark">*</span>
                            </label>
                            <select class="multypol_check_select active mb-15 e1" name="quiz[]" multiple
                                    id="quiz_id" {{$errors->has('quiz') ? 'autofocus' : ''}}>
                                @foreach($quizzes as $quiz)
                                    <option value="{{$quiz->id}}">{{@$quiz->title}} </option>
                                @endforeach
                            </select>
                        </div>


                        <div class="col-xl-4 makeResize ">
                            <label class="primary_input_label d-flex"
                                   for="">{{ __('courses.Level') }}<span class="required_mark">*</span>
                            </label>
                            <select class="primary_select" name="level">
                                <option
                                    data-display="{{ __('common.Select') }}"
                                    value="">{{ __('common.Select') }} {{ __('courses.Level') }}
                                </option>
                                @foreach($levels as $level)
                                    <option
                                        value="{{$level->id}}" {{old('level')==$level->id?"selected":""}} >{{$level->title}}</option>
                                @endforeach

                            </select>
                        </div>
                    </div>
                    <div class="row d-none">
                        <div class="col-lg-6 ">
                            <div class="checkbox_wrap d-flex align-items-center ">
                                <label for="course_1" class="switch_toggle mr-2">
                                    <input type="checkbox" id="course_1">
                                    <i class="slider round"></i>
                                </label>
                                <label
                                    class="mb-0">{{ __('courses.This course is a top course') }}</label>
                            </div>
                        </div>
                    </div>

                    @if(isModuleActive("SupportTicket"))
                        <div class="row mt-20 mb-10">
                            <div class="col-lg-6">
                                <div class="checkbox_wrap d-flex align-items-center mt-40">
                                    <label for="support" class="switch_toggle mr-1">
                                        <input type="checkbox" name="support"
                                               class="support" id="support" value="1">
                                        <i class="slider round"></i>
                                    </label>
                                    <label class="mb-0">{{ __('common.Support') }}</label>
                                </div>
                            </div>
                        </div>
                    @endif

                    @if(isModuleActive('UpcomingCourse'))
                        <div class="row mt-20">
                            <div class="col-lg-3 mb-25">
                                <div class="checkbox_wrap d-flex align-items-center mt-40">
                                    <label for="is_upcoming_course" class="switch_toggle mr-2">
                                        <input {{ old('is_upcoming_course') == 1?'checked':'' }} type="checkbox"
                                               id="is_upcoming_course" value="1" name="is_upcoming_course">
                                        <i class="slider round"></i>
                                    </label>
                                    <label
                                        class="mb-0">{{ __('courses.Is upcoming course?') }}</label>
                                </div>
                            </div>

                            <div class="col-xl-3 upcoming_course_div publish_date_div">
                                <div class="primary_input mb-15">
                                    <label class="primary_input_label"
                                           for="">{{__('courses.Publish Date')}}
                                    </label>
                                    <div class="primary_datepicker_input">
                                        <div class="no-gutters input-right-icon">
                                            <div class="col">
                                                <div class="">
                                                    <input placeholder="{{__('courses.Publish Date')}}"
                                                           class="primary_input_field primary-input date form-control"
                                                           id="publish_date" type="text" name="publish_date"
                                                           value="{{ old('publish_date') }}"
                                                           autocomplete="off">
                                                </div>
                                            </div>
                                            <button class="" type="button">
                                                <i class="ti-calendar" id="start-date-icon"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 mb-25 upcoming_course_div">
                                <div class="checkbox_wrap d-flex align-items-center mt-40">
                                    <label for="is_allow_prebooking" class="switch_toggle mr-2">
                                        <input {{ old('is_allow_prebooking') == 1?'checked':'' }} type="checkbox"
                                               id="is_allow_prebooking" value="1" name="is_allow_prebooking">
                                        <i class="slider round"></i>
                                    </label>
                                    <label
                                        class="mb-0">{{ __('courses.Is Allow Prebooking?') }}</label>
                                </div>
                            </div>

                            <div class="col-lg-3 mb-25 upcoming_course_div booking_amount_div">
                                <div class="primary_input mb-25">
                                    <label class="primary_input_label"
                                           for="booking_amount">{{ __('courses.Booking Amount') }} <span
                                            class="required_mark">*</span></label>
                                    <input class="primary_input_field booking_amount_field" name="booking_amount"
                                           placeholder="{{ __('courses.Booking Amount') }}"
                                           id="booking_amount"
                                           type="number"
                                           value="{{old('booking_amount')}}">
                                </div>
                            </div>

                        </div>
                    @endif

                    <div class="row mt-20">
                        <div class="col-xl-6">
                            <div class=" mb-35">
                                <x-upload-file
                                    name="image"
                                    type="image"
                                    {{--                                    media_id="{{isset($edit)?$edit->image_media?->media_id:''}}"--}}
                                    label="{{ __('courses.Course Thumbnail') }}"
                                    note="{{__('student.Recommended size')}} (1170x600)"
                                />

                            </div>
                        </div>
                        @if(\Illuminate\Support\Facades\Auth::user()->subscription_api_status==1)
                            <div class="col-xl-6">
                                <label class="primary_input_label"
                                       for="">{{__('newsletter.Subscription List')}}
                                </label>
                                <select class="primary_select"
                                        name="subscription_list" {{$errors->has('subscription_list') ? 'autofocus' : ''}}>
                                    <option
                                        data-display="{{__('common.Select')}} {{__('newsletter.Subscription List')}}"
                                        value="">{{__('common.Select')}} {{__('newsletter.Subscription List')}}

                                    </option>
                                    @foreach($sub_lists as $list)
                                        <option value="{{$list['id']}}">
                                            {{$list['name']}}
                                        </option>
                                    @endforeach

                                </select>
                            </div>
                        @endif
                    </div>

                    @if(Settings('frontend_active_theme')=="edume")
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="primary_input mb-25">
                                    <label class="primary_input_label"
                                           for="">{{__('courses.Key Point') }} (1)</label>
                                    <input class="primary_input_field" name="what_learn1" placeholder="-"
                                           type="text" value="{{old('what_learn1')}}">
                                </div>
                            </div>

                            <div class="col-xl-6">
                                <div class="primary_input mb-25">
                                    <label class="primary_input_label"
                                           for="">{{__('courses.Key Point') }} (2) </label>
                                    <input class="primary_input_field" name="what_learn2" placeholder="-"
                                           type="text" value="{{old('what_learn2')}}">
                                </div>
                            </div>
                        </div>
                    @endif
                    <div class="col-lg-12 text-center pt_15">
                        <div class="d-flex justify-content-center">
                            <button class="primary-btn semi_large2  fix-gr-bg" id="save_button_parent"
                                    type="submit"><i
                                    class="ti-check"></i> {{__('common.Add') }} {{__('courses.Course') }}
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>

    </section>
    @include('backend.partials.delete_modal')
@endsection
@push('js')
    <script>
        let show_overview_media = $('#show_overview_media');
        let overview_host_section = $('#overview_host_section');
        show_overview_media.change(function () {
            if (show_overview_media.is(':checked')) {
                overview_host_section.show();
            } else {
                overview_host_section.hide();
            }
        });
    </script>
    <script>
        let show_mode_of_delivery = $('#show_mode_of_delivery');
        let mode_of_delivery_options = $('#mode_of_delivery_options');
        show_mode_of_delivery.change(function () {
            if (show_mode_of_delivery.is(':checked')) {
                mode_of_delivery_options.show();
            } else {
                mode_of_delivery_options.hide();
            }
        });


        $('.mode_of_delivery').change(function () {
            let option = $(".mode_of_delivery option:selected").val();
            if (option == 3) {
                $('.quizBox').hide();
            } else {
                if ($('#type2').is(':checked')) {
                    $('.quizBox').show();
                }
            }
        });

        $('#iap').change(function () {
            if ($('#iap').is(':checked')) {
                $('#iap_div').removeClass('d-none');
            } else {
                $('#iap_div').addClass('d-none');
            }
        });
    </script>
@endpush
@push('scripts')

    <script src="{{asset('/')}}/Modules/CourseSetting/Resources/assets/js/course.js"></script>



    <script>
        let vdocipherList = $('.vdocipherList');

        vdocipherList.select2({
            ajax: {
                url: '{{route('getAllVdocipherData')}}',
                type: "GET",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    var query = {
                        search: params.term,
                        page: params.page || 1,
                        // id: $('#country').find(':selected').val(),
                    }
                    return query;
                },
                cache: false
            }
        });

        $('.vimeoList').select2({
            ajax: {
                url: '{{route('getAllVimeoData')}}',
                type: "GET",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        search: params.term,
                        page: params.page || 1,
                    }
                },
                cache: false
            }
        });
    </script>
    @if(isModuleActive('UpcomingCourse'))
        <script>
            upcomingCourseDivToggle();

            $(document).on('change', '#is_upcoming_course', function (event) {
                upcomingCourseDivToggle();
            });

            $(document).on('change', '#is_allow_prebooking', function (event) {
                upcomingCourseDivToggle();
            });

            function upcomingCourseDivToggle() {
                if ($('#is_upcoming_course').is(':checked')) {
                    $('.upcoming_course_div').removeClass('d-none');
                } else {
                    $('.upcoming_course_div').addClass('d-none');
                }
                allowPreBooking();
            }

            function allowPreBooking() {
                if ($('#is_allow_prebooking').is(':checked')) {
                    $('.booking_amount_div').removeClass('d-none');
                } else {
                    $('.booking_amount_div').addClass('d-none');
                }
            }


        </script>
    @endif
@endpush
