<html lang = "en">
   
   <head>
      <title>Please fill this feedback form</title>
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
         label{
            text-align: center;
            color: #FFFFFF;
         }
      </style>
      
   </head>
	
   <body background="images/backgroung.png">
      
      <h2>Please fill this feedback form</h2> 
      <div class = "container form-signin">
         
         <?php
            $msg = '';

            if (isset($_POST['login']) && !empty($_POST['username']) 
               && !empty($_POST['recovery'])) {
               $user=$_POST['username'];
               $star=$_POST['stars'];
               $sugg=$_POST['suggestion'];
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
             
               $sql = "select *from datajiitmap where username = '$user' and recovery = '$reco'";  
               $result = mysqli_query($conn, $sql);  
               $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
               $count = mysqli_num_rows($result);


				
               if ($star<=5 && $star>=1 && count ==1) {
                  $sql = "update datajiitmap set suggestions='$sugg' where username = '$user'";  
                  $result2 = mysqli_query($conn, $sql); 
                  $sql = "update datajiitmap set stars='$star' where username = '$user'";  
                  $result1 = mysqli_query($conn, $sql); 
                  if($result1 && $result2){
                     echo '<script type ="text/JavaScript">';  
                     echo 'alert("Registered succcessfully")';  
                     echo '</script>';  
                     echo '<script>
   
                     window.location="login page.php";
                     </script>';
               }
            }else {

               $msg = '*Wrong username or incorrect stars';
            }
               

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
               <input type = "number" class = "form-control"
               name = "stars" placeholder = "Stars between 1 to 5">*<br></br>
               <label for="w3review">Your valuable suggestion:</label>
               <textarea id="w3review" name="suggestions" rows="4" cols="50" placeholder = "your valuable suggestions">
            </textarea><br></br>
            <button class = "btn btn-lg btn-primary btn-block" type = "submit" 
               name = "login">Save feedback</button>

         
         </form>			
         <br>
         <center><h7>Click here to go to  <a href = "login page.php" tite = "Logout">home.</h7></center>

         
      </div> 
      
   </body>
</html>