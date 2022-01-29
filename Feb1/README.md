## (Here should go documentation and screenshot of potrait)
### Make a self-portrait using p5.js.
- The portrait must be **entirely created by your code** i.e. you must not
	interact with your computer while the portrait is being made (e.g. no
	drawing using the mouse)
- The portrait **does not need to be dynamic** (i.e. it does not need to change
	while we look at it)
- The portrait does not need to be realistic. The purpose is to practice using
	the simple drawing functions.
- In your Github repository, create a **new folder named** `Feb1`
	- Upload your *program into the new folder, with the extension* `.js`.
		- If you use any variables, chose good names.
	- Upload a **screenshot of your portrait into the new folder** (Feb1)
	- Create a `README.md` in the new folder and **include your screenshot in the**
		`README.md`.
	- Also in the `README.md`, **describe any difficulties** you had or anything
		interesting you discovered.
- Post your self portrait to our **Discord channel**

---
**Notes of the process by dates**
---
Jan 28:
I worked on understanding the function [rotate()](https://p5js.org/reference/#/p5/rotate), the reference page was not as useful because the rotations seemed to be random despite converting degrees to radians. Therefore, I used The Coding Train's series on transformations, particularly [Transformations Pt.1 (Translate, Rotate, Push/Pop)](https://www.youtube.com/watch?v=o9sgjuh-CBM). Through this I understood the role that the function [translate()](https://p5js.org/reference/#/p5/translate), and I managed to do a simple animation of an ellipse rotating around a specific point. 

Even though the assignment does not require animation, understanding how `rotate()` works is useful to do shapes that are at a particular angle. For this I have already branched my main repository to do experiments on the file `potrait.js`. I hope to further explore and start developing the self potrait with diverse elements.

Below is a screenshot of the result up to this point and the source code:
![potrait1-00](potrait1-00.jpg)

````

//program that rotates a circle around point (300,200)
let angle = 60;

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
   push();
   rotate(radians(50));
   rect(0, 0, 50, 50);
   pop();
   //-------------
   fill(30, 35, 180);
   //rotate(radians(-45));
   push();
   rotate(radians(180));
   rect(0, 0, 80, 30);
   pop();
   //-------------
   fill(250, 5, 45);
   translate(100, 0);
   ellipseMode(CENTER); // rotates around center of shape
   ellipse(0, 0, 10);
   push();
   ellipseMode(CORNER); // rotates around upper left corner
   rotate(radians(angle));
   
   ellipse(0, 20, 40, 60);
   line(0, 0, 0, 20);
   //angle = angle + 1; // rotation variable
   pop();
}
````

--- 
Jan 29:
a) Drawing a musical note
After learning some of the new functions like [resetMatrix()](https://p5js.org/reference/#/p5/resetMatrix), I looked experimenting using the knowledge from yesterday and the new one. The main objective was to draw a quater musical note. I wanted to add this as I like music making and I play the violin (drawing a violin with simple shapes seems like a challenging task for now). Thus, I tried out the knowledge acquired for transformations to work on these changes. And the result for now is the following:

![potrait1-00](potrait1-01.jpg)

(Code until this point)
````
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

````


