//* ======================================================
//*                      GUESS MY NUMBER
//*     *Game Logic
//* ======================================================

//? 1-100 choose a random number
const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
const msg = document.querySelector(".msg");
let playable = true;

//? variables
let score = 10;
let topScore = 0;

//* When the user presses the ChechBtn
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  //? if there's no input ==> warning
  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //? if randomNumber == input.value
  } else if (randomNumber === guessInput) {
    msg.innerText = "Congrats You Win!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".secret-number").innerText = randomNumber;

    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").innerText = topScore;
    } //? if randomNumber !== input.value look at the score ==>
  } else if (randomNumber < guessInput) {
    if (score > 0) {
      score -= 1;
      msg.innerText = "Decrease!";
    } else {
      msg.innerText = "Sorry, You Lost! Play Again?";
      playable = false;
    }
  }
});

//! you won ==> background = green ==> if score > topScore topScore == score ==> secret number will be visiable

//! if score > 0
//!     score = score - 1
//!     if random < input.value ===> decrease
//!     else ===> increase
//!else ==> Sorry you're lost.

//* When the user presses the againBtn
