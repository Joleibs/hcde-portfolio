// Created by Josh Leibsohn
//Last edited 2/10/17
//This program allows the user to position directional light. The color of the light is based off of a timer that increases the red and green value porportionally.
//The blue value is randomized every time the timer switches directions approx ~5 seconds.


var timer = 0 //creates timer variable
var time = 1 //creates time variable (essentially direction)
var b = 0 //variable b is amount of blue

function setup() {
  createCanvas(400, 400, WEBGL) //creates canvas 400 x 400 enables WEBGL context
}

function draw() {
  background(0); //draws background black
  var dirX = (mouseX / width - 0.5) * 2 //creates variable dirX relative to mouseX, width of canvas
  var dirY = (mouseY / height - 0.5) * -2 //creates variable dirY relative to mouseY and height of canvas
  directionalLight(timer, timer/2, b, dirX , dirY, 0.25); //interesting function I wanted to explore in the p5 library. 
  //First three arguments are R G B and moving relative to timer. b is randomized when timer runs out. Next three variables are X pos,Y pos, and Z pos
  ambientMaterial(250); //creates grey hue of ambient material for directional light interaction
  sphere (100); //creates sphere vector for light to interact with
  
  timer = timer + time //increase value of timer by time (1)
  
  
  
  if (timer > 254 || timer < 1) {
    time = time * -1 //switches direction of timer when timer reaches 255 (the max color amount)
    b = random (255); //introduces a random amount of blue
  } 
}