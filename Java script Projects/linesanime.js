var canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

var ctx = canvas.getContext('2d');

console.log(canvas);

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
for (var i = 0; i < 101; i++) {
  var x = [Math.random()] * 1000;
  var y = [Math.random()] * 800;
  var ax = [Math.random()] * 1000;
  var ay = [Math.random()] * 900;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(ax, ay);
ctx.strokeStyle = "rgba(100, 0, 250, 0.8)";
ctx.stroke();
ctx.font = "30px comic sans ms";
ctx.fillText("MY FIRST CANVAS ANIMATION", 180, 300);
}
}
animate();
