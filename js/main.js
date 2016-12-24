// Define of All Variables.
var mainArray = [],
		copyArray ,
		maxValue 	= 0,
		cols 			= [],
		widthCols = 0,
		board	;

// Define of Map Function.
function map(value,b,v,b2,v2){
	  return value*((b2+v2)/(b+v));
}

// Define of Setup Function.
function setup(){
	// Setting of Values in variables .
	mainArray = [17.5, 9, 20, 13, 12.75, 9, 10, 10];
	copyArray = mainArray.slice();
	// Get the max value from Array
	maxValue = copyArray.sort(function(a,b){return b-a;})[0];
	board = document.getElementById("box");
	for(var i=0;i<copyArray.length;i++){
		//	Creating of cols, and Setting attributes(className ,width ,value) of each cols .
		boxes[i]=document.createElement("DIV");
		boxes[i].className = "box";
		boxes[i].innerHTML = ab[i];
		// Mapping of width .
		widthCols = map(mainArray[i],0,20,0,100);
		boxes[i].style.width ="calc("+ width +"% -10px)";
	}
}

// Define of Show Function.
function show(){
	for(var i=0;i<boxes.length;i++){
		// Adding the cols to board
		board.appendChild(boxes[i]);
	}	
}
