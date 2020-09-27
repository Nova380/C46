var gameState='ready';
var startbutton,Lbutton,Rbutton,Bot,ObstaclesGroup,ObstaclesGroup2;
function setup() {
  createCanvas(windowWidth-20,windowHeight-20);
Lbutton=createButton("⬅");
Rbutton=createButton("----ᐳ");
Lbutton.position(windowWidth/20,windowHeight*7/8);
Lbutton.hide();
Rbutton.position(windowWidth*9/10,windowHeight*7/8);
Rbutton.hide();
Bot=createSprite(windowWidth/2,windowHeight*6/7);
Bot.visible=false;
edges=createEdgeSprites();
obstacleGroup=createGroup();
obstacleGroup2=createGroup();
Startbutton=createButton("START");
Startbutton.position(windowWidth/2,windowHeight/3);
}

function draw() {
  background(255);  
 Startbutton.mousePressed(()=>{
   gameState='play';
   Startbutton.hide();
   Rbutton.show();
   Lbutton.show();
   Bot.visible=true;
 })
if(gameState==='play'){
  Bot.velocityX=0;
  Bot.velocityY=0;
  spawnBenches();
  spawnDbenches();
  
  Lbutton.mousePressed(()=>{
    Bot.setVelocity(-3,-3);
  })
 Rbutton.mousePressed(()=>{
   Bot.setVelocity(3,-3);
 })
}
Bot.collide(edges);
drawSprites();
}
function spawnBenches() {
  if(World.frameCount % 180 === 0) {
    var r=Math.round(random(50,windowWidth-50))
    var obstacle = createSprite(r,0,150,50);
    obstacle.shapeColor='green'
    obstacle.velocityY = 2
    //var rand = randomNumber(1,6);
    ObstaclesGroup.add(obstacle);
    Obastacle.Lifetime=windowHeight/2;
  }
}
function spawnDbenches() {
  if(World.frameCount % 180 === 0) {
    var r=Math.round(random(50,windowWidth-50))
    var obstacle2 = createSprite(r,-100,150,50);
    obstacle2.shapeColor='red'
    obstacle2.velocityY = 2
    
    //var rand = randomNumber(1,6)
    ObstaclesGroup2.add(obstacle2);
    Obastcle2.Lifetime=windowHeight/2;
  }
}
