<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ua', 'phpmailer/language/');
$mail->isHTML(true);

$mail->setFrom('vika@saenq.space', 'Форма відправлена' );
$mail->addAddress('kamenkova09@gmail.com');
$mail->Subject = 'Перша відправка форми';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email-address"];
    $text = $_POST["email-text"];
    $body = '<h1>Повідомлення з портфоліо надіслано</h1><p>'.$email.'</p><p>'.$text.'</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
    $response = ['status' => 'error', 'message' => 'Помилка!'];
} else {
    $response = ['status' => 'success', 'message' => 'Повідомлення відправлено успішно'];
}

header('Content-type: application/json');
echo json_encode($response);



