/*
Autonomous agents: A boid-class for an agent with steering behaviour as described in Reynolds, Craig W. “Steering Behaviors For Autonomous Characters.” Proceedings of Game Developers Conference, 1999, 21.https://www.red3d.com/cwr/steer/gdc99/

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const d = 25; // defines the arriving perimeter and the distance to steer away from the edges.
let B;

function setup() {
  createCanvas(640, 360);
  B = new Boid(createVector(30,30),createVector(1,0),3,10,50,color(255,0,0));
}

function draw() {
  background(255);

  let mouse = createVector(constrain(mouseX,d,width-d), constrain(mouseY,d,height-d));

  noFill();
  stroke(0);
  strokeWeight(2);
  circle(mouse.x, mouse.y, 2*d); // the circle marks the arriving perimeter


  B.steer(mouse);
  B.run();
}

// Class declaration

class Boid {
  constructor(x, v, vmax, fmax,m , c) {
    this.x = x;
     this.v = v;
     this.m = m;
     this.r = max(m**0.33,2);
     this.c = c;
     this.a = createVector(0, 0);
     this.dead=false;
     this.vmax = vmax;
     this.fmax = fmax;
  }

  update() {
    this.v.add(this.a);
    this.v.limit(this.vmax);
    this.x.add(this.v);
    this.a.mult(0);
  }

   applyForce(force) {
    let f = p5.Vector.div(force, this.m);
    this.a.add(f);
  }

  steer(target) {
    var desired = p5.Vector.sub(target, this.x); // vector which points from position to the target
    let d = desired.mag(); // distance from target
    if (d < 200) { // if the boid comes close it should slow down, otherwise we limit its velocity to the maximum velocity vmax
      let m = map(d, 0, 100, 0, this.vmax);
      desired.setMag(m);
    } else {
      desired.setMag(this.vmax);
    }

    var steer = p5.Vector.sub(desired, this.v); //acceleration vector which changes the velocity
    steer.limit(this.fmax); // limit the acceleration to maximum steering force
    this.applyForce(steer);
  }

  reflectAtEdges() { // now we don't want the boid to reflect but to steer around if it comes close to the edge
   let desired = null;

   if (this.x.x > width - d/2) {
      desired = createVector(-this.vmax, this.v.y);
    } else if (this.x.x < d/2) {
      desired = createVector(this.vmax, this.v.y);
    }
    if (this.x.y > height - d/2) {
      desired = createVector(this.v.x, -this.vmax);
    } else if (this.x.y < d/2) {
      desired = createVector(this.v.x, this.vmax);
    }

    if (desired !== null) {
     desired.normalize();
     desired.mult(this.vmax);
      let steer = p5.Vector.sub(desired, this.v);
      steer.limit(this.fmax);
      this.applyForce(steer);
    }
  }

  display() {
    // Draw a triangle rotated in the direction of velocity
    let theta = this.v.heading() + PI / 2;
    fill(255,0,0);
    stroke(0);
    strokeWeight(1);
    push();
      translate(this.x.x, this.x.y);
      rotate(theta);
      beginShape();
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
      endShape(CLOSE);
    pop();
  }

  run() {
    this.update();
    this.display();
    this.reflectAtEdges();
  }
}
