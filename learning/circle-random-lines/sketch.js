let rad = 30;
let circleStartX = -(rad / 2);
let circleStartY = rad / 2;
let circleX = circleStartX;
let circleY = circleStartY;
let circleClr = 1;
let r, g, b, a;
function setup() {
  createCanvas(400, 400);
  background(0);
  r = random(0, 255);
  g = random(100, 200);
  b = random(100);
  //a = random(200, 255); // a is a random number between 200 - 255
}

function draw() {
  noStroke();

  circleX = circleX + 5;

  if (circleX >= width) {
    circleX = 0;
    circleY = circleY + rad;
    randomRGB();
  }

  if (circleY >= height) {
    circleX = circleStartX;
    circleY = circleStartY + rad / 2;
  }
  fill(r, g, b, a);
  circle(circleX, circleY, rad);
}
function mousePressed() {
  circleX = 0;
}

function randomRGB() {
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(100, 255); // NOTE - alpha is 0 to 255
}
