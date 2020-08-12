/*
Pseudo-random numbers: Linear Congruential Generator.
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const  m = 11;
const  a = 6;
const  c = 1;
const  s = 0;

let seed=s;


function setup() {
  createCanvas(400, 400);
}

function rnd(mm,aa,cc,ss) {
  out=(aa*ss + cc) % mm;
  return out;
}


function draw() {
  console.log(seed);
  seed=rnd(m,a,c,seed);
}