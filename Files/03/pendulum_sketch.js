/* Oscillation: The pendulum's oscillation is not harmonic because gravity's effect depends on the angle of the pendulum.
Uses the pendulum class defined in pendulum.js
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let S;
let x,v;

function setup() {
  createCanvas(800, 800);
  pivot = createVector(width/2,50);
  r=200;
  theta=PI/4;
  b=10;
  c='#ff0066'
  gravity=0.1;

  P = new Pendulum(pivot, r, theta, b, c); // define the pendulum, depending on its length r, the initial angle, the size of the circle b, and its colour
}

function draw() {
    background(255,50);

    P.applyForce(gravity);
    P.update();
    P.display();

}
