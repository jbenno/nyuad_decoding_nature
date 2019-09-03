//Newton's first law: movement without any forces

function setup() {
  createCanvas(640, 360);
  position = createVector(0, height/2);
  velocity = createVector(1, 0);

}

function draw() {
  background(255);
  
  position.add(velocity);
  let x=position.x
  let y=position.y

  stroke(0);
  strokeWeight(2);
  fill(200,0,0);
  ellipse(x, y, 50, 50);
}
