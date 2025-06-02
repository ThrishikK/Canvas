const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // Get the 2D drawing context
console.log(ctx); // This will output the rendering context object

canvas.height = 512;
canvas.width = 512;

let r = 0;
let g = 0;
let b = 0;
let x = 0;
let y = 0;

function paintPixel(r, g, b) {
  ctx.fillStyle = `rgb(${r},${g},${b})`;
  ctx.fillRect(x, y, 0.125, 0.125);
  y += 2;
  if (y > 256) {
    y = 0;
    x += 2;
  }
}

function colorCode() {
  while (r < 256) {
    g = 0;
    while (g < 256) {
      b = 0;
      while (b < 256) {
        paintPixel(r, g, b);
        b += 1;
      }
      g += 1;
    }
    r += 1;
  }
  console.log(r, g, b);
}

colorCode();
