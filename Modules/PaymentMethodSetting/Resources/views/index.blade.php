@extends('backend.master')

@section('mainContent')
    <style>
        small b {
            word-break: break-word;
        }
    </style>
    {!! generateBreadcrumb() !!}

    <section class="mb-40 student-details" style="margin-left:0">
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-md-3 pb-30">

                    <div class="row row  justify-content-center">
                        <div class="col-12">
                            <div class="box_header common_table_header mb-0">
                                <div class="main-title d-md-flex">
                                    <h3 class="mt-10">{{__('setting.Gateway Status')}}</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="white-box ">
                        <form method="POST" action="{{route('paymentmethodsetting.changePaymentGatewayStatus')}}"
                              accept-charset="UTF-8" class="form-horizontal" enctype="multipart/form-data">
                            @csrf


                            <div class="row">

                                @foreach ($payment_methods as $Key=>$payment_method)
                                    @php
                                        if (!paymentGateWayCredentialsEmptyCheck($payment_method->method)){
                                        continue;
                                        }
                                    @endphp

                                    @if($payment_method->method=="Instamojo")
                                        <div class="col-xl-12">
                                            <div class="primary_input mb-25">
                                                <div class="input-effect">
                                                    <input type="checkbox" id="method_{{$payment_method->id}}"
                                                           class="common-checkbox class-checkbox read-only-input"
                                                           name="gateways[]"
                                                           value="{{$payment_method->id}}" {{$payment_method->active_status==1?'checked':''}}>
                                                    <label
                                                        for="method_{{$payment_method->id}}">{{$payment_method->method}}
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    @else
                                        <div class="col-xl-12">
                                            <div class="primary_input mb-25">
                                                <div class="input-effect">
                                                    <input type="checkbox" id="method_{{$payment_method->id}}"
                                                           class="common-checkbox class-checkbox read-only-input"
                                                           name="gateways[]"
                                                           value="{{$payment_method->id}}" {{$payment_method->active_status==1?'checked':''}}>
                                                    <label
                                                        for="method_{{$payment_method->id}}">{{$payment_method->method}}
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    @endif
                                @endforeach

                                <div class="col-lg-12 text-center">
                                    <div class="d-flex justify-content-center pt_20">
                                        <button type="submit" class="primary-btn semi_large fix-gr-bg"
                                                id="save_button_parent">
                                            <i class="ti-check"></i>
                                            {{ __('common.Update') }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
                <div class="col-lg-9 ">
                    <div class="payment_getway_tab ">
                        <div class="main-title pt-10 ">
                            <h3 class="mb-25">{{__('setting.gateway_setting')}}

                                <a href="{{route('paymentmethodsetting.test')}}"
                                   class="primary-btn small fix-gr-bg   float-right"
                                   style="    position: absolute;right: 15px;">
                                    <span class="ti-hand-drag pr-2"></span>
                                    {{__('common.Test')}}
                                </a>
                            </h3>

                        </div>
                        <ul class="nav nav-tabs no-bottom-border  mt-sm-md-20 mb-10" style="margin-left:0"
                            role="tablist">
                            @foreach ($payment_methods->where('method','!=','Offline Payment')->where('method','!=','Wallet')  as $Key=>$payment_method)
                                @if($payment_method->method=="Instamojo")

                                    <li class="nav-item m-1">
                                        <a class="nav-link  {{$Key==0?'active':''}} "
                                           href="#method{{$payment_method->id}}"
                                           role="tab" data-toggle="tab">{{@$payment_method->method}}</a>
                                    </li>

                                @else
                                    <li class="nav-item m-1">
                                        <a class="nav-link  {{$Key==0?'active':''}} "
                                           href="#method{{$payment_method->id}}"
                                           role="tab" data-toggle="tab">{{@$payment_method->method}}</a>
                                    </li>
                                @endif
                            @endforeach

                        </ul>
                    </div>

                    <!-- Tab panes -->
                    <div class="tab-content">

                        @foreach ($payment_methods->where('method','!=','Offline Payment')->where('method','!=','Wallet') as $key=>$payment_method)

                            <div role="tabpanel" class="tab-pane fade  {{$key==0?'active':''}}  show "
                                 id="method{{$payment_method->id}}">

                                @if (permissionCheck('paymentmethodsetting.payment_method_setting_update'))
                                    <form class="form-horizontal"
                                          action="{{route('paymentmethodsetting.update_payment_gateway')}}"
                                          method="POST" enctype="multipart/form-data">
                                        @endif
                                        @csrf
                                        <div class="white-box">


                                            <div class="col-md-12 ">
                                                <input type="hidden" name="payment_method_id"
                                                       value="{{@$payment_method->id}}">

                                                @if($payment_method->method=="Instamojo")
                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">

                                                                        <input
                                                                            class="primary-input form-control{{ $errors->has('instamojo_api_auth') ? ' is-invalid' : '' }}"
                                                                            type="text" name="instamojo_api_auth"
                                                                            id="instamojo_api_auth"
                                                                            required
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('Instamojo_API_AUTH')? getPaymentEnv('Instamojo_API_AUTH') : ''}}">
                                                                        <label>{{__('setting.API KEY')}}
                                                                            <span></span>
                                                                        </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control{{ $errors->has('instamojo_auth_token') ? ' is-invalid' : '' }}"
                                                                            type="text" name="instamojo_auth_token"
                                                                            id="instamojo_auth_token"
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('Instamojo_API_AUTH_TOKEN')? getPaymentEnv('Instamojo_API_AUTH_TOKEN') : ''}}">
                                                                        <label>{{__('setting.API Auth Token')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control{{ $errors->has('instamojo_url') ? ' is-invalid' : '' }}"
                                                                            type="text" name="instamojo_url"
                                                                            id="instamojo_url"
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('Instamojo_URL')? getPaymentEnv('Instamojo_URL') : ''}}">
                                                                        <label>{{__('setting.Instamojo URL')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                            </div>

                                                        </div>

                                                    </div>
                                                @endif

                                                @if($payment_method->method=="Midtrans")
                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">

                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            class="primary-input form-control"
                                                                            type="text" name="midtrans_server_key"
                                                                            id="midtrans_server_key"
                                                                            required
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('MIDTRANS_SERVER_KEY')? getPaymentEnv('MIDTRANS_SERVER_KEY') : ''}}">
                                                                        <label>{{__('setting.Server Key')}}
                                                                            <span></span>
                                                                        </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-3 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="midtrans_env_local{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="midtrans_env"
                                                                                           @if(getPaymentEnv('MIDTRANS_ENV')=="0")
                                                                                               checked
                                                                                           @endif
                                                                                           id="midtrans_env_local{{$payment_method->id}}"
                                                                                           value="false"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Sandbox')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="midtrans_env_live{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="midtrans_env"
                                                                                           id="midtrans_env_live{{$payment_method->id}}"
                                                                                           @if(getPaymentEnv('MIDTRANS_ENV')!=0)
                                                                                               checked
                                                                                           @endif
                                                                                           value="true"
                                                                                           class="common-radio relationButton read-only-input">

                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Live')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-3 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="input-effect">
                                                                            <div class="text-left float-left">

                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="midtrans_sanitize_no{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="midtrans_sanitiz"
                                                                                           @if(getPaymentEnv('MIDTRANS_SANITIZE')!='1')
                                                                                               checked
                                                                                           @endif
                                                                                           id="midtrans_sanitize_no{{$payment_method->id}}"
                                                                                           value="false"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Sanitize No')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="input-effect">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="midtrans_sanitize_yes{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="midtrans_sanitiz"
                                                                                           id="midtrans_sanitize_yes{{$payment_method->id}}"
                                                                                           @if(getPaymentEnv('MIDTRANS_SANITIZE')=="1")
                                                                                               checked
                                                                                           @endif
                                                                                           value="true"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Sanitize Yes')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-3 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="input-effect">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="midtrans_3ds_no{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="midtrans_3ds"
                                                                                           @if(getPaymentEnv('MIDTRANS_3DS')=='0')
                                                                                               checked
                                                                                           @endif
                                                                                           id="midtrans_3ds_no{{$payment_method->id}}"
                                                                                           value="false"
                                                                                           class="common-radio relationButton read-only-input">

                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.3DS No')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="input-effect">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="midtrans_3ds_yes{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="midtrans_3ds"
                                                                                           id="midtrans_3ds_yes{{$payment_method->id}}"
                                                                                           @if(getPaymentEnv('MIDTRANS_3DS')!='0')
                                                                                               checked
                                                                                           @endif
                                                                                           value="true"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.3DS Yes')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <small>
                                                                {{__('quiz.Note')}}
                                                                : {{__('setting.Make sure you have')}}
                                                                <b>{{route('midtransPaymentSuccess')}}</b> |
                                                                <b>{{route('midtransPaymentPending')}}</b> |
                                                                <b>{{route('midtransPaymentfailed')}}</b> |

                                                                {{__('setting.Set Redirection Settings In Midtrans')}}
                                                                <a
                                                                    href="https://dashboard.sandbox.midtrans.com/settings/snap_preference ">{{__('dashboard.Dashboard')}}</a>


                                                            </small>
                                                        </div>

                                                    </div>
                                                @endif
                                                @if($payment_method->method=="Payeer")
                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">

                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            class="primary-input form-control"
                                                                            type="text" name="payeer_marchant"
                                                                            id="payeer_marchant"
                                                                            required
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('PAYEER_MERCHANT')? getPaymentEnv('PAYEER_MERCHANT') : ''}}">
                                                                        <label>{{__('setting.Payeer Marchant')}}
                                                                            <span></span>
                                                                        </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            class="primary-input form-control"
                                                                            type="text" name="payeer_key"
                                                                            id="payeer_key"
                                                                            required
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('PAYEER_KEY')? getPaymentEnv('PAYEER_KEY') : ''}}">
                                                                        <label>{{__('setting.Payeer Key')}}
                                                                            <span></span>
                                                                        </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <small>
                                                            {{__('quiz.Note')}}
                                                            : {{__('setting.Make sure you have')}}   {{__('setting.Set Redirection Settings In Payeer')}}
                                                            <br>

                                                            {{__('setting.Success URL')}}:
                                                            <b>{{route('payeerPaymentSuccess')}}</b> <br>
                                                            {{__('setting.Failed URL')}}:
                                                            <b>{{route('payeerPaymentfailed')}}</b>
                                                            <br>
                                                            <a
                                                                href="https://payeer.com/en/account/api/">{{__('dashboard.Dashboard')}}</a>


                                                        </small>
                                                    </div>
                                                @endif

                                                @if($payment_method->method=="Sslcommerz")

                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">

                                                                        <input
                                                                            class="primary-input form-control{{ $errors->has('store_id') ? ' is-invalid' : '' }}"
                                                                            type="text" name="ssl_store_id"
                                                                            id="ssl_store_id"
                                                                            required
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('STORE_ID')? getPaymentEnv('STORE_ID') : ''}}">
                                                                        <label>{{__('setting.Store ID')}}
                                                                            <span></span>
                                                                        </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control{{ $errors->has('store_password') ? ' is-invalid' : '' }}"
                                                                            type="text" name="ssl_store_password"
                                                                            id="ssl_store_password"
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('STORE_PASSWORD')? getPaymentEnv('STORE_PASSWORD') : ''}}">
                                                                        <label>{{__('setting.Store Password')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-2 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="input-effect">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="mode_check_{{$payment_method->id}}">
                                                                                    <input type="radio" name="ssl_mode"
                                                                                           @if(getPaymentEnv('IS_LOCALHOST')=='true')
                                                                                               checked
                                                                                           @endif


                                                                                           id="mode_check_{{$payment_method->id}}"
                                                                                           value="1"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Sandbox')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-2 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="live_mode_check_{{$payment_method->id}}">
                                                                                    <input type="radio" name="ssl_mode"
                                                                                           id="live_mode_check_{{$payment_method->id}}"
                                                                                           @if(getPaymentEnv('IS_LOCALHOST')!='true')
                                                                                               checked
                                                                                           @endif
                                                                                           value="2"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Live')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                @elseif($payment_method->method=='Pesapal')
                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            class="primary-input form-control"
                                                                            type="text" name="pesapal_client_id"
                                                                            id="pesapal_client_id"
                                                                            required
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('PESAPAL_KEY')? getPaymentEnv('PESAPAL_KEY') : ''}}">
                                                                        <label>{{__('setting.Client ID')}}
                                                                            <span></span>
                                                                        </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control{{ $errors->has('pesapal_client_secret') ? ' is-invalid' : '' }}"
                                                                            type="text" name="pesapal_client_secret"
                                                                            id="pesapal_client_secret"
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('PESAPAL_SECRET')? getPaymentEnv('PESAPAL_SECRET') : ''}}">
                                                                        <label>{{__('setting.Client Secret')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-2 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">
                                                                                <label class="primary_checkbox d-flex mr-12
"
                                                                                       for="mode_check_{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="pesapal_mode"
                                                                                           @if(getPaymentEnv('PESAPAL_IS_LIVE')=='false')
                                                                                               checked
                                                                                           @endif


                                                                                           id="mode_check_{{$payment_method->id}}"
                                                                                           value="1"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Sandbox')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-2 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="live_mode_check_{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="pesapal_mode"
                                                                                           id="live_mode_check_{{$payment_method->id}}"
                                                                                           @if(getPaymentEnv('PESAPAL_IS_LIVE')=='true')
                                                                                               checked
                                                                                           @endif
                                                                                           value="2"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Live')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>


                                                    </div>

                                                @elseif($payment_method->method=='Mobilpay')
                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            class="primary-input form-control"
                                                                            type="text" name="mobilpay_merchant_id"
                                                                            id="mobilpay_merchant_id"
                                                                            required
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('MOBILPAY_MERCHANT_ID')? getPaymentEnv('MOBILPAY_MERCHANT_ID') : ''}}">
                                                                        <label>{{__('setting.Merchant ID')}}
                                                                            <span></span>
                                                                        </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-2 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="mode_mobilpay_check_{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="mobilpay_mode"
                                                                                           @if(getPaymentEnv('MOBILPAY_TEST_MODE')=='true')
                                                                                               checked
                                                                                           @endif


                                                                                           id="mode_mobilpay_check_{{$payment_method->id}}"
                                                                                           value="1"
                                                                                           class="common-radio relationButton read-only-input">

                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Sandbox')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-2 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="live_mobilpay_mode_check_{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="mobilpay_mode"
                                                                                           id="live_mobilpay_mode_check_{{$payment_method->id}}"
                                                                                           @if(getPaymentEnv('MOBILPAY_TEST_MODE')!='true')
                                                                                               checked
                                                                                           @endif
                                                                                           value="2"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Live')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-xl-6">
                                                                    <div class="primary_input mb-25">
                                                                        <label class="primary_input_label"
                                                                               for="">{{__('setting.Public Key')}}</label>
                                                                        <div class="primary_file_uploader">
                                                                            <input class="primary-input filePlaceholder"
                                                                                   type="text"
                                                                                   value="{{getPaymentEnv('MOBILPAY_PUBLIC_KEY_PATH')}}"
                                                                                   placeholder="Browse public key file"
                                                                                   readonly="">
                                                                            <button class="" type="button">
                                                                                <label
                                                                                    class="primary-btn small fix-gr-bg"
                                                                                    for="document_file_public_key_{{@$payment_method->id}}">{{__('common.Browse')}}</label>
                                                                                <input type="file"
                                                                                       class="d-none fileUpload"
                                                                                       name="public_key"
                                                                                       id="document_file_public_key_{{@$payment_method->id}}"
                                                                                >
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-xl-6">
                                                                    <div class="primary_input mb-25">
                                                                        <label class="primary_input_label"
                                                                               for="">{{__('setting.Private Key')}}</label>
                                                                        <div class="primary_file_uploader">
                                                                            <input class="primary-input filePlaceholder"
                                                                                   type="text"
                                                                                   value="{{getPaymentEnv('MOBILPAY_PRIVATE_KEY_PATH')}}"
                                                                                   placeholder="Browse Private key file"
                                                                                   readonly="">
                                                                            <button class="" type="button">
                                                                                <label
                                                                                    class="primary-btn small fix-gr-bg"
                                                                                    for="document_file_private_key_{{@$payment_method->id}}">{{__('common.Browse')}}</label>
                                                                                <input type="file"
                                                                                       class="d-none fileUpload"
                                                                                       name="private_key"
                                                                                       id="document_file_private_key_{{@$payment_method->id}}"
                                                                                >
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                @elseif($payment_method->method=='PayPal')
                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            class="primary-input form-control"
                                                                            type="text" name="paypal_client_id"
                                                                            id="paypal_client_id"
                                                                            required
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('PAYPAL_CLIENT_ID')? getPaymentEnv('PAYPAL_CLIENT_ID') : ''}}">
                                                                        <label>{{__('setting.Client ID')}}
                                                                            <span></span>
                                                                        </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control{{ $errors->has('client_secret') ? ' is-invalid' : '' }}"
                                                                            type="text" name="paypal_client_secret"
                                                                            id="paypal_client_secret"
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('PAYPAL_CLIENT_SECRET')? getPaymentEnv('PAYPAL_CLIENT_SECRET') : ''}}">
                                                                        <label>{{__('setting.Client Secret')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-2 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="mode_check_{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="paypal_mode"
                                                                                           @if(getPaymentEnv('IS_PAYPAL_LOCALHOST')=='true')
                                                                                               checked
                                                                                           @endif


                                                                                           id="mode_check_{{$payment_method->id}}"
                                                                                           value="1"
                                                                                           class="common-radio relationButton read-only-input">

                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Sandbox')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-2 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">

                                                                                <label class="primary_checkbox d-flex mr-12
"
                                                                                       for="live_mode_check_{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="paypal_mode"
                                                                                           id="live_mode_check_{{$payment_method->id}}"
                                                                                           @if(getPaymentEnv('IS_PAYPAL_LOCALHOST')!='true')
                                                                                               checked
                                                                                           @endif
                                                                                           value="2"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Live')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>


                                                    </div>
                                                @elseif($payment_method->method=='Stripe')

                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">

                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control "
                                                                            type="text" name="client_secret"
                                                                            id="secret_key" autocomplete="off"
                                                                            value="{{getPaymentEnv('STRIPE_SECRET')? getPaymentEnv('STRIPE_SECRET') : ''}}">
                                                                        <label>{{__('setting.Secret Key')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control"
                                                                            type="text" name="client_publisher_key"
                                                                            id="publisher_key" autocomplete="off"
                                                                            value="{{getPaymentEnv('STRIPE_KEY')? getPaymentEnv('STRIPE_KEY') : ''}}">
                                                                        <label>{{__('setting.Publisher Key')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                            </div>


                                                        </div>
                                                    </div>
                                                @elseif($payment_method->method=='PayStack')

                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">

                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control "
                                                                            type="text" name="paystack_key"
                                                                            id="razor_key" autocomplete="off"
                                                                            value="{{getPaymentEnv('PAYSTACK_PUBLIC_KEY')? getPaymentEnv('PAYSTACK_PUBLIC_KEY') : ''}}">
                                                                        <label>{{__('setting.PayStack Public Key')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control"
                                                                            type="text" name="paystack_secret"
                                                                            id="razor_secret" autocomplete="off"
                                                                            value="{{getPaymentEnv('PAYSTACK_SECRET_KEY')? getPaymentEnv('PAYSTACK_SECRET_KEY') : ''}}">
                                                                        <label>{{__('setting.PayStack Secret Key')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control"
                                                                            type="text" name="merchant_email"
                                                                            id="razor_secret" autocomplete="off"
                                                                            value="{{getPaymentEnv('MERCHANT_EMAIL')? getPaymentEnv('MERCHANT_EMAIL') : ''}}">
                                                                        <label>{{__('setting.Merchant Email')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control"
                                                                            type="text" name="paystack_payment_url"
                                                                            id="razor_secret" autocomplete="off"
                                                                            value="{{getPaymentEnv('PAYSTACK_PAYMENT_URL')? getPaymentEnv('PAYSTACK_PAYMENT_URL') : ''}}">
                                                                        <label>{{__('setting.PayStack Payment URL')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-12 mb_30">
                                                                    @if(Route::has('payStackCallBack'))
                                                                        <small>
                                                                            {{__('quiz.Note')}}
                                                                            : {{__('setting.Make sure you have')}}

                                                                            <b>{{route('payStackCallBack')}}</b>
                                                                            {{__('setting.registered in PayStack')}}
                                                                            <a
                                                                                href="https://dashboard.paystack.co/#/settings/developer ">{{__('dashboard.Dashboard')}}</a>


                                                                        </small>

                                                                    @endif
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>

                                                @elseif($payment_method->method=='RazorPay')

                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">

                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control "
                                                                            type="text" name="razor_key"
                                                                            id="razor_key" autocomplete="off"
                                                                            value="{{getPaymentEnv('RAZOR_KEY')? getPaymentEnv('RAZOR_KEY') : ''}}">
                                                                        <label>{{__('setting.Razor Key')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control"
                                                                            type="text" name="razor_secret"
                                                                            id="razor_secret" autocomplete="off"
                                                                            value="{{getPaymentEnv('RAZOR_SECRET')? getPaymentEnv('RAZOR_SECRET') : ''}}">
                                                                        <label>{{__('setting.Razor Secret')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                            </div>


                                                        </div>
                                                    </div>

                                                @elseif($payment_method->method=='MercadoPago')

                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">

                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control "
                                                                            type="text" name="public_key"
                                                                            id="public_key" autocomplete="off"
                                                                            value="{{getPaymentEnv('MERCADO_PUBLIC_KEY')? getPaymentEnv('MERCADO_PUBLIC_KEY') : ''}}">
                                                                        <label>{{__('setting.Public Key')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>

                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control"
                                                                            type="text" name="access_token"
                                                                            id="access_token" autocomplete="off"
                                                                            value="{{getPaymentEnv('MERCADO_ACCESS_TOKEN')? getPaymentEnv('MERCADO_ACCESS_TOKEN') : ''}}">
                                                                        <label>{{__('setting.Access Token')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                            </div>


                                                        </div>
                                                    </div>

                                                @elseif($payment_method->method=='PayTM')

                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">

                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control"
                                                                            type="text" name="paytm_merchant_id"
                                                                            id="paytm_merchant_id" autocomplete="off"
                                                                            value="{{getPaymentEnv('PAYTM_MERCHANT_ID')? getPaymentEnv('PAYTM_MERCHANT_ID') : ''}}">
                                                                        <label>{{__('setting.Merchant ID')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">

                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="mode_check_{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="paytm_mode"
                                                                                           @if(getPaymentEnv('PAYTM_ENVIRONMENT')=="local")
                                                                                               checked
                                                                                           @endif

                                                                                           id="mode_check_{{$payment_method->id}}"
                                                                                           value="local"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Sandbox')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="live_mode_check_{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="paytm_mode"
                                                                                           id="live_mode_check_{{$payment_method->id}}"
                                                                                           @if(getPaymentEnv('PAYTM_ENVIRONMENT')=="production")
                                                                                               checked
                                                                                           @endif
                                                                                           value="production"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Live')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control "
                                                                            type="text" name="paytm_merchant_key"
                                                                            id="razor_key" autocomplete="off"
                                                                            value="{{getPaymentEnv('PAYTM_MERCHANT_KEY')? getPaymentEnv('PAYTM_MERCHANT_KEY') : ''}}">
                                                                        <label>{{__('setting.Merchant Key')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control"
                                                                            type="text"
                                                                            name="paytm_merchant_website"
                                                                            id="razor_secret" autocomplete="off"
                                                                            value="{{getPaymentEnv('PAYTM_MERCHANT_WEBSITE')? getPaymentEnv('PAYTM_MERCHANT_WEBSITE') : ''}}">
                                                                        <label>{{__('setting.PayTM Merchant Website')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control "
                                                                            type="text" name="paytm_channel"
                                                                            id="razor_key" autocomplete="off"
                                                                            value="{{getPaymentEnv('PAYTM_CHANNEL')? getPaymentEnv('PAYTM_CHANNEL') : ''}}">
                                                                        <label>{{__('setting.PayTM Channel')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control"
                                                                            type="text" name="industry_type"
                                                                            id="razor_secret" autocomplete="off"
                                                                            value="{{getPaymentEnv('PAYTM_INDUSTRY_TYPE')? getPaymentEnv('PAYTM_INDUSTRY_TYPE') : ''}}">
                                                                        <label>{{__('setting.Industry Type')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                            </div>


                                                        </div>
                                                    </div>
                                                @elseif($payment_method->method=='Bkash')
                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            class="primary-input form-control"
                                                                            type="text" name="bkash_app_key"
                                                                            id="bkash_app_key"
                                                                            required
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('BKASH_APP_KEY')? getPaymentEnv('BKASH_APP_KEY') : ''}}">
                                                                        <label>{{__('setting.App Key')}}
                                                                            <span></span>
                                                                        </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control{{ $errors->has('bkash_app_secret') ? ' is-invalid' : '' }}"
                                                                            type="text" name="bkash_app_secret"
                                                                            id="bkash_app_secret"
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('BKASH_APP_SECRET')? getPaymentEnv('BKASH_APP_SECRET') : ''}}">
                                                                        <label>{{__('setting.App Secret')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            class="primary-input form-control"
                                                                            type="text" name="bkash_username"
                                                                            id="bkash_username"
                                                                            required
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('BKASH_USERNAME')? getPaymentEnv('BKASH_USERNAME') : ''}}">
                                                                        <label>{{__('setting.Username')}}
                                                                            <span></span>
                                                                        </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control"
                                                                            type="text" name="bkash_password"
                                                                            id="bkash_password"
                                                                            autocomplete="off"
                                                                            value="{{getPaymentEnv('BKASH_PASSWORD')? getPaymentEnv('BKASH_PASSWORD') : ''}}">
                                                                        <label>{{__('setting.Password')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-2 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="mode_check_{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="bkash_mode"
                                                                                           @if(getPaymentEnv('IS_BKASH_LOCALHOST')=='true')
                                                                                               checked
                                                                                           @endif


                                                                                           id="mode_check_{{$payment_method->id}}"
                                                                                           value="1"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Sandbox')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-2 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="live_mode_check_{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="bkash_mode"
                                                                                           id="live_mode_check_{{$payment_method->id}}"
                                                                                           @if(getPaymentEnv('IS_BKASH_LOCALHOST')!='true')
                                                                                               checked
                                                                                           @endif
                                                                                           value="2"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Live')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>


                                                    </div>

                                                @elseif($payment_method->method=='Bank Payment')
                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">


                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control "
                                                                            type="text" name="bank_name"
                                                                            id="bank_name" autocomplete="off"
                                                                            value="{{getPaymentEnv('BANK_NAME')? getPaymentEnv('BANK_NAME') : ''}}">
                                                                        <label>{{__('setting.Bank Name')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-4 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control"
                                                                            type="text" name="branch_name"
                                                                            id="branch_name" autocomplete="off"
                                                                            value="{{getPaymentEnv('BRANCH_NAME')? getPaymentEnv('BRANCH_NAME') : ''}}">
                                                                        <label>{{__('setting.Branch Name')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-4 mb-25" style="margin-top: -10px;">
                                                                    <div class="input-effect">

                                                                        <select class="primary_select" name="type"
                                                                                id="type"
                                                                                style="margin-top: -10px;">
                                                                            <option
                                                                                data-display="{{__('common.Select')}}  {{__('setting.Account Type')}}"
                                                                                value="">{{__('common.Select')}} {{__('setting.Account Type')}}</option>
                                                                            <option
                                                                                value="Current Account" {{(getPaymentEnv('ACCOUNT_TYPE')? getPaymentEnv('ACCOUNT_TYPE') : '')=='Current Account'?'selected':''}}>
                                                                                {{__('payment.Current Account')}}
                                                                            </option>

                                                                            <option
                                                                                value="Savings Account" {{(getPaymentEnv('ACCOUNT_TYPE')? getPaymentEnv('ACCOUNT_TYPE') : '')=='Savings Account'?'selected':''}}>
                                                                                {{__('payment.Savings Account')}}
                                                                            </option>
                                                                            <option
                                                                                value="Salary Account" {{(getPaymentEnv('ACCOUNT_TYPE')? getPaymentEnv('ACCOUNT_TYPE') : '')=='Salary Account'?'selected':''}}>
                                                                                {{__('payment.Salary Account')}}
                                                                            </option>
                                                                            <option
                                                                                value="Fixed Deposit" {{(getPaymentEnv('ACCOUNT_TYPE')? getPaymentEnv('ACCOUNT_TYPE') : '')=='Fixed Deposit'?'selected':''}}>
                                                                                {{__('payment.Fixed Deposit')}}
                                                                            </option>

                                                                        </select>


                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control "
                                                                            type="text" name="account_number"
                                                                            id="account_number" autocomplete="off"
                                                                            value="{{getPaymentEnv('ACCOUNT_NUMBER')? getPaymentEnv('ACCOUNT_NUMBER') : ''}}">
                                                                        <label>{{__('setting.Account Number')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control"
                                                                            type="text" name="account_holder"
                                                                            id="razor_secret" autocomplete="off"
                                                                            value="{{getPaymentEnv('ACCOUNT_HOLDER')? getPaymentEnv('ACCOUNT_HOLDER') : ''}}">
                                                                        <label>{{__('setting.Account Holder')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                @elseif($payment_method->method=='RazerMS')
                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">

                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control"
                                                                            type="text" name="razer_ms_merchant_id"
                                                                            id="razer_ms_merchant_id" autocomplete="off"
                                                                            value="{{getPaymentEnv('RAZERMS_MERCHANT_ID')? getPaymentEnv('RAZERMS_MERCHANT_ID') : ''}}">
                                                                        <label>{{__('setting.Merchant ID')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">

                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="mode_check_{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="razerms_mode"
                                                                                           @if(getPaymentEnv('RAZERMS_ENVIRONMENT')=="local" || !getPaymentEnv('RAZERMS_ENVIRONMENT'))
                                                                                               checked
                                                                                           @endif

                                                                                           id="mode_check_{{$payment_method->id}}"
                                                                                           value="local"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Sandbox')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="live_mode_check_{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="razerms_mode"
                                                                                           id="live_mode_check_{{$payment_method->id}}"
                                                                                           @if(getPaymentEnv('RAZERMS_ENVIRONMENT')=="production")
                                                                                               checked
                                                                                           @endif
                                                                                           value="production"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Live')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control "
                                                                            type="text" name="razerms_verify_key"
                                                                            id="" autocomplete="off"
                                                                            value="{{getPaymentEnv('RAZERMS_VERIFY_KEY')? getPaymentEnv('RAZERMS_VERIFY_KEY') : ''}}">
                                                                        <label>{{__('setting.Verify Key')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <input
                                                                            required
                                                                            class="primary-input form-control"
                                                                            type="text"
                                                                            name="razerms_private_key"
                                                                            id="razerms_private_key" autocomplete="off"
                                                                            value="{{getPaymentEnv('RAZERMS_PRIVATE_KEY')? getPaymentEnv('RAZERMS_PRIVATE_KEY') : ''}}">
                                                                        <label>{{__('setting.Private Key')}}
                                                                            <span></span> </label>
                                                                        <span class="focus-border"></span>
                                                                        <span
                                                                            class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>


                                                            </div>


                                                        </div>
                                                    </div>
                                                @elseif($payment_method->method == 'Easy Paisa')
                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <div class="col-lg-6 col-md-6">
                                                                    <div class='input-effect mb-25'>
                                                                        <input type="hidden" name="payment_method_id"
                                                                               value="{{$payment_method->id}}">
                                                                        <input type="text" id='{{$payment_method->id}}'
                                                                               value="{{ !empty(getPaymentEnv('EASY_PAISA_STORE_ID')) ? getPaymentEnv("EASY_PAISA_STORE_ID"):'' }}"
                                                                               class="primary-input form-control"
                                                                               name="EASY_PAISA_STORE_ID">
                                                                        <label for="{{$payment_method->id}}">
                                                                            <span>{{__('setting.Store ID')}}</span>
                                                                        </label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-6 col-md-6">
                                                                    <div class='input-effect mb-25'>
                                                                        <input type="text"
                                                                               class="primary-input form-control"
                                                                               value='{{ !empty(getPaymentEnv('EASY_PAISA_HASH_KEY')) ? getPaymentEnv("EASY_PAISA_HASH_KEY"):'' }}'
                                                                               name="EASY_PAISA_HASH_KEY">
                                                                        <label>
                                                                            <span>{{__('setting.Hash Key')}}</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="row mt-2 mb-2">
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class='input-effect'>
                                                                        <label
                                                                            for=""> {{__('setting.Auto Redirect')}} {{ getPaymentEnv('EASY_PAISA_AUTO_REDIRECT') }}</label>
                                                                        <select class="form-control"
                                                                                name="EASY_PAISA_AUTO_REDIRECT">
                                                                            <option
                                                                                {{ !empty(getPaymentEnv("EASY_PAISA_AUTO_REDIRECT")) && getPaymentEnv('EASY_PAISA_AUTO_REDIRECT') == 0 ? 'selected':'' }}  value="0">{{ trans('common.No')  }}</option>
                                                                            <option
                                                                                {{ !empty(getPaymentEnv("EASY_PAISA_AUTO_REDIRECT")) && getPaymentEnv('EASY_PAISA_AUTO_REDIRECT') == 1 ? 'selected':'' }}  value="1">{{ trans('common.Yes')  }}</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                @elseif($payment_method->method == 'Authorize.Net')

                                                    <div class="row mb-25">
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <div class="col-lg-4 col-md-4">
                                                                    <div class='input-effect mb-25'>
                                                                        <input type="hidden" name="payment_method_id"
                                                                               value="{{$payment_method->id}}">
                                                                        <input type="text" id='{{$payment_method->id}}'
                                                                               value="{{ !empty(getPaymentEnv('AUTHORIZE_NET_API_KEY')) ? getPaymentEnv("AUTHORIZE_NET_API_KEY"):'' }}"
                                                                               class="primary-input form-control"
                                                                               name="AUTHORIZE_NET_API_KEY">
                                                                        <label for="{{$payment_method->id}}">
                                                                            <span>{{__('setting.API KEY')}}</span>
                                                                        </label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-4 col-md-4">
                                                                    <div class='input-effect mb-25'>
                                                                        <input type="text"
                                                                               class="primary-input form-control"
                                                                               value='{{ !empty(getPaymentEnv('AUTHORIZE_NET_TRANSACTION_KEY')) ? getPaymentEnv("AUTHORIZE_NET_TRANSACTION_KEY"):'' }}'
                                                                               name="AUTHORIZE_NET_TRANSACTION_KEY">
                                                                        <label>
                                                                            <span>{{__('setting.Transaction Key')}}</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-md-4">


                                                                    <div class="row">
                                                                        <div class="col-lg-6 mb-25">
                                                                            <div class="input-effect">
                                                                                <div class="">
                                                                                    <div class="text-left float-left">
                                                                                        <label
                                                                                            class="primary_checkbox d-flex mr-12"
                                                                                            for="AUTHORIZE_NET_ENVIRONMENT_0{{$payment_method->id}}">
                                                                                            <input type="radio"
                                                                                                   name="AUTHORIZE_NET_ENVIRONMENT"
                                                                                                   @if(getPaymentEnv('AUTHORIZE_NET_ENVIRONMENT')=="0")
                                                                                                       checked
                                                                                                   @endif
                                                                                                   id="AUTHORIZE_NET_ENVIRONMENT_0{{$payment_method->id}}"
                                                                                                   value="false"
                                                                                                   class="common-radio relationButton read-only-input">
                                                                                            <span
                                                                                                class="checkmark mr-2"></span> {{__('common.Sandbox')}}
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6 mb-25">
                                                                            <div class="input-effect">
                                                                                <div class="">
                                                                                    <div class="text-left float-left">
                                                                                        <label
                                                                                            class="primary_checkbox d-flex mr-12"
                                                                                            for="AUTHORIZE_NET_ENVIRONMENT_1{{$payment_method->id}}">
                                                                                            <input type="radio"
                                                                                                   name="AUTHORIZE_NET_ENVIRONMENT"
                                                                                                   id="AUTHORIZE_NET_ENVIRONMENT_1{{$payment_method->id}}"
                                                                                                   @if(getPaymentEnv('AUTHORIZE_NET_ENVIRONMENT')!=0)
                                                                                                       checked
                                                                                                   @endif
                                                                                                   value="true"
                                                                                                   class="common-radio relationButton read-only-input">

                                                                                            <span
                                                                                                class="checkmark mr-2"></span> {{__('common.Live')}}
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                @elseif($payment_method->method == 'Braintree')

                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="row">
                                                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                    <div class='input-effect mb-25'>
                                                                        <input type="hidden"
                                                                               name="payment_method_id"
                                                                               value="{{$payment_method->id}}">
                                                                        <input type="text"
                                                                               id='{{$payment_method->id}}'
                                                                               value="{{ !empty(getPaymentEnv('BRAINTREE_MERCHANT_ID')) ? getPaymentEnv("BRAINTREE_MERCHANT_ID"):'' }}"
                                                                               class="primary-input form-control"
                                                                               name="BRAINTREE_MERCHANT_ID">
                                                                        <label for="{{$payment_method->id}}">
                                                                            <span>{{__('setting.Merchant ID')}}</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                    <div class='input-effect mb-25'>
                                                                        <input type="text"
                                                                               id='{{$payment_method->id}}'
                                                                               value="{{ !empty(getPaymentEnv('BRAINTREE_PUBLIC_KEY')) ? getPaymentEnv("BRAINTREE_PUBLIC_KEY"):'' }}"
                                                                               class="primary-input form-control"
                                                                               name="BRAINTREE_PUBLIC_KEY">
                                                                        <label for="{{$payment_method->id}}">
                                                                            <span>{{__('setting.Public Key')}}</span>
                                                                        </label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                    <div class='input-effect mb-25'>
                                                                        <input type="text"
                                                                               id='{{$payment_method->id}}'
                                                                               value="{{ !empty(getPaymentEnv('BRAINTREE_PRIVATE_KEY')) ? getPaymentEnv("BRAINTREE_PRIVATE_KEY"):'' }}"
                                                                               class="primary-input form-control"
                                                                               name="BRAINTREE_PRIVATE_KEY">
                                                                        <label for="{{$payment_method->id}}">
                                                                            <span>{{ trans('setting.Private Key')}}</span>
                                                                        </label>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                                                    <div class="row">
                                                                        <div class="col-lg-6 mb-25">
                                                                            <div class="input-effect">
                                                                                <div class="">
                                                                                    <div
                                                                                        class="text-left float-left">
                                                                                        <label
                                                                                            class="primary_checkbox d-flex mr-12"
                                                                                            for="BRAINTREE_ENVIRONMENT_0{{$payment_method->id}}">
                                                                                            <input type="radio"
                                                                                                   name="BRAINTREE_ENVIRONMENT"
                                                                                                   @if(getPaymentEnv('BRAINTREE_ENVIRONMENT')=="sandbox")
                                                                                                       checked
                                                                                                   @endif
                                                                                                   id="BRAINTREE_ENVIRONMENT_0{{$payment_method->id}}"
                                                                                                   value="sandbox"
                                                                                                   class="common-radio relationButton read-only-input">
                                                                                            <span
                                                                                                class="checkmark mr-2"></span> {{__('common.Sandbox')}}
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6 mb-25">
                                                                            <div class="input-effect">
                                                                                <div class="">
                                                                                    <div
                                                                                        class="text-left float-left">
                                                                                        <label
                                                                                            class="primary_checkbox d-flex mr-12"
                                                                                            for="BRAINTREE_ENVIRONMENT_1{{$payment_method->id}}">
                                                                                            <input type="radio"
                                                                                                   name="BRAINTREE_ENVIRONMENT"
                                                                                                   id="BRAINTREE_ENVIRONMENT_1{{$payment_method->id}}"
                                                                                                   @if(getPaymentEnv('BRAINTREE_ENVIRONMENT')!='sandbox')
                                                                                                       checked
                                                                                                   @endif
                                                                                                   value="production"
                                                                                                   class="common-radio relationButton read-only-input">

                                                                                            <span
                                                                                                class="checkmark mr-2"></span> {{__('common.Live')}}
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                @elseif ($payment_method->method == 'Mollie')
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class='input-effect mb-25'>
                                                                <input type="hidden" name="payment_method_id"
                                                                       value="{{$payment_method->id}}">
                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('MOLLIE_SECRET_KEY')) ? getPaymentEnv("MOLLIE_SECRET_KEY"):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="MOLLIE_SECRET_KEY">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ trans("setting.Secret Key")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>

                                                    </div>
                                                @elseif($payment_method->method == 'Flutterwave')
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class='input-effect mb-25'>
                                                                <input type="hidden" name="payment_method_id"
                                                                       value="{{$payment_method->id}}">
                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('FLW_PUBLIC_KEY')) ? getPaymentEnv("FLW_PUBLIC_KEY"):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="FLW_PUBLIC_KEY">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ trans("setting.Public Key")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-6">
                                                            <div class='input-effect mb-25'>

                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('FLW_SECRET_KEY')) ? getPaymentEnv("FLW_SECRET_KEY"):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="FLW_SECRET_KEY">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ trans("setting.Secret Key")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-6">
                                                            <div class='input-effect mb-25'>

                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('FLW_SECRET_HASH')) ? getPaymentEnv("FLW_SECRET_HASH"):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="FLW_SECRET_HASH">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ trans("setting.Secret Hash")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>


                                                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                                            <div class="row">
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div
                                                                                class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="FLW_ENVIRONMENT_0{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="FLW_ENVIRONMENT"
                                                                                           @if(getPaymentEnv('FLW_ENVIRONMENT')=="sandbox")
                                                                                               checked
                                                                                           @endif
                                                                                           id="FLW_ENVIRONMENT_0{{$payment_method->id}}"
                                                                                           value="sandbox"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Sandbox')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div
                                                                                class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="FLW_ENVIRONMENT_1{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="FLW_ENVIRONMENT"
                                                                                           id="FLW_ENVIRONMENT_1{{$payment_method->id}}"
                                                                                           @if(getPaymentEnv('FLW_ENVIRONMENT')!='sandbox')
                                                                                               checked
                                                                                           @endif
                                                                                           value="production"
                                                                                           class="common-radio relationButton read-only-input">

                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Live')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                @elseif($payment_method->method == 'Coinbase')
                                                    <div class="row">
                                                        <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                                                            <div class='input-effect mb-25'>
                                                                <input type="hidden" name="payment_method_id"
                                                                       value="{{$payment_method->id}}">
                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('COINBASE_API_KEY')) ? getPaymentEnv("COINBASE_API_KEY"):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="COINBASE_API_KEY">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ _trans("common.Api Key")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                                                            <div class='input-effect mb-25'>
                                                                <input type="hidden" name="payment_method_id"
                                                                       value="{{$payment_method->id}}">
                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('COINBASE_WEBHOOK_SECRET')) ? getPaymentEnv('COINBASE_WEBHOOK_SECRET'):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="COINBASE_WEBHOOK_SECRET">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ _trans("common.Webhook Secret")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                                                            <div class='input-effect mb-25'>
                                                                <input type="hidden" name="payment_method_id"
                                                                       value="{{$payment_method->id}}">
                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('COINBASE_API_VERSION')) ? getPaymentEnv('COINBASE_API_VERSION'):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="COINBASE_API_VERSION">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ _trans("common.Api Version")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                @elseif($payment_method->method == 'Jazz Cash')
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class='input-effect mb-25'>
                                                                <input type="hidden" name="payment_method_id"
                                                                       value="{{$payment_method->id}}">
                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('JAZZ_CASH_MERCHANT_ID')) ? getPaymentEnv("JAZZ_CASH_MERCHANT_ID"):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="JAZZ_CASH_MERCHANT_ID">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ _trans("common.Merchant ID")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class='input-effect mb-25'>
                                                                <input type="hidden" name="payment_method_id"
                                                                       value="{{$payment_method->id}}">
                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('JAZZ_CASH_PASSWORD')) ? getPaymentEnv("JAZZ_CASH_PASSWORD"):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="JAZZ_CASH_PASSWORD">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ _trans("common.Password")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class='input-effect mb-25'>
                                                                <input type="hidden" name="payment_method_id"
                                                                       value="{{$payment_method->id}}">
                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('JAZZ_CASH_INTEGRITY_SALT')) ? getPaymentEnv("JAZZ_CASH_INTEGRITY_SALT"):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="JAZZ_CASH_INTEGRITY_SALT">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ _trans("common.Integrity Salt")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="row">
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="mode_check_{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="JAZZ_CASH_ENVIROMENT"
                                                                                           @if(getPaymentEnv('JAZZ_CASH_ENVIROMENT')=='LIVE')
                                                                                               checked
                                                                                           @endif


                                                                                           id="mode_check_{{$payment_method->id}}"
                                                                                           value="LIVE"
                                                                                           class="common-radio relationButton read-only-input">

                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{_trans('common.LIVE')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 mb-25">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="mode_check_no_{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="JAZZ_CASH_ENVIROMENT"
                                                                                           @if(getPaymentEnv('JAZZ_CASH_ENVIROMENT')=='SANDBOX')
                                                                                               checked
                                                                                           @endif


                                                                                           id="mode_check_no_{{$payment_method->id}}"
                                                                                           value="SANDBOX"
                                                                                           class="common-radio relationButton read-only-input">

                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Sandbox')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                @elseif($payment_method->method == 'CCAvenue')

                                                    <div class="row">
                                                        <div class="col-lg-6 col-md-6">
                                                            <div class='input-effect mb-25'>
                                                                <input type="hidden" name="payment_method_id"
                                                                       value="{{$payment_method->id}}">
                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('CCA_KEY')) ? getPaymentEnv("CCA_KEY"):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="CCA_KEY">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ _trans("common.CC Key")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-6 col-md-6">
                                                            <div class='input-effect mb-25'>
                                                                <input type="hidden" name="payment_method_id"
                                                                       value="{{$payment_method->id}}">
                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('CCA_ACCESS_CODE')) ? getPaymentEnv("CCA_ACCESS_CODE"):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="CCA_ACCESS_CODE">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ _trans("common.Access Code")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-6 col-md-6">
                                                            <div class='input-effect mb-25'>
                                                                <input type="hidden" name="payment_method_id"
                                                                       value="{{$payment_method->id}}">
                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('CCA_MERCHANT_ID')) ? getPaymentEnv("CCA_MERCHANT_ID"):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="CCA_MERCHANT_ID">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ _trans("common.Merchant ID")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                @elseif($payment_method->method == 'Tranzak')
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4">
                                                            <div class='input-effect mb-25'>
                                                                <input type="hidden" name="payment_method_id"
                                                                       value="{{$payment_method->id}}">
                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('Tranzak_APP_ID')) ? getPaymentEnv("Tranzak_APP_ID"):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="Tranzak_APP_ID">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ _trans("setting.Api ID")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4">
                                                            <div class='input-effect mb-25'>
                                                                <input type="hidden" name="payment_method_id"
                                                                       value="{{$payment_method->id}}">
                                                                <input type="text" id='{{$payment_method->id}}'
                                                                       value="{{ !empty(getPaymentEnv('Tranzak_API_KEY')) ? getPaymentEnv("Tranzak_API_KEY"):'' }}"
                                                                       class="primary-input form-control"
                                                                       name="Tranzak_API_KEY">
                                                                <label for="{{$payment_method->id}}">
                                                                    <span>{{ _trans("setting.Api Key")}}</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div
                                                                                class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="Tranzak_ENVIRONMENT_0{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="Tranzak_ENVIRONMENT"
                                                                                           @if(getPaymentEnv('Tranzak_ENVIRONMENT')=="sandbox")
                                                                                               checked
                                                                                           @endif
                                                                                           id="Tranzak_ENVIRONMENT_0{{$payment_method->id}}"
                                                                                           value="sandbox"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Sandbox')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="input-effect">
                                                                        <div class="">
                                                                            <div
                                                                                class="text-left float-left">
                                                                                <label
                                                                                    class="primary_checkbox d-flex mr-12"
                                                                                    for="Tranzak_ENVIRONMENT_1{{$payment_method->id}}">
                                                                                    <input type="radio"
                                                                                           name="Tranzak_ENVIRONMENT"
                                                                                           @if(getPaymentEnv('Tranzak_ENVIRONMENT')=="live")
                                                                                               checked
                                                                                           @endif
                                                                                           id="Tranzak_ENVIRONMENT_1{{$payment_method->id}}"
                                                                                           value="live"
                                                                                           class="common-radio relationButton read-only-input">
                                                                                    <span
                                                                                        class="checkmark mr-2"></span> {{__('common.Live')}}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                @endif
                                                @if($payment_method->method!="Bank Payment" && $payment_method->method!="Offline Payment" && $payment_method->method!="Wallet")

                                                    <div class="row imageBox mt-4">
                                                        <div class="col-xl-6">
                                                            <div class="primary_input mb-35">
                                                                <label class="primary_input_label"
                                                                       for="">{{__('setting.Logo')}}</label>
                                                                <div class="primary_file_uploader">
                                                                    <input class="primary-input filePlaceholder"
                                                                           type="text"
                                                                           value="{{showPicName(@$payment_method->logo)}}"
                                                                           placeholder="Browse Image file"
                                                                           readonly="">
                                                                    <button class="" type="button">
                                                                        <label
                                                                            class="primary-btn small fix-gr-bg"
                                                                            for="document_file_1_edit_{{@$payment_method->id}}">{{__('common.Browse')}}</label>
                                                                        <input type="file"
                                                                               class="d-none fileUpload"
                                                                               name="logo"
                                                                               id="document_file_1_edit_{{@$payment_method->id}}"
                                                                        >
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <img class="  p-3 preview"
                                                                 style="max-height: 100px;max-width: 100%"
                                                                 src="{{asset($payment_method->logo)}}"
                                                                 alt="">
                                                        </div>
                                                    </div>
                                                @endif


                                                <div class="row mt-40">
                                                    <div class="col-lg-12 text-center">
                                                        <button type="submit" class="primary-btn fix-gr-bg">
                                                            <i class="ti-check"></i>
                                                            {{__('common.Update')}}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                            </div>
                        @endforeach

                    </div>
                </div>


            </div>
        </div>
    </section>

@endsection
@push('scripts')
    <script src="{{asset('public/backend/js/gateway.js')}}"></script>
@endpush
