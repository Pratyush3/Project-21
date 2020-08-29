var wall,thickness;
var bullet,speed,weight;

function setup(){
    createCanvas(1600,440);
    wall = createSprite(1200,200,thickness,height/2);
    bullet = createSprite(20,200,thickness,20);
    thickness=random(22,83);
    weight=random(30,52);
    speed=random(223,321);
}

function draw(){
   background(225,225,225);
   wall.shapeColor = color(80,80,80);
    bullet.velocityX = speed;
    wall.depth=bullet.depth;
    bullet.depth=bullet.depth+1;
    if(wall.x-bullet.x<(bullet.width+wall.width)/2){
        bullet.velocityX=0;
        var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
        if(damage<10){
            bullet.shapeColor = color(0,225,0);
            text("Damage = Not effective",1400,370);
        }
        if(damage>10){
            bullet.shapeColor = color(225,0,0);
            text("Damage = Effective",1400,370);
        }
    }
    text("Damage = "+damage,1400,350);
    text("Speed = "+speed,1400,390);
    text("Weight = "+weight,1400,410);
    text("Thickness = "+thickness,1400,430);
    drawSprites();




}

