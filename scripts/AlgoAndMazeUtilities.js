function createDistancesPrevWalls(dist, prev, walls,weights,visited,visitedWeight){
    var array= [];
    var cells = $("#tableContainer").find("td");
	for (var i = 0; i < totalRows; i++){
		var row = [];
		for (var j = 0; j < totalCols; j++){
            if(dist) row.push(Number.POSITIVE_INFINITY);
            else if(prev) row.push(null);
            else if(walls) row.push(true);
            else if(weights) row.push(true);
            else if(visited){
                if (cellIsAWallAndWeight(i, j, cells,true,false)){ row.push(true);}
                else  {row.push(false); }
            }
            else if(visitedWeight){
                if (cellIsAWallAndWeight(i, j, cells,false,true)){ row.push(true);}
                 else {row.push(false); }    
            }
		}
		array.push(row);
    }
	return array;
}
function cellIsAWallAndWeight(i, j, cells,isWall,isWeight){
	var cellNum = (i * (totalCols)) + j;
	if(isWall)return $(cells[cellNum]).hasClass("wall");
	else if(isWeight)return $(cells[cellNum]).hasClass("weight");
}
function getNeighbors(i, j){
	var neighbors = [];
	if ( i > 0 ){ neighbors.push( [i - 1, j] );}
	if ( j > 0 ){ neighbors.push( [i, j - 1] );}
	if ( i < (totalRows - 1) ){ neighbors.push( [i + 1, j] );}
	if( j < (totalCols - 1) ){ neighbors.push( [i, j + 1] );}
	return neighbors;
}
function neighborsThatAreWallsAndWeights( neighbors, walls , weights ,isWall,isWeight ){
    var neighboringWallsAndWeights = 0;

  for (var k = 0; k < neighbors.length; k++){
      var i = neighbors[k][0];
      var j = neighbors[k][1];
    if(isWall){
      if (walls[i][j]) { neighboringWallsAndWeights++;}}
    else if(isWeight){ if(weights[i][j]){ neighboringWallsAndWeights++;}}
    }
  return neighboringWallsAndWeights;
}
async function animateCells(){
	animationState = null;
	var cells = $("#tableContainer").find("td");
	var { point1index, point2index, point3index, point4index,startCellIndex,endCellIndex,objectCellIndex} = getIndexes();
	//var weightCellIndex = num.hasClass
	var delay = getDelay();
	for (var i = 0; i < cellsToAnimate.length; i++){
		var cellCoordinates = cellsToAnimate[i][0];
		var x = cellCoordinates[0];
		var y = cellCoordinates[1];
		var num = (x * (totalCols)) + y;
		if (anySpecialCell(num, startCellIndex, endCellIndex, objectCellIndex, x, y, cells, point1index, point2index, point3index, point4index)){ continue; }
		var cell = cells[num];
		var colorClass = cellsToAnimate[i][1];

		// Wait until its time to animate
		await new Promise(resolve => setTimeout(resolve, delay));

		$(cell).removeClass();
		$(cell).addClass(colorClass);
	}
	cellsToAnimate = [];
	//console.log("End of animation has been reached!");
	return new Promise(resolve => resolve(true));
}

function anySpecialCell(num, startCellIndex, endCellIndex, objectCellIndex, x, y, cells, point1index, point2index, point3index, point4index) {
	return num == startCellIndex || num == endCellIndex || (num == objectCellIndex && createObject == true) ||
	cellIsAWallAndWeight(x, y, cells, false, true) || (algorithm == "Travelling SalesMan" && (num == point1index || num == point2index ||
	num == point3index || num == point4index));
}

function getDelay(){
	var delay;
	if (animationSpeed === "Slow") algorithm == "Depth-First Search (DFS)" ? delay = 25 : delay = 20;
	else if (animationSpeed === "Normal")  algorithm == "Depth-First Search (DFS)" ? delay = 15 : delay = 10;
	else if (animationSpeed == "Fast")  algorithm == "Depth-First Search (DFS)" ? delay = 10 : delay = 5;
	console.log("Delay = " + delay);
	return delay;
}



