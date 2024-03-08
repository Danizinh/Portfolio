<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';


if (isset($_POST["submit"])) {
    $name = htmlentities($_POST['name']);
    $email = htmlentities($_POST['email']);
    $subject = htmlentities($_POST['subject']);
    $message = htmlentities($_POST['message']);
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'danimaltoc@gmail.com';
    $mail->Password = 'imldpqnfktcgsrxe';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->setFrom($email, $name);
    $mail->addAddress('danimaltoc@gmail.com');
    $mail->Subject = ("$email($subject)");
    $mail->Body = "message";


    $mail->send();


    header("Location:../html/sent.html");
}
