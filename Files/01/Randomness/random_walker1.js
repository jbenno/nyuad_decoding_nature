/*
Very simple random walker demo.
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
	createCanvas(600, 400);
	background(255);
  x=0;
  y=0;

}

function draw() {
  //background(255);
  translate(width/2,height/2);
  point(x,y);
  x=x+random(-2,2);
  y=y+random(-2,2);

}