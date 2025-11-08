<?php
/**
 * PHP Contact Form Handler for cPanel Deployment
 * Alternative to Next.js API route for static hosting
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate input
$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

// Validation
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if (empty($message)) {
    $errors[] = 'Message is required';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['message' => implode(', ', $errors)]);
    exit;
}

// Email configuration
// IMPORTANT: Update these with your email settings
$to = 'contact@alsabribhuiyan.xyz'; // Change this to your email
$subject = $name . 'Al Sabri Bhuiyan sent a message from his portfolio!';
$from = $email;

// Email body
$emailBody = "
<html>
<head>
    <title>Contact Form Message</title>
</head>
<body>
    <h2>New Message from Portfolio Contact Form</h2>
    <p><strong>From:</strong> {$name} ({$email})</p>
    <p><strong>Message:</strong></p>
    <p>" . nl2br(htmlspecialchars($message)) . "</p>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: {$name} <{$from}>" . "\r\n";
$headers .= "Reply-To: {$email}" . "\r\n";

// Send email
$mailSent = mail($to, $subject, $emailBody, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode(['message' => 'Success']);
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Error Occurred']);
}
?>

