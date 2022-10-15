//* ======================================================
//*                      GUESS MY NUMBER
//*     *Game Logic
//* ======================================================

//? 1-100 choose a random number
const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
const msg = document.querySelector(".msg");
const body = document.querySelector("body");

//? variables
let score = 10;
let topScore = 0;

//* When the user presses the ChechBtn
//! you won ==> background = green ==> if score > topScore topScore == score ==> secret number will be visiable
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  //? if there's no input ==> warning
  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //? if randomNumber == input.value
  } else if (randomNumber === guessInput) {
    msg.innerText = "Congrats You Win!";
    document.querySelector("check-btn").disabled = true;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".secret-number").innerText = randomNumber;

    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").innerText = topScore;
    }
  }
  //? if randomNumber !== input.value look at the score ==>
  else if (randomNumber < guessInput) {
    score -= 1;
    document.querySelector(".score").innerText = score;
    if (score <= 0) {
      msg.innerText = "Decrease! ⏬⏬";
    } else {
      msg.innerText = "Sorry, You Lost! Play Again?";
      document.querySelector("check-btn").disabled = true;
    }
  } else if (randomNumber > guessInput) {
    if (score > 0) {
      score -= 1;
      document.querySelector(".score").innerText = score;
      msg.innerText = "Increase! ⏫⏫";
    } else {
      msg.innerText = "Sorry, You Lost! Play Again?";
      score = 0;
      document.querySelector(".secret-number").innerText = randomNumber;
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".check-btn").disabled = true;
    }
  }
});

//* When the user presses the againBtn reset the game

document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  const randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  document.querySelector(".score").innerText = score;
  document.querySelector(".check-btn").disabled = false;
  document.querySelector(".secret-number").innerText = "?";
  document.querySelector("body").classList.remove(".bg-success", ".bg-danger");
  document.querySelector(".guess-input").value = ""
  document.querySelector(".msg").innerText = "Starting.."
});
