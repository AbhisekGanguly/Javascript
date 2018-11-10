var canvas = document.querySelector("canvas");

//canvas height and width setup

canvas.width = innerWidth;
canvas.height= innerHeight;

//variable input to get a 2d ouptput.Selecting variable

var ctx = canvas.getContext("2d");

//selecting colors

ctx.fillStyle="#fcdf99"

//rectangle looping
for (var i = 0; i <= 50; i++){
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  ctx.fillStyle = "black";
  ctx.fillRect(x, y, 40, 40);
}

//rectangle

ctx.fillRect(200,180,250,305);
ctx.fillStyle = "rgba(0, 255, 0, 0.6)";
ctx.fillRect(500,300,240,205);
ctx.fillStyle = "rgba(0, 0, 255, 0.4)";
ctx.fillRect(100,500,300,305);

//setting up console

console.log(canvas);

// line

ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);
ctx.lineTo(250, 160);
ctx.strokeStyle = "#000124"
ctx.stroke();

// Arc or circle

ctx.beginPath();
ctx.arc(300, 300, 150, 90, Math.PI * 2, false);
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.fill();

//looping circle

for( var i = 0; i <= 100; i++){
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
   ctx.beginPath();
   ctx.arc(x, y, 50, 0, Math.PI * 2, false);
   ctx.strokeStyle="blue";
   ctx.stroke();
}
