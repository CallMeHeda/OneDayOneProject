<?php

namespace App\MessageHandler;

use App\Entity\Newsletter\Newsletter;
use App\Entity\Newsletter\User;
use App\Message\NewsletterMessage;
use App\Service\SendNewsletterService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler(priority: 10)]
final class NewsletterMessageHandler
{
    private EntityManagerInterface $em;
    private SendNewsletterService $newsletterService;

    public function __construct(EntityManagerInterface $em, SendNewsletterService $newsService)
    {
        $this->em = $em;
        $this->newsletterService = $newsService;
    }

    public function __invoke(NewsletterMessage $message)
    {
        $user = $this->em->find(User::class, $message->getUserId());
        $newsletter = $this->em->find(Newsletter::class, $message->getNewsId());

        if ($newsletter !== null && $user !== null) {
            $this->newsletterService->send($user, $newsletter);
        }
    }
}
