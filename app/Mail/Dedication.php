<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class Dedication extends Mailable
{
    use Queueable, SerializesModels;

    public string $message;
    public string $mail;
    public int $tel;
    public string $name;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $mail, $tel, $message)
    {
        $this->message = $message;
        $this->mail = $mail;
        $this->tel = $tel;
        $this->name = $name;
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            from: new Address('info@dvwebsolutions.it', 'Fede&Miky'),
            subject: 'AVETE RICEVUTO UNA NUOVA DEDICA!',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            markdown: 'emails.dedication',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
