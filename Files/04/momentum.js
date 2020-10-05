/*
Momentum and elastic collistion: Particles move and collide. Uses a particle system to run through the particles.

Uses a class to define the Newtonian particle.
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let B;
let x,v,g;
const heat=5;

function setup() {
  createCanvas(640, 640);

  B = new PS();
  g = createVector(0,0.2); //force

  for (let i=0; i<20;i++) {
  x = createVector(random(0,width),random(0,height)); // initial position
  v = createVector(random(-heat,heat),random(-heat,heat)); // inital velocity
  m=random(1,10); // mass
  c=color(random(0,255),random(0,255),random(0,255));
    B.addParticle(x, v, m, c)
  }

}

function draw() {
  background(255);
  B.run();
}

class Particle {
  constructor(x, v, m, c) {
    this.x = x;
     this.v = v;
     this.m = m;
     this.r = 25*m**0.33;
     this.c = c;
     this.a = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.m);
    this.a.add(f);
  }

  update() {
    this.v.add(this.a); // velocity gets changed by acceleration
    this.x.add(this.v); // position gets changed by velocity
    this.a.mult(0); // acceleration has to be reset (if we want dynamic acceleration we have to introduce an additional quantity, called the jerk.
  }

  display() {
    noStroke();
    fill(this.c);
    circle(this.x.x, this.x.y, this.r);
  }

  reflectAtEdges() {
    if (this.x.x > width - this.r) {
      this.x.x = width - this.r;
      this.v.x *= -1;
    } else if (this.x.x < this.r) {
      this.x.x = this.r;
      this.v.x *= -1;
    }
    if (this.x.y > height - this.r) {
      this.x.y = height - this.r;
      this.v.y *= -1;
    } else if (this.x.y < this.r) {
      this.y = this.r;
      this.v.y *= -1;
    }
  }

}

class PS {
  constructor() {
    this.particles = [];
  }

  addParticle(x, v, m, c) {
   this.particles.push(new Particle(x, v, m, c));
  }

  run() {
    for(let i in this.particles) {
      let p1 = this.particles[i];
      for (let j in this.particles) {
        if (j!==i) {
          let p2=this.particles[j];
          let s=p5.Vector.sub(p1.x, p2.x);
          let d=s.mag();
          let r=(p1.r + p2.r)/2

          if (d <=r) {
          let v1=p5.Vector.sub(p1.v,p5.Vector.sub(p1.x,p2.x).mult((2*p2.m/(p1.m+p2.m))*(p5.Vector.dot(p5.Vector.sub(p1.v,p2.v),p5.Vector.sub(p1.x,p2.x))/(d**2))));

          let v2=p5.Vector.sub(p2.v,p5.Vector.sub(p2.x,p1.x).mult((2*p1.m/(p1.m+p2.m))*(p5.Vector.dot(p5.Vector.sub(p2.v,p1.v),p5.Vector.sub(p2.x,p1.x))/(d**2))));

          p1.v=v1;
          p2.v=v2;
          p1.x.add(s.setMag(r-d));
          p2.x.add(s.setMag(d-r));
          }

        }
      }
      //p1.applyForce(g)
      p1.update();
      p1.display();
      p1.reflectAtEdges();
    }
  }

}
