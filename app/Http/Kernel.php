<?php

namespace App\Http;

use App\Http\Middleware\ApiKeyMiddleware;
use App\Http\Middleware\AppOnlyModeMiddleware;
use App\Http\Middleware\CheckUserActiveStatus;
use App\Http\Middleware\HttpsProtocol;
use App\Http\Middleware\Impersonate;
use App\Http\Middleware\IpCheck;
use App\Http\Middleware\LastActivityMiddleware;
use App\Http\Middleware\MaintenanceModeMiddleware;
use App\Http\Middleware\SetLocale;

//use App\Http\Middleware\XAuthorizationHeader;
use App\Http\Middleware\XSS;
use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        // \App\Http\Middleware\TrustHosts::class,
        \App\Http\Middleware\TrustProxies::class,
        \Illuminate\Http\Middleware\HandleCors::class,
        \App\Http\Middleware\CheckForMaintenanceMode::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \App\Http\Middleware\TrimStrings::class,
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
//        XAuthorizationHeader::class

    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\Session\Middleware\AuthenticateSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Http\Middleware\VerifyCsrfToken::class,
            \Modules\Localization\Http\Middleware\Language::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
            SetLocale::class,
            CheckUserActiveStatus::class,
            XSS::class,
            IpCheck::class,
            HttpsProtocol::class,
            LastActivityMiddleware::class,
            Impersonate::class
        ],

        'api' => [
            'throttle:60,1',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
            ApiKeyMiddleware::class
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
        'admin' => \App\Http\Middleware\AdminMiddleware::class,
        'student' => \App\Http\Middleware\StudentMiddleware::class,
        'RoutePermissionCheck' => \App\Http\Middleware\RoutePermissionCheck::class,
        'maintenanceMode' => MaintenanceModeMiddleware::class,
        'onlyAppMode' => AppOnlyModeMiddleware::class,
        'subdomain' => \App\Http\Middleware\SubdomainMiddleware::class,
        'saasAdmin' => \App\Http\Middleware\SaasAdmin::class,
        'demo' => \App\Http\Middleware\DemoPreventMiddleware::class,
        '2fa' => \PragmaRX\Google2FALaravel\Middleware::class,
    ];
}
