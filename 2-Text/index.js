const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // Get the 2D drawing context

canvas.height = 500;
canvas.width = 500;

ctx.font = "30px Roboto";

// 1
ctx.fillStyle = "blue";
ctx.fillText("June-1", 50, 50);

// 2 - Outline text
ctx.strokeStyle = "maroon";
ctx.strokeText("July-1", 50, 100);

// 3 - Text width
const text1 = "June-1";
const text2 = "July-1";
console.log(ctx.measureText(text1).width, ctx.measureText(text2).width);
