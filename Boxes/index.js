const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // Get the 2D drawing context

canvas.height = 4096;
canvas.width = 4096;
let x = 0;
let y = 0;
let red = 0;
let blue = 0;
let green = 0;
let iterations = 0;

function paintRectange(color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
  x += 1;
  if (x === canvas.width) {
    x = 0;
    y += 2;
  }
  if (red === 255 || blue === 255 || green === 255) {
    console.log(color);
  }
}

while (red < 256) {
  green = 0;
  while (green < 256) {
    blue = 0;

    while (blue < 256) {
      let color = `rgb(${red},${green},${blue})`;
      paintRectange(color);
      blue += 1;
    }
    green += 1;
  }

  red += 1;
}

// for (let index = 0; index < 256; index++) {
//   let color = `rgb(${255},${0},${255})`;
//   paintRectange(color);
// }
