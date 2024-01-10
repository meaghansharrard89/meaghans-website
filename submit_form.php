<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $firstname = $_POST["firstname"];
  $lastname = $_POST["lastname"];
  $email = $_POST["emailaddress"];
  $phone = $_POST["phonenumber"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  $email_body = "First Name: $firstname\n"
              . "Last Name: $lastname\n"
              . "Email: $email\n"
              . "Phone Number: $phone\n"
              . "Subject: $subject\n"
              . "Message:\n$message";

  mail("meaghan.sharrard89@gmail.com", "New Form Submission", $email_body);

  // header("Location: thank_you.html");
  exit;
}
?>