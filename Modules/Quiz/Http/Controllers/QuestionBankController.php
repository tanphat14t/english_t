<?php

namespace Modules\Quiz\Http\Controllers;

use App\Exports\AdvanceExportSampleQuestionBank;
use App\Exports\ExportCategory;
use App\Exports\ExportQuestionGroup;
use App\Exports\ExportSampleQuestionBank;
use App\Exports\ExportSubCategory;
use App\Http\Controllers\Controller;
use App\Imports\AdvanceQuestionBankImport;
use App\Imports\QuestionBankImport;
use App\Traits\UploadMedia;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;
use Modules\AdvanceQuiz\Entities\MatchingTypeQuestionAssign;
use Modules\CourseSetting\Entities\Category;
use Modules\Quiz\Entities\OnlineExamQuestionAssign;
use Modules\Quiz\Entities\QuestionBank;
use Modules\Quiz\Entities\QuestionBankMuOption;
use Modules\Quiz\Entities\QuestionGroup;
use Modules\Quiz\Entities\QuestionLevel;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Yajra\DataTables\Facades\DataTables;

class QuestionBankController extends Controller
{
    use UploadMedia;


    public function questionGroups()
    {
        $user = Auth::user();
        if (isModuleActive('AdvanceQuiz') && $user->role_id == 2) {
            $groups = QuestionGroup::where('parent_id', 0)->with('parent', 'childs')->orderBy('order', 'asc')->get();
        } else {
            $query = QuestionGroup::where('active_status', 1);
            if (isModuleActive('Organization') && $user->isOrganization()) {
                $query->whereHas('user', function ($q) {
                    $q->where('organization_id', Auth::id());
                    $q->orWhere('id', Auth::id());
                });
            }
            $groups = $query->orderBy('id', 'DESC')->get();
        }
        return $groups;
    }

    public function form()
    {
        try {

            $groups = $this->questionGroups();
            $categories = Category::where('status', 1)->orderBy('position_order')->get();

            $data['levels'] = [];
            if (isModuleActive('AdvanceQuiz')) {
                $data['levels'] = QuestionLevel::where('status', 1)->get();
            }
            return view('quiz::question_bank', $data, compact('groups', 'categories'));
        } catch (\Exception $e) {
            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());
        }
    }

    public function index(Request $request)
    {
        try {
            if ($request->group) {
                $group = $request->group;
            } else {
                $group = '';
            }
            $groups = $this->questionGroups();

            return view('quiz::question_bank_list', compact('group', 'groups'));
        } catch (\Exception $e) {
            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());
        }
    }

    public function CourseQuetionShow($id)
    {
        try {
            $levels = QuestionLevel::get();
            $groups = $this->questionGroups();
            $banks = [];
            $bank = QuestionBank::with('category', 'subCategory', 'questionGroup')->find($id);
            $gbank = [];
            if($bank->type == 'X') {
                $gbank = QuestionBank::where('parent_id', $bank->id)->with('category', 'subCategory', 'questionGroup')->get();
            }
            $categories = Category::where('status', 1)->orderBy('position_order', 'asc')->get();

            //return $bank;
            return view('quiz::question_bank', compact('gbank', 'levels', 'groups', 'banks', 'bank', 'categories'));
        } catch (\Exception $e) {
            Toastr::error(trans('common.Operation failed'), trans('common.Failed'));
            return redirect()->back();
        }
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        if (demoCheck()) {
            return redirect()->back();
        }

        $rules = [
            'group' => "required",
            'question' => "required",
            'question_type' => "required",
            'marks' => "required",

        ];

        if ($request->question_type == "M") {
            $rules['number_of_option'] = "required";

        } elseif ($request->question_type == "S") {
            $rules['number_of_option'] = "nullable";

        } elseif ($request->question_type == "X") {
            $rules['number_of_qus'] = "required";
            $rules['number_of_ans'] = "required";

        }

        $this->validate($request, $rules, validationMessage($rules));

        try {

            $online_question = new QuestionBank();
            $online_question->type = $request->question_type;
            $online_question->q_group_id = $request->group;
            $online_question->category_id = (int) $request->category;
            $online_question->sub_category_id = (int) $request->sub_category;
            $online_question->marks = (int) $request->marks;
            $online_question->question = $request->question;
            $online_question->user_id = (int) $user->id;
            $online_question->shuffle = (int) $request->question_type == 'M' ? $request->shuffle : 0;


            if (isModuleActive('AdvanceQuiz')) {
                $online_question->level = (int) $request->level;
                $online_question->pre_condition = (int) $request->get('pre_condition', 0);
            }
            $online_question->save();

            if ($request->image) {
                $online_question->image = $this->generateLink($request->image, $online_question->id, get_class($online_question), 'image');
            }
            $online_question->save();
            if ($request->question_type == 'M') {
                $online_question->explanation = $request->explanation;
                $online_question->number_of_option = $request->number_of_option;
                $online_question->save();
                $online_question->toArray();
                $i = 0;
                if (isset($request->option)) {
                    foreach ($request->option as $option) {
                        $i++;
                        $option_check = 'option_check_' . $i;
                        $online_question_option = new QuestionBankMuOption();
                        $online_question_option->question_bank_id = $online_question->id;
                        $online_question_option->title = $option;
                        if (isset($request->$option_check)) {
                            $online_question_option->status = 1;
                        } else {
                            $online_question_option->status = 0;
                        }
                        $online_question_option->save();
                    }
                }
                if ($request->quize_id) {
                    $assign = new OnlineExamQuestionAssign();
                    $assign->online_exam_id = $request->quize_id;
                    $assign->question_bank_id = $online_question->id;
                    $assign->save();
                }


            } elseif ($request->question_type == 'X') {
                // dd($request->all());
                $online_question->number_of_qus = $request->number_of_qus;
                $online_question->number_of_ans = $request->number_of_ans;
                $online_question->save();

                foreach ((array) $request->question_mutil as $key => $m_question) {
                    $online_question_mutiple = new QuestionBank();
                    $online_question_mutiple->type = "M";
                    $online_question_mutiple->parent_id = $online_question->id;
                    $online_question_mutiple->q_group_id = $request->group;
                    $online_question_mutiple->category_id = (int) $request->category;
                    $online_question_mutiple->sub_category_id = (int) $request->sub_category;
                    $online_question_mutiple->marks = (int) $request->marks;
                    $online_question_mutiple->question = $m_question;
                    $online_question_mutiple->user_id = (int) $user->id;
                    $online_question_mutiple->shuffle = (int) $request->question_type == 'M' ? $request->shuffle : 0;
                    $online_question_mutiple->save();

                    $m_option = 'option_' . $key;
                    if (isset($request->$m_option)) {
                        foreach ($request->$m_option as $k => $option) {
                            $option_check = 'option_check_' . $key;
                            $online_question_option = new QuestionBankMuOption();
                            $online_question_option->question_bank_id = $online_question_mutiple->id;
                            $online_question_option->title = $option;
                            if (isset($request->$option_check) && $request->$option_check == ($k+1)) {
                                $online_question_option->status = 1;
                            } else {
                                $online_question_option->status = 0;
                            }
                            $online_question_option->save();
                        }
                    }
                }
            }
            Toastr::success(trans('common.Operation successful'), trans('common.Success'));
            return redirect(route('question-bank-list'));
        } catch (\Exception $e) {
            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());
        }
    }

    public function updateCourse(Request $request, $id)
    {
        if (demoCheck()) {
            return redirect()->back();
        }

        $rules = [
            'question' => "required",
            'question_type' => "required",
            'marks' => "required",

        ];

        if ($request->question_type == "M") {
            $rules['number_of_option'] = "required";

        } elseif ($request->question_type == "S") {
            $rules['number_of_option'] = "nullable";

        } elseif ($request->question_type == "X") {
            $rules['number_of_qus'] = "required";
            $rules['number_of_ans'] = "required";

        }

        $this->validate($request, $rules, validationMessage($rules));


        try {
            if ($request->question_type != 'M') {
                $online_question = QuestionBank::find($id);
                $online_question->type = $request->question_type;
                // $online_question->q_group_id = $request->group;
                $online_question->category_id = (int) $request->category;
                $online_question->sub_category_id = (int) $request->sub_category;


                $online_question->marks = $request->marks;
                $online_question->question = $request->question;
                if ($request->question_type == "F") {
                    $online_question->suitable_words = $request->suitable_words;
                } elseif ($request->question_type == "T") {
                    $online_question->trueFalse = $request->trueOrFalse;
                }
                $result = $online_question->save();
                if ($result) {
                    Toastr::success(trans('common.Operation successful'), trans('common.Success'));
                    return redirect()->back();
                } else {
                    Toastr::error(trans('common.Operation failed'), trans('common.Failed'));
                    return redirect()->back();
                }
            } else {
                DB::beginTransaction();
                try {
                    $online_question = QuestionBank::find($id);
                    $online_question->type = $request->question_type;
                    // $online_question->q_group_id = $request->group;
                    $online_question->category_id = (int) $request->category;
                    $online_question->sub_category_id = (int) $request->sub_category;
                    $online_question->marks = $request->marks;
                    $online_question->question = $request->question;
                    $online_question->explanation = $request->explanation;
                    $online_question->number_of_option = $request->number_of_option;
                    $online_question->save();
                    $online_question->toArray();
                    $i = 0;
                    if (isset($request->option)) {
                        QuestionBankMuOption::where('question_bank_id', $online_question->id)->delete();
                        foreach ($request->option as $option) {
                            $i++;
                            $option_check = 'option_check_' . $i;
                            $online_question_option = new QuestionBankMuOption();
                            $online_question_option->question_bank_id = $online_question->id;
                            $online_question_option->title = $option;
                            if (isset($request->$option_check)) {
                                $online_question_option->status = 1;
                            } else {
                                $online_question_option->status = 0;
                            }
                            $online_question_option->save();
                        }
                    }
                    DB::commit();
                    Toastr::success(trans('common.Operation successful'), trans('common.Success'));
                    return redirect()->back();
                } catch (\Exception $e) {
                    DB::rollBack();
                }
                Toastr::error(trans('common.Operation failed'), trans('common.Failed'));
                return redirect()->back();
            }
        } catch (\Exception $e) {
            Toastr::error(trans('common.Operation failed'), trans('common.Failed'));
            return redirect()->back();
        }
    }


    public function show($id)
    {
        try {
            $levels = QuestionLevel::get();
            $groups = $this->questionGroups();
            $banks = [];
            $bank = QuestionBank::with('category', 'subCategory', 'questionGroup')->find($id);
            $categories = Category::where('status', 1)->orderBy('position_order', 'asc')->get();

            return view('quiz::question_bank', compact('levels', 'groups', 'banks', 'bank', 'categories'));
        } catch (\Exception $e) {
            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());
        }
    }

    public function storeCourse(Request $request)
    {
        if (demoCheck()) {
            return redirect()->back();
        }
        $user = Auth::user();

        $rules = [
            'question' => "required",
            'question_type' => "required",
            'marks' => "required",

        ];

        if ($request->question_type == "M") {
            $rules['number_of_option'] = "required";

        } elseif ($request->question_type == "S") {
            $rules['number_of_option'] = "nullable";

        } elseif ($request->question_type == "X") {
            $rules['number_of_qus'] = "required";
            $rules['number_of_ans'] = "required";

        }

        $this->validate($request, $rules, validationMessage($rules));
        try {
            if ($request->question_type != 'M') {
                $online_question = new QuestionBank();
                $online_question->type = $request->question_type;
                // $online_question->q_group_id = $request->group;
                $online_question->category_id = (int) $request->category;
                $online_question->sub_category_id = (int) $request->sub_category;
                $online_question->marks = $request->marks;
                $online_question->question = $request->question;
                $online_question->user_id = $user->id;
                if ($request->question_type == "F") {
                    $online_question->suitable_words = $request->suitable_words;
                } elseif ($request->question_type == "T") {
                    $online_question->trueFalse = $request->trueOrFalse;
                }
                $result = $online_question->save();
                if ($result) {
                    Toastr::success(trans('common.Operation successful'), trans('common.Success'));
                    return redirect()->back();
                } else {
                    Toastr::error(trans('common.Operation failed'), trans('common.Failed'));
                    return redirect()->back();
                }
            } else {

                DB::beginTransaction();

                try {
                    $online_question = new QuestionBank();
                    $online_question->type = $request->question_type;
                    $online_question->category_id = $request->category;
                    $online_question->sub_category_id = $request->sub_category;
                    $online_question->marks = $request->marks;
                    $online_question->question = $request->question;
                    $online_question->number_of_option = $request->number_of_option;
                    $online_question->user_id = $user->id;
                    $online_question->save();
                    $online_question->toArray();
                    $i = 0;
                    if (isset($request->option)) {
                        foreach ($request->option as $option) {
                            $i++;
                            $option_check = 'option_check_' . $i;
                            $online_question_option = new QuestionBankMuOption();
                            $online_question_option->question_bank_id = $online_question->id;
                            $online_question_option->title = $option;
                            if (isset($request->$option_check)) {
                                $online_question_option->status = 1;
                            } else {
                                $online_question_option->status = 0;
                            }
                            $online_question_option->save();
                        }
                    }
                    $assign = new OnlineExamQuestionAssign();
                    $assign->online_exam_id = $request->quize_id;
                    $assign->question_bank_id = $online_question->id;
                    $assign->save();

                    DB::commit();
                    Toastr::success(trans('common.Operation successful'), trans('common.Success'));
                    return redirect()->back();
                } catch (\Exception $e) {
                    DB::rollBack();
                }
                Toastr::error(trans('common.Operation failed'), trans('common.Failed'));
                return redirect()->back();

            }
        } catch (\Exception $e) {
            Toastr::error(trans('common.Operation failed'), trans('common.Failed'));
            return redirect()->back();
        }
    }


    public function update(Request $request, $id)
    {
        if (demoCheck()) {
            return redirect()->back();
        }
        $rules = [
            'group' => "required",
            'question' => "required",
            'question_type' => "required",
            'marks' => "required",

        ];

        if ($request->question_type == "M") {
            $rules['number_of_option'] = "required";

        } elseif ($request->question_type == "S") {
            $rules['number_of_option'] = "nullable";

        } elseif ($request->question_type == "X") {
            $rules['number_of_qus'] = "required";
            $rules['number_of_ans'] = "required";

        }

        $this->validate($request, $rules, validationMessage($rules));

        try {
            $online_question = QuestionBank::find($id);
            $online_question->type = $request->question_type;
            $online_question->q_group_id = $request->group;
            $online_question->category_id = (int) $request->category;
            $online_question->sub_category_id = (int) $request->sub_category;
            $online_question->marks = (int) $request->marks;
            $online_question->shuffle = (int) $request->question_type == 'M' ? $request->shuffle : 0;
            $online_question->question = $request->question;
            if (isModuleActive('AdvanceQuiz')) {
                $online_question->level = (int) $request->level;
                $online_question->pre_condition = (int) $request->get('pre_condition', 0);
            }


            $online_question->image = null;
            $online_question->save();


            $this->removeLink($online_question->id, get_class($online_question));
            if ($request->image) {
                $online_question->image = $this->generateLink($request->image, $online_question->id, get_class($online_question), 'image');
            }
            $online_question->save();

            if ($request->question_type == 'M') {
                $i = 0;
                if (isset($request->option)) {
                    QuestionBankMuOption::where('question_bank_id', $online_question->id)->delete();
                    foreach ($request->option as $option) {
                        $i++;
                        $option_check = 'option_check_' . $i;
                        $online_question_option = new QuestionBankMuOption();
                        $online_question_option->question_bank_id = (int) $online_question->id;
                        $online_question_option->title = $option;
                        if (isset($request->$option_check)) {
                            $online_question_option->status = 1;
                        } else {
                            $online_question_option->status = 0;
                        }
                        $online_question_option->save();
                    }
                }
            } elseif ($request->question_type == 'X') {


                $online_question->number_of_qus = (int) $request->number_of_qus;
                $online_question->number_of_ans = (int) $request->number_of_ans;
                $online_question->data = $request->data;
                $online_question->connection = $request->connection;
                $online_question->save();
                QuestionBankMuOption::where('question_bank_id', $online_question->id)->delete();
                MatchingTypeQuestionAssign::where('question_id', $online_question->id)->delete();
                $qus = [];
                $ans = [];
                foreach ((array) $request->qus as $key => $option) {
                    $online_question_option = new QuestionBankMuOption();
                    $online_question_option->question_bank_id = $online_question->id;
                    $online_question_option->title = $option;
                    $online_question_option->status = 0;
                    $online_question_option->type = 1;
                    $online_question_option->save();
                    $qus[] = $online_question_option->id;
                }

                foreach ((array) $request->ans as $key => $option) {
                    $online_question_option = new QuestionBankMuOption();
                    $online_question_option->question_bank_id = $online_question->id;
                    $online_question_option->title = $option;
                    $online_question_option->status = 0;
                    $online_question_option->type = 0;
                    $online_question_option->save();
                    $ans[] = $online_question_option->id;
                }


                $connection = $request->connection;
                $connection = explode(',', $connection);
                foreach ($connection as $con) {
                    $con = explode('|', $con);
                    if (empty($con)) {
                        continue;
                    }
                    if (isset($con[0]) && isset($con[1])) {
                        $qusKey = explode('-', $con[0])[0];
                        $ansKey = explode('-', $con[1])[0];
                        MatchingTypeQuestionAssign::create([
                            'question_id' => $online_question->id,
                            'option_id' => (int) $qus[$qusKey],
                            'answer_id' => (int) $ans[$ansKey],
                        ]);
                    }
                }
            }


            Toastr::success(trans('common.Operation successful'), trans('common.Success'));
            return redirect('quiz/question-bank-list');

        } catch (\Exception $e) {
            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());
        }
    }


    public function destroy(Request $request)
    {

        if (demoCheck()) {
            return redirect()->back();
        }

        try {
            $id = $request->id;

            $online_question = QuestionBank::findOrFail($id);

            if ($online_question->type == "M") {
                QuestionBankMuOption::where('question_bank_id', $online_question->id)->delete();
            }

            $result = $online_question->delete();

            if ($result) {
                Toastr::success(trans('common.Operation successful'), trans('common.Success'));
                return redirect()->to(route('question-bank-list'));
            } else {
                Toastr::error(trans('common.Operation failed'), trans('common.Failed'));
                return redirect()->back();
            }


        } catch (\Exception $e) {
            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());
        }
    }

    public function getAllQuizData(Request $request)
    {
        $user = Auth::user();

        $queries = QuestionBank::latest()->select('question_banks.*')->where('question_banks.parent_id', 0)->where('question_banks.active_status', 1)->with('category', 'subCategory', 'questionGroup');

        // if ($user->role_id == 2) {
        //     $queries = QuestionBank::latest()->select('question_banks.*')->where('question_banks.active_status', 1)->with('category', 'subCategory', 'questionGroup')->where('question_banks.user_id', $user->id);
        // } else {
        //     $queries = QuestionBank::latest()->select('question_banks.*')->where('question_banks.active_status', 1)->with('category', 'subCategory', 'questionGroup');
        // }
        $queries->withCount('quizAssign');

        if ($request->group) {
            if (isModuleActive('AdvanceQuiz')) {
                $group = QuestionGroup::find($request->group);
                $ids = $group->getAllChildIds($group, [$group->id]);
                $queries->whereIn('q_group_id', $ids);
            } else {
                $queries->where('q_group_id', $request->group);
            }
        }
        if (isModuleActive('Organization') && Auth::user()->isOrganization()) {
            $queries->whereHas('user', function ($q) {
                $q->where('organization_id', Auth::id());
                $q->orWhere('id', Auth::id());
            });
        }

        return Datatables::of($queries)
            ->addIndexColumn()
            ->addColumn('delete_btn', function ($query) {
                return view('quiz::partials._delete_btn', compact('query'));

            })->editColumn('questionGroup_title', function ($query) {
                return $query->questionGroup->title;

            })
            ->addColumn('level_title', function ($query) {
                if (isModuleActive('AdvanceQuiz')) {
                    return $query->questionLevel->title;
                } else {
                    return '';
                }

            })
            ->editColumn('question', function ($query) {
                return Str::limit(strip_tags($query->question), 100);
            })->editColumn('image', function ($query) {
                return view('quiz::partials._td_image', compact('query'));

            })->editColumn('type', function ($query) {

                if ($query->type == "M") {
                    return trans('quiz.Multiple Choice');
                } elseif ($query->type == "S") {
                    return trans('quiz.Short Answer');
                } elseif ($query->type == "L") {
                    return trans('quiz.Long Answer');
                } elseif ($query->type == "X") {
                    return trans('quiz.Matching Type');
                } else {
                    return trans('quiz.Fill In The Blanks');
                }


            })->addColumn('action', function ($query) {
                return view('quiz::partials._td_action', compact('query'));

            })->rawColumns(['delete_btn', 'action', 'image', 'question'])->make(true);
    }

    public function questionBulkImport()
    {

        if (isModuleActive('AdvanceQuiz')) {
            return view('quiz::advance-bulk-import');
        } else {
            $groups = $this->questionGroups();
            $categories = Category::where('status', 1)->whereNull('parent_id')->latest()->get();
            return view('quiz::bulk-import', compact('groups', 'categories'));
        }
    }


    public function downloadGroup()
    {
        return Excel::download(new ExportQuestionGroup(), 'question-group.xlsx');
    }

    public function downloadCategory()
    {
        return Excel::download(new ExportCategory(), 'categories.xlsx');

    }

    public function downloadSubCategory()
    {
        return Excel::download(new ExportSubCategory(), 'sub-categories.xlsx');
    }

    public function downloadSample()
    {
        if (isModuleActive("AdvanceQuiz")) {
            ob_start();
            return Excel::download(new AdvanceExportSampleQuestionBank(), 'sample-questions.xlsx');

            //            $xlsFilePath = 'sample-questions.xls';
//            Excel::store(new AdvanceExportSampleQuestionBank(), $xlsFilePath);
//            ob_fresh();
//            return $this->convertXlsToXlsx(Storage::path($xlsFilePath), 'sample-questions.xlsx');
        } else {
            return Excel::download(new ExportSampleQuestionBank(), 'sample-questions.xlsx');
        }

    }

    function convertXlsToXlsx($xlsFilePath, $xlsxFileName)
    {
        $spreadsheet = IOFactory::load($xlsFilePath);

        $writer = new Xlsx($spreadsheet);

        $tempFilePath = tempnam(sys_get_temp_dir(), 'xlsx');
        $writer->save($tempFilePath);

        return response()->download($tempFilePath, $xlsxFileName)->deleteFileAfterSend(true);
    }

    public function questionBulkImportSubmit(Request $request)
    {

        if (demoCheck()) {
            return redirect()->back();
        }

        if (isModuleActive('AdvanceQuiz')) {
            $rules = [
                'excel_file' => 'required',
            ];
        } else {
            $rules = [
                'group' => "required",
                'excel_file' => 'required',
            ];
        }


        $this->validate($request, $rules, validationMessage($rules));

        if ($request->hasFile('excel_file')) {
            $extension = File::extension($request->excel_file->getClientOriginalName());
            if ($extension != "xlsx" && $extension != "xls") {
                Toastr::error('Excel File is Required', trans('common.Failed'));
                return redirect()->back();
            }
        }

        try {
            if (isModuleActive('AdvanceQuiz')) {
                Excel::import(new AdvanceQuestionBankImport(), $request->excel_file);
            } else {
                Excel::import(new QuestionBankImport($request->group, $request->category, $request->sub_category), $request->excel_file);
            }

            if (Session::has('failed')) {
                Toastr::error(trans('common.Invalid File Format'), trans('common.Failed'));
                return redirect()->route('question-bank-bulk');
            } else {
                Toastr::success(trans('common.Operation successful'), trans('common.Success'));
                return redirect('quiz/question-bank-list');
            }

        } catch (\Exception $e) {
            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());

        }
    }

    public function bulkDestroy(Request $request)
    {
        if (demoCheck()) {
            return redirect()->back();
        }

        try {
            $questions = explode(',', $request->questions);
            if (count($questions) != 0) {
                foreach ($questions as $question) {
                    $online_question = QuestionBank::withCount('quizAssign')->find($question);

                    if ($online_question) {
                        if ($online_question->quiz_assign_count == 0) {
                            if ($online_question->type == "M") {
                                QuestionBankMuOption::where('question_bank_id', $online_question->id)->delete();
                            }
                            $online_question->delete();
                        } else {
                            Toastr::error($online_question->question . ' ' . trans('quiz.You cannot delete this question because it has been used in') . ' ' . $online_question->quiz_assign_count . ' ' . trans('quiz already'), trans('common.Error'));

                        }

                    }
                }

                Toastr::success(trans('common.Operation successful'), trans('common.Success'));
                return redirect()->to(route('question-bank-list'));
            }
        } catch (\Exception $e) {
            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());

        }
    }

    public function removeImageAjax(Request $request)
    {
        $bank = QuestionBank::findOrFail($request->id);
        $bank->image = '';
        $bank->save();
        return true;

    }
}
