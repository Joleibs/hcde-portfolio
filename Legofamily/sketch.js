//Created by Josh Leibsohn
//Last edited 1/30
//This program draws four characters from Adventure Time and moves them in from the four corners to a center positon
//where they stop.

var finnX = 50; //Defines variable for Finn X position to be 50
var finnY = 150; //Defines variable for Finn Y position to be 150
var jakeX = 50; //Defines variable for Jake X position to be 50
var jakeY = 600; //Defines variable for Jake Y position to be 600
var princessX = 600; //Defines variable for Princess X position to be 600
var princessY = 100; //Defines variable for Princess Y position to be 100
var lumpyX = 600; //Defines variable for Lumpy X position to be 600
var lumpyY = 560; //Defines variable for Lumpy Y position to be 560

function setup() {
  createCanvas (800, 800); //makes the canvas 800 x 800 pixels
  background (255); //colors the background white
}

//the draw function calls each character's function
function draw() {
  background (255); //draws white background
  Finn (); //calls Finn function
  Jake (); //calls Jake function
  Princess (); //calls Princess function
  Lumpy (); //calls Lumpy Space Princess function
  jakeX = jakeX + 2;
  jakeX = min(jakeX, 380);
  if (jakeX >= 380) {
    jakeY = jakeY - 2;
    jakeY = max(jakeY, 370);
  };
  finnX = finnX + 1;
  finnY = finnY + 1;
  finnX = min(finnX, 300);
  finnY = min(finnY, 450);
  princessX = princessX - 1
  princessY = princessY + 1
  princessX = max(princessX, 460)
  princessY = min(princessY, 400)
  lumpyX = lumpyX - 1
  lumpyY = lumpyY - 1
  lumpyX = max(lumpyX, 540)
  lumpyY = max(lumpyY, 350)
};

//this function draws Finn the lego character on the left
var Finn = function () {
  noStroke(0);
  fill(0); //black
  rect(finnX, finnY, 30, 10); //shoes
  fill(0, 0, 200); //dark blue
  rect(finnX, finnY - 30, 30, 30); //pants
  fill(0, 0, 280); //light blue
  rect(finnX, finnY - 60, 30, 30); //shirt
  stroke(0);
  fill(255); //white
  rect(finnX, finnY - 80, 29, 20);
};

//draws Jake the second character from the left
var Jake = function () {
  noStroke(0);
  fill(239, 186, 52); //orange
  rect(jakeX, jakeY, 30, 90); //body x = 30 y = 90
  //fill(255);
  //rect(385, 375, 5, 5);
  //rect(400, 375, 5, 5);
  //fill(0);
  //rect(386, 376, 2, 2);
  //rect(401, 376, 2, 2);
}

//draws Princess Bubblegum the second character from the right
var Princess = function () {
  noStroke(0);
  fill(221, 46, 192); //dark pink
  rect(princessX, princessY, 30, 60); //body
  fill(247, 133, 228); //light pink
  rect(princessX, princessY - 20, 30, 20); //face
  fill(221, 46, 192); //dark pink
  rect(princessX, princessY - 30, 30, 10); //hair
  fill(255, 226, 40); //goldish 
  rect (princessX + 10, princessY - 30, 10, 5); //crown
}

//draws Lumpy Space Princess the character on the right
var Lumpy = function () {
  noStroke(0);
  fill(216, 143, 234); //purple
  rect(lumpyX, lumpyY + 35, 30, 50); //body
  fill(255, 226, 40); //goldish 
  ellipse(lumpyX + 15, lumpyY + 45, 5, 5);
}
