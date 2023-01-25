<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Models\Dedication;
use App\Mail\Dedication as MailDedication;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
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
        try{

            Mail::to(config('app.dedicationMail'))
                ->send(new MailDedication(
                    $request->validated('name'),
                    $request->validated('email'),
                    $request->validated('phone'),
                    $request->validated('message')
                ));

            Dedication::create([
                'name' => $request->validated('name'),
                'email' => $request->validated('email'),
                'phone' => $request->validated('phone'),
                'message' => $request->validated('message'),
                'ip_address' => $request->ip()
            ]);

        } catch(Exception $e){

            Log::error('Nome: ' . $request->validated('name').' - Email: ' .
                $request->validated('email').' - Exception: '. $e->getMessage()
            );
            return back()->withErrors(['dedicationError' => 'Qualcosa è andato storto!']);

        }


        return back();
    }
}
