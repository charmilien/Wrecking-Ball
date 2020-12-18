const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,wball,rope,ground,bg;
var  box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;


function setup() {
  createCanvas(1200,600);
  bg=loadImage("bg2.webp")
 
  engine=Engine.create();
  world=engine.world;

  ground=Bodies.rectangle(600,height-30,width,40,{isStatic: true})
  World.add(world,ground)

  wball=Bodies.circle(100,200,50,{restitution:0.5,density:1.5})
  World.add(world,wball)

  rope=Constraint.create({bodyA:wball,pointB:{x:450,y:0},length:400,stiffness:0.5})
  World.add(world,rope)

  box1 = new Box(900, 100);
  box2 = new Box(900, 100);
  box3 = new Box(900, 100);
  box4 = new Box(900, 100);
  box5 = new Box(900, 100);
  box6 = new Box(900, 100);
  box7 = new Box(800, 100);
  box8 = new Box(800, 100);
  box9 = new Box(800, 100);
  box10 = new Box(800, 100);
  box11 = new Box(800, 100);
  box12 = new Box(800, 100);
  box13 = new Box(700, 100);
  box14 = new Box(700, 100);
  box15 = new Box(700, 100);
  box16 = new Box(700, 100);
  box17 = new Box(700, 100);
  box18 = new Box(700, 100);
  box19 = new Box(700, 100);
  box20 = new Box(700, 100);
  Engine.run(engine)
}

function draw() {
  background(bg);  
 // Engine.update(engine)
  rectMode(CENTER)
  fill("brown")
  strokeWeight(4)
  line(wball.position.x,wball.position.y,450,0)
  rect(ground.position.x,ground.position.y,width,40)
  fill(133,101,48)
    push()
      noStroke();
      circle(wball.position.x,wball.position.y,100)
    pop();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  
}
function mouseDragged()
{
  Matter.Body.setPosition(wball,{x:mouseX,y:mouseY})
}