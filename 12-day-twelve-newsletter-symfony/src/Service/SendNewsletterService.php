<?php

namespace App\Service;

use App\Entity\Newsletter\Newsletter;
use App\Entity\Newsletter\User;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;

class SendNewsletterService
{
    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function send(User $user, Newsletter $newsletter): void
    {
        sleep(3);
        $email = (new TemplatedEmail())
            ->from('newsletter@fatima.be')
            ->to($user->getEmail())
            ->subject($newsletter->getName())
            ->htmlTemplate('emails/newsletter.html.twig')
            ->context(compact('newsletter', 'user'));
        $this->mailer->send($email);
    }
}
