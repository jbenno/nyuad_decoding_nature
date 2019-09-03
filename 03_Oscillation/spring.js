//Simple harmonic oscillator: The spring moving according to Hook's law

class Spring{
  constructor() {
    this.mass=10;
    this.k=1;
    this.displacement=50;
    this.velocity=0;
    this.acceleration=0;
  }
    applyForce(d) {
    var f = d/this.mass;
    this.acceleration=this.acceleration+f;
  }
  
  update() {
    this.velocity=this.velocity-this.acceleration;
    this.displacement=this.displacement+this.velocity;
    this.acceleration=0;
  }
}

let spring;
let x=0;

function setup() {
  createCanvas(800, 400);
  spring=new Spring();
}

function draw() {
    spring.applyForce(spring.displacement);
    spring.update();
    let y=(height/2)+spring.displacement;
    
    fill(255, 127,100);
    ellipse(x, y, 5, 5);
    
  x=x+5; //horizontal movement to make the sine funktion visible

}
