<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use Illuminate\Http\RedirectResponse;

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
        return back();
    }
}
