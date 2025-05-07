@extends('backend.master')
@section('mainContent')

    {!! generateBreadcrumb() !!}
    <section class="admin-visitor-area up_st_admin_visitor">
        <div class="container-fluid p-0">
            @if(isset($bank))
                @if (permissionCheck('question-bank.store'))
                    <div class="row">
                        <div class="offset-lg-10 col-lg-2 text-right col-md-12 mb-20">

                        </div>
                    </div>
                @endif
            @endif
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-12">


                            @if(isset($bank))

                                {{ Form::open(['class' => 'form-horizontal', 'files' => true, 'route' => array('question-bank-update',$bank->id), 'method' => 'PUT', 'enctype' => 'multipart/form-data', 'id' => 'question_bank']) }}

                            @else
                                @if (permissionCheck('question-bank.store'))

                                    {{ Form::open(['class' => 'form-horizontal', 'files' => true, 'route' => 'question-bank.store',
                                    'method' => 'POST', 'enctype' => 'multipart/form-data', 'id' => 'question_bank']) }}

                                @endif
                            @endif
                            <input type="hidden" name="url" id="url" value="{{URL::to('/')}}">

                            <input type="hidden" name="connection" id="connection"
                                   value="{{old('connection',isset($bank) && $bank->type=='X'?$bank->connection:null)}}">
                            {{--                            <input type="hidden" name="data" id="data">--}}

                            <div class="white-box ">
                                <div class="add-visitor">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            @php
                                                if(isset($bank)){
                                                     request()->replace(['group'=>$bank->q_group_id]);
                                                }
                                            @endphp
                                            <label class="primary_input_label"
                                                   for="groupInput">{{__('quiz.Group')}} <span
                                                    class="required_mark">*</span></label>
                                            <select {{ $errors->has('group') ? ' autofocus' : '' }}
                                                    class="primary_select{{ $errors->has('group') ? ' is-invalid' : '' }}"
                                                    name="group" id="groupInput">
                                                <option data-display="{{__('common.Select')}} {{__('quiz.Group')}} "
                                                        value="">{{__('common.Select')}} {{__('quiz.Group')}}
                                                </option>
                                                @if(isModuleActive('AdvanceQuiz'))
                                                    @foreach($groups->where('parent_id',0) as $group)
                                                        @include('advancequiz::group._single_select_option_id',['group'=>$group,'level'=>1])
                                                    @endforeach
                                                @else
                                                    @foreach($groups as $group)
                                                        @if(isset($bank))
                                                            <option
                                                                value="{{$group->id}}" {{$group->id == $bank->q_group_id? 'selected': ''}}>{{$group->title}}</option>
                                                        @else
                                                            <option
                                                                value="{{$group->id}}" {{old('group')!=''? (old('group') == $group->id? 'selected':''):''}} >{{$group->title}}</option>
                                                        @endif
                                                    @endforeach
                                                @endif

                                            </select>

                                        </div>
                                        @if(isModuleActive('AdvanceQuiz'))
                                            <div class="col-lg-4">
                                                <label class="primary_input_label"
                                                       for="level">{{__('quiz.Question Level')}} </label>
                                                <select {{ $errors->has('level') ? ' autofocus' : '' }}
                                                        class="primary_select {{ $errors->has('level') ? ' is-invalid' : '' }}"
                                                        id="level" name="level">

                                                    @foreach($levels as $level)
                                                        @if(isset($bank))
                                                            <option
                                                                value="{{$level->id}}" {{$bank->level == $level->id? 'selected': ''}}>{{$level->title}}</option>
                                                        @else
                                                            <option
                                                                value="{{$level->id}}" {{old('level')!=''? (old('level') == $level->id? 'selected':''):''}}>{{$level->title}}</option>
                                                        @endif

                                                    @endforeach
                                                </select>

                                            </div>
                                            <div class="col-lg-4 mt-30-md" id="preConditionQus">
                                                <label class="primary_input_label"
                                                       for="subcategory_id">{{__('quiz.Pre-Condition Question')}}</label>
                                                <select {{ $errors->has('pre_condition') ? ' autofocus' : '' }}
                                                        class="primary_select{{ $errors->has('pre_condition') ? ' is-invalid' : '' }} select_section"
                                                        id="pre_condition" name="pre_condition">

                                                    <option value="0" @if(isset($bank) && $bank->pre_condition==0)
                                                        selected
                                                        @endif
                                                    >{{__('common.No')}}</option>

                                                    <option value="1" @if(isset($bank) && $bank->pre_condition==1)
                                                        selected
                                                        @endif
                                                    >{{__('common.Yes')}}</option>
                                                </select>

                                            </div>
                                        @endif
                                        <div class="col-lg-4">
                                            <label id="QuestionTypeLevel"
                                                   class="primary_input_label {{isModuleActive('AdvanceQuiz')?'mt-25':''}}"
                                                   for="question-type">{{__('quiz.Question Type')}} <span
                                                    class="required_mark">*</span></label>
                                            <select {{ $errors->has('question_type') ? ' autofocus' : '' }}
                                                    class="primary_select{{ $errors->has('question_type') ? ' is-invalid' : '' }}"
                                                    name="question_type" id="question-type">
                                                <option data-display="{{__('quiz.Question Type')}} "
                                                        value="">{{__('quiz.Question Type')}}
                                                </option>

                                                <option
                                                    value="M" {{ old('question_type',isset($bank)? $bank->type:'') == 'M'? 'selected': '' }}> {{__('quiz.Multiple Choice')}}</option>
                                                <option
                                                    value="S" {{ old('question_type',isset($bank)? $bank->type:'') == 'S'? 'selected': '' }}> {{__('quiz.Short Answer')}} </option>
                                                <option
                                                    value="L" {{ old('question_type',isset($bank)? $bank->type:'') == 'L'? 'selected': '' }}> {{__('quiz.Long Answer')}} </option>
                                                    <option
                                                        value="X" {{ old('question_type',isset($bank)? $bank->type:'') == 'X'? 'selected': '' }} > {{__('quiz.Matching Type')}} </option>
                                            </select>

                                        </div>
                                        <div class="col-lg-2">
                                            <div class="input-effect {{isModuleActive('AdvanceQuiz')?'mt-25':''}}">
                                                <label> {{__('quiz.Marks')}} <span class="required_mark">*</span>
                                                </label>
                                                <input {{ $errors->has('marks') ? ' autofocus' : '' }}
                                                       class="primary_input_field name{{ $errors->has('marks') ? ' is-invalid' : '' }}"
                                                       type="number" name="marks"
                                                       value="{{isset($bank)? $bank->marks:(old('marks')!=''?(old('marks')):'')}}">
                                                <span class="focus-border"></span>

                                            </div>
                                        </div>

                                        <div class="col-lg-2" id="shuffleBox">
                                            <div class="input-effect @if(isModuleActive('AdvanceQuiz'))  mt-25 @endif">
                                                <label> {{__('quiz.Shuffle Answer')}} <span
                                                        class="required_mark">*</span>
                                                </label>
                                                <select {{ $errors->has('shuffle') ? ' autofocus' : '' }}
                                                        class="primary_select{{ $errors->has('shuffle') ? ' is-invalid' : '' }}"
                                                        name="shuffle" id="shuffle">
                                                    <option
                                                        value="1" {{isset($bank)? $bank->shuffle ==1? 'selected': '' : 'selected'}}> {{__('common.Yes')}}</option>
                                                    <option
                                                        value="0" {{isset($bank)? $bank->shuffle ==0? 'selected': '' : ''}}> {{__('common.No')}}</option>

                                                </select>

                                            </div>
                                        </div>


                                        <div class="col-xl-3">
                                            <div class=" mt-25">


                                                <x-upload-file
                                                    name="image"
                                                    type="image"
                                                    media_id="{{isset($bank)?$bank->image_media?->media_id:''}}"
                                                    label="{{ __('common.Image') }}"
                                                />

                                            </div>

                                        </div>
                                    </div>
                                    <div class="row mt-25">
                                        <div class="col-lg-12">
                                            <div class="input-effect">
                                                <label> <span class="cnt-quest"> {{__('quiz.Question')}}</span><span
                                                        class="required_mark">*</span></label>
                                                <textarea
                                                    class="textArea lms_summernote {{ @$errors->has('details') ? ' is-invalid' : '' }}"
                                                    cols="30" rows="10"
                                                    name="question">{{isset($bank)? $bank->question:(old('question')!=''?(old('question')):'')}}</textarea>

                                                <span class="focus-border textarea"></span>

                                            </div>
                                        </div>
                                    </div>


                                    @php
                                        if((isset($bank) && $bank->type == "M") || old('question_type') == "M"){
                                                     $multiple_choice = "";
                                                     $multiple_options = "";
                                                 }

                                          if((isset($bank) && $bank->type == "X") || old('question_type') == "X"){
                                                     $matching_choice = "";
                                                     $matching_options = "";
                                                 }
                                    @endphp
                                    <div class="multiple-choice "
                                    >
                                        <div class="row  mt-25">
                                            <div class="col-lg-8">
                                                <div class="input-effect">
                                                    <label> {{__('quiz.Number Of Options')}}<span
                                                            class="required_mark">*</span></label>
                                                    <input
                                                        {{ $errors->has('number_of_option') ? ' autofocus' : '' }}
                                                        class="primary_input_field name{{ $errors->has('number_of_option') ? ' is-invalid' : '' }}"
                                                        type="number" name="number_of_option" autocomplete="off"
                                                        id="number_of_option"
                                                        value="{{isset($bank)? $bank->number_of_option: ''}}">
                                                    <span class="focus-border"></span>

                                                </div>
                                            </div>
                                            <div class="col-lg-2 mt-40">
                                                <button type="button" class="primary-btn small fix-gr-bg"
                                                        id="create-option">{{__('quiz.Create')}} </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="matching-choice">
                                        <div class="row  mt-25">
                                            <div class="col-lg-3">
                                                <div class="input-effect">
                                                    <label> {{__('quiz.Number Of Options')}}<span
                                                            class="required_mark">*</span></label>
                                                    <input
                                                        {{ $errors->has('number_of_option') ? ' autofocus' : '' }}
                                                        class="primary_input_field name{{ $errors->has('number_of_option') ? ' is-invalid' : '' }}"
                                                        type="number" name="number_of_qus" autocomplete="off"
                                                        id="number_of_qus"
                                                        data-title="{{__('quiz.Option')}}"
                                                        value="{{isset($bank)? $bank->number_of_qus: ''}}">
                                                    <span class="focus-border"></span>

                                                </div>
                                            </div>
                                            <div class="col-lg-3 mt-40">
                                                <button type="button" class="primary-btn small fix-gr-bg"
                                                        id="create-qus-option">{{__('quiz.Create')}} </button>
                                            </div>

                                            <div class="col-lg-3">
                                                <div class="input-effect">
                                                    <label> {{__('quiz.Number Of Answer')}}<span
                                                            class="required_mark">*</span></label>
                                                    <input {{ $errors->has('number_of_ans') ? ' autofocus' : '' }}
                                                           class="primary_input_field name{{ $errors->has('number_of_ans') ? ' is-invalid' : '' }}"
                                                           type="number" name="number_of_ans" autocomplete="off"
                                                           id="number_of_ans"
                                                           data-title="{{__('quiz.Answer')}}"
                                                           value="{{old('number_of_ans',isset($bank)? $bank->number_of_ans: '')}}">
                                                    <span class="focus-border"></span>

                                                </div>
                                            </div>
                                            <div class="col-lg-3 mt-40">
                                                <button type="button" class="primary-btn small fix-gr-bg"
                                                        id="create-ans-option">{{__('quiz.Create')}} </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="multiple-options questionBoxDiv"
                                         id="{{isset($multiple_options)? "": 'multiple-options'}}">
                                        @php
                                            $i=0;
                                            $multiple_options = [];

                                            if(isset($bank)){
                                                if($bank->type == "M"){
                                                    $multiple_options = $bank->questionMuInSerial;
                                                }
                                            }
                                        @endphp
                                        @foreach($multiple_options as $multiple_option)

                                            @php $i++; @endphp
                                            <div class='row  mt-25'>
                                                <div class='col-lg-10'>
                                                    <div class='input-effect'>
                                                        <input class='primary_input_field name' type='text'
                                                               name='option[]' autocomplete='off' required
                                                               value="{{$multiple_option->title}}">
                                                        <span class='focus-border'></span>
                                                    </div>
                                                </div>
                                                <div class='col-lg-2 mt-40'>
                                                    <label class="primary_checkbox d-flex mr-12 "
                                                           for="option_check_{{$i}}" {{__('quiz.Yes')}}>
                                                        <input type="checkbox"
                                                               @if ($multiple_option->status==1) checked
                                                               @endif id="option_check_{{$i}}"
                                                               name="option_check_{{$i}}" value="1">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>

                                    <div class="matching-options " id="matching-options">
                                        <div class="row">
                                            <div class="col-12">
                                                <div id="question_drawflow">
                                                @php
                                                    $i=0;
                                                    $multiple_qus = [];

                                                    if(isset($gbank)){
                                                        if($bank->type == "X"){
                                                            $multiple_qus = $gbank;
                                                        }
                                                    }
                                                @endphp
                                                @foreach($multiple_qus as $key => $qus)
                                                <div class="question-mutiple-item m-4">
                                                    <textarea  class="textArea lms_summernote" cols="30" rows="10" name="question_mutil[]">{{$qus->question}}</textarea>
                                                    @php
                                                        $multiple_options = [];

                                                        if(isset($qus)){
                                                            if($qus->type == "M"){
                                                                $multiple_options = $qus->questionMuInSerial;
                                                            }
                                                        }
                                                    @endphp
                                                    @foreach($multiple_options as $k => $multiple_option)
                                                    <div class="question-ans-mutiple">
                                                        <div class="row  mt-25">
                                                            <div class="col-lg-10 optionTitle">
                                                                <div class="input-effect">
                                                                    <input class="primary_input_field name" value="{{$multiple_option->title}}" placeholder="" type="text" name="option_{{ $key }}[]" autocomplete="off" required="">
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-2 mt-15 optionCorrect">
                                                                <label class="primary_checkbox d-flex mr-12 " for="option_check_{{ $key }}_{{ $k }}">
                                                                    <input type="radio" @if ($multiple_option->status==1) checked @endif id="option_check_{{ $key }}_{{ $k }}" name="option_check_{{ $key }}" value="{{ $k+1 }}"> 
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    @endforeach
                                                </div>
                                                @endforeach
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="multiple-choice"
                                         id="{{isset($multiple_choice)? $multiple_choice: 'multiple-choice'}}">
                                        <div class="row  mt-25">
                                            <div class="col-lg-12">
                                                <div class="input-effect">
                                                    <label> {{__('quiz.Explanation')}} </label>
                                                    <textarea
                                                        class="textArea lms_summernote {{ @$errors->has('details') ? ' is-invalid' : '' }}"
                                                        cols="10" rows="10"
                                                        name="explanation">{{isset($bank)? $bank->explanation:(old('explanation')!=''?(old('explanation')):'')}}</textarea>

                                                    <span class="focus-border textarea"></span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-40">
                                        <div class="col-lg-12 text-center">
                                            <button class="primary-btn fix-gr-bg questionSubmitBtn"
                                                    data-toggle="tooltip"
                                                    type="submit">
                                                <i class="ti-check"></i>
                                                @if(isset($bank))
                                                    {{__('common.Update')}}
                                                @else
                                                    {{__('common.Save')}}
                                                @endif
                                                {{__('quiz.Question')}}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {{ Form::close() }}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


    <div class="modal fade admin-query" id="deleteBank">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">{{__('common.Delete')}} </h4>
                    <button type="button" class="close" data-dismiss="modal"><i
                            class="ti-close "></i></button>
                </div>

                <div class="modal-body">
                    <form action="{{route('question-bank-delete')}}" method="post">
                        @csrf

                        <div class="text-center">

                            <h4>{{__('common.Are you sure to delete ?')}} </h4>
                        </div>
                        <input type="hidden" name="id" value="" id="classQusId">
                        <div class="mt-40 d-flex justify-content-between">
                            <button type="button" class="primary-btn tr-bg"
                                    data-dismiss="modal">{{__('common.Cancel')}}</button>

                            <button class="primary-btn fix-gr-bg"
                                    type="submit">{{__('common.Delete')}}</button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>


    <div class="modal fade admin-query" id="removeImageModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">{{__('common.Confirm')}} </h4>
                    <button type="button" class="close" data-dismiss="modal"><i
                            class="ti-close "></i></button>
                </div>

                <div class="modal-body">
                    <form action="#" method="post">
                        @csrf

                        <div class="text-center">

                            <h4>{{__('common.Are you sure to remove')}}? </h4>
                        </div>
                        <input type="hidden" value="" id="quizId">
                        <input type="hidden" value="" id="targetContent">
                        <div class="mt-40 d-flex justify-content-between">
                            <button type="button" class="primary-btn tr-bg"
                                    data-dismiss="modal">{{__('common.Cancel')}}</button>

                            <button class="primary-btn fix-gr-bg removeImageConfirm"
                                    type="button">{{__('common.Remove')}}</button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
@endsection
@push('scripts')

    <script>

        $("body").on('change', '.fileUpload1', function () {
            let placeholder = $(this).closest(".primary_file_uploader").find(".filePlaceholder");
            let fileInput = event.srcElement;
            placeholder.val(fileInput.files[0].name);
            console.log(fileInput.files[0].name);
            $('.removeImage1').removeClass('d-none');
        });


        $(document).on("click", ".questionSubmitBtn", function (e) {

            e.preventDefault();
            let type = $('#question-type').val();
            if (type == 'M') {
                let div = $('.questionBoxDiv');
                let count = div.find('[type=checkbox]:checked').length;
                if (count < 1) {
                    toastr.error('{{__('common.At least one correct answer is required')}} ', '{{__('common.Error')}}');
                    return false;
                }
            }
            $(this).closest('form').submit();
        });

        $('#question-type').change(function (e) {

            let type = $('#question-type').val();
            if (type == 'M') {
                $('.multiple-choice').show();
                $('.multiple-options').show();
                $('.matching-choice').hide();
                $('.matching-options').hide();
                $('#shuffleBox').show();
                $('#preConditionQus').show();
                @if(isModuleActive('AdvanceQuiz'))
                $('#QuestionTypeLevel').addClass('mt-25');
                @endif
            } else if (type == 'X') {
                $('.matching-choice').show();
                $('.matching-options').show();
                $('.multiple-choice').hide();
                $('.multiple-options').hide();
                $('#shuffleBox').hide();
                $('#preConditionQus').show();
                @if(isModuleActive('AdvanceQuiz'))
                $('#QuestionTypeLevel').addClass('mt-25');
                @endif
            } else {
                $('.multiple-choice').hide();
                $('.multiple-options').hide();
                $('.matching-choice').hide();
                $('.matching-options').hide();
                $('#shuffleBox').hide();
                $('#preConditionQus').hide();
                @if(isModuleActive('AdvanceQuiz'))
                $('#QuestionTypeLevel').removeClass('mt-25');
                @endif

            }

            if (type == "S") {
                $('#marks_required').hide();
            } else {
                $('#marks_required').show();
            }

        });
        $('#question-type').trigger('change')


        $(document).on("click", ".removeImage1", function (e) {
            e.preventDefault();
            let target = $(this).data('target')
            let id = $(this).data('id')
            console.log(id);
            $('#targetContent').val(target);
            $('#quizId').val(id);
            $('#removeImageModal').modal('show');
        });

        $(document).on("click", ".removeImageConfirm", function (e) {
            e.preventDefault();
            let target_name = $('#targetContent').val();
            let id = $('#quizId').val();
            let target = $(target_name);
            target.find('.filePlaceholder').val('');
            target.find('.fileUpload1').val('');
            $('#removeImageModal').modal('hide');
            $('.removeImage1').addClass('d-none');
            if (id != "") {
                var formData = {
                    id: id,
                };
                $.ajax({
                    type: "POST",
                    data: formData,
                    dataType: "json",
                    url: "{{url('quiz/remove-image-ajax')}}",
                    success: function (data) {

                    },
                    error: function (data) {
                        console.log("Error:", data);
                    },
                });
            }
        });

        $(document).on('change', '#question-type', function(){
            var option = $(this).val();
            if(option == "X"){
                $('.cnt-quest').text('Bài đọc');
            }else {
                $('.cnt-quest').text('Câu hỏi');
            }
        });

        $(document).on('click', '#create-qus-option, #create-ans-option', function(){
            var number_of_qus = $('#number_of_qus').val();
            var number_of_ans  = $('#number_of_ans').val();
            var draw = $('#question_drawflow');
            var html="";

            var ques_item = $('.question-mutiple-item');
            number_of_qus = number_of_qus - ques_item.length;
           
            if(number_of_qus > 0) {
                for(let i=0; i<number_of_qus; i++){
                    html += '<div class="question-mutiple-item m-4">';
                    html += '<textarea  class="textArea lms_summernote" cols="30" rows="10" name="question_mutil[]"></textarea>';
                    if(number_of_ans > 0) {
                        for(let ii=1; ii<=number_of_ans; ii++){
                            html += '<div class="question-ans-mutiple">';
                            html += '<div class="row  mt-25"><div class="col-lg-10 optionTitle"><div class="input-effect"><input class="primary_input_field name" placeholder="Đáp án ' + ii + '" type="text" name="option_' + i + '[]" autocomplete="off" required=""></div></div><div class="col-lg-2 mt-15 optionCorrect"><label class="primary_checkbox d-flex mr-12 " for="option_check_' + i + '_' + ii + '"><input type="radio" id="option_check_' + i + '_' + ii + '" name="option_check_' + i + '" value="' + ii + '"> <span class="checkmark"></span></label></div></div>';
                            html += '</div>';
                        }
                    }else{
                        toastr.error('{{__('Vui lòng nhập số câu trả lời.')}} ', '{{__('common.Error')}}');
                        return false;
                    }
                    html += '</div>';
                }
            }else{
                toastr.error('{{__('Vui lòng nhập số câu hỏi.')}} ', '{{__('common.Error')}}');
                return false;
            }
            
            draw.append(html);
            $('.lms_summernote').summernote({
                height: 120
            });
        })
    </script>
    <script src="{{asset('/')}}/Modules/CourseSetting/Resources/assets/js/course.js"></script>

    @includeIf("advancequiz::partials._quiz_bank_script")
@endpush
