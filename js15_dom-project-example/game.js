//* ======================================================
//*                      GUESS MY NUMBER
//*     *Game Logic
//* ======================================================

//? 1-100 arasinda rastgele bir sayi tut
const randomNumber = Math.round(Math.random() * 100)
console.log(randomNumber)
const msg = document.querySelector(".msg")



//* When the user presses the ChechBtn 
document.querySelector(".check-btn").addEventListener("click", () => {
    const guessInput = Number(document.querySelector(".guess-input").value)
    //? if there's no input ==> warning
    if(!guessInput){
        msg.innerText = "Please enter a number"
        //? if rastgele == input.value 
    } else if(randomNumber === guessInput){
        msg.innerText = "Congrats You Win!"
}
})





//! you won ==> background = green ==> if score > topScore topScore == score ==> secret number will be visiable

//? eger rastgele !== input.value look at the score ==>
//! if score > 0 
//!     score = score - 1
//!     if random < input.value ===> decrease
//!     else ===> increase
//!else ==> Sorry you're lost.



//* When the user presses the againBtn
