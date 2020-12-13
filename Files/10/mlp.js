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
}