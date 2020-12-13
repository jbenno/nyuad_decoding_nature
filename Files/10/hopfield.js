/* 

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
}