
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(1800, 800);


	engine = Engine.create();
	world = engine.world;
    treeObject = new Tree (1300,400);
    
  kid = new Kid (200,600,300,600);
  mangoObj=new Mango (1350,250);
  rope1 = new Rope(stoneObj.body,{x:100,y:450})
  stoneObj=new Stone (100,460);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  mangoObj.display();
  kid.display();
  treeObject.display();
  stoneObj.display();
  treeObject.depth = mangoObj.depth;
  mangoObj.depth = mangoObj.depth + 1;

  drawSprites();
 
}



