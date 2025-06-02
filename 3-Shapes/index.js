const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // Get the 2D drawing context
console.log(ctx); // This will output the rendering context object

canvas.height = 750;
canvas.width = 1000;

// Circles
// 1
ctx.beginPath();
ctx.arc(50, 50, 50, 0, Math.PI * 2);
ctx.fillStyle = "#1B4D3E";
ctx.fill();
// 2
ctx.beginPath();
ctx.arc(200, 60, 50, 0, Math.PI * 2);
ctx.fillStyle = "#3FFF00";
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();

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
