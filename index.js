// For First Dice
var randomnumber1= Math.floor(Math.random()*6)+1;   // 1 to 6 randomnumber1
var randomDiceImage= "dice"+ randomnumber1+ ".png";  // dice1.png to dice6.png

var randomImageSource="images/" + randomDiceImage;
var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// For Second Dice

var randomnumber2= Math.floor(Math.random()*6)+1;
var randomImageSource2= "images/dice"+ randomnumber2+ ".png";

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// Players Wiinner

if(randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomnumber2 > randomnumber1)
{
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
