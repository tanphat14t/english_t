@extends(theme('layouts.master'))
@section('title')
    {{ Settings('site_title') ? Settings('site_title') : 'Infix LMS' }} |
    {{ __('Flashcard') }}
@endsection
@section('css')
<link href="{{asset('public/css/custom.css/')}}" rel="stylesheet">
@endsection

@section('js')
@endsection

@section('mainContent')
    <flastcard-detail :id="{{$id}}"></flastcard-detail>
@endsection