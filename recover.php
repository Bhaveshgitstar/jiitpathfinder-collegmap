<?php
   ob_start();
   session_start();
?>

<?
   // error_reporting(E_ALL);
   // ini_set("display_errors", 1);
?>

<html lang = "en">
   
   <head>
      <title>Password Recovery(Jiit Map Path Finder)</title>
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
            max-width: 400px;
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
      
      <h2>Forgot Password</h2> 
      <div class = "container form-signin">
         
      <?php
            $msg = '';

            if (isset($_POST['register']) && !empty($_POST['username']) 
               && !empty($_POST['password'] && !empty($_POST['npass']) 
               && !empty($_POST['cnpass']))) {
               $user=$_POST['username'];
               $pass=$_POST['password'];
               $npass=$_POST['npass'];
               $cnpass=$_POST['cnpass'];
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
               $result=mysqli_query($conn,"create table datajiitmap(username varchar(30) unique,password varchar(20) not null,recovery varchar(30) not null)");
               if($result){
               echo "<br>";
               echo "successful2";
               }
               else{
               echo "un2";}
               $result=mysqli_query($conn,"insert into datajiitmap values('bhavesh','1234','parents')");
               if($result){
               echo "<br>";
               echo "successful2";
               }
               else{
               echo "un2";}
               */
             
               $sql = "select *from datajiitmap where username = '$user' and recovery = '$pass'";  
               $result = mysqli_query($conn, $sql);  
               $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
               $count = mysqli_num_rows($result);


				
               if ($count==1) {                  
                  if ($npass===$cnpass) {
                     $sql = "update datajiitmap set password='$npass' where username = '$user'";  
                     $result = mysqli_query($conn, $sql); 
                     if($result){
   
                    echo '<script type ="text/JavaScript">';  
                     echo 'alert("Password change succcessfully")';  
                     echo '</script>';  
                     echo '<script>
   
                     window.location="login page.php";
                     </script>';}
               }
               else {
                  $msg = '*New password and Confirm password missmatch';
               }
            }
            else {
               $msg = '*Wrong username or security question';
               $msg2 = 'Forgot Password';}
               

            }           
             else {
               $msg = 'Please enter * required Fields';
               $msg2="";}
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
               name = "password" placeholder = "security(Who are your closest?)">*
               <input type = "password" class = "form-control" 
               name = "npass" placeholder = "new password" 
               >*</br>
            <input type = "password" class = "form-control"
               name = "cnpass" placeholder = "confirm new password">*
               <button class = "btn btn-lg btn-primary btn-block" type = "submit" 
               name = "register">Reset Password</button>

         
         </form>		
         <br>
         <center><h7>Click here to go to  <a href = "login page.php" tite = "Logout">home.</h7></center>

         
      </div> 
      
   </body>
</html>