<div class="aoraeditor-skip aoraeditor-footer">
    <x-popup-content />
    <footer class="{{ Settings('footer_show') == 0 ? 'd-none d-sm-none d-md-block d-lg-block d-xl-block' : '' }}">
        @if (@$homeContent->show_subscribe_section == 1)
            <x-footer-news-letter />
        @endif
    </footer>

    <div class="shoping_wrapper">
        <div class="dark_overlay"></div>
        <div class="shoping_cart">
            <div class="shoping_cart_inner">
                <div class="cart_header d-flex justify-content-between">
                    <h4>{{ __('frontend.Shopping Cart') }}</h4>
                    <div class="chart_close">
                        <i class="ti-close"></i>
                    </div>
                </div>
                <div id="cartView">
                    <div class="single_cart">
                        Loading...
                    </div>
                </div>


            </div>
            <div class="view_checkout_btn d-flex justify-content-end gap_10 flex-wrap" style="display: none!important;">
                <a href="{{ url('my-cart') }}"
                    class="theme_btn small_btn3 flex-fill text-center">{{ __('frontend.View cart') }}</a>
                <a href="{{ route('myCart', ['checkout' => true]) }}"
                    class="theme_btn small_btn3 flex-fill text-center">{{ __('frontend.Checkout') }}</a>
            </div>
        </div>
    </div>
    <!-- shoping_cart::end  -->

    <!-- UP_ICON  -->
    <div id="back-top" style="display: none;">
        <a title="Go to Top" href="#">
            <i class="fa fa-angle-up"></i>
        </a>
    </div>

    <input type="hidden" name="item_list" class="item_list" value="{{ url('getItemList') }}">
    <input type="hidden" name="enroll_cart" class="enroll_cart" value="{{ url('enrollOrCart') }}">
    <input type="hidden" name="csrf_token" class="csrf_token" value="{{ csrf_token() }}">
    <!--/ UP_ICON -->

    <x-footer-cookie />

    <div class="modal fade leaderboard-boarder" id="myLeaderBoard" tabindex="-1" role="dialog"
        aria-labelledby="myLeaderBoard" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5" id="">{{ __('common.Leaderboard') }}</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="reward-leader">
                        <ul class="nav nav-tabs border-bottom-0 m-0" id="myTab" role="tablist">
                            @if (Settings('gamification_leaderboard_show_point_status'))
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link  nav-point type-point" id="point-tab" data-toggle="tab"
                                        data-target="#point" data-type="point" type="button" role="tab"
                                        aria-controls="point" aria-selected="true">{{ __('setting.Points') }}
                                    </button>
                                </li>
                            @endif
                            @if (Settings('gamification_leaderboard_show_level_status'))
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link nav-point type-level" id="level-tab" data-toggle="tab"
                                        data-target="#level" data-type="level" type="button" role="tab"
                                        aria-controls="level" aria-selected="true">{{ __('setting.Levels') }}
                                    </button>
                                </li>
                            @endif
                            @if (Settings('gamification_leaderboard_show_badges_status'))
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link nav-point type-badge" id="badge-tab" data-toggle="tab"
                                        data-target="#badge" data-type="badge" type="button" role="tab"
                                        aria-controls="badge" aria-selected="true">{{ __('setting.Badges') }}
                                    </button>
                                </li>
                            @endif
                            @if (Settings('gamification_leaderboard_show_courses_status'))
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link nav-point type-courses" id="courses-tab" data-toggle="tab"
                                        data-target="#courses" data-type="courses" type="button" role="tab"
                                        aria-controls="courses" aria-selected="true">{{ __('courses.Courses') }}
                                    </button>
                                </li>
                            @endif
                            @if (Settings('gamification_leaderboard_show_certificate_status'))
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link nav-point type-certificate" id="certificate-tab"
                                        data-toggle="tab" data-target="#certificate" data-type="certificate"
                                        type="button" role="tab" aria-controls="certificate"
                                        aria-selected="true">{{ __('setting.certificates') }}
                                    </button>
                                </li>
                            @endif
                        </ul>
                        <div id="leaderboardBody" class="leaderboardBody"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade noticeboard-modal" id="myNoticeboard" tabindex="-1" role="dialog"
        aria-labelledby="myNoticeboard" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered" id="myNoticeboardBody">

        </div>
    </div>
    <div class="modal modal-action modal-login show" tabindex="-1">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Đăng nhập</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="auth-form">
                        <form>
                            <div class="auth-form-item">
                                <div class="input-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"
                                        x="0" y="0" viewBox="0 0 460.8 460.8" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M230.432 239.282c65.829 0 119.641-53.812 119.641-119.641C350.073 53.812 296.261 0 230.432 0s-119.64 53.812-119.64 119.641 53.812 119.641 119.64 119.641zM435.755 334.89c-3.135-7.837-7.314-15.151-12.016-21.943-24.033-35.527-61.126-59.037-102.922-64.784-5.224-.522-10.971.522-15.151 3.657-21.943 16.196-48.065 24.555-75.233 24.555s-53.29-8.359-75.233-24.555c-4.18-3.135-9.927-4.702-15.151-3.657-41.796 5.747-79.412 29.257-102.922 64.784-4.702 6.792-8.882 14.629-12.016 21.943-1.567 3.135-1.045 6.792.522 9.927 4.18 7.314 9.404 14.629 14.106 20.898 7.314 9.927 15.151 18.808 24.033 27.167 7.314 7.314 15.673 14.106 24.033 20.898 41.273 30.825 90.906 47.02 142.106 47.02s100.833-16.196 142.106-47.02c8.359-6.269 16.718-13.584 24.033-20.898 8.359-8.359 16.718-17.241 24.033-27.167 5.224-6.792 9.927-13.584 14.106-20.898 2.611-3.135 3.133-6.793 1.566-9.927z"
                                                fill="var(--extend-secondary-color, #000000)" opacity="1"
                                                data-original="#000000"></path>
                                        </g>
                                    </svg>
                                    <input autocomplete="username" placeholder="Tài khoản đăng nhập" type="text"
                                        value="">
                                </div>
                            </div>
                            <div class="auth-form-item">
                                <div class="input-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"
                                        x="0" y="0" viewBox="0 0 35 35" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M17.5 1.498c-4.412 0-8 3.59-8 8v5.004h-1c-1.93 0-3.5 1.57-3.5 3.5v12c0 1.93 1.57 3.5 3.5 3.5h18c1.93 0 3.5-1.57 3.5-3.5v-12c0-1.93-1.57-3.5-3.5-3.5h-1V9.498c0-4.41-3.59-8-8-8zm-5 8c0-2.756 2.243-5 5-5s5 2.244 5 5v5.004h-10zM12 25.512c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                                                fill="var(--extend-secondary-color, #000000)" opacity="1"
                                                data-original="#000000"></path>
                                        </g>
                                    </svg>
                                    <input autocomplete="new-password" name="password" placeholder="Mật khẩu"
                                        type="password" value="">
                                </div>
                            </div>
                            <div class="forgot-password">
                                <span class="forgot-password-item">Quên mật khẩu</span>
                            </div>
                            <div class="d-inline-grid mt-3 w-100">
                                <button class="form-btn-login dialog-button" tabindex="0" type="submit">Đăng
                                    nhập</button>
                                <div class="d-flex justify-content-center">Không có tài khoản?&nbsp;
                                    <span class="dialog-link">Đăng ký ngay </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal modal-action modal-register show" tabindex="-1">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Đăng ký</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="auth-form">
                        <form>
                            <div class="wrapper row g-0">
                                <div class="col-12 col-md-6 px-md-1">
                                    <h4 class="dialog-sub-title">1. Thông tin tài khoản</h4>
                                    <div class="auth-form-item">
                                        <div class="input-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="25"
                                                height="25" x="0" y="0" viewBox="0 0 460.8 460.8"
                                                xml:space="preserve">
                                                <g>
                                                    <path
                                                        d="M230.432 239.282c65.829 0 119.641-53.812 119.641-119.641C350.073 53.812 296.261 0 230.432 0s-119.64 53.812-119.64 119.641 53.812 119.641 119.64 119.641zM435.755 334.89c-3.135-7.837-7.314-15.151-12.016-21.943-24.033-35.527-61.126-59.037-102.922-64.784-5.224-.522-10.971.522-15.151 3.657-21.943 16.196-48.065 24.555-75.233 24.555s-53.29-8.359-75.233-24.555c-4.18-3.135-9.927-4.702-15.151-3.657-41.796 5.747-79.412 29.257-102.922 64.784-4.702 6.792-8.882 14.629-12.016 21.943-1.567 3.135-1.045 6.792.522 9.927 4.18 7.314 9.404 14.629 14.106 20.898 7.314 9.927 15.151 18.808 24.033 27.167 7.314 7.314 15.673 14.106 24.033 20.898 41.273 30.825 90.906 47.02 142.106 47.02s100.833-16.196 142.106-47.02c8.359-6.269 16.718-13.584 24.033-20.898 8.359-8.359 16.718-17.241 24.033-27.167 5.224-6.792 9.927-13.584 14.106-20.898 2.611-3.135 3.133-6.793 1.566-9.927z"
                                                        fill="var(--extend-secondary-color, #000000)" opacity="1"
                                                        data-original="#000000"></path>
                                                </g>
                                            </svg>
                                            <input autocomplete="username" placeholder="Tài khoản đăng nhập"
                                                type="text" value="">
                                        </div>
                                    </div>
                                    <div class="auth-form-item">
                                        <div class="input-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="25"
                                                height="25" x="0" y="0" viewBox="0 0 35 35" xml:space="preserve">
                                                <g>
                                                    <path
                                                        d="M17.5 1.498c-4.412 0-8 3.59-8 8v5.004h-1c-1.93 0-3.5 1.57-3.5 3.5v12c0 1.93 1.57 3.5 3.5 3.5h18c1.93 0 3.5-1.57 3.5-3.5v-12c0-1.93-1.57-3.5-3.5-3.5h-1V9.498c0-4.41-3.59-8-8-8zm-5 8c0-2.756 2.243-5 5-5s5 2.244 5 5v5.004h-10zM12 25.512c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                                                        fill="var(--extend-secondary-color, #000000)" opacity="1"
                                                        data-original="#000000"></path>
                                                </g>
                                            </svg>
                                            <input autocomplete="new-password" name="password" placeholder="Mật khẩu"
                                                type="password" value="">
                                        </div>
                                    </div>
                                    <div class="auth-form-item">
                                        <div class="input-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="25"
                                                height="25" x="0" y="0" viewBox="0 0 35 35" xml:space="preserve">
                                                <g>
                                                    <path
                                                        d="M17.5 1.498c-4.412 0-8 3.59-8 8v5.004h-1c-1.93 0-3.5 1.57-3.5 3.5v12c0 1.93 1.57 3.5 3.5 3.5h18c1.93 0 3.5-1.57 3.5-3.5v-12c0-1.93-1.57-3.5-3.5-3.5h-1V9.498c0-4.41-3.59-8-8-8zm-5 8c0-2.756 2.243-5 5-5s5 2.244 5 5v5.004h-10zM12 25.512c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                                                        fill="var(--extend-secondary-color, #000000)" opacity="1"
                                                        data-original="#000000"></path>
                                                </g>
                                            </svg>
                                            <input autocomplete="new-password" name="confirmPassword"
                                                placeholder="Xác nhận mật khẩu" type="password" value="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-md-1">
                                    <h4 class="dialog-sub-title">2. Thông tin cá nhân</h4>
                                    <div class="auth-form-item">
                                        <div class="input-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="25"
                                                height="25" x="0" y="0" viewBox="0 0 460.8 460.8"
                                                xml:space="preserve">
                                                <g>
                                                    <path
                                                        d="M230.432 239.282c65.829 0 119.641-53.812 119.641-119.641C350.073 53.812 296.261 0 230.432 0s-119.64 53.812-119.64 119.641 53.812 119.641 119.64 119.641zM435.755 334.89c-3.135-7.837-7.314-15.151-12.016-21.943-24.033-35.527-61.126-59.037-102.922-64.784-5.224-.522-10.971.522-15.151 3.657-21.943 16.196-48.065 24.555-75.233 24.555s-53.29-8.359-75.233-24.555c-4.18-3.135-9.927-4.702-15.151-3.657-41.796 5.747-79.412 29.257-102.922 64.784-4.702 6.792-8.882 14.629-12.016 21.943-1.567 3.135-1.045 6.792.522 9.927 4.18 7.314 9.404 14.629 14.106 20.898 7.314 9.927 15.151 18.808 24.033 27.167 7.314 7.314 15.673 14.106 24.033 20.898 41.273 30.825 90.906 47.02 142.106 47.02s100.833-16.196 142.106-47.02c8.359-6.269 16.718-13.584 24.033-20.898 8.359-8.359 16.718-17.241 24.033-27.167 5.224-6.792 9.927-13.584 14.106-20.898 2.611-3.135 3.133-6.793 1.566-9.927z"
                                                        fill="var(--extend-secondary-color, #000000)" opacity="1"
                                                        data-original="#000000"></path>
                                                </g>
                                            </svg>
                                            <input autocomplete="username" name="fullname" placeholder="Họ và tên"
                                                type="text" value="">
                                        </div>
                                    </div>
                                    <div class="auth-form-item">
                                        <div class="input-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="25"
                                                height="25" x="0" y="0" viewBox="0 0 512 512"
                                                xml:space="preserve">
                                                <g>
                                                    <path fill-rule="evenodd"
                                                        d="m62.843 98.364 138.32 138.38c30.168 30.11 79.482 30.136 109.675 0l138.32-138.38a3.144 3.144 0 0 0-.426-4.814c-14.108-9.839-31.273-15.672-49.763-15.672H113.033c-18.491 0-35.656 5.834-49.764 15.672a3.144 3.144 0 0 0-.426 4.814zm-36.964 66.667a86.483 86.483 0 0 1 9.955-40.353 3.144 3.144 0 0 1 5.019-.762l136.569 136.569c43.247 43.31 113.885 43.335 157.158 0l136.569-136.569a3.144 3.144 0 0 1 5.019.762 86.498 86.498 0 0 1 9.955 40.353v181.937c0 48.093-39.121 87.154-87.154 87.154H113.033c-48.032 0-87.154-39.061-87.154-87.154z"
                                                        clip-rule="evenodd"
                                                        fill="var(--extend-secondary-color, #000000)" opacity="1"
                                                        data-original="#000000"></path>
                                                </g>
                                            </svg>
                                            <input autocomplete="email" name="email" placeholder="Email"
                                                type="email" value="">
                                        </div>
                                    </div>
                                    <div class="auth-form-item">
                                        <div class="input-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="25"
                                                height="25" x="0" y="0" viewBox="0 0 513.64 513.64"
                                                xml:space="preserve">
                                                <g>
                                                    <path
                                                        d="m499.66 376.96-71.68-71.68c-25.6-25.6-69.12-15.359-79.36 17.92-7.68 23.041-33.28 35.841-56.32 30.72-51.2-12.8-120.32-79.36-133.12-133.12-7.68-23.041 7.68-48.641 30.72-56.32 33.28-10.24 43.52-53.76 17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12 0L18.38 62.08c-48.64 51.2 5.12 186.88 125.44 307.2s256 176.641 307.2 125.44l48.64-48.64c17.921-20.48 17.921-51.2 0-69.12z"
                                                        fill="var(--extend-secondary-color, #000000)" opacity="1"
                                                        data-original="#000000"></path>
                                                </g>
                                            </svg>
                                            <input autocomplete="phonenumber" name="phone"
                                                placeholder="Số điện thoại" type="text" value="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-inline-grid mt-3 w-100">
                                <button class="form-btn-register dialog-button" tabindex="0" type="submit">Đăng
                                    nhập</button>
                                <div class="d-flex justify-content-center">Đã có tài khoản?&nbsp;
                                    <span class="dialog-link">Đăng nhập ngay </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal modal-action modal-pause show" tabindex="-1">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Tạm dừng</h5>
                </div>
                <div class="modal-body">
                    <p>bạn có muốn tạm dừng không</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-cancel" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn-pause">Tạm dừng</button>
                </div>
            </div>
        </div>
    </div>
    <script src="{{ asset('public/frontend/infixlmstheme/js/app.js' . assetVersion()) }}"></script>

    <script src="{{ asset('public/backend/js/summernote-bs4.min.js') }}{{ assetVersion() }}"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key={{ Settings('gmap_key') }}"></script>
    <script src="{{ asset('public/frontend/infixlmstheme/js/map.js') }}"></script>
    <script src="{{ asset('public/frontend/infixlmstheme/js/contact.js') }}{{ assetVersion() }}"></script>
    <script src="{{ asset('public/frontend/infixlmstheme/js/main.js') }}{{ assetVersion() }}"></script>

    {!! Toastr::message() !!}

    @if ($errors->any())
        <script>
            @foreach ($errors->all() as $error)
                toastr.error('{{ $error }}', 'Error', {
                    closeButton: true,
                    progressBar: true,
                });
            @endforeach
        </script>
    @endif


    @if (isModuleActive('Store'))
        <script src="{{ asset('public/frontend/infixlmstheme/js/store_script.js') }}{{ assetVersion() }}"></script>
        <script src="{{ asset('public/frontend/infixlmstheme/js/select2.min.js') }}{{ assetVersion() }}"></script>
    @endif

    @yield('js')
    @stack('js')
    <script>
        setTimeout(function() {
            $('.preloader').fadeOut('hide', function() {
                // $(this).remove();

            });
        }, 0);


        $('#cartView').on('click', '.remove_cart', function() {
            let id = $(this).data('id');
            let total = $('.notify_count').html();

            $(this).closest(".single_cart").hide();
            let url = "{{ url('/home/removeItemAjax') }}" + '/' + id;

            $.ajax({
                type: 'GET',
                url: url,
                success: function(data) {
                    let finalTotal = total - 1;
                    if (finalTotal < 0) {
                        finalTotal = 0
                    }
                    $('.notify_count').html(finalTotal);
                }
            });
        });

        $(function() {
            $('.lazy').Lazy();
        });
    </script>
    @auth
        @if ((int) Settings('device_limit_time') != 0)
            @if (\Illuminate\Support\Facades\Auth::user()->role_id == 3)
                <script>
                    function update() {
                        $.ajax({
                            type: 'GET',
                            url: "{{ url('/') }}" + "/update-activity",
                            success: function(data) {


                            }
                        });
                    }

                    var intervel = "{{ Settings('device_limit_time') }}"
                    var time = (intervel * 60) - 20;

                    setInterval(function() {
                        update();
                    }, time * 1000);
                </script>
            @endif
        @endif
    @endauth
    <script>
        $(document).on('click', '.show_notify', function(e) {
            e.preventDefault();

            console.log('notify');
        });
        if ($('#main-nav-for-chat').length) {} else {
            $('#main-content').append('<div id="main-nav-for-chat" style="visibility: hidden;"></div>');
        }

        if ($('#admin-visitor-area').length) {} else {
            $('#main-content').append('<div id="admin-visitor-area" style="visibility: hidden;"></div>');
        }
    </script>


    @if (str_contains(request()->url(), 'chat'))
        <script src="{{ asset('public/backend/js/jquery-ui.js') }}{{ assetVersion() }}"></script>
        <script src="{{ asset('public/frontend/infixlmstheme/js/select2.min.js') }}{{ assetVersion() }}"></script>
        <script src="{{ asset('public/js/app.js') }}{{ assetVersion() }}"></script>
        <script src="{{ asset('public/chat/js/custom.js') }}{{ assetVersion() }}"></script>
    @endif

    @if (auth()->check() && auth()->user()->role_id == 3 && !str_contains(request()->url(), 'chat'))
        <script src="{{ asset('public/js/app.js') }}{{ assetVersion() }}"></script>
    @endif


    @if (isModuleActive('WhatsappSupport'))
        <script src="{{ asset('public/whatsapp-support/scripts.js') }}{{ assetVersion() }}"></script>

        @include('whatsappsupport::partials._popup')
    @endif

    <script src="{{ asset('public/frontend/infixlmstheme/js/custom.js') }}{{ assetVersion() }}"></script>
    @if (Settings('gamification_status') && Settings('gamification_leaderboard_status'))
        <script>
            $(document).on("click", ".point_btn", function() {
                let modal = $('#myLeaderBoard')
                modal.modal('show');
                let type = modal.find('.nav-link.active').data('type');
                if (type == undefined) {
                    let link = modal.find('.nav-link:first');
                    link.addClass('active')
                    type = link.data('type');

                }
                loadData(type);
            });
            $(document).on("click", ".how_to_point", function() {
                let modal = $('#myLeaderBoard')
                modal.modal('show');
                let link = modal.find('.nav-link:first');
                link.addClass('active')
                loadData('how_to_point')
            });

            $(document).on("click", ".nav-point", function() {
                let type = $(this).data('type');
                loadData(type);
            });

            function loadData(type, id = 0) {
                let body = $('#leaderboardBody');
                let url = '{{ url('/') }}';
                let formData = {
                    type: type,
                    id: id,
                };
                body.html(
                    '<div class="d-flex align-items-center justify-content-center py-3"><i class="fas fa-spinner  fa-spin"></i></div>'
                )


                $.ajax({
                    type: "get",
                    data: formData,
                    dataType: "html",
                    url: url + '/my-leaderboard',
                    success: function(data) {
                        body.html(data);
                    },
                    error: function(data) {
                        body.html("");
                    }

                });
            }
        </script>
    @endif
    </body>

    </html>
</div>

<div class="overlay"></div>
