let t;

function setup() {
let rightDiv = document.getElementById("canvas-wrapper");
let canvas = createCanvas(rightDiv.clientWidth, rightDiv.clientHeight);
canvas.parent('canvas-wrapper');
t = document.getElementById("slider");
}

function drawArrow(x1, y1, x2, y2) {
let angle = atan2(y2 - y1, x2 - x1);

line(x1, y1, x2, y2);

push();
translate(x2, y2);
rotate(angle);
triangle(0, 0, -10/8, 5/8, -10/8, -5/8);
pop();
}

function draw() {
background(50);

let s = parseFloat(t.value);

push();

translate(width/6, height/2);
scale(8);
translate(-width/6, -height/2);

noStroke();

fill(220);
rectMode(CENTER);
rect(width/2 + s*6*width/96, height/2 - 29, width/1.5, 30);

rect(width/2, height/2 + 29, width/1.5, 30);

for (let i = 0; i < 7; i++) {
fill(255, 218*(7-i)/7 + 36.42);
rect(width/2 + s*(6-i)*width/96, height/2 - 29 + 17 + 4*i, width/1.5, 4);
}

stroke(255);
strokeWeight(0.5);
fill(255);
drawArrow(width/6, height/2 - 29, width/6 + s*6*width/96, height/2 - 29);

pop();


}
