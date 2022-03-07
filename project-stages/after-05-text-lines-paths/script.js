const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 400;
const ctx = canvas.getContext("2d");
const paddleWidth = 8;
const paddleHeight = 80;
let playerScore = 0;
let computerScore = 0;

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

ctx.fillStyle = "red";
ctx.font = "30px Helvetica";
ctx.fillText(playerScore, canvas.width / 4, 50);
ctx.fillText(computerScore, canvas.width * 0.75, 50);

ctx.beginPath();
ctx.setLineDash([6]);
ctx.moveTo(canvas.width / 2, 0);
ctx.lineTo(canvas.width / 2, canvas.height);
ctx.stroke();

ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, 2 * Math.PI);
ctx.stroke();
