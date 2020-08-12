class Pendulum{
  constructor(pivot, r, theta, b, c) {
    this.pivot=pivot;
    this.x=createVector();
    this.r=r;
    this.theta=theta;
    this.b=b;
    this.c=c;
    this.a=0;
    this.omega=0;
  }
  
 applyForce(force) {
    this.a = (-1 * force / this.r) * sin(this.theta);
  }
  
  update() {
    this.omega+=this.a;
    this.theta+=this.omega; 
    
    this.x.set(this.r * sin(this.theta), this.r * cos(this.theta)); 
    this.x.add(this.pivot);
    
  }
  
   display() {
    noStroke();
    fill(this.c);
    circle(this.x.x, this.x.y, this.b);
  }

}