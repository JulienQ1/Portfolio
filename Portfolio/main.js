

document.getElementById("contry").addEventListener("click", click);


function click() {
   setTimeout(drawline, 500)
	setTimeout(drawcircle,2000) 
	setTimeout(drawMapContent,2500) 
	setTimeout(drawMap,2600)
	setTimeout(writetext,2800)
}




function drawcircle(){
var node = document.createElement("DIV");
    
    node.className = "contry-name";
    document.getElementById("map").appendChild(node);
}

function drawline(){

    var node = document.createElement("DIV");
    
    node.className = "line";
    document.getElementById("map").appendChild(node);
}

function drawMapContent(){
	var node = document.createElement("div")
	var node2 = document.createElement("div")
    var node3 = document.createElement("div")

	node.className= "t-map";
	node2.className="t-map2"
	node3.id="city";
	node.id="t-map";
	document.getElementById("map").appendChild(node);
	document.getElementById("map").appendChild(node2);
	document.getElementById("map").appendChild(node3);
}
function drawMap(){
 document.getElementById("t-map").innerHTML="<img src='http://www.novisdev.com/image/t-map.png'>";
	
}

function writetext(){

	document.getElementById("city").innerHTML=" <strong>City</strong> </br> Tunisia";
}
 
