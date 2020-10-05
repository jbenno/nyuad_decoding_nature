/*
Fractals: In baroque music there are several forms which show fractal structure. The fugue is one, the canon is another. The example demonstrates the self-similarity in the temporal structure of the quite famous canon in D by Pachelbel.

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

//Doen't run as well in an Apple Safari Browser


function setup() {
  createCanvas(700, 300);
  fft = new p5.FFT();
  
 basso=[50, 50, 45, 45, 47, 47, 43, 43, 44, 44, 38, 38, 44, 44, 46, 46, 50, 50, 45, 45, 47, 47, 43, 43, 44, 44, 38, 38, 44, 44, 46, 46, 50, 50, 45, 45, 47, 47, 43, 43, 44, 44, 38, 38, 44, 44, 46, 46, 50, 50, 45, 45, 47, 47, 43, 43, 44, 44, 38, 38, 44, 44, 46, 46]; // the Basso Continuo
  
  violino=[78, 78, 76, 76, 74, 74, 73, 73, 71, 71, 69, 69, 71, 71, 73, 73, 74, 74, 73, 73, 71, 71, 69, 69, 67, 67, 66, 66, 67, 67, 64, 64, 62, 66, 69, 67, 66, 62, 66, 64, 62, 61, 62, 69, 67, 71, 69, 67, 66, 62, 64, 73, 74, 78, 81, 69, 71, 67, 69, 66, 62, 74, 74, 74]; // the three violine voices are actually the same, just shifted by two bars.

i=0;
s=0;
v=[];
b=new Canon(basso,0); // the basso
}

function draw() {
  background(255);
  frameRate(2);
  b.playCanon(i);
  if (i%16 ==0 && s<16) { // every two bars another voice is added. After four voices the key is shifted up one octave.
    o=floor(s/4);
    v[s]=new Canon(violino,o);
    s++;
  }
  for (j=0; j<v.length;j++) {
    v[j].playCanon(i+j*16) // the voices are played shifted in time by 8 beats
  }

  oscilloscope();
  text('Bar ' + floor(i%64/8), 50,50);
  i++;
}

function midi2Hz(note) { // converts the midi values into frequency in Hz
  let Hz=(2**((note-69)/12)*440);
  return Hz;
}

class Canon { // the class opens a new oscillator for each voice and runs through the score. It can shift o-octaves.
  constructor(voice, o) {
    this.voice=voice;
    this.o=o;
    this.osc = new p5.Oscillator();
    
    this.osc.amp(0);
    this.osc.start();
  }
  
  playCanon(i) {
    let j=i%64; // cycle through the 64 beats of the piece
    let note=midi2Hz(this.voice[j]+12*this.o); // read out the score and translate it into Hz
    this.osc.amp(1/(1.1*this.o+1)); // set higher pitches to lower volume
    this.osc.freq(note, 0.1);
  }
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
    rect(x*3, height, width / 1024, h ); // drawing the Fourier analysis

    noFill();
    stroke(20);
    vertex(x,y); // drawing the wave
    
  }
  endShape();
}