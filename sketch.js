
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var ball ;
var tree;
var boy;
var chain;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	myWorld = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,680,800,40);
    ball= new Ball(15,500,50);
    tree= new Tree(600,400,50,80);
    boy=new Boy(10,450,80,100);
    chain=new Chain(ball.body,{x:35,y:500});
    m1=new Mango(550,220,60,60);
    m2=new Mango(500,250,60,60);
    m3=new Mango(550,150,60,60);
    m4=new Mango(550,300,60,60);
    m5=new Mango(630,170,60,60);
    m6=new Mango(600,250,60,60);
    m7=new Mango(700,350,60,60);
    m8=new Mango(750,220,60,60);
    m9=new Mango(700,250,60,60);
    m10=new Mango(700,150,60,60);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  boy.display();
  ball.display();
  tree.display();
  chain.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body , {x: mouseX , y:mouseY})
}

//function mouseReleased(){
 // chain.fly()
//}



