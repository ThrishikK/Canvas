const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // Get the 2D drawing context
console.log(ctx); // This will output the rendering context object

canvas.height = 500;
canvas.width = 500;

let size = 1;

function returnColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  const color = `rgb(${r},${g},${b})`;
  return color;
}

function paint() {
  let x = 0;
  let y = 0;

  while (y < canvas.height) {
    x = 0;
    while (x < canvas.width) {
      ctx.fillStyle = returnColor();
      ctx.fillRect(x, y, size, size);
      x += size;
    }
    y += size;
  }
}
paint();
// setInterval(paint, 100);

// // Rectangle
// ctx.fillStyle = returnColor();
// ctx.fillRect(0, 0, 50, 50);

// Circles
// 1
// ctx.beginPath();
// ctx.arc(50, 50, 50, 0, Math.PI * 2);
// ctx.fillStyle = "#1B4D3E";
// ctx.fill();
// // 2
// ctx.beginPath();
// ctx.arc(200, 60, 50, 0, Math.PI * 2);
// ctx.fillStyle = "#3FFF00";
// ctx.fill();
// ctx.lineWidth = 5;
// ctx.stroke();

// // Rectangle
// ctx.fillStyle = "Blue";
// ctx.fillRect(50, 50, 100, 50);

// // Rect Outline
// ctx.strokeStyle = "maroon";
// ctx.lineWidth = 5;
// ctx.strokeRect(150, 150, 100, 50);

// // lines
// ctx.beginPath();
// ctx.moveTo(200, 200);
// ctx.lineTo(0, 0);
// ctx.strokeStyle = "teal";
// ctx.lineWidth = 5;
// ctx.stroke();
// ctx.closePath();

// // circle
// ctx.beginPath();
// ctx.arc(250, 250, 50, 0, Math.PI * 2);
// ctx.fillStyle = "#9F8170";
// ctx.fill();
// ctx.stroke();

// // Quad Curve
// ctx.beginPath();
// ctx.moveTo(1000, 0);
// ctx.quadraticCurveTo(500, 375, 1000, 750);
// ctx.strokeStyle = "#3D0C02";
// ctx.lineWidth = 5;
// ctx.stroke();
