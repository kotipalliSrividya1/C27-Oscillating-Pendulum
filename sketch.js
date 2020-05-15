const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
function setup(){
  createCanvas(800,600);
  engine = Engine.create();
	world = engine.world;
  
  ball =new Ball(400,300,30);
  constraint= new Chain({x:400,y:10},ball.body)
  holder= new Holder();
}
function draw(){
  background("yellow");
  Engine.update(engine);
  constraint.display();
  ball.display();
  holder.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  Matter.Body.setStatic(ball.body, false);
  
}