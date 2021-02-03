const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function setup() {

  createCanvas(1200,600);
	
  engine = Engine.create();
  world = engine.world;

  polygon= new Polygon(200,300,50);

  rope= new Rope(polygon.body,{x:200,y:300});
	
  Engine.run(engine);

}


function draw() {

  background("purple");

  polygon.display();
  rope.display();

  drawSprites();

}
