<div class="dropdown CRM_dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button"
            id="dropdownMenu2" data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
        {{trans('common.Action')}}
    </button>
    <div class="dropdown-menu dropdown-menu-right"
         aria-labelledby="dropdownMenu2">
        @if (permissionCheck('flashcard.edit'))
            <a class="dropdown-item edit_brand"
               href="{{route('flashcard.edit', [$query->flashcard_id])}}?word={{$query->id}}">{{trans('common.Edit') }}</a>
        @endif
        @if (permissionCheck('flashcard-delete'))
            <button class="dropdown-item deleteQuiz_bank"
                    data-id="{{$query->id}}"
                    data-flashcard_id="{{$query->flashcard_id}}"
                    type="button">{{trans('common.Delete')}}
            </button>
        @endif
    </div>
</div>
