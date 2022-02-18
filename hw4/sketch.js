let backGround;
let score = 0;
let bugCount = 10;
let startTime;
let gameState = "wait";

let bug = [];

function preload()
{
    spriteSheet = loadImage("assets/Bug2.png");
    //backGround = loadImage("assets/BackGround.png");
}

function setup()
{
    createCanvas(1260,550);
    imageMode(CENTER);

    for(i = 0; i < bugCount; i++){
        bug[i] = new Bug(spriteSheet, random(50, 1000), random(-100, 340),random(1,5), random([-1,1]));
    }

    
}

function timer()
{
    return int((millis() - startTime) / 1000);
}

 function mousePressed()
 {
     for(i = 0; i < bugCount; i++){
         bug[i].squish();
     }
 }


function draw()
{
    background(255);

    if(gameState == "wait"){
        textSize(30);
        text("Press Mouse Button To Start", 150, 300);
        if(mouseIsPressed){
            startTime = millis();
            gameState = "playing";
        }
    }
    else if(gameState == "playing"){
        for(i = 0; i < bugCount; i++){
            bug[i].draw();
        }
        let time = timer();
        text("Time: " + time, 5, 30);
        text("Score: " + score, 5, 70);
        if(time >= 30){
            gameState == "end";
        }
    }
    else if (gameState == "end"){
        text("Game Over. You Squished " + score + " Bugs.", 150, 300);
        text("Press Mouse Button To Restart", 150, 400);
        if (mouseIsPressed){
            startTime = millis();
            score = 0;
            gameState = "playing";
        }
    }

    

    
}

class Bug
{
    constructor(spriteSheet, x, y, speed, move){
        this.spriteSheet = spriteSheet;
        this.sx = 0;
        this.x = x;
        this.y = y;
        this.move = 0;
        this.facing = move;
        this.speed = speed;
        this.move = -move;
    }


    draw()
    {
    push();
    translate(this.x,this.y);
    scale(this.facing,1);
    
    if(this.move == 0){
        image(this.spriteSheet,0,200,50,50,16 * 3,0,16,16);
    }
    else{
        image(this.spriteSheet,0,200,50,50,16 * this.sx,0,15,16);
    }

    if(frameCount % 5 == 0){
        this.sx = (this.sx + 1) % 3;
    } 
    
    this.x += this.speed * this.move;

    if(this.x < 8){
        this.move = 1;
        this.facing = -1;
    }
    else if(this.x > width - 8){
        this.move = -1;
        this.facing = 1;
    }

    pop();
    }

    go(direction)
    {
        this.move = direction;
        this.facing = direction;
    }

    stop()
    {
        this.move = 0;
        score += 1;       
    }

     squish()
     {
         if(mouseX > this.x - 25 && mouseX < this.x + 25 && mouseY > this.y -225 && mouseY < this.y + 225){
             this.stop();
             this.squished == true;
         }
     }
}
