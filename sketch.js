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

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 boxBottomSprite = createSprite(width/2,600,200,20)
	 boxBottomSprite.shapeColor = "red"

	 boxBottom = Bodies.rectangle(width/2,600,200,20,{isStatic:true} );
	 World.add(world,boxBottom);

	 boxRightSprite = createSprite(width/3+30,510,20,200)
	 boxRightSprite.shapeColor = "red"

	 boxRight = Bodies.rectangle(width/3+30,510,20,200,{isStatic:true} );
	 World.add(world,boxRight);

	 boxLeftSprite = createSprite(width/1.5-30,510,20,200)
	 boxLeftSprite.shapeColor = "red"

	 boxLeft = Bodies.rectangle(width/1.5-30,510,20,200,{isStatic:true} );
	 World.add(world,boxLeft);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  if(keyDown("down")){
	 Matter.Body.setStatic(packageBody,false);
  }
  drawSprites();
 
}





