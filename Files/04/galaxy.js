/*
Formation of a solar system or a galaxy. The celestial bodies all attract each other and merge when they crash into each other.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let ps, sun;
const G=1;
const sc=1/2;

function setup() {
  createCanvas(700, 700);
  orig=createVector(0,0);
  ps = new SolarSystem();

  ps.addSun(10000);
   for (i=0;i<200;i++) {
    ps.addPlanet();
  }
}

function draw() {
  background(0);
  translate(width/2,height/2);

  ps.run();
}

// Class declaration

class Planet {
  constructor(x, v, m) {
    this.m = m;
    this.x = x.copy();
    this.v = v.copy();
    this.a = createVector(0, 0);
    this.G = G;
    this.c=color(255,0,0);
    this.r=5%m**0.33;
    this.dead=false;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.m);
    this.a.add(f);
  }

   attract(planet) {
    let FGrav = p5.Vector.sub(this.x, planet.x);
    let r = FGrav.magSq();
    let strength;
     if (r==0) {r=0.01}
     strength = (this.G * this.m * planet.m) / r;
    FGrav.setMag(strength);
    return FGrav;
   }

  update() {
    if (this.m>100) {this.c=color(255,200,0)}
    this.v.add(this.a);
    this.x.add(this.v);
    this.a.mult(0);
  }

  display() {
    noStroke();
    fill(this.c);
    circle(sc*this.x.x, sc*this.x.y, this.m**0.33);
  }

}

class SolarSystem {
  constructor() {
    this.planets = [];
  }

  addPlanet() {
    let x=createVector(random(-width/2,width/2)/sc, random(-height/2,height/2)/sc);
    let v=createVector(0,0);
    let m=random(0.1,10);
    this.planets.push(new Planet(x, v, m));
  }

   addSun(m) {
    let x=createVector(0, 0);
    let v=createVector(0, 0);
    this.planets.push(new Planet(x, v, m));
  }

  run() {
    let m=0;
    for (var i in this.planets) {
      let p1 = this.planets[i];
           if (p1.dead) {
        this.planets.splice(i,1);
        continue;
      }

      let grav = createVector(0,0);
        for (var j in this.planets) {
          if (j!==i) {
               let p2=this.planets[j];
               let d=p1.x.dist(p2.x);
                if (d<(p1.r+p2.r)/2) {
                  if (p1.m >= p2.m) {
                    p1.r=(p1.r+p2.r)**0.33;
                    p1.v=p5.Vector.add(p5.Vector.mult(p1.v,p1.m),p5.Vector.mult(p2.v,p2.m)).div(p1.m+p2.m);
                    p1.m+=p2.m;
                    p2.dead=true;
                  }
                  if (p2.m > p1.m) {
                    p2.r=(p1.r+p2.r)**0.33;
                    p2.v=p5.Vector.add(p5.Vector.mult(p1.v,p1.m),p5.Vector.mult(p2.v,p2.m)).div(p1.m+p2.m);
                    p2.m+=p1.m;
                    p1.dead=true;
                    continue;
                  }
               } else {
                   grav=grav.add(p2.attract(p1));
               }
          }
        }
    p1.applyForce(grav);
    p1.update();
    p1.display();
    m+=p1.m;
  }
    console.log(m/this.planets.length);
  }
}
