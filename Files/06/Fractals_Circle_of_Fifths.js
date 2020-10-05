/*
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
}