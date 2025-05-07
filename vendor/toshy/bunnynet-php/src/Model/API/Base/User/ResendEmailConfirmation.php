<?php

declare(strict_types=1);

namespace ToshY\BunnyNet\Model\API\Base\User;

use ToshY\BunnyNet\Enum\Method;
use ToshY\BunnyNet\Model\EndpointInterface;

class ResendEmailConfirmation implements EndpointInterface
{
    public function getMethod(): Method
    {
        return Method::POST;
    }

    public function getPath(): string
    {
        return 'user/resend-email-confirmation';
    }

    public function getHeaders(): array
    {
        return [];
    }
}
