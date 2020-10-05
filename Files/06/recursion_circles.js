/*
Recursion: Calling the function to draw a circle within itself, halfing the radius and trasposing by half the radius.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(700,500);
}

function draw() {
  background(255);
  drawCircle(width/2,height/2,400);
}

function drawCircle(x,y,r) {
  stroke(0);
  noFill();
  circle(x, y, r);
  if(r > 2) {
    drawCircle(x + r/2, y, r/2);
    drawCircle(x - r/2, y, r/2);
  }
}
