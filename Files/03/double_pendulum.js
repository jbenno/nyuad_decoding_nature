/* Oscillation: A Double Pendulum is a pendulum with another pendulum attached to its end. This physical system displays remarkably chaotic behaviour. For this demo we don't use Newton's equations but work with the conservation of momentum and the Lagrangian because this directly gives us the equations of motions to calculate the state of the system.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const g = 10; // the physical constants

const m1 = 100; // mass
const m2 = 100;

const l1=200; // length of the pendulums
const l2=200;

const dt=0.4; // speed of updates

const c='#ff0066';


function setup() {
  createCanvas(800, 800);
  
 theta1   = 0; // initial angle of the first pendulum
 theta2   = 1.9*(PI)/2; // initial angle of the second pendulum
 d2theta1 = 0;
 d2theta2 = 0;
 dtheta1  = 0;
 dtheta2  = 0;
 x0=0;
 y0=0;
 mu = 1+m1/m2;
}

function draw() {
  //frameRate(15);
  background(255,80);
  translate(width/2,height/2);
  
/* We get the equations of motion if we solve the Lagrangian
  L = Ekin - Epot (see https://en.m.wikipedia.org/wiki/Double_pendulum)
*/
  d2theta1  =  (g*(sin(theta2)*cos(theta1-theta2)-mu*sin(theta1))-(l2*dtheta2*dtheta2+l1*dtheta1*dtheta1*cos(theta1-theta2))*sin(theta1-theta2))/(l1*(mu-cos(theta1-theta2)*cos(theta1-theta2)));
  
  d2theta2  =  (mu*g*(sin(theta1)*cos(theta1-theta2)-sin(theta2))+(mu*l1*dtheta1*dtheta1+l2*dtheta2*dtheta2*cos(theta1-theta2))*sin(theta1-theta2))/(l2*(mu-cos(theta1-theta2)*cos(theta1-theta2)));
  
// updating the angles
  dtheta1   = (dtheta1 + d2theta1*dt) % TAU; // we need to limit the values to Tau=2*PI because we will otherwise soon end up with an overflow
  dtheta2   = (dtheta2 + d2theta2*dt) % TAU;
  theta1    = (theta1+dtheta1*dt) % TAU;
  theta2    = (theta2 + dtheta2*dt) % TAU;

  x1 = x0+l1*sin(theta1); // transform from polar coordinates to cartesian coordinates
  y1 = y0+l1*cos(theta1);
  x2 = x0+l1*sin(theta1)+l2*sin(theta2);
  y2 = y0+l1*cos(theta1)+l2*cos(theta2);

  stroke(100);
  line(0,0,x1,y1);
  line(x1,y1,x2,y2);
  
  noStroke();
  fill(c);
  circle(x2,y2,10);
}