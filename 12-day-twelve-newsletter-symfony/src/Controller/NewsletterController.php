<?php

namespace App\Controller;

use App\Entity\Newsletter\User;
use App\Form\NewsletterUserType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
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
}
