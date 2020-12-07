
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
  box1 = new Box(515,550,20,280);
  box2 = new Box(625,660,240,20);
  box3 = new Box(735,550,20,280);
  Dustbin1 = new Dustbin(625,550,260,300);
	Paper1 = new Paper(200,450,70);
	Engine.run(engine);
  
}


function draw() {
  background(255,255,0);
  rectMode(CENTER);
  background(0);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  Dustbin1.display();
  Paper1.display();
 console.log(Paper1.body.position.y);
}


function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(Paper1.body, Paper1.body.position, {x:500, y:-1215})
    }
}



