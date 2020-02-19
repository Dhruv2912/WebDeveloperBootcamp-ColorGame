var numsquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colordisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
	setupmodebuttons();
	setupsquares();
 	reset();
}

function setupmodebuttons() {
	
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent=== "Easy"){
				numsquares=3;
			}
			else{
				numsquares=6;
			}
			reset();
		});
	}
}

function setupsquares() {
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
			squares[i].addEventListener("click", function() {
			//grab color of clicked squares
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetbutton.textContent = "Play Again?";
				changecolor(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else {
				this.style.backgroundColor="#232323";
				messageDisplay.textContent = "Try again";
			}
		});
	}
}

function reset(){
	colors = generaterandomcolors(numsquares);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;
	resetbutton.textContent="New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";	
}

resetbutton.addEventListener("click", function(){
	reset();
});

function changecolor(color) {
	//loop through all squares
	for (var i =0; i< colors.length; i++){
	squares[i].style.backgroundColor = color;	
	}
}

function pickcolor() {
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i =0; i<num; i++){
		//get random color and push into arr	
		arr.push(randomcolor());
	}
	//return that array
	return arr;
}

function randomcolor() {
	//pick a red from 0-255
	var r= Math.floor(Math.random()* 256);
	//pick a blue from 0-255
	var b= Math.floor(Math.random()* 256);
	//pick a green from 0-255
	var g= Math.floor(Math.random()* 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}