
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var boyImg,treeImg;
var stone;
var ground;
var tree;
var mango1, mango2,mango3,mango4,mango5, mango6,mango7, mango8,mango9, mango10;
var chain;

function preload()
{
	boyImg=loadImage("boy.png");
	
	treeImg=loadImage("tree.png");	
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=new Boy(200,450,0.1);

	stone=new Stone(150,400,30,30);

	//ground
	ground=Bodies.rectangle(500,580,1000,40,{isStatic:true});
	World.add(world,ground);

	tree=new Tree(700,400,0.5);

	mango1=new Mango(random(750,850),random(270,350),30,30);
	mango2=new Mango(random(820,650),random(180,250),30,30);
	mango3=new Mango(random(830,930),random(260,330),30,30);
	mango4=new Mango(random(720,820),random(180,220),30,30);
	mango5=new Mango(random(690,740),random(100,150),30,30);
	mango6=new Mango(random(570,630),random(220,230),30,30);
	mango7=new Mango(random(460,550),random(280,330),30,30);
	mango8=new Mango(random(830,850),random(230,250),30,30);
	mango9=new Mango(random(620,680),random(300,340),30,30);
	mango10=new Mango(random(720,770),random(340,370),30,30);

	chain=new SlingShot(stone.body,{x:150,y:400})

	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  
  drawSprites();
  stone.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  chain.display();

  rectMode(CENTER);
  fill("brown")
  rect(ground.position.x,ground.position.y,1000,40);

  detectCollision(mango1);
  detectCollision(mango2);
  detectCollision(mango3);
  detectCollision(mango4);
  detectCollision(mango5);
  detectCollision(mango6);
  detectCollision(mango7);
  detectCollision(mango8);
  detectCollision(mango9);
  detectCollision(mango10);

  reset();
 
  fill("green");
  textSize(20)
  text("drag and release the stone",100,100);

  fill("green");
  textSize(20)
  text("press space to throw again",100,150)
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	chain.fly();
}

function detectCollision(mango){
	var stonePosition=stone.body.position;
	var mangoPosition=mango.body.position;

	if(stonePosition.x-mangoPosition.x<stone.width+mango.width&&
		mangoPosition.x-stonePosition.x<stone.width+mango.width&&
		stonePosition.y-mangoPosition.y<stone.width+mango.width&&
		mangoPosition.y-stonePosition.y<stone.width+mango.width) {

		Matter.Body.setStatic(mango.body,false);
	}
}

function reset(){
	if(keyDown("space")){
		Matter.Body.setPosition(stone.body,{x:150,y:400})
		chain.attach();
	}
}