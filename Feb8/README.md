## Documentation 
---

---
## Notes of processes by dates 
---

Feb 5:
This project was harder to begin with as I was not sure how to approach it. Nonetheless after reviewing some videos from The Coding Train, specifically: 
  - [2.4: random() Function - p5.js Tutorial](https://www.youtube.com/watch?v=POn4cZ0jL-o&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=11)
  - [4.2: Nested Loops - p5.js Tutorial](https://www.youtube.com/watch?v=1c1_TMdf8b8&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=20)
  - [5.2: Function Parameters and Arguments - p5.js Tutorial](https://www.youtube.com/watch?v=zkc417YapfE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=22) 

it gave me inspiration for the idea I had in mind. I was planning to do a series of shapes from ellipses, squares and triangles from one corner to another, at the end of the opposite corner I was thinking to do something with lines. Thinking about using the random() function will prove to be important for changing the color, the size and the stroke weight. Below it is a sketch I did on the iPad

![sketch1](sketch1.jpg)

---

Feb 6: 

Even though my plan still remains with only using ellipses, squares and triangles, I wanted to share a code example that I found for polygons. In a different variation of my artwork I would of use this code, but I feel that it would require more time to understand fully this function. Here is share the link to the code and the code itself.

[Regular Polygon](https://p5js.org/examples/form-regular-polygon.html)

```` 
// CODE EXAMPLE FROM https://p5js.org/examples/form-regular-polygon.html
// Function to do regular polygons rotating
function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(102);

  push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 200.0);
  polygon(0, 0, 82, 3);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  polygon(0, 0, 80, 20);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  polygon(0, 0, 70, 7);
  pop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
````


