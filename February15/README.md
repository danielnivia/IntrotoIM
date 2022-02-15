## Documentation for Assignment 3
---
Feb 12:
So from professor [Aaron Sherwood Cars Example](https://editor.p5js.org/aaronsherwood/sketches/JO7e1p6aDr) code I decided to understand how he created the arrays and class for the cars. After analyzing this code I decided to implement my own class for Rectangles. From professor Aaron code I understood that I could use the built in function `color()` to send an RGBA value as an input to the class. For my design I decided to draw different sized rectangles in different positions of the canvas with different color and opacity. It was pretty similar to my previous assignment in which I used For Loops to call the functions that drew the shapes of different colors. Below are the results of three images, and the code:

Images: 

![assignment3Draft-01](assignment3Draft-01.jpg)

![assignment3Draft-02](assignment3Draft-02.jpg)

![assignment3Draft-03](assignment3Draft-03.jpg)

Code: 

````
// variables for the project
let myRectsArray = []; // array for rectangles
// variables for colors
let r
let g
let b
let a 

function setup() {
  createCanvas(600, 600); //leave the screen size the same
  background(20);
  rectMode(CENTER); // create every rectangle from their center point

  
  //create 250 rectangles random
  for (let i = 0; i < 250; i++){
    // assign color variables for the rectangle class
    r = int(random(15,255));
    g = int(random(15,255));
    b = int(random(15,255));
    a = int(random(100,200));
    print(r,g,b,a)
    
    //push into the array the NEW object created
    myRectsArray.push(new Rects(random(10,100), random(10,100), random(2,6),color(r,g,b,a)))
    
  }

  
  //showing the rectangles i have in the array
  for (let i = 0; i < myRectsArray.length; i++){
    myRectsArray[i].show();
  }
}

//function draw() {

// }

class Rects{
  //set up the constructor
  constructor(wid,hgt,rnd,clr){ // inside the round parenthesis the variables as inputs
    //variables that will work in the class
    // input variables to the constructor
    this.wid = wid; 
    this.hgt = hgt;
    this.rnd = rnd;
    this.rectColor = clr;
    //additional variables
    this.posX = random(50,550) // 
    this.posY = random(50,550)
    
  }
  //function that displays the rectangles in the screen
  show(){
    this.drawRect();
  }
  
  drawRect(){
    fill(this.rectColor);
    noStroke();
    rect(this.posX, this.posY, this.wid, this.hgt, this.rnd);
    
  }
   
}

````

---
The idea is now to make each of the rectangles rotate around their center at different speeds in their location where they are created. For this I will be using the functions `translate()` and `rotate()`

---

In order to apply the rotation of the rectangles in the location that they were created, I used the `push()` and `pop()` functions to do an initial translation and create the `rect()` at point (0,0) of that new translation. There, the next step was adding the rotation speed and if it is clockwise or anticlockwise. In order to do this in the constructor I created the variable `this.rotationSpeed` that was a random value between (-10,10), this would determine in the draw function how fast will the rectangle rotate and the direction. Overall, it was not that hard to update the code as I already done rotations for the first assignment and using the arrays in classes allowed me to create multiple objects in an easy way. Below are a video and the code.

**Video:**

https://user-images.githubusercontent.com/78901786/153708886-e1e1010a-c943-4936-b868-ae06bac9ca59.mp4

**Code:**

````
// variables for the project
let myRectsArray = []; // array for rectangles
// variables for colors
let r;
let g;
let b;
let a;
//let angle = random(0, 360);

function setup() {
  frameRate(60);
  createCanvas(600, 600); //leave the screen size the same
  background(20);
  rectMode(CENTER); // create every rectangle from their center point

  //create 250 rectangles random
  for (let i = 0; i < 250; i++) {
    // assign color variables for the rectangle class
    r = int(random(15, 255));
    g = int(random(15, 255));
    b = int(random(15, 255));
    a = int(random(100, 200));
    print(r, g, b, a);

    //push into the array the NEW object created
    myRectsArray.push(new Rects(
        random(10, 100),
        random(10, 100),
        random(2, 10),
        color(r, g, b, a)
      )
    );
  }

  //showing the rectangles i have in the array
  // for (let i = 0; i < myRectsArray.length; i++) {
  //   myRectsArray[i].show();
  //}
}

function draw() {
  background(25)
 for (let i = 0; i < myRectsArray.length; i++) {
    myRectsArray[i].show(); 
 }
}

class Rects {
  //set up the constructor
  constructor(wid, hgt, rnd, clr) {
    // inside the round parenthesis the variables as inputs
    //variables that will work in the class
    // input variables to the constructor
    this.wid = wid;
    this.hgt = hgt;
    this.rnd = rnd;
    this.rectColor = clr;
    //additional variables
    this.posX = 0 //random(50, 550); // eliminating the random because of translation
    this.posY = 0 //random(50, 550);
    this.transX = random(50, 550);
    this.transY = random(50, 550);
    this.angle = random(0,360);
    this.rotationSpeed = random(-10,10);
  }
  //function that displays the rectangles in the screen
  show() {
    this.drawRect();
    //this.rotationRect(); // function for rotation
  }

  drawRect() {
    fill(this.rectColor);
    noStroke();
    push();
    translate(this.transX, this.transY);
    rotate(radians(this.angle))
    this.angle += this.rotationSpeed 
    //position variables will be 0,0 but in the translate new origin
    rect(this.posX, this.posY, this.wid, this.hgt, this.rnd);
    pop();
  }
  
 // rotationRect(){
 //  rotate(radians(this.angle))
 //  this.angle += this.rotationSpeed 
 //  }
}

````


