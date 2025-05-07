@extends('setting::layouts.master')

@section('styles')
    <style>
        .facebook_link_btn {
            font-size: 13px;
            color: #415094;
            font-weight: 400;
        }

    </style>
@endsection

@section('mainContent')
    {{generateBreadcrumb()}}
    <section class="admin-visitor-area up_st_admin_visitor">
        <div class="container-fluid p-0">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="main-title">
                                <h3 class="mb-30">
                                    {{ __('setting.google_analytics') }} </h3>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <form action="{{ route('settings.analytics.update') }}" method="POST"
                                  id="google_analytics_form" enctype="multipart/form-data">
                                @csrf
                                <input type="hidden" name="type" value="google">
                                <div class="white_box_50px box_shadow_white mb-40 minh-430">
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="primary_input">
                                                <ul id="theme_nav" class="permission_list sms_list">
                                                    <li>
                                                        <label data-id="bg_option"
                                                               class="primary_checkbox d-flex mr-12">
                                                            <input name="google_analytics_status"
                                                                   id="google_analytics_status" value="1"
                                                                   {{Settings('google_analytics_status') == 1?'checked':''}}
                                                                   type="checkbox">
                                                            <span class="checkmark"></span>
                                                        </label>
                                                        <p>{{ __('setting.enable_google_analytics') }}</p>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <ul id="theme_nav" class="permission_list sms_list">
                                                <li>
                                                    <a class="facebook_link_btn"
                                                       href="https://console.cloud.google.com/apis"
                                                       target="_blank"><strong>{{__('setting.click_here_to_create_your_project')}}</strong></a>
                                                </li>
                                                <li>
                                                    <a class="facebook_link_btn"
                                                       href="https://analytics.google.com/analytics"
                                                       target="_blank"><strong>{{__('setting.click_here_to_create_google_analytics')}}</strong></a>
                                                </li>
                                            </ul>
                                        </div>


                                        <div class="col-lg-12 mb-25 ">
                                            <strong>{{__('setting.fill_in_the_two_fields_below_for_the_Google_Analytics_version_4')}}</strong>
                                            <strong>{{__('setting.for_reporting_version_4_see_google_analytics_panel')}}</strong>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="primary_input mb-25">
                                                <label class="primary_input_label"
                                                       for="measurement_id">{{__('setting.measurement_id')}} </label>
                                                <input class="primary_input_field" type="text" id="measurement_id"
                                                       name="MEASUREMENT_ID" autocomplete="off"
                                                       value="{{saasEnv('MEASUREMENT_ID')}}" placeholder="">

                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="primary_input mb-25">
                                                <label class="primary_input_label"
                                                       for="measurement_protocol_api_secret">{{__('setting.measurement_protocol_api_secret')}}</label>
                                                <input class="primary_input_field" type="text"
                                                       id="measurement_protocol_api_secret"
                                                       name="MEASUREMENT_PROTOCOL_API_SECRET" autocomplete="off"
                                                       value="{{saasEnv('MEASUREMENT_PROTOCOL_API_SECRET')}}"
                                                       placeholder="">

                                            </div>
                                        </div>

                                        <div class="col-lg-12 mt-40 text-center">
                                            <button type="submit"
                                                    class="primary-btn semi_large fix-gr-bg"

                                                    id="">
                                                <i class="ti-check"></i>
                                                {{ __('common.Save') }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="main-title">
                                <h3 class="mb-30">
                                    {{ __('setting.facebook_pixel') }} </h3>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <form action="{{route('settings.analytics.update')}}" method="POST"
                                  id="facebook_pixel_form">
                                @csrf
                                <input type="hidden" name="type" value="facebook">

                                <div class="white_box_50px box_shadow_white mb-40 minh-430">
                                    <div class="row">

                                        <div class="col-xl-6">
                                            <div class="primary_input">
                                                <ul id="theme_nav" class="permission_list sms_list ">
                                                    <li>
                                                        <label data-id="bg_option"
                                                               class="primary_checkbox d-flex mr-12">
                                                            <input name="facebook_pixel_status"
                                                                   id="facebook_pixel_status" value="1"
                                                                   {{Settings('facebook_pixel_status') == 1?'checked':''}} type="checkbox">
                                                            <span class="checkmark"></span>
                                                        </label>
                                                        <p>{{ __('setting.enable_facebook_pixel') }}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                        <div class="col-lg-6">
                                            <a class="facebook_link_btn" target="_blank"
                                               href="https://developers.facebook.com/docs/meta-pixel"><strong>{{__('setting.click_here_to_create_facebook_pixel')}}</strong></a>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="primary_input mb-25">
                                                <label class="primary_input_label"
                                                       for="facebook_pixel_id">{{ __('setting.facebook_pixel_id') }}
                                                    <span class="text-danger">*</span></label>
                                                <input class="primary_input_field" type="text"
                                                       id="facebook_pixel" name="facebook_pixel"
                                                       autocomplete="off"
                                                       value="{{Settings('facebook_pixel')}}"
                                                       placeholder="{{ __('setting.facebook_pixel_id') }}">
                                            </div>


                                        </div>

                                        <div class="col-lg-12 mt-40 text-center">

                                            <button type="submit"
                                                    class="primary-btn semi_large fix-gr-bg"

                                                    id="">
                                                <i class="ti-check"></i>
                                                {{ __('common.Save') }}
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
    </section>

@endsection

@push('scripts')
    <script>
        // (function ($) {
        //     "use strict";
        //     $(document).ready(function () {
        //         $(document).on('click', '#analytics_view_status', function () {
        //             if (this.checked == true) {
        //                 $('.analytics_view_div').removeClass('d-none');
        //                 $('.upload_photo_div').removeClass('d-none');
        //             } else {
        //                 $('.analytics_view_div').addClass('d-none');
        //                 $('.upload_photo_div').addClass('d-none');
        //             }
        //         });
        //
        //         $(document).on('change', '#analytics_view_status', function (event) {
        //             let status = 0;
        //             if ($('#analytics_view_status').prop('checked')) {
        //                 status = 1;
        //             }
        //             $('#dashboard_is_enable').val(status);
        //         });
        //
        //         $(document).on('change', '#json', function () {
        //             getFileName($(this).val(), '#json_file');
        //         });
        //     });
        // })(jQuery);
    </script>
@endpush
