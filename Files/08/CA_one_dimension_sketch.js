 // CA(s,t,[pattern optional]) is the cellular automaton with cell width s, and t the number of the rule in Stephen Wolfram's notation. Some of the automata can do computations and even act as Turing machines. The optional constant pattern acts as input of the automaton, the program code to be executed.

var ca;
const pattern=[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//[0,0,0,1,0,0,1,1,0,1,1,1,1,1];

function setup() {
  createCanvas(800, 800);
  //background(255);

  ca = new CA(10,30);
}

function draw() {


 ca.display();
  if (ca.generation < height/ca.w) {
   ca.generate();
  }
}