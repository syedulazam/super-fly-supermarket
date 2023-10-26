<?php
$server_name="localhost";
$username="root";
$password="";

$database_name="super fly";

$conn=mysqli_connect($server_name,$username,$password,$database_name);

if(!$conn)
{ 
die("Connection Failed:" .mysqli_connect_error());
}

if(isset($_POST['save']))
{
$fname= $_POST['fname'];
$lname= $_POST['lname'];
$username= $_POST['username'];
$pass= $_POST['pass'];
$cpass= $_POST['cpass'];
$month= $_POST['month'];
$day= $_POST['day'];
$year= $_POST['year'];
$mob= $_POST['mob'];
$email= $_POST['email'];
$loc= $_POST['loc'];



	 
$sql_query="INSERT INTO create_account4 (fname,lname,username,pass,cpass,month,day,year,mob,email,loc)
VALUES('$fname','$lname','$username','$pass','$cpass','$month','$day','$year','$mob','$email','$loc')";

if(mysqli_query($conn, $sql_query))
{
	echo "Registerd successfully! now you can login your account";
}
else
{
	echo "Error:" .$sql. "".mysqli_error($conn);
}
mysqli_close($conn);
}
?>