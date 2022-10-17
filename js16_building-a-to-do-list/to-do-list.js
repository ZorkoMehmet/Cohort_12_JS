let todoInput = document.querySelector("#todo-input");
const addBtn = document.getElementById("add-btn");
const todoUl = document.getElementById("todo-ul");

const total = document.getElementById("total");
const completed = document.getElementById("completed");

addBtn.addEventListener("click", () => {
    if(todoInput.value.trim() === ""){
        alert("Please enter what you wish to-do!")
    } else {
        const newTodo = {
            id: new Date().getTime(),
            completed: false,
            text: todoInput.value
        }
        createListElement(newTodo)
    }
});

createListElement = (newTodo) => {
    const li = document.createElement("li")
    li.setAttribute("id", newTodo.id) // ALT: li.id = newTodo.id
    console.log(li)

    const okIcon = document.createElement("i")
    okIcon.setAttribute("class", "fas fa-check")
    li.appendChild(okIcon)

    todoUl.appendChild(li)

    const p = document.createElement("p")
    const pTextNode = document.createTextNode(newTodo.text)
    p.appendChild(pTextNode)
    li.appendChild(p)
 
    const deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class", "fas fa-trash")
    li.appendChild(deleteIcon)
}