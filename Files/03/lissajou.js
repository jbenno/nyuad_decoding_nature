/* Oscillation: Lissajou curve. We now overlay two harmonic oscillations. Depending on the ratio of the two constants k1 and k2 the resulting figure becomes more and more complex.
Uses the oscillator class defined in oscillator.js
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let S1, S2;
let x1, x2,v1, v2;
let l;

function setup() {
  createCanvas(800, 800);
  x1 = createVector(0,50);
  x2 = createVector(50,0);
  v1 = createVector(10,0);
  v2 = createVector(0,10);
  m = 5;
  k1=20;
  k2=40;
  r=5;
  c='#ff0066'



  S1 = new Oscillator(x1, v1, m, k1, r, c);
  S2 = new Oscillator(x2, v2, m, k2, r, c);
}

function draw() {
    background(255,5);
    translate(width/2,height/2);

    S1.applyForce(S1.x);
    S1.update();

    S2.applyForce(S2.x);
    S2.update();

    circle(S1.x.x,300,5);
    circle(-300,S2.x.x,5)

    noStroke();
    fill(c);
    circle(S1.x.x, S2.x.x,5);



}
