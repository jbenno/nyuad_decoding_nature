// Lissajous curve

function setup() {
  createCanvas(600, 600);
}

var t=0;
var a=100;
var b=1;
var c=0;
var d=100;
var e=2;

function draw() {
  translate(300,300);
  
  x=a*sin(b*t+c);
  y=d*sin(e*t);
  
  fill(255,127,100);
  ellipse(x, y, 1, 1);
  
  t=t+1;
  
}
