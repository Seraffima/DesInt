<?php
$users = json_decode(file_get_contents('users.json'), true);

$username = $_POST['username'];
$password = $_POST['password'];

$user = array_filter($users, function($user) use ($username, $password) {
    return $user['username'] === $username && $user['password'] === $password;
});

if ($user) {
    echo json_encode(['status' => 'success', 'user' => array_values($user)[0]]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid credentials']);
}
?>