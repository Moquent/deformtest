var car1, car2, car3, car4, wall1, wall2, wall3, wall4, speed, weightcar1, weightcar2, weightcar3, weightcar4, defcar1, defcar2, defcar3, defcar4;
function setup() {
  createCanvas(1000,600);


  car1 = createSprite(50, 70, 50, 50);
  car2 = createSprite(50, 170, 50, 50);
  car3 = createSprite(50, 270, 50, 50);
  car4 = createSprite(50, 370, 50, 50);

  wall1 = createSprite(700, 70, 60, 80);
  wall2 = createSprite(700, 170, 60, 80);
  wall3 = createSprite(700, 270, 60, 80);
  wall4 = createSprite(700, 370, 60, 80);

  //enter your values
  speedcar1 = 60;
  speedcar2 = 50;
  speedcar3 = 45;
  speedcar4 = 55;

  //enter your values
  weightcar1 = 2260;
  weightcar2 = 1522;
  weightcar3 = 3000;
  weightcar4 = 2000;

  car1.velocityX = speedcar1;
  car2.velocityX = speedcar2;
  car3.velocityX = speedcar3;
  car4.velocityX = speedcar4;

  defcar1 = (0.5*weightcar1*speedcar1*speedcar1)/22500;
  defcar2 = (0.5*weightcar2*speedcar2*speedcar2)/22500;
  defcar3 = (0.5*weightcar3*speedcar3*speedcar3)/22500;
  defcar4 = (0.5*weightcar4*speedcar4*speedcar4)/22500;
  
}

function draw() {
  background("black"); 

  if(wall1.x - car1.x < (car1.width + wall1.width)/2)
  {
    car1.velocityX = 0;
    if(defcar1 < 100)
    {
      car1.shapeColor = "green";
    }
  
    if(defcar1 > 100 && defcar1 < 180)
    {
      car1.shapeColor = "yellow";
    }
  
    if(defcar1 > 180)
    {
      car1.shapeColor = "red";
    }  
  }
  if(wall2.x - car2.x < (car2.width + wall2.width)/2)
  {
    car2.velocityX = 0;
    if(defcar2 < 100)
    {
      car2.shapeColor = "green";
    }
  
    if(defcar2 > 100 && defcar2 < 180)
    {
      car2.shapeColor = "yellow";
    }
  
    if(defcar2 > 180)
    {
      car2.shapeColor = "red";
    }  
  }
  if(wall3.x - car3.x < (car3.width + wall3.width)/2)
  {
    car3.velocityX = 0;
    if(defcar3 < 100)
    {
      car3.shapeColor = "green";
    }
  
    if(defcar3 > 100 && defcar3 < 180)
    {
      car3.shapeColor = "yellow";
    }
  
    if(defcar3 > 180)
    {
      car3.shapeColor = "red";
    }  
  }
  if(wall4.x - car4.x < (car4.width + wall4.width)/2)
  {
    car4.velocityX = 0;
    if(defcar4 < 100)
    {
      car4.shapeColor = "green";
    }
  
    if(defcar4 > 100 && defcar4 < 180)
    {
      car4.shapeColor = "yellow";
    }
  
    if(defcar4 > 180)
    {
      car4.shapeColor = "red";
    }  
  }


  drawSprites();
}
