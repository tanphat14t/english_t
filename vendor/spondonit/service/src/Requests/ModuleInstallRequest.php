<?php

namespace SpondonIt\Service\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ModuleInstallRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        return [
            'purchase_code'     => 'required',
            'name'              => 'required',
            'envatouser'        => 'required|email',

        ];
    }

    public function attributes()
    {
        return [
            'purchase_code'         => trans('service::install.purchase_code'),
            'name'                  => trans('service::install.module_name'),
            'envatouser'            => trans('service::install.envatouser')
        ];
    }
}