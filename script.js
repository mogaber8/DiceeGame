// First Dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number between 1 and 6.
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
// Second Dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; 
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
// header
var header = document.querySelector("h1");
if (randomNumber1 > randomNumber2){
    header.innerHTML = " Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1){
    header.innerHTML = "Player 2 Wins!"
} 
else {
    header.innerHTML = "No Winner"
}
