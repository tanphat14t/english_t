@extends('backend.master')
@section('mainContent')
    <style>
        @media (max-width: 576px) {
            #lms_table_wrapper .dt-buttons {
                display: none;
            }
        }
    </style>
    {!! generateBreadcrumb() !!}
    @php
        $course =$class->course;
    @endphp

    <div id="view_details">
        <div class="col-lg-12">
            <div class="main-title">
                <h3 class="mb-20">
                    <a href="{{courseDetailsUrl($course->id,$course->type,$course->slug)}}">   {{$class->title}}</a>
                </h3>
            </div>

            <div class="QA_section QA_section_heading_custom check_box_table">
                <div class="QA_table ">
                    <div class="">
                        @if($class->host=="Zoom")
                            @includeIf('virtualclass::class.partials._zoom')
                        @elseif($class->host=="BBB" && isModuleActive('BBB'))
                            @includeIf('virtualclass::class.partials._bbb')
                        @elseif($class->host=="Jitsi" && isModuleActive('Jitsi'))
                            @includeIf('virtualclass::class.partials._jitsi')
                        @elseif($class->host=="InAppLiveClass" && isModuleActive('InAppLiveClass'))
                            @includeIf('virtualclass::class.partials._in_app_class')
                        @elseif($class->host=="GoogleMeet" && isModuleActive('GoogleMeet'))
                            @includeIf('virtualclass::class.partials._google_meet')
                        @elseif($class->host=="Custom")
                            @includeIf('virtualclass::class.partials._custom')
                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div>

    @include('backend.partials.delete_modal')

@endsection

