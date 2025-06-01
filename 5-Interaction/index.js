const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

// Circle properties
let x = canvas.width / 2; // Initial x-coordinate (center)
let y = canvas.height / 2; // Initial y-coordinate (center)
const radius = 20; // Circle's radius
const speed = 5; // Movement speed

// Key press state
const keys = {};

// Event listeners for key presses
window.addEventListener("keydown", (event) => {
  keys[event.key] = true; // Mark key as pressed
  console.log(keys);
});

window.addEventListener("keyup", (event) => {
  keys[event.key] = false; // Mark key as released
  console.log(keys);
});

// Function to draw the circle
function drawCircle() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the circle
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();

  // Update position based on key presses
  if (keys["ArrowUp"] && y - radius > 0) y -= speed; // Move up
  if (keys["ArrowDown"] && y + radius < canvas.height) y += speed; // Move down
  if (keys["ArrowLeft"] && x - radius > 0) x -= speed; // Move left
  if (keys["ArrowRight"] && x + radius < canvas.width) x += speed; // Move right

  // Request the next animation frame
  requestAnimationFrame(drawCircle);
}

// Start the animation
drawCircle();
