var colorSelected;

function setup()
{
  createCanvas(800,800);
  background(255);
  colorSelected = 0;
}

function draw()
{
  if(mouseIsPressed){
    if(mouseX <=26){
      if(mouseY <= 26){
        colorSelected =color(255,0,0); 
      }else if(mouseY <=52){
        colorSelected = color(255,120,0);   
      }else if(mouseY <=78){
        colorSelected = color(255,255,0);
      }else if(mouseY <= 104){
        colorSelected = color(0,255,0);
      }else if(mouseY <= 130){
        colorSelected = color(0,255,255);
      }else if(mouseY <= 156){
        colorSelected = color(0,0,255);
      }else if(mouseY <=183){
        colorSelected = color(255,100,200);
      }else if(mouseY <= 208){
        colorSelected = color(139,69,19);
      }else if(mouseY <= 234){
        colorSelected = color(255);
      }else if(mouseY <= 259){
        colorSelected = color(0);
      }
      }  
    startDrawing();
  }
  
  stroke(color(255));
  fill(255,0,0);
  rect(1,1,25,25);
  fill(255,120,0);
  rect(1,27,25,25);
  fill(255,255,0);
  rect(1,53,25,25);
  fill(0,255,0);
  rect(1,79,25,25);
  fill(0,255,255);
  rect(1,105,25,25);
  fill(0,0,255);
  rect(1,131,25,25);
  fill(255,100,200);
  rect(1,157,25,25);
  fill(139,69,19);
  rect(1,183,25,25);
  fill(255,255,255);
  rect(1,209,25,25);
  fill(0,0,0);
  rect(1,235,25,25);  
  
}

function startDrawing()
{
  stroke(colorSelected);
  strokeWeight(5);
  line(pmouseX,pmouseY,mouseX,mouseY);
}