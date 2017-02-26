//Program created by Josh Leibsohn. Last edited 2/25/17. 
//This program draws a bar graph depicting Seattle Crimes Per Capita by Year from 1975 - 2017
//When a user hovers the mouse over a bar the exact value appears at the top of the bar.

var barWidth = 30 //creates var for bar width of 30

function setup() {
  createCanvas (1450, 800); //creates canvas 1450 x 800
  textSize(14); //sets text size to 14
  textFont("avenir") //sets font to avenir
}

function draw() {
  background(230); //draws grey background every loop 
  fill(255); //fills background as white
  bars(); //calls bar funtions
  fill(0); //sets fill black
  border(); //calls border
  yearsLabel(); //draws years
  xLabel(); //draws x label
  yLabel(); //draws y label
  
  for(i = 0; i < years.length; i++) { //this function makes the graph interactive
    if (mouseX > 100 + i * barWidth && mouseX < 100 + i * barWidth + barWidth) { //if mouseX is inside of bar that bar is selected
      fill(0);
      fill(10, 10, 200);
      textSize(18); //sets text to 18
      text (crimes[i], 100 + i * barWidth, 670 -crimes[i] / 4); //this draws the value of crimes[i] at the y postion of the top of the bar
    }
  }
  textSize(12) //sets text size back to 12
}

var years = [
"1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989",
"1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", 
"2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"] //data array for the year values (n = 40)

var crimes = [
788.68, 819.86, 831.2, 1000.08, 931.19, 1057.34, 1074.85, 1008.58, 936.77, 1115.96, 1317.27, 
1354.54, 1435.2, 1361.15, 1337.1, 1507, 1356.27, 1344.55, 1399.84, 1210.14, 926.11, 
841.93, 914.09, 831.62, 767.28, 769.12, 725.09, 705.41, 684.37, 659.59, 709.41,
711.24, 626.71, 576.35, 640.8, 577.5, 592.68, 603.32, 584.93, 603.7, 598.65] //data array for the crimes per capita  (n = 40)


function yearsLabel () { //this function draws the year labels along the x axis
  for (i = 0; i < years.length; i++) {
  text (years[i], 100 + i * barWidth, 700);
  }
}

function xLabel () { //this function draws the label for the x axis
  text ("Year", 675, 750);
  textSize(20);
  text ("Seattle Violent Crimes Per Capita, 1975 - 2015", 400, 200);
}

function yLabel () { //this function translates the grid to 50, 400. then it rotates the canvas 270 degrees. 
//then it writes the y label as text. then it resets the rotate and the matrix 
  translate(50, 480);
  rotate(radians(270));
  textSize(12);
  text ("Seattle Crimes Per Capita", 0, 0);
  rotate(radians(-270));
  resetMatrix();
}

function border () { //draws edge lines and axis lines)
  strokeWeight(3);
  line (0, 0, 0, 800);
  line (0, 0, 1450, 0);
  line (1450, 800, 1450, 0);
  line (1450, 800, 0, 800);
  
  line (90, 686, 90, 250);
  line (90, 686, 1330, 686)
}


function bars () { //
  for (i = 0; i < crimes.length; i++) {
    noStroke();
    fill(200, 100, 100);
    rect (100 + barWidth * i, 680, barWidth - 4, -crimes[i] / 4);
    //rect (x, y, w, h)
  }
}




