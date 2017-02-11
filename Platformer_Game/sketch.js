//Created by Josh Leibsohn. 
//Last edited 2/10/17.
//This program creates a small platformer game. Control the ball with Left, Right, and Up Arrows.


var x = 10;
var y = 295;
r1 = 255;
r2 = 255;
r3 = 255;
var jumpSpeed = 3;
var timer = 50;


function setup() {
  createCanvas (400, 400); //creates canvas 400 x 400
  background (r1, r2, r3); //draws background at 255. r1, r2, and r3 provide the ability to assign different colors
}

function draw() {
  background (r1, r2, r3); //draws background on each frame at 255. r1, r2, and r3 provide the ability to assign different colors
  ellipse (x, y, 10); //draws ellipse that the player controls 
  course (); //draws course (lines, pit, and flag)
  
  //this logic allows the player to move the ellipse left and right at a speed of 5
  if (keyIsPressed){ 
    if (keyCode == LEFT_ARROW) {
      x = x - 5;
    } 
    if (keyCode == RIGHT_ARROW) {
      x = x + 5;
    }
  }
  
  timer = timer + 1; //this activates the timer value, adding one to the timer value each 
  
  print (timer); //prints value of timer to the console
  
  //this logic ends the jump height when the timer reachs 50/3 and is not on the starting plane, which is 295
  if (timer > 50/jumpSpeed && y < 295) {
    y = y + jumpSpeed
  } else if (timer < 50/jumpSpeed) { //this else if condition generates the jump when triggered by the UP ARROW function below draw
    y = y - jumpSpeed;
  }

  //this logic causes the ball to fall down the pit at a rate of 5 when X is between 160 and 240 and below the starting plane
  if (x > 160 && x < 240 && y > 290) {
    y = y + 5;
  }
  
  // this causes the ball to fall faster if it is below the starting plan (i.e. when ever it starts to fall this speeds it up)
  if (y > 300) {
    y = y + 5;
  }
  
  //returns the ball to the starting position if it falls off the screen
  if (y > 400) {
    x = 10;
    y = 295;
  }
  
  //assigns a random color to background if the ball reaches the goal (x > 380)
  if (x > 380) {
    r1 = random(255);
    r2 = random(255);
    r3 = random(255);
  } else { //if not past the flag the background is drawn white
    r1 = 255;
    r2 = 255;
    r3 = 255;
  }
}

//this is outside of the draw function because it should only happen once. it generates the jump function. 
//when up arrow is pressed the y position of the ball decreases at a rate of jumpSpeed (3). the timer is reset
//the timer must be reset so that the jump function will end at 50/3 each time
function keyPressed () {
    if (keyCode == UP_ARROW && y > 290) {
      y = y - jumpSpeed; 
      timer = 0;
    }
  }

//this function draws the course a series of lines and a triangle to make the flag
function course () {
  stroke (3);
  line (0, 300, 160, 300);
  line (240, 300, 400, 300);
  line (160, 300, 160, 400);
  line (240, 300, 240, 400);
  line (380, 300, 380, 260); //flag pole
  fill (0);
  triangle (380, 260, 380, 270, 360, 265);
}

