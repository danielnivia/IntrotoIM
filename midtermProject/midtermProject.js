// x position for the rectangle for the game
let xPosRect = 200; //initial position

// array for the rectangles to break
let myRectsArray = [];

let rectangle;
let ball;
// array for the colors of the rectangles
let colorsArray = ["green", "yellow", "red", "purple"];

//initial xPosition for rectangle
let xPos = 75;
//initial yPosition for rectangle
let yPos = 100;

const INITIALXSPEED = 4;
const INITIALYSPEED = -6; // starting moving up
const CIRCLESIZE = 15;

function setup() {
  createCanvas(500, 500);
  //frameRate(20);
  background(220);

  ballx = 10;
  bally = 450;
  ballxSpeed = INITIALXSPEED;
  ballySpeed = INITIALYSPEED;

  //counter for the FOR loop to change xPos and yPos
  counter = 0;

  //draw the rectangles to break calling class
  // create 32 rectangles
  for (let i = 0; i < 32; i++) {
    if (counter === 8) {
      counter = 0;
      xPos = 75; // reset to 75
      yPos += 25; // increment 25
    }

    // assign the color of rectangle
    // integer index for colorsArray
    randomIndex = int(random(0, 4));
    //assigning color for rectangle
    colorRect = colorsArray[randomIndex];
    print(colorRect);
    print(xPos, yPos);

    //push into the array the rectangles
    myRectsArray.push(new Rects(50, 25, colorRect, xPos, yPos));

    xPos += 50;

    counter += 1;
    print(counter);
  }
}

function drawPaddle() {
  push();
  rectMode(CENTER); // make the rectangle in the center not corner
  fill(10);

  //rectangle = rect(xPosRect, 450, 80, 10);
  rectangle = rect(mouseX, 450, 80, 10);
  pop();
  
  
  //checking if the rectangle hits the border
  if (mouseX < 40){
    mouseX = 40;
      
      }
  
  if (mouseX > width-40){
    mouseX = (width-40);
      
      }
}

function drawBall() {
  // update the position of the circle
  ballx = ballx + ballxSpeed;
  bally = bally + ballySpeed;

  // Check for collisions
  let r = CIRCLESIZE / 2;
  if (ballx < r || ballx > width - r) {
    ballxSpeed = -ballxSpeed;
  }

  //THIS CODE BELOW IS TO END GAME IF HITS BOTTOM
  // if(ball.y + ball.diameter / 2 >= windowHeight) {
  //      alive = false;
  //  }
  //r+50 to hit the top line that separates score
  if (bally < r + 50 || bally > height - r) {
    ballySpeed = -ballySpeed;
  }

  //distance between Paddle and Ball
  distPaddleBall = int(dist(ballx, bally, mouseX, 445));
  //checking for the values commented out
  //print("Distance",distPaddleBall,"xPosRect", xPosRect, "Y",bally);
  if (distPaddleBall > 0 && distPaddleBall < 40 && bally > 445) {
    ballySpeed = -ballySpeed;
  }

  // Draw the circle
  fill(10);
  ball = ellipse(ballx, bally, CIRCLESIZE, CIRCLESIZE);
}

function draw() {
  background(220);
  //set all rectangles to center mode
  rectMode(CENTER);

  //game state for playing draw the necessary objects
  // function to draw the rectangles in the array
  drawRects();
  // drawing the paddle
  drawPaddle();

  // drawing the ball
  drawBall();

}

function drawRects() {
  for (let i = 0; i < myRectsArray.length; i++) {
    myRectsArray[i].drawRect();
  }
  // draw a rectangle to separate score at the top
  fill(15);
  rect(250, 50, 500, 5);
}

//class for rectangles to break
class Rects {
  // set up the constructor
  //variabla name short hand
  //to not clash with p5js built variables
  //wid=width/hgt=height/clr=color
  constructor(wid, hgt, clr, xPos, yPos) {
    this.width = wid;
    this.height = hgt;
    this.color = clr;
    this.xPosition = xPos;
    this.yPosition = yPos;
  }

  drawRect() {
    fill(this.color);
    noStroke();

    // draw rectangle with following variables
    rect(this.xPosition, this.yPosition, this.width, this.height, 5);
  }
}
