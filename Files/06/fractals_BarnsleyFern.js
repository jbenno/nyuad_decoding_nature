/*
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
