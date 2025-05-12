<div class="container">
    <div class="row justify-content-center ">
        <div class="col-xl-10">
            <div class="main_content_iner main_content_padding">
                <div class="dashboard_lg_card">
                    <div class="container-fluid no-gutters">
                        <div class="my_courses_wrapper">
                            <div class="row">
                                <div class="col-12">
                                </div>
                            </div>
                            <div class="row d-flex align-items-center mb-2 ">
                                <div class="col-xl-6 col-md-6 col-sm-12 mt-3">
                                    <div class="section__title3">
                                        <h3>
                                            {{__('Flashcard')}}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="main_content_iner main_content_padding">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="dashboard_lg_card" style="height: 100%">
                                                <div class="my_quizz_detail_wrapper text-center">
                                                    <div class="pont-quiz">11%</div>
                                                </div>
                                                <div class="">
                                                    <p>{{$data['remember']}} Đã thuộc</p>
                                                    <p>{{$data['notRemember']}} Chưa thuộc</p>
                                                    <p>{{$data['word'] - ($data['remember'] + $data['notRemember'])}} Chưa học</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <div class="dashboard_lg_card">
                                                        <div class="my_quizz_detail_wrapper text-center">
                                                            <div class="pont-quiz">Tổng số từ</div>
                                                            <h3>80 Từ</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <div class="dashboard_lg_card">
                                                        <div class="my_quizz_detail_wrapper text-center">
                                                            <div class="pont-quiz">Chọn luyện từ</div>
                                                            <h3>80 Từ</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="dashboard_lg_card">
                                                        <div class="my_quizz_detail_wrapper text-center">
                                                            <div class="pont-quiz">Ưu tiên từ</div>
                                                            <h3>Mặt Định</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="dashboard_lg_card">
                                                        <div class="my_quizz_detail_wrapper text-center">
                                                            <div class="pont-quiz">Tự động đọc</div>
                                                            <h3></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 text-center">
                                            <div class="m-5">
                                                <a href="{{route('flashcard_detail_test', $id)}}" target="_blank" class="theme_btn mr_15 m-auto mt-4 text-center">Học Từ</a>
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
    </div>
</div>