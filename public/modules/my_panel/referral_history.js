let table = $('#lms_table').DataTable({
    bLengthChange: true,
    "lengthChange": true,
    "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
    "bDestroy": true,
    processing: true,
    serverSide: true,
    // stateSave: true,
    order: [[1, "desc"]],
    "ajax": $.fn.dataTable.pipeline({
        url: $('#referral_history_route').val(),
        data: function (d) {
            d.f_date = $('.date_range_input').val();
        },
        pages: 5 // number of pages to cache
    }),
    columns: [
        {data: 'DT_RowIndex', name: 'id'},
        {data: 'date', name: 'date'},
        {data: 'user', name: 'invite_accept_byF.name'},
        {data: 'bonus_amount', name: 'bonus_amount'},

    ],
    language: {
        search: "<i class='ti-search'></i>",
        searchPlaceholder: window.jsLang('data_quick_search'),
        paginate: {
            next: "<i class='ti-arrow-right'></i>",
            previous: "<i class='ti-arrow-left'></i>"
        }
    },
    dom: 'Blfrtip',
    buttons: [
        {
            extend: 'copyHtml5',
            text: '<i class="far fa-copy"></i>',
            title: $("#logo_title").val(),
            exportOptions: {
                columns: ':visible',
                columns: ':not(:last-child)',
            }
        },
        {
            extend: 'excelHtml5',
            text: '<i class="far fa-file-excel"></i>',
            title: $("#logo_title").val(),
            margin: [10, 10, 10, 0],
            exportOptions: {
                columns: ':visible',
                columns: ':not(:last-child)',
            },

        },
        {
            extend: 'csvHtml5',
            text: '<i class="far fa-file-alt"></i>',
            exportOptions: {
                columns: ':visible',
                columns: ':not(:last-child)',
            }
        },
        {
            extend: 'pdfHtml5',
            text: '<i class="far fa-file-pdf"></i>',
            title: $("#logo_title").val(),
            exportOptions: {
                columns: ':visible',
                columns: ':not(:last-child)',
            },
            orientation: 'landscape',
            pageSize: 'A4',
            margin: [0, 0, 0, 12],
            alignment: 'center',
            header: true,
            customize: function (doc) {
                doc.content[1].table.widths =
                    Array(doc.content[1].table.body[0].length + 1).join('*').split('');
            }

        },
        {
            extend: 'print',
            text: '<i class="fa fa-print"></i>',
            title: $("#logo_title").val(),
            exportOptions: {
                columns: ':not(:last-child)',
            }
        },
        {
            extend: 'colvis',
            text: '<i class="fa fa-columns"></i>',
            postfixButtons: ['colvisRestore']
        }
    ],
    columnDefs: [{
        visible: false
    }],
    responsive: true,
});
(function ($) {
    "use strict";
    $(document).ready(function () {


        $(document).on('click', '.reset_btn', function (event) {
            event.preventDefault();
            $('.date_range_input').val('');
            resetAfterChange();
        });


        function resetAfterChange() {
            let table = $('#lms_table').DataTable();
            table.clearPipeline();
            table.ajax.reload();
        }


    });

})(jQuery);

function copyCurrentUrl() {
    var copyText = document.getElementById('referral_link').value;
    console.log(copyText);
    var dummy = $('<input>').val(copyText).appendTo('body').select()
    document.execCommand('copy');
    toastr.success('Referral Link Copied Successfully', 'Success Alert');
}
