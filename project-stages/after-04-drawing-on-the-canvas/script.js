var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;
const paddleWidth = 8;
const paddleHeight = 80;

ctx.fillStyle = "red";
ctx.fillRect(
	0,
	canvas.height / 2 - paddleHeight / 2,
	paddleWidth,
	paddleHeight
);

ctx.fillStyle = "blue";
ctx.fillRect(
	canvas.width - paddleWidth,
	canvas.height / 2 - paddleHeight / 2,
	paddleWidth,
	paddleHeight
);

ctx.fillStyle = "gray";
ctx.arc(canvas.width / 2, canvas.height / 2, 10, 0, 2 * Math.PI);
ctx.fill();
