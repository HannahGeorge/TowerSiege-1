const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var platform1;
var block1, block2, block3, block4;
var block5, block6, block7, block8;
var block9, block10, block11, block12;
var block13, block14, block15, block16;

var platform2;
var block17, block18, block19;
var block20, block21, block22;
var block23, block24, block25;

var polygon;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);
    platform1 = new Ground(390, 450, 240, 10);
    platform2 = new Ground(700, 350, 180, 10);

    block1 = new Block(300, 275, 30, 40);
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 275, 30, 40);

    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);

    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);

    block16 = new Block(390, 155, 30, 40);

    block17 =  new Block(640, 175, 30, 40);
    block18 =  new Block(670, 175, 30, 40);
    block19 =  new Block(700, 175, 30, 40);
    block20 =  new Block(730, 175, 30, 40);
    block21 =  new Block(760, 175, 30, 40);
    
    block22 =  new Block(670, 135, 30, 40);
    block23 =  new Block(700, 135, 30, 40);
    block24 =  new Block(730, 135, 30, 40);

    block25 =  new Block(700, 95, 30, 40);


    polygon = new Polygon(50, 200, 20);

    slingshot = new Slingshot(polygon.body, {x: 100, y:300});
}

function draw(){
    background(60, 46, 46);
    Engine.update(engine);

    textSize(25);
    fill("lightyellow")
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.", 170, 30);

    ground.display();
    platform1.display();
    platform2.display();

    fill(103, 209, 234);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    
    fill(255, 190, 196);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block22.display();
    block23.display();
    block24.display();
    
    fill(0, 228, 208);
    block13.display();
    block14.display();
    block15.display();

    block25.display();
   
    fill(128, 125, 120);
    block16.display();

    polygon.display();
    slingshot.display();

}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){

    slingshot.fly();

}
console.log(block13)