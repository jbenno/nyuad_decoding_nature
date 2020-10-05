/* Georg Nees, Schotter (rubble). Originally coded in Algol to be plotted with ink I tried to complete the code fragment which I found in the reprint of Nees'es original publication and translate it into p5.js.

Source: Nees, Georg. Generative Computergraphik. Edited by Hans Ch von Herrmann and Christoph Hoffmann. Schriftenreihe Kaleidoskopien. SIEMENS AG, 2006.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/


const col = 12;
const rws = 22;
const hm=3;
const vm=1;



function setup() {
  createCanvas(600,900);
  edge=width/(col+(2*hm));
  dns=0.02;
  ns=0;
  ita=0.25;
}

function draw() {
  background(255);
  noLoop();
  stroke(0);
  noFill();
  rectMode(CENTER);
  for (let j=1; j <= rws; j++){
    ns += j*dns;
    for (let i=1; i <= col; i++) {
      PSI = random(-ns,ns);
      DIS = random(-ns/ita, ns/ita);
      x=edge*(hm + i -0.5) + DIS;
      y=edge*(vm + j -0.5) + DIS;
     push();
      translate(x,y);
      rotate(PSI);
      rect(0,0,edge,edge);
     pop();
    }
  }
}
