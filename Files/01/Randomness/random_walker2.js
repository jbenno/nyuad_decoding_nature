/*
Random walker with a custom pseudo random number generator (PRNG) instead of the JavaScript random() function. The lgc parameters are taken from Press, William H. Numerical Recipes: The Art of Scientific Computing. 3rd ed. Cambridge & New York: Cambridge University Press, 2007.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const  s = 0;
const  m = 2**32;
const  a = 1664525;
const  c = 1013904223;

let seed=s;


function setup() {
  createCanvas(600, 400);
  
  x=0;
  y=0;
}

function rnd(low,hgh) 
{
  seed=(a*seed + c) % m;
  out = map(seed,0,m-1,low,hgh,true); 
  return out;
}

function draw() {
  translate(width/2,height/2);
  point(x,y);
  x=x+rnd(-3,3);
  y=y+rnd(-3,3);
}