// array of strings
let table = [];

function preLoad() {
  table = loadTable("EmiratesPalace.csv", "csv", "header"); // preload function to load the csv data into the array
}
function setup() {
  createCanvas(500, 400);
  background(235);

 for (let r = 0; r < table.getRowCount(); r++) {
    const name = table.getString(r, "COUNTRY");
    
 }
}

function draw() {
  background(220);
}


