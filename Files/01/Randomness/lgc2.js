/*
Pseudo-random numbers: Linear Congruential Generator.
The script plots the function of the pseudo random number generator (PSRNG) and demonstrates how the algorithm feeds back its results into the PSRNG.
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const  m = 11; //defining the parameters.
const  a = 6;
const  c = 1;
const  s = 0;

let x=s;  // initializing x with the seed parameter s

const xu=-1;  // lower boundary for the coordinate system
const xo=m;  // upper boundary; doesn't make sense to go any further than the modulus
const defSet=xo-xu;  // the definiton set
const zero=0-xu;  // positionion the origin

const dx=0.1;  // the increment for drawing the function

let x0,y0 = 0;  // x0 and y0 are the variables to store the coordinates of the last iterations

function setup() {
  createCanvas(900, 900);
  
  hght=height-30;
  e=width/defSet; // e is the number of pixels for the unit, i.e. an interval for length 1
  
  lBound=zero*e; // scaling the lower and upper boundaries
  rBound=xo*e;
  
  translate(lBound,hght);  // translating the coordinate system
  drawSetup();  // drawing coordinate lines and plotting the function
}

function rnd(xx) { //the pseudo random number generator
  out=(a*xx + c) % m;
  return out;
}

function draw() { // we draw a horizontal line from a point on the function graph to the 45° line and a vertical line back onto the function graph to get the next point. The x-values of the points are our pseudo random numbers.
  frameRate(1); // slowing down so one can see the feedback
  translate(lBound,hght); // setting the origin
    y0=y;
    y=rnd(x);
    stroke(0,100,0);
    strokeWeight(4);
    line(x*e,-y*e,y*e,-y*e);
    line(x*e,-y0*e,x*e,-y*e);
    x=y;
  
}

function drawSetup() {
  
  stroke(100);
  line(-lBound,0,rBound,0);
  line(0,hght,0,-hght);
  line(-lBound,lBound,rBound,-rBound);
  for (i=0;i<xo;i++) {
      line(i*e,-10,i*e,10);
      text(i,i*e+5,15);
  }
  
  for (x=0;x<xo;x) { // drawing the function graph - not very economical for a linear function ...
    y=rnd(x);
    stroke(200,0,0)
    line(x0*e,-y0*e,x*e,-y*e);
    x0=x;
    y0=y;
    x=x+dx;
  }
  x=s;
}