const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world ;
var Block1, Block2, Block3, Block4, Block5, Block6, Block7, Block8, Block9 ,Block10, Block11,Block12,Block13;
var Block14,Block15,Block16,Block17,Block18,Block19,Block20,Block21,Block22,Block23,Block24,Block25;
var ground1,ground2;
var polygon,polygonimg;
var slingshot;
var bg = "bg.png";
var backgroundImg;
var score = 0;
var gameState = "onSling";

function preload() {
   polygonimg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

//big tower
Block1=new BLOCK(490,485);
Block2=new BLOCK(530,485);
Block3=new BLOCK(570,485);
Block4=new BLOCK(610,485);
Block5=new BLOCK(650,485);
Block6=new BLOCK(690,485);
Block7=new BLOCK(730,485);

Block17=new BLOCK(530,435);
Block18=new BLOCK(570,435);
Block19=new BLOCK(610,435);
Block20=new BLOCK(650,435);
Block21=new BLOCK(690,435);

Block22=new BLOCK(570,385);
Block23=new BLOCK(610,385);
Block24=new BLOCK(650,385);

Block25=new BLOCK(610,335);

//small tower
Block8=new BLOCK(930,185);
Block9=new BLOCK(970,185);
Block10=new BLOCK(1010,185);
Block11=new BLOCK(1050,185);
Block12=new BLOCK(1090,185);

Block13=new BLOCK(970,135);
Block14=new BLOCK(1010,135);
Block15=new BLOCK(1050,135);

Block16=new BLOCK(1010,85);

//big tower base
ground1 = new GROUND(610,510,345,15);

//small tower base
ground2 = new GROUND(1010,210,245,15);

//polygon
polygon = new POLYGON(190,200,60);

slingshot = new SLINGSHOT(polygon.body,{x:190,y:200});

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }else{
        background("black");
    }

    textSize(20);
    stroke(25,93,0);
    strokeWeight(3);
fill("red")
text("Score: "+ score,width/2,50)
    Engine.update(engine);

    stroke(0);

   Block1.display("lightgreen")
   Block2.display("lightblue")
   Block3.display("yellow")
   Block4.display("lightgreen")
   Block5.display("lightblue")
   Block6.display("yellow")
   Block7.display("lightgreen")
   Block8.display("lightblue")
   Block9.display("yellow")
   Block10.display("lightgreen")
   Block11.display("lightblue")
   Block12.display("yellow")
   Block13.display("lightgreen")
   Block14.display("lightblue")
   Block15.display("yellow")
   Block16.display("lightgreen")
   Block17.display("lightblue")
   Block18.display("yellow")
   Block19.display("lightgreen")
   Block20.display("lightblue")
   Block21.display("yellow")
   Block22.display("lightgreen")
   Block23.display("lightblue")
   Block24.display("yellow")
   Block25.display("lightgreen")
   ground1.display();
   ground2.display();
   slingshot.display();
   polygon.display();

   Block1.score();  Block13.score();
   Block2.score();  Block14.score();
   Block3.score();  Block15.score();
   Block4.score();  Block16.score();
   Block5.score();  Block17.score();
   Block6.score();  Block18.score();
   Block7.score();  Block19.score();
   Block8.score();  Block20.score();
   Block9.score();  Block21.score();
   Block10.score(); Block22.score();
   Block11.score(); Block23.score();
   Block12.score(); Block24.score();
          Block25.score();
   getTime(); 

}
function mouseDragged(){

    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }

}
function mouseReleased() {

slingshot.fly();
gameState = "launched";
}

function keyPressed(){

if(keyCode == 32){
    gameState = "onSling";
    Matter.Body.setPosition(polygon.body,{x:190,y:200});
    slingshot = new SLINGSHOT(polygon.body,{x:190,y:200});
}

}

async function getTime(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);

if(hour>=6 && hour<=18){
    bg = "bg.png"
}else{
    bg = "bg2.jpg"
}
backgroundImg = loadImage(bg);
}