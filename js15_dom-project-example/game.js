//* ======================================================
//*                      GUESS MY NUMBER
//*     *Game Logic
//* ======================================================

//? 1-100 choose a random number
let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
const msg = document.querySelector(".msg");
const body = document.querySelector("body");

//? variables
let score = 10;

let topScore = localStorage.getItem("topScore") || 0;
//? bu islem localstorege'da topScore isminde bir degisken olusturur. devaminda || ile yaptigimiz ise short circuit yontemi. yani olusturulan degiskenin icinde herhangi bir deger yok ise 0 olarak oku demektir.
console.log(topScore);

document.querySelector(".top-score").textContent = topScore

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
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".secret-number").innerText = randomNumber;
    document.querySelector(".check-btn").disabled = true;

    if (score > topScore) {
    //   topScore = score;
    localStorage.setItem("topScore", score)
    document.querySelector(".top-score").textContent = score;
    }

  }
  //? if randomNumber !== input.value look at the score ==>
  else if (randomNumber < guessInput) {
    score -= 1;
    document.querySelector(".score").innerText = score;
    if (score > 0) {
      msg.innerText = "Decrease! ⏬⏬";
    } else {
      msg.innerText = "Sorry, You Lost! Play Again?";
      document.querySelector(".check-btn").disabled = true;
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
  randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  document.querySelector(".score").innerText = score;
  document.querySelector(".check-btn").disabled = false;
  document.querySelector(".secret-number").innerText = "?";
  document.querySelector("body").classList.remove(".bg-success", ".bg-danger");
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").innerText = "Starting..";
});

//! LOCALSTORAGE-SESSIONSTORAGE
//!Degerleri localstorage veya sessionstorage'a atarak ram disinda saklamak icin once (eger atilan deger non-primitive ise) string haline getir sonra localstorage'a at. okumak icin de tersini yap
// myObj = { a: 1, b: 2, c: 3 };
// localStorage.setItem("OBJ", JSON.stringify(myObj))
// const readObj = localStorage.getItem("OBJ")
// const readOBJ = JSON.parse(localStorage.getItem("OBJ"))
// console.log(readObj)
// console.log(typeof readObj)
// console.log(readOBJ)
// console.log(typeof readOBJ)
