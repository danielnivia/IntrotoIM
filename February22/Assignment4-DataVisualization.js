// array of strings
let table;
let yPos = 10; // variable to change x position

function preload() {
  table = loadTable("EmiratesPalace.csv", "csv", "header"); // preload function to load the csv data into the array
}

function setup() {
  createCanvas(800, 800);
  background(235);

  textAlign(LEFT, TOP); // align at the left of the word based on the top height
//for loop to go around each element in the file
  for (let r = 0; r < table.getRowCount(); r++) {
    const name = table.getString(r, "COUNTRY"); // assign to variable name 
    const percentage = table.getString(r, "percentage"); // assign variable to percentage
    const rnColor = table.getString(r, "RNs"); // column RNs (I don't know what stands for but will serve to determine the color density) there is a correlation between this number and percentage
    print(name);
    const sizeX = map(percentage, 0, 0.2, 0, 500); // map the values of percentage for determining the size of the rectangle
    const sizeY = 10; // constant size for width
    const fillColor = map(rnColor, 0, 15200, 0, 255); // map the colors from these values
    const xPos = 20; // initial position for the rectangles to be drawn
    fill(fillColor, 50, 50);
    rect(xPos, yPos, sizeX, sizeY); // yPos is a global variable that changes every loop
    fill(0); // return color to black for text
    text(name, sizeX + 30, yPos);
    yPos += 10; // increment the variable
  }
}
