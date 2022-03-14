// x position for the rectangle for the game
//NOT BEING USED
//let xPosRect = 200; //initial position

// array for the rectangles to break
let myRectsArray; //= []; // JUST DEFINE THE VARIABLE

let rectangle;
let ball; // global variable for class check
// array for the colors of the rectangles
let colorsArray = ["green", "yellow", "red", "purple"];

//initial xPosition for rectangle grid
let xPos = 75;
//initial yPosition for rectangle grid
let yPos = 100;

const INITIALXSPEED = 4;
const INITIALYSPEED = -6; // starting moving up
const CIRCLESIZE = 15;

const RECTWIDTH = 50; 
const RECTHEIGHT = 25;


let distPaddleBall; // assign the global variable

let myCircle;

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

  displayRect() {
    fill(this.color);
    noStroke();
    rectMode(CENTER);

    // draw rectangle with following variables
    rect(this.xPosition, this.yPosition, this.width, this.height, 5);
  }
  
  rectCollision(ball){
    // several statements with &&
    //print(ball.xPos, ball.yPos, "xpostion", this.xPosition, "ypostion", this.yPosition);
    if(ball.yPos + (ball.size) >= this.yPosition + (this.height/2) &&
       ball.yPos - (ball.size) <= this.yPosition - (this.height/2) &&
       ball.xPos + (ball.size) >= this.xPosition - (this.width/2) &&
       ball.xPos + (ball.size) <= this.xPosition + (this.width/2))
      {
        print("HELLO!!")
       return true; // confirm there is a collision
       }
    
  }

}

class movingBall {
  constructor(xpos, ypos) {
    this.xPos = xpos;
    this.yPos = ypos;
    this.xSpeed = INITIALXSPEED;
    this.ySpeed = INITIALYSPEED;
    this.size = CIRCLESIZE;
  }

  update() {
    // update the position of the circle
    this.xPos +=  this.xSpeed;
    this.yPos +=  this.ySpeed;
    // create the circle
    fill(10);
    ball = ellipse(this.xPos, this.yPos, this.size, this.size);
  }
  // check collisions of ball around wall
  checkEdges() {
    const R = this.size / 2;
    if (this.xPos < R || this.xPos > width - R) {
      this.xSpeed = -this.xSpeed;
    }
    //+50 to hit the top line 
    // eliminating the or part makes the ball disappear at the bottom
    if (this.yPos < R + 50){// || this.y > height - R) {
      this.ySpeed = -this.ySpeed;
    }
  }
    
    checkPaddle(){
    //distance between Paddle and Ball
    distPaddleBall = int(dist(this.xPos, this.yPos, mouseX, 445));
    //checking for the values commented out
    //print("Distance",distPaddleBall,"xPosRect", xPosRect, "Y",bally);
    if (distPaddleBall > 0 && distPaddleBall < 40 && this.yPos > 445) {
      this.ySpeed = -this.ySpeed;
    }
  }
  
  //Checking if it hit the ground
  checkBottom(){
    const R = this.size / 2;
    if(this.yPos > height - R){
      // change the game state
      print("OUT OF BOUNDS")
       
       }
    
  }
  
  changeDirection(string){
    if (string ==='y'){
      this.ySpeed = - this.ySpeed;
    }
    else{
      this.xSpeed = -this.xSpeed
    }
  }
  

}


function setup() {
  createCanvas(500, 500);
  //frameRate(20);
  myCircle = new movingBall(10, 450);
  
    // function to draw the rectangles in the array
  myRectsArray = drawRects();
  
  
}


function drawRects() {
  rectMode(CENTER);
  const myRectsArray = [];
  
  //counter for the FOR loop to change xPos and yPos
  let counter = 0;

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
    myRectsArray.push(new Rects(RECTWIDTH, RECTHEIGHT, colorRect, xPos, yPos));

    xPos += 50;

    counter += 1;
    print(counter);
  }

  
  return myRectsArray;
}

function drawPaddle() {
  push();
  rectMode(CENTER); // make the rectangle in the center not corner
  fill(10);

  //rectangle = rect(xPosRect, 450, 80, 10);
  rectangle = rect(mouseX, 450, 80, 10);
  pop();

  //checking if the rectangle hits the border
  if (mouseX < 40) {
    mouseX = 40;
  }

  if (mouseX > width - 40) {
    mouseX = width - 40;
  }
}


function draw() {
  
  // DO DIFFERENT STATES FOR THE GAME 
  //INSTRUCTIONS (1)
  //GAME (2)
  //LOSE GAME (3)
  background(220);
  
   // draw a rectangle to separate score at the top
  rectMode(CENTER);
  fill(15);
  rect(250, 50, 500, 5);
  

  //game state for playing draw the necessary objects
  // // function to draw the rectangles in the array
  // drawRects();
  // drawing the paddle
  drawPaddle();
  
  

   // drawing the ball
  myCircle.update(); // position of circle
  myCircle.checkEdges(); // top, left, right collision
  myCircle.checkPaddle(); // paddle collision
  myCircle.checkBottom(); // end game
  
 // drawing rectangles
  
  for(i = myRectsArray.length-1;i >= 0; i--){ 
    //print("i is:", i);
    const brick = myRectsArray[i];
    if (brick.rectCollision(myCircle)){
    print("HIT, i is:", i )
      myRectsArray.splice(i,1); // eliminate the rectangle
      
    } else{
      brick.displayRect();
    }
  
  }
  
  
}



