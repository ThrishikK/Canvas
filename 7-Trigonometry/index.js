const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // Get the 2D drawing context
console.log(ctx); // This will output the rendering context object

canvas.height = 500;
canvas.width = 500;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100;

const degToRadConstant = 0.0174533;

const angles = [0, 15, 30, 45, 60, 75, 90, 330];

ctx.fillStyle = "maroon";

angles.forEach((each) => {
  const x = centerX + radius * Math.cos(each * degToRadConstant);
  const y = centerY + radius * Math.sin(each * degToRadConstant);

  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();
});
