
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,ground,stone,rubber,iron,sand,sand1,sand2,sand3,sand4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   hammer=new Hammer(400,350,100,10);
  
   ground=new Ground(400,695,800,10);
   stone=new Stone(200,550,100,100);
   rubber=new Rubber(600,400,60,60);
   iron=new Iron(Math.round(random(10,750)),300,50,100);
   sand=new Sand(Math.round(random(10,750)),350,10,10);
   sand1=new Sand(Math.round(random(10,750)),350,10,10);
   sand2=new Sand(Math.round(random(10,750)),350,10,10);
   sand3=new Sand(Math.round(random(10,750)),350,10,10);
   sand4=new Sand(Math.round(random(10,750)),350,10,10);
  
	Engine.run(engine);
  
}


function draw() {

 
  rectMode(CENTER);
  background("lightblue");

   
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  iron.display();
  sand.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  drawSprites();
 
}



