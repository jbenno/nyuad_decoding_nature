const res=20;


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
