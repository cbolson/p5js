let total = 0;
const rad = 50;
let dim;

let maxCircles;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  maxCircles = float((height - 100) / rad);
  console.log("max: ", maxCircles);

  total = maxCircles;
  dim = maxCircles * rad;
  frameRate(12);
}

function draw() {
  translate(windowWidth / 2, windowHeight / 2);

  noStroke();

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  //a = random(50, 100);
  a = 123;
  fill(r, g, b, a);
  circle(0, 0, dim);

  // count down
  total--;

  // define new radius
  dim = dim - rad;

  // stop when we reach the calculated max for window size
  if (total <= 0) {
    noLoop();
    // total = maxCircles;
    //dim = maxCircles * rad;
  }
  //noLoop();
  // this will draw them all in one go (don't forget the noLoop)
  // for (let i = 100; i > 0; i -= 20) {
  //    r = random(0, 255);
  //    g = random(0, 255);
  //    b = random(0, 255);
  //    a = random(50, 100);
  //    fill(r, g, 255, a);
  //   circle(0, 0, i * 10);
  // }
  //noLoop();
}
