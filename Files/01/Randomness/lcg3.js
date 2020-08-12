/*
Pseudo-random numbers: Linear Congruential Generator.
The script plots the values of the pseudo random number generator (PSRNG) making use of the finite structure visualizing it like a clock.
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const  m = 11; //defining the parameters.
const  a = 6;
const  c = 1;
const  s = 0;

let seed=s;  // initializing seed with the seed parameter s

const xu=-1;  // lower boundary for the coordinate system
const xo=m;  // upper boundary; doesn't make sense to go any further than the modulus
const defSet=xo-xu;  // the definiton set
const zero=0-xu;  // positionion the origin

function setup() {
  createCanvas(400, 400);

  cx=Math.floor(width/2);
  cy=Math.floor(height/2);
  
  ang=2*PI/m;
  d=min(height,width)-100;
  r=d/2;
  
  x=r*cos(ang*seed);
  y=r*sin(ang*seed);
}

function rnd(xx) { //the pseudo random number generator
  out=(a*xx + c) % m;
  return out;
}

function draw() {
  background(255,50); // old results fade away by setting the backgroud half transparent
  frameRate(5); // slowing down
  translate(cx,cy);
  drawClock();
  
  x0=x;
  y0=y;
  console.log(seed);
  x=r*cos(ang*seed); // transforming into polar coordinates
  y=r*sin(ang*seed);
  fill(255,0,0);
  circle(x,y,20); // plotting the results and connecting with the previous results
  line(x0,y0,x,y);
  seed=rnd(seed); // feeding back into the the function
}

function drawClock() {
  noFill();
  circle(0,0,d);
  
  fill(255,100,100);
  textSize(20);
  textAlign(CENTER, CENTER);
  for (i=0;i<m;i++) {
    xx=(r+30)*cos(ang*i);
    yy=(r+30)*sin(ang*i);
  text(i,xx,yy);
  }
}