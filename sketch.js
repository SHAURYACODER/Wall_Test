var wall1,wall2,wall3,wall4;
var thickness;
var bullet1,bullet2,bullet3,bullet4;
var speed1,speed2,speed3,speed4;
var weight1,weight2,weight3,weight4;

function setup() {
  createCanvas(1366,657);

  speed1=random(223,321);
  speed2=random(223,321);
  speed3=random(223,321);
  speed4=random(223,321);

  weight1=random(30,52);
  weight2=random(30,52);
  weight3=random(30,52);
  weight4=random(30,52);

  thickness=random(22,83);

  bullet1=createSprite(50, 50, 50, 35);
  bullet1.velocityX = speed1;

  bullet2=createSprite(50, 200, 50, 35);
  bullet2.velocityX = speed2;

  bullet3=createSprite(50, 400, 50, 35);
  bullet3.velocityX = speed3;

  bullet4=createSprite(50, 600, 50, 35);
  bullet4.velocityX = speed4;

  wall1=createSprite(1200,50,thickness,100);
  wall1.shapeColor=color(80,80,80);

  wall2=createSprite(1200,200,thickness,100);
  wall2.shapeColor=color(80,80,80);

  wall3=createSprite(1200,400,thickness,100);
  wall3.shapeColor=color(80,80,80);

  wall4=createSprite(1200,600,thickness,100);
  wall4.shapeColor=color(80,80,80);
}

function draw() {
  background("black");

  if(hasCollided(bullet1, wall1)){

  bullet1. velocityX=0;
  var damage1=0.5 * weight1 * speed1* speed1/(thickness *thickness *thickness);
  
  if(damage1>10){
   wall1.shapeColor=color(255,0,0);
  }

  if(damage1<10){
    wall1.shapeColor=color(0,255,0)
  }
}

  if(hasCollided(bullet2, wall2)){

  bullet2. velocityX=0;
  var damage2=0.5 * weight2 * speed2* speed2/(thickness *thickness *thickness);
  
  if(damage2>10){
   wall2.shapeColor=color(255,0,0);
  }

  if(damage2<10){
    wall2.shapeColor=color(0,255,0)
  }
}

  if(hasCollided(bullet3, wall3)){

  bullet3. velocityX=0;
  var damage3=0.5 * weight3 * speed3* speed3/(thickness *thickness *thickness);
  
  if(damage3>10){
   wall3.shapeColor=color(255,0,0);
  }

  if(damage3<10){
    wall3.shapeColor=color(0,255,0)
  }
}

  if(hasCollided(bullet4, wall4)){

  bullet4. velocityX=0;
  var damage4=0.5 * weight4 * speed4* speed4/(thickness *thickness *thickness);
  
  if(damage4>10){
   wall4.shapeColor=color(255,0,0);
  }

  if(damage4<10){
    wall4.shapeColor=color(0,255,0)
  }
}

drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}