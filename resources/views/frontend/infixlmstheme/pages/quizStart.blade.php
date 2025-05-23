@extends(theme('layouts.master'))
@section('title')
    {{Settings('site_title')  ? Settings('site_title')  : 'Infix LMS'}} |    {{$course->title}}
@endsection
@section('css')
    <link href="{{asset('public/backend/css/summernote-bs4.min.css/')}}{{assetVersion()}}" rel="stylesheet">
@endsection
@section('js')
    <script src="{{ asset('public/frontend/infixlmstheme/js/quiz_start.js') }}{{assetVersion()}}"></script>
    <script src="{{asset('public/backend/js/summernote-bs4.min.js')}}{{assetVersion()}}"></script>
    <script>
        if ($('.lms_summernote').length) {
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
                placeholder: '',
                tabsize: 2,
                height: 188,
                tooltip: true
            });
        }
    </script>
@endsection

@section('mainContent')

    <x-quiz-start-page-section :course="$course" :quizId="$quiz_id"/>


    @include(theme('partials._quiz_submit_confirm_modal'))
    @include(theme('partials._quiz_start_confirm_modal'))

@endsection

