<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Prepare email details
        $to = "kadalarasancivil@gmail.com";  // Your email address to receive the submissions
        $subject = "New Subscription";
        $message = "You have a new subscriber: " . $email;
        $headers = "From: kadalarasan29@gmail.com\r\n";
        $headers .= "Reply-To: noreply@gmail.com\r\n";

        // Send email
        if (mail($to, $subject, $message, $headers)) {
            echo "Success";
        } else {
            echo "Failed";
        }
    } else {
        echo "Invalid email address.";
    }
}
?>
