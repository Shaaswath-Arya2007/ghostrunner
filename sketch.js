var tower,towerImg
var door,doorImg,doorsgroup
var climber,climberImg,climberGroup
var ghost,ghostImg
var invisibleblock,invisibleblockgroup
var sound

var gameState = "play"


 function preload (){

  towerImg= loadImage("tower.png");
  doorImg= loadImage("door.png");
   
  climberImg=loadImage("climber.png");
ghostImg=loadImage("ghost-standing.png");
   sound=loadSound("spooky.wav")
   
   
}



function setup (){
createCanvas(600,600);
  
 sound.loop() ;
  
  
  
tower=createSprite (300,300)
tower.addImage("tower",towerImg);
// tower.y = tower.width /2;
tower.velocityY=1;
doorsgroup = createGroup();
climberGroup =createGroup();
invisibleblockgroup=createGroup();
ghost=createSprite(200,200,50,50);
ghost.addImage("ghost",ghostImg);
ghost.scale=0.5;


  
  
  
  
  
}





function draw (){
  
  background("white")
  if(gameState=="play"){
  if(tower.y>400){
    tower.y=300;
  }
  
  if (keyDown("LEFT_ARROW")){
  ghost.x=ghost.x-3
      }
  
  if (keyDown("RIGHT_ARROW")){
    
  
  ghost.x=ghost.x+3
      }
  
  
  if (keyDown("SPACE")){
    
  
  ghost.velocityY=-5;
      }
  
  ghost .velocityY =  ghost.velocityY +0.8
  
   if ( climberGroup.isTouching(ghost)){
     
      ghost .velocityY=0;
     
   }
  
  if ( invisibleblockgroup.isTouching(ghost)||ghost.y>600){
     
      ghost .destroy();
     gameState="end";
     }
  
  
  
  
  
  spawnDoors();
  
  drawSprites ();
  
  }
  
  if (gameState  =="end"){
    stroke("pink");
    fill ("blue");
    textSize(30);
    text("gameover",300,300);
    
    
  }
  
  
  }

function spawnDoors (){
  
  if (frameCount % 240 === 0){ 
  door=createSprite (200,-50)
  door.addImage("door",doorImg);
    
  climber=createSprite(200,10);
  climber.addImage("climber",climberImg)
  
   invisibleblock =createSprite(200,15);
    invisibleblock.width=climber.width
    invisibleblock.height=1
    
    
    
  door.x= Math.round(random(120,400));
    
  door.velocityY=1;
    climber.x=door.x;
    invisibleblock.x=door.x;
    climber.velocityY=1
    invisibleblock.velocityY=1
    
  ghost.depth=door.depth;
    
    ghost.depth+=1
    
    invisibleblock.debug=true
  climberGroup.add(climber);
  doorsgroup.add(door);
   invisibleblockgroup .add( invisibleblock);
   climber.lifetime=600
      invisibleblock.lifetime=600
    door.lifetime=600;
  }
 
  
  
}


