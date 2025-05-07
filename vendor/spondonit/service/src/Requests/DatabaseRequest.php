<?php

namespace SpondonIt\Service\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DatabaseRequest extends FormRequest
{
   
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $option = $this->route('option');
        $rules = [
            'db_port'     => 'required',
            'db_host'     => 'required',
            'db_database' => 'required',
            'db_username' => 'required'
        ];

        if(config('spondonit.support_multi_connection', false)){
            $rules += [
                'db_connection'     => 'required|in:mysql,pgsql',
            ];
        }
        return $rules;
    }

    public function attributes()
    {
        return [
            'db_connection'         => trans('service::install.db_connection'),
            'db_port'               => trans('service::install.db_port'),
            'db_host'               => trans('service::install.db_host'),
            'db_database'           => trans('service::install.db_database'),
            'db_username'           => trans('service::install.db_username'),
        ];
    }
}