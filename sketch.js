var ground , greenBall;
var stone1, stone2, stone3, stone4, stone5, stone6;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 750);
	engine = Engine.create();
	world = engine.world;

	//creating the ground
	var groundOptions={
		restitution:0.5, isStatic:true
	}
	ground=Bodies.rectangle(400 , 730 , 800 ,10, groundOptions);
	World.add(world, ground);

	//creating the green ball
	var greenballOptions={
		restitution:1.5, isStatic:true
	}
	greenBall = Bodies.circle(400 , 100 , 40, greenballOptions);
	World.add(world, greenBall);
	
	
	var stoneOptions={
		restitution:0.2, isStatic:false
	}
	//creating the pyramid
	stone1 = Bodies.rectangle(400 , 700 , 50 , 50, stoneOptions);
	stone2 = Bodies.rectangle(470 , 700 , 50 , 50, stoneOptions);
	stone3 = Bodies.rectangle(330 , 700 , 50 , 50, stoneOptions);
	stone4 = Bodies.rectangle(370 , 650 , 50 , 50, stoneOptions);
	stone5 = Bodies.rectangle(440 , 650 , 50 , 50, stoneOptions);
	stone6 = Bodies.rectangle(400 , 600 , 50 , 50, stoneOptions);
	
	//Adding the pyramids to the world
	World.add(world, stone1);
	World.add(world, stone2);
	World.add(world, stone3);
	World.add(world, stone4);
	World.add(world, stone5);
	World.add(world, stone6);
}


function draw() {
  Engine.update(engine);
  background("cadetBlue");

  fill("black")
  textSize(30)
  text("Press the Down Arrow to drop the green block", 100,50);

  strokeWeight(3) 
  stroke("white")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)


  fill("lightgreen")
  ellipseMode(RADIUS)
  ellipse(greenBall.position.x, greenBall.position.y, 40,40)


  rectMode(CENTER)
  fill("brown")
  rect(stone1.position.x, stone1.position.y, 70,70)
  rect(stone2.position.x, stone2.position.y, 70,70)
  rect(stone3.position.x, stone3.position.y, 70,70)
  //draw the rectangle for stone 4
  //draw the rectangle for stone 5
  rect(stone6.position.x, stone6.position.y, 70,70)
  
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(greenBall,true); 
	}
}

