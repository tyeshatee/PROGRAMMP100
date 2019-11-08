var diam1 = 0;

function setup() {
  // put setup code here
   createCanvas(500,500);
    background("#e3fcfc");
}

function draw() {
  // put drawing code here
//background("#a2bab2");
fill("#ffffff");
stroke("0b03fc");
    strokeWeight(2) ;
ellipse(mouseX,mouseY,20,20);
   
fill("#273738");
    stroke("#e3fcfc");
    strokeWeight(3);
ellipse(250,500,diam1,diam1);
    diam1= diam1+2
    fill("#5e4b3a");
    stroke("#5e4b3a");
    strokeWeight(4);
rect(100,320,30,100);
    fill("#ffffff");
    stroke("#ffffff")
 ellipse(300,600,600,600);
     fill("#f5f5d7");
    stroke("#f5f5d7");
    strokeWeight(3);
    ellipse(300,70,100,100);
    fill("#ffffff")
    stroke("black")
    textSize(20);
    textFont("Times");
    textStyle(ITALIC);
  text("winter",400,30);
      fill("#273738")
    stroke("#273738")
    textSize(20);
    textFont("courier New");
    textStyle();
  text("",200,50);
    fill("#5d8c53");
    stroke("#5d8c53");
 //triangle(100,50,20,20,100,300);
    fill("#5d8c53");
    stroke("#5d8c53");
 triangle(70,320,100,100,160,320);
    fill("#e3fcfc");
    stroke("#ffffff");
/*point(300,470);
    fill("#ffffff");
    stroke("#ffffff");
point(250,420);
    fill("#ffffff");
    stroke("#ffffff");
point(400,300);
    fill("#ffffff");
    stroke("#ffffff");
point(220,370);
    fill("#ffffff");
    stroke("#ffffff");
point(200,390);
    fill("#ffffff");
    stroke("#ffffff");
point(410,420);
    fill("#ffffff");
    stroke("#ffffff");
point(150,360);
    fill("#ffffff");
    stroke("#ffffff");
point(200,470);
    fill("#e3fcfc");
    stroke("#e3fcfc");
    strokeWeight(2);
    eclipse(200,200,20,20);*/
stroke("#e3fcfc");
point(random(0,width),random(0,width));
    
}


//function mousePressed(){
    if (diam1 >= 50){
        diam1 = 0;
}else{
    diam1 = diam1+10;
}
