// Define of All Variables.
var mainArray = [],
		copyArray ,
		maxValue 	= 0,
		cols 			= [],
		widthCols = 0,
		board	;

// Define of Map Function.
function map(value, min1, max1, min2, max2){
	  return value*((min1+max1)/(min2+max2));
}

// Define of Setup Function.
function setup(){
	// Setting of Values in variables .
	mainArray = [17.5, 9, 20, 13, 12.75, 9, 10, 10];
	copyArray = mainArray.slice();
	// Get the max value from Array
	maxValue = copyArray.sort(function(a,b){return b-a;})[0];
	board = document.getElementById("board");
	for(var i=0;i<copyArray.length;i++){
		//	Creating of cols, and Setting attributes(className ,width ,value) of each cols .
		cols[i]=document.createElement("DIV");
		cols[i].className = "col";
		cols[i].innerHTML = mainArray[i];
		// Mapping of width .
		widthCols = map(mainArray[i],0,20,0,100);
		cols[i].style.width ="calc("+ widthCols +"% -10px)";
	}
}

// Define of Show Function.
function show(){
	for(var i=0;i<cols.length;i++){
		// Adding the cols to board
		board.appendChild(cols[i]);
	}	
}
