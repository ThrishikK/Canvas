const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // Get the 2D drawing context
console.log(ctx); // This will output the rendering context object

canvas.height = 512;
canvas.width = 512;

// ctx.fillStyle = "Magenta";
// ctx.fillRect(0, 0, 1024, 512);

let downX = 0;
let downY = 512;
let step = 36;
let red = 0;
let green = 0;
let blue = 0;

function drawLine(color) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(downX, downY);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.stroke();

  downX += 1;
}

let count = 0;

while (red <= 256) {
  while (green <= 256) {
    while (blue <= 256) {
      console.log(red, green, blue);
      let color = `rgb(${red},${green},${blue})`;

      drawLine(color);
      count += 1;
      blue += step;
    }
    blue = 0;
    green += step;
  }
  green = 0;
  red += step;
}

console.log(count);
