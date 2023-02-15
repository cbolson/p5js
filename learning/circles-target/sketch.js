const rad = 50;
let total, dim, maxCircles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // calculate max number of circles that will fit in the canvas (minus a small margin)
  maxCircles = float((height - 100) / rad);
  // we are drawing the circles from the largest to smallest to that they don't get covered up
  // set total to max then count down in loop
  total = maxCircles;
  // set diameter (it is actually still the radius) of first circle to max possible size
  dim = maxCircles * rad;

  // slow it down
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
