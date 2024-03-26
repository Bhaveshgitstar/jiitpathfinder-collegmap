var totalRows = 50;
var totalCols = 158;
var t=0;
var inProgress = false;
var cellsToAnimate = [];
var algorithm = null;
var justFinished = false;
var animationSpeed = "Fast";
var animationState = null;
var startCell = [30, 10];
var endCell = [25,103];
var createObject = false;
var del =0;
var movingPoint = [];
var point1 = [((startCell[0]+endCell[0])/2)+5,((startCell[1]+endCell[1])/2)+5];
var point2 = [((startCell[0]+endCell[0])/2)+1,((startCell[1]+endCell[1])/2)+1];
var point3 = [((startCell[0]+endCell[0])/2)+2,((startCell[1]+endCell[1])/2)+2];
var point4 = [((startCell[0]+endCell[0])/2)+3,((startCell[1]+endCell[1])/2)+3];
//grid creation
 function generateGrid( rows, cols ) {
    var grid = "<table>";
    for ( row = 1; row <= rows; row++ ) {
        grid += "<tr>"; 
	
        for ( col = 1; col <= cols; col++ ) {      
            grid += "<td></td>";
        }
        grid += "</tr>"; 
    }
    grid += "</table>"
    return grid;
}
const makeGrid = $("#tableContainer").append(generateGrid(totalRows, totalCols));
const hidesInst = $("#hide_instructions").click(function () { $('#instructions_panel').hide();});

//buttons
const startB = $("#startBtn").click(function () {
	if (algorithm == null) { return; }
	if (inProgress) { update("wait"); return; }
	traverseGraph(algorithm);
});
const clearB = $("#clearBtn").click(function () {
	if (inProgress) { update("wait"); return; }
	clearBoard(false,false);
});


const skip = document.getElementById("skipButton").onclick = () => document.getElementById("tutorial").style.display = "none"; 
//NavBar Menus
const algorithms = $("#algorithms .dropdown-item").click(function () {
	if (inProgress) { update("wait"); return; }
	algorithm = $(this).text();
	updateStartBtnText();
	console.log("Algorithm has been changd to: " + algorithm);
});

const stpts = $("#startpoint .dropdown-item").click(function () {
	if (inProgress) { update("wait"); return; }
	let stpt=$(this).text();
	if(stpt=="Staircase 1(Near Sarawasti Mandir)"){
		startCell = [30, 10];
	}
	else if(stpt=="Room 142(ECE LAB/VLSI-LAB/PROJECT LAB,EL-17)"){
		startCell = [23, 124];
	}
    else if(stpt=="Staircase 2(Near MPH)"){
		startCell = [31, 35];
	}
	else if(stpt=="Staircase 3(In front of cafeteria)"){
		startCell = [25, 103];
	}
	else if(stpt=="Staircase 4(Rightmost/Circular Staircase)"){
		startCell = [26, 141];
	}
	else if(stpt=="Room 111(CR-47/CR-1)"){
		startCell = [23, 23];
	}
	else if(stpt=="Room 113(CR-48/CR-2)"){
		startCell = [13, 22];
	}
	else if(stpt=="Room 116(CR-57/TR-1)"){
		startCell = [9,25];
	}    
	else if(stpt=="Room 127(TR-2/TR-12)"){
		startCell = [31, 12];
	}
	else if(stpt=="Room 117(LT-2/CR-39)"){
		startCell = [9, 42];
	}
	else if(stpt=="Room 118(LT-1/SR-05)"){
		startCell = [10, 54];
	}
	else if(stpt=="Room 126(TR-3/TR-13)"){
		startCell = [12,48 ];
	}
	else if(stpt=="Room 121(TR-4/TR-14)"){
		startCell = [56, 14];
	}
	else if(stpt=="Room 123(CR-7/CR-28)"){
		startCell = [23, 57];
	}
	else if(stpt=="Room 150(CL-4/CR-59)"){
		startCell = [42, 131];
	}
	else if(stpt=="Room 151(CL-3/CR-60)"){
		startCell = [43, 127];
	}
	else if(stpt=="Room 140(CIC LAB/EL-25)"){
		startCell = [11, 31];
	}
	else if(stpt=="Room 138(CR-9/CR-55)"){
		startCell = [9, 122];
	}
	else if(stpt=="Room 137(CP-8/CR-71)"){
		startCell = [9,109];
	}
	else if(stpt=="Room 134(ECE LAB/DSP LAB,EL-18)"){
		startCell = [9,101];
	}
	else if(stpt=="Room 133(COMM. SYSTEM LAB,EL-20)"){
		startCell = [9,92];
	}
	else if(stpt=="MidRoom 157(ECE PROJECT LAB,EL-22)"){
		startCell = [12,108];
	}
	else if(stpt=="Room 158(CSE PROJECT LAB,CL-37)"){
		startCell = [12,102];
	}
	else if(stpt=="Room 132(MM LAB,CL-39)"){
		startCell = [10,90];
	}
	else if(stpt=="Room 130(BASIC ELECTRONICS LAB,EL-21)"){
		startCell = [23, 90];
	}
	else if(stpt=="Room 148(LT-7/CR-44)"){
		startCell = [35, 131];
	}
	else if(stpt=="Room 153(LT-8/CR-55)"){
		startCell = [35, 124];
	}
	else if(stpt=="Toilet(Left)"){
		startCell = [30, 3];
	}
	else if(stpt=="Toilet(Right)"){
		startCell = [25,135 ];
	}
	else if(stpt=="Faculty Block"){
		startCell = [32,93];
	}
	

});
const enpts = $("#endpoint .dropdown-item").click(function () {
	if (inProgress) { update("wait"); return; }
	let enpt=$(this).text();

	if(enpt=="Start"){
		endCell = [1, 1];
	}
	else if(enpt=="Staircase 1(Near Sarawasti Mandir)"){
		endCell = [30, 10];

	}
	else if(enpt=="Staircase 2(Near MPH)"){
		endCell = [31, 35];
	}
	else if(enpt=="Staircase 3(In front of cafeteria)"){
		endCell = [27, 104];
	}    
	else if(enpt=="Staircase 4(Rightmost/Circular Staircase)"){
		endCell = [26, 141];
	}    
	else if(enpt=="Room 111(CR-47/CR-1)"){
		endCell = [23, 23];
	}  
	else if(enpt=="Room 113(CR-48/CR-2)"){
		endCell = [13, 22];
	}  
	else if(enpt=="Room 116(CR-57/TR-1)"){
		endCell =  [9,25];
	}  
	else if(enpt=="Room 117(LT-2/CR-39)"){
		endCell = [9, 42];
	}  
	else if(enpt=="Room 127(LT-2/CR-39)"){
		endCell = [31, 12];
	}  
	else if(enpt=="Room 118(LT-1/SR-05)"){
		endCell = [10, 54];
	}  
	else if(enpt=="Room 126(TR-3/TR-13)"){
		endCell = [12,48 ];
	}  
	else if(enpt=="Room 121(TR-4/TR-14)"){
		endCell = [56, 14];
	}  
	else if(enpt=="Room 123(CR-7/CR-28)"){
		endCell = [23, 57];
	}  
	else if(enpt=="Room 150(CL-4/CR-59)"){
		endCell = [42, 131];
	}  
	else if(enpt=="Room 151(CL-3/CR-60)"){
		endCell = [43, 127];
	}  
	else if(enpt=="Room 140(CIC LAB/EL-25)"){
		endCell = [11, 31];
	}  
	else if(enpt=="Room 138(CR-9/CR-55)"){
		endCell = [9, 122];
	}  
	else if(enpt=="Room 137(CP-8/CR-71)"){
		endCell = [9,109];
	}  
	else if(enpt=="Room 134(ECE LAB/DSP LAB,EL-18)"){
		endCell = [9,101];
	}  
	else if(enpt=="Room 133(COMM. SYSTEM LAB,EL-20)"){
		endCell = [9,92];
	}  
	else if(enpt=="Room 157(ECE PROJECT LAB,EL-22)"){
		endCell = [12,108];
	}  
	else if(enpt=="Room 158(CSE PROJECT LAB,CL-37)"){
		endCell = [12,102];
	}  
	else if(enpt=="Room 132(MM LAB,CL-39)"){
		endCell = [10,90];
	}    
	else if(enpt=="Room 130(BASIC ELECTRONICS LAB,EL-21)"){
		endCell = [23, 90];
	}
    else if(enpt=="Room 148(LT-7/CR-44)"){
		endCell = [35, 131];
	}
	else if(enpt=="Room 153(LT-8/CR-55)"){
		endCell = [35, 124];
	}
	else if(enpt=="Room 142(ECE LAB/VLSI-LAB/PROJECT LAB,EL-17)"){
		endCell = [23, 124];
	}
	else if(enpt=="Toilet(Left)"){
		endCell = [30, 3];
	}
	else if(enpt=="Toilet(Right)"){
		endCell = [26,137 ];
	}
	else if(enpt=="Faculty Block"){
		endCell = [32,93];
	}
});
const floors = $("#floor .dropdown-item").click(function () {
	if (inProgress) { update("wait"); return; }
	let maze = $(this).text();
	if (maze == "Floor 1") {
		if (del == 1) {
			clearBoard(false, false);
			floor1();
		}
		else floor1();
	}
	else if (maze == "Ground floor") {
		if (del == 1) {
			clearBoard(false, false);
			groundfloor();
		}
		else groundfloor();
	}
	else if (maze == "Floor 3") {
		if (del == 1) {
			clearBoard(false, false);
			floor3();
		}
		else floor3();
	}
	console.log("Maze has been changd to: " + maze);
});
			 
//FUNCTIONS OF NAVBAR
//speed change in navbar
function updateSpeedDisplay(){
	if (animationSpeed == "Slow")        $(".speedDisplay").text("Speed: Slow");
	else if (animationSpeed == "Normal") $(".speedDisplay").text("Speed: Normal");
	else if (animationSpeed == "Fast")   $(".speedDisplay").text("Speed: Fast");
	return;
}
//selects the algo
function updateStartBtnText(){
	let strikethrough = ["bfs", "dfs"];
	let name = "";
    if (algorithm == "Dijkstra")                    $("#startBtn").html("Start Dijkstra");

	return;
}
// Used to display error messages
function update(message){
	$("#resultsIcon").removeClass();
	$("#resultsIcon").addClass("fas fa-exclamation");
	$('#results').css("background-color", "#ffc107");
	$("#length").text("");
	if (message == "wait") $("#duration").text("Please wait for the algorithm to finish.");
}

async function traverseGraph(algorithm){
    inProgress = true;
	clearBoard( true,true);
	var startTime = Date.now();
	var pathFound = executeAlgo();
	var endTime = Date.now();
	await animateCells();
	if ( pathFound ) updateResults((endTime - startTime), true, countLength());
   else updateResults((endTime - startTime), false, countLength());
	inProgress = false;
	justFinished = true;
}
function countLength(){
	var cells = $("td");
	return cells.filter( cel => $(cells[cel]).hasClass("success")).length;
}
// Used to display results
function updateResults(duration, pathFound, length){
	var firstAnimation = "swashOut";
	var secondAnimation = "swashIn";
	$("#results").removeClass();
    $("#results").addClass("magictime " + firstAnimation); 
    setTimeout(function(){ 
    	$("#resultsIcon").removeClass();
    	if (pathFound){
    		$('#results').css("background-color", "#77dd77");
    		$("#resultsIcon").addClass("fas fa-check");
    	} else {
    		$('#results').css("background-color", "#ff6961");
    		$("#resultsIcon").addClass("fas fa-times");
    	}
    	$("#duration").text("Duration: " + duration + " ms");
    	$("#length").text("Length: " + length);
    	$('#results').removeClass(firstAnimation);
    	$('#results').addClass(secondAnimation); 
    }, 1100);
}
function executeAlgo(){
    if (algorithm == "Dijkstra"){
		var pathFound = dijkstra(startCell,endCell, null);
	} 
	else if (algorithm == "Greedy Best-First Search"){
		if(createObject) var pathFound = greedyBestFirstSearch(startCell,endCell,objectCell);
		else var pathFound = greedyBestFirstSearch(startCell,endCell,null);}
	return pathFound;
}

function clearBoard(keepWalls, keepWeight){	
	var cells = $("#tableContainer").find("td");
	var { point1index, point2index, point3index, point4index,startCellIndex,endCellIndex} = getIndexes();
	for (var i = 0; i < cells.length; i++){
			isWall = $( cells[i] ).hasClass("wall");
			isWeight = $( cells[i] ).hasClass("weight");
			isObject = $( cells[i] ).hasClass("object");
			
			$( cells[i] ).removeClass();
			
			if (i == startCellIndex)            $(cells[i]).addClass("start"); 
			else if (i == endCellIndex)         $(cells[i]).addClass("end"); 
			else if( isWeight && keepWeight)	$(cells[i]).addClass("weight"); 
    	    else if ( keepWalls && isWall )  $(cells[i]).addClass("wall"); 
	}
	t=0;
}
function getIndexes() {
	var point1index = (point1[0] * (totalCols)) + point1[1];
	var point2index = (point2[0] * (totalCols)) + point2[1];
	var point3index = (point3[0] * (totalCols)) + point3[1];
	var point4index = (point4[0] * (totalCols)) + point4[1];
	var startCellIndex = (startCell[0] * (totalCols)) + startCell[1];
	var endCellIndex = (endCell[0] * (totalCols)) + endCell[1];
	return { point1index, point2index, point3index, point4index,startCellIndex, endCellIndex };
}	

// Ending statements

clearBoard(false,false);
$('#myModal').on('shown.bs.modal', function () {$('#myInput').trigger('focus');})
$(window).on('load',function(){ $('#exampleModalLong').modal('show');});


