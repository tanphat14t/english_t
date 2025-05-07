<div class="tab-pane fade" id="education_tab">
    <div class="row">
        <div class="col-12">

            <div class="d-flex justify-content-between align-items-center flex-wrap ">
                <h3>{{__('profile.education')}}</h3>
                <div class="d-flex align-items-center gap-15">
                    <label data-toggle="tooltip" data-placement="top" title="{{$show_education_tooltip}}"
                           class="lmsSwitch_toggle pr-2 " for="autoNextEdu">
                        <input value="{{$show_education?0:1}}" class="hide_show_tab" data-filed="show_education"
                               type="checkbox" id="autoNextEdu" {{$show_education?'checked':""}}>
                        <div class="slider round"></div>
                    </label>
                    <a href="javascript:void(0)"
                       class="link_value theme_btn small_btn4 add_education_btn">{{__('profile.add_education')}}</a>
                </div>
            </div>
            <hr>
            <div id="education_list">
                @include(theme('profile.education.list'))
            </div>

        </div>
    </div>
</div>
