/* Oscillation: Simple harmonic oscillator; a spring moving according to Hook's law. The spring is defined as a class.
Uses the spring class defined in spring.js
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let S;

function setup() {
  createCanvas(800, 400);
  S = new Spring(5,5,50); // mass, stiffness, displacement
}

function draw() {
    background(255,75);

    S.applyForce(S.d);
    S.update();

    translate(width/2,height/2);
    let x=0;
    let y=S.d;
    fill(255, 127,100);
    circle(x, y, 5);

    // x=x+5; //try adding horizontal movement to make the sine funktion visible

}
