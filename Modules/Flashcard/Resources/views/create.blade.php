@extends('backend.master')
@section('mainContent')

    {!! generateBreadcrumb() !!}
    <section class="admin-visitor-area up_st_admin_visitor">
        <div class="container-fluid p-0">
            @if (isset($bank))
                @if (permissionCheck('flashcard.store'))
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
                            @if (isset($falshcard))
                                {{ Form::open(['class' => 'form-horizontal', 'files' => true, 'route' => ['question-bank-update', $bank->id], 'method' => 'PUT', 'enctype' => 'multipart/form-data', 'id' => 'question_bank']) }}
                            @else
                                @if (permissionCheck('flashcard.store'))
                                    {{ Form::open([
                                        'class' => 'form-horizontal',
                                        'files' => true,
                                        'route' => 'flashcard.store',
                                        'method' => 'POST',
                                        'enctype' => 'multipart/form-data',
                                        'id' => 'question_bank',
                                    ]) }}
                                @endif
                            @endif
                            <input type="hidden" name="url" id="url" value="{{ URL::to('/') }}">
                            <div class="white-box">
                                <div class="add-ques-word">
                                    <div class="row">
                                        <div class="col-xl-12 mb-5">
                                            <div class="input-effect">
                                                <label> Tiều đề <span class="required_mark">*</span>
                                                </label>
                                                <input class="primary_input_field" type="text" name="title"
                                                    value="">
                                                <span class="focus-border"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="list-word">
                                        <div class="card card-word p-3 mb-3">
                                            <div class="row">
                                                <div class="col-xl-12">
                                                    <h5>Từ vựng <span class="word-number">1</span></h5>
                                                </div>
                                                <div class="col-xl-6">
                                                    <div class=" mt-25">
                                                        <div class="input-effect">
                                                            <label> Từ vựng <span class="required_mark">*</span>
                                                            </label>
                                                            <input class="primary_input_field" type="text"
                                                                name="learn_word[0][word]" value="">
                                                            <span class="focus-border"></span>

                                                        </div>
                                                    </div>
                                                    <div class=" mt-25">
                                                        <div class="input-effect">
                                                            <label> Loại từ vựng <span class="required_mark">*</span>
                                                            </label>
                                                            <input class="primary_input_field name" type="text"
                                                                name="learn_word[0][type]" value="">
                                                            <span class="focus-border"></span>

                                                        </div>
                                                    </div>
                                                    <div class=" mt-25">
                                                        <div class="input-effect">
                                                            <label> Phiên âm <span class="required_mark">*</span>
                                                            </label>
                                                            <input class="primary_input_field name" type="text"
                                                                name="learn_word[0][read]" value="">
                                                            <span class="focus-border"></span>

                                                        </div>
                                                    </div>
                                                    <div class=" mt-25">
                                                        <div class="input-effect">
                                                            <label> Nghĩa tiêng Việt <span class="required_mark">*</span>
                                                            </label>
                                                            <input class="primary_input_field name" type="text"
                                                                name="learn_word[0][trans]" value="">
                                                            <span class="focus-border"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="input-effect  mt-25">
                                                        <label> <span class="cnt-quest"> Giải thích</span><span
                                                                class="required_mark">*</span></label>
                                                        <textarea class="textArea lms_summernote" cols="30" rows="10" name="learn_word[0][note]"></textarea>
                                                        <span class="focus-border textarea"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-40">
                                        <div class="col-lg-12 text-center">
                                            <button type="button" class="primary-btn fix-gr-bg" id="add-new-word">
                                                <i class="ti-add"></i>
                                                {{ __('Thêm từ mới') }}
                                            </button>
                                            <button class="primary-btn fix-gr-bg questionSubmitBtn" data-toggle="tooltip"
                                                type="submit">
                                                <i class="ti-check"></i>
                                                @if (isset($bank))
                                                    {{ __('common.Update') }}
                                                @else
                                                    {{ __('common.Save') }}
                                                @endif
                                                {{ __('quiz.Question') }}
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
                    <h4 class="modal-title">{{ __('common.Delete') }} </h4>
                    <button type="button" class="close" data-dismiss="modal"><i class="ti-close "></i></button>
                </div>

                <div class="modal-body">
                    <form action="{{ route('question-bank-delete') }}" method="post">
                        @csrf

                        <div class="text-center">

                            <h4>{{ __('common.Are you sure to delete ?') }} </h4>
                        </div>
                        <input type="hidden" name="id" value="" id="classQusId">
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


    <div class="modal fade admin-query" id="removeImageModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">{{ __('common.Confirm') }} </h4>
                    <button type="button" class="close" data-dismiss="modal"><i class="ti-close "></i></button>
                </div>

                <div class="modal-body">
                    <form action="#" method="post">
                        @csrf

                        <div class="text-center">

                            <h4>{{ __('common.Are you sure to remove') }}? </h4>
                        </div>
                        <input type="hidden" value="" id="quizId">
                        <input type="hidden" value="" id="targetContent">
                        <div class="mt-40 d-flex justify-content-between">
                            <button type="button" class="primary-btn tr-bg"
                                data-dismiss="modal">{{ __('common.Cancel') }}</button>

                            <button class="primary-btn fix-gr-bg removeImageConfirm"
                                type="button">{{ __('common.Remove') }}</button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
@endsection
@push('scripts')
    <script>
        $("body").on('change', '.fileUpload1', function() {
            let placeholder = $(this).closest(".primary_file_uploader").find(".filePlaceholder");
            let fileInput = event.srcElement;
            placeholder.val(fileInput.files[0].name);
            console.log(fileInput.files[0].name);
            $('.removeImage1').removeClass('d-none');
        });


        $(document).on("click", ".questionSubmitBtn", function(e) {

            e.preventDefault();
            let type = $('#question-type').val();
            if (type == 'M') {
                let div = $('.questionBoxDiv');
                let count = div.find('[type=checkbox]:checked').length;
                if (count < 1) {
                    toastr.error('{{ __('common.At least one correct answer is required') }} ',
                        '{{ __('common.Error') }}');
                    return false;
                }
            }
            $(this).closest('form').submit();
        });

        $('#question-type').change(function(e) {

            let type = $('#question-type').val();
            if (type == 'M') {
                $('.multiple-choice').show();
                $('.multiple-options').show();
                $('.matching-choice').hide();
                $('.matching-options').hide();
                $('#shuffleBox').show();
                $('#preConditionQus').show();
                @if (isModuleActive('AdvanceQuiz'))
                    $('#QuestionTypeLevel').addClass('mt-25');
                @endif
            } else if (type == 'X') {
                $('.matching-choice').show();
                $('.matching-options').show();
                $('.multiple-choice').hide();
                $('.multiple-options').hide();
                $('#shuffleBox').hide();
                $('#preConditionQus').show();
                @if (isModuleActive('AdvanceQuiz'))
                    $('#QuestionTypeLevel').addClass('mt-25');
                @endif
            } else {
                $('.multiple-choice').hide();
                $('.multiple-options').hide();
                $('.matching-choice').hide();
                $('.matching-options').hide();
                $('#shuffleBox').hide();
                $('#preConditionQus').hide();
                @if (isModuleActive('AdvanceQuiz'))
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


        $(document).on("click", ".removeImage1", function(e) {
            e.preventDefault();
            let target = $(this).data('target')
            let id = $(this).data('id')
            console.log(id);
            $('#targetContent').val(target);
            $('#quizId').val(id);
            $('#removeImageModal').modal('show');
        });

        $(document).on("click", ".removeImageConfirm", function(e) {
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
                    url: "{{ url('quiz/remove-image-ajax') }}",
                    success: function(data) {

                    },
                    error: function(data) {
                        console.log("Error:", data);
                    },
                });
            }
        });

        $(document).on('change', '#question-type', function() {
            var option = $(this).val();
            if (option == "X") {
                $('.cnt-quest').text('Bài đọc');
            } else {
                $('.cnt-quest').text('Câu hỏi');
            }
        });

        $(document).on('click', '#add-new-word', function() {
            var draw = $('#list-word');
            var html = "";
            var count_card = $('.card-word').length;
            html = '<div class="card card-word p-3 mb-3" id="card-word-' + (parseInt(count_card) + 1) + '"> \n' +
                '<div class="row"> \n' +
                '<div class="col-xl-12"><h5>Từ vựng <span class="word-number">' + (parseInt(count_card) + 1) +
                '</span></h5><div class="delete-word" data-count="' + (parseInt(count_card) + 1) +
                '"><i class="ti-close "></i></div></div> \n' +
                '<div class="col-xl-6"> \n' +
                '<div class=" mt-25"> \n' +
                '<div class="input-effect"> \n' +
                '<label> Từ vựng <span class="required_mark">*</span></label> \n' +
                '<input class="primary_input_field" type="text" name="learn_word[' + count_card +
                '][word]"  value=""> \n' +
                '<span class="focus-border"></span> \n' +
                '</div> \n' +
                '</div> \n' +
                '<div class=" mt-25"> \n' +
                '<div class="input-effect"> \n' +
                '<label> Loại từ vựng <span class="required_mark">*</span></label> \n' +
                '<input class="primary_input_field name" type="text" name="learn_word[' + count_card +
                '][type]" value=""> \n' +
                '<span class="focus-border"></span> \n' +
                '</div> \n' +
                '</div> \n' +
                '<div class=" mt-25"> \n' +
                '<div class="input-effect"> \n' +
                '<label> Phiên âm <span class="required_mark">*</span></label> \n' +
                '<input class="primary_input_field name" type="text" name="learn_word[' + count_card +
                '][read]" value=""> \n' +
                '<span class="focus-border"></span> \n' +
                '</div> \n' +
                '</div> \n' +
                '<div class=" mt-25"> \n' +
                '<div class="input-effect"> \n' +
                '<label> Nghĩa tiêng Việt <span class="required_mark">*</span></label> \n' +
                '<input class="primary_input_field name" type="text" name="learn_word[' + count_card +
                '][trans]" value=""> \n' +
                ' <span class="focus-border"></span> \n' +
                '</div> \n' +
                '</div> \n' +
                '</div> \n' +
                '<div class="col-lg-6"> \n' +
                '<div class="input-effect  mt-25"> \n' +
                ' <label> <span class="cnt-quest"> Giải thích</span><span class="required_mark">*</span></label> \n' +
                '<textarea class="textArea lms_summernote" cols="30" rows="10" name="learn_word[' + count_card +
                '][note]"></textarea> \n' +
                ' <span class="focus-border textarea"></span> \n' +
                '</div> \n' +
                '</div> \n' +
                '</div> \n' +
                '</div>';

            draw.append(html);
            $('.lms_summernote').summernote({
                height: 120
            });
        })

        $(document).on('click', '.delete-word', function() {
            var count = $(this).data('count');
            $('#card-word-' + count).remove();
        });
    </script>
    <script src="{{ asset('/') }}/Modules/CourseSetting/Resources/assets/js/course.js"></script>

    @includeIf('advancequiz::partials._quiz_bank_script')
@endpush
