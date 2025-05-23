@php
    $user =auth()->user();
@endphp
<div class="header_iner d-flex justify-content-between align-items-center">
    <div class="sidebar_icon d-lg-none">
        <i class="ti-menu"></i>
    </div>
    <div class="category_search d-flex category_box_iner">

        {{--        <div class="input-group-prepend2">--}}
        {{--            <a href="#" class="categories_menu">--}}
        {{--                <i class="fas fa-th"></i>--}}
        {{--                {{__('courses.Category')}}--}}
        {{--            </a>--}}

        {{--            <div class="menu_dropdown">--}}
        {{--                <ul>--}}
        {{--                    @if(isset($categories ))--}}
        {{--                        @foreach($categories  as $category)--}}
        {{--                            <li class="mega_menu_dropdown active_menu_item">--}}
        {{--                                <a href="{{route('categoryCourse',[$category->id,$category->slug])}}">{{$category->name}}</a>--}}
        {{--                                @if(isset($category->activeSubcategories))--}}
        {{--                                    @if(count($category->activeSubcategories)!=0)--}}
        {{--                                        <ul>--}}
        {{--                                            <li>--}}
        {{--                                                <div class="menu_dropdown_iner d-flex">--}}
        {{--                                                    <div class="single_menu_dropdown">--}}
        {{--                                                        <h4>{{__('courses.Sub Category')}}</h4>--}}
        {{--                                                        <ul>--}}
        {{--                                                            @if(isset($category->activeSubcategories))--}}
        {{--                                                                @foreach( $category->activeSubcategories as $subcategory)--}}
        {{--                                                                    <li>--}}
        {{--                                                                        <a href="{{route('subCategory.course',[$subcategory->id,$subcategory->slug])}}">{{$subcategory->name}}</a>--}}
        {{--                                                                    </li>--}}
        {{--                                                                @endforeach--}}
        {{--                                                            @endif--}}
        {{--                                                        </ul>--}}
        {{--                                                    </div>--}}

        {{--                                                </div>--}}
        {{--                                            </li>--}}
        {{--                                        </ul>--}}
        {{--                                    @endif--}}
        {{--                                @endif--}}
        {{--                            </li>--}}
        {{--                        @endforeach--}}
        {{--                    @endif--}}
        {{--                </ul>--}}
        {{--            </div>--}}
        {{--        </div>--}}
        <form action="{{route('search')}}">
            <div class="input-group theme_search_field ">
                <div class="input-group-prepend">
                    <button class="btn" type="button" id="button-addon1"><i
                            class="ti-search"></i>
                    </button>
                </div>

                <input type="text" class="form-control" name="query"
                       placeholder="{{__('frontend.Search for course, skills and Videos')}}"
                       onfocus="this.placeholder = ''"
                       onblur="this.placeholder = '{{__('frontend.Search for course, skills and Videos')}}'">

            </div>
        </form>
    </div>
    <div class="d-flex align-items-center">
        <div class="notification_wrapper" id="main-nav-for-chat">
            <ul>

                <li class="notification_open">
                    <a href="#" class="notify_icon">
                        <div class="notify_icon">
                            <img src="{{asset('/public/frontend/infixlmstheme/')}}/img/svg/bell.svg" alt="">
                            {{-- <i class="ti-bell"></i> --}}
                        </div>
                        @if($user->unreadNotifications->count()!=0)
                            <span class="notify_count"></span>
                        @endif
                    </a>
                    <div class="notification_area">
                        <div class="notification_body">
                            @foreach ($user->unreadNotifications as $notification)
                                <a href="{{$notification->data['actionURL']??'#'}}"
                                   class="single_nofy unread_notification"
                                   title="Mark As Read" data-notification_id="{{$notification->id}}">
                                    <div class="notyfy_content">
                                        <h4>  {!! strip_tags($notification->data['body']) !!}</h4>
                                        <p>{{$notification->created_at->diffForHumans()}}</p>
                                    </div>
                                </a>
                            @endforeach
                            @if($user->unreadNotifications->count()==0)
                                <a href="#" class="single_nofy align-items-center justify-content-center">
                                    <div class="notyfy_content ">
                                        <h4> {{__('frontend.No unread notification')}}</h4>
                                    </div>

                                </a>
                            @endif
                        </div>
                        <div class="notification_footer ">
                            <div class="d-flex align-items-center justify-content-between flex-wrap px-3">

                                <a href="{{route('myNotification')}}"
                                   class="readMore_text w-50  ">{{__('common.View All')}}</a>

                                <a href="{{route('NotificationMakeAllRead')}}"
                                   class="readMore_text  w-50">{{__('common.Mark As Read')}}</a>

                            </div>
                            @if (permissionCheck('myNotificationSetup'))
                                <div class="d-flex align-items-center justify-content-center flex-wrap px-3">
                                    <a href="{{route('myNotificationSetup')}}"
                                       class=" w-100  ">
                                        <i class="fas fa-cog"></i>
                                        {{__('setting.Notification')}} {{__('setting.Setup')}}
                                    </a>
                                </div>
                            @endif
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="profile_info collaps_part">
            <div class="profile_img collaps_icon     d-flex align-items-center">

                <div class="profile_info_icon collaps_icon">
                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 12.7273C13.3185 12.7273 14.6075 12.3541 15.7038 11.6548C16.8001 10.9556 17.6546 9.9617 18.1592 8.7989C18.6638 7.63609 18.7958 6.35658 18.5386 5.12216C18.2813 3.88773 17.6464 2.75384 16.714 1.86387C15.7817 0.973898 14.5938 0.367821 13.3006 0.122278C12.0074 -0.123264 10.667 0.00275726 9.44878 0.484406C8.2306 0.966054 7.18941 1.7817 6.45687 2.82819C5.72433 3.87469 5.33333 5.10503 5.33333 6.36364C5.33545 8.05076 6.03851 9.6682 7.28829 10.8612C8.53808 12.0542 10.2325 12.7253 12 12.7273ZM12 2.54546C12.7911 2.54546 13.5645 2.76939 14.2223 3.18894C14.8801 3.60848 15.3928 4.2048 15.6955 4.90248C15.9983 5.60016 16.0775 6.36787 15.9231 7.10853C15.7688 7.84918 15.3878 8.52952 14.8284 9.0635C14.269 9.59748 13.5563 9.96113 12.7804 10.1085C12.0044 10.2558 11.2002 10.1802 10.4693 9.89118C9.73836 9.60219 9.11365 9.1128 8.67412 8.48491C8.2346 7.85701 8 7.1188 8 6.36364C8 5.35099 8.42143 4.37982 9.17157 3.66378C9.92172 2.94773 10.9391 2.54546 12 2.54546ZM1.33333 28H22.6667C23.0203 28 23.3594 27.8659 23.6095 27.6272C23.8595 27.3885 24 27.0648 24 26.7273C24 23.6893 22.7357 20.7758 20.4853 18.6277C18.2348 16.4795 15.1826 15.2727 12 15.2727C8.8174 15.2727 5.76515 16.4795 3.51472 18.6277C1.26428 20.7758 4.74244e-08 23.6893 0 26.7273C0 27.0648 0.140476 27.3885 0.390524 27.6272C0.640573 27.8659 0.979711 28 1.33333 28ZM12 17.8182C14.2437 17.8208 16.4115 18.5937 18.1077 19.9957C19.8038 21.3977 20.9151 23.3352 21.2387 25.4545H2.76133C3.08488 23.3352 4.19618 21.3977 5.89233 19.9957C7.58848 18.5937 9.75632 17.8208 12 17.8182Z"
                            fill="currentColor"/>
                    </svg>
                </div>
            </div>
            <div class="profile_info_iner collaps_part_content">
                <a href="{{url('/')}}">{{__('frontendmanage.Home')}}</a>
                <a href="{{auth()->user()->username?route('profileUniqueUrl',auth()->user()->username):''}}">{{__('frontendmanage.My Profile')}}</a>
                <a href="{{route('users.settings')}}">{{__('frontend.Account Settings')}}</a>
                @if(isModuleActive('Affiliate') && $user->affiliate_request!=1)
                    <a href="{{routeIsExist('affiliate.users.request')?route('affiliate.users.request'):''}}">{{__('frontend.Join Affiliate Program')}}</a>
                @endif
                @if(isModuleActive('UserType'))
                    @foreach($user->userRoles as $role)
                        @php
                            if ($role->id==$user->role_id){
                                continue;
                            }
                        @endphp
                        <a href="{{route('usertype.changePanel',$role->id)}}">
                            {{__('common.Switch to')}} {{$role->name}}
                        </a>
                    @endforeach
                @endif
                <a href="{{route('logout')}}">{{__('frontend.Log Out')}}</a>
            </div>
        </div>
    </div>
</div>
