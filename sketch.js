const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var Im,II
var dustbinObj, paperObject,groundObject	
var world;
function preload(){
	II = loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(1600, 700);
	Im = createSprite(1200,470,20,20)
	Im.addImage(II)
	rectMode(CENTER);

    
	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,60);
	groundObject=new ground(width/2,670,width,20);
	
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(192,192,192);
  dustbinObj.display();
  groundObject.display();
  drawSprites();
 
  paperObject.display();
 

  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:230,y:-230});
    
  	}
}
