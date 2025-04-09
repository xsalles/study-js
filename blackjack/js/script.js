let result = document.getElementById("result");
let stopButton = document.getElementById("stop");
let drawButton = document.getElementById("drawAgain");

let isAlive = false;

let firstCard = document.getElementById("firstCard").innerText;
let secondCard = document.getElementById("secondCard").innerText;
let thirdCard = document.getElementById("thirdCard").innerText;
let sum = 0;

function drawCards() {
  result.innerText = "";
  document.getElementById("thirdCard").style.display = "none";

  firstCard = Math.floor(Math.random() * 11) + 1;
  secondCard = Math.floor(Math.random() * 11) + 1;

  if (firstCard === 11 && secondCard === 11) {
    firstCard = 1;
    secondCard = 1;
  }

  sum = firstCard + secondCard;

  document.getElementById("firstCard").innerText = "First Card: " + firstCard;
  document.getElementById("secondCard").innerText =
    "Second Card: " + secondCard;
  document.getElementById("sum").innerText = "Sum: " + sum;

  if (firstCard === 10 && secondCard === 10) {
    result.innerText = "Blackjack! You win!";
  }

  if (sum > 21) {
    result.innerText = "You lose!";

    drawButton.style.display = "none";
  }

  if (sum === 21) {
    result.innerText = "21! You won!";

    drawButton.style.display = "none";
  }

  if (sum < 21) {
    result.innerText = "You can draw again!";
    isAlive = true;

    stopButton.style.display = "block";
    drawButton.style.display = "block";
  }
}

function stopGame() {
  if (!isAlive) {
    result.innerText = "Game is already over!";
    return;
  }

  isAlive = false;
  result.innerText = "Game stopped. Your final sum is: " + sum;

  stopButton.style.display = "none";
  drawButton.style.display = "none";
}

function drawAnotherCard() {
  if (!isAlive) {
    result.innerText = "Game over! Please start a new game.";
    return;
  }

  thirdCard = Math.floor(Math.random() * 11) + 1;
  sum += thirdCard;

  drawButton.style.display = "none";

  document.getElementById("thirdCard").style.display = "block";

  document.getElementById("thirdCard").innerText = "Third Card: " + thirdCard;
  document.getElementById("sum").innerText = "Sum: " + sum;

  if (sum > 21 || sum < 21) {
    result.innerText = "You lose!";

    drawButton.style.display = "none";
  }

  if (sum === 21) {
    result.innerText = "21! You won!";

    drawButton.style.display = "none";
  }
}
