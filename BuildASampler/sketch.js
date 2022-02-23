let sounds = new Tone.Players({
  'aMajor': 'media/a-major.mp3',
  'cMajor': 'media/c-major.mp3',
  'dMajor': 'media/d-major.mp3',
  'eMajor': 'media/e-major.mp3'
})

const distort = new Tone.Distortion(0.8);


function preload() 
{
// color management
let col1 = color(79, 193, 232);
let col2 = color(160, 213, 104);
let col3 = color(255, 206, 84);
let col4 = color(237, 85, 100);
 
// button management
button = createButton("A Major");
button.style('background-color', col1);
button.position(20,200);
button.mousePressed( ()=>playSounds('aMajor'));
  
button2 = createButton("C Major");
button2.style('background-color', col2);
button2.position(120,200);
button2.mousePressed( ()=>playSounds('cMajor'));
  
button3 = createButton("D Major");
button3.style('background-color', col3);
button3.position(220,200);
button3.mousePressed( ()=>playSounds('dMajor'));
  
button4 = createButton("E Major");
button4.style('background-color', col4);
button4.position(320,200);
button4.mousePressed( ()=>playSounds('eMajor'));
  
// slider management
slider = createSlider(0,1.0);
slider.mouseReleased( ()=>{
distort.distortion = slider.value();
})
slider.position(110,250);
slider.style('width', '180px');
}
  
function setup() 
{
  createCanvas(400, 400);
  sounds.connect(distort);
  distort.toDestination();
  
}

function draw() 
{
  background(172, 146, 235);
  text("Press These Buttons to Play Guitar Chords",90,150);
  text("Move Slider to Change Distortion", 115,170);
}

function playSounds(whichSound){
  if(whichSound == 'aMajor'){
    sounds.player('aMajor').start();
  }
  if(whichSound == 'cMajor'){
    sounds.player('cMajor').start();
  }
   if(whichSound == 'dMajor'){
    sounds.player('dMajor').start();
  }
   if(whichSound == 'eMajor'){
    sounds.player('eMajor').start();
  }
}