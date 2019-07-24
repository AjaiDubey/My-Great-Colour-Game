var numSqrs = 6;
var colors = [];
var color = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorText");
var msgdisplay = document.querySelector("#message");
var h1apna = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modeofGame = document.querySelectorAll(".modes");

initialize();

function initialize(){
	setupModebuttons();
	setupSquares();
	resetpg();
}

function setupModebuttons(){
	for (var i =0;i<modeofGame.length;i++){
		modeofGame[i].addEventListener("click", function(){
			modeofGame[0].classList.remove("selected");
			modeofGame[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSqrs = 3: numSqrs = 6;
			resetpg();
		});
	}
}
function resetpg(){
	colors = getcolorsArray(numSqrs);
	for(var i=0;i<color.length;i++){
		if(colors[i]){
			color[i].style.display = "block";
			color[i].style.backgroundColor = colors[i];
		}
		else{
			color[i].style.display = "none";
		}
		
	}
	pickedColor = colors[numberBolo()];
	colorDisplay.textContent = pickedColor;
	h1apna.style.backgroundColor = "steelblue";
	msgdisplay.textContent = "";
	resetbutton.textContent = "new colors";
}


resetbutton.addEventListener("click",function(){
	resetpg();
});

colorDisplay.textContent= pickedColor;


function setupSquares(){
	for(var i = 0; i < color.length;i++){
		color[i].addEventListener("click", function(){
			//alert(this.style.background);
			var clickedcolor = this.style.backgroundColor;
			if (clickedcolor === pickedColor){
				colorthem();
				msgdisplay.textContent = "Correct :)";
				h1apna.style.backgroundColor = clickedcolor;
				resetbutton.textContent = "Play Again?";
			}
			else{
				this.style.backgroundColor = "#232323";
				msgdisplay.textContent = " Try Again  :(";
			}
		});
	}
}



function colorthem(){
	for(var i =0;i<color.length;i++){
		color[i].style.backgroundColor = pickedColor;
	}
}



function numberBolo(){
	var num = Math.floor(Math.random()*colors.length);
	return num;
}



function getcolorsArray(numberwa){
	var arr = [];
	for(var i=0;i<numberwa;i++){
		arr[i] = getcolor();
	}
	return arr;
}

function getcolor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var string = "rgb(" + r +"," + " "+g +","+" " +b+")";
	return string;
}