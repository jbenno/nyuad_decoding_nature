/*
Recursion: Barycentric division.
The three medians of a triangle meet in the centroid. They cut the triangle into three smaller triangles. We take each of the three and repeate the process recursively.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(400, 400);
  translate(width/2,height/2);
  d=(width-40)/2; // length of the first edge

  a=createVector(-d,d); // the three corners of the triangle
  b=createVector(d,d);
  c=createVector(0,-d/sqrt(2));

  BarycDiv(a,b,c,d);
}

function BarycDiv(a,b,c,d){
  let s=d/2;
  if (s<1) {return 0} else { //avoid infinite recursion by stopping when d arrives at 1 pixel
    let o=p5.Vector.add(a,b).add(c).div(3); // calculate the centroid
    noFill();
    triangle(a.x,a.y,b.x,b.y,c.x,c.y);
    BarycDiv(a,b,o,s); // call the function with one of the corners replaced by the centroid
    BarycDiv(a,o,c,s);
    BarycDiv(o,b,c,s);
  }
}
