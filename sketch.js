var ground,groundImage;
var mario,marioImage;
var coin,coinImage;
var mushroom,mushroomImage;
var cloud,cloudImage;
var block,blockImage;
var score=0;
var gameState="play";

function preload(){
groundImage=loadImage("images/GROUND.png");
marioImage=loadImage("images/Mario.png");
coinImage=loadImage("images/COIN.png");
mushroomImage=loadImage("images/MUSHROOM.png");
cloudImage=loadImage("images/CLOUD.png");
blockImage=loadImage("images/BLOCKS.png");
}
function setup(){
createCanvas(600,600);
ground=createSprite(20,550,600,20);
ground.addImage(groundImage);
}
function draw (){
background("blue");
ground.velocityX=-2;
if(ground.x<0){
ground.x=ground.width/2
}





  drawSprites();
}










