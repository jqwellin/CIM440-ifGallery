// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22

var puppy, dinosaur, sloth, beach, balloon;
var pButton, dButton, sButton, bButton, aButton;

var currentImage= 0;
var currentAnimal = puppy;


function preload(){
  //load media
  puppy=loadImage("images/puppy.jpg");
  dinosaur=loadImage("images/dinosaur.jpg");
  sloth=loadImage("images/sloth.jpg");
  beach=loadImage("images/beach.jpg");
  balloon=loadImage("images/balloon.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

  pButton = createButton("Puppy");
  pButton.mousePressed(function(){
    currentImage=0;
  });

  dButton = createButton("Dinosaur");
  dButton.mousePressed(function(){
    currentImage=1;
  });

  sButton = createButton("Sloth");
  sButton.mousePressed(function(){
    currentImage=2;
  });

  bButton = createButton("Beach");
  bButton.mousePressed(function(){
    currentImage=3;
  });

  aButton = createButton("Balloon");
  aButton.mousePressed(function(){
    currentImage=4;
  });

}

function draw() {

  background(255);
  console.log("currentImage"+currentImage);

  if(currentImage==0){
    //show puppy
    currentAnimal= puppy;

  }else if(currentImage ==1){
    //show dino
    currentAnimal= dinosaur;

  }else if (currentImage==2){
    //show sloth
    currentAnimal= sloth;

  }else if (currentImage==3){
    //show sloth
    currentAnimal= beach;

  }
  else if (currentImage==4){
  //show sloth
  currentAnimal= balloon;

  }

image(currentAnimal, 0,0,currentAnimal.width/4, currentAnimal.height/4)

}
