function setup() {
  createCanvas(600,600);
 car1=createSprite(30,100,20,30);
 car2=createSprite(30,150,20,30);
 car3=createSprite(30,200,20,30);
stand1=createSprite(580,100,10,20);
stand2=createSprite(580,150,10,20);
stand3=createSprite(580,200,10,20);
}

function draw() {
  background(0,0,0); 
car1.x=World.mouseX;
car1.y=World.mouseY;
car2.x=World.mouseX;
car2.y=World.mouseY;
car3.x=World.mouseX;
car3.y=World.mouseY;
if (car1.x-stand1.x<car1.width/2+stand1.width/2
  && stand1.x-car1.x<car1.width/2+stand1.width/2
  && car1.y-stand1.y<car1.width/2+stand1.width/2
  && stand1.y-car1.y<car1.width/2+stand1.width/2
  
  ){
  car1.shapeColor="red";
  stand1.shapeColor="black";

}
else{
  stand1.shapeColor="black";
  car1.shapeColor="blue";
  
}
if (car2.x-stand2.x<car2.width/2+stand2.width/2
  && stand2.x-car2.x<car2.width/2+stand2.width/2
  && car2.y-stand2.y<car2.width/2+stand2.width/2
  && stand2.y-car2.y<car2.width/2+stand2.width/2
  
  ){
  car2.shapeColor="yellow";
  stand2.shapeColor="black";

}
else{
  stand2.shapeColor="black";
  car2.shapeColor="pink";
  
}
if (car3.x-stand3.x<car3.width/2+stand3.width/2
  && stand3.x-car3.x<car3.width/2+stand3.width/2
  && car3.y-stand3.y<car3.width/2+stand3.width/2
  && stand3.y-car3.y<car3.width/2+stand3.width/2
  
  ){
  car3.shapeColor="green";
  stand3.shapeColor="black";

}
else{
  stand3.shapeColor="black";
  car3.shapeColor="purple";
  
}
  drawSprites();
}