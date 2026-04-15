// <reference types="p5/global" />

let t;
function setup() {
let rightDiv = document.getElementById("canvas-wrapper");

  let canvas = createCanvas(rightDiv.clientWidth, rightDiv.clientHeight);
  canvas.parent('canvas-wrapper');
}

function draw() {
  background(50);
}

