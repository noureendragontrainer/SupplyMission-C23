var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
    
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:-1,isStatic:true});
	World.add(world, packageBody);
	packageBody.velocityY+=8;
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	/*
	//Create the container
	rect1 = Bodies.rectangle(350,600,10,100);
	World.add(world,rect1);
	
	rect2 = Bodies.rectangle(550,600,10,100);
	World.add(world,rect2);

	rect3 = Bodies.rectangle(450,640,200,10);
	World.add(world,rect3);
    */
   rect1 = new Box(350,600,10,100);
   rect2 = new Box(550,600,10,100);
   rect3 = new Box(450,640,200,10);
   
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y  
	drawSprites();
	rect1.display();
	rect2.display();
	rect3.display();
    keyPressed();
}
function keyPressed() {
	if (keyCode===DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.setStatic(packageBody,false);
	   fill(255);
	   text("Couldn't get it to not bounce",200,500);
	   
	 }
   }
   



