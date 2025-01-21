<?php
session_start();

// Connect to SQLite database
$db = new PDO('sqlite:data.db');

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare and execute query
    $stmt = $db->prepare('SELECT * FROM users WHERE username = :username');
$stmt->bindParam(':username', $username);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

// Verify password
if ($user && password_verify($password, $user['password'])) {
$_SESSION['username'] = $username;
echo "Login successful!";
} else {
echo "Invalid username or password.";
}
}
?>