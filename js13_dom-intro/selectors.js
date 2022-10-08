console.log("***** SELECTORS *****");

//* ===========================================================
//*                    GETELEMENTBYID()
//* ===========================================================


//* EXAMPLE-1
//* ===========================================================
const h1 = document.getElementById("header")
console.log(h1)
h1.style.color = "white"
h1.style.background = "red"

//* EXAMPLE-2
//* ===========================================================
const myInput = document.getElementById('input')
const button = document.getElementById('btn')
button.style.background = "black"
button.style.color = "white"
button.style.width = "7rem"
button.style.border = "none"
button.style.borderRadius = "10px"
button.style.padding = "1rem"
button.style.fontSize = "1.1rem"
myInput.style.padding = "1rem"

//* ===========================================================
//*                    GETELEMENTBYTAGNAME()
//* ===========================================================

//* EXAMPLE-3
//* ===========================================================
const list = document.getElementsByTagName("li")
console.log(list)
list[2].style.color = "red"
list.item(3).style.color = "blue"
const elementThree = list.item(3)
elementThree.textContent = "React / Vue / Angular"

list[4].innerText = "Solidity"

//! Differences between innerText-textContent-innerHTML
console.log(list[1].textContent) //? shows the whole texts
console.log(list[1].innerText) //? pays attention to HTML codes

list[4].innerHTML = "<a href='https://www.clarusway.com'>Clarusway Web Site</a>" //? Runs the HTML codes (Has security issues) 


//* ===========================================================
//*                    GETELEMENTBYCLASSNAME()
//* ===========================================================

//* EXAMPLE-4
//* ===========================================================
const myList = document.getElementsByClassName("list")
console.log(myList)
console.log(myList[0].innerText)

//* myList dizi dondursede dizi methodlari asagidaki gibi dogrudan kullanilamaz.
//* myList.forEach((item) => console.log(item.innerText))
//? Cozum-1 Array.from()
const myListArray = Array.from(myList)
myListArray.forEach((item) => console.log(item.innerText))

//? Cozum-2 Spread
// [...myList].forEach((item) => console.log(item.innerText))
//* ===========================================================
//*                      QUERYSELECTOR()
//* ===========================================================
 
//? 1- querySelector() etiket secebilir.
const myLi = document.querySelector("li")
console.log(myLi.innerText)
myLi.style.color = "darkgreen"

//? 2- querySelector() class secebilir.
const itemList = document.querySelector(".item-list")
itemList.style.background = "aqua"

//? 3- querySelector() id secebilir.
const input = document.querySelector("#input")
console.log(input.value)

document.querySelector("#btn").style.cursor = "pointer"


//? 4- querySelector() ile CSS'deki gibi secim yapilabilir.
const itemH2 = document.querySelector(".item-list h2")
itemH2.style.color = "purple"


