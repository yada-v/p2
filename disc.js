/// <reference types="p5/global" />

let slider;

function setup() {
  const wrapper = document.getElementById("canvas-wrapper");
  const canvas = createCanvas(wrapper.clientWidth, wrapper.clientHeight);
  canvas.parent('canvas-wrapper');

  // 1. CACHE THE DOM ELEMENT
  // Fetch it once in setup, not 60 times a second in draw()
  slider = document.getElementById("slider");

  // 2. SET GLOBALS
  rectMode(CENTER);
  noStroke();
}

function draw() {
  // 3. MATCH UI AESTHETICS
  // Using the background color from your CSS makes the canvas seamlessly blend in
  background('#f4f6fb');

  let s = parseFloat(slider.value);

  // 4. PARAMETERIZE GEOMETRY (No Magic Numbers)
  // Base everything on width/height so it scales perfectly across devices
  const cx = width / 2;
  const cy = height / 2;
  const plateW = width * 0.65;
  const plateH = 30;
  const gap = 58; // Total distance between the two plates

  push();
  // Smooth scaling effect based on the slider
  translate(cx, cy);
  scale(1 + 0.3 * s); // Toned down the extreme scaling for a smoother look
  translate(-cx, -cy);

  // --- PLATES ---
  fill('#c5cde0'); // Nice metallic gray from your CSS border colors
  rect(cx, cy - gap/2 - plateH/2, plateW, plateH, 6); // Added a slight border radius

  fill('#aab4c8'); // Slightly darker for depth
  rect(cx, cy + gap/2 + plateH/2, plateW, plateH, 6);

  // --- FLUID LAYERS ---
  const numLayers = 7;
  const layerH = gap / numLayers;

  for (let i = 0; i < numLayers; i++) {
    // Replaced your hardcoded math with p5's map() for clean, dynamic alpha calculation
    let baseAlpha = map(i, 0, numLayers, 255, 50); 
    let currentAlpha = baseAlpha * s + 36; // Keeps a faint ghost image when slider is at 0

    fill(74, 144, 226, currentAlpha); // The exact #4A90E2 blue from your CSS

    // Calculate exact Y position for each layer starting from the top of the gap
    let layerY = (cy - gap/2) + (i * layerH) + (layerH / 2);

    // Draw the layer slightly inset from the plates so it looks contained
    rect(cx, layerY, plateW * 0.98, layerH * 0.85, 2); 
  }

  pop();
}

// 5. MAKE IT RESPONSIVE
function windowResized() {
  const wrapper = document.getElementById("canvas-wrapper");
  resizeCanvas(wrapper.clientWidth, wrapper.clientHeight);
}