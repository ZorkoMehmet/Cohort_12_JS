const inputData = document.getElementsByClassName(".to-do")
const addBtn = document.querySelector("#add-btn")
const deleteBtn = document.getElementById("delete-btn")
const langList = document.getElementById("lang-list")

const newUl = document.createElement("ul")
langList.appendChild(newUl)

//? addBtn event handler
addBtn.addEventListener("click", () => { 
   if(!inputData.valur) {
    alert("Please enter the pragramming language")
   } else{
    newUl.innerHTML += <li>`${inputData.value}</li>
    inputData.focus()
   }
}
)
