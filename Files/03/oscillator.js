class Oscillator{
  constructor(x, v, m, k, r, c) {
    this.x=x;
    this.v=v;
    this.m=m;
    this.k=k;
    this.r=r;
    this.c=c;
    this.a= createVector(0, 0);
  }
  
 applyForce(d) {
    let f = p5.Vector.div(d, this.k * this.m);
    this.a.add(f);
  }
  
  update() {
    this.v.sub(this.a); 
    this.x.add(this.v); 
    this.a.mult(0); 
  }
  
   display() {
    noStroke();
    fill(this.c);
    circle(this.x.x, this.x.y, this.r);
  }

}