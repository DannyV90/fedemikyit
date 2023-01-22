<?php

namespace App\Http\Requests;

use App\Rules\Recaptcha;
use Illuminate\Foundation\Http\FormRequest;

class MessageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'max:40', 'string'],
            'email' => ['required', 'email'],
            'phone' => ['required','max:13', 'numeric'],
            'message' => ['required', 'max:2000'],
            'captcha_token'  => [new Recaptcha],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Per favore inserisci il tuo o vostro Nome, fate sapere agli Sposi da chi proviene la
                Dedica!',
            'name.max' => 'Mi spiace, il Nome o i Nomi inseriti sono troppo lunghi!',
            'name.string' => 'C\'è qualcosa che non va nel nome inserito!
                Uno o più caratteri utilizzati non sono consentiti!',
            'email.required' => 'Per favore, indica un indirizzo email agli Sposi!',
            'email.email' => 'L\'Email indicata, non sembra essere un Indirizzo email valido!',
            'phone.required' => 'Per favore, indica un numero di telefono agli Sposi!',
            'phone.max' => 'Il Numero di Telefono può essere al massimo di 13 numeri!',
            'phone.numeric' => 'Il Numero di Telefono può essere composto da soli Numeri!',
            'message.required' => 'Se non scrivi un messaggio...che Dedica è?!',
            'message.max' => 'Hai tanto da Dedicare...WOW...purtroppo qua puoi inserire solo 2000 caratteri massimo!'
        ];
    }
}
