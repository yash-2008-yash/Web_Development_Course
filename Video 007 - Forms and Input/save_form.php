<?php
$servername = "localhost";
$username = "formuser"; // the exact user you made
$password = "formpass"; // the exact password
$dbname = "forms_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query("SELECT USER();");
$row = $result->fetch_row();
echo "Connected as MySQL user: " . $row[0];
?>