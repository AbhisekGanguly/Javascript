var canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

var ctx = canvas.getContext('2d');

console.log(canvas);

ctx.beginPath();
ctx.moveTo(500, 200);
ctx.lineTo(123, 150);
ctx.moveTo(600, 500);
ctx.lineTo(160, 250);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.moveTo(400, 230);
ctx.lineTo(242, 200);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.font = "30px comic sans ms";
ctx.fillText("MY FIRST CANVAS", 10, 50);
