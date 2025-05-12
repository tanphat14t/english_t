<?php

namespace Modules\Flashcard\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Support\Facades\DB;

use Modules\Flashcard\Entities\Flashcard;
use Modules\Flashcard\Entities\FlashcardWord;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBag;

class FlashcardController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        return view('flashcard::index');
    }

    public function getFlashcardAll()
    {
        $queries = Flashcard::latest();
        $queries->withCount('flashcardAssign');

        return Datatables::of($queries)
            ->addIndexColumn()
            ->addColumn('delete_btn', function ($query) {
                return view('flashcard::partials._delete_btn', compact('query'));
            })->addColumn('DT_RowIndex', function ($query) {
                return $query->id;
            })->addColumn('title', function ($query) {
                return $query->title;
            })
            ->addColumn('word_count', function ($query) {
                return $query->flashcardAssign->count();
            })
            ->addColumn('reading', function ($query) {
                return "";
            })->addColumn('action', function ($query) {
                return view('flashcard::partials._td_action', compact('query'));
            })->rawColumns(['delete_btn', 'action', 'image', 'question'])->make(true);
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('flashcard::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        $rules = [
            'title' => 'required|max:255',
        ];
        // $this->validate($request, $rules, validationMessage($rules));

        try {
            DB::beginTransaction();

            $flashcard = new Flashcard();
            $flashcard->title = $request->title;
            $flashcard->save();
            $flashId = $flashcard->id;

            if ($flashId) {
                $flashword_arr = $request->learn_word;
                if ($flashword_arr) {
                    foreach ($flashword_arr as $item) {
                        if ($item) {
                            $flashword = new FlashcardWord();
                            $flashword->flashcard_id = $flashId;
                            $flashword->word = $item['word'];
                            $flashword->word_type = $item['type'];
                            $flashword->word_read = $item['read'];
                            $flashword->word_trans = $item['trans'];
                            $flashword->word_note = $item['note'];
                            $flashword->save();
                        }
                    }
                }
            }

            DB::commit();
            Toastr::success(trans('common.Operation successful'), trans('common.Success'));
            return redirect()->route('flashcard.edit', $flashId);
        } catch (\Exception $e) {
            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('flashcard::show', compact('flashcard'));
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit(Request $request, $id)
    {
        $wordId = $request->word ? $request->word : 0;
        $word = FlashcardWord::find($wordId);
        $flashcard = Flashcard::with('flashcardAssign')->find($id);
        return view('flashcard::edit', compact('flashcard', 'word'));
    }

    public function getFlashcardAllWord($id)
    {
        $flashcard = Flashcard::with('flashcardAssign')->find($id);
        return Datatables::of($flashcard->flashcardAssign)
            ->addIndexColumn()
            ->addColumn('delete_btn', function ($query) {
                return view('flashcard::partials._delete_btn', compact('query'));
            })->addColumn('DT_RowIndex', function ($query) {
                return $query->id;
            })->addColumn('word', function ($query) {
                return $query->word;
            })
            ->addColumn('type', function ($query) {
                return $query->word_type;
            })
            ->addColumn('word_read', function ($query) {
                return $query->word_read;
            })
            ->addColumn('word_trans', function ($query) {
                return $query->word_trans;
            })->addColumn('action', function ($query) {
                return view('flashcard::partials._edit_action', compact('query'));
            })->rawColumns(['delete_btn', 'action', 'image', 'question'])->make(true);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        $rules = [
            'title' => 'required|max:255',
        ];
        // $this->validate($request, $rules, validationMessage($rules));
        try {
            DB::beginTransaction();

            $flashcard = Flashcard::find($id);
            $flashcard->title = $request->title;
            $flashcard->save();
            $flashId = $flashcard->id;

            if ($flashId) {
                if ($request->word_id) {
                    $flashword = FlashcardWord::where('id', $request->word_id)->update([
                        "flashcard_id" => $flashId,
                        "word" => $request->word,
                        "word_type" => $request->type,
                        "word_read" => $request->word_read,
                        "word_trans" => $request->word_trans,
                        "word_note" => $request->word_note
                    ]);
                }else{
                    if($request->word && $request->type && $request->word_read && $request->word_trans && $request->word_note){
                        $flashword = FlashcardWord::create([
                            "flashcard_id" => $flashId,
                            "word" => $request->word,
                            "word_type" => $request->type,
                            "word_read" => $request->word_read,
                            "word_trans" => $request->word_trans,
                            "word_note" => $request->word_note
                        ]);
                    }
                }
            }

            DB::commit();
            Toastr::success(trans('common.Operation successful'), trans('common.Success'));
            return redirect()->back();
        } catch (\Exception $e) {
            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
