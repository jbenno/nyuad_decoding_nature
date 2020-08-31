/*
"Compass needles" following the magnetic mouse.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const  k=20;
const  e=15;
const  xu=8;
const  yu=8;

function setup() {
  createCanvas(400, 400);
  stepx=width/xu;
  stepy=height/yu;
}

function draw() {
  background(220);
  
  for (i=1;i<xu;i++) {
    for (j=1;j<yu;j++) {
     displayTriangle(i*stepx,j*stepy,e);
    }
  }
}

function displayTriangle(x,y,e) {
  xV=createVector(x,y);
  a=createVector(mouseX, mouseY);
  b=a.sub(xV);
  theta=b.heading();
  push();
  translate(x,y);
  rotate(theta);
  triangle(0 +e,0,0,0 +e/2,0,0-e/2);
  pop();
}
