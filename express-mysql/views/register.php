<?php
// Example code for handling registration logic

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve username and password from the form
    $username = $_POST['username'];
    $password = $_POST['password'];
    $date = $_POST['date'];
    $email = $_POST['email'];
    $confirm_password = $_POST['confirm_password'];

    // Check if password and confirm_password match
    if ($password !== $confirm_password) {
        echo "Passwords do not match!";
        exit();
    }

    // Connect to the database
    $conn = new mysqli('localhost', 'root', '', 'your_database_name');

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert the new user into the database
    $sql = "INSERT INTO users (username, password,date,email) VALUES ('$username', '$password','$date','$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>