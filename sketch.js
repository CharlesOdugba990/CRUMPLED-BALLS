
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bd1,bd2,bd3,ground,paper

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bd1 = new Dustbin(width/2-100,610,20,100)
	bd2 = new Dustbin(width/2+10,650,200,20)
	bd3 = new Dustbin(width/2+120,610,20,100)
	ground =  new Ground(400,670,800,10)
	paper = new Paper(85,85,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bd1.trashcan();
  bd2.trashcan();
  bd3.trashcan();
  ground.tcan();
  paper.greenbin();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

