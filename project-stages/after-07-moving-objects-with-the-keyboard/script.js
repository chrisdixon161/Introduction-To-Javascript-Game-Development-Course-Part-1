const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 400;
const ctx = canvas.getContext("2d");
const paddleWidth = 8;
const paddleHeight = 80;
let playerScore = 0;
let computerScore = 0;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let playerPosition = canvas.height / 2;

document.addEventListener("keydown", movePaddle);
function movePaddle(e) {
	switch (e.code) {
		case "ArrowUp":
			playerPosition -= 15;
			break;
		case "ArrowDown":
			playerPosition += 15;
			break;
	}
}

function drawPlayerPaddle() {
	ctx.fillStyle = "red";
	ctx.fillRect(0, playerPosition - paddleHeight / 2, paddleWidth, paddleHeight);
}

function drawComputerPaddle() {
	ctx.fillStyle = "blue";
	ctx.fillRect(
		canvas.width - paddleWidth,
		canvas.height / 2 - paddleHeight / 2,
		paddleWidth,
		paddleHeight
	);
}

function drawBall() {
	ctx.beginPath();
	ctx.fillStyle = "gray";
	ctx.arc(ballX, ballY, 10, 0, 2 * Math.PI);
	ctx.fill();
	ballX += 2;
	ballY += 1;
}

function drawScore() {
	ctx.fillStyle = "red";
	ctx.font = "30px Helvetica";
	ctx.fillText(playerScore, canvas.width / 4, 50);
	ctx.fillText(computerScore, canvas.width * 0.75, 50);
}

function drawCanvas() {
	ctx.beginPath();
	ctx.setLineDash([6]);
	ctx.moveTo(canvas.width / 2, 0);
	ctx.lineTo(canvas.width / 2, canvas.height);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, 2 * Math.PI);
	ctx.stroke();
}

function loop() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawPlayerPaddle();
	drawComputerPaddle();
	drawScore();
	drawCanvas();
	drawBall();
}
setInterval(loop, 15);
