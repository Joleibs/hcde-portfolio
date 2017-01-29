//Josh Leibsohn, 1/28/17, This program draws four lego characters inspired 
//by the cartoon Adventure Time that start in the four corners and then move
//to the center of the canvas.



function setup() {
  createCanvas (800, 800); //makes the canvas 800 x 800 pixels
  background (255); //colors the background white
}

var FinnX = 50; //Defines variable for Finn X position to be 50
var FinnY = 150; //Defines variable for Finn Y position to be 150

var JakeX = 50; //Defines variable for Jake X position to be 50
var JakeY = 600; //Defines variable for Jake Y position to be 600

var PrincessX = 600; //Defines variable for Princess X position to be 600
var PrincessY = 100; //Defines variable for Princess Y position to be 100
  
var LumpyX = 600; //Defines variable for Lumpy X position to be 600
var LumpyY = 560; //Defines variable for Lumpy Y position to be 560

//this function draws Finn the lego character on the left

var Finn = function () {

  noStroke(0);
  fill(0); //black
  rect(FinnX, FinnY, 30, 10); //shoes
  fill(0, 0, 200); //dark blue
  rect(FinnX, FinnY - 30, 30, 30); //pants
  fill(0, 0, 280); //light blue
  rect(FinnX, FinnY - 60, 30, 30); //shirt
  stroke(0);
  fill(255); //white
  rect(FinnX, FinnY - 80, 29, 20);
  
  //moves and establishes the ending point for Finn
  
  FinnX = FinnX + 1;
  FinnY = FinnY + 1;
  FinnX = min(FinnX, 300);
  FinnY = min(FinnY, 450);
  
};

//draws Jake the second character from the left

var Jake = function () {
  
  noStroke(0);
  fill(239, 186, 52); //orange
  rect(JakeX, JakeY, 30, 90); //body
  //fill(255);
  //rect(385, 375, 5, 5);
  //rect(400, 375, 5, 5);
  //fill(0);
  //rect(386, 376, 2, 2);
  //rect(401, 376, 2, 2);
  
  //moves and establishes the ending point for Jake along the X axis
  
  JakeX = JakeX + 2;
  JakeX = min(JakeX, 380);
  
  //tells Jake to finish moving to the right before he moves up
   
  if (JakeX >= 380) {
    JakeY = JakeY - 2;
    JakeY = max(JakeY, 370);
  };
  
}

//draws Princess Bubblegum the second character from the right

var Princess = function () {
  
  noStroke(0);
  fill(221, 46, 192); //dark pink
  rect(PrincessX, PrincessY, 30, 60); //body
  fill(247, 133, 228); //light pink
  rect(PrincessX, PrincessY - 20, 30, 20); //face
  fill(221, 46, 192); //dark pink
  rect(PrincessX, PrincessY - 30, 30, 10); //hair
  fill(255, 226, 40); //goldish 
  rect (PrincessX + 10, PrincessY - 30, 10, 5); //crown
  
  PrincessX = PrincessX - 1
  PrincessY = PrincessY + 1
  PrincessX = max(PrincessX, 460)
  PrincessY = min(PrincessY, 400)
  
}

//draws Lumpy Space Princess the character on the right

var Lumpy = function () {
  
  noStroke(0);
  fill(216, 143, 234); //purple
  rect(LumpyX, LumpyY + 35, 30, 50); //body
  fill(255, 226, 40); //goldish 
  ellipse(LumpyX + 15, LumpyY + 45, 5, 5);
  
  LumpyX = LumpyX - 1
  LumpyY = LumpyY - 1
  LumpyX = max(LumpyX, 540)
  LumpyY = max(LumpyY, 350)
  
}

//the draw function calls each character's function

function draw() {
  background (255); //draws white background
  Finn (); //calls Finn function
  Jake (); //calls Jake function
  Princess (); //calls Princess function
  Lumpy (); //calls Lumpy Space Princess function
  
};
  
