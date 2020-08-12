/* Polar coordinates: Transform polar coordinates to Cartesian coordinates. See also https://editor.p5js.org/jbenno/sketches/EPn7t7ZER

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let r;
let theta;
let dtheta = 0.1;

function setup() {
  createCanvas(800, 800);
  r = 100;
  theta = 0;
}

function draw() {
  background(255,50);
  
  x = r * cos(theta);
  y = r * sin(theta);

  fill('#ff0066');
  noStroke();
  
  translate(width / 2, height / 2); // put the origin in the center of the canvas
  circle(x, y, 5); // x and y are the transformation of a point at angel theta at radius r from the origin into cartesian coordinates

  theta += dtheta; // increase theta
}