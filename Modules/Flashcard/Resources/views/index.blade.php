@extends('backend.master')
@section('mainContent')
    {!! generateBreadcrumb() !!}

    <section class="admin-visitor-area up_st_admin_visitor">
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-lg-12">
                    <div class="QA_section QA_section_heading_custom check_box_table">
                        <div class="QA_table">
                            <div class="">
                                <table id="lms_table" class="table Crm_table_active3 quiz-bank-checkbox">
                                    <thead>

                                        <tr>
                                            <th>
                                                <div class="d-flex items-center">

                                                    <label class=" primary_checkbox  " for="questionSelectAll">
                                                        <input type="checkbox" id="questionSelectAll"
                                                            class="common-checkbox selectAllQuizQuestion">
                                                        <span class="checkmark"></span>
                                                    </label>

                                                    <a href="#" id="deleteAllBtn"
                                                        style="display: none;    margin-top: -5px;"
                                                        class="primary-btn small fix-gr-bg ml-2">
                                                        <span class="ti-trash"></span>
                                                    </a>
                                                </div>
                                            </th>
                                            <th>ID</th>
                                            <th>Tiêu đề</th>
                                            <th>Số lượng từ vựng</th>
                                            <th>Bài đọc</th>
                                            <th>{{ __('common.Action') }}</th>
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
        </div>
    </section>
@endsection
@push('scripts')
    @php
        $url = route('getFlashcardAll');
    @endphp
    <script>
        let table = $('#lms_table').DataTable({
            bLengthChange: true,
            "bDestroy": true,
            stateSave: true,
            processing: true,
            serverSide: true,
            order: [
                [1, "desc"]
            ],
            "ajax": $.fn.dataTable.pipeline({
                url: '{!! $url !!}',
                pages: 5,
                data: function(d) {
                    d.group = 1
                }
            }),
            columns: [{
                    data: 'delete_btn',
                    name: 'delete_btn',
                    orderable: false,
                    searchable: false
                },
                {
                    data: 'DT_RowIndex',
                    name: 'DT_RowIndex',
                    orderable: true
                },
                {
                    data: 'title',
                    name: 'title'
                },
                {
                    data: 'word_count',
                    name: 'word_count'
                },
                {
                    data: 'reading',
                    name: 'reading'
                },
                {
                    data: 'action',
                    name: 'action',
                    orderable: false
                }
            ],
            columnDefs: [{
                    visible: false
                }, {
                    responsivePriority: 1,
                    targets: 0
                },
                {
                    responsivePriority: 1,
                    targets: 4
                },
                {
                    responsivePriority: 2,
                    targets: -1
                }
            ],
            responsive: true,
            language: {
                emptyTable: "{{ __('common.No data available in the table') }}",
                search: "<i class='ti-search'></i>",
                searchPlaceholder: '{{ __('common.Quick Search') }}',
                paginate: {
                    next: "<i class='ti-arrow-right'></i>",
                    previous: "<i class='ti-arrow-left'></i>"
                }
            },
            dom: '{{ isModuleActive('AdvanceQuiz') ? 'rtip' : 'Blfrtip' }}',
            paging: true,
            "lengthChange": true,
            "lengthMenu": [
                [10, 25, 50, 100, -1],
                [10, 25, 50, 100, "All"]
            ]
        });
    </script>
@endpush
