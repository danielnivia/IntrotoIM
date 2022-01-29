// this is the first version of my code, experimenting with rotate function
// best resource to understand transformations until now: https://www.youtube.com/watch?v=o9sgjuh-CBM 
// code will be an experiment from now on
// Potrait-Intro_to_IM-Feb1
/*
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
  //----
  //setting up
  background(66, 245, 147); // turquoise background color
  stroke(255); // white lines to show the center
  line(0, 200, 400, 200); // x-axis
  line(200, 0, 200, 400); //y-axis
  //----
  //----

  translate(200, 200); // sets origin to (200,200)
  fill(50, 50, 80);
  stroke(0);
  //-------------
      push();
  rotate(radians(50));
  rect(0, 0, 50, 50);
      pop();
  //----
  fill(30, 35, 180);
      push();
  rotate(radians(180));
  rect(0, 0, 80, 30);
      pop();
  //----
  fill(250, 5, 45);
  
  translate(100, 0);
      push();
  ellipseMode(CENTER); // rotates around upper left corner
  rotate(radians(20));
  fill(25)
  ellipse(0, 0, 40, 60);
      pop();
  
  ellipseMode(CENTER); // rotates around center of shape
  ellipse(0, 0, 10);
  
}



