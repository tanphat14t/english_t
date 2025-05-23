<?php

namespace Modules\VirtualClass\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Notifications\GeneralNotification;
use App\Traits\UploadMedia;
use App\User;
use Brian2694\Toastr\Facades\Toastr;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Schema;
use JoisarJignesh\Bigbluebutton\Facades\Bigbluebutton;
use Modules\BBB\Entities\BbbMeeting;
use Modules\BBB\Entities\BbbMeetingUser;
use Modules\BBB\Entities\BbbSetting;
use Modules\BBB\Http\Controllers\BbbMeetingController;
use Modules\Certificate\Entities\Certificate;
use Modules\CertificatePro\Entities\CertificateTemplate;
use Modules\CourseSetting\Entities\Category;
use Modules\CourseSetting\Entities\Course;
use Modules\CourseSetting\Entities\CourseEnrolled;
use Modules\Forum\Services\ForumService;
use Modules\GoogleCalendar\Entities\GoogleCalendarEvent;
use Modules\GoogleCalendar\Events\GoogleCalendarDeleteEvent;
use Modules\GoogleCalendar\Events\GoogleCalendarSyncEvent;
use Modules\GoogleMeet\Entities\GoogleMeetMeeting;
use Modules\GoogleMeet\Events\MeetingDeleteEvent;
use Modules\GoogleMeet\Events\MeetingSyncEvent;
use Modules\InAppLiveClass\Entities\InAppLiveClassMeetingUser;
use Modules\InAppLiveClass\Http\Controllers\InAppLiveClassController;
use Modules\Jitsi\Entities\JitsiMeeting;
use Modules\Jitsi\Entities\JitsiMeetingUser;
use Modules\Jitsi\Http\Controllers\JitsiMeetingController;
use Modules\Localization\Entities\Language;
use Modules\Membership\Repositories\Interfaces\MembershipVirtualClassRepositoryInterface;
use Modules\Payment\Entities\Cart;
use Modules\VirtualClass\Entities\ClassComplete;
use Modules\VirtualClass\Entities\ClassSetting;
use Modules\VirtualClass\Entities\VirtualClass;
use Modules\Zoom\Entities\ZoomMeeting;
use Modules\Zoom\Entities\ZoomMeetingUser;
use Modules\Zoom\Entities\ZoomSetting;
use Modules\Zoom\Http\Controllers\MeetingController;
use Yajra\DataTables\Facades\DataTables;

class VirtualClassController extends Controller
{
    use UploadMedia;

    public function store(Request $request)
    {
        if (saasPlanCheck('meeting')) {
            Toastr::error('You have reached valid class limit', trans('common.Failed'));
            return redirect()->back();
        }
        if (demoCheck()) {
            return redirect()->back();
        }
        $code = auth()->user()->language_code;
        $request->merge(['time' => date('H:i A')]);
        $rules = [
            'title.' . $code => 'required|max:255',
            // 'duration' => 'required',
            'lang_id' => 'required',
            'host' => 'required',
            'start_date' => 'required',
            'end_date' => 'required_if:type,==,1',
            'recurring_type' => 'required_if:is_recurring,1',
            'recurring_repect_day' => 'required_if:is_recurring,1',
            'recurring_end_date' => 'required_if:is_recurring,1',
            'password' => 'required_if:host,==,Zoom',
            'attendee_password' => 'required_if:host,==,BBB',
            'moderator_password' => 'required_if:host,==,BBB',
            'attached_file' => 'nullable|mimes:jpeg,png,jpg,doc,docx,pdf,xls,xlsx',
        ];

        $this->validate($request, $rules, validationMessage($rules));

        // if (!$request->free && showEcommerce()) {
        //     $rules = [
        //         'fees' => 'required',
        //     ];
        //     $this->validate($request, $rules, validationMessage($rules));
        // }


        try {
            $class = new VirtualClass();
            if (isModuleActive('Membership')) {
                if ($request->filled('is_membership')) {
                    $class->is_membership = 1;
                }
            }
            foreach ($request->title as $key => $title) {
                $class->setTranslation('title', $key, $title);
            }
            if (showEcommerce()) {
                if ($request->free == '0') {
                    $class->fees = 0;
                } else {
                    $class->fees = (int)$request->fees;
                }
            } else {
                $class->fees = 0;
            }
            $class->duration = $request->duration;
            $class->category_id = (int)$request->category;
            $class->sub_category_id = (int)$request->sub_category;
            $class->type = (int)$request->get('type', 0);
            $class->host = $request->host;
            $class->lang_id = $request->lang_id;
            $class->capacity = $request->capacity;


            if ($request->type == 1) {


                if (!empty($request->start_date)) {
                    $class->start_date = Carbon::createFromFormat(getActivePhpDateFormat(), $request->start_date)->format('Y-m-d');
                }
                if (!empty($request->end_date)) {
                    $class->end_date = Carbon::createFromFormat(getActivePhpDateFormat(), $request->end_date)->format('Y-m-d');
                }
            } else {
                $class->start_date = Carbon::createFromFormat(getActivePhpDateFormat(), $request->date)->format('Y-m-d');
                $class->end_date = Carbon::createFromFormat(getActivePhpDateFormat(), $request->date)->format('Y-m-d');
            }
            if (!empty($request->time)) {
                $class->time = date("H:i", strtotime($request->time));
            }


            $class->save();
            Toastr::success('Operation Successful', 'Success');

            //             $course = new Course();
            //             $course->scope = $request->scope;
            //             $course->class_id = $class->id;
            //             $course->user_id = Auth::id();
            //             $course->lang_id = $request->lang_id;
            //             if (showEcommerce()) {
            //                 if ($request->free == '0') {
            //                     $course->price = 0;
            //                 } else {
            //                     $course->price = (int)$request->fees;
            //                 }
            //             } else {
            //                 $course->price = 0;
            //             }

            // //for support ticket
            //             if (isModuleActive('SupportTicket') && Schema::hasColumn('courses', 'support')) {
            //                 if (isset($request->support)) {
            //                     $course->support = true;
            //                 } else {
            //                     $course->support = false;
            //                 }
            //             }

            //             foreach ($request->title as $key => $title) {
            //                 $course->setTranslation('title', $key, $title);
            //             }

            //             foreach ($request->description as $key => $about) {
            //                 $course->setTranslation('about', $key, $about);
            //             }

            //             if (isModuleActive('Org')) {
            //                 $course->required_type = (int)$request->required_type;
            //             } else {
            //                 $course->required_type = 0;
            //             }

            //             if (Settings('frontend_active_theme') == "edume") {
            //                 $course->what_learn1 = $request->what_learn1;
            //                 $course->what_learn2 = $request->what_learn2;
            //             }

            //             if (isModuleActive('CertificatePro') && Settings('use_certificate_template') == 'pro') {
            //                 $course->pro_certificate_id = (int)$request->get('certificate', 0);
            //             } else {
            //                 $course->certificate_id = (int)$request->get('certificate', 0);
            //             }


            //             if (!empty($request->assign_instructor)) {
            //                 $course->user_id = $request->assign_instructor;
            //             }
            //             if (!empty($request->assistant_instructors)) {
            //                 $assistants = $request->assistant_instructors;
            //                 if (($key = array_search($course->user_id, $assistants)) !== false) {
            //                     unset($assistants[$key]);
            //                 }
            //                 if (!empty($assistants)) {
            //                     $course->assistant_instructors = json_encode(array_values($assistants));
            //                 }
            //             }
            //             $course->type = 3;
            //             $course->save();

            //             if ($request->image) {
            //                 $image = $this->generateLink($request->image, $course->id, get_class($course), 'image');
            //                 $course->image = $image;
            //                 $course->thumbnail = $image;
            //             }
            //             $course->save();

            //             $start_date = strtotime($class['start_date']);
            //             $end_date = strtotime($class['end_date']);
            //             if ($class->type == 0) {
            //                 $end_date = strtotime($class['start_date']);
            //             }

            // $datediff = $end_date - $start_date;

            // $days = ceil($datediff / (60 * 60 * 24)) + 1;

            // $class->duration = $request->duration;

            // $class->total_class = $days;

            // $class->save();
            // if (isModuleActive('Forum')) {
            //     $forumService = new ForumService();
            //     $forumService->autoTopic('topic', $course);
            // }

            // if ($days != 0) {
            //     for ($i = 0;
            //          $i < $days;
            //          $i++) {
            //         $new_date = date('m/d/Y', strtotime($class['start_date'] . '+' . $i . ' day'));

            //         if (isModuleActive('GoogleCalendar') && $class->host != 'GoogleMeet' && isset($request->allow_google_calendar) && $request->allow_google_calendar) {
            //             $custom_date = [
            //                 'main_model' => VirtualClass::class,
            //                 'main_model_id' => $class->id,
            //                 'sub_model' => null,
            //                 'sub_model_id' => null,
            //             ];
            //             Event::dispatch(new GoogleCalendarSyncEvent([], $custom_date, $class->id, $new_date));
            //         }

            //         if ($class->host == "Zoom") {

            //             $fileName = "";
            //             if ($request->file('attached_file') != "") {
            //                 $file = $request->file('attached_file');
            //                 $ignore = strtolower($file->getClientOriginalExtension());
            //                 if ($ignore != 'php') {
            //                     $fileName = $request->topic . time() . "." . $file->getClientOriginalExtension();
            //                     $file->move('public/uploads/zoom-meeting/', $fileName);
            //                     $fileName = 'public/uploads/zoom-meeting/' . $fileName;
            //                 }
            //             }
            //             $result = $this->createClassWithZoom($class, $new_date, $request, $fileName);


            //         } elseif ($class->host == "BBB") {
            //             if (isModuleActive('BBB')) {
            //                 $result = $this->createClassWithBBB($class, $new_date, $request);
            //             } else {
            //                 Toastr::error('Module not installed yet', 'Error!');
            //                 return back();
            //             }

            //         } elseif ($class->host == "Jitsi") {

            //             if (isModuleActive('Jitsi')) {
            //                 $result = $this->createClassWithJitsi($class, $new_date, $request);
            //             } else {
            //                 Toastr::error('Module not installed yet', 'Error!');
            //                 return back();
            //             }
            //         } elseif ($class->host == "InAppLiveClass") {

            //             if (isModuleActive('InAppLiveClass')) {

            //                 $agoraSettings = [
            //                     'chat' => $request->in_app_chat == 1 ? 1 : 0,
            //                     'audio' => $request->in_app_audio == 1 ? 1 : 0,
            //                     'video' => $request->in_app_video == 1 ? 1 : 0,
            //                     'share_screen' => $request->in_app_share_screen == 1 ? 1 : 0,
            //                 ];
            //                 $class->host_setting = json_encode($agoraSettings);
            //                 $class->save();
            //                 $result = $this->createClassWithInAppLiveClass($class, $new_date, $request);
            //             } else {
            //                 Toastr::error('Module not installed yet', 'Error!');
            //                 return back();
            //             }
            //         } elseif ($class->host == "GoogleMeet") {
            //             if (isModuleActive('GoogleMeet')) {
            //                 $response = Event::dispatch(new MeetingSyncEvent($class->id, $new_date));
            //                 $result = $response[0];
            //             } else {
            //                 Toastr::error('Module not installed yet', 'Error!');
            //                 return back();
            //             }

            //         } elseif ($class->host == "Custom") {
            //             $result = $this->createClassWithCustom($class, $new_date, $request);
            //         }


            //         if (isModuleActive('Membership')) {
            //             $request->merge([
            //                 'virtual_class_id' => $class->id,
            //             ]);

            //             $membershipInterface = App::make(MembershipVirtualClassRepositoryInterface::class);
            //             $membershipInterface->storeVirtualClassMember($request->except(['_token', 'url']));
            //         }
            //     }

            //     if (is_array($result)) {
            //         if ($result['type']) {
            //             Toastr::success('Operation Successful', 'Success');
            //         } else {
            //             Toastr::error($result['message'], 'Error!');
            //         }
            //     } else {
            //         Toastr::error(trans('common.Something Went Wrong'), 'Error!');
            //     }

            // }

            return back();
        } catch (Exception $e) {
            Toastr::error(trans('common.Something Went Wrong'), 'Error!');
            return back();
        }
    }

    public function createClassWithZoom($class, $date, $request, $fileName)
    {
        if (demoCheck()) {
            return redirect()->back();
        }
        $meeting = new MeetingController();
        $data = [];
        $data['instructor_id'] = Auth::user()->id;
        $data['class_id'] = $class->id;
        $data['topic'] = $class->getTranslation('title', app()->getLocale());
        $data['date'] = $date;
        $data['description'] = $class->course->getTranslation('about', app()->getLocale());
        $data['password'] = $request->password;
        $data['attached_file'] = $fileName;
        $data['time'] = $request->time;
        $data['duration'] = $request->duration;
        $data['is_recurring'] = $request->is_recurring;
        $data['recurring_type'] = $request->recurring_type;
        $data['recurring_repect_day'] = $request->recurring_repect_day;
        $data['recurring_end_date'] = $request->recurring_end_date;

        $setting = ZoomSetting::getData();

        $data['approval_type'] = $setting->approval_type;
        $data['auto_recording'] = $setting->auto_recording;
        $data['waiting_room'] = $setting->waiting_room;
        $data['audio'] = $setting->audio;
        $data['mute_upon_entry'] = $setting->mute_upon_entry;
        $data['host_video'] = $setting->host_video;
        $data['participant_video'] = $setting->participant_video;
        $data['join_before_host'] = $setting->join_before_host;

        $token = $meeting->createZoomToken();

        if (empty($token)) {
            Toastr::error(trans('virtual-class.Zoom API Authentication Issue'), trans('common.Failed'));
            return false;
        } else {
            return $meeting->classStore($token, $data);
        }
    }

    public function createClassWithBBB($class, $date, $request)
    {

        $data = [];
        $setting = BbbSetting::getData();
        $data['topic'] = $class->getTranslation('title', app()->getLocale());
        $data['instructor_id'] = Auth::user()->id;
        $data['class_id'] = $class->id;
        $data['attendee_password'] = $request->attendee_password;
        $data['moderator_password'] = $request->moderator_password;
        $data['date'] = $date;
        $data['time'] = $class->time;
        $data['welcome_message'] = $setting->welcome_message;
        $data['dial_number'] = $setting->dial_number;
        $data['max_participants'] = $setting->max_participants;
        $data['logout_url'] = $setting->logout_url;
        $data['record'] = $setting->record;
        $data['duration'] = $request->duration;
        $data['is_breakout'] = $setting->is_breakout;
        $data['moderator_only_message'] = $setting->moderator_only_message;
        $data['auto_start_recording'] = $setting->auto_start_recording;
        $data['allow_start_stop_recording'] = $setting->allow_start_stop_recording;
        $data['webcams_only_for_moderator'] = $setting->webcams_only_for_moderator;
        $data['copyright'] = $setting->copyright;
        $data['mute_on_start'] = $setting->mute_on_start;
        $data['lock_settings_disable_mic'] = $setting->lock_settings_disable_mic;
        $data['lock_settings_disable_private_chat'] = $setting->lock_settings_disable_private_chat;
        $data['lock_settings_disable_public_chat'] = $setting->lock_settings_disable_public_chat;
        $data['lock_settings_disable_note'] = $setting->lock_settings_disable_note;
        $data['lock_settings_locked_layout'] = $setting->lock_settings_locked_layout;
        $data['lock_settings_lock_on_join'] = $setting->lock_settings_lock_on_join;
        $data['lock_settings_lock_on_join_configurable'] = $setting->lock_settings_lock_on_join_configurable;
        $data['guest_policy'] = $setting->guest_policy;
        $data['redirect'] = $setting->redirect;
        $data['join_via_html5'] = $setting->join_via_html5;
        $data['state'] = $setting->state;
        $datetime = $date . " " . $class->time;
        $data['datetime'] = strtotime($datetime);


        $meeting = new BbbMeetingController();
        $result = $meeting->classStore($data);

        return $result;
    }

    public function createClassWithJitsi($class, $date, $request)
    {
        $data = [];
        $data['topic'] = $class->getTranslation('title', app()->getLocale());
        $data['description'] = $class->course->getTranslation('about', app()->getLocale());
        $data['duration'] = $request->duration;
        $data['jitsi_meeting_id'] = $request->jitsi_meeting_id;
        $data['instructor_id'] = Auth::user()->id;
        $data['class_id'] = $class->id;
        $data['date'] = $date;
        $data['time'] = $request->time;

        $meeting = new JitsiMeetingController();
        $result = $meeting->classStore($data);

        return $result;
    }

    public function createClassWithInAppLiveClass($class, $date, $request)
    {
        $data = [];
        $data['topic'] = $class->getTranslation('title', app()->getLocale());
        $data['description'] = $class->course->getTranslation('about', app()->getLocale());
        $data['duration'] = $request->duration;
        $data['jitsi_meeting_id'] = $request->jitsi_meeting_id;
        $data['instructor_id'] = Auth::user()->id;
        $data['class_id'] = $class->id;
        $data['date'] = $date;
        $data['time'] = $request->time;

        $meeting = new InAppLiveClassController();
        $result = $meeting->classStore($data);

        return $result;
    }

    public function createClassWithCustom($class, $date, $request)
    {
        $data['topic'] = $class->getTranslation('title', app()->getLocale());
        $data['description'] = $class->course->getTranslation('about', app()->getLocale());
        $data['duration'] = $request->duration;
        $data['instructor_id'] = Auth::user()->id;
        $data['class_id'] = $class->id;
        $data['date'] = $date;
        $data['time'] = $request->time;

        $meeting = new CustomMeetingController();
        return $meeting->classStore($data);
    }

    public function show($id)
    {
        return view('virtualclass::show');
    }

    public function edit($id)
    {
        $user = Auth::user();
        if ($user->role_id == 2) {
            $classes = VirtualClass::with('category', 'subCategory', 'language')->whereHas('course', function ($query) {
                $query->where('user_id', '=', Auth::user()->id);
            })->latest()->get();
        } else {
            $classes = VirtualClass::with('category', 'subCategory', 'language')->latest()->get();
        }
        $data = [
            'languages' => Language::where('status', 1)->get(),
            'classes' => $classes,
            'class' => VirtualClass::with('course')->find($id),
            'categories' => Category::where('status', 1)->orderBy('position_order', 'ASC')->get()
        ];
        if (isModuleActive('CertificatePro') && Settings('use_certificate_template') == 'pro') {
            if (Auth::user()->role_id == 1) {
                $certificates_query = CertificateTemplate::query();
            } else {
                $certificates_query = CertificateTemplate::query()->where('created_by', Auth::user()->id);
            }
        } else {
            if (Auth::user()->role_id == 1) {
                $certificates_query = Certificate::query();
            } else {
                $certificates_query = Certificate::query()->where('created_by', Auth::user()->id);
            }
        }

        if (isModuleActive('Organization') && Auth::user()->isOrganization()) {
            $certificates_query->whereHas('user', function ($q) {
                $q->where('organization_id', Auth::id());
                $q->orWhere('id', Auth::id());
            });
        }

        $data['certificates'] = $certificates_query->latest()->get();

        if (isModuleActive('Membership')) {
            $interface = App::make(MembershipVirtualClassRepositoryInterface::class);
            $data += $interface->index();
        }
        $data['instructors'] = User::whereIn('role_id', [1, 2])->where('status', 1)->select('name', 'id')->get();
        return view('virtualclass::class.index')->with($data);
    }

    public function index()
    {
        $user = Auth::user();
        if ($user->role_id == 2) {
            $classes = VirtualClass::with('category', 'subCategory', 'language')->whereHas('course', function ($query) {
                $query->where('user_id', '=', Auth::user()->id);
            })->latest()->get();
        } else {
            $classes = VirtualClass::with('category', 'subCategory', 'language')->latest()->get();
        }
        $data = [
            'languages' => getLanguageList(),
            'classes' => $classes,
            'categories' => Category::with('childs')->where('status', 1)->orderBy('position_order', 'ASC')->get(),
        ];
        $data['instructors'] = User::whereIn('role_id', [1, 2])->where('status', 1)->select('name', 'id')->get();
        if (isModuleActive('CertificatePro') && Settings('use_certificate_template') == 'pro') {
            if (Auth::user()->role_id == 1) {
                $certificates_query = CertificateTemplate::query();
            } else {
                $certificates_query = CertificateTemplate::query()->where('created_by', Auth::user()->id);
            }
        } else {
            if (Auth::user()->role_id == 1) {
                $certificates_query = Certificate::query();
            } else {
                $certificates_query = Certificate::query()->where('created_by', Auth::user()->id);
            }
        }

        if (isModuleActive('Organization') && Auth::user()->isOrganization()) {
            $certificates_query->whereHas('user', function ($q) {
                $q->where('organization_id', Auth::id());
                $q->orWhere('id', Auth::id());
            });
        }

        $data['certificates'] = $certificates_query->latest()->get();

        if (isModuleActive('Membership')) {
            $interface = App::make(MembershipVirtualClassRepositoryInterface::class);
            $data += $interface->index();
        }
        return view('virtualclass::class.index')->with($data);
    }

    public function update(Request $request, $id)
    {
        dd(1);
        if (demoCheck()) {
            return redirect()->back();
        }
        $code = auth()->user()->language_code;

        $rules = [
            'title.' . $code => 'required|max:255',
            'duration' => 'required',
            'date' => 'required_if:type,==,0',
            'start_date' => 'required_if:type,==,1',
            'end_date' => 'required_if:type,==,1',
        ];
        $this->validate($request, $rules, validationMessage($rules));

        if (!$request->free && showEcommerce()) {
            $rules = [
                'fees' => 'required',
            ];
            $this->validate($request, $rules, validationMessage($rules));
        }

        try {
            $class = VirtualClass::find($id);
            foreach ($request->title as $key => $title) {
                $class->setTranslation('title', $key, $title);
            }
            $class->duration = $request->duration;
            $class->category_id = $request->category;
            $class->sub_category_id = $request->sub_category;
            if (showEcommerce()) {
                if ($request->free == '0') {
                    $class->fees = 0;
                } else {
                    $class->fees = (float)$request->fees;
                }
            } else {
                $class->fees = 0;
            }

            $class->type = (int)$request->get('type', 0);


            if ($request->type == 0) {
                if (!empty($request->date)) {
                    $class->start_date = Carbon::createFromFormat(getActivePhpDateFormat(), $request->date)->format('Y-m-d');
                    $class->end_date = Carbon::createFromFormat(getActivePhpDateFormat(), $request->date)->format('Y-m-d');
                }
            } else {
                if (!empty($request->start_date)) {
                    $class->start_date = Carbon::createFromFormat(getActivePhpDateFormat(), $request->start_date)->format('Y-m-d');
                }
                if (!empty($request->end_date)) {
                    $class->end_date = Carbon::createFromFormat(getActivePhpDateFormat(), $request->end_date)->format('Y-m-d');
                }
            }

            if (!empty($request->time)) {
                $class->time = date("H:i", strtotime($request->time));
            }


            $class->capacity = $request->capacity;

            $class->save();

            $course = Course::where('class_id', $id)->where('type', 3)->first();
            $course->scope = $request->scope;
            if (!empty($request->assign_instructor)) {
                $course->user_id = $request->assign_instructor;
            }


            if (!empty($request->assistant_instructors)) {
                $assistants = $request->assistant_instructors;
                if (($key = array_search($course->user_id, $assistants)) !== false) {
                    unset($assistants[$key]);
                }
                if (!empty($assistants)) {
                    $course->assistant_instructors = json_encode(array_values($assistants));
                }
            }
            if (isModuleActive('Org')) {
                $course->required_type = $request->required_type;
            } else {
                $course->required_type = 0;
            }
            //for support ticket
            if (isModuleActive('SupportTicket') && Schema::hasColumn('courses', 'support')) {
                if (isset($request->support)) {
                    $course->support = true;
                } else {
                    $course->support = false;
                }
            }

            $course->lang_id = 1;
            foreach ($request->title as $key => $title) {
                $course->setTranslation('title', $key, $title);
            }

            foreach ($request->description as $key => $about) {
                $course->setTranslation('about', $key, $about);
            }
            if (showEcommerce()) {
                if ($request->free == '0') {
                    $course->price = 0;
                } else {
                    $course->price = (float)$request->fees;
                }
            } else {
                $course->price = 0;
            }
            if (Settings('frontend_active_theme') == "edume") {
                $course->what_learn1 = $request->what_learn1;
                $course->what_learn2 = $request->what_learn2;
            }

            if (isModuleActive('CertificatePro') && Settings('use_certificate_template') == 'pro') {
                $course->pro_certificate_id = (int)$request->get('certificate', 0);
            } else {
                $course->certificate_id = (int)$request->get('certificate', 0);
            }


            $class->category_id = (int)$request->category;
            $class->sub_category_id = (int)$request->sub_category;

            $course->image = null;
            $course->thumbnail = null;
            $course->save();


            $this->removeLink($course->id, get_class($course));
            if ($request->image) {
                $userImage = $this->generateLink($request->image, $course->id, get_class($course), 'image');
                $course->image = $userImage;
                $course->thumbnail = $userImage;
            }
            $course->save();

            $start_time = $class->time;

            $start_time_timestamp = strtotime($class->time);
            $end_time = date("H:i", strtotime('+' . $class->duration . ' minutes', $start_time_timestamp));


            $start_date = strtotime($class['start_date']);
            $end_date = strtotime($class['end_date']);
            if ($class->type == 0) {
                $end_date = strtotime($class['start_date']);
            }

            $datediff = $end_date - $start_date;
            $totalClass = ceil($datediff / (60 * 60 * 24)) + 1;

            //            $class->total_class = $totalClass;
            //            $class->save();


            if (isModuleActive('GoogleCalendar') && $class->host != 'GoogleMeet') {
                $custom_date = [
                    'main_model' => VirtualClass::class,
                    'main_model_id' => $class->id,
                    'sub_model' => null,
                    'sub_model_id' => null,
                ];

                $all_events = GoogleCalendarEvent::where('main_model', VirtualClass::class)->where('main_model_id', $class->id)->get();

                foreach ($all_events as $event) {
                    if ($event->google_calendar_id) {
                        Event::dispatch(new GoogleCalendarDeleteEvent($event->google_calendar_id));
                    }
                    $event->delete();
                }

                if ($totalClass != 0 && isset($request->allow_google_calendar) && $request->allow_google_calendar) {
                    for (
                        $i = 0;
                        $i < $totalClass;
                        $i++
                    ) {
                        $new_date = date('m/d/Y', strtotime($class['start_date'] . '+' . $i . ' day'));

                        Event::dispatch(new GoogleCalendarSyncEvent([], $custom_date, $class->id, $new_date));
                    }
                }
            }


            if ($class->host == "Zoom") {
                $all = $class->zoomMeetings;
                foreach ($all as $zoom) {

                    if (file_exists($zoom->attached_file)) {
                        unlink($zoom->attached_file);
                    }
                    ZoomMeetingUser::where('meeting_id', $zoom->meeting_id)->delete();
                    $zoom->delete();
                    $class->total_class = $class->total_class - 1;
                    $class->save();
                }

                if ($totalClass != 0) {
                    for (
                        $i = 0;
                        $i < $totalClass;
                        $i++
                    ) {
                        $new_date = date('m/d/Y', strtotime($class['start_date'] . '+' . $i . ' day'));

                        $this->createClassWithZoom($class, $new_date, $request, null);
                    }
                }
            } elseif ($class->host == "BBB") {
                $all = $class->bbbMeetings;
                foreach ($all as $bbb) {
                    BbbMeetingUser::where('meeting_id', $bbb->id)->delete();
                    $bbb->delete();
                    $class->total_class = $class->total_class - 1;
                    $class->save();
                }

                if ($totalClass != 0) {
                    for (
                        $i = 0;
                        $i < $totalClass;
                        $i++
                    ) {
                        $new_date = date('m/d/Y', strtotime($class['start_date'] . '+' . $i . ' day'));


                        if (isModuleActive('BBB')) {
                            $this->createClassWithBBB($class, $new_date, $request);
                        } else {
                            Toastr::error('Module not installed yet', 'Error!');
                            return back();
                        }
                    }
                }
            } elseif ($class->host == "Jitsi") {
                $all = $class->jitsiMeetings;


                foreach ($all as $jitsi) {
                    JitsiMeetingUser::where('meeting_id', $jitsi->id)->delete();
                    $jitsi->delete();
                    $class->total_class = $class->total_class - 1;
                    $class->save();
                }

                if ($totalClass != 0) {
                    for (
                        $i = 0;
                        $i < $totalClass;
                        $i++
                    ) {
                        $new_date = date('m/d/Y', strtotime($class['start_date'] . '+' . $i . ' day'));


                        if (isModuleActive('Jitsi')) {
                            $this->createClassWithJitsi($class, $new_date, $request);
                        } else {
                            Toastr::error('Module not installed yet', 'Error!');
                            return back();
                        }
                    }
                }
            } elseif ($class->host == "InAppLiveClass") {
                $all = $class->inAppMeetings;


                foreach ($all as $inApp) {
                    InAppLiveClassMeetingUser::where('meeting_id', $inApp->id)->delete();
                    $inApp->delete();
                    $class->total_class = $class->total_class - 1;
                    $class->save();
                }

                if ($totalClass != 0) {
                    for (
                        $i = 0;
                        $i < $totalClass;
                        $i++
                    ) {
                        $new_date = date('m/d/Y', strtotime($class['start_date'] . '+' . $i . ' day'));


                        if (isModuleActive('InAppLiveClass')) {
                            $this->createClassWithInAppLiveClass($class, $new_date, $request);
                        } else {
                            Toastr::error('Module not installed yet', 'Error!');
                            return back();
                        }
                    }
                }
            } elseif ($class->host == "GoogleMeet") {
                $all = $class->googleMeetMeetings;
                foreach ($all as $meet) {
                    if ($meet->meetingId) {
                        Event::dispatch(new MeetingDeleteEvent($meet->meetingId));
                    }

                    $meet->delete();
                    $class->total_class = $class->total_class - 1;
                    $class->save();
                }

                if ($totalClass != 0) {
                    for (
                        $i = 0;
                        $i < $totalClass;
                        $i++
                    ) {
                        $new_date = date('m/d/Y', strtotime($class['start_date'] . '+' . $i . ' day'));
                        Event::dispatch(new MeetingSyncEvent($class->id, $new_date));
                    }
                }
            }


            $this->deleteClassComplete($course->id, $class->id);

            $datediff = $end_date - $start_date;
            $totalClass = ceil($datediff / (60 * 60 * 24)) + 1;
            $class->total_class = $totalClass;
            $class->save();


            $receivers = $class->course->enrollUsers;
            if ($class->type == 0) {
                $message = "Your virtual class " . $class->getTranslation('title', app()->getLocale()) . " has been updated. Date :" . showDate($class->start_date) . "and Time is :" . $class->time;
            } else {
                $message = "Your virtual class " . $class->getTranslation('title', app()->getLocale()) . " has been updated. Date :" . showDate($class->start_date) .
                    "To " . showDate($class->end_date) . "and Time is :" . $class->time;
            }


            foreach ($receivers as $key => $receiver) {
                $details = [
                    'title' => 'Virtual Class Update ',
                    'body' => $message,
                    'actionText' => 'Visit',
                    'actionURL' => route('classDetails', $class->course->slug),
                ];
                Notification::send($receiver, new GeneralNotification($details));
            }


            Toastr::success('Class has been Updated', 'Success!');
            return redirect()->route('virtual-class.index');
        } catch (Exception $e) {
            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());
        }
    }

    public function deleteClassComplete($course_id, $class_id)
    {
        $completes = ClassComplete::where('course_id', $course_id)->where('class_id', $class_id)->get();
        foreach ($completes as $complete) {
            $complete->delete();
        }
        return true;
    }

    public function destroy(Request $request)
    {
        if (demoCheck()) {
            return redirect()->back();
        }
        try {

            $id = $request->id;
            $course = Course::where('class_id', $id)->first();
            if ($course) {
                $hasCourse = CourseEnrolled::where('course_id', $course->id)->count();
                if ($hasCourse != 0) {
                    Toastr::error('Course Already Enrolled By ' . $hasCourse . ' Student', trans('common.Failed'));
                    return redirect()->back();
                }

                $carts = Cart::where('course_id', $course->id)->get();
                foreach ($carts as $cart) {
                    $cart->delete();
                }
            }

            $class = VirtualClass::find($id);
            if ($class) {
                if ($class->host == "BBB") {
                    if (isModuleActive('BBB')) {
                        $bbbClass = BbbMeeting::where('class_id', $id)->get();
                        $bbbClass->each->delete();
                    }
                } elseif ($class->host == 'Zoom') {
                    $zoomClass = ZoomMeeting::where('class_id', $id)->get();

                    foreach ($zoomClass as $cls) {
                        $cls->delete();
                    }
                } elseif ($class->host == 'Jitsi') {
                    if (isModuleActive('Jitsi')) {
                        $JitsiClass = JitsiMeeting::where('class_id', $id)->get();
                        $JitsiClass->each->delete();
                    }
                } elseif ($class->host == 'GoogleMeet') {
                    if (isModuleActive('GoogleMeet')) {
                        $all = GoogleMeetMeeting::where('class_id', $id)->get();
                        foreach ($all as $meet) {
                            if ($meet->meetingId) {
                                Event::dispatch(new MeetingDeleteEvent($meet->meetingId));
                            }

                            $meet->delete();
                        }
                    }
                }
            }

            if ($course && $class) {
                $this->deleteClassComplete($course->id, $class->id);
            }

            if ($course) {
                $course->delete();
            }
            if ($class) {
                $class->delete();
            }


            Toastr::success('Class has been Deleted', 'Success!');

            return back();
        } catch (Exception $e) {
            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());
        }
    }

    public function setting(Request $request)
    {
        $setting = ClassSetting::getData();

        return view('virtualclass::class.class_setup', compact('setting'));
    }

    //    public function createMeetingStore(Request $request, $class_id)
    //    {
    //        if (demoCheck()) {
    //            return redirect()->back();
    //        }
    //        $class = VirtualClass::findOrFail($class_id);
    //
    //        if ($class->type == 0) {
    //            if (strtotime($class->start_date) != strtotime($request->date)) {
    //                Toastr::error("Date is not correct", 'Error!');
    //                return back();
    //            }
    //        } else {
    //            if (strtotime($class->start_date) > strtotime($request->date) || (strtotime($request->date) > strtotime($class->end_date))) {
    //                Toastr::error("Date is not correct", 'Error!');
    //                return back();
    //            }
    //        }
    //
    //
    //        $instructor_id = Auth::user()->id;
    //        $rules = [
    //            'topic' => 'required',
    //            'description' => 'nullable',
    //            'password' => 'required',
    //            'attached_file' => 'nullable|mimes:jpeg,png,jpg,doc,docx,pdf,xls,xlsx',
    //            'time' => 'required',
    //            'durration' => 'required',
    //            'join_before_host' => 'required',
    //            'host_video' => 'required',
    //            'participant_video' => 'required',
    //            'mute_upon_entry' => 'required',
    //            'waiting_room' => 'required',
    //            'audio' => 'required',
    //            'auto_recording' => 'nullable',
    //            'approval_type' => 'required',
    //            'is_recurring' => 'required',
    //            'recurring_type' => 'required_if:is_recurring,1',
    //            'recurring_repect_day' => 'required_if:is_recurring,1',
    //            'recurring_end_date' => 'required_if:is_recurring,1',
    //        ];
    //        $this->validate($request, $rules, validationMessage($rules));
    //
    //        try {
    //            //Available time check for classs
    //            if ($this->isTimeAvailableForMeeting($request, $id = 0)) {
    //                Toastr::error('Virtual class time is not available for teacher!', 'Failed');
    //                return redirect()->back();
    //            }
    //
    //            //Chekc the number of api request by today max limit 100 request
    //            if (ZoomMeeting::whereDate('created_at', Carbon::now())->count('id') >= 100) {
    //                Toastr::error('You can not create more than 100 meeting within 24 hour!', 'Failed');
    //                return redirect()->back();
    //            }
    //
    //
    //            $users = Zoom::user()->where('status', 'active')->setPaginate(false)->setPerPage(300)->get()->toArray();
    //
    //            $profile = $users['data'][0];
    //            $start_date = Carbon::parse($request['date'])->format('Y-m-d') . ' ' . date("H:i:s", strtotime($request['time']));
    //            $meeting = Zoom::meeting()->make([
    //                "topic" => $request['topic'],
    //                "type" => $request['is_recurring'] == 1 ? 8 : 2,
    //                "duration" => $request['durration'],
    //                "timezone" => Settings('active_time_zone'),
    //                "password" => $request['password'],
    //                "start_time" => new Carbon($start_date),
    //            ]);
    //
    //            $meeting->settings()->make([
    //                'join_before_host' => $this->setTrueFalseStatus($request['join_before_host']),
    //                'host_video' => $this->setTrueFalseStatus($request['host_video']),
    //                'participant_video' => $this->setTrueFalseStatus($request['participant_video']),
    //                'mute_upon_entry' => $this->setTrueFalseStatus($request['mute_upon_entry']),
    //                'waiting_room' => $this->setTrueFalseStatus($request['waiting_room']),
    //                'audio' => $request['audio'],
    //                'auto_recording' => $request->has('auto_recording') ? $request['auto_recording'] : 'none',
    //                'approval_type' => $request['approval_type'],
    //            ]);
    //
    //            if ($request['is_recurring'] == 1) {
    //                $end_date = Carbon::parse($request['recurring_end_date'])->endOfDay();
    //                $meeting->recurrence()->make([
    //                    'type' => $request['recurring_type'],
    //                    'repeat_interval' => $request['recurring_repect_day'],
    //                    'end_date_time' => $end_date
    //                ]);
    //            }
    //            $meeting_details = Zoom::user()->find($profile['id'])->meetings()->save($meeting);
    //
    //
    //            $fileName = "";
    //            if ($request->file('attached_file') != "") {
    //                $file = $request->file('attached_file');
    //                $ignore = strtolower($file->getClientOriginalExtension());
    //                if ($ignore != 'php') {
    //                    $fileName = $request['topic'] . time() . "." . $file->getClientOriginalExtension();
    //                    $file->move('public/uploads/zoom-meeting/', $fileName);
    //                    $fileName = 'public/uploads/zoom-meeting/' . $fileName;
    //                }
    //            }
    //            $system_meeting = ZoomMeeting::create([
    //                'topic' => $request['topic'],
    //                'class_id' => $class_id,
    //                'instructor_id' => $instructor_id,
    //                'description' => $request['description'],
    //                'date_of_meeting' => $request['date'],
    //                'time_of_meeting' => $request['time'],
    //                'meeting_duration' => $request['durration'],
    //
    //                'host_video' => $request['host_video'],
    //                'participant_video' => $request['participant_video'],
    //                'join_before_host' => $request['join_before_host'],
    //                'mute_upon_entry' => $request['mute_upon_entry'],
    //                'waiting_room' => $request['waiting_room'],
    //                'audio' => $request['audio'],
    //                'auto_recording' => $request->has('auto_recording') ? $request['auto_recording'] : 'none',
    //                'approval_type' => $request['approval_type'],
    //
    //                'is_recurring' => $request['is_recurring'],
    //                'recurring_type' => $request['is_recurring'] == 1 ? $request['recurring_type'] : null,
    //                'recurring_repect_day' => $request['is_recurring'] == 1 ? $request['recurring_repect_day'] : null,
    //                'recurring_end_date' => $request['is_recurring'] == 1 ? $request['recurring_end_date'] : null,
    //                'meeting_id' => (string)$meeting_details->id,
    //                'password' => $meeting_details->password,
    //                'start_time' => Carbon::parse($start_date)->toDateTimeString(),
    //                'end_time' => Carbon::parse($start_date)->addMinute($request['durration'] ?? 0)->toDateTimeString(),
    //                'attached_file' => $fileName,
    //                'created_by' => Auth::user()->id,
    //            ]);
    //
    //
    //            $user = new ZoomMeetingUser();
    //            $user->meeting_id = $system_meeting->id;
    //            $user->user_id = $instructor_id;
    //            $user->host = 1;
    //            $user->save();
    //
    //            $class->total_class = $class->total_class + 1;
    //            $class->save();
    //
    //            if ($system_meeting) {
    //                Toastr::success(trans('common.Operation successful'), trans('common.Success'));
    //                return redirect()->route('virtual-class.details', $class_id);
    //            } else {
    //                Toastr::error(trans('common.Operation failed'), trans('common.Failed'));
    //                return redirect()->back();
    //            }
    //        } catch (Exception $e) {
    //            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());
    //        }
    //
    //    }

    public function settingUpdate(Request $request)
    {
        if (demoCheck()) {
            return redirect()->back();
        }
        $setting = ClassSetting::first();
        $setting->default_class = $request->class;
        $setting->save();

        Toastr::success('Class Settings Has been Update Successfully');
        return back();
    }

    public function details($id)
    {

        $class = VirtualClass::findOrFail($id);
        $currency = Settings('currency_symbol');
        $user = Auth::user();
        return view('virtualclass::class.class_details', compact('class', 'currency', 'user'));
    }

    public function createMeeting($id)
    {
        if (demoCheck()) {
            return redirect()->back();
        }
        $class = VirtualClass::findOrFail($id);

        if ($class->host == "Zoom") {
            $data = $this->defaultPageData();
            $data['user'] = Auth::user();
            $data['class'] = $class;
            return view('virtualclass::meeting.zoom_meeting', $data);
        } elseif ($class->host == "BBB") {
            if (!isModuleActive('BBB')) {
                Toastr::error('Module not installed yet.', 'Error!');
                return back();
            }
            $data['env']['security_salt'] = config('bigbluebutton.BBB_SECURITY_SALT');
            $data['env']['server_base_url'] = config('bigbluebutton.BBB_SERVER_BASE_URL');
            $data['class'] = $class;
            return view('virtualclass::meeting.bbb_meeting', $data);
        } elseif ($class->host == "Jitsi") {
            if (!isModuleActive('Jitsi')) {
                Toastr::error('Module not installed yet.', 'Error!');
                return back();
            }
            $data['env']['security_salt'] = config('bigbluebutton.BBB_SECURITY_SALT');
            $data['env']['server_base_url'] = config('bigbluebutton.BBB_SERVER_BASE_URL');
            $data['class'] = $class;
            return view('virtualclass::meeting.jitsi_meeting', $data);
        } else {
            Toastr::error(trans('common.Something Went Wrong'), 'Error!');
            return back();
        }
    }

    private function defaultPageData()
    {
        $user = Auth::user();
        $data['default_settings'] = ZoomSetting::firstOrCreate([
            'user_id' => $user->id
        ], [
            '$user->id' => $user->id,
        ]);

        if (Auth::user()->role_id == 1) {
            $data['meetings'] = ZoomMeeting::orderBy('id', 'DESC')->whereHas('participates', function ($query) {
                return $query->where('user_id', Auth::user()->id);
            })
                ->where('status', 1)
                ->get();
        } else {
            $data['meetings'] = ZoomMeeting::orderBy('id', 'DESC')->get();
        }
        return $data;
    }

    public function bbbMeetingStore(Request $request, $class_id)
    {
        if (demoCheck()) {
            return redirect()->back();
        }
        $class = VirtualClass::findOrFail($class_id);
        if ($class->type == 0) {
            if (strtotime($class->start_date) != strtotime($request->date)) {
                Toastr::error("Date is not correct", 'Error!');
                return back();
            }
        } else {
            if (strtotime($class->start_date) > strtotime($request->date) || (strtotime($request->date) > strtotime($class->end_date))) {
                Toastr::error("Date is not correct", 'Error!');
                return back();
            }
        }
        $topic = $request->get('topic');
        $instructor_id = Auth::user()->id;
        $attendee_password = $request->get('attendee_password');
        $moderator_password = $request->get('moderator_password');
        $date = $request->get('date');
        $time = $request->get('time');

        $welcome_message = $request->get('welcome_message');
        $dial_number = $request->get('dial_number');
        $max_participants = $request->get('max_participants');
        $logout_url = $request->get('logout_url');
        $record = $request->get('record');
        $duration = $request->get('duration');
        $is_breakout = $request->get('is_breakout');
        $moderator_only_message = $request->get('moderator_only_message');
        $auto_start_recording = $request->get('auto_start_recording');
        $allow_start_stop_recording = $request->get('allow_start_stop_recording');
        $webcams_only_for_moderator = $request->get('webcams_only_for_moderator');
        $copyright = $request->get('copyright');
        $mute_on_start = $request->get('mute_on_start');
        $lock_settings_disable_mic = $request->get('lock_settings_disable_mic');
        $lock_settings_disable_private_chat = $request->get('lock_settings_disable_private_chat');
        $lock_settings_disable_public_chat = $request->get('lock_settings_disable_public_chat');
        $lock_settings_disable_note = $request->get('lock_settings_disable_note');
        $lock_settings_locked_layout = $request->get('lock_settings_locked_layout');
        $lock_settings_lock_on_join = $request->get('lock_settings_lock_on_join');
        $lock_settings_lock_on_join_configurable = $request->get('lock_settings_lock_on_join_configurable');
        $guest_policy = $request->get('guest_policy');
        $redirect = $request->get('redirect');
        $join_via_html5 = $request->get('join_via_html5');
        $state = $request->get('state');
        $datetime = $date . " " . $time;
        $datetime = strtotime($datetime);

        $rules = [
            'topic' => 'required',
            'attendee_password' => 'required',
            'moderator_password' => 'required',
            'date' => 'required',
            'time' => 'required',

        ];
        $this->validate($request, $rules, validationMessage($rules));


        try {


            $createMeeting = Bigbluebutton::create([
                'meetingID' => "spn-" . date('ymd' . rand(0, 100)),
                'meetingName' => $topic,
                'attendeePW' => $attendee_password,
                'moderatorPW' => $moderator_password,
                'welcomeMessage' => $welcome_message,
                'dialNumber' => $dial_number,
                'maxParticipants' => $max_participants,
                'logoutUrl' => $logout_url,
                'record' => $record,
                'duration' => $duration,
                'isBreakout' => $is_breakout,
                'moderatorOnlyMessage' => $moderator_only_message,
                'autoStartRecording' => $auto_start_recording,
                'allowStartStopRecording' => $allow_start_stop_recording,
                'webcamsOnlyForModerator' => $webcams_only_for_moderator,
                'copyright' => $copyright,
                'muteOnStart' => $mute_on_start,
                'lockSettingsDisableMic' => $lock_settings_disable_mic,
                'lockSettingsDisablePrivateChat' => $lock_settings_disable_private_chat,
                'lockSettingsDisablePublicChat' => $lock_settings_disable_public_chat,
                'lockSettingsDisableNote' => $lock_settings_disable_note,
                'lockSettingsLockedLayout' => $lock_settings_locked_layout,
                'lockSettingsLockOnJoin' => $lock_settings_lock_on_join,
                'lockSettingsLockOnJoinConfigurable' => $lock_settings_lock_on_join_configurable,
                'guestPolicy' => $guest_policy,
                'redirect' => $redirect,
                'joinViaHtml5' => $join_via_html5,
                'state' => $state,
            ]);

            if ($createMeeting) {
                $local_meeting = BbbMeeting::create([
                    'meeting_id' => $createMeeting['meetingID'],
                    'instructor_id' => $instructor_id,
                    'topic' => $topic,
                    'description' => $request->get('description'),
                    'class_id' => $class_id,
                    'attendee_password' => $attendee_password,
                    'moderator_password' => $moderator_password,
                    'date' => $date,
                    'time' => $time,
                    'datetime' => $datetime,
                    'welcome_message' => $welcome_message,
                    'dial_number' => $dial_number,
                    'max_participants' => $max_participants,
                    'logout_url' => $logout_url,
                    'record' => $record,
                    'duration' => $duration,
                    'is_breakout' => $is_breakout,
                    'moderator_only_message' => $moderator_only_message,
                    'auto_start_recording' => $auto_start_recording,
                    'allow_start_stop_recording' => $allow_start_stop_recording,
                    'webcams_only_for_moderator' => $webcams_only_for_moderator,
                    'copyright' => $copyright,
                    'mute_on_start' => $mute_on_start,
                    'lock_settings_disable_mic' => $lock_settings_disable_mic,
                    'lock_settings_disable_private_chat' => $lock_settings_disable_private_chat,
                    'lock_settings_disable_public_chat' => $lock_settings_disable_public_chat,
                    'lock_settings_disable_note' => $lock_settings_disable_note,
                    'lock_settings_locked_layout' => $lock_settings_locked_layout,
                    'lock_settings_lock_on_join' => $lock_settings_lock_on_join,
                    'lock_settings_lock_on_join_configurable' => $lock_settings_lock_on_join_configurable,
                    'guest_policy' => $guest_policy,
                    'redirect' => $redirect,
                    'join_via_html5' => $join_via_html5,
                    'state' => $state,
                    'created_by' => Auth::user()->id,

                ]);
            }


            $user = new BbbMeetingUser();
            $user->meeting_id = $local_meeting->id;
            $user->user_id = $instructor_id;
            $user->moderator = 1;
            $user->save();


            Toastr::success('Class updated successful', 'Success');
            return redirect()->route('virtual-class.details', $class_id);
        } catch (Exception $e) {
            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());
        }
    }

    public function create()
    {
        return view('virtualclass::create');
    }

    public function jitsiMeetingStore(Request $request, $class_id)
    {
        if (demoCheck()) {
            return redirect()->back();
        }
        $class = VirtualClass::findOrFail($class_id);

        if ($class->type == 0) {
            if (strtotime($class->start_date) != strtotime($request->date)) {
                Toastr::error("Date is not correct", 'Error!');
                return back();
            }
        } else {
            if (strtotime($class->start_date) > strtotime($request->date) || (strtotime($request->date) > strtotime($class->end_date))) {
                Toastr::error("Date is not correct", 'Error!');
                return back();
            }
        }
        $topic = $request->get('topic');
        $instructor_id = Auth::user()->id;
        $date = $request->get('date');
        $time = $request->get('time');


        $datetime = $date . " " . $time;
        $datetime = strtotime($datetime);

        $rules = [
            'topic' => 'required',
            'date' => 'required',
            'time' => 'required',
        ];
        $this->validate($request, $rules, validationMessage($rules));


        try {
            $local_meeting = JitsiMeeting::create([
                'meeting_id' => date('ymdhmi'),
                'instructor_id' => $instructor_id,
                'topic' => $topic,
                'description' => $request->get('description'),
                'class_id' => $class_id,
                'date' => $date,
                'time' => $time,
                'datetime' => $datetime,
                'created_by' => Auth::user()->id,

            ]);

            $user = new JitsiMeetingUser();
            $user->meeting_id = $local_meeting->id;
            $user->user_id = $instructor_id;
            $user->save();


            Toastr::success('Class updated successful', 'Success');
            return redirect()->route('virtual-class.details', $class_id);
        } catch (Exception $e) {
            GettingError($e->getMessage(), url()->current(), request()->ip(), request()->userAgent());
        }
    }

    public function getAllVirtualClassData(Request $request)
    {

        $user = Auth::user();
        $query = VirtualClass::with('course', 'category', 'subCategory', 'language');

        if (isModuleActive('Organization') && Auth::user()->isOrganization()) {
            $query->whereHas('course.user', function ($q) {
                $q->where('organization_id', Auth::id());
                $q->orWhere('id', Auth::id());
            });
        }


        return Datatables::of($query)
            ->addIndexColumn()
            ->editColumn('title', function ($query) {
                return $query->title;
            })->addColumn('category_name', function ($query) {
                if ($query->category) {
                    return $query->category->name;
                } else {
                    return '';
                }
            })->addColumn('required_type', function ($query) {
                return $query->course->required_type == 1 ? trans('courses.Compulsory') : trans('courses.Open');
            })
            ->addColumn('status', function ($query) {
                $status_enable_eisable = "";
                $checked = $query->course->status == 1 ? "checked" : "";
                $view = '<label class="switch_toggle" for="active_checkbox' . $query->id . '">
                                                    <input type="checkbox" class="' . $status_enable_eisable . '"
                                                           id="active_checkbox' . $query->id . '" value="' . $query->id . '"
                                                             ' . $checked . '><i class="slider round"></i></label>';

                return $view;
            })
            ->editColumn('subCategory', function ($query) {
                if ($query->subCategory) {
                    return $query->subCategory->name;
                } else {
                    return '';
                }
            })
            ->editColumn('language', function ($query) {
                if ($query->language) {
                    return $query->language->name;
                } else {
                    return '';
                }
            })
            ->editColumn('duration', function ($query) {
                return MinuteFormat($query->duration);
            })->editColumn('start_date', function ($query) {
                return showDate($query->start_date);
            })->editColumn('end_date', function ($query) {
                return showDate($query->end_date);
            })
            ->editColumn('fees', function ($query) {
                return getPriceFormat($query->fees);
            })->addColumn('scope', function ($query) {

                if ($query->course->scope == 1) {
                    $scope = trans('courses.Public');
                } else {
                    $scope = trans('courses.Private');
                }
                return $scope;
            })->editColumn('time', function ($query) {
                return date('h:i A', strtotime($query->time));
            })->editColumn('type', function ($query) {
                if ($query->type == 0) {
                    return trans('virtual-class.Single Class');
                } else {
                    return trans('virtual-class.Continuous Class');
                }
            })
            ->addColumn('action', function ($query) {

                if (permissionCheck('virtual-class.edit')) {

                    $class_edit = '   <a class="dropdown-item edit_brand"
                                                               href="' . route('virtual-class.edit', [$query->id]) . '">' . trans('common.Edit') . '</a>';
                } else {
                    $class_edit = "";
                }


                if (permissionCheck('virtual-class.destroy')) {

                    $class_delete = '<button class="dropdown-item deleteClass"
                                                                    data-id="' . $query->id . '"
                                                                    type="button">' . trans('common.Delete') . '</button>';
                } else {

                    $class_delete = "";
                }

                if (isModuleActive('EarlyBird') && permissionCheck('earlybird.plan.virtual_class_plan_list')) {
                    $price_plan = '<a class="dropdown-item" href="' . route('earlybird.plan.virtual_class_plan_list', $query->id) . '">' . _trans('price_plan.Price Plan') . '</a>';
                } else {

                    $price_plan = "";
                }


                $actioinView = ' <div class="dropdown CRM_dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button"
                                                            id="dropdownMenu2" data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false">
                                                        ' . trans('common.Action') . '
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-right"
                                                         aria-labelledby="dropdownMenu2">
                                                         <a class="dropdown-item edit_brand"
                                                           href="' . route('virtual-class.details', [$query->id]) . '">' . trans('common.Details') . '</a>
                                                        ' . $class_edit . '
                                                        ' . $price_plan . '
                                                        ' . $class_delete . '




                                                    </div>
                                                </div>';

                return $actioinView;
            })->rawColumns(['status', 'image', 'action'])->make(true);
    }

    private function isTimeAvailableForMeeting($request, $id)
    {

        if (isset($request['participate_ids'])) {
            $teacherList = $request['participate_ids'];
        } else {
            $teacherList = [Auth::user()->id];
        }

        if ($id != 0) {
            $meetings = ZoomMeeting::where('date_of_meeting', Carbon::parse($request['date'])->format("m/d/Y"))
                ->where('id', '!=', $id)
                ->whereHas('participates', function ($q) use ($teacherList) {
                    $q->whereIn('user_id', $teacherList);
                })
                ->get();
        } else {
            $meetings = ZoomMeeting::where('date_of_meeting', Carbon::parse($request['date'])->format("m/d/Y"))
                ->whereHas('participates', function ($q) use ($teacherList) {
                    $q->whereIn('user_id', $teacherList);
                })
                ->get();
        }
        if ($meetings->count() == 0) {
            return false;
        }
        $checkList = [];

        foreach ($meetings as $key => $meeting) {
            $new_time = Carbon::parse($request['date'] . ' ' . date("H:i:s", strtotime($request['time'])));
            if ($new_time->between(Carbon::parse($meeting->start_time), Carbon::parse($meeting->end_time))) {
                array_push($checkList, $meeting->time_of_meeting);
            }
        }
        if (count($checkList) > 0) {
            return true;
        } else {
            return false;
        }
    }

    private function setTrueFalseStatus($value)
    {
        if ($value == 1) {
            return true;
        }
        return false;
    }
}
