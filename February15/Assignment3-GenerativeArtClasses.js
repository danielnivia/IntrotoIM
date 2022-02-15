// variables for the project
let myRectsArray = []; // array for rectangles
// variables for colors
let r;
let g;
let b;
let a;
//let angle = random(0, 360);

function setup() {
  //frameRate(60);
  createCanvas(600, 600); //leave the screen size the same
  background(25);
  rectMode(CENTER); // create every rectangle from their center point

  //create 250 rectangles random
  for (let i = 0; i < 250; i++) {
    // assign color variables for the rectangle class
    r = int(random(15, 255));
    g = int(random(15, 255));
    b = int(random(15, 255));
    a = int(random(100, 200));
    //print(r, g, b, a);

    //push into the array the NEW object created
    myRectsArray.push(
      new Rects(
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
  background(25); // the background is drawn again before the updated rectangle in rotation is drawn again
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
    this.posX = 0; //random(50, 550); // eliminating the random because of translation
    this.posY = 0; //random(50, 550);
    this.transX = random(50, 550);
    this.transY = random(50, 550);
    this.angle = random(0, 360);
    this.rotationSpeed = random(-10, 10);
  }
  //function that displays the rectangles in the screen
  show() {
    this.drawRect();
  }

  drawRect() {
    fill(this.rectColor);
    noStroke();
    push();
    translate(this.transX, this.transY);
    rotate(radians(this.angle));
    this.angle += this.rotationSpeed;
    //position variables will be 0,0 but in the translate new origin
    rect(this.posX, this.posY, this.wid, this.hgt, this.rnd);
    pop();
  }
}
