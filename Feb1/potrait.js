// this is the first version of my code, experimenting with rotate function
// best resource to understand transformations until now: https://www.youtube.com/watch?v=o9sgjuh-CBM 
// code will be an experiment from now on
function setup() {
  createCanvas(400, 400);
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
  rotate(radians(45));
  rect(0, 0, 50, 50);
  //-------------
  fill(30, 35, 180);
  rotate(radians(-45));
  rotate(radians(120));
  rect(0, 0, 80, 30);
  //-------------
  fill(250,5,45)
  rotate(radians(-120)) // reset to 0 degreeszoo
  rotate(radians(280))
  ellipse(0,0,50,60)
  
}

