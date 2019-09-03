//Gravity: Acceleration in the vertical direction, linear movement in the horizontal direction.

function setup() {
  createCanvas(800, 800);
  position = createVector(0, 0);
  velocity = createVector(4, 0);
  acceleration=createVector(0,0.2);

}

function draw() {
  background(255);
  
  velocity.add(acceleration);
  position.add(velocity);
  let x=position.x
  let y=position.y

  stroke(0);
  strokeWeight(2);
  fill(200,0,0);
  ellipse(x, y, 50, 50);
}
