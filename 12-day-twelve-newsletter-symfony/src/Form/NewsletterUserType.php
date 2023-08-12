<?php

namespace App\Form;

use App\Entity\Newsletter\Category;
use App\Entity\Newsletter\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;

class NewsletterUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class)
            ->add('categories', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'name',
                'multiple' => true,
                'expanded' => true
            ])
            ->add('is_rgpd', CheckboxType::class, [
                'constraints' => [
                    new IsTrue([
                        'message' => 'Please note that we require your consent to process your personal data 
                        in accordance with the GDPR. Without your explicit consent, we are unable to proceed with 
                        providing our services. Your privacy is important to us, and we respect your rights. 
                        If you would like to provide your consent or discuss further, please contact us. Thank you.'
                    ])
                ],
                'label' => 'I accept the terms of the GDPR and consent to the processing of my personal data.',
                'label_attr' => ['class' => 'rgpd-label']
            ])
            ->add('send', SubmitType::class);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}