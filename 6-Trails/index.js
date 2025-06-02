const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

// Circle properties
let x = canvas.width / 2; // Initial x-coordinate (center)
let y = canvas.height / 2; // Initial y-coordinate (center)
const radius = 20; // Circle's radius
const speed = 5; // Movement speed

// Initial circle color
let circleColor = "blue";

// Key press state
const keys = {};

// Event listeners for key presses
window.addEventListener("keydown", (event) => {
  keys[event.key] = true; // Mark key as pressed

  // Change the color randomly on arrow key press
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    circleColor = getRandomColor();
  }
});

window.addEventListener("keyup", (event) => {
  keys[event.key] = false; // Mark key as released
});

// Function to generate a random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to draw the circle
function drawCircle() {
  // Add a transparent layer to create trails
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; // Semi-transparent white
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the circle
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = circleColor; // Use the dynamic color
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
