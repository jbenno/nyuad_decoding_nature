/*
Gravity: Epicycles in planets orbiting a sun
We define classes for planets and suns. In our reduced model only the sun attracts the planets. We apply Newton's law of gravity (reverse squared distance from the attractor) and get a nice illustration of Kepler's laws.
Now we have switched positions. The blue planet sits in the center, so the green line actually shows the relative position which the red planet describes on the sky.
Uses the planet class defined in plantets.js
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let planet;
let sun;

function setup() {
  createCanvas(800, 800);
  planet1 = new Planet(100, 0,0,-3,0.5);
  planet2 = new Planet(200, 0,0,-2,7);
  sun = new Sun(0,0,1000);
}

function draw() {
  background(255);

  let grav = sun.attract(planet1);
  planet1.applyForce(grav);
  grav = sun.attract(planet2);
  planet2.applyForce(grav);
  planet1.update();
  planet2.update();

  translate(width/2-planet2.x.x, height/2-planet2.x.y);
  displayPlanet(sun, '#ffcc00');
  displayPlanet(planet1, '#cc0000');
  displayPlanet(planet2, '#3366ff');
  displayEpi(planet1,planet2);
}

function displayEpi(planet1, planet2) {
  let vec=p5.Vector.sub(planet1.x,planet2.x);
  stroke(0,255,0);
  noFill();
  circle(planet2.x.x,planet2.x.y,width);
  translate(planet2.x.x, planet2.x.y);
  line(0, 0, 10*vec.x,10*vec.y);

}
