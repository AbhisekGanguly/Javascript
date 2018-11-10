var canvas = document.querySelector('canvas');

canvas.height = innerHeight;
canvas.width = innerWidth;

var ctx = canvas.getContext('2d');

console.log(canvas);

var mouse = {
  x: undefined,
  y: undefined
}
var maxRadius = 40;
//var minRadius = 2;   ----this is over written by 'minRadius' variable

var colorArray = [
  '#00FF00',
  '#FFFF00',
  '#800080',
  '#FF00FF',
  '#00FFFF',
  '#2fcab1',
  '#12356d',
  '#9956cd',
];


window.addEventListener('mousemove',
function(event){
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse);     //just to make sure from the
                          //console that the event listener
                          //we added works correctly...
})
window.addEventListener('resize', function(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
);


function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = "blue";
      ctx.stroke();
      ctx.fillStyle = this.color;
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

        //interactivity occurs here..
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
        && mouse.y - this.y < 50 && mouse.y - this.y > -50){
          if (this.radius < maxRadius) {
            this.radius += 4;
          }
        }else if(this.radius > this.minRadius){
          this.radius -= 1;
        }
        this.draw();
      }
}

var circleArray = [];
  for(var i = 0; i <=1000; i++){
    var radius = Math.random() * 3 + 1;
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
