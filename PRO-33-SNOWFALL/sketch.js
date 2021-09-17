var bgImg
var children,childrenImg1,childrenImg2,childrenImg3,childrenImg4,childrenImg5,childrenImg6,childrenImg7,childrenImg8,childrenImg9,childrenImg10,childrenImg11,childrenImg13,childrenImg14,childrenImg15,childrenImg16,childrenImg17,childrenImg18;
var dog,dogImg1,dogImg2,dogImg3,dogImg4,dogImg5,dogImg6,dogImg7,dogImg8;
var snow 

function preload(){
  bgImg = loadImage("Images/snow1.jpg");
  childrenImg1 = loadImage("Images/children/Boy1.png");
  childrenImg2 = loadImage("Images/children/Boy2.png");
  childrenImg3 = loadImage("Images/children/Boy3.png");
  childrenImg4 = loadImage("Images/children/Boy4.png");
  childrenImg5 = loadImage("Images/children/Boy5.png");
  childrenImg6 = loadImage("Images/children/Boy6.png");
  childrenImg7 = loadImage("Images/children/Boy7.png");
  childrenImg8 = loadImage("Images/children/Boy8.png");
  childrenImg9 = loadImage("Images/children/Boy9.png");
  childrenImg10 = loadImage("Images/children/Boy10.png");
  childrenImg11 = loadImage("Images/children/Boy11.png");
  //childrenImg12 = loadImage("Images/children/Boy12.png");
  childrenImg13 = loadImage("Images/children/Boy13.png");
  childrenImg14 = loadImage("Images/children/Boy14.png");
  childrenImg15 = loadImage("Images/children/Boy15.png");
  childrenImg16 = loadImage("Images/children/Boy16.png");
  childrenImg17 = loadImage("Images/children/Boy17.png");
  childrenImg18 = loadImage("Images/children/Boy18.png");

  dogImg1 = loadImage("Images/Dog/Dog1.png");
  dogImg2 = loadImage("Images/Dog/Dog2.png");
  dogImg3 = loadImage("Images/Dog/Dog3.png");
  dogImg4 = loadImage("Images/Dog/Dog4.png");
  dogImg5 = loadImage("Images/Dog/Dog5.png");
  dogImg6 = loadImage("Images/Dog/Dog6.png");
  dogImg7 = loadImage("Images/Dog/Dog7.png");
  dogImg8 = loadImage("Images/Dog/Dog8.png");

}

function setup() {
  createCanvas(800,400);

  children = createSprite(180,280,400,400);
  children.addAnimation("children_playing",childrenImg1,childrenImg2,childrenImg3,childrenImg4,childrenImg5,childrenImg6,childrenImg7,childrenImg8,childrenImg9,childrenImg10,childrenImg11,childrenImg13,childrenImg14,childrenImg15,childrenImg16,childrenImg17,childrenImg18)
  children.scale = 2;

  dog = createSprite(500,350,50,50);
  dog.addAnimation("dog_playing",dogImg1,dogImg2,dogImg3,dogImg4,dogImg5,dogImg6,dogImg7,dogImg8)
}

                 
function draw() {
  background(bgImg);  
  drawSprites();
} 