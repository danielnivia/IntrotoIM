// best resource to understand transformations until now: https://www.youtube.com/watch?v=o9sgjuh-CBM 
// ready for iPad
/*
File: Potrait-Intro_to_IM-Feb1
Date: 
Name: Daniel Nivia (dno220)
Description: Program in p5js that draw's a self-potrait. 
Uses 2D primitives and some transform functions.
*/

function setup() {
  //----
  createCanvas(400, 400);
  // putting the background here reduces the quality of the shapes
}

function draw() {
  //----
  //setting up
  background(66, 245, 147); // turquoise background color
  stroke(255); // white lines to show the center
  //grid for drawing around
  line(0, 200, 400, 200); // x-axis
  line(200, 0, 200, 400); //y-axis
  //upper left cuadrant
  line(0, 100, 400, 100);
  line(100, 0, 100, 400);
  //bottom left cuadrant
  line(0, 300, 400, 300);
  //right cuadrants
  line(300, 0, 300, 400);
  //----
  fill(20,34,200)
  //----
  //----
  // general adjustments
  translate(200, 200); // sets origin to (200,200)
  noStroke(); // sets no stroke to all unless stated to add stroke
  //----
  //TEST Rectangle
          push();
      fill(50, 50, 80); // greyish blue
      rotate(radians(45)); // rotate 50 degrees from top left corner from origin (200,200)
      strokeWeight(4) // stroke weight
      stroke(255, 204, 0) // added stroke
      rect(0, 0, 50, 50);
          pop();
  
  //----
  //the stem of the musical note
          push();
      fill(25)
      rect(99, -50, 10, 80,5); // -50 because origin is (200,300)
          pop();
  //----
  //----
  //head of the musical note
  translate(100, 0); // changes origin to (300,200)
          push();
      ellipseMode(CENTER); 
      rotate(radians(60)); // rotate 60 degrees
      fill(25);
      ellipse(25, 20, 20, 30); // the rotation affects calculation
                               //of where the ellipse goes but in
                               //theory is 25x, 20y from (300,200) 
          pop();
  //----
  //reseting the matrix [origin back to (0,0)]
  resetMatrix();
  rect(10,2,40,50);
  //----
}
