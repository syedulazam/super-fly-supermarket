96% of storage used … If you run out, you won't have enough storage to create, edit, and upload files. Get 100 GB of storage for AED 7.49 AED 1.89/month for 3 months.
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $server_name = "localhost";
  $username = "root";
  $password = "";
  $database_name = "super fly";

  $conn = mysqli_connect($server_name, $username, $password, $database_name);

  if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
  }

  $email = $_POST['email'];
  $password = $_POST['pass'];

  $sql_query = "SELECT * FROM create_account4 WHERE email='$email' AND pass='$password'";
  $result = mysqli_query($conn, $sql_query);

  if (mysqli_num_rows($result) == 1) {
    echo "<script>alert('Login successful! Welcome back . $username . '); window.location.href = 'Homepage.html';</script>";
    exit(); 
  } else {
    echo "<script>alert('Invalid username or password. Please try again.'); window.location.href = 'Login page.html';</script>";
    exit(); 
  }

  mysqli_close($conn);
}
?>