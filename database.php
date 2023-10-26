<?php
$server_name="localhost";
$username="root";
$password="";

$database_name="register";

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



$sql_query1="create table create_account4(fname varchar(24),lname varchar(24),username varchar(24),pass varchar(24),cpass varchar(24),month varchar(24),day int,year int,mob int,email varchar(34),loc varchar(26))";
 if ($conn->query($sql_query1)===true) 
	 {
     	echo "table created successfully";
     }
	 else
	 {
     	echo "error".$conn->error;
	 }
	 

	 
$sql_query="INSERT INTO create_account2 (fname,lname,username,pass,cpass,month,day,year,mob,email,loc)
VALUES('$fname','$lname','$username','$pass','$cpass','$month','$day','$year','$email','$mob','$loc')";

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