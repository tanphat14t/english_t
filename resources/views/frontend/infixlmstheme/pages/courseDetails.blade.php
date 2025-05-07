@extends(theme('layouts.master'))
@section('title')
    {{Settings('site_title')  ? Settings('site_title')  : 'Infix LMS'}} |  {{$course->title}}
@endsection
@section('og_image')
    {{getCourseImage($course->image)}}
@endsection
@section('meta_title')
    {{$course->meta_keywords}}
@endsection
@section('meta_description')
    {{$course->meta_description}}
@endsection
@section('css')
    <style>
        .course__details .video_screen {
            background-image: url('{{getCourseImage(@$course->image)}}');
        }

        iframe {
            position: relative !important;
        }
    </style>
    <link href="{{asset('public/frontend/infixlmstheme/css/videopopup.css')}}{{assetVersion()}}" rel="stylesheet"/>
    <link href="{{asset('public/frontend/infixlmstheme/css/video.popup.css')}}{{assetVersion()}}" rel="stylesheet"/>
    <link href="{{asset('public/frontend/infixlmstheme/css/class_details.css')}}{{assetVersion()}}" rel="stylesheet"/>
    @if(isModuleActive('WaitList'))
        <link href="{{asset('public/frontend/infixlmstheme/css/select2.min.css')}}{{assetVersion()}}" rel="stylesheet"/>
    @endif
@endsection


@section('mainContent')

    <x-breadcrumb :banner="$frontendContent->course_page_banner"
                  :title="trans('frontend.Course Details')"
                  :subTitle="$course->title"/>



    <x-course-deatils-page-section :course="$course" :request="$request" :isEnrolled="$isEnrolled"/>


    @if ($course->host=='VdoCipher')

        @include(theme('partials._player_modal'))
    @endif

@endsection

@section('js')

    <script src="{{asset('public/frontend/infixlmstheme/js/class_details.js')}}"></script>
    <script src="{{asset('public/frontend/infixlmstheme/js/videopopup.js')}}"></script>
    <script src="{{asset('public/frontend/infixlmstheme/js/video.popup.js')}}"></script>
    @if(isModuleActive('WaitList'))
        <script src="{{asset('public/frontend/infixlmstheme/js/city.js')}}"></script>
        <script src="{{asset('public/frontend/infixlmstheme/js/select2.min.js')}}"></script>
    @endif
    <script>
        (function ($) {
            "use strict";
            $(document).ready(function () {
                //active tab state
                $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
                    localStorage.setItem('activeCourseTab', $(e.target).attr('href'));
                });
                let activeCourseTab = localStorage.getItem('activeCourseTab');

                if (activeCourseTab) {
                    $('a[href="' + activeCourseTab + '"]').tab('show');
                }
            });
        })(jQuery);


        $("#formSubmitBtn").on("click", function (e) {
            e.preventDefault();

            var form = $('#deleteCommentForm');
            var url = form.attr('action');
            var element = form.data('element');
            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize(),
                success: function (data) {
                    location.reload();
                }
            });
            var el = '#' + element;
            $(el).hide('slow');
            $('#deleteComment').modal('hide');

        });
    </script>

    <script>
        function deleteCommnet(item, element) {
            let form = $('#deleteCommentForm')
            form.attr('action', item);
            form.attr('data-element', element);
        }
    </script>


    <script>

        var SITEURL = "{{courseDetailsUrl($course->id,$course->type,$course->slug)}}";
        var page = 1;
        load_more(page);
        $(window).scroll(function () { //detect page scroll
            if ($(window).scrollTop() + $(window).height() >= $(document).height() - 400) {
                page++;
                load_more(page);
            }


        });

        function load_more(page) {
            $.ajax({
                url: SITEURL + "?page=" + page,
                type: "get",
                datatype: "html",
                data: {'type': 'comment'},
                beforeSend: function () {
                    $('.ajax-loading').show();
                }
            })
                .done(function (data) {
                    if (data.length == 0) {

                        //notify user if nothing to load
                        $('.ajax-loading').html("");
                        return;
                    }
                    $('.ajax-loading').hide(); //hide loading animation once data is received
                    $("#conversition_box").append(data); //append data into #results element


                })
                .fail(function (jqXHR, ajaxOptions, thrownError) {
                    console.log('No response from server');
                });

        }


        load_more_review(page);


        $(window).scroll(function () { //detect page scroll
            if ($(window).scrollTop() + $(window).height() >= $(document).height() - 400) {
                page++;
                load_more_review(page);
            }


        });

        function load_more_review(page) {
            $.ajax({
                url: SITEURL + "?page=" + page,
                type: "get",
                datatype: "html",
                data: {'type': 'review'},
                beforeSend: function () {
                    $('.ajax-loading').show();
                }
            })
                .done(function (data) {
                    if (data.length == 0) {

                        //notify user if nothing to load
                        $('.ajax-loading').html("");
                        return;
                    }
                    $('.ajax-loading').hide(); //hide loading animation once data is received
                    $("#customers_reviews").append(data); //append data into #results element


                })
                .fail(function (jqXHR, ajaxOptions, thrownError) {
                    console.log('No response from server');
                });

        }


    </script>

@endsection
