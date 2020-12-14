# List of all Code Demos for the class 'Decoding Nature'
### Instructor Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki


```
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
} // CA(s,t,[pattern optional]) is the cellular automaton with cell width s, and t the number of the rule in Stephen Wolfram's notation. Some of the automata can do computations and even act as Turing machines. The optional constant pattern acts as input of the automaton, the program code to be executed.

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
} // For the cellular automaton CA(s,t), t is now a trite, a number of eight digits to the base 3, i.e. with values 0,1,2; s is the cell width. The state of the next generaton is now determined by the average grey scale value of the cell and its direct neighbours.

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
}/* For the cellular automaton CA(s,t), t is now a trite, a number of eight digits to the base 3, i.e. with values 0,1,2; s is the cell width. The state of the next generaton is now determined by the average value of the cell and its direct neighbours. 0 will be white, 1 grey, 2 black

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

var ca;

function setup() {
  createCanvas(800, 800);
  //background(255);

  ca = new CA(6,600);
}

function draw() {


 ca.display();
  if (ca.generation < height/ca.w) {
   ca.generate();
  }
}/*
Fractals: The cicle of the fifth (Quintenzirkel) The resulting wave contains the whole figure of rising fifth.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

//Doen't run as well in an Apple Safari Browser


function setup() {
  createCanvas(700, 300);
  fft = new p5.FFT();
  f=55;
  a=1;
  m=1;
  n=2;
  fifth=2**(7/12); // the perfect fifth in tempered tuning
}

function draw() {
  background(255);
  frameRate(5);
  if (f>1 && f<14081){ // avoid infinite interation
    osc(f,a);
    //f*=n/m;
    //a*=m/(1.05*n);
    //m++;
    //n++;
    f*=fifth; // increase pitch by a fifth
    a*=1/fifth; // decrease amplitude to keep the note's energy constant
  }
  oscilloscope();
  text(round(f)+' Hz', 50,50);
}

function osc(f,a) {
    let osc = new p5.Oscillator('sine');
    osc.freq(f, 0.1);
    osc.amp(a, 0.1);
    osc.start();
}

function oscilloscope() {
  noStroke();
  fill(255, 0, 255);

  let waveform = fft.waveform();
  let spectrum = fft.analyze();

  beginShape();
  for (let i = 0; i < 1024; i++){
    let x = map(i, 0, 1024, 0, width); // frequency in Hz
    let y = map( waveform[i], -1, 1, 0, height); // the vertical position on the wave
    let h = -height + map(spectrum[i], 0, 255, height, 0); // the amplitude in the spectrum

    noStroke();
    fill(255,0,255);
    rect(x, height, width / 1024, h ); // drawing the Fourier analysis

    noFill();
    stroke(20);
    vertex(x,y); // drawing the wave

  }
  endShape();
}/* Georg Nees, Schotter (rubble). Originally coded in Algol to be plotted with ink I tried to complete the code fragment which I found in the reprint of Nees'es original publication and translate it into p5.js.

Source: Nees, Georg. Generative Computergraphik. Edited by Hans Ch von Herrmann and Christoph Hoffmann. Schriftenreihe Kaleidoskopien. SIEMENS AG, 2006.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/


const col = 12;
const rws = 22;
const hm=3;
const vm=1;



function setup() {
  createCanvas(600,900);
  edge=width/(col+(2*hm));
  dns=0.02;
  ns=0;
  ita=0.25;
}

function draw() {
  background(255);
  noLoop();
  stroke(0);
  noFill();
  rectMode(CENTER);
  for (let j=1; j <= rws; j++){
    ns += j*dns;
    for (let i=1; i <= col; i++) {
      PSI = random(-ns,ns);
      DIS = random(-ns/ita, ns/ita);
      x=edge*(hm + i -0.5) + DIS;
      y=edge*(vm + j -0.5) + DIS;
     push();
      translate(x,y);
      rotate(PSI);
      rect(0,0,edge,edge);
     pop();
    }
  }
}
/*
Complex numbers and functions of complex numbers.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

class Complex {
  constructor(a, b) {
    this.re = a;
    this.im = b;
  }

  addc(c) {
    // adds two complex numbers
    const re = this.re + c.re;
    const im = this.im + c.im;
    return new Complex(re, im);
  }

  multc(c) {
    // multiplies two complex numbers
    const re = this.re * c.re - this.im * c.im;
    const im = this.re * c.im + this.im * c.re;
    return new Complex(re, im);
  }

  mults(x) {
    // multiplies a complex number with a scalar
    const re = x * this.re;
    const im = x * this.im;
    return new Complex(re,im);
  }

  conjc() {
    // creates the complex conjugate
    this.im = - this.im;

  }

  absc(c) {
    // the absolute (scalar) value of a complex number
    let a;
    const re = this.re;
    const im = this.im;
    a = sqrt((re)**2 + (im)**2);
    return a;
  }

}

 function recc(c) {
    //turns a complex number into its multiplicative reciprocal: recc(z)=1/z
    let r = c.re;
    let i = c.im;

    this.re = r/(r**2 + i**2);
    this.im = i/(r**2 + i**2);
   return new Complex(re, im);
 }


function argc(c) { //returns the angle of the complex number
      let theta = 0;
      const re = c.re;
      const im = c.im;
      const ab = c.absc();

      if (im !=0 || re > 0) {
        theta = 2* atan(im/(ab+re));
      } else if (re < 0 && im ==0) {
        theta = PI;
        } else {
        theta = 0;
      }
      if (theta >= 0) {
          return theta;
        } else {
          theta = 2*PI+theta;
          return theta;
        }

    }

// declaration of i
const i= new Complex(0,1);

// complex exponential
function expc(x) {
  let expcx = new Complex(cos(x),sin(x));
  return expcx;
}/*
Complex numbers and functions of complex numbers. In complex.js we define a class Complex to have all the necessary algebra. To visualize functions of complex numbers we need in theory 4 dimensions (complex numbers are two dimensional, so input and output each need two dimensions. Instead of drawing lines for the results we use 'domain colouring' (see https://en.wikipedia.org/wiki/Domain_coloring for the explanation).

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(800, 800);
    t=0;
    units = 100;
    wdth = width/2;
    hght = height/2;
    z = new Complex(0,0);
}


function calc(xx) {
  let a = new Complex(1,0);
  let b = new Complex(1,0);
  let c = new Complex(-1,-1);
  let d = new Complex(1,0);

  nn = xx.multc(a).addc(b);
  dd = recc(xx.multc(c).addc(d));
  aa = nn.multc(dd);
  return aa;
}

function draw() {
  //background(255);
  noLoop();
  // noprotect
  translate(wdth,hght);
 // loop through all the points of the canvas
    for (imG = -hght; imG < hght; imG = imG + 1) {
      for (reaL= -wdth; reaL < wdth; reaL = reaL + 1) {
        // call the function and calculate for each point
        z = new Complex(reaL/units, -imG/units);
        z=calc(z);
       // convert the result into a color: origin is black; argc calculates the angle theta of the result complex number if you think of it as a vector (re,im). This delivers the hue H. The brightness L is an exponentially decreasing function of the absolute magnitude of the result
          H = 360*argc(z)/(2*PI);
          L = (1 - 0.5**(z.absc()))*100;
          S = 100;
        colorMode(HSL);
        coL = color(H,S,L);
        stroke(coL);
        point(reaL,imG);
     }
    }


}// training data, must be a 1 or 2-dimensional matrix; in 2 dimension the cells are elements of the row arrays


const pattern1 = [[0, 1, 1, 0, 1], [1, 0, 1, 0, 1]];
const pattern2 = [
  [0,0,0,0],
[0,0,0,1],
[0,0,1,0],
[0,0,1,1],
[0,1,0,0],
[0,1,0,1],
[0,1,1,0],
[0,1,1,1],
  ];


const pattern3 = [
  [[0,0,0,0,0,],[0,0,0,0,0,],[0,0,0,0,0,],[0,0,0,0,0,],[0,0,0,0,0,]],
[[1,1,1,1,1,],[0,0,1,0,0,],[0,0,1,0,0,],[0,0,1,0,0,],[0,0,1,0,0,]],
[[1,0,0,0,1,],[0,1,0,1,0,],[0,0,1,0,0,],[0,1,0,1,0,],[1,0,0,0,1,]],
[[0,0,1,0,0,],[0,0,1,0,0,],[1,1,1,1,1,],[0,0,1,0,0,],[0,0,1,0,0,]]
]

const xor = [
  [0,1],
  [1,0]
  ];/* Oscillation: A Double Pendulum is a pendulum with another pendulum attached to its end. This physical system displays remarkably chaotic behaviour. For this demo we don't use Newton's equations but work with the conservation of momentum and the Lagrangian because this directly gives us the equations of motions to calculate the state of the system.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const g = 10; // the physical constants

const m1 = 100; // mass
const m2 = 100;

const l1=200; // length of the pendulums
const l2=200;

const dt=0.4; // speed of updates

const c='#ff0066';


function setup() {
  createCanvas(800, 800);

 theta1   = 0; // initial angle of the first pendulum
 theta2   = 1.9*(PI)/2; // initial angle of the second pendulum
 d2theta1 = 0;
 d2theta2 = 0;
 dtheta1  = 0;
 dtheta2  = 0;
 x0=0;
 y0=0;
 mu = 1+m1/m2;
}

function draw() {
  //frameRate(15);
  background(255,80);
  translate(width/2,height/2);

/* We get the equations of motion if we solve the Lagrangian
  L = Ekin - Epot (see https://en.m.wikipedia.org/wiki/Double_pendulum)
*/
  d2theta1  =  (g*(sin(theta2)*cos(theta1-theta2)-mu*sin(theta1))-(l2*dtheta2*dtheta2+l1*dtheta1*dtheta1*cos(theta1-theta2))*sin(theta1-theta2))/(l1*(mu-cos(theta1-theta2)*cos(theta1-theta2)));

  d2theta2  =  (mu*g*(sin(theta1)*cos(theta1-theta2)-sin(theta2))+(mu*l1*dtheta1*dtheta1+l2*dtheta2*dtheta2*cos(theta1-theta2))*sin(theta1-theta2))/(l2*(mu-cos(theta1-theta2)*cos(theta1-theta2)));

// updating the angles
  dtheta1   = (dtheta1 + d2theta1*dt) % TAU; // we need to limit the values to Tau=2*PI because we will otherwise soon end up with an overflow
  dtheta2   = (dtheta2 + d2theta2*dt) % TAU;
  theta1    = (theta1+dtheta1*dt) % TAU;
  theta2    = (theta2 + dtheta2*dt) % TAU;

  x1 = x0+l1*sin(theta1); // transform from polar coordinates to cartesian coordinates
  y1 = y0+l1*cos(theta1);
  x2 = x0+l1*sin(theta1)+l2*sin(theta2);
  y2 = y0+l1*cos(theta1)+l2*cos(theta2);

  stroke(100);
  line(0,0,x1,y1);
  line(x1,y1,x2,y2);

  noStroke();
  fill(c);
  circle(x2,y2,10);
}/*
Fractals: Barnsley fern. This self-similar fractal set was presented as an early example for fractal structures in nature in Barnsley, Michael F. Fractals Everywhere. Kent, Elsevier Science & Technology, 1993. http://ebookcentral.proquest.com/lib/nyulibrary-ebooks/detail.action?docID=1901514.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(600, 600);
  background(255);
  //frameRate(5);
  x = createVector(0,0);
  n = 0;
  nMax=25000;
  BFern(x);
}

function BFern(X) {
  if(n<nMax) { //avoid infinite recursion by limiting the number of steps
    stroke('#009933');
    strokeWeight(1);
    //rescaling the range −2.1820 < x < 2.6558 and 0 ≤ y < 9.9983 to the canvas size.
    let px = map(X.x, -2.1820, 2.6558, 0, width);
    let py = map(X.y, 0, 9.9983, height, 0);
    point(px, py);

    let nextX=createVector(0,0);
    let r = random(1);

    /* depending on the random value r one of the cases f1 to f4 is chosen. Each f is defined by
    f(x)=Ax+b. Depending on the values of A and b different shapes of fern are generated.
    Our demo here is Barnsley's original example resembling black spleenwort fern
    */

    if (r < 0.01) {
      //f1: Stem
      nextX.x = 0;
      nextX.y = 0.16 * X.y;
    } else if (r < 0.86) {
      //f2: Successively smaller leaflets
      nextX.x = 0.85 * X.x + 0.04 * X.y;
      nextX.y = -0.04 * X.x + 0.85 * X.y + 1.60;
    } else if (r < 0.93) {
      //f3: Largest left-hand leaflet
      nextX.x = 0.20 * X.x + -0.26 * X.y;
      nextX.y = 0.23 * X.x + 0.22 * X.y + 1.60;
    } else {
      //f4: Largest right-hand leaflet
      nextX.x = -0.15 * X.x + 0.28 * X.y;
      nextX.y = 0.26 * X.x + 0.24 * X.y + 0.44;
    }
    n++;
    BFern(nextX);
  }
}
/*
Fractals: In baroque music there are several forms which show fractal structure. The fugue is one, the canon is another. The example demonstrates the self-similarity in the temporal structure of the quite famous canon in D by Pachelbel.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

//Doen't run as well in an Apple Safari Browser


function setup() {
  createCanvas(700, 300);
  fft = new p5.FFT();

 basso=[50, 50, 45, 45, 47, 47, 43, 43, 44, 44, 38, 38, 44, 44, 46, 46, 50, 50, 45, 45, 47, 47, 43, 43, 44, 44, 38, 38, 44, 44, 46, 46, 50, 50, 45, 45, 47, 47, 43, 43, 44, 44, 38, 38, 44, 44, 46, 46, 50, 50, 45, 45, 47, 47, 43, 43, 44, 44, 38, 38, 44, 44, 46, 46]; // the Basso Continuo

  violino=[78, 78, 76, 76, 74, 74, 73, 73, 71, 71, 69, 69, 71, 71, 73, 73, 74, 74, 73, 73, 71, 71, 69, 69, 67, 67, 66, 66, 67, 67, 64, 64, 62, 66, 69, 67, 66, 62, 66, 64, 62, 61, 62, 69, 67, 71, 69, 67, 66, 62, 64, 73, 74, 78, 81, 69, 71, 67, 69, 66, 62, 74, 74, 74]; // the three violine voices are actually the same, just shifted by two bars.

i=0;
s=0;
v=[];
b=new Canon(basso,0); // the basso
}

function draw() {
  background(255);
  frameRate(2);
  b.playCanon(i);
  if (i%16 ==0 && s<16) { // every two bars another voice is added. After four voices the key is shifted up one octave.
    o=floor(s/4);
    v[s]=new Canon(violino,o);
    s++;
  }
  for (j=0; j<v.length;j++) {
    v[j].playCanon(i+j*16) // the voices are played shifted in time by 8 beats
  }

  oscilloscope();
  text('Bar ' + floor(i%64/8), 50,50);
  i++;
}

function midi2Hz(note) { // converts the midi values into frequency in Hz
  let Hz=(2**((note-69)/12)*440);
  return Hz;
}

class Canon { // the class opens a new oscillator for each voice and runs through the score. It can shift o-octaves.
  constructor(voice, o) {
    this.voice=voice;
    this.o=o;
    this.osc = new p5.Oscillator();

    this.osc.amp(0);
    this.osc.start();
  }

  playCanon(i) {
    let j=i%64; // cycle through the 64 beats of the piece
    let note=midi2Hz(this.voice[j]+12*this.o); // read out the score and translate it into Hz
    this.osc.amp(1/(1.1*this.o+1)); // set higher pitches to lower volume
    this.osc.freq(note, 0.1);
  }
}

function oscilloscope() {
  noStroke();
  fill(255, 0, 255);

  let waveform = fft.waveform();
  let spectrum = fft.analyze();

  beginShape();
  for (let i = 0; i < 1024; i++){
    let x = map(i, 0, 1024, 0, width); // frequency in Hz
    let y = map( waveform[i], -1, 1, 0, height); // the vertical position on the wave
    let h = -height + map(spectrum[i], 0, 255, height, 0); // the amplitude in the spectrum

    noStroke();
    fill(255,0,255);
    rect(x*3, height, width / 1024, h ); // drawing the Fourier analysis

    noFill();
    stroke(20);
    vertex(x,y); // drawing the wave

  }
  endShape();
}/*
Formation of a solar system or a galaxy. The celestial bodies all attract each other and merge when they crash into each other.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let ps, sun;
const G=1;
const sc=1/2;

function setup() {
  createCanvas(700, 700);
  orig=createVector(0,0);
  ps = new SolarSystem();

  ps.addSun(10000);
   for (i=0;i<200;i++) {
    ps.addPlanet();
  }
}

function draw() {
  background(0);
  translate(width/2,height/2);

  ps.run();
}

// Class declaration

class Planet {
  constructor(x, v, m) {
    this.m = m;
    this.x = x.copy();
    this.v = v.copy();
    this.a = createVector(0, 0);
    this.G = G;
    this.c=color(255,0,0);
    this.r=5%m**0.33;
    this.dead=false;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.m);
    this.a.add(f);
  }

   attract(planet) {
    let FGrav = p5.Vector.sub(this.x, planet.x);
    let r = FGrav.magSq();
    let strength;
     if (r==0) {r=0.01}
     strength = (this.G * this.m * planet.m) / r;
    FGrav.setMag(strength);
    return FGrav;
   }

  update() {
    if (this.m>100) {this.c=color(255,200,0)}
    this.v.add(this.a);
    this.x.add(this.v);
    this.a.mult(0);
  }

  display() {
    noStroke();
    fill(this.c);
    circle(sc*this.x.x, sc*this.x.y, this.m**0.33);
  }

}

class SolarSystem {
  constructor() {
    this.planets = [];
  }

  addPlanet() {
    let x=createVector(random(-width/2,width/2)/sc, random(-height/2,height/2)/sc);
    let v=createVector(0,0);
    let m=random(0.1,10);
    this.planets.push(new Planet(x, v, m));
  }

   addSun(m) {
    let x=createVector(0, 0);
    let v=createVector(0, 0);
    this.planets.push(new Planet(x, v, m));
  }

  run() {
    let m=0;
    for (var i in this.planets) {
      let p1 = this.planets[i];
           if (p1.dead) {
        this.planets.splice(i,1);
        continue;
      }

      let grav = createVector(0,0);
        for (var j in this.planets) {
          if (j!==i) {
               let p2=this.planets[j];
               let d=p1.x.dist(p2.x);
                if (d<(p1.r+p2.r)/2) {
                  if (p1.m >= p2.m) {
                    p1.r=(p1.r+p2.r)**0.33;
                    p1.v=p5.Vector.add(p5.Vector.mult(p1.v,p1.m),p5.Vector.mult(p2.v,p2.m)).div(p1.m+p2.m);
                    p1.m+=p2.m;
                    p2.dead=true;
                  }
                  if (p2.m > p1.m) {
                    p2.r=(p1.r+p2.r)**0.33;
                    p2.v=p5.Vector.add(p5.Vector.mult(p1.v,p1.m),p5.Vector.mult(p2.v,p2.m)).div(p1.m+p2.m);
                    p2.m+=p1.m;
                    p1.dead=true;
                    continue;
                  }
               } else {
                   grav=grav.add(p2.attract(p1));
               }
          }
        }
    p1.applyForce(grav);
    p1.update();
    p1.display();
    m+=p1.m;
  }
    console.log(m/this.planets.length);
  }
}
/*
Gravity: Constant acceleration in the vertical direction, linear initial movement in the horizontal direction. Elastic reflection on the walls.
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(640, 640);
  position = createVector(0, 20);
  velocity = createVector(4, 0);
  acceleration = createVector(0,0.2);

  r=50;
}

function draw() {
  background(255);

  velocity.add(acceleration);
  position.add(velocity);

  x=position.x
  y=position.y

  if (x>width-r) { // reflecting by reversing velocity
    position.x=width-r;
    velocity.x*=-1;
  } else if (x-r<0) {
    velocity.x*=-1;
    position.x=r;
  }
  if (y>height-r) {
    velocity.y*=-1;
    position.y=height-r;
  }

  stroke(0);
  strokeWeight(2);
  fill(200,0,0);
  circle(x, y, r);
}/*

Joerg Blumtritt, https://github.com/jbenno/teaching/blob/master/README.md
*/

class Network {
  // the network is initialized with an array
  constructor(patterns,threshold) {
    this.patterns = [];
    this.neurons = [];
    this.weights = [];
    this.threshold = threshold;
    this.epochs = 100;

    for (let p in patterns) {
      this.patterns.push(matrixToVector(patterns[p]))
    }
    for (let i in this.patterns[0]) {
        this.neurons[i] = 0;
        this.weights[i] = [];
          for (let j in this.patterns[0]) {
            this.weights[i][j]=0;
          }
        }

    for (let p in this.patterns) {
      this.updateWeights(this.patterns[p]);
      }
  }

  updateWeights(data) {
      for (let i in data) {
        for (let j in data) {
          if (i==j) {
            this.weights[i][j] = 0
 // the diagonal elements w[i][i] of the weight matrix are all 0
              } else {
                if (j>i) {
                  this.weights[i][j]+=(2*data[i]-1)*(2*data[j]-1); // the weights below the main diagonal
                } else {
                  this.weights[i][j] = this.weights[j][i]; // the weights above the main diagonal are equal to the weights below, reflected at the diagonal
                }
            }
          }
        }
  }

  updateNodes(inp) {
    let ind = [];
    let check = 0;
    let neurons0 = [];
    for (let k in this.neurons) {
      ind[k] = k;
      neurons0[k] = this.neurons[k];
    }
    ind = shuffleArray(ind);

    for (let k in ind) {
      let i = ind[k];
      let a = 0;
      for (let j in this.neurons) {
        if (j!=i) {
          a+=inp[j]*this.weights[j][i];
        }
            }
      if (a < this.threshold) {this.neurons[i] = 0} else {this.neurons[i] = 1}
      if (neurons0[i] != this.neurons[i]) {check++}
    }
    return check;
  }

  evaluate(inp) {
    let e = 0;
    let check = 1;
    let neurons0 = [];
    while (e < this.epochs && check !=0) {
      neurons0 = this.neurons;
      check = this.updateNodes(inp);
      inp = this.neurons;
      e++;
    }
    console.log("Stopped after " + e + " epochs")
    console.log("Attractors: ");
    console.log(neurons0);
    console.log(this.neurons);
  }
}

function shuffleArray(array) { // randomise the inputs
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function  matrixToVector(data) {
  let vec = [];
  if (data.length == undefined) {vec = data} else {
     for (let i in data) {
       if (data[i].length == undefined) {vec.push(data[i])} else {
         for (let j in data[i]) {
           vec.push(data[i][j])
       }
       }
    }
  }
  return vec;
}/* Machine Learning and Neural Networks: Hopfield Network.


Joerg Blumtritt, https://github.com/jbenno/teaching/blob/master/README.md
*/

function setup() {
  createCanvas(600, 600);
  n = new Network(pattern3, 0);
  console.log(n);
  p = [[1,1,1,1,1,],[0,0,1,0,0,],[0,0,1,0,0,],[0,0,1,0,0,],[0,0,1,0,0,]];
  //n.updateNodes(p);
  n.evaluate(p);
}<!DOCTYPE html>
<!-- setup for decoding nature with p5.js -->
<html>
	<head>
		<meta charset="utf-8"/>
		<title>Title</title>
		<link rel="stylesheet" type="text/css" href="style.css" />
	</head>
	<body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js"></script>
    <!-- Path to the code file -->
    <script src="sketch.js"></script>
	</body>
</html>
/*
Gravity: Planets orbiting a sun
We define classes for planets and suns. In our reduced model only the sun attracts the planets. We apply Newton's law of gravity (reverse squared distance from the attractor) and get a nice illustration of Kepler's laws.
Uses the planet class defined in plantets.js
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let planet;
let sun;

function setup() {
  createCanvas(800, 800);
  planet = new Planet(300, 0,0,-1,1);
  sun = new Sun(0,0,1000);
}

function draw() {
  background(255);
  translate(width/2,height/2);

  let grav = sun.attract(planet);
  planet.applyForce(grav);
  planet.update();

  sun.display();
  planet.display();
}
/*
Gravity: Epicycles in planets orbiting a sun
We define classes for planets and suns. In our reduced model only the sun attracts the planets. We apply Newton's law of gravity (reverse squared distance from the attractor) and get a nice illustration of Kepler's laws.
Now we have switched positions. The blue planet sits in the center, so the green line actually shows the relative position which the red planet describes on the sky.
Uses the planet class defined in plantets.js
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let planet;
let sun;

function setup() {
  createCanvas(800, 800);
  planet1 = new Planet(100, 0,0,-3,0.5);
  planet2 = new Planet(200, 0,0,-2,7);
  sun = new Sun(0,0,1000);
}

function draw() {
  background(255);

  let grav = sun.attract(planet1);
  planet1.applyForce(grav);
  grav = sun.attract(planet2);
  planet2.applyForce(grav);
  planet1.update();
  planet2.update();

  translate(width/2-planet2.x.x, height/2-planet2.x.y);
  displayPlanet(sun, '#ffcc00');
  displayPlanet(planet1, '#cc0000');
  displayPlanet(planet2, '#3366ff');
  displayEpi(planet1,planet2);
}

function displayEpi(planet1, planet2) {
  let vec=p5.Vector.sub(planet1.x,planet2.x);
  stroke(0,255,0);
  noFill();
  circle(planet2.x.x,planet2.x.y,width);
  translate(planet2.x.x, planet2.x.y);
  line(0, 0, 10*vec.x,10*vec.y);

}
/*
Gravity: Epicycles in planets orbiting a sun
We define classes for planets and suns. In our reduced model only the sun attracts the planets. We apply Newton's law of gravity (reverse squared distance from the attractor) and get a nice illustration of Kepler's laws.
The green line shows the relative position which the red planet describes on the sky as seen from the blue one.
Uses the planet class defined in plantets.js
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let planet;
let sun;

function setup() {
  createCanvas(800, 800);
  planet1 = new Planet(100, 0,0,-3,0.5);
  planet2 = new Planet(200, 0,0,-2,7);
  sun = new Sun(0,0,1000);
}

function draw() {
  background(255);
  translate(width/2,height/2);

  let grav = sun.attract(planet1);
  planet1.applyForce(grav);
  grav = sun.attract(planet2);
  planet2.applyForce(grav);
  planet1.update();
  planet2.update();

  displayPlanet(sun, '#ffcc00');
  displayPlanet(planet1, '#cc0000');
  displayPlanet(planet2, '#3366ff');
  displayEpi(planet1,planet2);
}

function displayEpi(planet1, planet2) {
  let vec=p5.Vector.sub(planet1.x,planet2.x);
  stroke(0,255,0);
  noFill();
  circle(0,0,width);
  translate(planet2.x.x, planet2.x.y);
  line(0, 0, 10*vec.x,10*vec.y);

}
/*
Pseudo-random numbers: Linear Congruential Generator.
The script plots the values of the pseudo random number generator (PSRNG) making use of the finite structure visualizing it like a clock.
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const  m = 11; //defining the parameters.
const  a = 6;
const  c = 1;
const  s = 0;

let seed=s;  // initializing seed with the seed parameter s

const xu=-1;  // lower boundary for the coordinate system
const xo=m;  // upper boundary; doesn't make sense to go any further than the modulus
const defSet=xo-xu;  // the definiton set
const zero=0-xu;  // positionion the origin

function setup() {
  createCanvas(400, 400);

  cx=Math.floor(width/2);
  cy=Math.floor(height/2);

  ang=2*PI/m;
  d=min(height,width)-100;
  r=d/2;

  x=r*cos(ang*seed);
  y=r*sin(ang*seed);
}

function rnd(xx) { //the pseudo random number generator
  out=(a*xx + c) % m;
  return out;
}

function draw() {
  background(255,50); // old results fade away by setting the backgroud half transparent
  frameRate(5); // slowing down
  translate(cx,cy);
  drawClock();

  x0=x;
  y0=y;
  console.log(seed);
  x=r*cos(ang*seed); // transforming into polar coordinates
  y=r*sin(ang*seed);
  fill(255,0,0);
  circle(x,y,20); // plotting the results and connecting with the previous results
  line(x0,y0,x,y);
  seed=rnd(seed); // feeding back into the the function
}

function drawClock() {
  noFill();
  circle(0,0,d);

  fill(255,100,100);
  textSize(20);
  textAlign(CENTER, CENTER);
  for (i=0;i<m;i++) {
    xx=(r+30)*cos(ang*i);
    yy=(r+30)*sin(ang*i);
  text(i,xx,yy);
  }
}/*
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
}/*
Pseudo-random numbers: Linear Congruential Generator.
The script plots the function of the pseudo random number generator (PSRNG) and demonstrates how the algorithm feeds back its results into the PSRNG.
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const  m = 11; //defining the parameters.
const  a = 6;
const  c = 1;
const  s = 0;

let x=s;  // initializing x with the seed parameter s

const xu=-1;  // lower boundary for the coordinate system
const xo=m;  // upper boundary; doesn't make sense to go any further than the modulus
const defSet=xo-xu;  // the definiton set
const zero=0-xu;  // positionion the origin

const dx=0.1;  // the increment for drawing the function

let x0,y0 = 0;  // x0 and y0 are the variables to store the coordinates of the last iterations

function setup() {
  createCanvas(900, 900);

  hght=height-30;
  e=width/defSet; // e is the number of pixels for the unit, i.e. an interval for length 1

  lBound=zero*e; // scaling the lower and upper boundaries
  rBound=xo*e;

  translate(lBound,hght);  // translating the coordinate system
  drawSetup();  // drawing coordinate lines and plotting the function
}

function rnd(xx) { //the pseudo random number generator
  out=(a*xx + c) % m;
  return out;
}

function draw() { // we draw a horizontal line from a point on the function graph to the 45° line and a vertical line back onto the function graph to get the next point. The x-values of the points are our pseudo random numbers.
  frameRate(1); // slowing down so one can see the feedback
  translate(lBound,hght); // setting the origin
    y0=y;
    y=rnd(x);
    stroke(0,100,0);
    strokeWeight(4);
    line(x*e,-y*e,y*e,-y*e);
    line(x*e,-y0*e,x*e,-y*e);
    x=y;

}

function drawSetup() {

  stroke(100);
  line(-lBound,0,rBound,0);
  line(0,hght,0,-hght);
  line(-lBound,lBound,rBound,-rBound);
  for (i=0;i<xo;i++) {
      line(i*e,-10,i*e,10);
      text(i,i*e+5,15);
  }

  for (x=0;x<xo;x) { // drawing the function graph - not very economical for a linear function ...
    y=rnd(x);
    stroke(200,0,0)
    line(x0*e,-y0*e,x*e,-y*e);
    x0=x;
    y0=y;
    x=x+dx;
  }
  x=s;
}/* Oscillation: Lissajou curve. We now overlay two harmonic oscillations. Depending on the ratio of the two constants k1 and k2 the resulting figure becomes more and more complex.
Uses the oscillator class defined in oscillator.js
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let S1, S2;
let x1, x2,v1, v2;
let l;

function setup() {
  createCanvas(800, 800);
  x1 = createVector(0,50);
  x2 = createVector(50,0);
  v1 = createVector(10,0);
  v2 = createVector(0,10);
  m = 5;
  k1=20;
  k2=40;
  r=5;
  c='#ff0066'



  S1 = new Oscillator(x1, v1, m, k1, r, c);
  S2 = new Oscillator(x2, v2, m, k2, r, c);
}

function draw() {
    background(255,5);
    translate(width/2,height/2);

    S1.applyForce(S1.x);
    S1.update();

    S2.applyForce(S2.x);
    S2.update();

    circle(S1.x.x,300,5);
    circle(-300,S2.x.x,5)

    noStroke();
    fill(c);
    circle(S1.x.x, S2.x.x,5);



}
/*
Chaos: Logistic function.
The script plots parabola y=ax(1-x) and demonstrates how the algorithm feeds back its results. The point P where y(x)=x (i.e. the intersection with the 45° line) is an attractor for values of a<2.9. When we increase to 3 there are two attractors, further increase doubles the attractors to 4, 8, until the series becomes totally chaotic at values above 3.55.
See also https://editor.p5js.org/jbenno/sketches/AEi0wV8Ru and https://editor.p5js.org/jbenno/sketches/mgotVMiXn

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const  a=2.8; //defining the parameters.
const  t=0.3

const  xu=-0.5; // lower boundary for the coordinate system
const  xo=1.5; // upper boundary; doesn't make sense to go any further than the modulus
const  defSet=xo-xu; // the definiton set
const  zero=0-xu; // positioning the origin

const  dx=0.01; // the increment for drawing the function

let y=0;

function setup() {

  createCanvas(1500, 1500);
  hght=height*0.5;
  e=width/defSet; // e is the number of pixels for the unit, i.e. an interval for length 1

  lBound=zero*e; // scaling the lower and upper boundaries
  rBound=xo*e;

  translate(lBound,hght); // translating the coordinate system
  drawSetup();  // drawing coordinate lines and plotting the function

}

function logistic(A,xx) { // the logistic function
  yy=A*xx*(1-xx);
  return yy;
}

function draw() { // we draw a horizontal line from a point on the function graph to the 45° line and a vertical line back onto the function graph to get the next point. After a few iterations we can see the attractor.
  noLoop(); // we want to control the loop ourselves
  translate(lBound,hght);

  x=t;
  y=0;

  for (i=0;i<100;i++) { // the number of iterations is arbitrary
    y0=y; // we save the y of the past iteration so that we can draw a line to the next
    y=logistic(a,x);
      stroke(0,100,0); // drawing the line from the past to the 45° line and on to the next
      line(x*e,-y0*e,x*e,-y*e);
      line(x*e,-y*e,y*e,-y*e);
    x=y; // we just feed the result y(x) back into the function
  }
}

function drawSetup() {
  stroke(100);
  line(-lBound,0,rBound,0);
  line(0,-hght,0,hght);
  line(-lBound,lBound,rBound,-rBound);
  if (xu<1 && xo>1) {
    line(e,-10,e,10);
    textSize(25);
    text(1,e+10,25);
    text(t,t*e,25);
    text("A = "+a,1.2*e,-0.7*e);
  }

  for(x=xu;x<xo;x) {
    x0=x;
    y0=y;
    x=x+dx;
    y=logistic(a,x);
    stroke(200,0,0);
    line(e*x0,-e*y0,e*x,-e*y);

    xP=(a-1)/a
    circle (xP*e,-xP*e,5);
    text("P",xP*e,-xP*e-15);
  }
}/*
Chaos: Logistic function.
The script plots parabola y=ax(1-x) and demonstrates how the algorithm feeds back its results. The point P where y(x)=x (i.e. the intersection with the 45° line) is an attractor for values of a<2.9. When we increase to 3 there are two attractors, further increase doubles the attractors to 4, 8, until the series becomes totally chaotic at values above 3.55.
See also https://editor.p5js.org/jbenno/sketches/DZGZ6PZVM and https://editor.p5js.org/jbenno/sketches/mgotVMiXn

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const  a=3.5; //defining the parameters.
const  t=0.3

const  xu=-0.5; // lower boundary for the coordinate system
const  xo=1.5; // upper boundary; doesn't make sense to go any further than the modulus
const  defSet=xo-xu; // the definiton set
const  zero=0-xu; // positioning the origin

const  dx=0.01; // the increment for drawing the function

let y=0;

function setup() {
  createCanvas(1500, 1500);
  hght=height*0.5;
  e=width/defSet; // e is the number of pixels for the unit, i.e. an interval for length 1

  lBound=zero*e; // scaling the lower and upper boundaries
  rBound=xo*e;

  translate(lBound,hght); // translating the coordinate system
  drawSetup();  // drawing coordinate lines and plotting the function

}

function logistic(A,xx) { // the logistic function
  yy=A*xx*(1-xx);
  return yy;
}

function draw() {// to avoid the phasing-in we start iterating 2000 times and don't visualize the results. After this inital phase we draw a horizontal line from the point on the function graph to the 45° line and a vertical line back onto the function graph to get the next point. The lines show how values jump between the attractors. Additionally we draw the x-values of the attractors on the x-axis. For a>3.6 these give a chaotic sequence.

  noLoop(); // we want to control the loop ourselves
  translate(lBound,hght);

    x=t;
    y=0;
  for (i=0;i<2000;i++) { // the first 2000 iterations which we don't visualize
    y=logistic(a,x);
    x=y; // we just feed the result y(x) back into the function
  }
    for (i=2000;i<5000;i++) { // the results of these iterations are visualized
    y0=y; // we save the y of the past iteration so that we can draw a line to the next
    y=logistic(a,x);
      stroke(0,100,0); // drawing the line from the past to the 45° line and on to the next
      line(e*x,-10,e*x,10);
      line(x*e,-y0*e,x*e,-y*e);
      line(x*e,-y*e,y*e,-y*e);
    x=y;
  }
}

function drawSetup() {
  stroke(100);
  line(-lBound,0,rBound,0);
  line(0,-hght,0,hght);
  line(-lBound,lBound,rBound,-rBound);
  if (xu<1 && xo>1) {
    line(e,-10,e,10);
    textSize(25);
    text(1,e+10,25);
    text(t,t*e,25);
    text("A = "+a,1.2*e,-0.7*e);
  }

  for(x=xu;x<xo;x) {
    x0=x;
    y0=y;
    x=x+dx;
    y=logistic(a,x);
    stroke(200,0,0);
    line(e*x0,-e*y0,e*x,-e*y);

    xP=(a-1)/a
    circle (xP*e,-xP*e,5);
    text("P",xP*e,-xP*e-15);
  }
}/*
"Compass needles" following the magnetic mouse.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const  k=20;
const  e=15;
const  xu=8;
const  yu=8;

function setup() {
  createCanvas(400, 400);
  stepx=width/xu;
  stepy=height/yu;
}

function draw() {
  background(220);

  for (i=1;i<xu;i++) {
    for (j=1;j<yu;j++) {
     displayTriangle(i*stepx,j*stepy,e);
    }
  }
}

function displayTriangle(x,y,e) {
  xV=createVector(x,y);
  a=createVector(mouseX, mouseY);
  b=a.sub(xV);
  theta=b.heading();
  push();
  translate(x,y);
  rotate(theta);
  triangle(0 +e,0,0,0 +e/2,0,0-e/2);
  pop();
}
/* Machine Learning and Neural Networks: Multilayer Perceptron.
This demo builds a multilayer perceptron (MLP); layers are specified in the [sizes] array. It takes in data in the form of an array with the data records as its elements. The records are arrays with two elements: first is the input data (of same dimension as the first layer of the MLP), second is the output data (same dimension as the last layer of the MLP).

Joerg Blumtritt, https://github.com/jbenno/teaching/blob/master/README.md
*/

class Network {
  // the network is initialized with an array
  constructor(sizes, eta, epochs) {
        this.eta = eta;
        this.epochs = epochs;
		this.num_layers = sizes.length; // the number of layers is the number of elements in the sizes array
		this.sizes = sizes;
        this.neurons = []; // the neurons will be arrays with 5 elements

        for (let i = 0; i < this.num_layers; i++) { // building the layers
          let neurons = []
          for (let j=0; j<this.sizes[i]; j++) { // building the neurons in each layer
          	let b=randomGaussian(); // initialise the biases with random noise
			let w=[]; // because they have to match the inputs of each layer, the weights are arrays with the dimension of the previous layers
            if (i==0) {
              for (let k=0; k<this.sizes[0]; k++) { // the first layer has an equal number of weights in each neuron as neurons to match the dimension of the input data
                w[k]=randomGaussian(); // initialise the weights with random noise
              }
            } else { // each following layer has as many weights in each neuron as the previous layer has neurons
              for (let k=0; k<this.sizes[i-1]; k++) {
                w[k]=randomGaussian();
            }
            }
            neurons[j] = [b,w,0,0,0]; // 0 bias, 1 weights, 2 output, 3 error, 4 s
          }
          this.neurons[i] = neurons;
        }
  }

  activation(input, neuron) { // a neuron is activated by taking the sigmoid function of the weighted sum of inputs plus the bias
    let a = 0;
    for (let k in neuron[1]) {
      a += input[k] * neuron[1][k];
    }
    a += neuron[0];
    return sigmoid(a);
  }


  feedForward(record) { // running the network with a givin record of inputs
    let input = record[0]; // our data records have always two elements. The first is the input data, the second is the expected results (outputs)
    for (let i in this.neurons) {
      let output = [];
      for (let j in this.neurons[i]) {
        output[j] = this.activation(input, this.neurons[i][j]) // each cell gets the activiation function of its inputs as outputs
        this.neurons[i][j][2] = output[j]; // push outputs into neurons at position 2
      }
      input = output; // the inputs for the next layer are the outputs of the current
    }
  }

  backPropagate(record) { // calculating the gradient of the error function to adjust the weights
    for (let i1 in this.neurons) {
      let i = this.neurons.length - 1 - i1;
      for (let j in this.neurons[i]) {
          let error = 0;
          let output = this.neurons[i][j][2];
          let s = output * (1 - output); // the derivative of the output (using the derivative of the sigmoid function s' = s*(1-s))
          if (i1 == 0) {
            error = record[1][j] - output; // the error of the last layer is the difference of the expected outputs of our data record and the predicted output of our network
            this.neurons[i][j][3] = error; // pushing the errors and derivatives into the neurons
            this.neurons[i][j][4] = error * s;
          } else { // for the hidden layers
            for (let k in this.neurons[i+1]) {
             error += this.neurons[i+1][k][1][j] * this.neurons[i+1][k][4] // following the gradient using the weighted derivative of the next-upper layer
            }
            this.neurons[i][j][3] = error;// pushing the errors and derivatives into the neurons
            this.neurons[i][j][4] = this.neurons[i][j][3] * s
          }
      }
    }
  }

  updateWeights(record) { // updating the weights with the gradients derived in the backpropagation multiplied by the learning rate eta
	for (let i in this.neurons) {
      let input = [];
      if (i == 0) {input = record[0]} else {
        for (let k in this.neurons[i-1])
          {
            input[k] = this.neurons[i-1][k][2]
          }
      }
      for (let j in this.neurons[i]) {
        for (let k in input) {
          this.neurons[i][j][1][k] += this.eta * this.neurons[i][j][4] * input[k];
        }
        this.neurons[i][j][0] = this.eta * this.neurons[i][j][4]
      }
    }
  }

  trainNetwork(data) { // combining the three steps, iterating the functions by the number of epochs
    let d = shuffleArray(data);
    let e=0;
    let mean_sqerror = 0;
    while ( e < this.epochs) {
      let error = 0;
      let sq_error = 0;
      for (let r in d) {
        this.feedForward(d[r]);
        for (let k in d[r][1]) {
          error = d[r][1][k] - this.neurons[this.num_layers-1][k][2];
          sq_error += (error)**2; // calculating the squared errors for the predicted outputs
        }
        this.backPropagate(d[r]);
        this.updateWeights(d[r]);
      }
      sq_error +=sq_error; // summing the errors up for each epoch
      mean_sqerror = sq_error/e
      console.log(e, mean_sqerror);
      strokeWeight(2);
      point(e*width/epochs,height-100*mean_sqerror); // displaying the errors
      e++;
    }
  }

   display() { // draw the network topology; the stroke weight of the lines represents the weights, the stroke weight of the nodes represents the biases
    const mrgin=40;
    const wdth=width-2*mrgin;
    const stepx=wdth/this.num_layers;
    const hght=height-2*mrgin;
    const stepy=40;
    let x0,y0=0;

    for (let i in this.neurons) {
      let x=mrgin+i*stepx;
      for (let j in this.neurons[i]) {
        let y=mrgin+j*stepy;
        if (i>0){
          for (let k in this.neurons[i-1]) {
          y0=mrgin+k*stepy;
          stroke(0);
          strokeWeight(max(Math.floor(abs(this.neurons[i][j][1][k])),1));
          line(x0,y0,x,y);
          }
        }
        stroke(0);
        strokeWeight(max(10*Math.floor(abs(this.neurons[i][j][0])),1));
        fill(255);
        circle(x,y,15);
      }
      x0=x;
    }
  }

  graph(bound, increment) { // calculate the value of the network to display it as a function of its iputs; works for 2x1 data and with WebGL canvas

    let p = [];
    let z = 0;
    for (let x = -bound; x<bound; x+=increment) {
      for (let y = -bound; y<bound; y+=increment) {
        this.feedForward([[x,y],[0]]);
        z = this.neurons[this.neurons.length -1][0][2]
        p.push([x,y,z]);
      }
    }
  return p;
  }
}

function sigmoid(z) { // the sigmoid function used as activation threashold
	return 1/(1+exp(-z));
}

function shuffleArray(array) { // randomise the inputs
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}/* Machine Learning and Neural Networks: Multilayer Perceptron.
This demo builds a multilayer perceptron (MLP); layers are specified in the [sizes] array. It takes in data in the form of an array with the data records as its elements. The records are arrays with two elements: first is the input data (of same dimension as the first layer of the MLP), second is the output data (same dimension as the last layer of the MLP).

Joerg Blumtritt, https://github.com/jbenno/teaching/blob/master/README.md
*/

function setup() {
  createCanvas(600, 600);
  sizes = [2,2,1]; // Network topology: [0,1,2, ... , n] with layer 0 of the same dimension as the input; layers 1 through n-1 with arbitrary dimensions; layer n with same dimension as the output
  eta = 0.5; // the learning rate to avoid local minima; usually 0.5
  epochs =300; // how many iterations of training using the same data
  n = new Network(sizes,eta,epochs); // initialise the network with its parameters
  d = [];
  d = xor(); // the training data

  n.trainNetwork(d);
  console.log(n);
  n.display();
  p=n.graph(3, 0.05);
  unit = 100
}

function draw() {
  //draw3D(unit, frameCount*0.05); //draw a 3D graph of the network function
}

function draw3D(unit,i) {
  createCanvas(400,400,WEBGL);
  rotateX(1);
  rotateY(0.05);
  rotateZ(i);
  strokeWeight(1);
  stroke(0);
    line(-200,0,0,200,0,0);
    line(0,-200,0,0,200,0);
    line(0,0,-200,0,0,200);
    for (let q in p) {
      let x = p[q][0];
      let y = p[q][1];
      let z = p[q][2];
      if (z>0.5) {stroke(255,0,0)}
        point(unit*x,unit*y,unit*z);
      }
    strokeWeight(20);
    stroke(0,0,255);
      point(0,0,0);
      point(unit,unit,0);
    stroke(0,255,0);
      point(unit,0,0);
      point(0,unit,0);
}/*
Momentum and elastic collistion: Particles move and collide. Uses a particle system to run through the particles.

Uses a class to define the Newtonian particle.
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let B;
let x,v,g;
const heat=5;

function setup() {
  createCanvas(640, 640);

  B = new PS();
  g = createVector(0,0.2); //force

  for (let i=0; i<20;i++) {
  x = createVector(random(0,width),random(0,height)); // initial position
  v = createVector(random(-heat,heat),random(-heat,heat)); // inital velocity
  m=random(1,10); // mass
  c=color(random(0,255),random(0,255),random(0,255));
    B.addParticle(x, v, m, c)
  }

}

function draw() {
  background(255);
  B.run();
}

class Particle {
  constructor(x, v, m, c) {
    this.x = x;
     this.v = v;
     this.m = m;
     this.r = 25*m**0.33;
     this.c = c;
     this.a = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.m);
    this.a.add(f);
  }

  update() {
    this.v.add(this.a); // velocity gets changed by acceleration
    this.x.add(this.v); // position gets changed by velocity
    this.a.mult(0); // acceleration has to be reset (if we want dynamic acceleration we have to introduce an additional quantity, called the jerk.
  }

  display() {
    noStroke();
    fill(this.c);
    circle(this.x.x, this.x.y, this.r);
  }

  reflectAtEdges() {
    if (this.x.x > width - this.r) {
      this.x.x = width - this.r;
      this.v.x *= -1;
    } else if (this.x.x < this.r) {
      this.x.x = this.r;
      this.v.x *= -1;
    }
    if (this.x.y > height - this.r) {
      this.x.y = height - this.r;
      this.v.y *= -1;
    } else if (this.x.y < this.r) {
      this.y = this.r;
      this.v.y *= -1;
    }
  }

}

class PS {
  constructor() {
    this.particles = [];
  }

  addParticle(x, v, m, c) {
   this.particles.push(new Particle(x, v, m, c));
  }

  run() {
    for(let i in this.particles) {
      let p1 = this.particles[i];
      for (let j in this.particles) {
        if (j!==i) {
          let p2=this.particles[j];
          let s=p5.Vector.sub(p1.x, p2.x);
          let d=s.mag();
          let r=(p1.r + p2.r)/2

          if (d <=r) {
          let v1=p5.Vector.sub(p1.v,p5.Vector.sub(p1.x,p2.x).mult((2*p2.m/(p1.m+p2.m))*(p5.Vector.dot(p5.Vector.sub(p1.v,p2.v),p5.Vector.sub(p1.x,p2.x))/(d**2))));

          let v2=p5.Vector.sub(p2.v,p5.Vector.sub(p2.x,p1.x).mult((2*p1.m/(p1.m+p2.m))*(p5.Vector.dot(p5.Vector.sub(p2.v,p1.v),p5.Vector.sub(p2.x,p1.x))/(d**2))));

          p1.v=v1;
          p2.v=v2;
          p1.x.add(s.setMag(r-d));
          p2.x.add(s.setMag(d-r));
          }

        }
      }
      //p1.applyForce(g)
      p1.update();
      p1.display();
      p1.reflectAtEdges();
    }
  }

}
class Oscillator{
  constructor(x, v, m, k, r, c) {
    this.x=x;
    this.v=v;
    this.m=m;
    this.k=k;
    this.r=r;
    this.c=c;
    this.a= createVector(0, 0);
  }

 applyForce(d) {
    let f = p5.Vector.div(d, this.k * this.m);
    this.a.add(f);
  }

  update() {
    this.v.sub(this.a);
    this.x.add(this.v);
    this.a.mult(0);
  }

   display() {
    noStroke();
    fill(this.c);
    circle(this.x.x, this.x.y, this.r);
  }

}/* Oscillation: Harmonic oscillator. By generalizing Hooke's law to vectors we can visualize the equivalence of the harmonic motion with circular movement and make it plausible why harmonic oscillators describe a sine wave.
Uses the oscillator class defined in oscillator.js
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let S;
let x,v;

function setup() {
  createCanvas(800, 800);
  x = createVector(0,50);
  v = createVector(10,0);
  m = 5;
  k=5;
  r=5;
  c='#ff0066'

  S = new Oscillator(x, v, m, k, r, c);
}

function draw() {
    background(255,50);
    translate(width/2,height/2);

    S.applyForce(S.x);
    S.update();
    S.display();

}
/* Oscillation: The oscilloscope. Follows the demo at https://p5js.org/reference/#/p5.Oscillator

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const wave = 'square'; //'sine', 'triangle', 'sawtooth', 'square'
const uBound = 16000; // Frequency in Hz - the human ear hears between c. 20 Hz and 16,000 Hz

let osc, playing, freq, amp;

function setup() {
  let cnv = createCanvas(800, 200);
  cnv.mousePressed(playOscillator); // many browsers need sound to start user initiated.
  osc = new p5.Oscillator(wave);
  fft = new p5.FFT(); // Fast Fourier Transformation to analyze the wave's spectrum
}

function draw() {
  background(255)
  freq = constrain(map(mouseX, 0, width, 0, uBound), 0, uBound); // frequency is set by moving the mouse horizontally; maximum frequency as defined
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1); // amplitude respectively

  if (playing) {
    // smooth changing frequency and amplitude by 0.1 seconds to avoid sharp noises
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }


  noStroke();
  fill(255, 0, 255);


  let waveform = fft.waveform();
  let spectrum = fft.analyze();


  beginShape();
  for (let i = 0; i < 1024; i++){
    let x = map(i, 0, 1024, 0, width); // frequency in Hz
    let y = map( waveform[i], -1, 1, 0, height); // the vertical position on the wave
    let h = -height + map(spectrum[i], 0, 255, height, 0); // the amplitude in the spectrum

    noStroke();
    fill(255,0,255);
    rect(x, height, width / 1024, h ); // drawing the Fourier analysis

    noFill();
    stroke(20);
    vertex(x,y); // drawing the wave

  }
  endShape();

  text(round(freq)+'Hz', 10, 20);

}

function playOscillator() {
  osc.start();
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}



function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}class Pendulum{
  constructor(pivot, r, theta, b, c) {
    this.pivot=pivot;
    this.x=createVector();
    this.r=r;
    this.theta=theta;
    this.b=b;
    this.c=c;
    this.a=0;
    this.omega=0;
  }

 applyForce(force) {
    this.a = (-1 * force / this.r) * sin(this.theta);
  }

  update() {
    this.omega+=this.a;
    this.theta+=this.omega;

    this.x.set(this.r * sin(this.theta), this.r * cos(this.theta));
    this.x.add(this.pivot);

  }

   display() {
    noStroke();
    fill(this.c);
    circle(this.x.x, this.x.y, this.b);
  }

}/* Oscillation: The pendulum's oscillation is not harmonic because gravity's effect depends on the angle of the pendulum.
Uses the pendulum class defined in pendulum.js
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let S;
let x,v;

function setup() {
  createCanvas(800, 800);
  pivot = createVector(width/2,50);
  r=200;
  theta=PI/4;
  b=10;
  c='#ff0066'
  gravity=0.1;

  P = new Pendulum(pivot, r, theta, b, c); // define the pendulum, depending on its length r, the initial angle, the size of the circle b, and its colour
}

function draw() {
    background(255,50);

    P.applyForce(gravity);
    P.update();
    P.display();

}
/* Perlin Noise creates a smooth field of random values that e.g. can be used to create a synthetic landscape or a smooth, however random gradient of colours.
The code here takes three dimensional values. For two dimensions just set z to an arbitrary constant value (i.e. z=0). Output is a noise value from 0 to 1.
This example follows http://asserttrue.blogspot.com/2011/12/perlin-noise-in-javascript_31.html port of Perlin's original implementation.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/
const res=100;
const noiseF=10;

function setup() {
  createCanvas(700,700);
  rectMode(CENTER);
  noStroke();
  e=width/res;
  for (i=0; i<res;i++) {
    for (j=0;j<res;j++) {
      fill(map(PerlinNoise(noiseF*i/res,noiseF*j/res,0),0,1,0,255)); // fill each cell with the gray scale of its Perlin noise value;
      //fill(random(255)); // compare to the standard (Brownian) noise
      rect(i*e,j*e,e,e);
      }
  }



}

function PerlinNoise(x,y,z) {

   var p = new Array(512)
   var permutation = [ 151,160,137,91,90,15,
   131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
   190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
   88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
   77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
   102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
   135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
   5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
   223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
   129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
   251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
   49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
   138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
   ];
   for (var i=0; i < 256 ; i++)
 p[256+i] = p[i] = permutation[i];

      var X = Math.floor(x) & 255,                  // FIND UNIT CUBE THAT
          Y = Math.floor(y) & 255,                  // CONTAINS POINT.
          Z = Math.floor(z) & 255;
      x -= Math.floor(x);                                // FIND RELATIVE X,Y,Z
      y -= Math.floor(y);                                // OF POINT IN CUBE.
      z -= Math.floor(z);
      var    u = fade(x),                                // COMPUTE FADE CURVES
             v = fade(y),                                // FOR EACH OF X,Y,Z.
             w = fade(z);
      var A = p[X  ]+Y, AA = p[A]+Z, AB = p[A+1]+Z,      // HASH COORDINATES OF
          B = p[X+1]+Y, BA = p[B]+Z, BB = p[B+1]+Z;      // THE 8 CUBE CORNERS,

      return scl(lrp(w, lrp(v, lrp(u, grad(p[AA  ], x  , y  , z   ),  // AND ADD
                                     grad(p[BA  ], x-1, y  , z   )), // BLENDED
                             lrp(u, grad(p[AB  ], x  , y-1, z   ),  // RESULTS
                                     grad(p[BB  ], x-1, y-1, z   ))),// FROM  8
                     lrp(v, lrp(u, grad(p[AA+1], x  , y  , z-1 ),  // CORNERS
                                     grad(p[BA+1], x-1, y  , z-1 )), // OF CUBE
                             lrp(u, grad(p[AB+1], x  , y-1, z-1 ),
                                     grad(p[BB+1], x-1, y-1, z-1 )))));
   }
   function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
   function lrp( t, a, b) { return a + t * (b - a); }
   function grad(hash, x, y, z) {
      var h = hash & 15;                      // CONVERT LO 4 BITS OF HASH CODE
      var u = h<8 ? x : y,                 // INTO 12 GRADIENT DIRECTIONS.
             v = h<4 ? y : h==12||h==14 ? x : z;
      return ((h&1) == 0 ? u : -u) + ((h&2) == 0 ? v : -v);
   }
   function scl(n) { return (1 + n)/2; }
class Planet {
  constructor(x1, x2, v1, v2, m) {
    this.m = m;
    this.x = createVector(x1, x2);
    this.v = createVector(v1, v2);
    this.a = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.m);
    this.a.add(f);
  }

  update() {
    this.v.add(this.a);
    this.x.add(this.v);
    this.a.mult(0);
  }

}

class Sun {
  constructor(x1,x2,m) {
    this.x = createVector(x1, x2);
    this.m = m;
    this.G = 1;
  }

  attract(planet) {
    let FGrav = p5.Vector.sub(this.x, planet.x);
    let r = FGrav.mag();

    let strength = (this.G * this.m * planet.m) / (r**2);
    FGrav.setMag(strength);
    return FGrav;
  }
}

function displayPlanet(planet, color) {
    let p=planet;
    noStroke();
    fill(color)
    circle(p.x.x, p.x.y, 10*log(p.m));
  }


/* Polar coordinates: Transform polar coordinates to Cartesian coordinates. See also https://editor.p5js.org/jbenno/sketches/EPn7t7ZER

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let r;
let theta;
let dtheta = 0.1;

function setup() {
  createCanvas(800, 800);
  r = 100;
  theta = 0;
}

function draw() {
  background(255,50);

  x = r * cos(theta);
  y = r * sin(theta);

  fill('#ff0066');
  noStroke();

  translate(width / 2, height / 2); // put the origin in the center of the canvas
  circle(x, y, 5); // x and y are the transformation of a point at angel theta at radius r from the origin into cartesian coordinates

  theta += dtheta; // increase theta
}/* Polar coordinates: Transform polar coordinates to Cartesian coordinates. See also https://editor.p5js.org/jbenno/sketches/_VbkTRYXI

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let r;
let theta;
let dtheta = 0.1;

function setup() {
  createCanvas(800, 800);
  r = 100;
  theta = 0;
}

function draw() {
  background(255,50);

  x = r * cos(theta);
  y = r * sin(theta);

  fill('#ff0066');
  noStroke();

  translate(width / 2, height / 2);  // put the origin in the center of the canvas
  translate(x,y) // translate the cartesian into polar coordinates
  circle(10, 10, 5); // the circle has now fixed cartesian coordinates, however the coordinate system is rotated around the origin.

  theta += dtheta; // theta is increased
}/*
Laws of motion: Pong.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let B,P,v; // the vectors for the ball, the paddle, and the velocity

const d=50; // diameter of the ball
const w=100; // width and height of the paddle
const h=25;

const step=50; // how far the paddle moves with one key stroke

let score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  B=createVector(random(0, width),d); // start randomly from the top
  P=createVector(width/2, height-d);
  v=createVector(random(4,8),random(4,8)); // random velocity

}

function draw() {
  background(0);

  B=B.add(v); // update the ball's position by adding the velocity
  display(); // display ball and paddle
  reflectAtEdges(); // reflect at the edges of the canvas and of the paddle

}

function reflectAtEdges() {
  // edges of the canvas
    if (B.x > width - d/2) {
      B.x.x = width - d/2;
      v.x *= -1;
    } else if (B.x < d/2) {
      B.x = d/2;
      v.x *= -1;
    }
    if (B.y > height - d/2) {
      B.y = height - d/2;
      v.y *= -1;
    } else if (B.y < d/2) {
      B.y = d/2;
      v.y *= -1;
    }

  // the paddle
    if (( B.x > P.x &&
          B.x < P.x + w) &&
          (B.y + (d/2) >= P.y)) {
    v.mult(-1);
    score++;
    }
}

function keyPressed() {
  // paddle movements
    if (keyCode === LEFT_ARROW) {
    P.x -= step;
  } else if (keyCode === RIGHT_ARROW) {
    P.x += step;
  }
}

function display() {

  // display paddle
  fill('#ff66cc');
  noStroke();
  rect(P.x, P.y, w, h);

  // display ball
  fill('#00ffff');
  noStroke();
  circle(B.x, B.y, d);

  // write score
  fill('#ccffcc');
  textSize(40);
  text(score, width/2, 50);
}
/*
Very simple random walker demo.
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
	createCanvas(600, 400);
	background(255);
  x=0;
  y=0;

}

function draw() {
  //background(255);
  translate(width/2,height/2);
  point(x,y);
  x=x+random(-2,2);
  y=y+random(-2,2);

}/*
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
}/*
Recursion: Pythagoras tree.
On the edge of a square, two squares with edge-length deminished by 1/sqrt(2) are attached according to Pythagoras' theorem.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(400, 400);
  d=50
  translate(width/2,height-d)
  Pythagoras(d);
}

function Pythagoras(d) {
  rectMode(CENTER);
  noFill();
  if (d<1) {return 0} else { //avoid infinite recursion by stopping when d arrives at 1 pixel
    rect(0,0,-d,-d);
    push();
      translate(d/2,-d);
      rotate(PI/4);
      Pythagoras(d/(sqrt(2)));
    pop();
    push();
      translate(-d/2,-d);
      rotate(-PI/4);
      Pythagoras(d/(sqrt(2)));
    pop();

  }
}
/*
Recursion: Barycentric division.
The three medians of a triangle meet in the centroid. They cut the triangle into three smaller triangles. We take each of the three and repeate the process recursively.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(400, 400);
  translate(width/2,height/2);
  d=(width-40)/2; // length of the first edge

  a=createVector(-d,d); // the three corners of the triangle
  b=createVector(d,d);
  c=createVector(0,-d/sqrt(2));

  BarycDiv(a,b,c,d);
}

function BarycDiv(a,b,c,d){
  let s=d/2;
  if (s<1) {return 0} else { //avoid infinite recursion by stopping when d arrives at 1 pixel
    let o=p5.Vector.add(a,b).add(c).div(3); // calculate the centroid
    noFill();
    triangle(a.x,a.y,b.x,b.y,c.x,c.y);
    BarycDiv(a,b,o,s); // call the function with one of the corners replaced by the centroid
    BarycDiv(a,o,c,s);
    BarycDiv(o,b,c,s);
  }
}
/*
Recursion: Calling the function to draw a circle within itself, halfing the radius and trasposing by half the radius.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(700,500);
}

function draw() {
  background(255);
  drawCircle(width/2,height/2,400);
}

function drawCircle(x,y,r) {
  stroke(0);
  noFill();
  circle(x, y, r);
  if(r > 2) {
    drawCircle(x + r/2, y, r/2);
    drawCircle(x - r/2, y, r/2);
  }
}
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
/* Oscillation: The rose figure. If the oscillation swings in two dimensions we get more complex figures. The rose curve or rosette is described by a pendulum swinging above a rotating plane. This can e.g. be observed with Foucault's pendulum.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(800, 800);
  theta=0;
  a=100;
  n=3;
  d=5;
  k=n/d;
  dtheta=0.02;

}

function draw() {
  background(255,5);
  translate(width/2,height/2);

  r=a*sin(k*theta);

  S=createVector( r*cos(theta), r*sin(theta) );

  noStroke()
  fill('#ff0066');
  circle(S.x,S.y,5);

  theta=theta+dtheta;
}
/*
Complex numbers and functions of complex numbers. In complex.js we define a class Complex to have all the necessary algebra. Multiplication with complex numbers rotates and stretches the plane.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(400, 400);
    a = new Complex(1,0);
    b = new Complex(0.999*cos(PI/12),1.1*sin(PI/12));
    xx=0;
    t=0;
    wdth = width/2;
    hght = height/2;
    units = 100;
}


function calc(xx) {
  //a = expc(xx);
  a = b.multc(xx)
  x = units * a.re;
  y = - units * a.im;
}

function draw() {
  //background(255);
  //noLoop();
  calc(a);
  translate(wdth,hght);
    stroke(200);
    line(-wdth,0,wdth,0);
    line(0,-hght,0,height);
    noFill();
    ellipse(0,0,2*units,2*units);
    stroke(0);
    line(0,0,x,y);
    ellipse(x,y,2,2);
    //t=t+PI/12;
}
/*
Recursion: Sierpinski tetrahedron. Divide the tetrahedron by taking half of the edge it into five congruent tetrahedra. Repeate with each of the three that share a corner with the original tetrahedron.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(700, 700,WEBGL);
  s=300; // length of the first edge
  ang=0;
}

function draw() {
  background(255);
  rotateY(ang); // rotate the graph to show its 3d shape
  rotateZ(ang/5);
  rotateX(ang/10);
  if (ang<4*PI) {
  ang+=0.1; // increment of the rotation
  }
  Sierpinski(s); //call of the recursinve function
}

function Sierpinski(s){
  if (s<5) {return 0} else { //avoid infinite recursion by stopping when d arrives at 1 pixel
    s=s/2; // half the edge
    cosPI6=cos(PI/6);
    let rot = (s)/cosPI6; //the length of the
    a=createVector(0,-s,0);
    b=createVector(0,s,rot);
    c=createVector(s,s,-rot);
    d=createVector(-s,s,-rot);
    //Create a tetrahedron from three triangles
    noFill();
    beginShape(TRIANGLES);
        vertex(a.x,a.y,a.z);
        vertex(b.x,b.y,b.z);
        vertex(c.x,c.y,c.z);
    endShape();

    beginShape(TRIANGLES);
        vertex(a.x,a.y,a.z);
        vertex(b.x,b.y,b.z);
        vertex(d.x,d.y,d.z);
    endShape();

    beginShape(TRIANGLES);
        vertex(a.x,a.y,a.z);
        vertex(c.x,c.y,c.z);
        vertex(d.x,d.y,d.z);
    endShape();

    beginShape(TRIANGLES);
        vertex(b.x,b.y,b.z);
        vertex(c.x,c.y,c.z);
        vertex(d.x,d.y,d.z);
    endShape();

    let s2=s/2; // the centres of the four small tetrahedra are transposed by s/4
    let rot2 = (s2)/cosPI6;

push(); // repeate the process for each of the four remainders
  translate(0,-s2,0);
  Sierpinski(s);
pop();
push();
  translate(0,s2,rot2);
  Sierpinski(s);
pop();
push();
  translate(s2,s2,-rot2);
  Sierpinski(s);
pop();
push();
  translate(-s2,s2,-rot2);
  Sierpinski(s);
pop();

  }
}
/*
Recursion: Sierpinski triangle. Divide an equilateral triangle by taking half of the edge it into four congruent triangles. Repeate with each of the three that share a corner with the original triangle.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
  createCanvas(700, 700);
  translate(width/2,height/2);
  d=(width-40)/2; // length of the first edge
  o=createVector(0,0);
  Sierpinski(d);
}

function Sierpinski(d){
  if (d<1) {return 0} else { //avoid infinite recursion by stopping when d arrives at 1 pixel
    a=createVector(-d,d); // calculate the three corners
    b=createVector(d,d);
    c=createVector(0,-d/sqrt(2));
    noFill();
    triangle(a.x,a.y,b.x,b.y,c.x,c.y);
    d=d/2; // half the edge
    push(); // repeate the process for each of the three remainders
      translate(0,-d/sqrt(2));
      Sierpinski(d);
    pop();
    push();
      translate(-d,d);
      Sierpinski(d);
    pop();
      push();
      translate(d,d);
      Sierpinski(d);
    pop();
  }
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
class Spring{
  constructor(m, k, d) {
    this.m=m;
    this.k=k;
    this.d=d;
    this.v=0;
    this.a=0;
  }

 applyForce(d) { // Hooke's law: F=-kd
    let f = d/(this.k * this.m);
    this.a = this.a + f;
  }

  update() {
    this.v=this.v-this.a;
    this.d=this.d+this.v;
    this.a=0;
  }

}/* Oscillation: Simple harmonic oscillator; a spring moving according to Hook's law. The spring is defined as a class.
Uses the spring class defined in spring.js
Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

let S;

function setup() {
  createCanvas(800, 400);
  S = new Spring(5,5,50); // mass, stiffness, displacement
}

function draw() {
    background(255,75);

    S.applyForce(S.d);
    S.update();

    translate(width/2,height/2);
    let x=0;
    let y=S.d;
    fill(255, 127,100);
    circle(x, y, 5);

    // x=x+5; //try adding horizontal movement to make the sine funktion visible

}
/*
Autonomous agents: A boid-class for an agent with steering behaviour as described in Reynolds, Craig W. “Steering Behaviors For Autonomous Characters.” Proceedings of Game Developers Conference, 1999, 21.https://www.red3d.com/cwr/steer/gdc99/

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const d = 25; // defines the arriving perimeter and the distance to steer away from the edges.
let B;

function setup() {
  createCanvas(640, 360);
  B = new Boid(createVector(30,30),createVector(1,0),3,10,50,color(255,0,0));
}

function draw() {
  background(255);

  let mouse = createVector(constrain(mouseX,d,width-d), constrain(mouseY,d,height-d));

  noFill();
  stroke(0);
  strokeWeight(2);
  circle(mouse.x, mouse.y, 2*d); // the circle marks the arriving perimeter


  B.steer(mouse);
  B.run();
}

// Class declaration

class Boid {
  constructor(x, v, vmax, fmax,m , c) {
    this.x = x;
     this.v = v;
     this.m = m;
     this.r = max(m**0.33,2);
     this.c = c;
     this.a = createVector(0, 0);
     this.dead=false;
     this.vmax = vmax;
     this.fmax = fmax;
  }

  update() {
    this.v.add(this.a);
    this.v.limit(this.vmax);
    this.x.add(this.v);
    this.a.mult(0);
  }

   applyForce(force) {
    let f = p5.Vector.div(force, this.m);
    this.a.add(f);
  }

  steer(target) {
    var desired = p5.Vector.sub(target, this.x); // vector which points from position to the target
    let d = desired.mag(); // distance from target
    if (d < 200) { // if the boid comes close it should slow down, otherwise we limit its velocity to the maximum velocity vmax
      let m = map(d, 0, 100, 0, this.vmax);
      desired.setMag(m);
    } else {
      desired.setMag(this.vmax);
    }

    var steer = p5.Vector.sub(desired, this.v); //acceleration vector which changes the velocity
    steer.limit(this.fmax); // limit the acceleration to maximum steering force
    this.applyForce(steer);
  }

  reflectAtEdges() { // now we don't want the boid to reflect but to steer around if it comes close to the edge
   let desired = null;

   if (this.x.x > width - d/2) {
      desired = createVector(-this.vmax, this.v.y);
    } else if (this.x.x < d/2) {
      desired = createVector(this.vmax, this.v.y);
    }
    if (this.x.y > height - d/2) {
      desired = createVector(this.v.x, -this.vmax);
    } else if (this.x.y < d/2) {
      desired = createVector(this.v.x, this.vmax);
    }

    if (desired !== null) {
     desired.normalize();
     desired.mult(this.vmax);
      let steer = p5.Vector.sub(desired, this.v);
      steer.limit(this.fmax);
      this.applyForce(steer);
    }
  }

  display() {
    // Draw a triangle rotated in the direction of velocity
    let theta = this.v.heading() + PI / 2;
    fill(255,0,0);
    stroke(0);
    strokeWeight(1);
    push();
      translate(this.x.x, this.x.y);
      rotate(theta);
      beginShape();
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
      endShape(CLOSE);
    pop();
  }

  run() {
    this.update();
    this.display();
    this.reflectAtEdges();
  }
}
/*
Autonomous agents: A boid-class for an agent with steering following a flowfield as described in Reynolds, Craig W. “Steering Behaviors For Autonomous Characters.” Proceedings of Game Developers Conference, 1999, 21.https://www.red3d.com/cwr/steer/gdc99/

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const d = 0; // defines the arriving perimeter and the distance to steer away from the edges.
const res=20;
let boids;

function setup() {
  createCanvas(640, 360);

  col=width/res;
  rws=height/res;
  vf=[];
  boids=[];

  noiseSeed(random(10000));
   let xoff = 0;
      let yoff = 0;
  for (let i=0;i<rws;i++) {
    vf[i]=new Array(col);
    for (let j=0;j<col;j++) {
      let angle = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
     vf[i][j]=p5.Vector.fromAngle(angle).mult(20);
      yoff += 0.1;
      xoff += 0.1;
    }
  }
  for (let i = 0; i < 120; i++) {
    boids.push(new Boid(createVector(random(width), random(0,height)),createVector(-1,0), random(2, 5), random(0.1, 0.5), 50,color(255,0,0)));
  }
}

function draw() {
  background(255);

  for (let i = 0; i < boids.length; i++) {
    mouse = lookup(boids[i].x);
    boids[i].steer(mouse);
    boids[i].run();
  }

  for (let i=0;i<rws;i++) {
    for (let j=0;j<col;j++) {
      x=createVector((j+0.5)*res,(i+0.5)*res);
      drawVector(x,vf[i][j],color(100));
    }
   }
}

function lookup(lookup) {
  let column = constrain(floor(lookup.x /res), 0, col -1);
  let row = constrain(floor(lookup.y /res), 0, rws -1);
  return vf[row][column].copy();
}

function drawVector(o,v,c) { // a small function to draw a vector v as an arroww. The input vector o is the starting point - can be the origin, however sometimes we want to start drawing the vector at the tip of another one.

  const ang=PI/6; // angle for arrowhead which we draw by rotating the vector v a bit clockwise and counter clockwise.
  let cl,cr;

  cl=createVector(v.x*cos(ang)+v.y*sin(ang),-v.x*sin(ang)+v.y*cos(ang)).setMag(10);
  cl=createVector(v.x-cl.x, v.y-cl.y);
  cr=createVector(v.x*cos(-ang)+v.y*sin(-ang),-v.x*sin(-ang)+v.y*cos(-ang)).setMag(10);
  cr=createVector(v.x-cr.x, v.y-cr.y);
  stroke(c);
  line(o.x,o.y,o.x+v.x,o.y+v.y);
  line(o.x+v.x,o.y+v.y,o.x+cl.x,o.y+cl.y);
  line(o.x+v.x,o.y+v.y,o.x+cr.x,o.y+cr.y);
}

// Class declaration

class Boid {
  constructor(x, v, vmax, fmax,m , c) {
    this.x = x;
     this.v = v;
     this.m = m;
     this.r = max(m**0.33,2);
     this.c = c;
     this.a = createVector(0, 0);
     this.dead=false;
     this.vmax = vmax;
     this.fmax = fmax;
  }

  update() {
    this.v.add(this.a);
    this.v.limit(this.vmax);
    this.x.add(this.v);
    this.a.mult(0);
  }

   applyForce(force) {
    let f = p5.Vector.div(force, this.m);
    this.a.add(f);
  }

  steer(target) {
    var desired = target // p5.Vector.sub(target, this.x); // we changed the desired to be the vector of the flow field directly
    let d = desired.mag(); // distance from target
    if (d < 200) { // if the boid comes close it should slow down, otherwise we limit its velocity to the maximum velocity vmax
      let m = map(d, 0, 100, 0, this.vmax);
      desired.setMag(m);
    } else {
      desired.setMag(this.vmax);
    }

    var steer = p5.Vector.sub(desired, this.v); //acceleration vector which changes the velocity
    steer.limit(this.fmax); // limit the acceleration to maximum steering force
    this.applyForce(steer);
  }

/*  reflectAtEdges() { // now we don't want the boid to reflect but to steer around if it comes close to the edge
   let desired = null;

   if (this.x.x > width - d/2) {
      desired = createVector(-this.vmax, this.v.y);
    } else if (this.x.x < d/2) {
      desired = createVector(this.vmax, this.v.y);
    }
    if (this.x.y > height - d/2) {
      desired = createVector(this.v.x, -this.vmax);
    } else if (this.x.y < d/2) {
      desired = createVector(this.v.x, this.vmax);
    }

    if (desired !== null) {
     desired.normalize();
     desired.mult(this.vmax);
      let steer = p5.Vector.sub(desired, this.v);
      steer.limit(this.fmax);
      this.applyForce(steer);
    }
  }*/
  reflectAtEdges() {//we change the geometry of the canvas from a plane with edges to a torus where the upper edge and the lower edge get wrapped around and glued together, same for left and right
    if (this.x.x < -this.r) this.x.x = width + this.r;
    if (this.x.y < -this.r) this.x.y = height + this.r;
    if (this.x.x > width + this.r) this.x.x = -this.r;
    if (this.x.y > height + this.r) this.x.y = -this.r;
  }

  display() {
    // Draw a triangle rotated in the direction of velocity
    let theta = this.v.heading() + PI / 2;
    fill(255,0,0);
    stroke(0);
    strokeWeight(1);
    push();
      translate(this.x.x, this.x.y);
      rotate(theta);
      beginShape();
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
      endShape(CLOSE);
    pop();
  }

  run() {
    this.update();
    this.display();
    this.reflectAtEdges();
  }
}
html, body {
  margin: 0;
  padding: 0;
}
canvas {
  display: block;
}
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
}const res=20;


function setup() {
  createCanvas(400, 400);

  col=width/res;
  rws=height/res;
  vf=[];

  noiseSeed(random(10000));
   let xoff = 0;
      let yoff = 0;
  for (let i=0;i<rws;i++) {
    vf[i]=new Array(col);
    for (let j=0;j<col;j++) {
      let angle = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
     vf[i][j]=p5.Vector.fromAngle(angle).mult(30);
      yoff += 0.1;
      xoff += 0.1;
    }
  }
}

function draw() {
  background(220);

   for (let i=0;i<rws;i++) {
    for (let j=0;j<col;j++) {
      x=createVector((j+0.5)*res,(i+0.5)*res);
      drawVector(x,vf[i][j],color(0));
      line(j*res,0,j*res,width);
    }
   line(0,i*res,height,i*res);
   }
  pos=createVector(mouseX,mouseY);
  drawVector(pos,lookup(pos),color(255,0,0));
}

function lookup(lookup) {
  let column = constrain(floor(lookup.x /res), 0, col -1);
  let row = constrain(floor(lookup.y /res), 0, rws -1);
  return vf[row][column].copy();
}

function drawVector(o,v,c) { // a small function to draw a vector v as an arroww. The input vector o is the starting point - can be the origin, however sometimes we want to start drawing the vector at the tip of another one.

  const ang=PI/6; // angle for arrowhead which we draw by rotating the vector v a bit clockwise and counter clockwise.
  let cl,cr;

  cl=createVector(v.x*cos(ang)+v.y*sin(ang),-v.x*sin(ang)+v.y*cos(ang)).setMag(10);
  cl=createVector(v.x-cl.x, v.y-cl.y);
  cr=createVector(v.x*cos(-ang)+v.y*sin(-ang),-v.x*sin(-ang)+v.y*cos(-ang)).setMag(10);
  cr=createVector(v.x-cr.x, v.y-cr.y);
  stroke(c);
  line(o.x,o.y,o.x+v.x,o.y+v.y);
  line(o.x+v.x,o.y+v.y,o.x+cl.x,o.y+cl.y);
  line(o.x+v.x,o.y+v.y,o.x+cr.x,o.y+cr.y);

}
/*
Brownian motion (blue) vs. movment with Perlin noise (red)

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

function setup() {
	createCanvas(600, 400);
	background(255);
  x1=width/2;
  y1=height/2;
  x2=width/2;
  y2=height/2;
  xoff=random(1000);
  yoff=random(1000);
  t=0;
  dt=0.01;
  a=5;

}

function draw() {
  //background(255);
  //translate(width/2,height/2);

  stroke(255,0,0);
  x10=x1;
  y10=y1;
  x1=noise(xoff)*width;
  y1=noise(yoff)*height;
    line(x10,y10,x1,y1);
  xoff+=dt;
  yoff+=dt;

  stroke(0,0,255);
    x20=x2;
    y20=y2;
    x2+=random(-a,a);
    y2+=random(-a,a);
   line(x20,y20,x2,y2);
}
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
```
