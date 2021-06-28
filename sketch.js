var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 750);
	engine = Engine.create();
	world = engine.world;

	//creating the ground
	ground=Bodies.rectangle(400 , 740 , 800 ,10, {restitution:0.5, isStatic:true});
	World.add(world, ground);

	//creating the green ball
	ball1 = Bodies.circle(400 , 100 , 40, {restitution:1, isStatic:true});
	World.add(world, ball1);
	
	//creating the pyramid
	square1 = Bodies.rectangle(400 , 700 , 50 , 50, {restitution:1, isStatic:false});
	square2 = Bodies.rectangle(470 , 700 , 50 , 50, {restitution:1, isStatic:false});
	square3 = Bodies.rectangle(330 , 700 , 50 , 50, {restitution:1, isStatic:false});
	square4 = Bodies.rectangle(370 , 650 , 50 , 50, {restitution:1, isStatic:false});
	square5 = Bodies.rectangle(440 , 650 , 50 , 50, {restitution:1, isStatic:false});
	square6 = Bodies.rectangle(400 , 600 , 50 , 50, {restitution:1, isStatic:false});
	
	//Adding the pyramids to the world
	World.add(world, square1);
	World.add(world, square2);
	World.add(world, square3);
	World.add(world, square4);
	World.add(world, square5);
	World.add(world, square6);
}


function draw() {
  Engine.update(engine);
  background("cadetBlue");

  stroke("white")
  strokeWeight(4)
  textSize(30)
  text("Press the Down Arrow to drop the green block", 100,50);


  fill("black")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)

  strokeWeight(3)
  fill("lightgreen")
  ellipseMode(RADIUS)
  ellipse(ball1.position.x, ball1.position.y, 40,40)

  
  rectMode(CENTER)
  fill("brown")
  rect(square1.position.x, square1.position.y, 70,70)
  rect(square2.position.x, square2.position.y, 70,70)
  rect(square3.position.x, square3.position.y, 70,70)

  
  rect(square6.position.x, square6.position.y, 70,70)
  

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(ball1,true); 
	}
}

