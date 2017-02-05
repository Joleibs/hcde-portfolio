//Created by Josh Leibsohn
//Last edited 2/4/17
//This program draws a monster with eyes that follow the mouse X position and when you click it jumps up and down.
//Hovering over the "Random Color" button assigns a new color each fram. 


var page = 0;
var eyesX = 200;
var x = 200
var y = 200
var jumpDir = 1
var r1 = 100
var r2 = 50
var r3 = 150

function mousePressed() {
  page = page + 1
}

function setup() {
  createCanvas (600, 600);
  background (255);
}

function eyesMove() {
  fill(0);
  var eyeMax = max (eyesX, 170);
  var eyeMin = min (eyeMax, 230)
  ellipse (eyeMin + 200, y - 100, 20);
  ellipse (eyeMin, y - 100, 20);
}

function eyes() {
  fill(0);
  ellipse (x + 200, y - 100, 20);
  ellipse (x, y - 100, 20);
}

function body() {
  noFill();
  stroke(1);
  fill (r1, r2, r3); // body color
  ellipse (x + 100, y + 100, 200); //body
  fill (255);
  ellipse (x, y - 100, 100, 40); //left eyeball
  ellipse (x + 200, y - 100, 100, 40); //right eyeball
  line (x + 50, y + 15, x, y - 80); //left line
  line (x + 150, y + 15, x + 200, y - 80); //right line
}

function mouth() {
  fill(0);
  stroke(1);
  ellipse (x + 100, y + 150, 100, 60); //mouth
  fill(255);
  noStroke();
  triangle (x + 60, y + 170, x + 80, y + 178, x + 70, y + 160);//bottom left
  triangle (x + 120, y + 178, x + 140, y + 168, x + 130, y + 160);//bottom right
  triangle (x + 90, y + 180, x + 110, y + 180, x + 100, y + 160);//bottom middle
  triangle (x + 70, y + 123, x + 90, y + 120, x + 80, y + 140);//top left tooth
  triangle (x + 130, y + 125, x + 110, y + 120, x + 120, y + 140);//top right tooth
}

function feet() {
  stroke(1);
  fill(255);
  line(x + 150, y + 185, x + 180, y + 250);//right leg
  line(x + 50, y + 185, x + 30, y + 250);//left leg
  fill(r1, r2, r3);
  rect(x + 180, y + 250, 50, 20);
  rect(x - 20, y + 250, 50, 20);
}

function hands() {
  line(x, y + 100, x - 50, y + 50);//left arm
  line(x + 200, y + 100, x + 250, y + 50);//right arm
  ellipse(x - 50, y + 50, 20);//left hand
  ellipse(x + 250, y + 50, 20);//right hand
  line(x - 50, y + 40, x - 55, y + 30); //top left finger
  line(x - 60, y + 45, x - 70, y + 40); //left middle finger
  line(x - 60, y + 55, x - 70, y + 55); //left bottom finger
  line(x + 255, y + 40, x + 260, y + 30); //right fingers
  line(x + 258, y + 45, x + 270, y + 40); //fingers
  line(x + 258, y + 55, x + 270, y + 55); //fingers
}

function monster(x, y) {
  body();
  mouth();
  feet();
  hands();
}

function button () {
fill (255);
rect (50, 500, 50, 50);
fill(0);
text ("Random Color", 53, 520, 50);
}

function draw() {
  if (mouseX < 100 && mouseX > 50 && mouseY > 450 && mouseX < 500) {
  r1 = random(255);
  r2 = random(255);
  r3 = random(255);
  }
  background (255);
  monster();
  button();
  if (page % 2 == 0) { 
    eyesMove(); 
    if (mouseX >= 300) {
      eyesX = eyesX + 2;
    } 
    if (mouseX < 300) {
      eyesX = eyesX - 2;
    } 
  } else {
    eyes();
    y = y + jumpDir;
    if (y > 250 || y < 150) {
      jumpDir = jumpDir * -1; 
    } 
  };
};
