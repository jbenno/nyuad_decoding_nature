 /* CA(s,t,[pattern optional]) is the cellular automaton with cell width s, and t the number of the rule in Stephen Wolfram's notation. Some of the automata can do computations and even act as Turing machines. The optional constant pattern acts as input of the automaton, the program code to be executed.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function rulesetF(n) 
{ 
  let r = [];
  b = n.toString(2);
  while (b.length < (8 || 2)) {b = "0" + b;}
  
  text("Rule " + n,0,10);
  text(b, 50,10);
  k=0;
  for (i=0; i<8; i++)
  {
    stroke(0);
    k = i.toString(2);
  while (b.length < (8 || 2)) {k = "0" + k;}
    for (j=0; j<3;j)
    {
      fill(255); 
      if (j==0 && (floor(i/4))%2==0) fill(0);
      if (j==1 && (floor(i/2))%2==0) fill(0);
      if (j==2 && i%2==0) fill(0);
     
      square(120+20*i+6*j, 0, 5);
      j++;
    }
    if(b.charAt(i)==="1")
      {
        r[i]=1;
        fill(0);
      } else {
        r[i]=0;
        fill(255);
      }
      square(126+20*i, 6, 5);
  }
  return r;
}

function CA(wdth,r,init) {
  this.w = wdth;
  this.l = Math.floor(width/this.w);
  this.cells = [];
  
/*  //initialise first row with random numbers
    for (var i = 0; i < this.l; i++) {
    this.cells[i] = Math.floor(random(2))%2;
  }
  */
  // initialise first row with one black pixel right in the centre
    for (let i = 0; i < this.l; i++) {
    this.cells[i] = 0;
      if (i == Math.floor(this.l/2)) {
        this.cells[i]=1;
      }
  }
  
  if (init) {this.cells=(pattern).concat(this.cells)} // if the input pattern is specified it is taken in here.

  this.generation = 0;
  this.ruleset = rulesetF(r);

  this.generate = function() {
    var nextgen = [];
    for (let i = 0; i < this.l; i++) {
      nextgen[i] = 0;
    }
    // For every spot, determine new state by examing current state, and neighbor states
    // Ignore edges that only have one neighor
    for (i = 1; i < this.l-1; i++) {
      var left   = this.cells[i-1];   // Left neighbor state
      var me     = this.cells[i];     // Current state
      var right  = this.cells[i+1];   // Right neighbor state
      nextgen[i] = this.rules(left, me, right); // Compute next generation state based on ruleset
    }
    // The current generation is the new generation
    this.cells = nextgen;
    this.generation++;
  }
   // Looking up the Wolfram rules which are defined as one byte
  this.rules = function(a, b, c) {
    r = 7- (4*a + 2*b + c);
    return this.ruleset[r];
  };

  this.display = function() {
    for (let i = 0; i < this.l; i++) {
      if (this.cells[i] == 1) {fill(0);
                        }else {fill(255)}
      noStroke();
      rect(i*this.w, 20+this.generation*this.w, this.w, this.w);
    }
  }
}