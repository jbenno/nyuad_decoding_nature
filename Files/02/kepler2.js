/*
Gravity: Planets orbiting a sun
We define classes for planets and suns. In our reduced model only the sun attracts the planets. We apply Newton's law of gravity (reverse squared distance from the attractor) and get a nice illustration of Kepler's laws.
Uses the planet class defined in plantets.js
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let planet;
let sun;

function setup() {
  createCanvas(800, 800);
  planet = new Planet(300, 0,0,-1,1);
  sun = new Sun(0,0,1000);
}

function draw() {
  background(255);
  translate(width/2,height/2);

  let grav = sun.attract(planet);
  planet.applyForce(grav);
  planet.update();

  sun.display();
  planet.display();
}
