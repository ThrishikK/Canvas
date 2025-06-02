const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // Get the 2D drawing context
console.log(ctx); // This will output the rendering context object

canvas.height = 500;
canvas.width = 500;

const grad = ctx.createLinearGradient(0, 0, 200, 0);
grad.addColorStop(0, "#00563B");
grad.addColorStop(0.5, "#00FFFF");
grad.addColorStop(1, "#013220");

ctx.fillStyle = grad;
ctx.fillRect(0, 0, 200, 200);
