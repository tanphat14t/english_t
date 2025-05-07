<div>
    <div class="quiz__details">
        <div class="container">
            <div class="row justify-content-center ">
                <div class="col-xl-10">
                    <div class="row">
                        <div class="col-12">

                            <div class="result_sheet_wrapper mb_30">
                                <!-- quiz_test_header  -->
                                <div class="quiz_test_header">
                                    <h3>{{__('student.Result Sheet')}}</h3>
                                </div>
                                <!-- quiz_test_body  -->
                                <div class="quiz_test_body">
                                    <div class="result_sheet_view">
                                        @php
                                            $count=1;
                                        @endphp
                                        @if(isset($questions))
                                            @foreach($questions as $question)
                                                @php
                                                    if ($quiz->show_only_wrong_ans_in_ans_sheet==1 && !$question['isWrong'] && $quiz->total_correct_ans!=count($questions) ){
                                                       continue;
                                                    }
                                                @endphp

                                                <div class="single_result_view">
                                                    <p>{{__('frontend.Question')}}: {{$count}}</p>
                                                    <h4>{!! @$question['qus'] !!}
                                                        @if(!$question['isSubmit'])

                                                            <small class="text-danger">
                                                                ({{!$question['isSubmit']?trans('quiz.Not Submitted'):''}}
                                                                )
                                                            </small>

                                                        @endif
                                                    </h4>
                                                    <div class="row">
                                                        <div class="col-lg-6">

                                                            @if($question['type']=="M")
                                                                <ul>
                                                                    @if(!empty($question['option']))
                                                                        @foreach($question['option'] as $option)
                                                                            @php
                                                                                $showRightAns =true;
                                                                               if ($quiz->show_correct_ans_in_ans_sheet!=1){
                                                                                   if(isset($option['submit']) && $option['submit']){
                                                                                       $showRightAns=true;
                                                                                   }else{
                                                                                       $showRightAns=false;
                                                                                   }
                                                                               }

                                                                            @endphp
                                                                            @if($option['right'] && $showRightAns)
                                                                                <li>
                                                                                    <label
                                                                                        class="primary_checkbox2 d-flex">
                                                                                        <input checked=""
                                                                                               type="checkbox"
                                                                                               disabled>
                                                                                        <span
                                                                                            class="checkmark mr_10"></span>
                                                                                        <span
                                                                                            class="label_name ">{{$option['title']}}</span>
                                                                                    </label>
                                                                                </li>

                                                                            @else

                                                                                @if(isset($option['wrong']) && $option['wrong'])
                                                                                    <li>
                                                                                        <label
                                                                                            class="primary_checkbox2 error_ans  d-flex">
                                                                                            <input checked=""
                                                                                                   type="checkbox"
                                                                                                   disabled>
                                                                                            <span
                                                                                                class="checkmark mr_10"></span>
                                                                                            <span
                                                                                                class="label_name ">{{$option['title']}} </span>
                                                                                        </label>
                                                                                    </li>
                                                                                @else
                                                                                    <li>
                                                                                        <label
                                                                                            class="primary_checkbox2 d-flex">
                                                                                            <input type="checkbox"
                                                                                                   disabled>
                                                                                            <span
                                                                                                class="checkmark mr_10"></span>
                                                                                            <span
                                                                                                class="label_name ">{{$option['title']}}</span>
                                                                                        </label>
                                                                                    </li>
                                                                                @endif
                                                                            @endif
                                                                        @endforeach
                                                                    @endif
                                                                </ul>
                                                            @elseif($question['type']=="X")
                                                                @if(isset($question['qusBank']))
                                                                    @php
                                                                        $qusBank=     $question['qusBank']
                                                                    @endphp
                                                                    @include(theme('partials._quiz_matching_type_preview'),compact('qusBank'))
                                                                @endif
                                                            @else
                                                                {!! $question['answer']??"" !!}
                                                            @endif
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="marking_img">
                                                                @if(isset($question['isSubmit']))
                                                                    @if(isset($question['isWrong']) &&  $question['isWrong'])
                                                                        <img
                                                                            src="{{asset('public/frontend/infixlmstheme/img/course_details/wrong.png')}}"
                                                                            alt="">
                                                                    @else
                                                                        <img
                                                                            src="{{asset('public/frontend/infixlmstheme/img/course_details/correct.png')}}"
                                                                            alt="">
                                                                    @endif
                                                                @else
                                                                    <img
                                                                        src="{{asset('public/frontend/infixlmstheme/img/course_details/wrong.png')}}"
                                                                        alt="">
                                                                @endif
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                @php
                                                    $count++;
                                                @endphp
                                            @endforeach
                                        @endif
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
