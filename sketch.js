var hero,asteroids,villan;

function setup(){

    createCanvas(1350,600)

    hero = createSprite(600,500);
    hero.shapeColor = "White";

    asteroids = createSprite(600,100);
    hero.shapeColor = "Blue";

    villan = createSprite(710,100)
    hero.shapeColor = "Green";
    
   
}
function draw(){
    background("Red");

   drawSprites();
}