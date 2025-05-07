@extends(theme('layouts.dashboard_master'))
@section('title')
    {{Settings('site_title')  ? Settings('site_title')  : 'Infix LMS'}} | {{__('blog.Add Post')}}
@endsection
@section('css')
    <link href="{{asset('public/backend/css/summernote-bs4.min.css/')}}{{assetVersion()}}" rel="stylesheet">
    <link rel="stylesheet"
          href="{{asset('Modules/Blog/Resources/views/assets/taginput/tagsinput.css')}}{{assetVersion()}}"/>
    <link rel="stylesheet" href="{{asset('Modules/Blog/Resources/views/assets/frontend.css')}}{{assetVersion()}}"/>
    <style>

        input[type="date"]::-webkit-calendar-picker-indicator, input[type="time"]::-webkit-calendar-picker-indicator {
            background: transparent;
            bottom: 0;
            color: transparent;
            cursor: pointer;
            height: auto;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            width: auto;
        }
    </style>
@endsection
@section('js')
    <script src="{{asset('public/backend/js/summernote-bs4.min.js')}}{{assetVersion()}}"></script>
    <script src="{{asset('Modules/Blog/Resources/views/assets/taginput/tagsinput.js')}}{{assetVersion()}}"></script>
    <script src="{{asset('Modules/Blog/Resources/views/assets/frontend.js')}}{{assetVersion()}}"></script>

@endsection

@section('mainContent')
    <div class="main_content_iner main_content_padding">
        <div class="dashboard_lg_card">
            <div class="container-fluid no-gutters">
                <div class="my_courses_wrapper">
                    <div class="row">
                        <div class="col-12">
                            <div class="section__title3 margin-50">
                                <h5>
                                    {{ __("blog.Add Post") }}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-5">
                        <div class="col-12">
                            <form enctype="multipart/form-data" action='{{ route('users.blogs.store') }}' method="post">
                                @csrf
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class='primary_label2'>{{ __("blog.Title") }} *</label>
                                            <input type="text" class="primary_input4" name='title[en]' id="blog_title"
                                                   placeholder="Enter Blog Title">
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class='primary_label2'>{{ __("blog.Description") }}</label>
                                            <textarea class="lms_summernote" name="description[en]"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class='primary_label2'>{{ __("blog.Slug") }} *</label>
                                            <input type="text" class="primary_input4" name='slug' id="slug">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label class='primary_label2'>{{ __("blog.Category") }}*</label>
                                            <select name="category" class="theme_select my-course-select w-100">
                                                <option value="" data-display="{{ __('blog.Category') }}">
                                                    {{ __('blog.Category') }}</option>
                                                @foreach ($categories as $category)
                                                    <option value="{{ $category->id }}">{{ $category->title }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label class='primary_label2'>{{ __("blog.Tags") }}</label>
                                            <input type="text" data-role="tagsinput" name="tags"
                                                   style="min-width: 100px"
                                                   class="primary_input4">
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-5">
                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <div class="form-group">
                                            <label class='primary_label2'>{{__('blog.Thumbnail')}}</label>
                                            <input type="file" name="image" id="imageInput">
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <div id="imagePreviewContainer">
                                            <img id="imagePreview" src="#" alt=""
                                                 class="img-thumbnail" style="max-width: 200px">
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <div class="form-group">
                                            <label class='primary_label2'>{{__("blog.Publish Date")}}</label>
                                            <input type="date" id="publish_date" name="publish_date"
                                                   class="primary_input4 date">
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <div class="form-group">
                                            <label class='primary_label2'>{{__("blog.Publish Time")}}</label>
                                            <input type="time" id="start_time" name="publish_time"
                                                   class="primary_input4 time">
                                        </div>
                                    </div>

                                </div>

                                <div class="row mt-4">
                                    <div class="col-lg-12">
                                        <button class="theme_btn mt-3 text-center">{{__('common.Save')}}</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function () {
            // Listen for the change event on the file input
            $('#imageInput').change(function () {
                // Get the selected file
                var file = this.files[0];

                // Check if a file is selected
                if (file) {
                    // Create a FileReader object
                    var reader = new FileReader();

                    // Set up the FileReader to display the image preview
                    reader.onload = function (e) {
                        $('#imagePreview').attr('src', e.target.result);
                    };

                    // Read the selected file as a data URL
                    reader.readAsDataURL(file);

                    // Show the image preview container
                    $('#imagePreviewContainer').show();
                } else {
                    // If no file is selected, hide the image preview container
                    $('#imagePreviewContainer').hide();
                }
            });
        });
    </script>
@endsection
