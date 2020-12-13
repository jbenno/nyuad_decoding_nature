/* For the cellular automaton CA(s,t), t is now a trite, a number of eight digits to the base 3, i.e. with values 0,1,2; s is the cell width. The state of the next generaton is now determined by the average value of the cell and its direct neighbours. 0 will be white, 1 grey, 2 black

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
}