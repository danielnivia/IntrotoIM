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
    //print(ball.x, ball.y, "xpostion", this.xPosition, "ypostion", this.yPosition);
    if(ball.y + (ball.size/2) >= this.yPosition + (this.height/2) &&
      ball.y - (ball.size/2) <= this.yPosition - (this.height/2) &&
      ball.x + (ball.size/2) >= this.xPosition - (this.width/2) &&
      ball.x + (ball.size/2) <= this.xPosition + (this.width/2))
      {
       return true; // confirm there is a collision
       }
    
  }

}

class movingBall {
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    this.xSpeed = INITIALXSPEED;
    this.ySpeed = INITIALYSPEED;
    this.size = CIRCLESIZE;
  }

  update() {
    // update the position of the circle
    this.x +=  this.xSpeed;
    this.y +=  this.ySpeed;
    // create the circle
    fill(10);
    ball = ellipse(this.x, this.y, this.size, this.size);
  }
  // check collisions of ball around wall
  checkEdges() {
    const R = this.size / 2;
    if (this.x < R || this.x > width - R) {
      this.xSpeed = -this.xSpeed;
    }
    //+50 to hit the top line 
    // eliminating the or part makes the ball disappear at the bottom
    if (this.y < R + 50){// || this.y > height - R) {
      this.ySpeed = -this.ySpeed;
    }
  }
    
    checkPaddle(){
    //distance between Paddle and Ball
    distPaddleBall = int(dist(this.x, this.y, mouseX, 445));
    //checking for the values commented out
    //print("Distance",distPaddleBall,"xPosRect", xPosRect, "Y",bally);
    if (distPaddleBall > 0 && distPaddleBall < 40 && this.y > 445) {
      this.ySpeed = -this.ySpeed;
    }
  }
  
  //Checking if it hit the ground
  checkBottom(){
    const R = this.size / 2;
    if(this.y > height - R){
      // change the game state
      print("OUT OF BOUNDS")
       
       }
    
  }
  

}


function setup() {
  createCanvas(500, 500);
  //frameRate(20);
  myCircle = new movingBall(10, 450);
  

    // function to draw the rectangles in the array
  myRectsArray = drawRects();
  
  //CHANGE THIS PART OF THE CODE!
  //counter for the FOR loop to change xPos and yPos
//   counter = 0;

//   //draw the rectangles to break calling class
//   // create 32 rectangles
//   for (let i = 0; i < 32; i++) {
//     if (counter === 8) {
//       counter = 0;
//       xPos = 75; // reset to 75
//       yPos += 25; // increment 25
//     }

//     // assign the color of rectangle
//     // integer index for colorsArray
//     randomIndex = int(random(0, 4));
//     //assigning color for rectangle
//     colorRect = colorsArray[randomIndex];
//     print(colorRect);
//     print(xPos, yPos);

//     //push into the array the rectangles
//     myRectsArray.push(new Rects(50, 25, colorRect, xPos, yPos));

//     xPos += 50;

//     counter += 1;
//     print(counter);
  //}
}


function drawRects() {
  rectMode(CENTER);
  const myRectsArray = [];
  // const rows = 4; 
  // const rectsPerRow = 8;
  // for (let row = 1; row < (rows+1); row++){
  //   for(let i = 1; i < (rectsPerRow+1); i++){
  //     // integer index for colorsArray
  //     randomIndex = int(random(0, 4));
  //     //assigning color for rectangle
  //     colorRect = colorsArray[randomIndex];
  //     print((xPos*i), (yPos*row));
  //     brick = new Rects(RECTWIDTH, RECTHEIGHT,colorRect, (xPos*i), (yPos*row));
  //     myRectsArray.push(brick);
  //   }
  // }
 //print(myRectsArray)
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
  
  
  
  // for (let i = 0; i < myRectsArray.length; i++) {
  //   myRectsArray[i].displayRect();
  // }

  
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





