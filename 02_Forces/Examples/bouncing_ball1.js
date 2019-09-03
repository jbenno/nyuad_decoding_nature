//Gravity: Acceleration in the vertical direction, linear movement in the horizontal direction. Elastic reflection on the walls.

function setup() {
  createCanvas(640, 640);
  position = createVector(0, 20);
  velocity = createVector(4, 0);
  acceleration=createVector(0,0.2);
}

function draw() {
  background(255);
  let ell=[50,200,0,0];
  
  velocity.add(acceleration);
  position.add(velocity);
  let x=position.x
  let y=position.y
  let erad=ell[0]/2;
  
  if (x>width-erad) {
    position.x=width-erad;
    velocity.x*=-1;
  } else if (x-erad<0) {
    velocity.x*=-1;
    position.x=erad;
  }
  if (y>height-erad) {
    velocity.y*=-1;
    position.y=height-erad;
  }

  stroke(0);
  strokeWeight(2);
  fill(200,0,0);
  ellipse(x, y, 50, 50);
}
