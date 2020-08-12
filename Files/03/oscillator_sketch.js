/* Oscillation: Harmonic oscillator. By generalizing Hooke's law to vectors we can visualize the equivalence of the harmonic motion with circular movement and make it plausible why harmonic oscillators describe a sine wave.
Uses the oscillator class defined in oscillator.js
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let S;
let x,v;

function setup() {
  createCanvas(800, 800);
  x = createVector(0,50);
  v = createVector(10,0);
  m = 5;
  k=5;
  r=5;
  c='#ff0066'

  S = new Oscillator(x, v, m, k, r, c);
}

function draw() {
    background(255,50);
    translate(width/2,height/2);

    S.applyForce(S.x);
    S.update();
    S.display();

}
