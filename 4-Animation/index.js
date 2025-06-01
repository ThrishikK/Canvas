const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // Get the 2D drawing context
console.log(ctx); // This will output the rendering context object

canvas.height = 500;
canvas.width = 500;

let x = 50; // Starting x-coordinate
let y = 250; // Starting y-coordinate
let radius = 20;
let dx = 1; // Change in x (speed in the x-direction)
let dy = 5; // Change in y (speed in the y-direction)

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  // Draw the circle
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();

  // Update the circle's position
  x += dx;
  y += dy;

  // Bounce off the edges
  if (x + radius > canvas.width || x - radius < 0) {
    dx = -dx; // Reverse direction on x-axis
  }
  if (y + radius > canvas.height || y - radius < 0) {
    dy = -dy; // Reverse direction on y-axis
  }

  requestAnimationFrame(draw); // Call draw again
}

draw(); // Start the animation
