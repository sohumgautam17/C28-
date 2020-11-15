
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree1, ground1, boyImage, stone1,stoneObj;
var mangoobj1, mangoobj2, mangoobj3, mangoobj4, mangoobj5;
var slingshot;



function preload()
{
	ball_img=loadImage("stone.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);


	//Create the Bodies Here.

	tree1 = new tree(200, 200, 20, 20);
	ground1 = new Ground(400, 500, 800, 20);
	boyImage = new boy(100, 200, 20, 20);
	mangoobj1 = new mango(470, 450, 30);
	mangoobj2 = new mango(510, 440,30);
	mangoobj3 = new mango(550, 400,30);
	mangoobj4 = new mango(610, 460, 30);
	mangoobj5 = new mango(570, 420,30);
	
	stoneObj=new stone(235,420,30); 
  slingshot = new SlingShot(stoneObj.body,{x:125,y:565});
  
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  tree1.display();
  boyImage.display();
  //stone.display();
  mangoobj1.display();
  mangoobj2.display();
  mangoobj3.display();
  mangoobj4.display();
  mangoobj5.display();
  ground1.display();
  stoneObj.display();
 

  
   slingshot.display();

   detectcollision(stoneObj, mangoobj1);
   detectcollision(stoneObj, mangoobj2);
   detectcollision(stoneObj, mangoobj3);
   detectcollision(stoneObj, mangoobj4);  
   detectcollision(stoneObj, mangoobj5);


}



  function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	slingshot.fly();
  }
  function keyPressed(){
    if (keyCode === 32) {
      Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
      slingshot.attach(stoneObj.body);
    }
}  


function detectcollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }