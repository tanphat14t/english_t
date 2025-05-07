@extends(theme('layouts.dashboard_master'))
@section('title')
    {{Settings('site_title')  ? Settings('site_title')  : 'Infix LMS'}} | {{__('survey.Survey')}}
@endsection
@section('css')
    <link href="{{asset('public/backend/css/summernote-bs4.min.css')}}{{assetVersion()}}" rel="stylesheet">
    <style>
        .pb_50 {
            padding-bottom: 50px;
        }

        .cs_modal .modal-body input, .cs_modal .modal-body .nice_Select {
            height: 60px;
            line-height: 50px;
            padding: 0px 22px;
            border: 1px solid #F1F3F5;
            color: #707070;
            font-size: 14px;
            font-weight: 500;
            background-color: #fff;
            width: 100%;
        }

        .modal_1000px {
            max-width: 1000px;
        }
    </style>
@endsection
@section('js')
    <script src="{{asset('public/backend/js/summernote-bs4.min.js')}}"></script>
    <script>
        $(document).ready(function () {
            $('.lms_summernote').summernote({
                codeviewFilter: true,
                codeviewIframeFilter: true,
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'underline', 'clear']],
                    ['fontname', ['fontname']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['table', ['table']],
                    ['insert', ['link', 'picture', 'video']],
                    ['view', ['fullscreen']],
                ],
                placeholder: 'Answer',
                tabsize: 2,
                height: 188,
                tooltip: true
            });
        });
    </script>

    </script>
@endsection

@section('mainContent')
    <div class="main_content_iner main_content_padding">
        <div class="dashboard_lg_card">
            <div class="container-fluid no-gutters">
                <div class="row">

                    <div class="col-12">
                        <div class="section__title3 margin-50">
                            <h3>
                                {{$survey->title}}
                            </h3>
                            <p>
                                {!! $survey->description !!}
                            </p>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="certificate_title">

                            <form action="{{route('survey.student_survey_participate_store',$survey->id)}}"
                                  method="post">
                                <input type="hidden" name="survey_id" value="{{$survey->id}}">
                                @csrf
                                <div class="">
                                    @foreach ($survey->questionAssigns as $key => $assign)
                                        @php
                                            $question =$assign->questionBank;
                                                $submitted_answer=$submitted_answers->where('question_id',$question->id)->first();
                                        @endphp
                                        <input type="hidden" name="question[]" value="{{$question->id}}">
                                        <div class="single question row">
                                            <div class="align-content-center col-lg-12 d-flex">
                                                <span class="pr-2">{{++$key}}.</span>
                                                <span>{!! $question->question !!}</span>
                                            </div>
                                            <div class="col-lg-4">
                                                <span><img src="{{asset($question->image)}}" alt=""></span>
                                            </div>

                                            <div class="col-lg-12  mt-2">

                                                @if ($question->type=='checkbox')
                                                    @foreach ($question->questionMu as $attribute)
                                                        <div class="mb-2">
                                                            <label
                                                                    class="primary_bulet_checkbox d-flex">
                                                                <input class="quizAns"
                                                                       {{isset($submitted_answers) ? $submitted_answers->where('answer',$attribute->id)->first() ? 'checked':'':''}}
                                                                       name="survey_answer[{{$question->id}}][]"
                                                                       type="checkbox"
                                                                       value="{{$attribute->id}}">

                                                                <span class="checkmark mr_10"></span>
                                                                <span
                                                                        class="label_name">{{$attribute->title}} </span>
                                                            </label>
                                                        </div>
                                                    @endforeach

                                                @elseif ($question->type=='radio')
                                                    @foreach ($question->questionMu as $attribute)
                                                        <div class="mb-2">
                                                            <label
                                                                    class="primary_bulet_checkbox d-flex">
                                                                <input class="quizAns"
                                                                       {{isset($submitted_answer) ? $submitted_answer->answer == $attribute->id? 'checked':'':''}}
                                                                       name="survey_answer[{{$question->id}}]"
                                                                       type="radio"
                                                                       value="{{$attribute->id}}">

                                                                <span class="checkmark mr_10"></span>
                                                                <span
                                                                        class="label_name">{{$attribute->title}} </span>
                                                            </label>
                                                        </div>
                                                    @endforeach
                                                @elseif ($question->type=='linear_scale')
                                                    @php
                                                        $option =$question->number_of_option;
                                                    @endphp

                                                    <ul>

                                                        @for ($i=1; $i<=$option;$i++)
                                                            <li class="d-inline-block text-center mr-3">
                                                                <label>
                                                                    <strong>{{$i}}</strong>
                                                                </label>
                                                                <label class="primary_bulet_checkbox d-flex">
                                                                    <input type="radio" value="{{$i}}"
                                                                           name="survey_answer[{{$question->id}}]"
                                                                            {{isset($submitted_answer) ? $submitted_answer->answer ==$i? 'checked':'':''}}
                                                                    >
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </li>
                                                        @endfor

                                                    </ul>
                                                @elseif ($question->type=='dropdown')
                                                    <div class="single_input d-inline-block w-50">
                                                        <select class="nice_Select mb-3 wide w-100"
                                                                name="survey_answer[{{$question->id}}]" {{$errors->first('language') ? 'autofocus' : ''}}>
                                                            <option data-display="Select Answer"
                                                                    value="#">{{__('common.Select')}} {{__('common.Answer')}}

                                                            </option>
                                                            @foreach ($question->questionMu as $attribute)
                                                                <option
                                                                        {{isset($submitted_answer) ? $submitted_answer->answer == $attribute->id? 'selected':'':''}} value="{{$attribute->id}}">{{$attribute->title}}</option>
                                                            @endforeach
                                                        </select>
                                                    </div>

                                                @else
                                                    <div class="input-effect mb-20">
                                                        <textarea class="textArea lms_summernote " cols="30" rows="10"
                                                                  name="survey_answer[{{$question->id}}]">

                                                    {{$submitted_answers->where('question_id',$question->id)->first() ? $submitted_answers->where('question_id',$question->id)->first()->answer:''}}
                                                </textarea>
                                                        <span class="focus-border textarea"></span>

                                                    </div>
                                                @endif
                                            </div>


                                        </div>
                                        <hr>
                                    @endforeach
                                </div>

                                <div class="row">

                                    <div class="col-lg-12 text-center">
                                        <div class="d-flex justify-content-center pt_20">
                                            <button type="submit" class="theme_btn mr_15 m-auto mt-4 text-center"
                                                    data-toggle="tooltip" title=""
                                                    id="save_button_parent">
                                                <i class="ti-check"></i>
                                                {{ __('common.Submit') }}
                                            </button>
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

@endsection
