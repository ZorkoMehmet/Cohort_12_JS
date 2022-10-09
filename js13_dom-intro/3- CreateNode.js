console.log("***** CREATE NODE *****")

//? YENI BIR HTML P ELEMENTI OLUSTURALIM

//! document.createElement(name) ==> creates a new element
//! Document.createTextNode(text) ==> creates a text node for an element
//! element.appendChild(text node) ==> connects the text node to the element
//! Element.removeChild(child node) ==> removes the child node of an element

const newP = document.createElement("p")
newP.id = "new-para"
newP.setAttribute("class", "new-paragraph")
const newText = document.createTextNode("This is the text created afterwards")
newP.appendChild(newText)
const h2 = document.querySelector(".item-list h2")
h2.after(newP)



//? getAttribute()
console.log(newP.getAttribute("class"))
console.log(newP.getAttribute("id"))
console.log(newP.getAttribute("name"))


//? classList()
console.log(newP.classList.contains("new-paragraph"))
newP.classList.add("new-class")
console.log(newP)
newP.classList.remove("new-class")
console.log(newP)


//? Inner HTML (has serious security issues)
const ul = document.querySelector("ul")
ul.innerHTML += `<li id="list-id" class="list>Boostrap</li>`


