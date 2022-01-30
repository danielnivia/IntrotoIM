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
   //----setting up----\\
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
   //---- test fill and shape ----\\
   //   fill(20,34,200)
   //		rect(10,10,40,30)
   //----
   
   //----
   // general adjustments
   translate(200,150); // origin (200,150) 
   noStroke(); // sets no stroke to all unless stated to add stroke
   //----
   
   //---- FEET ----\\
   //shoes adidas 3 stripes
   push();
   fill(10);
   resetMatrix(); // reset to (0,0)
   translate(200,350); // temporary new origin for push and pop
   rectMode(CENTER);
   rect(-38,30,40,15,10,0,10,5); // left shoe
   rect(38,30,40,15,0,10,5,10); // right shoe
   stroke(225);
   strokeWeight(1.25);
	//left shoe lines
   line(-35,20,-45,38); // line 1 left foot
   line(-30,20,-40,38); // line 2 left foot
   line(-25,20,-35,38); // line 3 left foot
	//right shoe lines
   line(35,20,45,38); // line 1 right foot
   line(30,20,40,38); // line 2 right foot
   line(25,20,35,38); // line 3 right foot
   pop();
	//--------------\\
   //---- LEGS ----\\
   push();
   fill(200)
   rect(-40,120,80,40); //width of the body
   ellipse(0,145,80,40);
   rectMode(CENTER);
   //-------------
   rect(30,175,25,100,10); // legR
   rect(-30,175,25,100,10); // legL >> this works without the reset
   //-------------
   
   pop();
   
	//--------------\\   
   //---- BODY and ARMS ----\\
   //blue sandwich bleu logo in the middle
   resetMatrix(); 
   translate(200,200);
   fill(240,15,20); // color of the body
   rect(-40,-20,80,100);
	// right arm

push();
	fill(240,240,20); // color of the arm
rectMode(CENTER);
	rotate(radians(45));
	rect(60,-31,100,20);

	fill(10);
	rect(110,-31,20,20,5);
pop();

	fill(0);
	ellipse(0,0,10)

	// left arm
push();
	fill(240,240,20); // color of the arm
rectMode(CENTER);
	rotate(radians(45))
	rect(-20,31,20,100);
pop();
	//--------------\\



   
   //---- FACE ----\\
   // drawing the head
   push();
   resetMatrix();
   translate(200,150);
   ellipseMode(CENTER);
   fill(124,20,10); // NEED TO LOOK FOR SKIN COLOR
   ellipse(0,0,100,90);
   pop();
   //--
   //--drawing the smile with teeth
   fill(225);
   resetMatrix(); // reset to (0,0)
   translate(200,150); // return to (200,150) 
   arc(0, 5, 80, 60, 0, radians(180), OPEN);
   
   //--teeth
   stroke(0);
   strokeWeight(1.25);
   line(-35,20,35,20); // horizontal line for teeth
   line(0,5,0,35);// middle line teeth
   // right side
   line(10,5,10,33);// right1
   line(20,5,20,31);// right2
   line(30,5,30,26);// right3
   // left side
   line(-10,5,-10,33);// left1
   line(-20,5,-20,31);// left2
   line(-30,5,-30,26);// left3	
   
   //--eyes
   push();
   noStroke(); // no keeping outerline in shapes
   
   //right eye
   ellipseMode(CENTER);
   fill(225);
   ellipse(20,-20,20,10);
   fill(0); // black eye
   ellipse(20,-20,10,8);
   //left eye
   fill(225);
   ellipse(-20,-20,20,10);
   fill(0); // black eye
   ellipse(-20,-20,10,8);
   pop();
   
   //--------------\\
   
   
   
   //---- Music Notes ----\\
// quater note
   //the stem of the musical note
 
// two eighth notes
   //----
}
