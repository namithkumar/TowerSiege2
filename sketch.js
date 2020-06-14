const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var polygon1;
var slingShot;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  stand = new Ground(475, 500, 280, 20);

  polygon1 = new Polygon(100,450,50);

  block1 = new Block(400,480,50,50);
  block2 = new Block(450,480,50,50);
  block3 = new Block(500,480,50,50);
  block4 = new Block(550,480,50,50);

  block5 = new Block(425,430,50,50);
  block6 = new Block(475,430,50,50);
  block7 = new Block(525,430,50,50);

  block8 = new Block(450,380,50,50);
  block9 = new Block(500,380,50,50);

  block10 = new Block(475, 330, 50, 50);
  
  slingShot = new SlingShot(polygon1.body,{x:100, y:450});
}

function draw() {
  background("yellow");  
  Engine.update(engine);

  stand.display();
  polygon1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  slingShot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode == 32){
    slingShot.attach(polygon1.body);
  }
}

