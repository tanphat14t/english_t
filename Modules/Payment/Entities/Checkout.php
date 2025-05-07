<?php

namespace Modules\Payment\Entities;

use App\User;
use Carbon\Carbon;
use App\BillingDetails;
use App\Traits\Tenantable;
use Modules\BundleSubscription\Entities\BundleCoursePlan;
use Modules\Coupons\Entities\Coupon;
use Illuminate\Database\Eloquent\Model;
use Modules\CourseSetting\Entities\CourseEnrolled;
use Modules\Gift\Entities\GiftCart;
use Modules\Store\Entities\CancelReason;
use Modules\Store\Entities\OrderPackageDetail;
use Modules\Store\Entities\ShippingMethod;

class Checkout extends Model
{

    use Tenantable;

    protected $fillable = ['status'];

    protected $appends = ['dateFormat'];

    public function gifts()
    {
        return $this->hasMany(GiftCart::class, 'tracking', 'tracking');
    }

    public function coupon()
    {

        return $this->belongsTo(Coupon::class, 'coupon_id')->withDefault();
    }

    public function packages()
    {
        return $this->hasMany(OrderPackageDetail::class, 'order_id', 'id');
    }


    public function user()
    {

        return $this->belongsTo(User::class, 'user_id')->withDefault();
    }

    public function getdateFormatAttribute()
    {
        return Carbon::parse($this->created_at)->isoformat('Do MMMM Y');
    }

    public function courses()
    {
        return $this->hasMany(CourseEnrolled::class, 'tracking', 'tracking');
    }

    public function bill()
    {
        return $this->belongsTo(BillingDetails::class, 'tracking', 'tracking_id')->withDefault();

    }

    public function carts()
    {
        return $this->hasMany(Cart::class, 'tracking', 'tracking');
    }

    public function billing()
    {
        return $this->belongsTo(BillingDetails::class, 'billing_detail_id')->withDefault();
    }

    public function invoice()
    {
        return $this->belongsTo(\Modules\Invoice\Entities\Invoice::class, 'invoice_id', 'id')->withDefault();
    }

    public function bundle()
    {
        return $this->belongsTo(BundleCoursePlan::class, 'bundle_id', 'id')->withDefault();
    }

    public function shipping()
    {
        return $this->belongsTo(ShippingMethod::class, 'shipping_id', 'id')->withDefault();
    }

    public function cancel_reason()
    {
        return $this->belongsTo(CancelReason::class, 'cancel_reason_id', 'id');
    }

    public function singlePackage()
    {
        return $this->hasOne(OrderPackageDetail::class, 'order_id', 'id');
    }

    public function allPackage()
    {
        return $this->hasMany(OrderPackageDetail::class, 'order_id', 'id');
    }


}
