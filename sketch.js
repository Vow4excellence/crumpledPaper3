
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground1 = new Ground(800,680);
  
	Engine.run(engine);
  
}


function draw() {
  background(255,255,0);
  rectMode(CENTER);
  background(0);
  ground1.display();
  
}


function keyPressed(){
    if (keyCode === UP_ARROW){
       //
    }
}



