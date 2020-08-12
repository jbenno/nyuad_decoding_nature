/* Oscillation: The rose figure. If the oscillation swings in two dimensions we get more complex figures. The rose curve or rosette is described by a pendulum swinging above a rotating plane. This can e.g. be observed with Foucault's pendulum.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(800, 800);
  theta=0;
  a=100;
  n=3;
  d=5;
  k=n/d;
  dtheta=0.02;

}

function draw() {
  background(255,5);
  translate(width/2,height/2);

  r=a*sin(k*theta);

  S=createVector( r*cos(theta), r*sin(theta) );

  noStroke()
  fill('#ff0066');
  circle(S.x,S.y,5);

  theta=theta+dtheta;
}
