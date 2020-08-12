/*
Pseudo-random numbers: xorshift+ Generator.
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/


let s=[25,3];


function setup() {
  createCanvas(400, 400);
}

function rnd(s) {
    let x = s[0];
    let y = s[1];
    s[0] = y;
    x ^= x << 23; // a
    x ^= x >>> 17; // b
    x ^= y ^ (y >>> 26); // c
    s[1] = x;
    return x + y;
}


function draw() {
  a=rnd(s);
  console.log(a);
}