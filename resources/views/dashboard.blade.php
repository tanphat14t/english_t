@extends('backend.master')
@push('styles')
    <link rel="stylesheet" href="{{asset('public/backend/css/daterangepicker.css')}}">
@endpush
@section('mainContent')
    @include("backend.partials.alertMessage")
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
@endsection
@push('scripts')
    <script src="{{asset('public/backend/vendors/chartlist/Chart.min.js')}}"></script>
    <script src="{{asset('public/backend/js/daterangepicker.min.js')}}"></script>

    <script>
        $('.userLoginChartDateRange').daterangepicker();
        @if (permissionCheck('userLoginChartByDays'))
        var userLoginChartByDaysElement = $('input[name="userLoginChartByDays"]');
        var userLoginChartByDaysDateRangeElement = $('input[name="userLoginChartByDaysDateRange"]');


        userLoginChartByDaysDateRangeElement.change(function () {
            getLoginUserDataFromDays('custom', this.value);
        });
        userLoginChartByDaysElement.change(function () {
            if (this.value === 'custom') {
                $('#userLoginDayChartDateRange').show();
            } else {
                $('#userLoginDayChartDateRange').hide();
                getLoginUserDataFromDays('days', this.value);
            }
        });


        var userLoginChartByDaysCanvas = $('#userLoginChartByDays').get(0).getContext('2d');

        function getLoginUserDataFromDays(type, days) {
            $.ajax({
                url: '{{url('userLoginChartByDays')}}',
                type: 'GET',
                data: {type: type, days: days},
                success: function (result) {

                    var userLoginChartByDaysData = {
                        labels: result.date,
                        datasets: [
                            {
                                label: '{{__('dashboard.User Login Attempt')}}',
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgba(54, 162, 235, 0.5)',
                                pointRadius: true,
                                pointColor: '#3b8bba',
                                borderWidth: 3,
                                pointDot: true,
                                pointDotRadius: 10,
                                pointHoverRadius: 15,
                                pointStrokeColor: 'rgba(54, 162, 235, 1)',
                                pointHighlightFill: '#fff',
                                pointHighlightStroke: 'rgba(54, 162, 235, 1)',
                                data: result.data
                            },
                        ]
                    }

                    var userLoginChartByDaysOptions = {
                        maintainAspectRatio: false,
                        responsive: true,
                        legend: {
                            display: true
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display: false,
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    display: false,
                                }
                            }]
                        }
                    }


                    new Chart(userLoginChartByDaysCanvas, {
                        type: 'line',
                        data: userLoginChartByDaysData,
                        options: userLoginChartByDaysOptions
                    })

                }, error: function (result, statut, error) { // Handle errors
                    console.log(error);
                }

            });
        }

        getLoginUserDataFromDays('days', 7);
        @endif
        // ------------------------
        @if (permissionCheck('userLoginChartByTime'))

        var userLoginChartByTimeElement = $('input[name="userLoginChartByTime"]');
        var userLoginTimeChartDateRange = $('input[name="userLoginTimeChartDateRange"]');


        userLoginTimeChartDateRange.change(function () {
            getLoginUserDataFromTime('custom', this.value);
        });
        userLoginChartByTimeElement.change(function () {
            if (this.value === 'custom') {
                $('#userLoginTimeChartDateRange').show();
            } else {
                $('#userLoginTimeChartDateRange').hide();
                getLoginUserDataFromTime('days', this.value);
            }
        });


        var userLoginChartByTimeCanvas = $('#userLoginChartByTime').get(0).getContext('2d');

        function getLoginUserDataFromTime(type, days) {
            $.ajax({
                url: '{{url('userLoginChartByTime')}}',
                type: 'GET',
                data: {type: type, days: days},
                success: function (result) {
                    var userLoginChartByTimeData = {
                        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                        datasets: [
                            {
                                label: '{{__('dashboard.User Login Attempt')}}',
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgba(54, 162, 235, 0.5)',
                                pointRadius: true,
                                pointColor: '#3b8bba',
                                borderWidth: 3,
                                pointDot: true,
                                pointDotRadius: 10,
                                pointHoverRadius: 15,
                                pointStrokeColor: 'rgba(54, 162, 235, 1)',
                                pointHighlightFill: '#fff',
                                pointHighlightStroke: 'rgba(54, 162, 235, 1)',
                                data: result
                            },
                        ]
                    }

                    var userLoginChartByTimeOptions = {
                        maintainAspectRatio: false,
                        responsive: true,
                        legend: {
                            display: true
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display: false,
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    display: false,
                                }
                            }]
                        }
                    }


                    new Chart(userLoginChartByTimeCanvas, {
                        type: 'line',
                        data: userLoginChartByTimeData,
                        options: userLoginChartByTimeOptions
                    })

                }, error: function (result, statut, error) { // Handle errors
                    console.log(error);
                }

            });
        }

        getLoginUserDataFromTime('days', 7);
        @endif
    </script>

    <script>

        @if (permissionCheck('dashboard.overview_status_of_courses'))
        var ctx = document.getElementById('course_overview').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['{{__('dashboard.Active')}}', '{{__('dashboard.Pending')}}'],
                datasets: [{
                    label: '{{__('Status Overview of Topics')}}',
                    data: [{{$course_overview['active']}}, {{$course_overview['pending']}}],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 99, 132, 0.2)'

                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            display: false,
                        }
                    }]
                }
            }
        });
        @endif
        @if (permissionCheck('dashboard.overview_of_courses'))
        var ctx = document.getElementById('course_overview2').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['{{__('dashboard.Courses')}}', '{{__('dashboard.Quizzes')}}', '{{__('dashboard.Classes')}}'],
                datasets: [{
                    label: '{{__('Overview of Topics')}}',
                    data: [{{$course_overview['courses']}}, {{$course_overview['quizzes']}}, {{$course_overview['classes']}}],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 159, 64, 0.2)'

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        @endif


        @if (permissionCheck('dashboard.payment_statistic'))
        var ctx = document.getElementById('payment_statistics').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['{{__('dashboard.Completed')}}', '{{__('dashboard.Pending')}}'],
                datasets: [{
                    label: '{{__('dashboard.Payment Statistics for')}} {{@$payment_statistics['month']}}',
                    data: [{{$payment_statistics['paid']->count()}}, {{$payment_statistics['unpaid']->count()}}],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        @endif
        var enroll_day = [];
        @foreach($enroll_day as $key => $val)
        enroll_day.push('{{$val}}');
        @endforeach

        var enroll_count = [];
        @foreach($enroll_count as $key => $val)
        enroll_count.push('{{$val}}');
        @endforeach
        var ctx = document.getElementById('enroll_overview').getContext('2d');
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        @if (permissionCheck('dashboard.daily_wise_enroll'))
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {

                labels: enroll_day,
                datasets: [{
                    label: '{{__('dashboard.Daily Wise Enroll Status for')}} {{\Carbon\Carbon::now()->format('F')}}',
                    data: enroll_count,
                    backgroundColor: 'rgba(124, 50, 255, 0.5)',
                    borderColor: 'rgba(124, 50, 255, 0.5)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        @endif
        var month_name = [];
        @foreach($courshEarningM_onth_name as $key => $val)
        month_name.push('{{$val}}');
        @endforeach

        var monthly_earn = [];
        @foreach($courshEarningMonthly as $key => $val)
        monthly_earn.push('{{$val}}');
        @endforeach


        @if (permissionCheck('dashboard.monthly_income'))
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {

                labels: month_name,
                datasets: [{
                    label: '{{__('dashboard.Monthly Income Stats for')}} {{@$payment_statistics['month']}}' + new Date().getFullYear(),
                    data: monthly_earn,
                    backgroundColor: 'rgba(124, 50, 255, 0.5)',
                    borderColor: 'rgba(124, 50, 255, 0.5)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        @endif
        @if(isModuleActive('CPD'))
        var student_name = [];
        var total_course = [];
        @foreach($students as $key => $val)
        student_name.push('{{$val->name}}');
        total_course.push('{{$val->cpds->count()}}');
        @endforeach

        var ctx = document.getElementById('myChartCPD').getContext('2d');
        var myChartCPD = new Chart(ctx, {
            type: 'bar',
            maintainAspectRatio: false,
            responsive: true,
            data: {

                labels: student_name,
                datasets: [{
                    label: '{{__('cpd.Student Course Statistic')}}',
                    data: total_course,
                    backgroundColor: 'rgba(124, 50, 255, 0.5)',
                    borderColor: 'rgba(124, 50, 255, 0.5)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        @endif
    </script>


    <script>
        let url = "{{route('getDashboardData')}}";
        $(document).ready(function () {
            $.ajax({
                type: 'GET',
                url: url,
                success: function (data) {
                    $('#totalStudent').html(data.student);
                    $('#totalInstructor').html(data.instructor);
                    $('#totalCourses').html(data.allCourse);
                    $('#totalEnroll').html(data.totalEnroll);
                    $('#totalSell').html(getPriceFormet(data.totalSell));
                    $('#totalRevenue').html(getPriceFormet(data.adminRev));
                    $('#totalToday').html(getPriceFormet(data.today));
                    $('#totalThisMonth').html(getPriceFormet(data.thisMonthEnroll));
                }
            });
        });

        function getPriceFormet(price) {
            let currency_symbol = $('.currency_symbol').val();
            let currency_show = $('.currency_show').val();
            let res;
            if (currency_show == 1) {
                res = currency_symbol + price;
            } else if (currency_show == 2) {
                res = currency_symbol + ' ' + price;
            } else if (currency_show == 3) {
                res = price + currency_symbol;
            } else if (currency_show == 4) {
                res = price + ' ' + currency_symbol;
            } else {
                res = price;
            }
            return res;
        }
    </script>
@endpush
