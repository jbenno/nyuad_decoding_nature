/* Oscillation: The oscilloscope. Follows the demo at https://p5js.org/reference/#/p5.Oscillator

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

const wave = 'square'; //'sine', 'triangle', 'sawtooth', 'square' 
const uBound = 16000; // Frequency in Hz - the human ear hears between c. 20 Hz and 16,000 Hz

let osc, playing, freq, amp;

function setup() {
  let cnv = createCanvas(800, 200);
  cnv.mousePressed(playOscillator); // many browsers need sound to start user initiated.
  osc = new p5.Oscillator(wave);
  fft = new p5.FFT(); // Fast Fourier Transformation to analyze the wave's spectrum
}

function draw() {
  background(255)
  freq = constrain(map(mouseX, 0, width, 0, uBound), 0, uBound); // frequency is set by moving the mouse horizontally; maximum frequency as defined
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1); // amplitude respectively

  if (playing) {
    // smooth changing frequency and amplitude by 0.1 seconds to avoid sharp noises
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
  
 
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

  text(round(freq)+'Hz', 10, 20);

}

function playOscillator() {
  osc.start();
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}



function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}