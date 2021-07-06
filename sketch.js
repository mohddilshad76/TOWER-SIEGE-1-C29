const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;//block;
var stand1,stand2;
var step1,step2,step3,step4,step5,step6;
var ball;
var slingShot;
var polygon_img,bottle_img;

function preload(){
  polygon_img=loadImage("polygon.png");
 // bottle_img=loadImage("glass bottle.png");

}
function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(1500,620);

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //making steps
  step1 = new Step(524,290,20,10);
  step2 = new Step(540,275,10,20);
  step3 = new Step(555,260,20,10);
 // step1 = new Step(524,290,20,10);
  //step1 = new Step(524,290,20,10);
  //step1 = new Step(524,290,20,10);



  //level one
  block1 = new Block(300,275,30,40);
  //block1=addImage(bottle_img)

  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //level 2 setup
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);

  //level two

  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);

  //level 3

  blocks9 = new Block(700,95,30,40);
  blocks10 = new Block(690,75,30,40)

  // ball with slingshot

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  
  //create slingshot

  slingShot = new SlingShot(this.ball,{x:200,y:200});

  
//  Engine.run(engine);

}
function draw() {
  background("green"); 
 Engine.update(engine);
 
  textSize(20);
  fill("lightyellow");
  

 // ground.display();
 stand1.display();
 stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  stroke(13);
  fill("red");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  stroke(13);
  fill("yellow");
  blocks6.display();
  blocks7.display();
  blocks8.display();

  stroke(13);
  fill("black")
  blocks9.display();
  fill("blue")
  blocks10.display();

  slingShot.display();

  strokeWeight(2);
  stroke(13);
  fill("gray")
  step1.display();
  step2.display();
  step3.display();



ellipse(ball.position.x,ball.position.y,20);

drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
     slingshot.attach(this.polygon);
  }
}