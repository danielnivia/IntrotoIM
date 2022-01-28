// this is the first version of my code, experimenting with rotate function
// best resource to understand transformations until now: https://www.youtube.com/watch?v=o9sgjuh-CBM 
// code will be an experiment from now on
//program that rotates a circle around point (300,200)
let angle = 0;

function setup() {
  createCanvas(400, 400);
  //rectMode(CENTER)
}

function draw() {
  background(66, 245, 147);
  stroke(255);
  line(0, 200, 400, 200); // x-axis
  line(200, 0, 200, 400); //y-axis
  //------------------

  translate(200, 200);
  fill(50, 50, 80);
  stroke(0);
  //-------------
  push(); // serves as a save this temporary changes
  rotate(radians(50));
  rect(0, 0, 50, 50);
  pop(); // serves as restore the original settings
  //-------------
  fill(30, 35, 180);
  //rotate(radians(-45));
  push();
  rotate(radians(180));
  rect(0, 0, 80, 30);
  pop();
  //-------------
  fill(250, 5, 45);
  //rotate(radians(-120)) // reset to 0 degreeszoo
  translate(100, 0);
  ellipseMode(CENTER);
  ellipse(0, 0, 10);
  push();
  ellipseMode(CORNER);
  rotate(radians(angle));

  ellipse(0, 20, 40, 60);
  line(0, 0, 0, 20);
  angle = angle + 1;
  pop();
}


