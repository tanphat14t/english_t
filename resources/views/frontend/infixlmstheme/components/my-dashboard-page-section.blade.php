<div>
    @php
        $total =\Illuminate\Support\Facades\Auth::user()->totalStudentCourses();



        $isGamification =Settings('gamification_status') && Settings('gamification_leaderboard_show_badges_status');

        if (count($noticeboards)==0 && !$isGamification){
            $col =12;
            $item =4;
        }else{
            $col=6;
             $item =6;
        }

    @endphp
    <div class="main_content_iner main_content_padding">
        @if(isModuleActive('CPD'))
            <div class="container-fluid no-gutters">
                <div class="dashboard_card ">
                    <x-cpd-graph/>
                </div>
            </div>
        @endif
        <div class="container-fluid no-gutters">
            <!-- bootstrap 4 remove g-0 and add no-gutters -->
            <div class="row">
                <div class="col-xl-{{$col}} col-12">
                    <div class="row">
                        <div class="col-12 ">
                            <div id="myHomepageCourse" class="owl-carousel">
                                @if($mycourse)
                                    @foreach($mycourse as $key=>$single_course)
                                        @if($key<5)
                                            @php
                                                $course =$single_course->course;
                                                   $percentage =round($course->loginUserTotalPercentage);
                                                   if ($percentage>=100){
                                                       continue;
                                                   }
                                            @endphp

                                            <div class="dashboard_card dashboard_banner ">
                                                <div class="thumb position-relative">
                                                    <span class="badge ml-3 mt-2">{{$course->courseLevel->title}}</span>
                                                </div>
                                                <div class="banner_info">
                                                    <div class="course_qualification mb-2">
                                                        <a href="#"
                                                           class="banner_info_profile d-flex align-items-center">
                                                            <div class="img"><img
                                                                    src="{{getProfileImage($course->user->image,$course->user->name)}}"
                                                                    alt="">
                                                            </div>
                                                            <p>{{$course->user->name}}</p>
                                                        </a>
                                                        <div class="starts d-flex">

                                                            <div class="stars">
                                                                @php

                                                                    $main_stars=$course->total_rating;

                                                                    $stars=intval($course->total_rating);

                                                                @endphp
                                                                @for ($i = 0; $i <  $stars; $i++)
                                                                    <i class="fas fa-star"></i>
                                                                @endfor
                                                                @if ($main_stars>$stars)
                                                                    <i class="fas fa-star-half"></i>
                                                                @endif
                                                                @if($main_stars==0)
                                                                    @for ($i = 0; $i <  5; $i++)
                                                                        <i class="far fa-star"></i>
                                                                    @endfor
                                                                @endif
                                                            </div>
                                                            <p>
                                                        </div>
                                                    </div>
                                                    {{--                                                margin-left: calc(var(--width) * -1);--}}
                                                    @php

                                                        if ($percentage == 0){
                                                            $margin= 'margin-left: 0';
                                                        }elseif ($percentage == 100){
                                                          $margin= 'margin-left: calc(var(--width) * -1 - 20px)';
                                                        }else{
                                                            $margin= 'margin-left: calc(var(--width) * -1)';
                                                        }
                                                    @endphp
                                                    <a href="#" class="title">{{$course->title}}</a>
                                                    <div class="progress">
                                                        <div
                                                            class="progress-status"
                                                            style="--position:{{$percentage}}%;{{$margin}}"
                                                        >{{$percentage.'%'}}
                                                        </div>
                                                        <div class="progress-bar" role="progressbar"
                                                             aria-valuenow="{{$percentage}}"
                                                             aria-valuemin="0" aria-valuemax="100"
                                                             style="width: {{$percentage}}%"></div>
                                                    </div>
                                                    <a href="{{route('continueCourse',[$course->slug])}}"
                                                       class="theme_btn">{{__('frontend.Complete This Course')}}</a>
                                                </div>
                                            </div>

                                        @endif
                                    @endforeach
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-12">
                    @if(isModuleActive('Noticeboard') && count($noticeboards)!=0)

                        <div class="dashboard_card">
                            <div class="head d-flex align-items-center justify-content-between mb-4">
                                <h4>{{__('frontend.Recent')}} {{__('noticeboard.Noticeboard')}}:</h4>
                                <a href="{{route('myNoticeboard')}}">{{__('frontend.See All')}}</a>
                            </div>
                            <div class="noticeboard-wrap">
                                @foreach($noticeboards as $noticeboard)
                                    <div class="noticeboard-card"
                                         style="--noticeboard_bg:{{$noticeboard->noticeType->color}}">
                                        <div class="noticeboard-card-left">
                                            <span
                                                class="d-block">{{showDate($noticeboard->created_at)}}</span>
                                            <a href="#">{{$noticeboard->title}}</a>
                                        </div>
                                        <div class="noticeboard-card-right">
                                            <a href="#" data-url="{{route('showNoticeboard',$noticeboard->id)}}"
                                               class="showNoticeboard theme-btn btn_sm">{{__('frontend.View Details')}}</a>
                                        </div>
                                    </div>
                                @endforeach
                            </div>

                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
