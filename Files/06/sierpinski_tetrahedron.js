/*
Recursion: Sierpinski tetrahedron. Divide the tetrahedron by taking half of the edge it into five congruent tetrahedra. Repeate with each of the three that share a corner with the original tetrahedron.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(700, 700,WEBGL);
  s=300; // length of the first edge
  ang=0;
}

function draw() {
  background(255);
  rotateY(ang); // rotate the graph to show its 3d shape
  rotateZ(ang/5);
  rotateX(ang/10);
  if (ang<4*PI) {
  ang+=0.1; // increment of the rotation
  }
  Sierpinski(s); //call of the recursinve function
}

function Sierpinski(s){
  if (s<5) {return 0} else { //avoid infinite recursion by stopping when d arrives at 1 pixel
    s=s/2; // half the edge
    cosPI6=cos(PI/6);
    let rot = (s)/cosPI6; //the length of the
    a=createVector(0,-s,0);
    b=createVector(0,s,rot);
    c=createVector(s,s,-rot);
    d=createVector(-s,s,-rot);
    //Create a tetrahedron from three triangles
    noFill();
    beginShape(TRIANGLES);
        vertex(a.x,a.y,a.z);
        vertex(b.x,b.y,b.z);
        vertex(c.x,c.y,c.z);
    endShape();

    beginShape(TRIANGLES);
        vertex(a.x,a.y,a.z);
        vertex(b.x,b.y,b.z);
        vertex(d.x,d.y,d.z);
    endShape();

    beginShape(TRIANGLES);
        vertex(a.x,a.y,a.z);
        vertex(c.x,c.y,c.z);
        vertex(d.x,d.y,d.z);
    endShape();

    beginShape(TRIANGLES);
        vertex(b.x,b.y,b.z);
        vertex(c.x,c.y,c.z);
        vertex(d.x,d.y,d.z);
    endShape();

    let s2=s/2; // the centres of the four small tetrahedra are transposed by s/4
    let rot2 = (s2)/cosPI6;

push(); // repeate the process for each of the four remainders
  translate(0,-s2,0);
  Sierpinski(s);
pop();
push();
  translate(0,s2,rot2);
  Sierpinski(s);
pop();
push();
  translate(s2,s2,-rot2);
  Sierpinski(s);
pop();
push();
  translate(-s2,s2,-rot2);
  Sierpinski(s);
pop();

  }
}
