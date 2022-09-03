
var randomnumber1=Math.floor((Math.random()*6))+1;
var randomimagesrc1= "images/dice"+ randomnumber1 + ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesrc1);

var randomnumber2=Math.floor((Math.random()*6))+1;
var randomimagesrc2= "images/dice"+ randomnumber2 + ".png";
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomimagesrc2);

if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="PLAYER 1 WINS!";
}
else if (randomnumber2>randomnumber1) {
  document.querySelector("h1").innerHTML="PLAYER 2 WINS!";
}
else{
  document.querySelector("h1").innerHTML="DRAW!";
}
