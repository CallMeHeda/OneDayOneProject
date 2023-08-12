<?php

namespace App\Controller;

use App\Entity\Newsletter\User;
use App\Form\NewsletterUserType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class NewsletterController extends AbstractController
{
    #[Route('/newsletter', name: 'app_newsletter')]
    public function index(): Response
    {
        $user = new User();
        $form = $this->createForm(NewsletterUserType::class, $user);

        return $this->render('newsletter/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
