var body = document.getElementById("body");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var css= document.querySelector('h3');
var text= document.querySelector('p');



function changeBackgroundColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";

css.textContent = body.style.background + ";" ;
text.textContent ='The new code is the following :';

}


function OriginalBackground() {
// shows all style of body
var style= getComputedStyle(body);   
console.log(style.backgroundImage);
text.textContent = 'The original code is the following :';
css.textContent = style.backgroundImage + " ;";
}

function CreateButton() {

 	var btn= document.createElement('button');
	btn.innerHTML= "Randomize me";
	body.appendChild(btn);
}

function getRandomColor () {
	// stolen fct that randomizes color
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



 function setRandomColor() {
 	var new1= color1.value = getRandomColor();
 	var new2= color2.value = getRandomColor();
 	changeBackgroundColor(new1,new2);
	}
	



color1.addEventListener("input", changeBackgroundColor);
color2.addEventListener("input", changeBackgroundColor);
OriginalBackground();
CreateButton();
document.querySelector('button').addEventListener('click', setRandomColor);
