
// runs once at the beginning
function setup() {
  createCanvas(700, 600);
  background(245);
  
  //variables for the FOR loops
  let xSize = 700
  let ySize = 50
  
  //horizontal lines > yCoor changes for where the rectangle starts
  for(yCoor = 0; yCoor <= 600; yCoor += 100 ){
    
    //call function to draw the rectangles with random colors
    designBackground(0, yCoor, xSize, 200, random(155,255), random(155,255), random(155,255),100);  
    xSize -= 50;
    // vertical lines
    for(xCoor = 25; xCoor <= 700; xCoor +=100){
      // condition to break the loop
      if (ySize === 750){
          break;
      }else{
            //print(ySize); // this was to debug an issue I was having in the drawing
            designBackground(xCoor, 0, 50, ySize, random(55,155), random(55,155), random(55,155),50); 
            ySize += 100;
          } // else statement
      
    } // second for loop ending
    
  } // first for loop ending
  
  
  // calling the objects to create
  //Circles, Rectangles and Triangles
  // I can decide how many times I run the code for example 100 times
  for(times = 1;times <= 30 ; times++){
    // calling the function to create a circle, rectangle and triangle each iteration
    circlesFunction(random(10,200), random(400,600), random(10,100),random(2,15));
    rectanglesFunction(random(300,500), random(200,400), random(25,75), random(25,75), random(2,15));
     trianglesFunction(random(500, 600), random(100, 400), random(610,660), random(10, 100), random(670, 690), random(50,200), random(2,10));
    
  } // for loop closing bracket 

} 

//input: 8 numbers, x and y coordinates, width, height, RGBA
//output: produces rectangles in horizontal and vertical depending on the input
function designBackground(xCoor, yCoor, wid, hgt, r, g, b, a) {
    
  // settings for the rectangles
  noStroke();
  fill(r,g,b,a);
  rect(xCoor,yCoor, wid, hgt);
  
}

//input: 4 numbers, the x and y coordinates, the size and the stroke weight
//output: produces circles with random blue related colors
function circlesFunction(xCoor, yCoor, siz, sizStroke){
  
    noFill();
    stroke(random(0,200),random(0,255),random(200,255));
    strokeWeight(sizStroke);
    ellipse(xCoor, yCoor, siz);
  
}


//input: 5 numbers, x and y coordinates , width and height, stroke weight
//output: produces rectangles with random green related colors
function rectanglesFunction(xCoor, yCoor, wid, hgt, sizStroke){
    noFill();
    stroke(random(0,255),random(200,255),random(0,200));
    strokeWeight(sizStroke);
    rectMode(CENTER);
    rect(xCoor, yCoor, wid, hgt);
}


//input: 7 numbers, 6 for each vertex of the triangle and stroke weight
//output: produces triangles with random red related colors
function trianglesFunction(x1,y1,x2,y2,x3,y3, sizStroke){
    noFill();
    stroke(random(200,255), random(0,255), random(0,200));
    strokeWeight(sizStroke);
    triangle(x1,y2,x2,y2,x3,y3);
  
}

