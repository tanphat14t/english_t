<?php

namespace SpondonIt\Service\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LicenseRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'access_code' => 'required',
            'envato_email' => 'required|email'
        ];
    }

    public function attributes()
    {
        return [
            'access_code'           => trans('service::install.access_code'),
            'envato_email'          => trans('service::install.envato_email')
        ];
    }
}