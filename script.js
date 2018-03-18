var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//Code to add X span to end of every row
var list = document.getElementsByTagName("li");
var i;
for(i=0; i<list.length; i++){
	var span = document.createElement("span");
	var txt = document.createTextNode("\u2620");
	span.className = "close";
	span.appendChild(txt);
	list[i].appendChild(span);
}

var close = document.getElementsByClassName("close");


function deleteListElement(event){
	/*console.log(event);*/
	var del = event.target.parentElement;
	var pos=4;
	var id = setInterval(myMove,0.5);
	function myMove(){
	
	if(pos>350) {
		clearInterval(id);
		del.style.display = "none";
	}
	else{
		pos= pos+5;
		del.style.left = pos + 'px';
	}
	}
}

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li =document.createElement("li");  //to create element
		li.appendChild(document.createTextNode(input.value));  
		//to append the TEXT in the created element.
		ul.appendChild(li);
		
		var span = document.createElement("span");
		var txt = document.createTextNode("\u2620");
		span.className = "close";
		span.appendChild(txt);
		li.appendChild(span);
		span.addEventListener("click",deleteListElement);
		input.value = "";
		return true;
}

function addListAfterClick(){
	if(inputLength() > 0 ){
		createListElement();
	}
	else{
		alert("You must write something!!!");
	}
}

function addListAfterKeyClick(event){
	if(inputLength() >0 && event.keyCode == 13){
		createListElement();
	}
}

function toggleValue(e){
  
  if(e.target.tagName === "LI"){
  	e.target.classList.toggle("done");	
  }
  
}

button.addEventListener("click",addListAfterClick);
/*
we created an element  			: document.createElement("li")
Create text 					: document.createTextNode("testing"))
Append text to the element 		: .appendChild()
Then appended the element as a child to some other element. 
								: .appendChild(li)*/

//Note that text node is child of element								
input.addEventListener("keypress",addListAfterKeyClick);


ul.addEventListener("click",toggleValue);

for(i = 0; i< close.length; i++){
close[i].addEventListener("click", deleteListElement);	
}

