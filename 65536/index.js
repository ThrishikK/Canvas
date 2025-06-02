const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 1024;

let r = 0;
let g = 0;
let b = 0;
let x = 0;
let y = 0;

function paintPixel(r, g, b) {
  ctx.fillStyle = `rgb(${r},${g},${b})`;
  ctx.fillRect(x, y, 1, 1); // Use 1x1 pixels
  y += 1;
  if (y >= 512) {
    y = 0;
    x += 1;
  }
}

function step() {
  // Do a batch of pixels per frame
  let count = 0;
  while (r < 256 && count < 1000) {
    if (g >= 256) {
      g = 0;
      r++;
    }
    if (b >= 256) {
      b = 0;
      g++;
    }
    paintPixel(r, g, b);
    b++;
    count++;
  }

  if (r < 256) {
    requestAnimationFrame(step);
  } else {
    console.log("1323!");
  }
}

requestAnimationFrame(step);
