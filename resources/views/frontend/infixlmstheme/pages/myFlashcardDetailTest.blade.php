@extends(theme('layouts.master'))
@section('title'){{Settings('site_title')  ? Settings('site_title')  : 'Infix LMS'}} |
{{__('Flashcard')}}
@endsection
@section('css') @endsection
@section('js')
@endsection

@section('mainContent')
    <x-my-flashcard-detail-page-section :id="$id" />
@endsection
