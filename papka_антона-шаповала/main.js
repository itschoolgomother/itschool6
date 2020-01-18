var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "green"

var cx = innerWidth/2;
var cy = innerHeight/2;

function circle(r){

	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "black";
	ctx.arc(cx,cy,r,0,Math.PI*2);
	ctx.stroke();
};
for(var i = 25;i<200; i+=15){
circle(i);
};
