var colors = prompt('What Color Do You Want',"blue");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "red";
canvas.onmousemove = function(event){
var x = event.offsetX;
var y = event.offsetY;

ctx.strokeStyle =  colors;
ctx.beginPath();
ctx.arc(x,y,30,0,7,);
ctx.stroke();
ctx.closePath();
}

