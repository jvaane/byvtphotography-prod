<?php
// The message
$first_name = $_GET['firstName'];
$last_name = $_GET['lastName'];
$mail = $_GET['email'];
$tel = $_GET['tel'];
$wedding_date = $_GET['weddingDate'];
$message = $_GET['message'];
$body = "Van: ".$first_name." ".$last_name."\r\nMailadres: ".$mail."\r\nTel: ".$tel."\r\nTrouwdatum: ".$wedding_date."\r\n\nBericht: ".$message;

// In case any of our lines are larger than 70 characters, we should use wordwrap()
$body = wordwrap($body, 70, "\r\n");

// Send
mail('info@byvtphotography.nl', 'Contactformulier: '.$first_name." ".$last_name, $body);
?>