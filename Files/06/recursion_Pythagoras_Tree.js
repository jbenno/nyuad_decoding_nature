/*
Recursion: Pythagoras tree.
On the edge of a square, two squares with edge-length deminished by 1/sqrt(2) are attached according to Pythagoras' theorem.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(400, 400);
  d=50
  translate(width/2,height-d)
  Pythagoras(d);
}

function Pythagoras(d) {
  rectMode(CENTER);
  noFill();
  if (d<1) {return 0} else { //avoid infinite recursion by stopping when d arrives at 1 pixel
    rect(0,0,-d,-d);
    push();
      translate(d/2,-d);
      rotate(PI/4);
      Pythagoras(d/(sqrt(2)));
    pop();
    push();
      translate(-d/2,-d);
      rotate(-PI/4);
      Pythagoras(d/(sqrt(2)));
    pop();

  }
}
