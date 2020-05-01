var car, wall, speed, weight, deform;
function setup() {
  createCanvas(1600,400);


  car = createSprite(50, 200, 50, 50);

  wall = createSprite(1000, 200, 60, height/2);

  //enter your values
  speed = random(45, 60);

  //enter your values
  weight = (1250, 2500);

  car.velocityX = speed;
  deform = (0.5*weight*speed*speed)/22500;
}

function draw() {
  background("black"); 

  if(car.x >= (wall.x - (wall.width/2)) - car.width/2)
  {
    car.velocityX = 0;
    if(deform < 100)
    {
      car.shapeColor = "green";
    }
  
    if(deform > 100 && deform < 180)
    {
      car.shapeColor = "yellow";
    }
  
    if(deform > 180)
    {
      car.shapeColor = "red";
    }  
  }

  drawSprites();
}