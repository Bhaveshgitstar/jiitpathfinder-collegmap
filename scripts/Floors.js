async function floor1(){
	inProgress = true;
	clearBoard(false, false);

	createEdgeWallshori(0,1,42,63)
	createEdgeWallshori(0,1,19,37);
	createEdgeWallsver(0,14,19,20);
	createEdgeWallsver(15,16,19,20);
	createEdgeWallsver(0,10,26,27);
	createEdgeWallsver(0,10,36,37);
	createEdgeWallsver(0,10,41,42);
	createEdgeWallsver(0,10,62,63);
	createEdgeWallsver(0,10,51,52);
	createEdgeWallshori(9,10,14,20);
	createEdgeWallshori(9,10,20,25);
	createEdgeWallshori(9,10,27,35);
	createEdgeWallshori(9,10,37,38);
	createEdgeWallshori(9,10,40,41);
	createEdgeWallshori(9,10,43,54);
	createEdgeWallshori(9,10,55,66);
	createEdgeWallshori(16,17,15,23)
	createEdgeWallsver(9,25,14,15);
	createEdgeWallshori(24,25,7,23);
	createEdgeWallsver(14,23,22,23);
	createEdgeWallsver(10,13,22,23);
		//diagonal 
	createEdgeWallsver(25,26,6,7);
	createEdgeWallsver(26,27,5,6);
	createEdgeWallsver(27,28,4,5);
	createEdgeWallsver(28,29,3,4);
	createEdgeWallshori(28,29,3,9);
	createEdgeWallshori(28,29,10,12);
	createEdgeWallsver(24,29,11,12);
	createEdgeWallsver(29,30,2,3);
	createEdgeWallsver(30,31,1,2);
	//diaend
	createEdgeWallsver(31,36,0,1);
	createEdgeWallshori(35,36,1,5);
	createEdgeWallsver(32,50,4,5);
	createEdgeWallshori(32,33,4,8);
	createEdgeWallshori(32,33,10,26);
	createEdgeWallshori(32,33,28,31);
	createEdgeWallshori(49,50,4,31);
	createEdgeWallsver(32,50,31,32);
	createEdgeWallshori(34,35,31,51);
	createEdgeWallsver(32,50,50,51);
	createEdgeWallshori(32,33,51,54);
	createEdgeWallshori(49,50,51,65);
	createEdgeWallshori(32,33,56,65);
	createEdgeWallsver(32,50,64,65);
	createEdgeWallsver(10,25,65,66);
	createEdgeWallshori(24,25,57,70);
	createEdgeWallshori(27,28,57,91);
	createEdgeWallsver(15,23,57,58);
	createEdgeWallsver(9,14,57,58);
	createEdgeWallsver(27,32,57,58);
	createEdgeWallshori(16,17,57,65);
	createEdgeWallshori(16,17,27,36);
	createEdgeWallshori(16,17,41,53);
	createEdgeWallshori(17,18,36,42);
	createEdgeWallsver(12,17,36,37);
	createEdgeWallsver(12,16,41,42);
	createEdgeWallshori(12,13,41,48);
	createEdgeWallshori(12,13,49,53);
	createEdgeWallsver(12,15,52,53);
	createEdgeWallsver(12,17,49,50);
	createEdgeWallsver(16,25,27,28);
	createEdgeWallshori(24,25,27,31);
	createEdgeWallshori(23,24,30,37);
	createEdgeWallshori(24,25,36,53);
	createEdgeWallsver(16,26,52,53);
	createEdgeWallsver(12,16,30,31);
	createEdgeWallshori(12,13,27,31);
	createEdgeWallshori(12,13,32,36);
	createEdgeWallshori(29,30,44,53);
	createEdgeWallsver(26,30,52,53);
	createEdgeWallsver(27,30,44,45);
	createEdgeWallsver(25,27,44,45);
	createEdgeWallsver(25,27,46,47);
	createEdgeWallsver(25,27,48,49);
	createEdgeWallsver(25,27,50,51);
	createEdgeWallshori(27,28,44,53);

//second part
createEdgeWallshori(23,24,69,79);
createEdgeWallshori(24,25,78,91);
createEdgeWallsver(0,24,82,83);
createEdgeWallshori(0,1,82,104);
createEdgeWallsver(0,10,103,104);
createEdgeWallsver(0,10,124,125);
createEdgeWallshori(0,1,107,125);
createEdgeWallsver(0,10,107,108);
createEdgeWallsver(0,10,117,118);
createEdgeWallsver(0,10,94,95);
createEdgeWallshori(9,10,82,92);
createEdgeWallshori(9,10,93,101);
createEdgeWallshori(9,10,102,105);
createEdgeWallshori(9,10,106,109);
createEdgeWallshori(9,10,110,122);
createEdgeWallshori(9,10,124,129);
createEdgeWallsver(9,24,129,130);
createEdgeWallshori(16,17,82,90);
createEdgeWallsver(15,23,90,91);
createEdgeWallshori(13,14,85,91);
createEdgeWallshori(13,14,83,84);
createEdgeWallsver(11,14,90,91);
createEdgeWallsver(13,16,85,86);
createEdgeWallsver(12,25,95,96);
createEdgeWallsver(12,16,103,104);
createEdgeWallshori(16,17,95,104);
createEdgeWallshori(17,18,103,108);
createEdgeWallshori(16,17,107,120);
createEdgeWallsver(16,25,119,120);
createEdgeWallshori(24,25,95,108);
createEdgeWallshori(23,24,107,117);
createEdgeWallshori(24,25,116,120);
createEdgeWallshori(12,13,109,120);
createEdgeWallshori(12,13,95,102);
createEdgeWallsver(12,17,107,108);
createEdgeWallsver(12,17,116,117);
createEdgeWallshori(14,15,116,120);
createEdgeWallsver(11,14,124,125);
createEdgeWallshori(16,17,124,129);
createEdgeWallshori(24,25,124,130);
createEdgeWallsver(13,23,124,125);
createEdgeWallsver(27,32,90,91);
createEdgeWallshori(32,33,84,92);
createEdgeWallshori(32,33,94,98);
createEdgeWallsver(32,49,84,85);
createEdgeWallsver(27,30,95,96);
createEdgeWallshori(32,33,94,98);
createEdgeWallsver(32,49,97,98);
createEdgeWallshori(49,50,84,98);
createEdgeWallshori(34,35,98,127);
createEdgeWallshori(29,30,95,104);
createEdgeWallsver(26,30,103,104);
	createEdgeWallsver(26,30,95,96);
	createEdgeWallsver(25,27,95,96);
	createEdgeWallsver(25,27,97,98);
	createEdgeWallsver(25,27,99,100);
	createEdgeWallsver(25,27,101,102);
	createEdgeWallshori(27,28,95,104);
	createEdgeWallsver(31,50,116,117);
	createEdgeWallshori(24,25,130,133);
	createEdgeWallshori(49,50,116,140);
	createEdgeWallshori(27,28,106,120);
	createEdgeWallsver(28,30,106,107);
	createEdgeWallsver(28,30,119,120);
	createEdgeWallshori(30,31,106,120);
    createEdgeWallshori(31,32,124,133);
	createEdgeWallsver(25,32,124,125);
	createEdgeWallsver(16,32,132,133);
    createEdgeWallshori(16,17,132,137);
	createEdgeWallsver(16,25,136,137);
	createEdgeWallshori(34,35,129,140);
	createEdgeWallsver(34,50,139,140);
	createEdgeWallsver(21,25,134,135);
	createEdgeWallsver(21,22,133,134);
	createEdgeWallshori(24,25,138,148);
	createEdgeWallsver(20,25,142,143);
	createEdgeWallshori(20,21,136,143);
	createEdgeWallshori(34,35,130,157);
	createEdgeWallshori(25,26,142,145);
	createEdgeWallshori(26,27,145,146);
	createEdgeWallshori(27,28,146,147);
	createEdgeWallsver(28,31,147,148);
	createEdgeWallsver(31,32,146,147);
	createEdgeWallshori(32,33,145,146);
	createEdgeWallshori(33,34,142,145);
	createEdgeWallshori(31,32,142,144);
	createEdgeWallshori(27,28,142,144);
	createEdgeWallshori(28,29,144,145);
	createEdgeWallshori(29,30,145,146);
	createEdgeWallshori(30,31,144,145);
	createEdgeWallsver(27,35,135,136);
	createEdgeWallsver(27,35,139,140);
	createEdgeWallshori(27,28,135,140);
	createEdgeWallshori(39,40,116,125);
	createEdgeWallshori(39,40,131,139);
	createEdgeWallsver(39,44,124,125);
	createEdgeWallsver(39,42,131,132);
	createEdgeWallsver(43,50,128,129);
	createEdgeWallshori(43,44,124,127);
	createEdgeWallshori(43,44,130,132);
	createEdgeWallsver(43,46,131,132);
	createEdgeWallshori(45,46,131,139);
	createEdgeWallsver(36,40,124,125);
	createEdgeWallsver(35,37,123,124);
	createEdgeWallsver(35,37,132,133);
	createEdgeWallsver(36,40,131,132);

	createEdgeWallsver(44,45,127,128);
	createEdgeWallsver(44,45,129,130);
	createEdgeWallsver(42,43,132,133);


		//gate
		createEdgeWallshori(8,9,24,26);
		createEdgeWallshori(8,9,34,44);
		createEdgeWallshori(8,9,53,56);
		createEdgeWallshori(8,9,91,94);
		createEdgeWallshori(8,9,100,111);
		createEdgeWallshori(8,9,121,125);
		createEdgeWallshori(33,34,7,11);
		createEdgeWallshori(33,34,25,29);
		createEdgeWallshori(33,34,53,57);
		createEdgeWallshori(33,34,91,95);
		createEdgeWallshori(27,28,8,11);
		createEdgeWallsver(12,15,27,28);
		createEdgeWallsver(14,16,28,29);
		createEdgeWallsver(12,15,21,22);
		createEdgeWallshori(13,14,47,49);
		createEdgeWallsver(22,24,21,22);
		createEdgeWallshori(13,14,31,33);
		createEdgeWallshori(13,14,47,49);
		createEdgeWallsver(13,16,58,59);
		createEdgeWallsver(22,24,58,59);
		createEdgeWallsver(14,16,51,52);
		createEdgeWallsver(22,24,89,90);
		createEdgeWallsver(10,12,89,90);
		createEdgeWallsver(13,15,89,90);
		createEdgeWallshori(13,14,101,103);
		createEdgeWallshori(13,14,107,110);
		createEdgeWallshori(13,14,107,110);
		createEdgeWallshori(23,24,132,139);
		createEdgeWallsver(12,16,118,119);
		createEdgeWallsver(9,12,125,126);
		createEdgeWallsver(22,24,125,126);
		createEdgeWallsver(26,27,143,144);
		createEdgeWallsver(32,35,143,144);
		createEdgeWallsver(31,35,106,107);
		createEdgeWallshori(32,33,106,117);

		//createEdgeWallsver(39,42,130,131);

		//gates


	//diagonalleft
	let i=125;
	for(let j=2;j<35;j++){

	createEdgeWallsver(j,j+1,i,i+1);
	i++;
	}
	await animateCells();
		inProgress = false;
		return;
}
async function groundfloor(){
	inProgress = true;
	clearBoard(false, false);

	createEdgeWallshori(0,1,42,63)
	createEdgeWallshori(0,1,19,37);
	createEdgeWallsver(0,14,19,20);
	createEdgeWallsver(15,16,19,20);
	createEdgeWallsver(0,10,26,27);
	createEdgeWallsver(0,10,36,37);
	createEdgeWallsver(0,10,41,42);
	createEdgeWallsver(0,10,62,63);
	createEdgeWallsver(0,10,51,52);
	createEdgeWallshori(9,10,14,20);
	createEdgeWallshori(12,13,20,25);
	createEdgeWallshori(12,13,27,35);
	createEdgeWallshori(12,13,37,38);
	createEdgeWallshori(12,13,40,41);
	createEdgeWallshori(12,13,43,54);
	createEdgeWallshori(9,10,55,66);
	createEdgeWallsver(9,25,14,15);
	createEdgeWallshori(24,25,7,23);
	createEdgeWallsver(14,23,22,23);
	createEdgeWallsver(10,13,22,23);
		//diagonal 
	createEdgeWallsver(25,26,6,7);
	createEdgeWallsver(26,27,5,6);
	createEdgeWallsver(27,28,4,5);
	createEdgeWallsver(28,29,3,4);
	createEdgeWallshori(28,29,3,9);
	createEdgeWallshori(28,29,10,12);
	createEdgeWallsver(24,29,11,12);
	createEdgeWallsver(29,30,2,3);
	createEdgeWallsver(30,31,1,2);
	//diaend
	createEdgeWallsver(31,36,0,1);
	createEdgeWallshori(35,36,1,5);
	createEdgeWallsver(32,50,4,5);
	createEdgeWallshori(32,33,4,8);
	createEdgeWallshori(32,33,10,26);
	createEdgeWallshori(32,33,28,31);
	createEdgeWallshori(49,50,4,31);
	createEdgeWallsver(32,50,31,32);
	createEdgeWallshori(34,35,31,51);
	createEdgeWallsver(32,50,50,51);
	createEdgeWallshori(32,33,51,54);
	createEdgeWallshori(49,50,51,65);
	createEdgeWallshori(32,33,56,65);
	createEdgeWallsver(32,50,64,65);
	createEdgeWallsver(10,25,65,66);
	createEdgeWallshori(24,25,57,70);
	createEdgeWallshori(27,28,57,91);
	createEdgeWallsver(15,23,57,58);
	createEdgeWallsver(9,14,57,58);
	createEdgeWallsver(27,32,57,58);
	createEdgeWallshori(16,17,27,36);
	createEdgeWallshori(16,17,41,53);
	createEdgeWallshori(16,17,36,42);
	createEdgeWallshori(12,13,41,48);
	createEdgeWallshori(12,13,49,53);
	createEdgeWallsver(16,25,27,28);
	createEdgeWallshori(24,25,27,31);
	createEdgeWallshori(24,25,30,37);
	createEdgeWallshori(24,25,36,53);
	createEdgeWallsver(16,26,52,53);
	createEdgeWallshori(29,30,44,53);
	createEdgeWallsver(26,30,52,53);
	createEdgeWallsver(27,30,44,45);
	createEdgeWallsver(25,27,44,45);
	createEdgeWallsver(25,27,46,47);
	createEdgeWallsver(25,27,48,49);
	createEdgeWallsver(25,27,50,51);
	createEdgeWallshori(27,28,44,53);

//second part
createEdgeWallshori(23,24,69,79);
createEdgeWallshori(24,25,78,91);
createEdgeWallsver(0,24,82,83);
createEdgeWallshori(0,1,82,104);
createEdgeWallsver(0,10,103,104);
createEdgeWallsver(0,10,124,125);
createEdgeWallshori(0,1,107,125);
createEdgeWallsver(0,10,107,108);
createEdgeWallsver(0,10,117,118);
createEdgeWallsver(0,10,94,95);
createEdgeWallshori(9,10,82,92);
createEdgeWallshori(9,10,93,101);
createEdgeWallshori(9,10,102,105);
createEdgeWallshori(9,10,106,109);
createEdgeWallshori(9,10,110,122);
createEdgeWallshori(9,10,124,129);
createEdgeWallsver(9,24,129,130);
createEdgeWallshori(16,17,82,90);
createEdgeWallsver(15,23,90,91);
createEdgeWallshori(13,14,85,91);
createEdgeWallshori(13,14,83,84);
createEdgeWallsver(11,14,90,91);
createEdgeWallsver(13,16,85,86);
createEdgeWallsver(12,25,95,96);
createEdgeWallsver(12,16,103,104);
createEdgeWallshori(16,17,95,104);
createEdgeWallshori(17,18,103,108);
createEdgeWallshori(16,17,107,120);
createEdgeWallsver(16,25,119,120);
createEdgeWallshori(24,25,95,108);
createEdgeWallshori(23,24,107,117);
createEdgeWallshori(24,25,116,120);
createEdgeWallshori(12,13,109,120);
createEdgeWallshori(12,13,95,102);
createEdgeWallsver(12,17,107,108);
createEdgeWallsver(12,17,116,117);
createEdgeWallshori(14,15,116,120);
createEdgeWallsver(11,14,124,125);
createEdgeWallshori(16,17,124,129);
createEdgeWallshori(24,25,124,130);
createEdgeWallsver(13,23,124,125);
createEdgeWallsver(27,32,90,91);
createEdgeWallshori(32,33,84,92);
createEdgeWallshori(32,33,94,98);
createEdgeWallsver(32,49,84,85);
createEdgeWallsver(27,30,95,96);
createEdgeWallshori(32,33,94,98);
createEdgeWallsver(32,49,97,98);
createEdgeWallshori(49,50,84,98);
createEdgeWallshori(34,35,98,127);
createEdgeWallshori(29,30,95,104);
createEdgeWallsver(26,30,103,104);
	createEdgeWallsver(26,30,95,96);
	createEdgeWallsver(25,27,95,96);
	createEdgeWallsver(25,27,97,98);
	createEdgeWallsver(25,27,99,100);
	createEdgeWallsver(25,27,101,102);
	createEdgeWallshori(27,28,95,104);
	createEdgeWallsver(31,50,116,117);
	createEdgeWallshori(24,25,130,133);
	createEdgeWallshori(49,50,116,140);
	createEdgeWallshori(27,28,106,120);
	createEdgeWallsver(28,30,106,107);
	createEdgeWallsver(28,30,119,120);
	createEdgeWallshori(30,31,106,120);
    createEdgeWallshori(31,32,124,133);
	createEdgeWallsver(25,32,124,125);
	createEdgeWallsver(16,32,132,133);
    createEdgeWallshori(16,17,132,137);
	createEdgeWallsver(16,25,136,137);
	createEdgeWallshori(34,35,129,140);
	createEdgeWallsver(34,50,139,140);
	createEdgeWallsver(21,25,134,135);
	createEdgeWallsver(21,22,133,134);
	createEdgeWallshori(24,25,138,148);
	createEdgeWallsver(20,25,142,143);
	createEdgeWallshori(20,21,136,143);
	createEdgeWallshori(34,35,130,157);
	createEdgeWallshori(25,26,142,145);
	createEdgeWallshori(26,27,145,146);
	createEdgeWallshori(27,28,146,147);
	createEdgeWallsver(28,31,147,148);
	createEdgeWallsver(31,32,146,147);
	createEdgeWallshori(32,33,145,146);
	createEdgeWallshori(33,34,142,145);
	createEdgeWallshori(31,32,142,144);
	createEdgeWallshori(27,28,142,144);
	createEdgeWallshori(28,29,144,145);
	createEdgeWallshori(29,30,145,146);
	createEdgeWallshori(30,31,144,145);
	createEdgeWallsver(27,35,135,136);
	createEdgeWallsver(27,35,139,140);
	createEdgeWallshori(27,28,135,140);
	createEdgeWallshori(39,40,116,125);
	createEdgeWallshori(39,40,131,139);
	createEdgeWallsver(39,44,124,125);
	createEdgeWallsver(39,42,131,132);
	createEdgeWallsver(43,50,128,129);
	createEdgeWallshori(43,44,124,127);
	createEdgeWallshori(43,44,130,132);
	createEdgeWallsver(43,46,131,132);
	createEdgeWallshori(45,46,131,139);
	createEdgeWallsver(36,40,124,125);
	createEdgeWallsver(35,37,123,124);
	createEdgeWallsver(35,37,132,133);
	createEdgeWallsver(36,40,131,132);

	createEdgeWallsver(44,45,127,128);
	createEdgeWallsver(44,45,129,130);
	createEdgeWallsver(42,43,132,133);


		//gate
		createEdgeWallshori(8,9,24,26);
		createEdgeWallshori(8,9,34,44);
		createEdgeWallshori(8,9,53,56);
		createEdgeWallshori(8,9,91,94);
		createEdgeWallshori(8,9,100,111);
		createEdgeWallshori(8,9,121,125);
		createEdgeWallshori(33,34,7,11);
		createEdgeWallshori(33,34,25,29);
		createEdgeWallshori(33,34,53,57);
		createEdgeWallshori(33,34,91,95);
		createEdgeWallshori(27,28,8,11);
		createEdgeWallsver(12,15,27,28);
		createEdgeWallsver(14,16,28,29);
		createEdgeWallsver(12,15,21,22);
		createEdgeWallshori(13,14,47,49);
		createEdgeWallsver(22,24,21,22);
		createEdgeWallshori(13,14,31,33);
		createEdgeWallshori(13,14,47,49);
		createEdgeWallsver(13,16,58,59);
		createEdgeWallsver(22,24,58,59);
		createEdgeWallsver(14,16,51,52);
		createEdgeWallsver(22,24,89,90);
		createEdgeWallsver(10,12,89,90);
		createEdgeWallsver(13,15,89,90);
		createEdgeWallshori(13,14,101,103);
		createEdgeWallshori(13,14,107,110);
		createEdgeWallshori(13,14,107,110);
		createEdgeWallshori(23,24,132,139);
		createEdgeWallsver(12,16,118,119);
		createEdgeWallsver(9,12,125,126);
		createEdgeWallsver(22,24,125,126);
		createEdgeWallsver(26,27,143,144);
		createEdgeWallsver(32,35,143,144);
		createEdgeWallsver(31,35,106,107);
		createEdgeWallshori(32,33,106,117);

		//createEdgeWallsver(39,42,130,131);

		//gates


	//diagonalleft
	let i=125;
	for(let j=2;j<35;j++){

	createEdgeWallsver(j,j+1,i,i+1);
	i++;
	}
	await animateCells();
		inProgress = false;
		return;
}
function createEdgeWalls() {
	for (var i = 0; i < totalRows; i++) {
		for (var j = 0; j < totalCols; j++) {
			if (i == 0 || j == 0 || i == (totalRows - 1) || j == (totalCols - 1)) {
				cellsToAnimate.push([[i, j], "wall"]);
			}
		}
	}
}
function createEdgeWallsver(a,b,c,d) {
	for (var i = a; i < b; i++) {
		for (var j = c; j < d; j++) {
	
			if (j == (d - 1)) {
				cellsToAnimate.push([[i, j], "wall"]);}
		}
	}
}
function createEdgeweightsver(a,b,c,d) {
	for (var i = a; i < b; i++) {
		for (var j = c; j < d; j++) {
	
			if (j == (d - 1)) {
				cellsToAnimate.push([[i, j], "weight"]);}
		}
	}
}
function createEdgeweightshori(a,b,c,d) {
	for (var i = a; i < b; i++) {
		for (var j = c; j < d; j++) {
	
			if (i == (b - 1)) {
				cellsToAnimate.push([[i, j], "weight"]);}
		}
	}
}
function createEdgeWallshori(a,b,c,d) {
	for (var i = a; i < b; i++) {
		for (var j = c; j < d; j++) {
	
			if (i == (b - 1)) {
				cellsToAnimate.push([[i, j], "wall"]);}
		}
	}
}
