var car,wall;
var speed ,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500))
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=(80,80,80)
  car.velocityX=speed;
  car.depth=wall.depth+4;
  car.shapeColor="white"
}

function draw() {
  background(0,0,0);
  fill(255,255,255)
  textSize(20)
  text("Speed : "+speed+"km/hr",400,20)
  text("Weight : "+weight+"kg",1200,20)
  
  if(wall.x-car.x<=(car.width + wall.width)/2) {
    car.velocityX=0;
    car.x=1445;
    //speed=0;
    deformation=Math.round(0.5*weight*speed*speed/22500);
    
    
    if(deformation>180){
      car.shapeColor=color(255,0,0);
      fill(255,0,0)
      textSize(20);
      text("Car is not safe",800,200)
      text("Deformation : "+deformation,800,240)
    }
    else if(deformation<180&&deformation>100){
      car.shapeColor=color(230,230,0)
      fill(230,230,0)
      textSize(20);
      text("Car is safe",800,200)
      text("Deformation : "+deformation,800,240)
    }
    else if(deformation<100){
      car.shapeColor=color(0,255,0)
      fill(0,255,0)
      textSize(20);
      text("Car is very safe",800,200)
      text("Deformation : "+deformation,800,240)
      
    }
  }

  
  
  
    drawSprites();
  
}
