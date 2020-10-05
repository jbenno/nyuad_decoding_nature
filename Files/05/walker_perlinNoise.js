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
