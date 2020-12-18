let pageNum = 1;
let numPages = 9;

let image1;
let image2;
let image3;
let image4;
let image5;
let image6;
let image7;
let image8;
let image9;

function preload(){
  image1 = loadImage ("beach.jpg");
  image2 = loadImage ("trailer.jpg");
  image3 = loadImage ("cartel_93_north.jpg");
  image4 = loadImage ("carWindow.jpg");
  image5 = loadImage ("food.jpg");
  image6 = loadImage ("rock.jpg");
  image7 = loadImage ("walking.jpg");
  image8 = loadImage ("breathing.jpg");
  image9 = loadImage ("black&white.png");

}


function setup() {
  createCanvas(800, 800);
  console.log(pageNum);
}

function draw() {
  if (pageNum ==1){
    background(255,0,0);
    text ("page1",100,100);
    image(image1,0,0,width,height);
  
  }
   else if (pageNum ==2){
    background(255,0,0);
    text ("page2",100,100);
    image(image2,0,0,width,height);
  }
    else if (pageNum ==3){
    background(255,0,0);
    text ("page3",100,100);
    image(image3,0,0,width,height);
  }
    else if (pageNum ==4){
    background(255,0,0);
    text ("page4",100,100);
    image(image4,0,0,width,height);
  }
    else if (pageNum ==5){
    background(255,0,0);
    text ("page5",100,100);
    image(image5,0,0,width,height);
  } 
    else if (pageNum ==6){
    background(255,0,0);
    text ("page6",100,100);
    image(image6,0,0,width,height);
  }  
    else if (pageNum ==7){
    background(255,0,0);
    text ("page7",100,100);
    image(image7,0,0,width,height);
  }  
    else if (pageNum ==8){
    background(255,0,0);
    text ("page8",100,100);
    image(image8,0,0,width,height);
  } 
    else if (pageNum ==9){
    background(255,0,0);
    text ("page9",100,100);
    image(image9,0,0,width,height);
  }  
}
function mouseClicked() {
  
 if (pageNum <numPages) {
    pageNum++;
  } else if (pageNum == 9) {
    pageNum = 1;
  }
}