const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
 
var box1,box2,box3,box4,box5,box6,box7
var ground,ball,rope

var engine,world


function setup() {

  createCanvas(1600,800);
  
  engine=Engine.create()
  world=engine.world

  ground = new Ground(600,780,1500,20)
  box1=new Box(1000,200,90,90)
  box2=new Box(1000,200,90,90)
  box3=new Box(1000,200,90,90)
  box4=new Box(1000,200,90,90)
  box5=new Box(1000,200,90,90)
  box6=new Box(1000,200,90,90)
  box7=new Box(1000,200,90,90)

  ball = new Ball(500,300,100,100)

  rope = new Rope(ball.body,{x:900,y:50})

  


  
}

function draw() {
  background("darkGray");  

  Engine.update(engine)

  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  
  ball.display()
  rope.display()
  

 
}

function mouseDragged(){

  
  Matter.Body.setPosition(ball.body,{x:mouseX ,y:mouseY})

}

