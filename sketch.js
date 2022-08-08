
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, leftSide, rightSide;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = 
	{
		isStatic: false,
    	restitution: 0.3,
    	friction: 0,
    	density: 1.2
	}
	//Create the Bodies Here.

  ball = Bodies.circle(200, 650, 10, ball_options);
  World.add(world, ball);

	groundObj = new Ground(width / 2, 670, width, 20);
	leftSide = new Ground(700, 600, 20, 120);
	rightSide = new Ground(900, 600, 20, 120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	groundObj.display();
	leftSide.display();
	rightSide.display();

	ellipse(ball.position.x, ball.position.y, 20);

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
		Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 8, y: 6});
	}
}