<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Mail\Dedication;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class FormController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param MessageRequest $request
     * @return RedirectResponse
     */
    public function __invoke(MessageRequest $request)
    {
        Mail::to('danielnoize@gmail.com')->send(new Dedication(
            $request->validated('name') ,
            $request->validated('email'),
            $request->validated('phone'),
            $request->validated('message')
        ));

        return back();
    }
}
