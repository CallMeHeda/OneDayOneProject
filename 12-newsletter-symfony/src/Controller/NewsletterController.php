<?php

namespace App\Controller;

use App\Entity\Newsletter\Newsletter;
use App\Entity\Newsletter\User;
use App\Form\NewsletterType;
use App\Form\NewsletterUserType;
use App\Message\NewsletterMessage;
use App\Repository\Newsletter\NewsletterRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Annotation\Route;

class NewsletterController extends AbstractController
{
    #[Route('/newsletter', name: 'app_newsletter')]
    public function index(Request $request, EntityManagerInterface $em, MailerInterface $mailer): Response
    {
        $user = new User();
        $form = $this->createForm(NewsletterUserType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $token = hash('sha256', uniqid());
            $user->setValidationToken($token);
            $user->setCreatedAt(new \DateTimeImmutable());

            $em->persist($user);
            $em->flush();

            $email = (new TemplatedEmail())
                ->from('newsletter@fatima.be')
                ->to($user->getEmail())
                ->subject('Newsletter subscription')
                ->htmlTemplate('emails/subscription.html.twig')
                ->context(compact('user', 'token'));
            // ->context(['user' => $user, 'token' => $token]);

            $mailer->send($email);

            $this->addFlash('message', 'Registration pending validation');

            return $this->redirectToRoute('app_home');
        }

        return $this->render('newsletter/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/newsletter/confirm/{id}/{token}', name: 'confirm')]
    public function confirm(User $user, $token, EntityManagerInterface $em): Response
    {
        if ($user->getValidationToken() != $token) {
            throw $this->createNotFoundException('Not Found');
        }

        $user->setIsValid(true);

        $em->persist($user);
        $em->flush();

        $this->addFlash('message', 'Confirmed !');

        return $this->redirectToRoute('app_home');
    }

    #[Route('/newsletter/create', name: 'create_newsletter')]
    public function prepare(Request $request, EntityManagerInterface $em): Response
    {
        $newsletter = new Newsletter();
        $form = $this->createForm(NewsletterType::class, $newsletter);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $newsletter->setCreatedAt(new \DateTimeImmutable());
            $em->persist($newsletter);
            $em->flush();

            return $this->redirectToRoute('newsletters');
        }

        return $this->render('newsletter/create.html.twig', [
            'form' => $form->createView()
        ]);
    }

    #[Route('/newsletter/all', name: 'newsletters')]
    public function list(NewsletterRepository $newsletters): Response
    {
        return $this->render('newsletter/newsletters.html.twig', [
            'newsletters' => $newsletters->findAll()
        ]);
    }

    #[Route('/newsletter/send/{id}', name: 'send_newsletter')]
    public function send(Newsletter $newsletter, MessageBusInterface $messageBus): Response
    {
        $users = $newsletter->getCategory()->getUser();

        foreach ($users as $user) {
            if ($user->getIsValid()) {
                $messageBus->dispatch(new NewsletterMessage($user->getId(), $newsletter->getId()));
            }
        }

        return $this->redirectToRoute('newsletters');
    }

    #[Route('/newsletter/unsubscribe/{id}/{newsletter}/{token}', name: 'unsubscribe')]
    public function unsubscribe(User $user, Newsletter $newsletter, $token, EntityManagerInterface $em): Response
    {
        if ($user->getValidationToken() != $token) {
            throw $this->createNotFoundException('404 NOT FOUND');
        }

        if (count($user->getCategories()) > 1) {
            $user->removeCategory($newsletter->getCategory());
            $em->persist($user);
        } else {
            $em->remove($user);
        }
        $em->flush();

        $this->addFlash('message', 'Newsletter Deleted');

        return $this->redirectToRoute('app_home');
    }
}
