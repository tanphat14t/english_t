<div class="aoraeditor-skip aoraeditor-header">
    <style>
        .header_area .main_menu ul li ul.leftcontrol_submenu {
            left: auto !important;
            right: 100% !important;
        }

        .logo_img {
            max-width: 150px;
            min-width: 150px;

            height: 80px;
            display: inline-block;
        }

        .logo_img img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        @media (max-width: 991.98px) {
            .logo_img {
                height: auto
            }

            .logo_img {
                min-width: 130px;
            }
        }

        /* drop down menu index issue */

        .profile_info.active .profile_info_iner {
            z-index: 999999999;
        }

        @media (max-width: 768px) {
            .header__right.login_user .profile_info_iner {
                top: 40px;
            }
        }

        @media (max-width: 576px) {
            .header__right.login_user .profile_info_iner {
                top: 70px;
            }
        }
    </style>

    <!-- HEADER::START -->

    <header class="primary-header">
        <div class="navigation-bar cs-container">
            <nav class="navbar">
                <div class="nav-left d-flex align-items-center">
                    <div class="ic-hamburger d-flex d-lg-none">
                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuIcon">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </div>
                    <div class="nav-logo me-2">
                        <a href="/">
                            <img src="{{ asset('/public/images/ms_ling_logo.png') }}" alt="">
                        </a>
                    </div>
                    <div class="search-box d-none d-lg-block">
                        <form action="" class="search">
                            <button class="btn-search">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                    </path>
                                </svg>
                            </button>
                            <input placeholder="Tìm kiếm..." type="text">
                        </form>
                    </div>
                </div>
                <!-- <div class="nav-left d-flex d-lg-none align-items-center">
                    <div class="ic-hamburger">
                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuIcon">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </div>
                    <div class="nav-logo">
                        <a href="/">
                            <img src="public/images/logo.svg" alt="">
                        </a>
                    </div>
                </div> -->
                <div class="categories">
                    <a class="current" href="/">
                        <span><img src="{{ asset('/public/images/ic-home.svg') }}" alt=""></span>
                        Trang chủ
                    </a>
                    <a href="/">
                        <span><img src="{{ asset('/public/images/ic-news.svg') }}" alt=""></span>
                        Blog
                    </a>
                </div>
                <div class="action">
                    <div class="ic-action">
                        <img src="{{ asset('/public/images/ic-action.svg') }}" alt="">
                    </div>
                    <a class="btn btn-login" href="/">
                        Đăng nhập
                    </a>
                    <a class="btn btn-register" href="/">
                        Đăng ký
                    </a>
                </div>

                <div class="action is-loged-in d-none">
                    <div class="action-button">
                        <img src="{{ asset('/public/images/default-avatar.webp') }}" alt="">
                    </div>
                    <div class="user-menu">
                        <div class="user-info">
                            <div class="user-avatar">
                                <img src="{{ asset('/public/images/default-avatar.webp') }}" alt="">
                            </div>
                            <div class="user-details">
                                <p class="user-name">Nguyễn Linh</p>
                                <p class="user-email">nguyenhphp@gmail.com</p>
                            </div>
                        </div>
                        <a href="/">
                            <div class="user-menu-item">
                                <img src="{{ asset('/public/images/user.svg') }}" alt="">
                                Trang cá nhân
                            </div>
                        </a>
                        <a href="/">
                            <div class="user-menu-item">
                                <img src="{{ asset('/public/images/my-course1.svg') }}" alt="">
                                Khóa học của tôi
                            </div>
                        </a>
                        <a href="/">
                            <div class="user-menu-item">
                                <img src="{{ asset('/public/images/cart-menu.svg') }}" alt="">Lịch sử đơn hàng
                            </div>
                        </a>
                        <a href="/">
                            <div class="user-menu-item">
                                <img src="{{ asset('/public/images/reserve.svg') }}" alt="">Bảo lưu
                            </div>
                        </a>
                        <a href="/">
                            <div class="user-menu-item">
                                <img src="{{ asset('/public/images/sign-out.svg') }}" alt="">Đăng xuất
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    
    @if (Settings('category_show'))
        <div class="side_cate">
            <div class="side_cate_close"><i class="ti ti-close"></i></div>
            <div class="side_cate_wrap">
                <ul class="side_cate_wrap_menu">

                    @if (isset($categories))
                        @foreach ($categories as $category)
                            @include(theme('partials._mobile_category'), [
                                'category' => $category,
                                'level' => 1,
                            ])
                        @endforeach
                    @endif
                </ul>
            </div>
        </div>
    @endif
    {{-- @if (Settings('show_cart') == 1)
        <a href="#" class="float notification_wrapper cart_icon">
            <div class="notify_icon cart_store" style="padding-top: 7px">
                <img style="max-width: 30px;" src="{{asset('/public/frontend/infixlmstheme/')}}/img/svg/cart_white.svg"
                     alt="">
            </div>
            <span class="notify_count">{{@cartItem()}}</span>
        </a>
    @endif --}}
</div>
