var canvas = document.querySelector('canvas');

canvas.height = innerHeight;
canvas.width = innerWidth;

var ctx = canvas.getContext('2d');

console.log(canvas);

var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var dx = Math.random() * 8;
var dy = Math.random() * 8;
var radius = 50;

function animate(){
requestAnimationFrame(animate);

ctx.clearRect(0, 0, innerWidth, innerHeight);
 ctx.beginPath();
 ctx.arc(x, y, radius, 0, Math.PI * 2, false);
 ctx.strokeStyle = "red";
 ctx.stroke();


 if(x + radius > innerWidth || x - radius < 0){
   dx = -dx;
  }
  if(y + radius > innerHeight || y - radius < 0){
    dy = -dy;
  }
  x += dx;
  y += dy;

}

animate();
