var canvas = document.querySelector('canvas');

canvas.height = innerHeight;
canvas.width = innerWidth;

var ctx = canvas.getContext('2d');

console.log(canvas);

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = "blue";
      ctx.stroke();
      ctx.fillStyle = "rgba(0, 255, 0, 0.6)";
      ctx.fill();
      }
      this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
          this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      }
}

var circleArray = [];

for(var i = 0; i <=100; i++){
  var radius = Math.random() * 50;
  var x = Math.random() * [window.innerWidth - (radius * 2)] + radius;
  var y = Math.random() * [window.innerHeight - (radius * 2)] + radius;
  var dx = [Math.random() - 0.5] * 5;
  var dy = [Math.random() - 0.5] * 5;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}
function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
