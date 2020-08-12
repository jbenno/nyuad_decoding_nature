/*
Chaos: Logistic function.
The script plots parabola y=ax(1-x) and demonstrates how the algorithm feeds back its results. The point P where y(x)=x (i.e. the intersection with the 45° line) is an attractor for values of a<2.9. When we increase to 3 there are two attractors, further increase doubles the attractors to 4, 8, until the series becomes totally chaotic at values above 3.55.
See also https://editor.p5js.org/jbenno/sketches/DZGZ6PZVM and https://editor.p5js.org/jbenno/sketches/mgotVMiXn

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const  a=3.5; //defining the parameters.
const  t=0.3

const  xu=-0.5; // lower boundary for the coordinate system
const  xo=1.5; // upper boundary; doesn't make sense to go any further than the modulus
const  defSet=xo-xu; // the definiton set
const  zero=0-xu; // positioning the origin

const  dx=0.01; // the increment for drawing the function

let y=0;

function setup() {
  createCanvas(1500, 1500);
  hght=height*0.5;
  e=width/defSet; // e is the number of pixels for the unit, i.e. an interval for length 1
   
  lBound=zero*e; // scaling the lower and upper boundaries
  rBound=xo*e; 
  
  translate(lBound,hght); // translating the coordinate system
  drawSetup();  // drawing coordinate lines and plotting the function
  
}

function logistic(A,xx) { // the logistic function
  yy=A*xx*(1-xx);
  return yy;
}

function draw() {// to avoid the phasing-in we start iterating 2000 times and don't visualize the results. After this inital phase we draw a horizontal line from the point on the function graph to the 45° line and a vertical line back onto the function graph to get the next point. The lines show how values jump between the attractors. Additionally we draw the x-values of the attractors on the x-axis. For a>3.6 these give a chaotic sequence.
  
  noLoop(); // we want to control the loop ourselves
  translate(lBound,hght);
  
    x=t;
    y=0;
  for (i=0;i<2000;i++) { // the first 2000 iterations which we don't visualize
    y=logistic(a,x);
    x=y; // we just feed the result y(x) back into the function
  }
    for (i=2000;i<5000;i++) { // the results of these iterations are visualized
    y0=y; // we save the y of the past iteration so that we can draw a line to the next
    y=logistic(a,x);
      stroke(0,100,0); // drawing the line from the past to the 45° line and on to the next
      line(e*x,-10,e*x,10);
      line(x*e,-y0*e,x*e,-y*e);
      line(x*e,-y*e,y*e,-y*e);
    x=y;
  }
}

function drawSetup() {
  stroke(100);
  line(-lBound,0,rBound,0);
  line(0,-hght,0,hght);
  line(-lBound,lBound,rBound,-rBound);
  if (xu<1 && xo>1) {
    line(e,-10,e,10);
    textSize(25);
    text(1,e+10,25);
    text(t,t*e,25);
    text("A = "+a,1.2*e,-0.7*e);
  }
  
  for(x=xu;x<xo;x) {
    x0=x;
    y0=y;
    x=x+dx;
    y=logistic(a,x);
    stroke(200,0,0);
    line(e*x0,-e*y0,e*x,-e*y);
    
    xP=(a-1)/a
    circle (xP*e,-xP*e,5);
    text("P",xP*e,-xP*e-15);
  }
}