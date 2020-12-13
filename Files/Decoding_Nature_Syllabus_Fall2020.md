# Decoding Nature
### NYU Abu Dhabi, Interactive Media
### Fall 2020, IM-UH 2318
#### Joerg Blumtritt

> Beauty is the first test: there is no permanent place in this world for ugly mathematics.  
> Godfrey Harold Hardy

Mapping our world into 'laws of nature', detecting patterns and discovering the 'logic' behind our experience is is the core of science. The computer is for us what the microscope or the telescope had been to the researchers at the dawn of modernity: an enhancement of our mind and senses to understand and simulate these laws. With algorithms and code we can not only build models of the world but play with imaginary alternatives by changing the rules.

We will explore how basic laws of nature can be expressed in code, how complexity unfolds out of very simple algorithms, and how to play with computational models of biology and of our mind.

This is a production-based course that involves programming work both inside and outside of the classroom. During class, code examples will be presented, written, and reviewed. Examples will iteratively build off lessons learned in preceding classes and students will be encouraged to write code, ask questions, and engage in both creative and technical discussion.

> Archimedes will be remembered when Aeschylus is forgotten, because languages die and mathematical ideas do not.  
> Godfrey Harold Hardy

__The lectures will be recorded and made available to students asynchronously. Student presentations and student lead lectures can also be submitted as recordings. For discussions and questions, we will use Zoom as well as the forum function in Classes so that everybody can participate independently from their connectivity and time zone.__

### Readings:
- Shiffmann, Daniel. The Nature of Code, 2019. https://natureofcode.com/book/.
- Flake, Gary William. The Computational Beauty of Nature: Computer Explorations of Fractals, Chaos, Complex Systems, and Adaptation. Reprint edition. Cambridge, Mass.: A Bradford Book, 2000.

## Schedule

### Part I: Mechanics
#### Week 1 - [Introduction](https://github.com/jbenno/nyuad_decoding_nature/wiki/01)
- Generative art and a few words on interactive web pages

#### Week 2 - [Forces and Laws of Motion](https://github.com/jbenno/nyuad_decoding_nature/wiki/02)
- Basics of movement (physical and on the screen)

#### Week 3 - [Oscillation](https://github.com/jbenno/nyuad_decoding_nature/wiki/03)
- Waves and cycles 

### Part II: Complexity
#### Week 4 and 5 - [Particle Systems](https://github.com/jbenno/nyuad_decoding_nature/wiki/04) and [Autonomous Agents](https://github.com/jbenno/nyuad_decoding_nature/wiki/05)
- Emergent behavior
- Targeted movements

#### Week 6 and 7 - [Fractals](https://github.com/jbenno/nyuad_decoding_nature/wiki/06)
- Complex numbers
- Generative complexity in patterns

*Fall break*

#### Week 8 and 9 - [Cellular Automata](https://github.com/jbenno/nyuad_decoding_nature/wiki/08)
- Generative complexity in dynamics
- Simulation

#### Week 10 and 11 [Machine Learning](https://github.com/jbenno/nyuad_decoding_nature/wiki/10) and [Neural Networks](https://github.com/jbenno/nyuad_decoding_nature/wiki/11)
- Genetic algorithms
- Pattern recognition

#### Week 12 to 14 - [Final Project](https://github.com/jbenno/nyuad_decoding_nature/wiki/12)

### Archive of previous courses of 'Decoding Nature'
- [Fall 2019](https://github.com/jbenno/nyuad_decoding_nature/blob/2019/README.md)
- [Fall 2018](http://decodingnature.nyuadim.com/syllabus/)

# Detailed Schedule

# Introduction
[Video recordings of the lecture: Video 1](https://stream.nyu.edu/media/Decoding+Nature+01a/1_2yo0n1hr)  
[Video recordings of the lecture: Video 2](https://stream.nyu.edu/media/1_8x6its2g)  
[Video recordings of the lecture: Video 3](https://stream.nyu.edu/media/1_jj44opnu)  



### Readings
- Rucker, Rudy. “The Wolfram Physics Project.” Rudy Rucker’s Blog (blog). Accessed April 24, 2020. http://www.rudyrucker.com/blog/2020/04/22/the-wolfram-physics-project/.

## Studio
All code files can be found here: https://github.com/jbenno/nyuad_decoding_nature/tree/master/Files/01

*Setting up things:*

- Basic html, JavaScript, and p5.js (resp. Processing)
- https://editor.p5js.org

#### The first example
- [Recreating a work by Saskia Freeke](https://editor.p5js.org/jbenno/sketches/B_wPKiXSP) as seen on the [kadenze-blog](https://blog.kadenze.com/creative-technology/p5-js-crash-course-recreate-art-you-love/)

#### Pseudo random number generators and chaotic feedback processes. Some examples:
  - [Simple Linear Congruential Generator](https://editor.p5js.org/jbenno/sketches/psZ8-9qbN)
  - [Demo for the chaotic feedback process in the LGC](https://editor.p5js.org/jbenno/sketches/vhjMDdsu2)
  - [Illustrating the chaotic sequence of the LGC on a clock face](https://editor.p5js.org/jbenno/sketches/q_OFLA6ho)
  - [xorshift+](https://editor.p5js.org/jbenno/sketches/CAmqo7Qtw)
- Application: Random walks
  - [Simplest code example](https://editor.p5js.org/jbenno/sketches/XM_uCOnIg)
  - [Random walker with a custom pseudo random number generator (PRNG) instead of the JavaScript random() function.](https://editor.p5js.org/jbenno/sketches/yBuptV3k9)
#### Chaos and cryptography: Elliptic curves
- [Elliptic curve chaos demo](https://editor.p5js.org/jbenno/sketches/yjjynz_9K)
#### Chaos: The logistic map
- [Logistic map demonstrating attractors](https://editor.p5js.org/jbenno/sketches/DZGZ6PZVM)
- [Logistic map - now we allow a long phasing-in so that we can actually see the attractors](https://editor.p5js.org/jbenno/sketches/AEi0wV8Ru)
- [The bifurcation plot showing the chaotic attractors](https://editor.p5js.org/jbenno/sketches/mgotVMiXn)

<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/01) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/03)</sup>

[Video recordings of the lecture: Video 1](https://stream.nyu.edu/media/1_2i8ofr0s)  
[Video recordings of the lecture: Video 2](https://stream.nyu.edu/media/1_9pjdywv5)  

# Forces and Laws of Motion
(and some maths concepts)

### Vectors and Algebra
- Scalars, addition and subtraction, dot-products, absolute value
- Speed and velocity
- Differential change: Velocity as the differential of change in position, acceleration as the differential of change in velocity.

### Laws of Motion
- Motion and change, velocity and acceleration
- Updating discrete systems: calculating the next stage from the current state

#### Readings
- Freeth, Tony. “Decoding an Ancient Computer.” Scientific American 301, no. 6 (2009): 76–83. https://www.jstor.org/stable/26001660

## Studio
All code files can be found here: https://github.com/jbenno/nyuad_decoding_nature/tree/master/Files/02

### Vectors
- [Draw vectors and visualize vector algebra](https://editor.p5js.org/jbenno/sketches/ZbbsKLB1f), same in [3d](https://editor.p5js.org/jbenno/sketches/B9tZmDZjL)
- [Magnetic field demo](https://editor.p5js.org/jbenno/sketches/8E4g-bw6a)

### Motion
- [Pong](https://editor.p5js.org/jbenno/sketches/dSXhOTrs_)

### Forces
- [Simple example of constant acceleration under gravity](https://editor.p5js.org/jbenno/sketches/-CK60Y4xk)

### Attractors
- [Planets orbiting a sun. The motion is solely derived by Newton's law. The result illustrates Kepler's laws](https://editor.p5js.org/jbenno/sketches/gkUGbnoCB)
- [The movements of a planet as they appear in the sky to an observer on another planet](https://editor.p5js.org/jbenno/sketches/GEETE0MtF)
- [... and the same illustrated for the geocentric world](https://editor.p5js.org/jbenno/sketches/l9QcYuugy)


<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/01) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/03)</sup>

<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/02) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/04)</sup>

[Video recordings of the lecture](https://stream.nyu.edu/media/1_9jtxzac2)  

# Oscillation

### Circular movements
- Angles, cycles and forces
- Polar coordinates and angle functions

### Waves
- Harmonic and other waves
- Sound and light
- Springs and pendulums

### Complex harmonic motion
- Lissajous courve, rose curve, lemniscate
- Double pendulum and chaos

### p5.sound.js
- Oscillators and oscilloscopes

### Optional: Fourier transformation and complex numbers

## Studio
All code files can be found here: https://github.com/jbenno/nyuad_decoding_nature/tree/master/Files/03

- [Harmonic oscillation - a spring](https://editor.p5js.org/jbenno/sketches/iOFyD-EV8)
- [How oscillation and the circle are connected](https://editor.p5js.org/jbenno/sketches/ZmfMk2A_Z)
- [Polar coordinates](https://editor.p5js.org/jbenno/sketches/_VbkTRYXI) and [Polar coordinates using the translate function](https://editor.p5js.org/jbenno/sketches/EPn7t7ZER)
- [Rose figures](https://editor.p5js.org/jbenno/sketches/mxVx3mBby)
- [Lissajou curve](https://editor.p5js.org/jbenno/sketches/JilQH-GmB)
- [Oscilloscope](https://editor.p5js.org/jbenno/sketches/To7JHLSr-)
- [Pendulum](https://editor.p5js.org/jbenno/sketches/7BkadVeYC)
- [Double pendulum](https://editor.p5js.org/jbenno/sketches/_aQxbT0_N)

#### Complex numbers
- [Complex numbers: Demo that uses a class for complex numbers](https://editor.p5js.org/jbenno/sketches/fUnIIt376)
- [Domain colouring: Visualisation of complex function](https://editor.p5js.org/jbenno/sketches/s4npK0zeL)

<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/02) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/04)</sup>


<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/03) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/05)</sup>

[Video recordings of the lecture - Part a: Generative Art](https://stream.nyu.edu/media/1_7u6clwur)  
[Video recordings of the lecture - Part b: Particle Systems](https://stream.nyu.edu/media/1_cnvl6y56)
# Generative Art

Here you find the artists discussed and a few more:
[Generative Art](https://github.com/jbenno/nyuad_decoding_nature/wiki/Generative-Art)

- Galanter, Philip. “What Is Generative Art? Complexity Theory as a Context for Art Theory,” 2003. http://philipgalanter.com/downloads/ga2003_what_is_genart.pdf.
- Tate Gallery. “Generative Art.” In Tate’s Online Glossary. Accessed July 19, 2020. https://www.tate.org.uk/art/art-terms/g/generative-art.

# Particle Systems

First description of the concept:
- Reeves, W. T. “Particle Systems—a Technique for Modeling a Class of Fuzzy Objects.” ACM Transactions on Graphics 2, no. 2 (April 1, 1983): 91–108. https://doi.org/10.1145/357318.357320.

First implementation:
- Meyer, Nicholas. Genesis Sequence - Star Trek II: The Wrath of Khan, 1982. https://www.youtube.com/watch?v=GnziufszqSE&feature=youtu.be.

Galaxy formation:
- Spinrad, Hyron. Galaxy Formation and Evolution. Springer-Praxis Books in Astrophysics and Astronomy. Berlin ; New York : Chichester, UK: Springer ; Published in association with Praxis Pub, 2005.
- Cen, Renyue. “Movie of AMR Galaxy Formation.” Accessed June 28, 2020. https://www.astro.princeton.edu/~cen/AMR_GalaxyFormation-2.mp4.

## Studio
All code files can be found here: https://github.com/jbenno/nyuad_decoding_nature/tree/master/Files/04
#### Example Code
- [Elastic collision](https://editor.p5js.org/jbenno/sketches/dI5u8_vjh)
- [Brownian motion demo with colliding particles](https://editor.p5js.org/jbenno/sketches/veD_xj0GD)
- [Galaxy formation with particles](https://editor.p5js.org/jbenno/sketches/pK2adCVvw)

<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/03) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/05)</sup>

<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/04) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/06)</sup>

[Video recordings of the lecture](https://stream.nyu.edu/media/1_fx9vawcw)

# Autonomous Agents

- Braitenberg, Valentino. Vehicles: Experiments in Synthetic Psychology. 1st MIT Press pbk. ed. Cambridge, Mass.: MIT Press, 1986. (For a pdf see https://www.usna.edu/Users/cs/crabbe/SI475/current/vehicles.pdf )
- Reynolds, Craig W. “Steering Behaviors For Autonomous Characters.” Proceedings of Game Developers Conference, 1999, https://www.red3d.com/cwr/papers/1999/gdc99steer.html .  
- Animated speculative design for city traffic with autonomous cars (at 25'30''):  
  Dunn, Anthony. “Not Here, Not Now.” Kyoto Design Lab, KYOTO INSTITUTE OF TECHNOLOGY, April 1, 2015. https://www.youtube.com/watch?v=chBiMec7KtM&feature=youtu.be&t=1534.


### Robots and Humans

- Mori, Masahiro, Karl F. MacDorman, and Norri Kageki. “The Uncanny Valley.” IEEE Robotics Automation Magazine 19, no. 2 (June 2012): 98–100. https://doi.org/10.1109/MRA.2012.2192811.
- Cuthbert, Olivia. “Saudi Arabia Becomes First Country to Grant Citizenship to a Robot.” Arab News, October 25, 2017. https://www.arabnews.com/node/1183166/saudi-arabia.

### Empathy with Robots

- Eliza, the rule-based psychoanalyst can in Apple OS directly called from the command line. Open the terminal, write `emacs`, then press `enter`. After Emacs has loded press `shift`+ `esc`. Type `xdoctor`, press `return`.
- "Empathy with robots"; how do you feel when Atlas, the robot gets hit by the human [Boston Dynamics, Atlas](https://youtu.be/rVlhMGQgDkY?t=84) or when the "dog" robot is kicked?: [Boston Dynamics Dog robots](https://youtu.be/G-vVlS4xVrU)


## Studio
All code files can be found here: https://github.com/jbenno/nyuad_decoding_nature/tree/master/Files/05

- [Perlin noise](https://editor.p5js.org/jbenno/sketches/-tYkq-n1S)
- [A boid-class for an agent with steering behaviour as described in Reynold's paper](https://editor.p5js.org/jbenno/sketches/zcrqI12r1)
- [Boids following a flow field](https://editor.p5js.org/jbenno/sketches/p4DFpUK7y)
<br>
</br>
  
<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/04) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/06)</sup>

<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/05) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/08)</sup>

[Video recordings lecture 1](https://stream.nyu.edu/media/1_1cmpukyd)  
[Video recordings lecture 2](https://stream.nyu.edu/media/1_sz7itqoy)  

# Fractals

Introduction
- Linton, Oliver. Fractals. Wooden Books, 2019. https://woodenbooks.com/index.php?#!FRC.
- Mandelbrot, Benoît B., and Nial Neger. “Fractal Geometry,” Yale University, 2020. https://users.math.yale.edu/public_html/People/frame/Fractals/.

Plants
- Prusinkiewicz, Przemyslaw, and Aristid Lindenmayer. The Algorithmic Beauty of Plants. The Virtual Laboratory. New York, NY: Springer New York, 1990. https://doi.org/10.1007/978-1-4613-8476-2.  
- Twitter thread of tree generators : https://twitter.com/GalaxyKate/status/1329901625281028097

Geography
- Jiang, Bin. “New Paradigm in Mapping: A Critique on Cartography and GIS,” January 17, 2019. https://doi.org/10.20944/preprints201901.0173.v1.
- Jiang, Bin. “Head/Tail Breaks for Visualization of City Structure and Dynamics.” Cities 43 (March 1, 2015): 69–77. https://doi.org/10.1016/j.cities.2014.11.013.

Complex Numbers
- Sanderson, Grant. Euler’s Formula with Introductory Group Theory, 2017. https://www.youtube.com/watch?v=mvmuCPvRoWQ.

## Studio
All code files can be found here: https://github.com/jbenno/nyuad_decoding_nature/tree/master/Files/06

#### Recursion
  - [Factorial n!=n*(n-1)!](https://editor.p5js.org/jbenno/sketches/PAw0Vc74R)
  - [Fibonacci sequence f(n)=f(n-1)*f(n-2)](https://editor.p5js.org/jbenno/sketches/TqwVSlUGL)
  - [Fibonacci sequence iterative with a loop instead of recursion](https://editor.p5js.org/jbenno/sketches/y66fv2b8J)
  - [Fibonacci sequence as sequence of squares illustrating the Golden Section](https://editor.p5js.org/jbenno/sketches/IUzPxzOzO)
  - [Cantor Set](https://editor.p5js.org/jbenno/sketches/WHJ-Kl95z)
  - [Barycentric division](https://editor.p5js.org/jbenno/sketches/L1PaP3P25)
  - [Circles](https://editor.p5js.org/jbenno/sketches/Y13JwWr1_)

#### Self-similarity
  - [Sierpinsky Triangle](https://editor.p5js.org/jbenno/sketches/hZ8f8YNS_)
  - [Sierpinsky Tetrahedron](https://editor.p5js.org/jbenno/sketches/qfs982T-h)
  - [Mis en abyme - Video feedback loop](https://editor.p5js.org/jbenno/sketches/VDbzOjGO3)

#### Fractals
  - [Pythagoras tree](https://editor.p5js.org/jbenno/sketches/2h3ogpxxd)
  - [Using the Pythagoras tree algorithm to create a fractal with endless abyss](https://editor.p5js.org/jbenno/sketches/fHszoiQok)
  - [Tree with branches](https://editor.p5js.org/jbenno/sketches/Kc2Gx9z3y)
  - [Barnsley Fern](https://editor.p5js.org/jbenno/sketches/kewaavsgQ)

#### Complex numbers
  - [The basic algebra including a class for complex numbers](https://editor.p5js.org/jbenno/sketches/jeH9V6wOj)
  - [Domain Colouring](https://editor.p5js.org/jbenno/sketches/s4npK0zeL)
  - [Image transformation](https://editor.p5js.org/jbenno/sketches/pzl1uUhw8)
  - [The Mandelbrot Set with domain colouring](https://editor.p5js.org/jbenno/sketches/9l12NQFkA)
  - [Mandelbrot Set](https://editor.p5js.org/jbenno/sketches/13lSJw25Ox)
  - [Julia Set](https://editor.p5js.org/jbenno/sketches/zYNcfDrci)

#### Chaos and strange attractors
  - [Lorenz Attractor](https://editor.p5js.org/jbenno/sketches/zQ_uGyMc4)
  - [Henon Attractor](https://editor.p5js.org/jbenno/sketches/Ajhi_5nkQ)
  - [Logistic function - attractor demo](https://editor.p5js.org/jbenno/sketches/AEi0wV8Ru)
  - [Logistic Bifurcation](https://editor.p5js.org/jbenno/sketches/mgotVMiXn)
<br>
</br>
  
<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/05) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/08)</sup>

<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/06) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/10)</sup>

# Cellular Automata
[Video recording lecture 1](https://stream.nyu.edu/media/1_huv3on47)  
[Video recording lecture 2](https://stream.nyu.edu/media/1_93ksph6z)

- Wolfram, Stephen. A New Kind of Science. Stephen Wolfram, LLC, 2002. https://www.wolframscience.com/nks/.
  - [Chapter 2](http://wac.36f4.edgecastcdn.net/0036F4/pub/www.wolframscience.com/nks/nks-ch2.pdf), [Chapter 3](http://wac.36f4.edgecastcdn.net/0036F4/pub/www.wolframscience.com/nks/nks-ch3.pdf)  
  Criticism
- Giles, Jim. “What Kind of Science Is This?” Nature 417, no. 6886 (May 1, 2002): 216–18. https://doi.org/10.1038/417216a.  

1 Dimension
- Wolfram, Stephen. “Announcing the Rule 30 Prizes.” Stephen Wolfram Writings, October 1, 2019. https://writings.stephenwolfram.com/2019/10/announcing-the-rule-30-prizes/.  
\
_The Rules_
- [Rule 184](https://en.m.wikipedia.org/wiki/Rule_184)
- [Rule 110](https://en.m.wikipedia.org/wiki/Rule_110)
- Cook, Matthew. “Universality in Elementary Cellular Automata.” Complex Systems 15 (2004): 1-40. https://wpmedia.wolfram.com/uploads/sites/13/2018/02/15-1-1.pdf.


2-Dimensions
- Gerdner, Martin. “Conway’s Game of Life: Scientific American, October 1970.” Scientific American 223 (October 1970): 120–23.
- Dewdney, A. K. “Computer Recreations, December 1984. Sharks and fish wage an ecological war on the toroidal planet Wa-Tor” Scientific American. https://doi.org/10.1038/scientificamerican1284-14.
- Hill, Christian. “Wa-Tor World.” Learning Scientific Programming with Python, October 3, 2017. https://scipython.com/blog/wa-tor-world/.


- Gerdner, Martin. “Conway’s Game of Life: Scientific American, October 1970.” Scientific American 223 (October 1970): 120–23. http://www.ibiblio.org/lifepatterns/october1970.html  

### Code examples
- [Nuclear chain reaction with von-Neumann neighbourhood](https://docs.google.com/spreadsheets/d/1iPYJSMY3O_-BdAjAqwejIoCIOX19Y11Sn5ALOR0s68g/edit?usp=sharing)
- [A spreadsheet cellular automaton](https://docs.google.com/spreadsheets/d/16cXxcIMm4QZfOd4sysiY2l6kyIhhuKfZoKNbCqOvzaI/edit?usp=sharing)
- [Cellular automaton generator using Stephen Wolfram's notation](https://editor.p5js.org/jbenno/sketches/6rxIJyWPG)
- [Totalistic cellular automaton - three colours](https://editor.p5js.org/jbenno/sketches/pFdICdvg9)
- [Turing Machine demo](https://editor.p5js.org/jbenno/sketches/pxZk_UW2_)
- [Game of Life](https://editor.p5js.org/jbenno/sketches/i2dKEMlfq)
- [Game of Life with von Neumann neighborhood function](https://editor.p5js.org/jbenno/sketches/Zj2sz5oKU)
- [Very simple cellular model of majorities](https://editor.p5js.org/jbenno/sketches/fV155lLmf)  
  
<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/06) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/10)</sup>


<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/08) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/11)</sup>

# Machine Learning
(Video recordings see [12](https://github.com/jbenno/nyuad_decoding_nature/wiki/11) )

### Unsupervised Learning: Pattern recognision, dimension reduction, cluster analysis
- "Distance metrics": Euclidean, p-metric (Hölder metric), neigborhood functions in grids, cosine distance, ...
- Voronoi Diagram
- k-means cluster analysis
- Hierarchical cluster
- Self Organizing Maps (Kohonen Maps)

### Supervised Learning: Regression, prediction
- Linear regression
- Discriminant analysis
- kNN (k-Nearest-Neighbors)
- Perceptron
- Multilayer perceptron (Neural Network ... next lecture)

### Readings
#### Genetic Algorithms
- Sims, Karl. ‘Artifical Evolution for Computer Graphics’. Computer Graphics, ACM SIGGRAPH ’91 Conference Proceedings, Las Vegas, Nevada, July 1991, 25, no. 4 (July 1991): 319–28. http://www.karlsims.com/papers/siggraph91.html
- Sims, Karl. "Evolving Virtual Creatures." Paper presented at SIGGRAPH '94: The 21st Annual Conference on Computer Graphics and Interactive Techniques, Orlando, FL, July 24-29, 1994. http://www.karlsims.com/papers/siggraph94.pdf
- Holland, John H. “Genetic Algorithms.” Scientific American 267, no. 1 (1992): 66–73. https://www.jstor.org/stable/24939139.
- Dewdney, A. K. “Exploring the Field of Genetic Algorithms. COMPUTER RECREATIONS.” Scientific American 253, no. 5 (1985): 21–33. https://www.jstor.org/stable/24967834.  

## Studio
- [Code Examples](https://github.com/nature-of-code/noc-examples-p5.js/tree/master/chp09_ga)

<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/08) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/11)</sup>


<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/10) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/12)</sup>  

# Neural Networks and AI
[Video 1: Introduction to Neural Networks](https://stream.nyu.edu/media/1_lk6lzzeh)  
[Video 2: Walk through demo code](https://stream.nyu.edu/media/1_mg6jsjd1)  
[Video 3: AI Art and Philosophy](https://stream.nyu.edu/media/1_e28w28da)

## AI Philosophy and Art

## Readings
#### The hype
Marcus, Gary. “An Epidemic of AI Misinformation.” The Gradient, November 30, 2019. https://thegradient.pub/an-epidemic-of-ai-misinformation/.

#### AI Philosophy and GPT-3
- Weinberg, Justin. “Philosophers On GPT-3 (Updated with Replies by GPT-3).” Daily Nous, July 30, 2020. http://dailynous.com/2020/07/30/philosophers-gpt-3/.
- Wiseman, Howard. “Philosopher David Chalmers Interviewed on Whether the New AI Text Generator, GPT3, Could Be Conscious.” Accessed September 9, 2020. https://www.facebook.com/howard.wiseman.9/posts/4489589021058960.
- GPT-3. “A Robot Wrote This Entire Article. Are You Scared yet, Human? | GPT-3.” The Guardian, September 8, 2020, sec. Opinion. https://www.theguardian.com/commentisfree/2020/sep/08/robot-wrote-this-article-gpt-3.
- Brown, Tom B., Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhariwal, Arvind Neelakantan, et al. “Language Models Are Few-Shot Learners.” ArXiv:2005.14165 [Cs], July 22, 2020. http://arxiv.org/abs/2005.14165.

#### AI Ethics
- Jobin, Anna, Marcello Ienca, and Effy Vayena. “The Global Landscape of AI Ethics Guidelines.” Nature Machine Intelligence 1, no. 9 (September 2019): 389–99. https://doi.org/10.1038/s42256-019-0088-2.
- Sonnad, Nikhil. “A Gender-Biased Poem about ‘Lazy’ Women, by Google Translate.” Quartz, November 29, 2017. https://qz.com/1141122/google-translates-gender-bias-pairs-he-with-hardworking-and-she-with-lazy-and-other-examples/.
- [Google Translate gender example input](https://github.com/jbenno/nyuad_decoding_nature/blob/master/09/gender.txt)
- Richardson, Rashida, Jason M Schultz, and Kate Crawford. “DIRTY DATA, BAD PREDICTIONS: HOW CIVIL RIGHTS VIOLATIONS IMPACT POLICE DATA, PREDICTIVE POLICING SYSTEMS, AND JUSTICE.” NEW YORK UNIVERSITY LAW REVIEW 94 (n.d.): 42.
- West, Sarah Myers, Meredith Whittaker, and Kate Crawford. “DISCRIMINATING SYSTEMS,” April 2019, 33.
(https://ainowinstitute.org/discriminatingsystems.pdf)
- ipvideomarket. “Hikvision Markets Uyghur Ethnicity Analytics, Now Covers Up.” IPVM, 15:09 500. https://ipvm.com/reports/hikvision-uyghur.
- Rollet, Charles. “Hikvision Markets Uyghur Ethnicity Analytics, Now Covers Up.” IPVM, November 11, 2019. https://ipvm.com/reports/hikvision-uyghur.
- Financial Times. “Emotion Recognition Is China’s New Surveillance Craze.” Text. The Straits Times, November 7, 2019. https://www.straitstimes.com/asia/east-asia/emotion-recognition-is-chinas-new-surveillance-craze.
- https://www.cnas.org/publications/reports/the-american-ai-century-a-blueprint-for-action

### Philosophical Zombies (or p-Zombies)

> Philosophical zombies are physical and behavioral duplicates of normal conscious humans, without consciousness.  The conceivability argument against materialism runs roughly as follows: (1) Zombies are conceivable; (2) If zombies are conceivable, zombies are possible; (3) If zombies are possible, materialism is false; therefore (4) Materialism is false.  
> _David Chalmers (https://philpapers.org/browse/zombies-and-the-conceivability-argument)_

- Kirk, Robert. “Zombies.” In The Stanford Encyclopedia of Philosophy, edited by Edward N. Zalta, Spring 2019. Metaphysics Research Lab, Stanford University, 2019. https://plato.stanford.edu/archives/spr2019/entries/zombies/.
- Polger, Thomas. “Zombies.” Rome: Società Italiana Filosofia Analitica, n.d. http://host.uniroma3.it/progetti/kant/field/zombies.htm.

#### AI Art
- Heather Dewey-Hagborg: [How do you see me?](http://deweyhagborg.com/projects/how-do-you-see-me)
- Trevor Paglen and Kate Crawford on their project ImageNet-Roulette: [Excavating AI](https://www.excavating.ai); The Guardian on the project: [The viral selfie app ImageNet Roulette seemed fun – until it called me a racist slur](https://www.theguardian.com/technology/2019/sep/17/imagenet-roulette-asian-racist-slur-selfie); and the exhibition of their work at Fondazione Prada: [Training Humans](http://www.fondazioneprada.org/project/training-humans/?lang=en)
- Zach Blas: [I am here to learn so :))))))](http://www.zachblas.info/works/im-here-to-learn-so/) and [Icosahedron](http://www.zachblas.info/works/icosahedron/)

- [Creative AI newsletter](https://medium.com/@elluba/creative-ai-newsletter-9-art-design-and-music-updates-over-the-past-few-months-d0ccf838b72e)

## Studio

### Code examples
- [Multilayer Perceptron](https://editor.p5js.org/jbenno/sketches/7T_fObjb3)
- Here is the Google Spread Sheet for the "spread sheet neural network": https://docs.google.com/spreadsheets/d/1LNcokuQ2SIAgEieiM_uuLRhnSC08tvGrGP1sJ16CGSA/edit?usp=sharing  
... and the finished network:  
- - [Multilayer perceptron on a spreadsheet](https://docs.google.com/spreadsheets/d/1vu0XH4NW4FFMMNhj0mF69kyhv3HMM4mPDwAYx-40f_0/edit?usp=sharing)

### Other examples
- Easy to follow step by step introduction to building a basic neural network in Python: [Jason Brownlee, How to Code a Neural Network with Backpropagation In Python (from scratch)](https://machinelearningmastery.com/implement-backpropagation-algorithm-scratch-python/)
- Good introduction to neural networks working along recognizing handwritten numbers: [Michael Nielsen: Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com)
- [Christopher Olah's blog](http://colah.github.io)

### ml5.js
- [ml5js.org - the Machine Learning platform extending p5](https://ml5js.org)

### TensorFlow
- [TensorFlow for beginners](http://bobcat.library.nyu.edu/primo-explore/fulldisplay?docid=nyu_aleph005584260&context=L&vid=NYU&search_scope=all&tab=all&lang=en_US)
- [Introduction to TensorFlow-Slim : complex TensorFlow model building and training made easy by Marvin Bertin](http://bobcat.library.nyu.edu/primo-explore/fulldisplay?docid=nyu_aleph005580498&context=L&vid=NYU&search_scope=all&tab=all&lang=en_US)
- [Learning TensorFlow : a guide to building deep learning systems by Hope et al.](http://bobcat.library.nyu.edu/primo-explore/fulldisplay?docid=nyu_aleph005581567&context=L&vid=NYU&search_scope=all&tab=all&lang=en_US)  
  
<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/10) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki) | [Next lecture &rarr;](https://github.com/jbenno/nyuad_decoding_nature/wiki/12)</sup>

<sup>[&larr; Previous lecture](https://github.com/jbenno/nyuad_decoding_nature/wiki/11) |[&uarr; Back to course home page](https://github.com/jbenno/nyuad_decoding_nature/wiki)

# Final Project

The final project can be any form of *decoded nature* - an application done in `p5.js`, `processing`, or `python`. The project should follow your concept that expresses your creativity and be inspired by your research.

The concept makes your thoughts explicit. First, it lays out the sources (things you have researched, like papers, books, websites, other people's code, also functions in code libraries which may not yet have been covered in class). The research should give your project a conceptual frame. It should show that you can on your own build on what you have learned.

The creative concept presents your idea, the point of differentiation of the project, and leads through the aesthetic decisions you make.

### Deliverables

#### Project concept, documentation and presetation
- Document your research, conceptual considerations and process, and the concept in a short paper of ca. 1500 to 3000 words; show the drafts/sketches and explain your design decisions; tell about the development with the problems and difficulties you faced; include how you tested your application
- Well documented code, submitted in a formatted way so that it can be read online (e.g. in GitHub)
- A slide deck of web-presentation of 3 to 5 slides explaining your project and introducing it to the class

#### Technical achievments
- The application will be based on `p5.js`, `processing`, or `python`
- The application should be interactive - it takes inputs from users, exteral data, sensors, the camera, etc. and reacts
- The application delivers a sensual user experience (it uses dynamic graphics, and/or animation, and/or sound, etc.)
- Everything runs and can be presented online.

*Extra Credits:*
- Responsive or mobile friendly design
- Accessibility  
  
# Additional Information
Credit Hours: 4  
Prerequisites: IM-UH 1010, IM-UH 2310, or CS-UH 1001  
Time:  see https://docs.google.com/spreadsheets/d/14iXBcgGNulTlkNdsm-9vlTvKXebDdKNkWFhyPTBOvao/edit#gid=0
__The lectures will be recorded and made available to students asynchronously. Student presentations and student lead lectures can also be submitted as recordings. For discussions and questions, we will use Zoom as well as the forum function in Classes so that everybody can participate independently from their connectivity and time zone.__

## Teaching and Learning Methodologies

- Critical reading and watching: understand what’s the intention, what’s the power structure, and unveil the hidden ideologies.
- Creativity and maker mindset in a studio-class setup: take apart and repurpose, draft, design, and build.
- Presentation and discussion: Classes include prepared short presentations by students and discussions on the readings and other assigned material.
- Inclusion and diversity: We will respect each other in our specific culture and personal values, we will focus on listening to everybody’s voice, in class and by focussing on material outside the mainstream.
 
## Assignments

- Reading and watching the provided material is required each week in advance.
- Assigned readings and videos will be discussed in class. Preparedness (i.e. having read/watched the assigned material), active participation, and therefore attendance to the classes will be graded.
- The week by week assignments as well as signed talks and presentations can be found in this spreadsheet: https://docs.google.com/spreadsheets/d/1LVPk7OmhUpddOixnL7hCac3oQGZJfU2UoV2SM9Q5IcE/edit?usp=sharing
- Please submit your writing or other materials through NYU Classes or via email. Links are fine, too.
- It helps if you put [Decoding Nature] in front of the email subject.

## Grades and Rubrics

10% Participation: Active contribution to the discussions, showing initiative, taking on tasks outside the assignments.
30% Assignments: Preparedness (having actually read/watched the material), timely submission of assignments, quality of work (see rubrics), presenting in class.
30% - Midterm project
30% - Final project

### Rubrics

20% Comprehension (understanding of the material, structure, argumentation)
30% Criticism (assessing the form, intention, preliminary conditions of the assigned material; questioning the arguments), resp. technical complexity for programming assignments
50% Creativity (Showing original thoughts and ideas; compelling form of presentation; creative use of various techniques with focus on interactive media; aesthetics of the experience)

### Assignments will be graded according to the following scale of 100%

- Poor	Evinced poor absorption of material, or made no effort (0-70%)
- Adequate	Accomplished enough to prove the student encountered the material (71-80%)
- Good	Demonstrated strong effort incorporating and articulating concepts in a creative way (81-90%)
- Excellent	Exceptional creativity, understanding and synthesis of the material (91-100%)

## Attendance and Participation

- Attendance is mandatory. Unexcused absences or habitual lateness will negatively impact your grade for the class. Being late for more than 15 minutes with no excuse will count as an unexcused absence. Two unexcused absences will result in a decrease in your overall final grade (i.e. B+ to B). Three will result in an entire letter grade drop (i.e. from A to B). Four will result in two letter grade drops (i.e. from A to C). More than four unexcused absences will result in an F.
- Engaging in the class discussion, offering feedback to peers, and being mentally present is a major part of the grade.
- Presenting work and writing in class is required, giving talks on topics is expected. 

### Social Media, Messaging, Notifications
- Absolutely no use of social media or messaging services in class - neither on phone nor on laptop except when it is the explicit topic.
- Notifications must be set to silence.

## My Availability and Office Hours

If there are any questions, need for help or further instruction, please reach out to me. You may just tell me before or after class or sign up for office hours, usually on Tuesdays.

### Accommodation and Mental Health Awareness

As a University student, you may experience a range of issues that can interfere with your ability to perform academically or impact your daily functioning, such as: heightened stress; anxiety; difficulty concentrating; sleep disturbance; strained relationships; grief and loss; personal struggles. If you have any well-being or mental health concerns please visit the Counseling Center on the ground floor of the campus center from 9am-5pm Abu Dhabi time Sunday - Thursday, or schedule an appointment to meet with a counselor by calling: +971 02-628-8100, or emailing: nyuad.healthcenter@nyu.edu. If you require mental health support outside of these hours call NYU's Wellness Exchange hotline at +971 02-628-5555, which is available 24 hours a day, 7 days a week. You can also utilize the Wellness Exchange mobile chat feature, details of which you can find on the student portal. If you need help connecting to these supports please contact me directly. Diversity and inclusion are important tenets of NYUAD and my own teaching philosophy. Please let me know if you have a disability I should be aware of or require special assistance. I am happy to make accommodations.

### Academic Integrity

NYUAD's policies and procedures relating to academic integrity:
At NYU Abu Dhabi, a commitment to excellence, fairness, honesty, and respect within and outside the classroom is essential to maintaining the integrity of our community. By accepting membership in this community, students, faculty, and staff take responsibility for demonstrating these values in their own conduct and for recognizing and supporting these values in others. In turn, these values create a campus climate that encourages the free exchange of ideas, promotes scholarly excellence through active and creative thought, and allows community members to achieve and be recognized for achieving their highest potential. All potential violations to this community academic integrity standard (including plagiarism) will be taken seriously and reviewed through NYUAD’s Academic Integrity Procedure. Link: https://students.nyuad.nyu.edu/campus-life/community-standards/policies/academic-integrity/

### IM Lab and Tool Training

Tool training is mandatory for using the IM LAB (Room C3 029).

# Guidelines
## Critical Work and Documentation
### Notes
- Make notes in a sharable doc like Google Doc or on you blog/Wordpress site

### Papers
The standard writing requirement for all core courses is to write papers of formal, polished writing.

- Write clear, grammatically correct prose
- Develop well-reasoned and persuasive arguments
- Use evidence to make points
- Engage with the thinking of others
- Credit and cite appropriate sources accurately according to the Chicago Manual of Style https://www.chicagomanualofstyle.org/tools_citationguide.html 

### Writing informal pieces
- 3000 to 6000 characters
- Pictures and figures are highly recommended
- Post contain links to all related sources, all documentation uses citations according to the Chicago Manual of Style https://www.chicagomanualofstyle.org/tools_citationguide.html

### Other forms of expressions
- This is an art class. Many assignments and the projects offer different ways of creative and artistic expression. The use of creativity is highly appreciated.
- Any variety of expression might substitute an essay.
- For any format, however, proper documentation on the thoughts and creative process is required. This might however be informal and brief.

## Interactive Media
### Code
- Source code has to be published on GitHub or equivalent repository
- Code has to be commented

### Documentation
- Documentation of the project in form of a pdf is mandatory. It can be more text-based or more slides-like, however it must explain the rational, design principles, and in particular refer to all sources used.
- The documentation should enable the installation and application of the project.

## Talks and presentations
- 10 to 20 minutes long
- Followed by questions and discussion
- Can use any form of presentation technique (any form of media)
- Documentation and material is shared with the class afterwards


# Bibliography

- Adamson, Peter, ed. Interpreting Avicenna: Critical Essays. Interpreting. Cambridge: Cambridge University Press, 2013. https://doi.org/10.1017/CBO9781139047890.
- Bailey, Jason. “The Tools of Generative Art, from Flash to Neural Networks.” ARTnews.Com (blog), January 8, 2020. https://www.artnews.com/art-in-america/features/generative-art-tools-flash-processing-neural-networks-1202674657/.
- Belo, Catarina, and Catarina Belo. “THE CONCEPT OF ‘NATURE’ IN ARISTOTLE, AVICENNA AND AVERROES.” Kriterion: Revista de Filosofia 56, no. 131 (June 2015): 45–56. https://doi.org/10.1590/0100-512X2015n13103cb.
- Bertschinger, Edmund. “Simulations of Structure Formation in the Universe.” Annual Review of Astronomy and Astrophysics 36, no. 1 (September 1, 1998): 599–654. https://doi.org/10.1146/annurev.astro.36.1.599.
- Blumtritt, Joerg. “Our Pythagorean World.” Beautiful Data (blog), April 10, 2013. http://beautifuldata.net/2013/04/our-pythagorean-world/.
- Braitenberg, Valentino. Vehicles: Experiments in Synthetic Psychology. 1st MIT Press pbk. ed. Cambridge, Mass.: MIT Press, 1986.
- Broug, Eric. Islamic Geometric Patterns. Pap/Cdr edition. London: Thames & Hudson, 2008.
- Caroll, Sean. The Biggest Ideas in the Universe, 2020. https://www.youtube.com/watch?v=HI09kat_GeI&list=PLrxfgDEc2NxZJcWcrxH3jyjUUrJlnoyzX.
- Cen, Renyue. “Movie of AMR Galaxy Formation.” Accessed June 28, 2020. https://www.astro.princeton.edu/~cen/AMR_GalaxyFormation-2.mp4.
- Cook, Matthew. “Universality in Elementary Cellular Automata.” Complex Systems 15 (2004): 1–40.
- Critchlow, Keith. Islamic Patterns: An Analytical and Cosmological Approach. First Edition edition. London: W W Norton & Co Inc, 1984.
- Cuthbert, Olivia. “Saudi Arabia Becomes First Country to Grant Citizenship to a Robot.” Arab News, October 25, 2017. https://www.arabnews.com/node/1183166/saudi-arabia.
- Dewdney, A. K. “Computer Recreations, December 1984.” Scientific American. Accessed March 30, 2020. https://doi.org/10.1038/scientificamerican1284-14.
- ———. “Exploring the Field of Genetic Algorithms. COMPUTER RECREATIONS.” Scientific American 253, no. 5 (1985): 21–33.
- Dunn, Anthony. “Not Here, Not Now.” Kyoto Design Lab, KYOTO INSTITUTE OF TECHNOLOGY, April 1, 2015. https://www.youtube.com/watch?v=chBiMec7KtM&feature=youtu.be&t=1534.
- Eagle, Antony. “Chance versus Randomness.” In The Stanford Encyclopedia of Philosophy, edited by Edward N. Zalta, Spring 2019. Metaphysics Research Lab, Stanford University, 2019. https://plato.stanford.edu/archives/spr2019/entries/chance-randomness/.
- Evelyn. Edson. Medieval Views of the Cosmos. Oxford: Bodleian Library, University of Oxford, 2004.
- Flake, Gary William. The Computational Beauty of Nature: Computer Explorations of Fractals, Chaos, Complex Systems, and Adaptation. Reprint edition. Cambridge, Mass.: A Bradford Book, 2000.
- Francis. Maddison. Science, Tools & Magic. Nasser D. Khalili Collection of Islamic Art. Nasser D. Khalili Collection of Islamic Art ; v. 12. London]: Nour Foundation, in association with Azimuth Editions and Oxford University Press, 1997.
- Freeth, Tony. “DECODING AN Ancient Computer.” Scientific American 301, no. 6 (2009): 76–83.
- George Saliba  author. Islamic Science and the Making of the European Renaissance. Transformations (M.I.T. Press). Cambridge, Mass.: MIT Press, 2007. http://proxy.library.nyu.edu/login?url=https://ebookcentral.proquest.com/lib/nyulibrary-ebooks/detail.action?docID=3338641.
- Gerdner, Martin. “Conway’s Game of Life: Scientific American, October 1970.” Scientific American 223 (October 1970): 120–23.
- Giles, Jim. “What Kind of Science Is This?” Nature 417, no. 6886 (May 1, 2002): 216–18. https://doi.org/10.1038/417216a.
- Grünbaum, Branko., and Geoffrey Colin Shephard. Tilings and Patterns. Second edition. Mineola, New York: Dover Publications, Inc, 2016.
- Hegselmann, Rainer, Ulrich Mueller, and Klaus G. Troitzsch, eds. Modelling and Simulation in the Social Sciences from the Philosophy of Science Point of View. Dordrecht: Springer Netherlands, 1996. https://doi.org/10.1007/978-94-015-8686-3.
- Hill, Christian. “Wa-Tor World.” Learning Scientific Programming with Python, October 3, 2017. https://scipython.com/blog/wa-tor-world/.
- Holland, John H. “Genetic Algorithms.” Scientific American 267, no. 1 (1992): 66–73.
- Howard R.  Turner. Science in Medieval Islam: An Illustrated Introduction. 1st ed. Austin: University of Texas Press, 1997. https://catalog.hathitrust.org/Record/003952328?signon=swle:urn:mace:incommon:nyu.edu.
- Jiang, Bin. “Head/Tail Breaks for Visualization of City Structure and Dynamics.” Cities 43 (March 1, 2015): 69–77. https://doi.org/10.1016/j.cities.2014.11.013.
- ———. “New Paradigm in Mapping: A Critique on Cartography and GIS,” January 17, 2019. https://doi.org/10.20944/preprints201901.0173.v1.
- Kirk, Robert. “Sentience and Behaviour.” Mind LXXXIII, no. 329 (1974): 43–60. https://doi.org/10.1093/mind/LXXXIII.329.43.
- ———. “Zombies.” In The Stanford Encyclopedia of Philosophy, edited by Edward N. Zalta, Spring 2019. Metaphysics Research Lab, Stanford University, 2019. https://plato.stanford.edu/archives/spr2019/entries/zombies/.
- Lammer, Andreas. The Elements of Avicenna’s Physics: Greek Sources and Arabic Innovations. The Elements of Avicenna’s Physics. De Gruyter, 2018. https://www.degruyter.com/view/title/528958.
- Linton, Oliver. Fractals. Wooden Books, 2019. https://woodenbooks.com/index.php?#!FRC.
- Mallikarjuna, Ch, and K. Ramachandra Rao. “Cellular Automata Model for Heterogeneous Traffic.” Journal of Advanced Transportation 43, no. 3 (2009): 321–45. https://doi.org/10.1002/atr.5670430305.
- Mandelbrot, Benoît B., and Nial Neger. “Fractal Geometry,” 2020. https://users.math.yale.edu/public_html/People/frame/Fractals/.
- Marcus, Gary. “An Epidemic of AI Misinformation.” The Gradient, November 30, 2019. https://thegradient.pub/an-epidemic-of-ai-misinformation/.
- McGinnis, Jon. “A Medieval Arabic Analysis of Motion at an Instant: The Avicennan Sources to the Forma Fluens / Fluxus Formae Debate.” The British Journal for the History of Science 39, no. 2 (June 2006): 189–205. https://doi.org/10.1017/S0007087406007941.
- ———. “Avicenna’s Natural Philosophy.” In Interpreting Avicenna, edited by Peter Adamson, 71–90. Cambridge: Cambridge University Press, 2013. https://doi.org/10.1017/CBO9781139047890.005.
- ———. “Ibn Sina’s Natural Philosophy.” In The Stanford Encyclopedia of Philosophy, edited by Edward N. Zalta, Winter 2018. Metaphysics Research Lab, Stanford University, 2018. https://plato.stanford.edu/archives/win2018/entries/ibn-sina-natural/.
- Meyer, Nicholas. Genesis Sequence - Star Trek II: The Wrath of Khan, 1982. https://www.youtube.com/watch?v=GnziufszqSE&feature=youtu.be.
- Mori, Masahiro, Karl F. MacDorman, and Norri Kageki. “The Uncanny Valley [From the Field].” IEEE Robotics Automation Magazine 19, no. 2 (June 2012): 98–100. https://doi.org/10.1109/MRA.2012.2192811.
- Naumov, Lev. “Modelling with Cellular Automata: Problem Solving Environments and Multidimensional Applications,” n.d., 13.
- Nowak, Andrzej, and Maciej Lewenstein. “Modeling Social Change with Cellular Automata.” In Modelling and Simulation in the Social Sciences from the Philosophy of Science Point of View, edited by Rainer Hegselmann, Ulrich Mueller, and Klaus G. Troitzsch, 249–85. Theory and Decision Library. Dordrecht: Springer Netherlands, 1996. https://doi.org/10.1007/978-94-015-8686-3_14.
- Peitgen, Heinz-Otto, Hartmut Jürgens, and Dietmar Saupe. Chaos and Fractals: New Frontiers of Science. New York, NY: Springer New York, 1992. https://doi.org/10.1007/978-1-4757-4740-9.
- Polger, Thomas. “Zombies.” Rome: Società Italiana Filosofia Analitica, n.d. http://host.uniroma3.it/progetti/kant/field/zombies.htm.
- Prusinkiewicz, Przemyslaw, and Aristid Lindenmayer. The Algorithmic Beauty of Plants. The Virtual Laboratory. New York, NY: Springer New York, 1990. https://doi.org/10.1007/978-1-4613-8476-2.
- Reeves, W. T. “Particle Systems—a Technique for Modeling a Class of Fuzzy Objects.” ACM Transactions on Graphics 2, no. 2 (April 1, 1983): 91–108. https://doi.org/10.1145/357318.357320.
- Reynolds, Craig W. “Steering Behaviors For Autonomous Characters.” Proceedings of Game Developers Conference, 1999, 21.
- Rogozhin, Yurii. “Small Universal Turing Machines.” Theoretical Computer Science 168, no. 2 (November 20, 1996): 215–40. https://doi.org/10.1016/S0304-3975(96)00077-1.
- Rucker, Rudy. “The Wolfram Physics Project.” Rudy Rucker’s Blog (blog). Accessed April 24, 2020. http://www.rudyrucker.com/blog/2020/04/22/the-wolfram-physics-project/.
- Saliba, George. Islamic Science and the Making of the European Renaissance. The MIT Press, 2007. https://doi.org/10.7551/mitpress/3981.001.0001.
- Shiffmann, Daniel. The Nature of Code, 2019. https://natureofcode.com/book/.
- Spinrad, Hyron. Galaxy Formation and Evolution. Springer-Praxis Books in Astrophysics and Astronomy. Berlin ; New York : Chichester, UK: Springer ; Published in association with Praxis Pub, 2005.
- Suzuki, Yasuhiro, Katsushi Nakagawa, Takashi Sugiyama, Fuminori Akiba, Eric Maestri, Insil Choi, and Shinya Tsuchiya. Computational Aesthetics. SpringerBriefs in Applied Sciences and Technology. Tokyo: Springer Japan, 2019. https://doi.org/10.1007/978-4-431-56844-5.
- The Newton Project, Rob Iliffe, and Scott Mandelbrote. “Books in Newton’s Library.” Accessed April 30, 2020. http://www.newtonproject.ox.ac.uk/his-library/books-in-newtons-library.
- Waite, Elliot. Rule 30 and Game of Life. Python, 2020. https://github.com/elliotwaite/rule-30-and-game-of-life.
- Wolfram, Stephen. A New Kind of Science. Stephen Wolfram, LLC, 2002. https://www.wolframscience.com/nks/.
- ———. “Announcing the Rule 30 Prizes.” Stephen Wolfram Writings, October 1, 2019. https://writings.stephenwolfram.com/2019/10/announcing-the-rule-30-prizes/.

### Natural laws
- McGinnis, Jon. “Avicenna’s Natural Philosophy.” In Interpreting Avicenna, edited by Peter Adamson, 71–90. Cambridge: Cambridge University Press, 2013. https://doi.org/10.1017/CBO9781139047890.005.
- _ _ _. “A Medieval Arabic Analysis of Motion at an Instant: The Avicennan Sources to the Forma Fluens / Fluxus Formae Debate.” The British Journal for the History of Science 39, no. 2 (June 2006): 189–205. https://doi.org/10.1017/S0007087406007941.

### Astronomy
- http://www.malinc.se/math/trigonometry/geocentrismen.php?platform=hootsuite

### Oscillation
- https://www.youtube.com/watch?v=15WqxmKZbTc&t=43s
- https://youtu.be/15WqxmKZbTc?t=87
- https://youtu.be/15WqxmKZbTc?t=133
- https://youtu.be/15WqxmKZbTc?t=189
- https://youtu.be/15WqxmKZbTc?t=344

### Cellular automata
- [Cellular Automata Rule 30 Prize](https://writings.stephenwolfram.com/2019/10/announcing-the-rule-30-prizes/)
- Waite, Elliot. Rule 30 and Game of Life. Python, 2020. https://github.com/elliotwaite/rule-30-and-game-of-life.
