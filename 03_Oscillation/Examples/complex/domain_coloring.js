// see https://en.wikipedia.org/wiki/Domain_coloring

function setup() {
  createCanvas(800, 800);
    a = new Complex(1,1);
    b = new Complex(0.5*sqrt(2),0.5*sqrt(2));
    t=0;
    units = 100;
    wdth = width/2;
    hght = height/2;
     z = new Complex(0,0);
}


function calc(xx) {
  //aa = xx;
  aa = xx.multc(xx);
  aa = aa.addc(b);
  //aa = xx.multc(xx);
  //a = a.multc(xx)
  //x = units * a.re;
  //y = - units * a.im;
  return aa;
}

function draw() {
  //background(255);
  noLoop(); 
  // noprotect
  translate(wdth,hght);
 // loop through all the points of the canvas
    for (imG = -hght; imG < hght; imG = imG + 1) {
      for (reaL= -wdth; reaL < wdth; reaL = reaL + 1) {
        // call the function and calculate for each point
        z = new Complex(reaL/units, -imG/units);
        z=calc(z);
       // convert the result into a color: origin is black; argc calculates the angle theta of the result complex number if you think of it as a vector (re,im). This delivers the hue H. The brightness L is an exponentially decreasing function of the absolute magnitude of the result
          H = 360*argc(z)/(2*PI);
          L = (1 - 0.5**(z.absc()))*100;
          S = 100;
        colorMode(HSL);
        coL = color(H,S,L);
        stroke(coL);
        point(reaL,imG);
     }
    }

  
}
