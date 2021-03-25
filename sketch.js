
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var garbage1, garbage2, garbage3, ground, paper, garbageImage;

function preload() 
{
	//garbageImage = loadImage("sprites/garbageCan.png");
	//paperI = loadImage("sprites/paperImage");
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	garbage1 = new Garbage();
	//garbage2 = new Garbage(540,600,10,300);
	//garbage3 = new Garbage(700,525,150,10);
	ground = new Ground(400,590.5,800,0.5);
	paper = new Paper(20,250,40);
	


	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background("grey");
  paper.display(); 
  garbage1.display();
  ground.display();
  if(paper.velocityX >= 2) {
	  paper.shapeColour = rgb(255,0,0);
  }
 }

function keyPressed()
	{
		if(keyCode === 32) 
		{
			Matter.Body.applyForce(paper.body,paper.body.position,{x:102,y:-100});
		}
	}