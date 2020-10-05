/*
Autonomous agents: A boid-class for an agent with steering following a flowfield as described in Reynolds, Craig W. “Steering Behaviors For Autonomous Characters.” Proceedings of Game Developers Conference, 1999, 21.https://www.red3d.com/cwr/steer/gdc99/

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const d = 0; // defines the arriving perimeter and the distance to steer away from the edges.
const res=20;
let boids;

function setup() {
  createCanvas(640, 360);

  col=width/res;
  rws=height/res;
  vf=[];
  boids=[];

  noiseSeed(random(10000));
   let xoff = 0;
      let yoff = 0;
  for (let i=0;i<rws;i++) {
    vf[i]=new Array(col);
    for (let j=0;j<col;j++) {
      let angle = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
     vf[i][j]=p5.Vector.fromAngle(angle).mult(20);
      yoff += 0.1;
      xoff += 0.1;
    }
  }
  for (let i = 0; i < 120; i++) {
    boids.push(new Boid(createVector(random(width), random(0,height)),createVector(-1,0), random(2, 5), random(0.1, 0.5), 50,color(255,0,0)));
  }
}

function draw() {
  background(255);

  for (let i = 0; i < boids.length; i++) {
    mouse = lookup(boids[i].x);
    boids[i].steer(mouse);
    boids[i].run();
  }

  for (let i=0;i<rws;i++) {
    for (let j=0;j<col;j++) {
      x=createVector((j+0.5)*res,(i+0.5)*res);
      drawVector(x,vf[i][j],color(100));
    }
   }
}

function lookup(lookup) {
  let column = constrain(floor(lookup.x /res), 0, col -1);
  let row = constrain(floor(lookup.y /res), 0, rws -1);
  return vf[row][column].copy();
}

function drawVector(o,v,c) { // a small function to draw a vector v as an arroww. The input vector o is the starting point - can be the origin, however sometimes we want to start drawing the vector at the tip of another one.

  const ang=PI/6; // angle for arrowhead which we draw by rotating the vector v a bit clockwise and counter clockwise.
  let cl,cr;

  cl=createVector(v.x*cos(ang)+v.y*sin(ang),-v.x*sin(ang)+v.y*cos(ang)).setMag(10);
  cl=createVector(v.x-cl.x, v.y-cl.y);
  cr=createVector(v.x*cos(-ang)+v.y*sin(-ang),-v.x*sin(-ang)+v.y*cos(-ang)).setMag(10);
  cr=createVector(v.x-cr.x, v.y-cr.y);
  stroke(c);
  line(o.x,o.y,o.x+v.x,o.y+v.y);
  line(o.x+v.x,o.y+v.y,o.x+cl.x,o.y+cl.y);
  line(o.x+v.x,o.y+v.y,o.x+cr.x,o.y+cr.y);
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
    var desired = target // p5.Vector.sub(target, this.x); // we changed the desired to be the vector of the flow field directly
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

/*  reflectAtEdges() { // now we don't want the boid to reflect but to steer around if it comes close to the edge
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
  }*/
  reflectAtEdges() {//we change the geometry of the canvas from a plane with edges to a torus where the upper edge and the lower edge get wrapped around and glued together, same for left and right
    if (this.x.x < -this.r) this.x.x = width + this.r;
    if (this.x.y < -this.r) this.x.y = height + this.r;
    if (this.x.x > width + this.r) this.x.x = -this.r;
    if (this.x.y > height + this.r) this.x.y = -this.r;
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
