<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email_to = "meaghan.sharrard89@gmail.com";
    $email_subject = "New contact form submission";

    function problem($error)
    {
        echo "We're sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br><br>";
        echo $error . "<br><br>";
        echo "Please go back and fix these errors.<br><br>";
        die();
    }

    $required_fields = array('firstname', 'lastname', 'emailaddress', 'phonenumber', 'subject', 'message');

    foreach ($required_fields as $field) {
        if (empty($_POST[$field])) {
            problem("We're sorry, but there appears to be a problem with the form you submitted.");
        }
    }

    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $email = $_POST['emailaddress'];
    $phone = $_POST['phonenumber'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        problem('The Email address you entered does not appear to be valid.<br>');
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $fname) || !preg_match($string_exp, $lname)) {
        problem('The Name you entered does not appear to be valid.<br>');
    }

    if (strlen($message) < 2) {
        problem('The Message you entered does not appear to be valid.<br>');
    }

    $email_message = "Form details below.\n\n";
    $email_message .= "First Name: " . clean_string($fname) . "\n";
    $email_message .= "Last Name: " . clean_string($lname) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Phone: " . clean_string($phone) . "\n";
    $email_message .= "Subject: " . clean_string($subject) . "\n";
    $email_message .= "Message: " . clean_string($message) . "\n";

    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    @mail($email_to, $email_subject, $email_message, $headers);
?>

    <!-- INCLUDE YOUR SUCCESS MESSAGE BELOW -->

    Thanks for getting in touch. We'll get back to you soon.

<?php
}

function clean_string($string)
{
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
}
?>