<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $date = $_POST['date'];

    $conn = new mysqli('localhost', 'root', '', 'pane_dolce');

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Query the database to check if the user exists
    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password' AND email='$email' AND date='$date'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // User found
        echo "Login successful!";
    } else {
        // User not found
        echo "Invalid username or password!";
    }

    $conn->close();
}
?>
