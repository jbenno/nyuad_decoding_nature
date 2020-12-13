/*TM() is a Turing Machine demo. The rules are defined in the state matrix S.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const F = 6; // halt state
const maxIterations = 100;

const S = [ // the state matrix for state n, read-in r, write-out w, new state s, and position change
  // n , r , w , s, <>
  [ 1 , 1 , 0 , 2 , 1 ], 
  [ 1 , 0 , 0 , F , 0 ], 
  [ 2 , 1 , 1 , 2 , 1 ], 
  [ 2 , 0 , 0 , 3 , 1 ],
  [ 3 , 1 , 1 , 3 , 1 ],
  [ 3 , 0 , 1 , 4 , -1 ],
  [ 4 , 1 , 1 , 4 , -1 ],
  [ 4 , 0 , 0 , 5 , -1 ],
  [ 5 , 1 , 1 , 5 , -1 ],
  [ 5 , 0 , 1 , 1 , 1 ]
];
let B = [1,1,1,1,0]; //initial memory band

function setup() {
  createCanvas(800, 800);
  //background(255);

TM();
}

function rulesetF(n,r) 
{  
  for (let j=0;j<S.length;j++){
    if (S[j][0] == n && S[j][1] == r) { // state is j, read-in is r
      return [S[j][2],S[j][3],S[j][4]];
    }
  }
}

function TM() {
  let s = 1; // initial state
  let i = 0; 
  let j = 0;
  while (s != F && j<maxIterations) { // check if the halt state is reached or maximum iterations are exceeded
    if (i<0) {B.unshift(0)} // if the left edge of the band is reached, a new position is pushed in
    if (!B[i]) {B[i] = 0} // if the right edge is reached, a new position is concatenated
    let a = rulesetF(s,B[i]);
    console.log(j,s,i,B[i],a[0],a[1],a[2]);
    B[i] = a[0]; // a[0] is written on the band at position i
    s = a[1]; // the new state is set to a[1]
    i += a[2]; // the position of the read/write head is shifted
    j++; // counting the steps
  } 
}