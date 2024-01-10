<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Collect form data
  $firstname = $_POST["firstname"];
  $lastname = $_POST["lastname"];
  $email = $_POST["emailaddress"];
  $phone = $_POST["phonenumber"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  // Create email body
  $email_body = "First Name: $firstname\n"
              . "Last Name: $lastname\n"
              . "Email: $email\n"
              . "Phone Number: $phone\n"
              . "Subject: $subject\n"
              . "Message:\n$message";

  // Send email (replace 'your_email@example.com' with your actual email)
  mail("your_email@example.com", "New Form Submission", $email_body);

  // Optional: You can redirect the user to a thank you page
  header("Location: thank_you.html");
  exit;
}
?>