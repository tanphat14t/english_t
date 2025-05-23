@extends('backend.master')
@push('styles')
    <link rel="stylesheet" href="{{asset('public/backend/css/class.css')}}"/>
@endpush
@php
    $table_name='courses';
@endphp
@section('table')
    {{$table_name}}
@stop
@section('mainContent')
    {!! generateBreadcrumb() !!}
    <section class="admin-visitor-area up_st_admin_visitor">
        <div class="container-fluid p-0">
            @if(isset($bank))
                @if (permissionCheck('virtual-class.store'))
                    <div class="row">
                        <div class="offset-lg-10 col-lg-2 text-right col-md-12 mb-20">
                            <a href="{{route('virtual-class')}}" class="primary-btn small fix-gr-bg">
                                <span class="ti-plus pr-2"></span>
                                {{__('common.Add')}}
                            </a>
                        </div>
                    </div>
                @endif
            @endif
            <div class="row">
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="main-title">
                                <h3 class="mb-20">
                                    @if(isset($class))
                                        {{__('common.Edit')}}
                                    @else
                                        {{__('common.Add')}}
                                    @endif
                                    {{__('virtual-class.Class')}}
                                </h3>
                            </div>

                            @if (isset($class))

                                {{ Form::open(['class' => 'form-horizontal', 'files' => true, 'route' => ['virtual-class.update', $class->id], 'method' => 'PUT', 'enctype' => 'multipart/form-data', 'id' => 'question_bank']) }}
                            @else
                                @if (permissionCheck('virtual-class.create'))

                                    {{ Form::open([
                                        'class' => 'form-horizontal',
                                        'files' => true,
                                        'route' => 'virtual-class.store',
                                        'method' => 'POST',
                                        'enctype' => 'multipart/form-data',
                                        'id' => 'question_bank',
                                    ]) }}

                                @endif
                            @endif
                            <input type="hidden" name="url" id="url" value="{{ URL::to('/') }}">
                            <div class="white-box  student-details header-menu">
                                <div class="add-visitor">
                                    @php
                                        $LanguageList = getLanguageList();
                                    @endphp
                                    <div class="row pt-0">
                                        @if (isModuleActive('FrontendMultiLang'))
                                            <ul class="nav nav-tabs no-bottom-border  mt-sm-md-20 mb-10 ml-3"
                                                role="tablist">
                                                @foreach ($LanguageList as $key => $language)
                                                    <li class="nav-item">
                                                        <a class="nav-link  @if (auth()->user()->language_code == $language->code) active @endif"
                                                           href="#element{{ $language->code }}" role="tab"
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
                                                 id="element{{ $language->code }}">
                                                <div class="row mt-25">
                                                    <div class="col-lg-12">
                                                        <div class="input-effect">
                                                            <label> {{ __('virtual-class.Title') }} <span
                                                                    class="required_mark">*</span></label>
                                                            <input type="text"
                                                                   placeholder="{{ __('virtual-class.Title') }}"
                                                                   class="primary_input_field name{{ $errors->has('title') ? ' is-invalid' : '' }}"
                                                                   name="title[{{ $language->code }}]"
                                                                   {{ $errors->has('title') ? ' autofocus' : '' }}
                                                                   value="{{ isset($class) ? $class->getTranslation('title', $language->code) : old('title.'.$language->code) }}">
                                                            <span class="focus-border textarea"></span>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mt-25 ">
                                                    <div class="col-lg-12">
                                                        <div class="primary_input">
                                                            <label class="primary_input_label"
                                                                   for="">{{ __('jitsi.Description') }}
                                                            </label>
                                                            <textarea class="primary_input_field form-control" cols="0"
                                                                      rows="4"
                                                                      placeholder="{{ __('jitsi.Description') }}"
                                                                      name="description[{{ $language->code }}]"
                                                                      id="address">{{ isset($class) ? $class->course->getTranslation('about', $language->code) : '' }}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>

                                    @if (\Illuminate\Support\Facades\Auth::user()->role_id == 1)
                                        <div class="row mt-25">
                                            <div class="col-xl-12">
                                                <div class="primary_input mb-25">
                                                    <label class="primary_input_label"
                                                           for="assign_instructor">{{ __('courses.Assign Instructor') }}
                                                    </label>
                                                    <select class="primary_select category_id" name="assign_instructor"
                                                            id="assign_instructor"
                                                        {{ $errors->has('assign_instructor') ? 'autofocus' : '' }}>
                                                        <option
                                                            data-display="{{ __('common.Select') }} {{ __('courses.Instructor') }}"
                                                            value="">{{ __('common.Select') }}
                                                            {{ __('courses.Instructor') }} </option>
                                                        @foreach ($instructors as $instructor)
                                                            <option value="{{ $instructor->id }}"
                                                                {{ isset($class) ? ($instructor->id == $class->course->user_id ? 'selected' : '') : '' }}>
                                                                {{ @$instructor->name }} </option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    @endif

                                    @if (isModuleActive('Membership'))
                                        <div class="row">
                                            <div class="col-12 mt-35">
                                                <div class="primary_input">
                                                    <div class="row">
                                                        <div class="col-md-12 col-sm-12">
                                                            <label class="primary_checkbox d-flex mr-12 mt-10 w-100">
                                                                <input type="checkbox" id="all_level_member"
                                                                       name="all_level_member" value="1">
                                                                <span
                                                                    class="checkmark mr-2 "></span>{{ __('membership.All Level Members') }}
                                                            </label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 mt-25" id="membership_level_div">
                                                <div class="primary_input">
                                                    <label class="primary_input_label"
                                                           for="membership_level">{{ __('membership.Membership Level') }}
                                                    </label>
                                                    <select name="membership_level" id="membership_level"
                                                            class="primary_select">
                                                        <option data-display="{{ __('membership.Select Level') }}"
                                                                value="">{{ __('membership.Select Level') }}
                                                        </option>
                                                        @foreach ($membershipLevels as $membershipLevel)
                                                            <option value="{{ $membershipLevel->id }}">
                                                                {{ @$membershipLevel->title }}
                                                            </option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12 mt-25" id="membership_level_member_div">
                                                <div class="primary_input">
                                                    <label class="primary_input_label"
                                                           for="membership_level_members">{{ __('membership.Members') }}
                                                    </label>
                                                    <select name="membership_level_members[]"
                                                            id="membership_level_members"
                                                            class="multypol_check_select active mb-15 e1" multiple>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    @endif

                                    <div class="row mt-25">
                                        <div class="col-xl-12">
                                            <x-upload-file
                                                name="image"
                                                type="image"
                                                media_id="{{isset($class)?$class->course->image_media?->media_id:''}}"
                                                label="{{ __('common.Image') }}"
                                                note="{{__('student.Recommended size')}} (330x400)"
                                            />


                                        </div>
                                    </div>

                                    @if(isModuleActive('Org'))

                                        <div class="row">
                                            <div class="col-xl-12 mt-25">
                                                <label>{{__('courses.Required Type')}} </label>
                                                <select class="primary_select " name="required_type"
                                                        id="">
                                                    <option
                                                        value="1" {{@$class->course->required_type=="1"?'selected':''}} {{!isset($class)?'selected':''}} >{{__('courses.Compulsory')}}
                                                    </option>

                                                    <option
                                                        {{@$class->course->required_type=="0"?'selected':''}} value="0">
                                                        {{__('courses.Open')}}
                                                    </option>

                                                </select>
                                            </div>
                                        </div>
                                    @endif

                                    <div class="row mt-25">
                                        <div class="col-lg-12">
                                            <label class="primary_input_label"
                                                   for="">{{ __('virtual-class.Language') }} <span
                                                    class="required_mark">*</span></label>
                                            <select class="primary_select" name="lang_id" id="">
                                                <option
                                                    data-display="{{ __('common.Select') }} {{ __('common.Language') }}"
                                                    value="">{{ __('common.Select') }}
                                                    {{ __('common.Language') }}</option>
                                                @foreach ($languages as $language)
                                                    <option value="{{ $language->id }}"
                                                            @if (!isset($class)) @if ($language->id == 111) selected @endif
                                                        @endif
                                                        {{ isset($class) && $class->lang_id == $language->id ? 'selected' : '' }}
                                                    >{{ $language->native }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>

                                    <div @if (!isset($class) || $class->type == 0) style="display: none" @endif
                                    class="row mt-25 continuous_class ">
                                        <div class="col-xl-12">
                                            <div class="primary_input">
                                                <label class="primary_input_label"
                                                       for="">{{ __('coupons.Start Date') }}</label>
                                                <div class="primary_datepicker_input">
                                                    <div class="no-gutters input-right-icon">
                                                        <div class="col">
                                                            <div class="">
                                                                <input placeholder="Start Date"
                                                                       class="primary_input_field primary-input date form-control  {{ @$errors->has('start_date') ? ' is-invalid' : '' }}"
                                                                       id="start_date" type="text"
                                                                       name="start_date"
                                                                       value="{{isset($class)?getJsDateFormat(\Carbon\Carbon::createFromFormat('Y-m-d',$class->start_date)->format('m/d/Y')): getJsDateFormat(date('m/d/Y'))}}"
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
                                        <div class="col-xl-12 mt-25">
                                            <div class="primary_input">
                                                <label class="primary_input_label"
                                                       for="">{{ __('virtual-class.End Date') }}</label>
                                                <div class="primary_datepicker_input">
                                                    <div class="no-gutters input-right-icon">
                                                        <div class="col">
                                                            <div class="">
                                                                <input placeholder="End Date"
                                                                       class="primary_input_field primary-input date form-control  {{ @$errors->has('end_date') ? ' is-invalid' : '' }}"
                                                                       id="end_date" type="text"
                                                                       name="end_date"
                                                                       value="{{isset($class)?  getJsDateFormat(\Carbon\Carbon::createFromFormat('Y-m-d',$class->end_date)->format('m/d/Y')) : getJsDateFormat(date('m/d/Y'))}}"
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
                                    </div>

                                    <div @if (isset($class) && $class->type == 1) style="display: none" @endif
                                    class="row mt-25 single_class  ">
                                        <div class="col-xl-12">
                                            <div class="primary_input">
                                                <label class="primary_input_label"
                                                       for="">{{ __('virtual-class.Date') }}</label>
                                                <div class="primary_datepicker_input">
                                                    <div class="no-gutters input-right-icon">
                                                        <div class="col">
                                                            <div class="">
                                                                <input placeholder="Date" readonly
                                                                       class="primary_input_field primary-input date form-control  {{ @$errors->has('date') ? ' is-invalid' : '' }}"
                                                                       id="start_date" type="text"
                                                                       name="date"
                                                                       value="{{isset($class) && $class->type == 0 ? getJsDateFormat(\Carbon\Carbon::createFromFormat('Y-m-d',$class->start_date)->format('m/d/Y')) : getJsDateFormat(date('m/d/Y'))}}"
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
                                    </div>
                                    {{-- <div class="row mt-25">
                                        <div class="col-lg-12">
                                            <label>{{__('virtual-class.Time')}} <span
                                                    class="required_mark">*</span></label>
                                            <div class="primary_input">
                                                <input required
                                                       class="primary-input primary_input_field  time form-control{{ @$errors->has('time') ? ' is-invalid' : '' }}"
                                                       type="text" name="time"
                                                       value="{{ isset($class) ? old('time',$class->time): old('time')}}">
                                            </div>
                                        </div>
                                    </div> --}}
                                    <div class="row @if(isset($class)) d-none @endif">
                                        <div class="col-md-12 mt-25 ">
                                            <label class="primary_input_label"
                                                   for=""> {{__('virtual-class.Host')}} </label>
                                        </div>

                                        {{-- <div class="col-md-4 mb-25">
                                            <label for="type1" class="primary_checkbox d-flex mr-12 ">
                                                <input type="radio" class="common-checkbox" id="type1" name="host"
                                                       value="Zoom"
                                                       @if(isset($class)) @if($class->host=="Zoom") checked @endif @else
                                                    checked @endif>
                                                <span class="checkmark mr-2"></span>{{__('virtual-class.Zoom')}}</label>
                                        </div> --}}

                                        @if(isModuleActive("BBB"))
                                            <div class="col-md-4 mb-25">
                                                <label for="type2" class="primary_checkbox d-flex mr-12 ">
                                                    <input type="radio" class="common-checkbox" id="type2" name="host"
                                                           value="BBB"
                                                           @if(isset($class)) @if($class->host=="BBB") checked @endif @endif
                                                    >
                                                    <span class="checkmark mr-2"></span> {{__('virtual-class.BBB')}}
                                                </label>
                                            </div>
                                        @endif

                                        @if(isModuleActive("Jitsi"))
                                            <div class="col-md-4 mb-25">
                                                <label for="type3" class="primary_checkbox d-flex mr-12 ">
                                                    <input type="radio" class="common-checkbox" id="type3" name="host"
                                                           value="Jitsi"
                                                           @if(isset($class)) @if($class->host=="Jitsi") checked @endif @endif
                                                    >
                                                    <span class="checkmark mr-2"></span> {{__('jitsi.Jitsi')}}</label>
                                            </div>
                                        @endif
                                        @if(isModuleActive("InAppLiveClass"))
                                            <div class="col-md-4 mb-25">
                                                <label for="type4" class="primary_checkbox d-flex mr-12 text-nowrap">
                                                    <input type="radio" class="common-checkbox" id="type4" name="host"
                                                           value="InAppLiveClass"
                                                           @if(isset($class)) @if($class->host=="InAppLiveClass") checked @endif @endif
                                                    >
                                                    <span
                                                        class="checkmark mr-2"></span> {{__('common.In-App Live Class')}}
                                                </label>
                                            </div>
                                        @endif


                                        @if(isModuleActive("GoogleMeet") && saasEnv('ALLOW_GOOGLE_MEET_CALENDAR')=='true' && \Modules\GoogleMeet\Entities\GoogleAccount::where('is_active',1)->get()->count() > 0)
                                            <div class="col-md-4 mb-25">
                                                <label for="GoogleMeet"
                                                       class="primary_checkbox d-flex mr-12 text-nowrap">
                                                    <input type="radio" class="common-checkbox" id="GoogleMeet"
                                                           name="host"
                                                           value="GoogleMeet"
                                                           @if(isset($class)) @if($class->host=="GoogleMeet") checked @endif @endif
                                                    >
                                                    <span
                                                        class="checkmark mr-2"></span> {{__('virtual-class.Google Meet')}}
                                                </label>
                                            </div>
                                        @endif
                                        <div class="col-md-12 mb-25">
                                            <label for="Custom" class="primary_checkbox d-flex mr-12 " style="width: 100%">
                                                <input type="radio" class="common-checkbox" id="Custom" name="host"
                                                       value="Custom" checked>
                                                <span class="checkmark mr-2"></span>{{__('virtual-class.Custom')}}
                                            </label>
                                        </div>
                                    </div>


                                    {{-- <div class=" mt-25 single_class zoomSetting @if(isset($class)) d-none @endif"
                                         style="display: {{ isset($class) ? $class->host=="Zoom"? "block":"none": 'block'}}">

                                        <div class="row">
                                            <div class="col-xl-12">
                                                <div class="primary_input">
                                                    <label class="primary_input_label"
                                                           for="password">{{ __('zoom.Password') }} <span
                                                            class="required_mark">*</span></label>
                                                    <div class="primary_datepicker_input">
                                                        <div class="no-gutters input-right-icon">
                                                            <div class="col">
                                                                <div class="">
                                                                    <input placeholder="Password"
                                                                           class="primary_input_field primary-input   form-control"
                                                                           id="password" type="text"
                                                                           name="password"
                                                                           value="123456"
                                                                           autocomplete="off">
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!--                                        <div class="row mt-25">
                                            <div class="col-xl-12">
                                                <div class="primary_input">
                                                    <label class="primary_input_label"
                                                           for="">{{ __('zoom.Attached File') }}
                                        </label>
                                        <div class="primary_file_uploader">
                                            <input class="primary-input filePlaceholder" type="text"
                                                   placeholder="{{ isset($editdata->attached_file) && @$editdata->attached_file != '' ? getFilePath3(@$editdata->attached_file) : trans('zoom.Attached File') }}"
                                                               readonly=""
                                                            {{ $errors->has('attached_file') ? ' autofocus' : '' }}>
                                                        <button class="" type="button">
                                                            <label class="primary-btn small fix-gr-bg"
                                                                   for="attached_file">{{ __('common.Browse') }}</label>
                                                            <input type="file" class="d-none fileUpload"
                                                                   name="attached_file" id="attached_file">
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>-->

                                    </div>

                                    <div class=" mt-25 single_class bbbSetting @if (isset($class)) d-none @endif"
                                         style="display: {{ isset($class) ? ($class->host == 'BBB' ? 'block' : 'none') : 'none' }}">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="primary_input">
                                                    <label class="primary_input_label"
                                                           for="">{{ __('bbb.Attendee Password') }}
                                                    </label>
                                                    <input
                                                        class="primary_input_field form-control{{ $errors->has('attendee_password') ? ' is-invalid' : '' }}"
                                                        type="text" name="attendee_password" autocomplete="off"
                                                        placeholder="{{ __('bbb.Attendee Password') }}"
                                                        value="{{ isset($editdata) ? old('topic', $editdata->attendee_password) : old('attendee_password', '12345678') }}">

                                                    <span class="focus-border"></span>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-25">
                                            <div class="col-lg-12">
                                                <div class="primary_input">
                                                    <label class="primary_input_label"
                                                           for="">{{ __('bbb.Moderator Password') }}
                                                    </label>
                                                    <input
                                                        class="primary_input_field form-control{{ $errors->has('moderator_password') ? ' is-invalid' : '' }}"
                                                        type="text" name="moderator_password"
                                                        placeholder="{{ __('bbb.Moderator Password') }}"
                                                        autocomplete="off"
                                                        value="{{ isset($editdata) ? old('topic', $editdata->moderator_password) : old('moderator_password', '123456') }}">

                                                    <span class="focus-border"></span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class=" mt-25 single_class jitsiSetting @if (isset($class)) d-none @endif"
                                         style="display: {{ isset($class) ? ($class->host == 'Jitsi' ? 'block' : 'none') : 'none' }}">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="primary_input">
                                                    <label class="primary_input_label"
                                                           for="">{{ __('jitsi.Meeting ID/Room') }}
                                                    </label>
                                                    <input
                                                        class="primary_input_field form-control{{ $errors->has('jitsi_meeting_id') ? ' is-invalid' : '' }}"
                                                        type="text" name="jitsi_meeting_id" autocomplete="off"
                                                        placeholder="{{ __('jitsi.Meeting ID/Room') }}"
                                                        value="{{ date('ymdhmi') }}">

                                                    <span class="focus-border"></span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="   single_class InAppLiveClassSetting @if (isset($class)) d-none @endif"
                                        style="display: {{ isset($class) ? ($class->host == 'InAppLiveClass' ? 'block' : 'none') : 'none' }}">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="primary_input">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="primary_input">
                                                    <label class="primary_input_label"
                                                           for="">{{ __('chat.chat') }}
                                                    </label>

                                                    <div class="primary_datepicker_input">
                                                        <div class="no-gutters input-right-icon">
                                                            <div class="row">
                                                                <div class="col-md-3 mb-25 pl-0">
                                                                    <div class="mr-30">
                                                                        <label class="primary_checkbox d-flex mr-12 "
                                                                               for="in_app_chat1">
                                                                            <input type="radio" name="in_app_chat"
                                                                                   id="in_app_chat1"
                                                                                   value="1"
                                                                                   checked
                                                                                   class="common-radio ">
                                                                            <span
                                                                                class="checkmark mr-2"></span> {{__('common.Yes')}}
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mb-25">
                                                                    <div class="mr-30">
                                                                        <label class="primary_checkbox d-flex mr-12 "
                                                                               for="in_app_chat0">
                                                                            <input type="radio" name="in_app_chat"
                                                                                   id="in_app_chat0"
                                                                                   value="0"

                                                                                   class="common-radio ">
                                                                            <span
                                                                                class="checkmark mr-2"></span> {{__('common.No')}}
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>

                                                    </div>


                                                </div>
                                            </div>

                                        </div>
                                    </div> --}}


                                    @if (Settings('frontend_active_theme') == 'edume')
                                        <div class="row mt-25">
                                            <div class="col-xl-12">
                                                <div class="primary_input mb-25">
                                                    <label class="primary_input_label"
                                                           for="">{{ __('courses.Key Point') }} (1)</label>
                                                    <input class="primary_input_field" name="what_learn1"
                                                           placeholder="-"
                                                           type="text"
                                                           value="{{ isset($class) ? old('what_learn1', $class->course->what_learn1 ?? '') : old('what_learn1') }}">
                                                </div>
                                            </div>

                                            <div class="col-xl-12">
                                                <div class="primary_input mb-25">
                                                    <label class="primary_input_label"
                                                           for="">{{ __('courses.Key Point') }} (2) </label>
                                                    <input class="primary_input_field" name="what_learn2"
                                                           placeholder="-"
                                                           type="text"
                                                           value="{{ isset($class) ? old('what_learn2', $class->course->what_learn2 ?? '') : old('what_learn2') }}">
                                                </div>
                                            </div>
                                        </div>
                                    @endif

                                    @if(isModuleActive("GoogleCalendar") && saasEnv('ALLOW_GOOGLE_CALENDAR')=='true' && \Modules\GoogleCalendar\Entities\GoogleCalendarAccount::where('is_active',1)->get()->count() > 0)

                                        @php
                                            $falseCheck = true;
                                            if(isset($class) && $class->googleEvents->count() > 0){
                                                $falseCheck = false;
                                            }

                                        @endphp
                                        <div class="row mt-25 allow_google_calendar_div">
                                            <div class="col-md-12 mt-25 ">
                                                <label class="primary_input_label"
                                                       for=""> {{__('setting.Allow Google Calendar')}} </label>
                                            </div>

                                            <div class="col-md-3 mb-25">
                                                <label for="allow_google_calendar1"
                                                       class="primary_checkbox d-flex mr-12 ">
                                                    <input {{!$falseCheck?'checked':''}} type="radio"
                                                           class="common-checkbox" id="allow_google_calendar1"
                                                           name="allow_google_calendar"
                                                           value="1">
                                                    <span class="checkmark mr-2"></span>{{__('common.Yes')}}</label>
                                            </div>

                                            <div class="col-md-3 mb-25">
                                                <label for="allow_google_calendar2"
                                                       class="primary_checkbox d-flex mr-12 ">
                                                    <input {{$falseCheck?'checked':''}} type="radio"
                                                           class="common-checkbox" id="allow_google_calendar2"
                                                           name="allow_google_calendar"
                                                           value="0">
                                                    <span class="checkmark mr-2"></span>{{__('common.No')}}</label>
                                            </div>

                                        </div>
                                    @endif
                                    <div class="row mt-25">
                                        <div class="col-lg-12">
                                            <div class="input-effect">
                                                <label> {{ __('virtual-class.Capacity') }} [0 hoặc trống = không giới hạn]</label>
                                                <input
                                                    class="primary_input_field  {{ $errors->has('capacity') ? ' is-invalid' : '' }}"
                                                    type="number" name="capacity"
                                                    value="{{ isset($class) ? $class->capacity : (old('capacity') != '' ? old('capacity') : '') }}">
                                                <span class="focus-border"></span>
                                            </div>
                                        </div>
                                    </div>

                                    @if(isModuleActive("SupportTicket"))
                                        <div class="row mt-25">
                                            <div class="col-lg-12">
                                                <div class="checkbox_wrap d-flex align-items-center">
                                                    <label for="support" class="switch_toggle mr-1">
                                                        <input type="checkbox" name="support"
                                                               {{ isset($class) && $class->course->support == 1 ? 'checked' : '' }}
                                                               class="support" id="support" value="1">
                                                        <i class="slider round"></i>
                                                    </label>
                                                    <label class="mb-0">{{ __('common.Support') }}</label>
                                                </div>
                                            </div>
                                        </div>
                                    @endif


                                    <div class="row mt-25">
                                        <div class="col-lg-12 text-center">
                                            <button type="submit" class="primary-btn fix-gr-bg" data-toggle="tooltip">
                                                <i class="ti-check"></i>
                                                @if (isset($class))
                                                    {{ __('common.Update') }}
                                                @else
                                                    {{ __('common.Save') }}
                                                @endif
                                                {{ __('virtual-class.Class') }}
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {{ Form::close() }}
                        </div>
                    </div>
                </div>

                <div class="col-lg-8 mt-5 mt-lg-0  ">
                    <div class="main-title">
                        <h3 class="mb-20">{{ __('virtual-class.Class List') }}</h3>
                    </div>

                    <div class="QA_section QA_section_heading_custom check_box_table">
                        <div class="QA_table">
                            <!-- table-responsive -->
                            <div class="">
                                <table id="lms_table" class="table Crm_table_active3">
                                    <thead>
                                    @if (session()->has('message-success-delete') != '' || session()->get('message-danger-delete') != '')
                                        <tr>
                                            <td colspan="5">
                                                @if (session()->has('message-success-delete'))
                                                    <div class="alert alert-success">
                                                        {{ session()->get('message-success-delete') }}
                                                    </div>
                                                @elseif(session()->has('message-danger-delete'))
                                                    <div class="alert alert-danger">
                                                        {{ session()->get('message-danger-delete') }}
                                                    </div>
                                                @endif
                                            </td>
                                        </tr>
                                    @endif
                                    <tr>
                                        <th>{{ __('common.SL') }}</th>
                                        <th>{{ __('virtual-class.Title') }}</th>
                                        @if (isModuleActive('Org'))
                                            <th>{{ __('courses.Required Type') }}</th>
                                        @endif
                                        <th>{{ __('virtual-class.Language') }}</th>
                                        <th>{{ __('virtual-class.Type') }}</th>
                                        <th>{{ __('virtual-class.Start Date') }}</th>
                                        <th>{{ __('virtual-class.End Date') }}</th>
                                        <th>{{ __('virtual-class.Time') }}</th>
                                        <th>{{ __('virtual-class.Host') }}</th>
                                        <th>{{ __('courses.View Scope') }}</th>
                                        <th>{{ __('common.Status') }}</th>
                                        <th>{{ __('common.Action') }}</th>
                                    </tr>
                                    </thead>


                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="modal fade admin-query" id="deleteClass">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">{{ __('common.Delete') }} </h4>
                    <button type="button" class="close" data-dismiss="modal"><i class="ti-close "></i></button>
                </div>

                <div class="modal-body">
                    <form action="{{ route('virtual-class.destroy') }}" method="post">
                        @csrf

                        <div class="text-center">

                            <h4>{{ __('common.Are you sure to delete ?') }} </h4>
                        </div>
                        <input type="hidden" name="id" value="" id="classDeleteId">
                        <div class="mt-40 d-flex justify-content-between">
                            <button type="button" class="primary-btn tr-bg"
                                    data-dismiss="modal">{{ __('common.Cancel') }}</button>

                            <button class="primary-btn fix-gr-bg" type="submit">{{ __('common.Delete') }}</button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
@endsection
@push('scripts')
    {{-- <script src="{{ asset('/') }}/Modules/Membership/Resources/assets/js/app.js"></script> --}}
    <script>
        $(document).ready(function () {
            let status = false;
            divHideSHow(status);

            $(document).on('click', '#all_level_member', function () {
                let status = $(this).is(':checked');

                divHideSHow(status);
            });

            function divHideSHow(status) {

                if (status == true) {
                    $('#membership_level_div').addClass('d-none');
                    $('#membership_level_member_div').addClass('d-none');
                } else {
                    $('#membership_level_div').removeClass('d-none');
                    $('#membership_level_member_div').removeClass('d-none');
                }
            }
        })
    </script>
    @php
        $url = route('getAllVirtualClassData');
    @endphp

    <script>
        let table = $('#lms_table').DataTable({
            bLengthChange: true,
            "lengthChange": true,
            "lengthMenu": [[10, 25, 50, 100, 100000], [10, 25, 50, 100, "All"]],
            "bDestroy": true,
            processing: true,
            serverSide: true,
            stateSave: true,
            order: [[0, "desc"]],
            "ajax": $.fn.dataTable.pipeline({
                url: '{!! $url !!}',
                pages: 5 // number of pages to cache
            }),
            columns: [
                {data: 'DT_RowIndex', name: 'id'},
                {data: 'title', name: 'title'},
                    @if(isModuleActive('Org'))
                {
                    data: 'required_type', name: 'courses.required_type'
                },
                    @endif
                {data: 'language', name: 'language.name'},
                {
                    data: 'type', name: 'type'
                },
                {data: 'start_date', name: 'start_date'},
                {data: 'end_date', name: 'end_date'},
                {data: 'time', name: 'time'},
                {data: 'host', name: 'host'},
                {data: 'scope', name: 'scope'},
                {data: 'status', name: 'status', orderable: false},
                {data: 'action', name: 'action', orderable: false},

            ],
            language: {
                emptyTable: "{{ __("common.No data available in the table") }}",
                search: "<i class='ti-search'></i>",
                searchPlaceholder: '{{ __("common.Quick Search") }}',
                paginate: {
                    next: "<i class='ti-arrow-right'></i>",
                    previous: "<i class='ti-arrow-left'></i>"
                }
            },
            dom: 'Blfrtip',
            buttons: [
                {
                    extend: 'copyHtml5',
                    text: '<i class="far fa-copy"></i>',
                    title: $("#logo_title").val(),
                    titleAttr: '{{ __("common.Copy") }}',
                    exportOptions: {
                        columns: ':visible',
                        columns: ':not(:last-child)',
                    }
                },
                {
                    extend: 'excelHtml5',
                    text: '<i class="far fa-file-excel"></i>',
                    titleAttr: '{{ __("common.Excel") }}',
                    title: $("#logo_title").val(),
                    margin: [10, 10, 10, 0],
                    exportOptions: {
                        columns: ':visible',
                        columns: ':not(:last-child)',
                    },

                },
                {
                    extend: 'csvHtml5',
                    text: '<i class="far fa-file-alt"></i>',
                    titleAttr: '{{ __("common.CSV") }}',
                    exportOptions: {
                        columns: ':visible',
                        columns: ':not(:last-child)',
                    }
                },
                {
                    extend: 'pdfHtml5',
                    text: '<i class="far fa-file-pdf"></i>',
                    title: $("#logo_title").val(),
                    titleAttr: '{{ __("common.PDF") }}',
                    exportOptions: {
                        columns: ':visible',
                        columns: ':not(:last-child)',
                    },
                    orientation: 'landscape',
                    pageSize: 'A4',
                    margin: [0, 0, 0, 12],
                    alignment: 'center',
                    header: true,
                    customize: function (doc) {
                        doc.content[1].table.widths =
                            Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                    }

                },
                {
                    extend: 'print',
                    text: '<i class="fa fa-print"></i>',
                    titleAttr: '{{ __("common.Print") }}',
                    title: $("#logo_title").val(),
                    exportOptions: {
                        columns: ':not(:last-child)',
                    }
                },
                {
                    extend: 'colvis',
                    text: '<i class="fa fa-columns"></i>',
                    postfixButtons: ['colvisRestore']
                }
            ],
            columnDefs: [{
                visible: false
            },
                {responsivePriority: 1, targets: 0},
                {responsivePriority: 1, targets: 1},
                {responsivePriority: 1, targets: -1},
                {responsivePriority: 2, targets: -2},
            ],
            responsive: true,
        });


        $(document).on('click', '.deleteClass', function () {
            let id = $(this).data('id');
            $('#classDeleteId').val(id);
            $("#deleteClass").modal('show');
        });
    </script>>

    <script src="{{asset('/')}}/Modules/CourseSetting/Resources/assets/js/course.js"></script>
    <script src="{{asset('public/backend/js/zoom.js')}}"></script>

@endpush
