/* Machine Learning and Neural Networks: Hopfield Network. 


Joerg Blumtritt, https://github.com/jbenno/teaching/blob/master/README.md
*/

function setup() {
  createCanvas(600, 600);
  n = new Network(pattern3, 0);
  console.log(n);
  p = [[1,1,1,1,1,],[0,0,1,0,0,],[0,0,1,0,0,],[0,0,1,0,0,],[0,0,1,0,0,]];
  //n.updateNodes(p);
  n.evaluate(p);
}