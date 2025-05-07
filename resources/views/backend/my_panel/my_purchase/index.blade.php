@extends('backend.master')
@push('styles')
    <link rel="stylesheet" href="{{ asset('public/backend/css/daterangepicker.css') }}{{assetVersion()}}">
@endpush
@section('mainContent')

    {!! generateBreadcrumb() !!}

    <section class="admin-visitor-area up_st_admin_visitor">
        <div class="container-fluid p-0">

            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="white_box mb_30">
                        <div class="white_box_tittle list_header">
                            <h4>{{__('courses.Advanced Filter')}} </h4>
                        </div>
                        <form action="#" method="POST">
                            @csrf
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="primary_input mb-15 date_range">
                                        <div class="primary_datepicker_input filter">
                                            <label class="primary_input_label" for="">{{__('common.Date')}}</label>
                                            <div class="no-gutters input-right-icon">
                                                <input placeholder="{{__('common.Date')}}" readonly
                                                       class="primary_input_field date_range_input" type="text"
                                                       name="date_range_filter" value="">
                                                <button class="" type="button">
                                                    <i class="fa fa-refresh" id="reset-date-filter"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-lg-3 mt-3">
                                    <div class="search_course_btn">
                                        <a class="primary-btn radius_30px mr-10 fix-gr-bg reset_btn mt-20">{{__('common.Reset')}} </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-12">
                    <div class="box_header common_table_header">
                        <div class="main-title d-md-flex">
                            <h3 class="mb-0 mr-30 mb_xs_15px mb_sm_20px"> {{__('payment.Purchase history')}}</h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="QA_section QA_section_heading_custom check_box_table">
                        <div class="QA_table ">
                            <!-- table-responsive -->
                            <div class="">
                                <table id="lms_table" class="table Crm_table_active3">
                                    <thead>
                                    <tr>
                                        <th scope="col">{{__('common.SL')}}</th>
                                        @if (isModuleActive('Store'))
                                            <th scope="col">{{__('common.Order No')}}</th>
                                        @endif

                                        <th scope="col">{{__('common.Date')}}</th>
                                        <th scope="col">{{__('common.Total Courses')}} @if(isModuleActive('Store'))
                                                / {{ __('product.Products') }}
                                            @endif</th>
                                        <th scope="col">{{__('payment.Total Price')}}</th>

                                        @if (isModuleActive('Store'))
                                            <th scope="col">{{__('product.Delivery Fee')}}</th>
                                        @endif

                                        <th scope="col">{{__('common.Discount')}}</th>
                                        <th scope="col">{{__('tax.TAX')}}</th>
                                        <th scope="col">{{__('common.Payment Type')}}</th>
                                        <th scope="col">{{__('payment.Invoice')}}</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <input type="hidden" value="{{route('users.my_purchase.datatable')}}" id="my_purchase_route">
            <input type="hidden" value="{{hasTax()}}" id="hasTax">
        </div>
    </section>
@endsection

@push('scripts')
    <script src="{{asset('public/backend/js/daterangepicker.min.js')}}{{assetVersion()}}"></script>
    <script src="{{asset('public/modules/common/date_range_init.js')}}{{assetVersion()}}"></script>

    <script>
        const hasTax = $("#hasTax").val();
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
                url: $('#my_purchase_route').val(),
                data: function (d) {
                    d.f_date = $('.date_range_input').val();
                },
                pages: 5 // number of pages to cache
            }),
            columns: [
                {data: 'DT_RowIndex', name: 'id'},
                    @if(isModuleActive('Store'))
                {
                    data: 'order_number', name: 'order_number', orderable: false, searchable: false
                },
                    @endif
                {
                    data: 'updated_at', name: 'updated_at'
                },
                {data: 'total_courses', name: 'total_courses', searchable: false},
                {data: 'purchase_price', name: 'purchase_price'},
                    @if(isModuleActive('Store'))
                {
                    data: 'delivery_fee', name: 'delivery_fee', orderable: false, searchable: false
                },
                    @endif
                {
                    data: 'discount', name: 'discount'
                },
                {data: 'tax', name: 'tax', visible: hasTax, orderable: false, searchable: false},
                {data: 'payment_method', name: 'payment_method'},
                {data: 'invoice', name: 'invoice', orderable: false, searchable: false},

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
    </script>
@endpush
