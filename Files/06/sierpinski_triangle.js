/*
Recursion: Sierpinski triangle. Divide an equilateral triangle by taking half of the edge it into four congruent triangles. Repeate with each of the three that share a corner with the original triangle.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(700, 700);
  translate(width/2,height/2);
  d=(width-40)/2; // length of the first edge
  o=createVector(0,0);
  Sierpinski(d);
}

function Sierpinski(d){
  if (d<1) {return 0} else { //avoid infinite recursion by stopping when d arrives at 1 pixel
    a=createVector(-d,d); // calculate the three corners
    b=createVector(d,d);
    c=createVector(0,-d/sqrt(2));
    noFill();
    triangle(a.x,a.y,b.x,b.y,c.x,c.y);
    d=d/2; // half the edge
    push(); // repeate the process for each of the three remainders
      translate(0,-d/sqrt(2));
      Sierpinski(d);
    pop();
    push();
      translate(-d,d);
      Sierpinski(d);
    pop();
      push();
      translate(d,d);
      Sierpinski(d);
    pop();
  }
}
