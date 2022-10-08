console.log("******* TRAVERSING DOM *******")

//* ===========================================================
//*                      DOM TRAVERSING
//* ===========================================================
//? Bir HTML elementi uzerinden baska elementleri secmeye DOM traversing denir. Ozellikle dinamik olarak degisen (silme veya yeni ekleme gibi) HTML elemanlarinin secerken gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? 1- Yukari yonde (Parent)
//? 2- Asagi yonde (Children)
//? 3- Yatay yonde (Sibling)

//* 1- Yukari Yonde Traverse 
//* ===========================================================
//! parentNode, parentElement
const list = document.querySelector(".list")
const ul = list.parentNode
ul.style.border = "2px solid red"

console.log(list.parentNode.parentNode.parentNode)
console.log(list.parentElement)

//! closest(): belirtilen elementin parent'larindan ilk uygun parent'i secer
const itemListSec = list.closest("section")
itemListSec.style.background = "aqua"

//* 2- Asagi Yonde Traverse 
//* ===========================================================

const addItem = document.querySelector(".add-item")
console.log(addItem.children)
const h2 = addItem.children[0]
h2.style.color = "blue"

console.log(addItem.parentNode.parentNode.children[0])

//* 3- Yatay Yonde Traverse 
//* ===========================================================
//! nextElementSibling, previousElementSibling

const myList = ul.children
console.log(myList)
const javascript = myList[2]

const css = javascript.previousElementSibling
console.log(css.innerText)

const html = 