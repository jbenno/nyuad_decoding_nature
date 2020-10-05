/*
Recursion: Fibonacci numbers.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(700, 700);
  f=Fibonacci(6);
  console.log(f);
}

function Fibonacci(n) {
  if (n<=0) {return 0}
  if (n==1) {return 1}
  else {
           return Fibonacci(n-1) + Fibonacci(n-2)
 }
}
