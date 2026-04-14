
let img;

function preload(){
img = loadImage('sky.jpg');
}


function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-wrapper');
}

function draw() {
  background(50);
image(img, 50, 50);
}
