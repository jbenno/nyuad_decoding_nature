/*
Recursion: Factorial.
The factorial is one of the simplest recursive functions defined as
f(n): n!=n*(n-1)! and f(0)=1

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/


function setup() {
  createCanvas(400, 400);
  f=Factorial(5);
  console.log(f);
}

function Factorial(n) {
 if (n<=0) {return 1} else {
           return n* Factorial(n-1)
 }
}
