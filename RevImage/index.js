const canvasPlain = document.getElementById("canvasPlain");
const canvasReverse = document.getElementById("canvasReverse");

const ctxPlain = canvasPlain.getContext("2d");
const ctxReverse = canvasReverse.getContext("2d");

canvasPlain.width = 500;
canvasPlain.height = 250;

canvasReverse.width = 500;
canvasReverse.height = 250;

const img = new Image();
img.src = "./5.png";

let particles = [];
let imageLoaded = false;
let imgData;
let pixelSize = 1;

img.onload = () => {
  const imgX_Plain = (canvasPlain.width - img.width) / 2;
  const imgY_Plain = (canvasPlain.height - img.height) / 2;

  ctxPlain.drawImage(img, imgX_Plain, imgY_Plain);

  imgData = ctxPlain.getImageData(
    imgX_Plain,
    imgY_Plain,
    img.width,
    img.height
  );

  imageLoaded = true;
};

function drawPixel(r, g, b, a, x, y) {
  let { data } = imgData;
  r = data[r];
  g = data[g];
  b = data[b];
  a = data[a];

  ctxReverse.fillStyle = `rgba(${r},${g},${b},${a})`;
  x = canvasReverse.width - x;
  y = canvasReverse.height - y;
  ctxReverse.fillRect(x, y, pixelSize, pixelSize);
}

function drawReverse() {
  for (let y = img.height; y > 0; y--) {
    for (let x = img.width; x > 0; x--) {
      let multiple = x * y * 4;
      let a = multiple - 1;
      let b = multiple - 2;
      let g = multiple - 3;
      let r = multiple - 4;
      drawPixel(r, g, b, a, x, y);
    }
  }
}

canvasPlain.addEventListener("click", () => {
  if (imageLoaded) {
    drawReverse();
  }
});
