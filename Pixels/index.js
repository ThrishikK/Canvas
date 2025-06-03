const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 500;

const img = new Image();
img.src = "./R.jpeg";
console.log(img);

let particles = [];
let imageLoaded = false;
let imgData;

img.onload = () => {
  const imgX = (canvas.width - img.width) / 2;
  const imgY = (canvas.height - img.height) / 2;

  ctx.drawImage(img, imgX, imgY);

  imgData = ctx.getImageData(imgX, imgY, img.width, img.height);
  imageLoaded = true;
};

function createParticles() {
  particles = [];
  const imgX = (canvas.width - img.width) / 2;
  const imgY = (canvas.height - img.height) / 2;

  for (let y = 0; y < img.height; y += 4) {
    for (let x = 0; x < img.width; x += 4) {
      const index = (y * img.width + x) * 4;
      const r = imgData.data[index];
      const g = imgData.data[index + 1];
      const b = imgData.data[index + 2];
      const a = imgData.data[index + 3];

      if (a > 0) {
        particles.push({
          x: imgX + x,
          y: imgY + y,
          size: 4,
          color: `rgba(${r},${g},${b},${a / 255})`,
          velocityX: (Math.random() - 0.5) * 10,
          velocityY: (Math.random() - 0.5) * 10,
        });
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    p.x += p.velocityX;
    p.y += p.velocityY;
    p.size *= 0.95; // Shrinks over time

    if (p.size > 0.5) {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    }
  });

  particles = particles.filter((p) => p.size > 0.5);
  if (particles.length > 0) {
    requestAnimationFrame(animateParticles);
  } else {
    console.log(null);
  }
}

canvas.addEventListener("click", () => {
  if (imageLoaded) {
    createParticles();
    animateParticles();
  }
});
