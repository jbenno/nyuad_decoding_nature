// Aristoteles' law of motion where force shows in velocity rather than in acceleration

class Mover {
  constructor() {
    this.mass = 1;
    this.position = createVector(50, 50);
    this.velocity = createVector(0, 0);
  }

  applyForce(force) {
    var f = p5.Vector.div(force, this.mass);
    this.velocity.add(f);
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.mult(0.99);
  }

  display() {
    stroke(200,0,0);
    strokeWeight(1);
    ellipse(this.position.x, this.position.y,30,30);
  }

  checkEdges() {
    if (this.position.x > width-15) {
      this.position.x = width-15;
      this.velocity.x *= -1;
    } else if (this.position.x < 15) {
      this.velocity.x *= -1;
      this.position.x = 15;
    }
    if (this.position.y > height-15) {
      this.velocity.y *= -1;
      this.position.y = height-15;
    }
  }

}

function setup() {
  createCanvas(600, 600);
  mover = new Mover();
}

function draw() {
  background(255);

  let gravity = createVector(0, 0.1);
  mover.applyForce(gravity);

  mover.update();
  mover.display();
  mover.checkEdges();
}
