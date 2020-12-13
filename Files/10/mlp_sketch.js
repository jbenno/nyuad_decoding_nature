/* Machine Learning and Neural Networks: Multilayer Perceptron. 
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
}