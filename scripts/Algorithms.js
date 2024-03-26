var objectCellsToAnimate = [];
function dijkstra(start,end,object) {
	var { myHeap, visited, pathFound, distances, prev, costs,cells } = initialise(start);
	pushToAnimateCells(start[0],start[1],"searching",object);
		
	while (!myHeap.isEmpty()){
		var cell = myHeap.getMin();
		//console.log("Min was just popped from the heap! Heap is now: " + JSON.stringify(myHeap.heap));
		var i = cell[1][0];
		var j = cell[1][1];
		if (visited[i][j]){ continue; }
		visited[i][j] = true;
	
		pushToAnimateCells(i,j,"visited",object);
		//end cell defined above
		if(checkEnd(i,j,object,end)){pathFound=true; break;} 

		//get neighbour is a fnctn above
		var neighbors = getNeighbors(i, j);
		for (var k = 0; k < neighbors.length; k++){
			var m = neighbors[k][0];
			var n = neighbors[k][1];
			if (visited[m][n]){ continue; }
			var newDistance = distances[i][j] + 1;
			if(cellIsAWallAndWeight(m,n,cells,false,true)){
                newDistance= distances[i][j] + 4;
			}
			if (newDistance < distances[m][n]){
				distances[m][n] = newDistance;
				prev[m][n] = [i, j];
				myHeap.push([newDistance, [m, n]]);
				//console.log("New cell was added to the heap! It has distance = " + newDistance + ". Heap = " + JSON.stringify(myHeap.heap));
			  //		cellsToAnimate.push( [[m, n], "searching"] );
			  pushToAnimateCells(m,n,"searching",object);
			}
		}
		//console.log("Cell [" + i + ", " + j + "] was just evaluated! myHeap is now: " + JSON.stringify(myHeap.heap));
	}
	//console.log(JSON.stringify(myHeap.heap));
	// Make any nodes still in the heap "visited"
	nodesStillInHeap (myHeap,object,visited);
	if (pathFound) {
		if(object) objectCellsToAnimate = fetchPath(objectCellsToAnimate,object,end,prev);
		else objectCellsToAnimate = fetchPath(objectCellsToAnimate,null,end,prev);
	}
	if(object){dijkstra(object,end, null)}
	if(algorithm == "Travelling SalesMan"){
		return objectCellsToAnimate;
	}
	showPath();
	return pathFound;
}
function greedyBestFirstSearch(start, end, object) {
	var { myHeap, visited, pathFound, distances, prev, costs,cells } = initialise(start);
    pushToAnimateCells(start[0],start[1],"searching",object);
		
	while (!myHeap.isEmpty()){
		var cell = myHeap.getMin();
		var i = cell[1][0];
		var j = cell[1][1];
		if (visited[i][j]){ continue; }
		visited[i][j] = true;

		pushToAnimateCells(i,j,"visited",object);
		if(checkEnd(i,j,object,end)){pathFound=true; break;} 
			
		var neighbors = getNeighbors(i, j);
		for (var k = 0; k < neighbors.length; k++){
			var m = neighbors[k][0];
			var n = neighbors[k][1];
			if (visited[m][n]){ continue; }
			if(object){
			var newCost = Math.abs(object[0] - m) + Math.abs(object[1] - n);
			if(cellIsAWallAndWeight(m,n,cells,false,true)){
				var newCost = Math.abs(object[0] - m) + Math.abs(object[1] - n)+4;
			}
		}
			else{
				var newCost = Math.abs(end[0] - m) + Math.abs(end[1] - n);
				if(cellIsAWallAndWeight(m,n,cells,false,true)){
					var newCost = Math.abs(end[0] - m) + Math.abs(end[1] - n)+4;
				}
			}			
			if (newCost < costs[m][n]){
				prev[m][n] = [i, j];
				costs[m][n] = newCost;
				myHeap.push([newCost, [m, n]]);
				pushToAnimateCells(m,n,"searching",object);
			}
		}
	}
	// Make any nodes still in the heap "visited"
	nodesStillInHeap (myHeap, object, visited);
	
	if (pathFound) {
		if(object) objectCellsToAnimate = fetchPath(objectCellsToAnimate,object,end,prev);
		else   objectCellsToAnimate = fetchPath(objectCellsToAnimate,null,end,prev);
   }
	if(object) greedyBestFirstSearch(object, end, null)
    showPath();
	 return pathFound;		
 }
function pushToAnimateCells(i,j,searchOrvisited,object){
	if(!object) cellsToAnimate.push( [[i, j], searchOrvisited] );    // shows the visited cells
	else         cellsToAnimate.push( [[i, j], searchOrvisited] );
}

 function showPath(){
	 	objectCellsToAnimate.map(([r,c]) => cellsToAnimate.push( [[r,c], "success"] )); 
	     objectCellsToAnimate= [];
 }
 function fetchPath(objectCellsToAnimate,object,end, prev){
	if(object){
		var r = object[0];
		var c = object[1];}
		else{
		 var r =  end[0];
		 var c = end[1];
			}
		objectCellsToAnimate.push([r,c]);
		
		while (prev[r][c] != null){
			var prevCell = prev[r][c];
			r = prevCell[0];
			c = prevCell[1];
			objectCellsToAnimate.push([r,c]);
		}
		return objectCellsToAnimate;
}
function nodesStillInHeap (myHeap, object, visited){
	while ( !myHeap.isEmpty() ){
		var cell = myHeap.getMin();
		var i = cell[1][0];
		var j = cell[1][1];
		if (visited[i][j]){ continue; }
		visited[i][j] = true;
		if(object)
			cellsToAnimate.push([[i, j], "visited"]);
		else
			cellsToAnimate.push([[i, j], "visited2"]);
	}
 }
 function checkEnd (i,j,object,end){
	if(object) {if (i == object[0] && j == object[1]) return true;}
	else if (i == end[0] && j == end[1])  return true;
	  
	return false;	
 }
function initialise(start) {
	var pathFound = false;
	var myHeap = new minHeap();
	var prev = createDistancesPrevWalls(false, true, false, false, false, false);
	var distances = createDistancesPrevWalls(true, false, false, false, false, false);
	var costs = createDistancesPrevWalls(true, false, false, false, false, false);
	var visited = createDistancesPrevWalls(false, false, false, false, true, false);
	var cells = $("#tableContainer").find("td");
	distances[start[0]][start[1]] = 0;
	costs[start[0]][start[1]] = 0;
	myHeap.push([0, [start[0], start[1]]]);
	return { myHeap, visited, pathFound, distances, prev, costs,cells};
}
 