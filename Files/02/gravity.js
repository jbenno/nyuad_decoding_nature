/*
Gravity: Constant acceleration in the vertical direction, linear initial movement in the horizontal direction. Elastic reflection on the walls.
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(640, 640);
  position = createVector(0, 20);
  velocity = createVector(4, 0);
  acceleration = createVector(0,0.2);
  
  r=50;
}

function draw() {
  background(255);
  
  velocity.add(acceleration);
  position.add(velocity);
  
  x=position.x
  y=position.y
  
  if (x>width-r) { // reflecting by reversing velocity
    position.x=width-r;
    velocity.x*=-1;
  } else if (x-r<0) {
    velocity.x*=-1;
    position.x=r;
  }
  if (y>height-r) {
    velocity.y*=-1;
    position.y=height-r;
  }

  stroke(0);
  strokeWeight(2);
  fill(200,0,0);
  circle(x, y, r);
}