class Planet {
  constructor(x1, x2, v1, v2, m) {
    this.m = m;
    this.x = createVector(x1, x2);
    this.v = createVector(v1, v2);
    this.a = createVector(0, 0);
  }
  
  applyForce(force) {
    let f = p5.Vector.div(force, this.m);
    this.a.add(f);
  }
  
  update() {
    this.v.add(this.a);
    this.x.add(this.v);
    this.a.mult(0);
  }
  
}

class Sun {
  constructor(x1,x2,m) {
    this.x = createVector(x1, x2);
    this.m = m;
    this.G = 1;
  }

  attract(planet) {
    let FGrav = p5.Vector.sub(this.x, planet.x);
    let r = FGrav.mag();

    let strength = (this.G * this.m * planet.m) / (r**2);
    FGrav.setMag(strength);
    return FGrav;
  }
}

function displayPlanet(planet, color) {
    let p=planet;
    noStroke();
    fill(color)
    circle(p.x.x, p.x.y, 10*log(p.m));
  }


