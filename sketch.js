
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;

var dustbin1, paper1, ground1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	dustbin1 = new dustbin(800,690);
	paper1 = new paper(300,600,80);
	
	ground1 = new ground(800,680,1600,10);

	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
 
	dustbin1.display();
	paper1.display();
	ground1.display();
  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145});

    
  	}
}





