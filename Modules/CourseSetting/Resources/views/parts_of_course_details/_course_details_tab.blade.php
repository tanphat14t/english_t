<div role="tabpanel" class="tab-pane fade @if ($type == 'courseDetails') show active @endif " id="indivitual_email_sms">
    <div class="white_box_30px pl-0 pr-0 pt-0">
        <form action="{{ route('AdminUpdateCourse') }}" method="POST"
              enctype="multipart/form-data">
            @csrf
            <input type="hidden" class="type2" id="type{{ @$course->id }}2" name="type" value="2">
            <input type="hidden" name="id" class="course_id" value="{{ @$course->id }}">
            <div class="col-xl-12 p-0">
                <div class="row pt-0">
                    @if (isModuleActive('FrontendMultiLang'))
                        <ul class="nav nav-tabs no-bottom-border  mt-sm-md-20 mb-10 ml-3"
                            role="tablist">
                            @foreach ($LanguageList as $key => $language)
                                <li class="nav-item">
                                    <a class="nav-link  @if (auth()->user()->language_code == $language->code) active @endif"
                                       href="#element_course{{ $language->code }}"
                                       role="tab"
                                       data-toggle="tab">{{ $language->native }} </a>
                                </li>
                            @endforeach
                        </ul>
                    @endif
                </div>
                <div class="tab-content">
                    @foreach ($LanguageList as $key => $language)
                        <div role="tabpanel"
                             class="tab-pane fade @if (auth()->user()->language_code == $language->code) show active @endif  "
                             id="element_course{{ $language->code }}">
                            <div class="row">

                                <div class="col-xl-12">
                                    <div class="primary_input mb-25">
                                        <label class="primary_input_label mt-1"
                                               for="">{{ __('courses.Course Title') }}
                                        </label>
                                        <input class="primary_input_field"
                                               name="title[{{ $language->code }}]"
                                               value="{{ $course->getTranslation('title', $language->code) }}"
                                               placeholder="-" type="text">
                                    </div>
                                </div>

                                <div class="col-xl-12">
                                    <div class="primary_input mb-35">
                                        <label class="primary_input_label"
                                               for="about">{{__('courses.Course')}} {{__('courses.Requirements')}}  </label>
                                        <textarea
                                            class="lms_summernote"
                                            name="requirements[{{$language->code}}]"

                                            id="about" cols="30"
                                            rows="10">{!!@$course->getTranslation('requirements',$language->code)!!}</textarea>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="primary_input mb-35">
                                        <label class="primary_input_label mt-1"
                                               for="">{{__('courses.Course')}} {{__('courses.Description')}}  </label>
                                        <textarea
                                            class="lms_summernote"
                                            name="about[{{$language->code}}]"
                                            name="" id=""
                                            cols="30"
                                            rows="10">{!!@$course->getTranslation('about',$language->code)!!}</textarea>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="primary_input mb-35">
                                        <label class="primary_input_label"
                                               for="about">{{__('courses.Course')}} {{__('courses.Outcomes')}}  </label>
                                        <textarea
                                            class="lms_summernote"
                                            name="outcomes[{{$language->code}}]"

                                            id="about" cols="30"
                                            rows="10">{!!@$course->getTranslation('outcomes',$language->code)!!}</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>

                <div class="row">

                    @php
                        if (courseSetting()->show_mode_of_delivery == 1 || isModuleActive('Org')) {
                            $col_size = 4;
                        } elseif (currentTheme()=='tvt'){
                            $col_size = 3;
                        }else {
                            $col_size = 6;
                        }
                    @endphp

                    <div class="col-xl-4  quizBox mb-25" style=" display: none">
                        <select class="multypol_check_select active mb-15 e1" name="quiz[]" id="quiz_id" multiple>
                            @foreach ($quizzes as $quiz)
                                <option value="{{ $quiz->id }}"
                                        @if (in_array($quiz->id, json_decode($course->quiz_id))) selected @endif>
                                    {{ @$quiz->title }} </option>
                            @endforeach
                        </select>
                    </div>

                    <div class="col-xl-4  responsiveResize2  makeResize ">
                        <select class="primary_select" name="level">
                            <option
                                data-display="{{ __('common.Select') }} {{ __('courses.Level') }}"
                                value="">{{ __('common.Select') }}
                                {{ __('courses.Level') }}</option>
                            @foreach ($levels as $level)
                                <option value="{{ $level->id }}"
                                        @if (@$course->level == $level->id) selected @endif>
                                    {{ $level->title }}
                                </option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="row mt-20">
                    <div class="col-xl-6">
                        <div class=" mb-35">
                            <x-upload-file
                                name="image"
                                type="image"
                                media_id="{{isset($course)?$course->image_media?->media_id:''}}"
                                label="{{ __('courses.Course Thumbnail') }}"
                                note="{{__('student.Recommended size')}} (1170x600)"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 text-center pt_15">
                    <div class="d-flex justify-content-center">
                        <button class="primary-btn semi_large2  fix-gr-bg"
                                id="save_button_parent" type="submit"><i
                                class="ti-check"></i> {{__('common.Update')}} {{__('courses.Course')}}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>


</div>
