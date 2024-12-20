<?php
//error_log($_POST['typedemail']);
//error_log($_POST['typedmessage']);
if (isset($_POST['typedemail']) && isset($_POST['typedmessage']) && !empty($_POST['typedemail']) && !empty($_POST['typedmessage'])) {
    $mailFrom = $_POST['typedemail'];
    $message = $_POST['typedmessage'];
    $subject = "chrisfehrer.com Website Message from: ".$mailFrom;

    $mailTo = "passthrough@chrisfehrer.com";
    $headers = "Website Message From: ".$mailFrom;
    $txt = "\n".$message;

    if (mail($mailTo, $subject, $txt, $headers)) {
        echo 'Message sent successfully';
    } else {
        echo 'Error sending message';
    }
} else {
    echo 'Error: form not complete';
}
