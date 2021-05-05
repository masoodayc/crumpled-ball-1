var paper,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;
var boxleft,boxleftbody,boxrightbody,boxbasebody;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	



	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	paper = Bodies.circle(100 , 200 , 40 , {restitution:0.3});
	World.add(world, paper);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 boxPosition = width/2-100;
	 boxY = 610;

	 boxleft = createSprite(boxPosition,boxY,20,100);
	 boxleft.shapeColor = "red";

	 boxleftbody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	  World.add(world, boxleftbody);

	  boxbase = createSprite(boxPosition+100,boxY+40,200,20);
	  boxbase.shapeColor = "red";
 
	  boxbasebody = Bodies.rectangle(boxPosition+100, boxY+25, 200,20 , {isStatic:true} );
	   World.add(world, boxbasebody);

	   boxright = createSprite(boxPosition+200,boxY,20,100);
	   boxright.shapeColor = "red";
  
	   boxrightbody = Bodies.rectangle(boxPosition+180, boxY, 20,100 , {isStatic:true} );
		World.add(world, boxrightbody);
  



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  ellipse(paper.position.x,paper.position.y,20,20);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.applyForce( paper,paper.position,{x:85,y:-85});
    
  }
}



