const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine;
var particles = [];
var plinkos = [];
var plinkos2 = [];
var plinkos3 = [];
var plinkos4 = [];
var divisions = [];

var divisionHeight=300;
var particle;
var gameState = "play";
var score = 0;
var turn = 0;

function setup() 
{
  createCanvas(800, 800);
  engine = Engine.create(engine);
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos2.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos3.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos4.push(new Plinko(j,375));
    }
  
}
 


function draw() {
  background("black");
  fill("white");
  textSize(30);
  text("500",20,540);
  text("500",100,540);
  text("500",180,540);
  text("500",260,540);
  text("100",340,540);
  text("100",420,540);
  text("100",500,540);
  text("200",580,540);
  text("200",660,540);
  text("200",740,540);

  Engine.update(engine);
  
  if(gameState = "end"){
    textSize(100);
    text("GameOver",150,250);
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos2[i].display();
    
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos3[i].display();
    
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos4[i].display();
    
  }
    
  //for (var j = 0; j < particles.length; j++) {
   
    // particles[j].display();
  // }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   mousePressed();

   if(particle!==null)
   {
     particle.display();
     if(particle.body.position.y>760)
     {
       if(particle.body.position.x<300)
       {
         score=score+500
         particle = null;
         if(turn>=5) gameState = "end";
       }
     }
   }

   if(particle!==null)
   {
     particle.display();
     if(particle.body.position.y>760)
     {
       if(particle.body.position.x>301 && particle.body.position.x<600)
       {
         score=score+100
         particle = null;
         if(turn>=5) gameState = "end";
       }
     }
   }

   if(particle!==null)
   {
     particle.display();
     if(particle.body.position.y>760)
     {
       if(particle.body.position.x>601 && particle.body.position.x<900)
       {
         score=score+200
         particle = null;
         if(turn>=5) gameState = "end";
       }
     }
   }

  ground.display();
  //drawSprites();
}

function mousePressed(){
  if(gameState!=="end"){
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
}