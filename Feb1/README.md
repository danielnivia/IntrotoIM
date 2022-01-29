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
