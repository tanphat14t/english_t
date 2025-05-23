window.jsLang = function (key, replace) {
    let translation = true

    let json_file = window._translations;
    translation = json_file[key] ? json_file[key] : key


    $.each(replace, (value, key) => {
        translation = translation.replace(':' + key, value)
    })

    return translation
}
var back = false;

var totalExit = $('.losing_count').val();
var question_time_type = $('.losing_question_time_type').val();
var userAttend = 0;
$(window).focus(function (e) {
    if (totalExit > 0 && back) {
        userAttend++;
        $('.focus_lost').val(userAttend);
        if (totalExit <= userAttend) {
            back = false;
            toastr.warning(userAttend + ' ' + $('.losing_message').val());
            $("#quizForm").submit();
        } else {
            toastr.warning(userAttend + ' ' + $('.losing_count_message').val());
        }
    }

});
//---------------
window.onbeforeunload = function (e) {
    if (back === true) return "Are you sure to exit?";
}


let runner;
let totalQus = $('.quiz_assign').val();
let presentTime = document.getElementById('timer').innerHTML;

let timeArray = presentTime.split(/[:]+/);
if (timeArray[0] == 0 && timeArray[1] == 0) {
    toastr.error('Time not define', 'Failed');
} else {

    let current_route = $('#current_route').val();
    if (current_route != 'fullScreenView') {
        startQuiz();
    }
    $('#startQuizConfirm').modal('show');

}
$("#QuizStartBtn").click(function (e) {
    e.preventDefault();
    $('.modal-backdrop').fadeOut();
    $('#StartConfirmModal').modal().hide();
    $('.quiz_test_body').removeClass('d-none');
    startQuiz();
    // startTimer();
});

function startQuiz() {
    back = true;
    let url = $('input[name="quiz_start_url"]').val();
    let courseId = $('input[name="courseId"]').val();
    let quizId = $('input[name="quizId"]').val();
    let quizType = $('input[name="quizType"]').val();
    let quiz_test_id = $('input[name="quiz_test_id"]').val();

    $.ajax({
        type: 'POST', dataType: 'json', url: url, data: {
            'courseId': courseId,
            'quizId': quizId,
            'quizType': quizType,
            'quiz_test_id': quiz_test_id,
            'focus_lost': userAttend,
            "_token": $('meta[name="csrf-token"]').attr('content')

        }, success: function (data) {
            if (data.result) {
                $('input[name="quiz_test_id"]').val(data.data.id);
            }
            startTimer();
        }, error: function (request, status, error) {
            toastr.error('Multiple attempt not allow', 'Error');
            $('.quiz_test_body').addClass('d-none');
            $('.quiz_header_right').addClass('d-none');
        }
    });


}

function minuteToSecond(hms) {
    if (!hms) {
        var hms = $('#totalQuizTime').val();
    }
    var a = hms.split(':');
    return seconds = ((+a[0]) * 60) + (+a[1]);
}

//start timer
function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;


    var timeArray = presentTime.split(/[:]+/);

    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) {
        m = m - 1
    }
    if ((m + '').length == 1) {
        m = '0' + m;
    }
    if (m < 0) {
        back = false;
        $("#quizForm").submit();
        // submitQuiz();
        // m = '59';
    } else {
        document.getElementById('timer').innerHTML = m + ":" + s;
        runner = setTimeout(startTimer, 1000);
    }

}

//check secound
function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {
        sec = "0" + sec;
    }
    // add zero in front of numbers < 10
    if (sec < 0) {
        sec = "59";
    }

    return sec;
}

$(document).on("click", ".question_number_lists .nav-link", function (e) {
    e.preventDefault();

    $(this).addClass('active');
});


$(document).on("click", ".skip", function (e) {
    e.preventDefault();
    $('.question_number_lists .skip_qus').next('.nav-link').trigger('click');


    resetAttempt();
});

function resetAttempt() {
    if (question_time_type == 0) {
        userAttend = 0;
    }
}

$('.quiz_select input').click(function(){
    let question_type = $(this).data('question_type');
    let question_id = $(this).data('question_id');
    let assign_id = $(this).data('assign_id');
    
    questionSubmitSingle(question_type, assign_id, question_id);
    $('.question_number_lists .link_' + assign_id).next('.nav-link').trigger('click');
});

$(".next").click(function (e) {
    e.preventDefault();

    resetAttempt();

    let question_type = $(this).data('question_type');
    let question_id = $(this).data('question_id');
    let assign_id = $(this).data('assign_id');


    let ans = $(".tab-pane:visible").find('.quizAns:checked').val();


    if (question_type == 'X') {
        ans = $('#matching_connection_' + question_id).val().length;
    }

    if (ans == "undefined" || ans == "" || ans == null) {
        console.log(question_type)
        if (question_type == 'M') {
            toastr.error('Please select a option', 'Error Alert', {
                timeOut: 2000
            });
            return false;
        } else if (question_type == 'X') {
            toastr.error(window.jsLang('data_select_match'), window.jsLang('data_error'));
            return false;
        } else {
            let answer_input = $("#editor" + assign_id).val();
            if (answer_input == "undefined" || answer_input == "" || answer_input == null) {
                toastr.error('Please Write Answer', 'Error Alert', {
                    timeOut: 2000
                });
                return false;
            }
        }
    }

    console.log($('.question_number_lists .link_' + assign_id))

    questionSubmitSingle(question_type, assign_id, question_id);
    $('.question_number_lists .link_' + assign_id).next('.nav-link').trigger('click');


});


// new feature


$(".quizSubmitClose").click(function (e) {
    $(".submitBtn").html('Submit');
});
$(".submitBtn").click(function (e) {
    e.preventDefault();

    let question_type = $(this).data('question_type');
    let assign_id = $(this).data('assign_id');
    let question_id = $(this).data('question_id');
    questionSubmitSingle(question_type, assign_id, question_id);
    $(".submitBtn").html('Submitting..');
    setTimeout(function () {
        $('#submitConfirmModal').modal('show');
    }, 3000);


});

$("#QuizSubmitBtn").click(function (e) {
    e.preventDefault();
    back = false;
    $("#quizForm").submit();
});

$(".questionLink").click(function (e) {
    var element = $(this);
    var currentNumber = $('#currentNumber');
    var number = element.text();
    currentNumber.text(number);

    questionIsChecked();

    element.removeClass('skip_qus');
    element.removeClass('pouse_qus');
    element.removeClass('wait_for_confirm ')
    element.addClass('skip_qus')

    $('.singleQuestion').each(function (i, obj) {
        var qus_id = $(this).data('qus-id');
        var link = $('#pills-' + qus_id);


        if (element.data('qus') === qus_id) {

            link.addClass('active');
            link.addClass('show');
        } else {
            link.removeClass('active');
            link.removeClass('show');
        }
    })
});


function questionIsChecked() {
    $('.singleQuestion').each(function (i, obj) {
        var qus_id = $(this).data('qus-id');
        var qus_type = $(this).data('qus-type');
        var link = $('.link_' + qus_id);

        link.removeClass('skip_qus');
        link.removeClass('pouse_qus');
        link.removeClass('active');
        link.removeClass('wait_for_confirm');

        if (qus_type == "M") {
            if ($(this).find(':checkbox').is(":checked")) {
                if (link.hasClass('quiz_is_submit')) {
                    link.addClass('active');
                } else {
                    link.addClass('wait_for_confirm');
                }
            } else {
                link.addClass('pouse_qus');
            }
        } else if (qus_type == "X" && $('#matching_connection_' + $(this).data('qus-bank-id')).length !== 0) {
            let question_id = $(this).data('qus-bank-id');
            let answer_input = $('#matching_connection_' + question_id).val().length;
            if (answer_input == 0) {
                link.addClass('pouse_qus');
            } else {
                if (link.hasClass('quiz_is_submit')) {
                    link.addClass('active');
                } else {
                    link.addClass('wait_for_confirm');
                }
            }

        } else {
            let answer_input = $("#editor" + qus_id).val();
            if (answer_input == "") {
                link.addClass('pouse_qus');
            } else {
                if (link.hasClass('quiz_is_submit')) {
                    link.addClass('active');
                } else {
                    link.addClass('wait_for_confirm');
                }
            }

        }


    });
}


function questionSubmitSingle(question_type, assign_id, question_id) {
    let url = $('input[name="single_quiz_submit_url"]').val();
    let quiz_test_id = $('input[name="quiz_test_id"]').val();
    let show_ans = $('input[name="show_ans"]').val();
    let show_ans_success = $('input[name="show_ans_success"]').val();
    let show_ans_failed = $('input[name="show_ans_failed"]').val();

    $('.link_' + assign_id).addClass('quiz_is_submit');

    var data = [];

    if (question_type == "M") {
        //fix issue of multiple choice when multiple ans select
        $('#pills-' + assign_id + '').find('.quizAns:checked').each(function (i) {
            data[i] = $(this).val();
        });
    } else if (question_type == "X") {
        data = $('#matching_connection_' + question_id).val()
    } else {
        data = $("#editor" + assign_id).val();
    }

    $.ajax({
        type: 'POST', dataType: 'json', url: url, data: {
            'quiz_test_id': quiz_test_id,
            'assign_id': assign_id,
            'type': question_type,
            'ans': data,
            'focus_lost': userAttend,
            "_token": $('meta[name="csrf-token"]').attr('content')

        }, success: function (data) {
            console.log(data);
            // questionIsChecked();
            if (show_ans == 1) {
                if (data) {
                    toastr.success(show_ans_success);
                } else {
                    toastr.error(show_ans_failed);
                }
            }

        }
    });

    return true;

}


$(document).on('change', '.quizAns', function () {
    let total = $(this).closest('.singleQuestion').find('.questionAnsTotal').text();
    let checked = $(this).closest('.singleQuestion').find('.quizAns:checked').length;
    if (total == 1) {
        if (checked > total) {
            $(this).closest('.singleQuestion').find('.quizAns').each(function () {
                $(this).prop('checked', false)
            });
            $(this).prop('checked', true)
        }
    }

});
