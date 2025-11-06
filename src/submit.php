<?php

mb_internal_encoding("UTF-8");
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $nom = strip_tags(trim($_POST["name"] ?? ''));
    $courriel = filter_var($_POST["email"] ?? '', FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"] ?? ''));

    if ($nom === '' || $courriel === '' || $message === '') {
        echo "Tous les champs sont requis.";
        exit;
    }

    if (!filter_var($courriel, FILTER_VALIDATE_EMAIL)) {
        echo "Adresse courriel invalide.";
        exit;
    }

    // Adresse du destinataire (toi)
    $to = "Antoine.Denis2@outlook.com";

    $subject = "Message recu depuis le site web - " . mb_encode_mimeheader($nom, 'UTF-8');

    $body  = "Nom : $nom\n";
    $body .= "Courriel : $courriel\n\n";
    $body .= "Message :\n$message\n";

    // ⚙️ Les bons entêtes
    $headers  = "From: no-reply@antoinedenis.ca\r\n"; // ton domaine WHC
    $headers .= "Reply-To: $courriel\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès !";
    } else {
        echo "Erreur : le message n’a pas pu être envoyé.";
    }
}
?>
