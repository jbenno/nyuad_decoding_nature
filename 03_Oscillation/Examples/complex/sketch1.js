// to play arround with complex multiplication and its connection to rotation

function setup() {
  createCanvas(400, 400);
    a = new Complex(1,0);
    b = new Complex(0.999*cos(PI/12),1.1*sin(PI/12));
    xx=0;
    t=0;
    wdth = width/2;
    hght = height/2;
    units = 100;
}


function calc(xx) {
  //a = expc(xx);
  a = b.multc(xx)
  x = units * a.re;
  y = - units * a.im;
}

function draw() {
  //background(255);
  //noLoop(); 
  calc(a);
  translate(wdth,hght);
    stroke(200);
    line(-wdth,0,wdth,0);
    line(0,-hght,0,height);
    noFill();
    ellipse(0,0,2*units,2*units);
    stroke(0);
    line(0,0,x,y);
    ellipse(x,y,2,2);
    //t=t+PI/12;
}
