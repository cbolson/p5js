let r = 20;

function setup() {
  createCanvas(400, 400);
  background(255, 100, 0);
}

function draw() {
  fill(255,50);
  noStroke();
  //triangle(mouseX, mouseY, 200, 150, 150, 50);
  circle(mouseX, mouseY, r);
  // noLoop();
}
function mousePressed(){
  background(random(1,255), 100, 100 );
  r = random(20,100);
}