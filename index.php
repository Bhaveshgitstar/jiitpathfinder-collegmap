<!DOCTYPE html>
<html>

<head>
	<!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- Our Custom CSS style sheet -->
	<link rel="stylesheet" type="text/css" href="styles/main.css">
	<link rel="stylesheet" type="text/css" href="styles/magic.min.css">
	<link rel="shortcut icon" type="image/png" href="images/favicon.png">

    <script type="javascript"src="bootstrap/js/bootstrap.min.js"></script>
	
	<title>Jiit Map Path Finder</title>
	</head>
	<body background="images/backgroung.png">
	<?php

            if (isset($_POST['logout'])) {
				echo '<script type ="text/JavaScript">';  
				echo 'alert("Login Successfully")';  
				echo '</script>'; 
				echo '<script>

				window.location="login page.php";
				
				</script>';
			}?>
	<nav class="navbar navbar-expand-sm fixed-top" style=" background-color:rgb(21, 22, 22)" id="myNavbar">
  		<a class="navbar-brand" href="#" id="logo"><img src="images/logo.png" width="40"></a>
  		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
    		<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
	    	<ul class="navbar-nav">
		      	<li class="nav-item dropdown" id="algorithms">
		        	<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" >
		          	Algorithms
		        	</a>
					<div class="dropdown-menu" >
						<a class="dropdown-item" href="#">Dijkstra</a>
					</div>
		      	</li>
		      	<li class="nav-item dropdown" id="floor">
		      		<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" >
		          	Floors
		        	</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					    <a class="dropdown-item" href="#">Floor 1</a>
						
					</div>
				</li>


			  <li class="nav-item dropdown" id="startpoint">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" >
				Choose Start Point
			  </a>
			  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
				  <a class="dropdown-item" href="#">Staircase 1(Near Sarawasti Mandir)</a>
				  <a class="dropdown-item" href="#">Staircase 2(Near MPH)</a>
				  <a class="dropdown-item" href="#">Staircase 3(In front of cafeteria)</a>
				  <a class="dropdown-item" href="#">Staircase 4(Rightmost/Circular Staircase)</a>
				  <a class="dropdown-item" href="#">Room 111(CR-47/CR-1)</a>
				  <a class="dropdown-item" href="#">Room 113(CR-48/CR-2)</a>
				  <a class="dropdown-item" href="#">Room 116(CR-57/TR-1)</a>
				  <a class="dropdown-item" href="#">Room 127(TR-2/TR-12)</a>
				  <a class="dropdown-item" href="#">Room 117(LT-2/CR-39)</a>
				  <a class="dropdown-item" href="#">Room 118(LT-1/SR-05)</a>
				  <a class="dropdown-item" href="#">Room 126(TR-3/TR-13)</a>
				  <a class="dropdown-item" href="#">Room 121(TR-4/TR-14)</a>
				<a class="dropdown-item" href="#">Room 123(CR-7/CR-28)</a>
				<a class="dropdown-item" href="#">Room 150(CL-4/CR-59)</a>
				<a class="dropdown-item" href="#">Room 151(CL-3/CR-60)</a>
				<a class="dropdown-item" href="#">Room 142(ECE LAB/VLSI-LAB/PROJECT LAB,EL-17)</a>
				<a class="dropdown-item" href="#">Room 140(CIC LAB/EL-25)</a>
				<a class="dropdown-item" href="#">Room 138(CR-9/CR-55)</a>
				<a class="dropdown-item" href="#">Room 137(CP-8/CR-71)</a>
				<a class="dropdown-item" href="#">Room 134(ECE LAB/DSP LAB,EL-18)</a>
				<a class="dropdown-item" href="#">Room 133(COMM. SYSTEM LAB,EL-20)</a>
				<a class="dropdown-item" href="#">Room 157(ECE PROJECT LAB,EL-22)</a>
				<a class="dropdown-item" href="#">Room 158(CSE PROJECT LAB,CL-37)</a>
				<a class="dropdown-item" href="#">Room 132(MM LAB,CL-39)</a>
				<a class="dropdown-item" href="#">Room 130(BASIC ELECTRONICS LAB,EL-21)</a>
				<a class="dropdown-item" href="#">Room 148(LT-7/CR-44)</a>
				<a class="dropdown-item" href="#">Room 153(LT-8/CR-55)</a>
				<a class="dropdown-item" href="#">Toilet     (Left)</a>
				<a class="dropdown-item" href="#">Toilet     (Right)</a>
				<a class="dropdown-item" href="#">Faculty      Block</a>
				  
			  </div>
		  </li>
		  <li class="nav-item dropdown" id="endpoint">
			<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" >
			Choose End Point
		  </a>
		  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
			  <a class="dropdown-item" href="#">Staircase 1(Near Sarawasti Mandir)</a>
			  <a class="dropdown-item" href="#">Staircase 2(Near MPH)</a>
			  <a class="dropdown-item" href="#">Staircase 3(In front of cafeteria)</a>
			  <a class="dropdown-item" href="#">Staircase 4(Rightmost/Circular Staircase)</a>
			  <a class="dropdown-item" href="#">Room 111(CR-47/CR-1)</a>
			  <a class="dropdown-item" href="#">Room 113(CR-48/CR-2)</a>
			  <a class="dropdown-item" href="#">Room 116(CR-57/TR-1))</a>
			  <a class="dropdown-item" href="#">Room 127(TR-2/TR-12)</a>
			  <a class="dropdown-item" href="#">Room 117(LT-2/CR-39)</a>
			  <a class="dropdown-item" href="#">Room 118(LT-1/SR-05)</a>
			  <a class="dropdown-item" href="#">Room 126(TR-3/TR-13)</a>
			  <a class="dropdown-item" href="#">Room 121(TR-4/TR-14)</a>
			<a class="dropdown-item" href="#">Room 123(CR-7/CR-28)</a>
			<a class="dropdown-item" href="#">Room 150(CL-4/CR-59)</a>
			<a class="dropdown-item" href="#">Room 151(CL-3/CR-60)</a>
			<a class="dropdown-item" href="#">Room 142(ECE LAB/VLSI-LAB/PROJECT LAB,EL-17)</a>
			<a class="dropdown-item" href="#">Room 140(CIC LAB/EL-25)</a>
			<a class="dropdown-item" href="#">Room 138(CR-9/CR-55)</a>
			<a class="dropdown-item" href="#">Room 137(CP-8/CR-71)</a>
			<a class="dropdown-item" href="#">Room 134(ECE LAB/DSP LAB,EL-18)</a>
			<a class="dropdown-item" href="#">Room 133(COMM. SYSTEM LAB,EL-20)</a>
			<a class="dropdown-item" href="#">Room 157(ECE PROJECT LAB,EL-22)</a>
			<a class="dropdown-item" href="#">Room 158(CSE PROJECT LAB,CL-37)</a>
			<a class="dropdown-item" href="#">Room 132(MM LAB,CL-39)</a>
			<a class="dropdown-item" href="#">Room 130(BASIC ELECTRONICS LAB,EL-21)</a>
			<a class="dropdown-item" href="#">Room 148(LT-7/CR-44)</a>
			<a class="dropdown-item" href="#">Room 153(LT-8/CR-55)</a>
			<a class="dropdown-item" href="#">Toilet(Left)</a>
			<a class="dropdown-item" href="#">Toilet(Right)</a>
			<a class="dropdown-item" href="#">Faculty Block</a>
		  </div>
	  </li>
		      	<li class="nav-item dropdown" id="speed">
		      		<a class="nav-link dropdown-toggle speedDisplay" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" >
		          	Speed: Fast
		        	</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					    <a class="dropdown-item" href="#">Slow</a>
					    <a class="dropdown-item" href="#">Normal</a>
					    <a class="dropdown-item" href="#">Fast</a>
					</div>
				</li>
				
				  <button class="btn btn-default btn-space " type="submit" id="startBtn">Start!</button>
				  <button type="button" class="btn btn-dark btn-space " type="submit" id="clearBtn">Clear Board</button>
				  <li class="nav-item dropdown" id="about us">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" >
					About Us
				  </a>
				  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
					  <a class="dropdown-item" href="#">This Project is made by:<br>
						<br>Bhavesh Sharma
						<br>Nikunj Garg<br>Hrishit Pandey<br>Prateek Srivastva<br><br>Under supervision of Dr. Varsha Garg and Dr.Anuradha Garg and Jiit CSE department.
					  </a>
					  
				  </div>
				  
			  </li>
			  <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li>
			  <li><a href="feedback.php" style="text-align:right">Logout</a></li>
	
				</ul>

		</div>]

 	</nav>
	

 	<div class="d-flex flex-row flex-wrap m-2 justify-content-around">	
 		<div class="d-flex p-2">
 			<div class="key wall"></div>  
 			<div class="Wall"> Wall</div>
		 </div> 
		 <div class="d-flex p-2">
			 <div class="key start"></div>  
 			<div class="Srt" >Start</div>
 		</div>
 		<div class="d-flex p-2">
 			<div class="key end"></div>  
 			<div class="tar">Target</div>
		 </div>
		 <div class="d-flex p-2">
 			<div class="key searching"></div>  
 			<div class="key visited"></div>  
 			<div class="vis">Visited</div>
 		</div>
 		<div class="d-flex p-2">
 			<div class="key success"></div>  
 			<div class="SP">Shortest-Path</div>
 		</div>
 		<div class="d-flex p-2">
 			<div class="key unvisited"></div>  
 			<div class="unvis">Unvisited</div>
 		</div>
 	</div>

 	<div class="d-flex flex-column align-items-center" id="bigTableContainer">
		<div id="tableContainer"></div>
		<!-- <div id="update">Click or drag cells to build walls. <br/>Press the 'Start' button when you finish and have selected an algorithm.</div> -->
 	</div>
	<div id="tutorial" class="align-items-center">
		
		
		
		<!-- <div id="tutorialCounter">1/9</div>
		<img id="mainTutorialImage" src="public/styling/c_icon.png"> -->
		<h3>Welcome to Path Finder(College Map)</h3>
		<img src="images/logo.png" width="320" alt="logo" class="center" >

		
		<h6>These are few instructions to use this application:</h6>
		<p>Choose any algorithm<br>Choose floor by clicking on floors <br>Then click on Choose start button to choose your nearest location and click on Choose End Point to enter your destination
		 
			<br>Click on start button to get the path between start node and end node<br>Click on clear board button to clear the board</p>

		<button id="skipButton" class="btn btn-default navbar-btn" data-toggle="model" type="button">Close Instructions</button>
	  </div>
	  
	  

		<div class ="d-flex flex-column" id="results">
			<div class="d-flex justify-content-center"> 
				<i id="resultsIcon" class="fas fa-exclamation"></i>
			</div>
			<div id="duration" > 
				 Please select an algorithm and press start.
			 </div>
			 <div id="length" class="d-flex justify-content-center"> 	
			 </div>	 	
		</div>
 
     
	<script src="bootstrap/js/jquery-3.5.1.slim.min.js"></script>
    <script src="bootstrap/js/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
	<script type="text/png" src="images/Water.png"></script>
	<script type="text/javascript" src="scripts/GridAndNavBar.js"></script>
	<script type="text/javascript" src="scripts/AlgoAndMazeUtilities.js"></script>
	<script type="text/javascript" src="scripts/Algorithms.js"></script>
	<script type="text/javascript" src="scripts/DataStructure.js"></script>
	<script type="text/javascript" src="scripts/Floors.js"></script>
	
</body>
</html>