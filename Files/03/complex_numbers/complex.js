/*
Complex numbers and functions of complex numbers.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

class Complex {
  constructor(a, b) {
    this.re = a;
    this.im = b;
  }
  
  addc(c) {
    // adds two complex numbers
    const re = this.re + c.re;
    const im = this.im + c.im;
    return new Complex(re, im);
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
    this.im = - this.im;
 
  }
  
  absc(c) {
    // the absolute (scalar) value of a complex number
    let a;
    const re = this.re;
    const im = this.im;
    a = sqrt((re)**2 + (im)**2);
    return a;
  }

}

 function recc(c) { 
    //turns a complex number into its multiplicative reciprocal: recc(z)=1/z
    let r = c.re;
    let i = c.im;

    this.re = r/(r**2 + i**2);
    this.im = i/(r**2 + i**2);
   return new Complex(re, im);
 }


function argc(c) { //returns the angle of the complex number
      let theta = 0;
      const re = c.re;
      const im = c.im;    
      const ab = c.absc();
    
      if (im !=0 || re > 0) {
        theta = 2* atan(im/(ab+re));
      } else if (re < 0 && im ==0) {
        theta = PI;
        } else {
        theta = 0;
      }
      if (theta >= 0) {
          return theta;
        } else {
          theta = 2*PI+theta;
          return theta;
        }
      
    }

// declaration of i
const i= new Complex(0,1);

// complex exponential
function expc(x) {
  let expcx = new Complex(cos(x),sin(x));
  return expcx;
}