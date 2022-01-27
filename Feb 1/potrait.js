/*
This version is a copy of today's class code by the professor
It will serve as my initial commit although there might be changes
*/
function setup() {
  createCanvas(600,600); 
  background(25, 130, 80); 
  
  // draw a circle and a rectangle with the default colors
  circle (width/2, height/2, 50);
  rect(10, 10, 80, 20);
  
  // change the stroke and fill
  fill(180,0,0);
  stroke(0,0,180);
  // circle(80, 80, 80); this circle is commented out so it won't be drawn
  ellipse(200, 280, 50, 80);
  
  // change the stroke color but keep the same fill
  stroke(180,0,0);
  line( 0,0, 300, 100);
  
  let foo = radians(90);
  print(foo);                  //!!!!!!!!!!!!!!!!!!!!!!!! THIS IS VERY USEFUL!!!!!!!
  
  arc(50, 55, // center of the ellipse
      50, 50, // width and height
      0, radians(180)); // start and stop angle
  
  triangle( 100, 100, 10, 200, 100, 300);
  point(width/2, height/2);
}

let x = 0;
function draw() {
	// Where am I pointing?
  print(mouseX, mouseY);
  
	// I can do animation!
  circle(x, 500, 40);
  x=x+1;
}
