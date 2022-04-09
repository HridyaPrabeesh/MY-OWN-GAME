var bg, bgImg;
var beaver, beaver_running, beaver_collided;
var bush, bush1, bush2, bush3, bush4, bush5, bush6;
var bat, batImg;
var stick, stickImg;
var nut, nutImg;
var gameOver, gameOverImg;
var restart, restartImg;
var bushGroup, batsGroup;
var r;
var PLAY = 1;
var END = 0;
var gameState;
var bgSound, jumpSound, gameOverSound;

function preload(){
bgImg=loadImage("./assets/bg.png");
beaver_running=loadAnimation("./assets/beaverRunning.gif");
beaver_collided=loadImage("./assets/beaverCollided.png");
batImg=loadAnimation("./assets/bat1.png","./assets/bat2.png","./assets/bat3.png","./assets/bat4.png");
stickImg=loadImage("./assets/stick.png")
nutImg=loadImage("./assets/nut.png");
gameOverImg=loadImage("./assets/gameOver.png");
restartImg=loadImage("./assets/restart.png");
bgSound=loadSound("./assets/bgSound.wav");
jumpSound=loadSound("./assets/jumpSound.wav");
gameOverSound=loadSound("./assets/gmSound.mp3");
bush1=loadImage("./assets/bush1.png");
bush2=loadImage("./assets/bush2.png");
bush3=loadImage("./assets/bush3.png");
bush4=loadImage("./assets/bush4.png");
bush5=loadImage("./assets/bush5.png");
bush6=loadImage("./assets/bush6.png");
}

function setup(){
createCanvas(1366,657);

beaver=createSprite(100,596,10,10);
beaver.scale=0.35;
beaver.addAnimation("beaver_running", beaver_running);
beaver.addAnimation("beaver_collided", beaver_collided)

bat=createSprite(530,225,30,30);
bat.scale=0.60;
bat.addAnimation("batImages", batImg);

stick=createSprite(400,400,20,20);
stick.scale=0.20;
stick.addImage(stickImg);

nut=createSprite(570,400,50,50);
nut.scale=0.10;
nut.addImage(nutImg);

gameOver=createSprite(683,200,100,100);
gameOver.scale=0.90;
gameOver.addImage(gameOverImg);

restart=createSprite(683,290,50,50);
restart.scale=0.25;
restart.addImage(restartImg);

batsGroup = new Group();
bushGroup = new Group();

ground=createSprite(683,624,1366,10);
ground.visible=true;
ground.velocityX+=5;
r = Math.round(0, 5);
console.log(r);
}

function draw(){
background("darkgrey");
image(bgImg, 0, 0, width, height);

text(mouseX + "," + mouseY, mouseX, mouseY);

if (gameState===PLAY) {
    gameOver.visible=false;
    restart.visible=false;
    bgSound.play();
}

if (batsGroup.isTouching(beaver)||bushGroup.isTouching(beaver)) {
    gameState = END;
    gameOverSound.play();
  }

drawSprites();
}