 // For the cellular automaton CA(s,t), t is now a trite, a number of eight digits to the base 3, i.e. with values 0,1,2; s is the cell width. The state of the next generaton is now determined by the average grey scale value of the cell and its direct neighbours.

function rulesetF(n) 
{ 
  let r = [];
  b = n.toString(3);
  while (b.length < (7 || 2)) {b = "0" + b;}
  
  text("Rule " + n,0,10);
  text(b, 50,10);

  for (i=0; i<7; i)
  { 
    fill(i*(255/7));
    rect(120+20*i,0,15, 5);
    r[i]=int(b.charAt(i));
    if (r[i] == 2) fill(0);
      else if (r[i] == 1) fill(127);
      else fill(255);
    square(125+20*i,5,5);
    i++;
  }
  return r;
}

function CA(wdth,r) {
  this.w = wdth;
  this.l = Math.floor(width/this.w);
  this.cells = [];
  
/*  //initialise first row with random numbers
    for (var i = 0; i < this.l; i++) {
    this.cells[i] = Math.floor(random(2))%2;
  }
  */
  // initialise first row with one black pixel right in the centre
    for (var i = 0; i < this.l; i++) {
    this.cells[i] = 0;
      if (i == Math.floor(this.l/2)) {
        this.cells[i]=1;
      }
  }
  
  this.generation = 0;
  this.ruleset = rulesetF(r);

  this.generate = function() {
    var nextgen = [];
    for (var i = 0; i < this.l; i++) {
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
  };

  this.display = function() {
    for (var i = 0; i < this.l; i++) {
      if (this.cells[i] == 2) fill(0);
      else if (this.cells[i] == 1) fill(127);
      else fill(255);
      noStroke();
      rect(i*this.w, 20+this.generation*this.w, this.w, this.w);
    }
  };

  // Looking up the Wolfram rules which are defined as one byte
  this.rules = function(a, b, c) {
    r = 6- (a + b + c);
    return this.ruleset[r];
  };
}