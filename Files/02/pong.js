/*
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
