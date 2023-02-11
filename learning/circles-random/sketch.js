let r,g,b,a,x,y,rad;

function setup(){
     createCanvas(windowWidth, windowHeight);
     background(0);
}

function draw(){
    noStroke();
    r = random(100,255);
    g = random(0,255);
    b = random(0,255);
    a = random(50,100);
    fill(r,g,b,a);
    x = random(0,width);
    y = random(0,height);

    rad = random(20,50);
    circle(x,y,rad);
}