<?php
if (isset($_POST["submit"])){
   $name= filter_var( $_POST['name'],FILTER_SANITIZE_STRING);
   $email = filter_var( $_POST['email'] ,FILTER_SANITIZE_EMAIL) ;
   $message =filter_var( $_POST['message'] ,FILTER_SANITIZE_STRING) ;

   $headers ='from: ' . $email . '\r\n';
   $subject = "mail from webpage";
   $to="omarsefo7@gmail.com";
   $tXt="Name =". $name . "\r\n Email = ". $email . "\r\n Message = ". $message;

   if ($email!=NULL) {
      mail($to,$subject,$tXt,$headers);
   }
}
     header("Location:omarsefo.github.io/portfolio/index.html");
?>