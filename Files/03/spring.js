class Spring{
  constructor(m, k, d) {
    this.m=m;
    this.k=k;
    this.d=d;
    this.v=0;
    this.a=0;
  }
  
 applyForce(d) { // Hooke's law: F=-kd
    let f = d/(this.k * this.m);
    this.a = this.a + f;
  }
  
  update() {
    this.v=this.v-this.a;
    this.d=this.d+this.v;
    this.a=0;
  } 

}