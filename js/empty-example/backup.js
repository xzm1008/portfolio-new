var Y_AXIS = 1;
var X_AXIS = 2;
var babyblue, babyorange;
var xspacing = 64;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 25.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave

var x, y;
// var petal;
// var direction = 90; //circle initial direction moving down


var petals = []

function preload() {

}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  babyblue = color(223, 227, 240, 100);
  babyorange = color(249, 239, 230, 100);
  myred = color(220, 152, 141, 100);
    x = 0;
  y = 0;

    // petal = createSprite(400, 150, 50, 100);
    // var myAnimation = petal.addAnimation("floating", "assets/petal0000.png", "assets/petal0003.png");


  // w = width+16;
  // dx = (TWO_PI / period) * xspacing;
  // yvalues = new Array(floor(w/xspacing));


  // //create the sprites
  // petal = createSprite(600, 200, 50, 100);
  // petal.addAnimation("floating", "petal1.png", "petal4.png");


}



function draw() {

  // //aside of setting the velocity directly you can move a sprite
  // //by providing a speed and an angle
  // direction += 2;
  // //speed, angle
  // petal.attractionPoint(.2, mouseX, mouseY);
  // //since the force keeps incrementing the speed you can
  // //set a limit to it with maxSpeed
  // petal.maxSpeed = 5;


    //bakcground
    setGradient(0, 0, width, height, babyblue, babyorange, Y_AXIS);


    noStroke();
    fill(220, 152, 141, 100);
    // rotate(PI / 3.0);
    arc(x, y, 60, 40, PI, PI+HALF_PI );
    arc(x-30, y, 60, 60, 0, HALF_PI );



  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 5);
  // Moving up at a constant speed
  y = y +random(0, 4);
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
    // // display petal
    // for (i = 0; i < petals.length; i++) {
    //     var currentObj = petals[i];
    //     rotate(radians(frameCount));
    //     petal(currentObj.xpos, currentObj.ypos, currentObj.size);
    //     currentObj.xpos += random(0.4,1.5);
    //     currentObj.ypos += random(0.4,1.5);
    //     // if (petals[i].xpos > width+20) {
    //     //     petals.splice(i, 1);
    //     // }
    // }



}

// function petal(x, y, size) {
//     noStroke();
//     fill(220, 152, 141, 100);
//     // rotate(PI / 3.0);
//     arc(x, y, 60*size, 40*size, PI, PI+HALF_PI );
//     arc(x-30*size, y, 60*size, 60*size, 0, HALF_PI );
// }




function mousePressed() {
    // var newpetal = {
    //     xpos: mouseX,
    //     ypos: mouseY,
    //     size: random(0.4,1.5)
    // };
    // petals.push(newpetal);

}



function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}






