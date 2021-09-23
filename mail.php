<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'mailer/autoload.php';

$mail = new PHPMailer();

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->isSMTP();                                            
$mail->Host     = 'smtp.gmail.com';                     
$mail->SMTPAuth = true;                                   
$mail->Username = "omarsefo7@gmail.com";
$mail->password = "mariobanda66";
$mail->SMTPSecure = "ssl";
$mail->Port       = 465; 
$mail->isHTML(true);
$mail->Charset = "UTF-8";

if(isset($_POST['sub'])){
    $name= filter_var( $_POST['name'],FILTER_SANITIZE_STRING);
    $email = filter_var( $_POST['email'] ,FILTER_SANITIZE_EMAIL) ;
    $message =filter_var( $_POST['message'] ,FILTER_SANITIZE_STRING) ;
     
    $mail->setFrom($email ,$name);
    $mail->addAddress('omarsefo7@gmail.com');
    $mail->Subject = 'mail from webpage';
    $mail->Body    ="Name =". $name . "\r\n Email = ". $email . "\r\n Message = ". $message;
    $mail->send();
    }
    header("Location:https://omarsefo.github.io/portfolio/");
?>