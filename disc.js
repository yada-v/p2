/*
 * let img;
 *
 * function preload(){
 * img = loadImage('sky.jpg');
 * }
 *
 * */

let t;
function setup() {
	let rightDiv = document.getElementById("canvas-wrapper");

	  let canvas = createCanvas(rightDiv.clientWidth, rightDiv.clientHeight);
	  canvas.parent('canvas-wrapper');
}

function draw() {
	  background(50);

	t = document.getElementById("slider");
	let  s = parseFloat(t.value);

		translate(width/6,height/2);
		scale(1 + 7 * s);
		translate(-width/6, -height/2)


	noStroke();
	/*rectangles*/
	fill(220);
		rectMode(CENTER);
		rect(width/2,height/2 - 29 ,width/1.5, 30);
		
		rectMode(CENTER);
		rect(width/2,height/2 + 29,width/1.5, 30);

		fill(200*(1-s));
		rectMode(CENTER);
		rect(width/2,height/2 ,width/1.5, 28);

		for (let i = 0; i < 7; i++) {

				rectMode(CENTER);
					fill(255,218*s*(7-i)/7 + 36.42);
					rect(width/2, height/2 + -29 + 17 + 4*i , width/1.5, 4);
					
				}


		


}

