/*
Recursion: Fibonacci numbers. The recursion is resolved into iteration. In almost any case iteration runs faster on a computer and with less memory occupied. However, the code is not as easy to read and might not express clearly the natural or logical process that should be modelled.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(700, 700);
  f=Fibonacci(6);
  console.log(f);
}

function Fibonacci(n) {
  let f0=0;
  let f1=1;
  for(let i=0;i<n;i++){
    f=f0;
    f0 = f1;
    f1 +=f;
  }
  return f0;
}
