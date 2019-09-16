class Complex {
  constructor(a, b) {
    this.re = a;
    this.im = b;
  }
  
  addc(c) {
    // adds two complex numbers
    this.re += c.re;
    this.im += c.im;
  }
  
  multc(c) {
    // multiplies two complex numbers
    const re = this.re * c.re - this.im * c.im;
    const im = this.re * c.im + this.im * c.re;
    return new Complex(re, im);
  }
  
  mults(x) {
    // multiplies a complex number with a scalar
    const re = x * this.re;
    const im = x * this.im;
    return new Complex(re,im);
  }
  
  conjc() {
    // creates the complex conjugate
    const re = this.re;
    const im = - this.im;
    return new Complex(re,im);
  }
  
  absc() {
    // the absolute (scalar) value of a complex number
    let a;
    const re = this.re;
    const im = this.im;
    a = sqrt((re)^2 + (im)^2);
    return a;
  }
    
}

// declaration of i
const i= new Complex(0,1);

// complex exponential
function expc(x) {
  let expcx = new Complex(cos(x),sin(x));
  return expcx;
}

function setup() {
  createCanvas(400, 400);
    a = new Complex(1,0);
    b = new Complex(0.5*sqrt(2),0.5*sqrt(2));
    xx=0;
    t=0;
    wdth = width/2;
    hght = height/2;
}


function calc(xx) {
  a = expc(xx);
  x = 100 * a.re;
  y = -100 * a.im;
}

function draw() {
  background(255);
  //noLoop(); 
  calc(t);
  translate(wdth,hght);
    stroke(200);
    line(-wdth,0,wdth,0);
    line(0,-hght,0,height);
    noFill();
    ellipse(0,0,200,200);
    stroke(0);
    line(0,0,x,y);
    ellipse(x,y,2,2);
  t=t+PI/12;
}
