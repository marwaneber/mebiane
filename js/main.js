function setup(){
function map(value,b,v,b2,v2){
  return value*((b2+v2)/(b+v));
}
var ab = [17.5, 9, 20, 13, 12.75, 9, 10, 10];
var a=ab.slice();
var maxN = a.sort(function(a,b){return b-a;})[0];
		 
			var boxes = [];
			var board = document.getElementById("box");
			var speed =3;
			var w = 1,width;	
	for(var i=0;i<a.length;i++){
		width = map(ab[i],0,20,0,100);
		boxes[i]=document.createElement("DIV");
		boxes[i].className = "box";
		boxes[i].innerHTML = ab[i];
		boxes[i].style.width = width+"%";
	}
	for(var i=0;i<boxes.length;i++){
		board.appendChild(boxes[i]);
		
	}
}
