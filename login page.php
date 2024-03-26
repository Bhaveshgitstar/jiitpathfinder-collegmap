<?
   // error_reporting(E_ALL);
   // ini_set("display_errors", 1);
?>

<html lang = "en">
   
   <head>
      <title>Jiit Map Path Finder</title>
      <link href = "bootstrap/css/bootstrap.min.css" rel = "stylesheet">

      <link rel="stylesheet" type="text/css" href="styles/main.css">
	
	<link rel="stylesheet" type="text/css" href="styles/magic.min.css">
      
      <style>
         body {
            padding-top: 40px;
            padding-bottom: 40px;
            background-color: #000000;
         }
         
         .form-signin {
            max-width: 300px;
            padding: 15px;
            margin: 0 auto;
            color: #017572;
         }
         
         .form-signin .form-signin-heading,
         .form-signin .checkbox {
            margin-bottom: 7px;
         }
         
         .form-signin .checkbox {
            font-weight: normal;
         }
         
         .form-signin .form-control {
            position: relative;
            height: auto;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 10px;
            font-size: 16px;
         }
         
         .form-signin .form-control:focus {
            z-index: 2;
         }
         
         .form-signin input[type="email"] {
            margin-bottom: -1px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            border-color:#017572;
         }
         
         .form-signin input[type="password"] {
            margin-bottom: 10px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-color:#017572;
         }
         
         h2{
            text-align: center;
            color: #FFFFFF;
         }
         h6{
            text-align: center;
            color: #FF0000;
         }
         h7{
            text-align: center;
            color: #FFFFFF;
         }
      </style>
      
   </head>
	
   <body background="images/backgroung.png">
      
      <h2>Login To Path Finder(JIIT Map)</h2> 
      <div class = "container form-signin">
         
         <?php
            $msg = '';

            if (isset($_POST['login']) && !empty($_POST['username']) 
               && !empty($_POST['password'])) {
               $user=$_POST['username'];
               $pass=$_POST['password'];
               $conn=mysqli_connect("localhost","root","","db");
               if($conn){
               }
               else{
               echo "un";}
               /*$result=mysqli_query($conn,"create database db");
               if($result){
               echo "<br>";
               echo "successful";
               }
               else{
               echo "un";}
                    $result=mysqli_query($conn,"create table datajiitmap(username varchar(30) unique,password varchar(20) not null,recovery varchar(30) not null,name varchar(30) not null,dob date not null,stars int,suggestions varchar(255))");
               if($result){
               echo "<br>";
               echo "successful2";
               }
               else{
               echo "un2";} 
               $result=mysqli_query($conn,"insert into datajiitmap values('bhavesh','1234','parents','Bhavesh Sharma','12/01/2003',2,'')");
               if($result){
               echo "<br>";
               echo "successful2";
               }
               else{
               echo "un2";}*/
             
               $sql = "select *from datajiitmap where username = '$user' and password = '$pass'";  
               $result = mysqli_query($conn, $sql);  
               $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
               $count = mysqli_num_rows($result);


				
               if ($count==1) {

                  echo '<script type ="text/JavaScript">';  
                  echo 'alert("Login Successfully")';  
                  echo '</script>'; 
                  
                  echo '<script>

                  window.location="index.php";
                  
                  </script>';
               }else {
                  $msg = '*Wrong username or password';
                  $msg2 = 'Forgot Password';
                  

               }
            }
            elseif (isset($_POST['signin'])) {
               echo '<script>

               window.location="signup.php";
               
               </script>';
            }
            else {
               $msg = 'Please enter * required Fields';
               $msg2="";
               

            }
         ?>
      </div> <!-- /container -->
      
      <div class = "container">
      
         <form class = "form-signin" role = "form" 
            action = "<?php echo htmlspecialchars($_SERVER['PHP_SELF']); 
            ?>" method = "post">
            <h6 class = "form-signin-heading"><?php echo $msg; ?></h6>
            <input type = "text" class = "form-control" 
               name = "username" placeholder = "username" 
               >*</br>
            <input type = "password" class = "form-control"
               name = "password" placeholder = "password">*
            <button class = "btn btn-lg btn-primary btn-block" type = "submit" 
               name = "login">Login</button>
               <button class = "btn btn-lg btn-primary btn-block" type = "submit" 
               name = "signin">Sign-up</button>

         
         </form>			
         <br>
         <h6 class = "form-signin-heading"><?php echo '<a href="recover.php">Forgot Password</a>' ?></h6><br>
         <center><h7>Click here to clean <a href = "https://www.google.com/" tite = "Logout">close this page.</h7></center>

         
      </div> 
      
   </body>
</html>