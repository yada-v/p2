
let img;

function preload(){
img = loadImage('https://p5js.org/assets/learn/learning-p5js.png');
}


function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-wrapper');
}

function draw() {
  background(50);
image(img, 50, 50);
}
