let todoInput = document.querySelector("#todo-input");
const addBtn = document.getElementById("add-btn");
const todoUl = document.getElementById("todo-ul");

const total = document.getElementById("total");
const completed = document.getElementById("completed");

let todos = JSON.parse(localStorage.getItem("TODOS")) || [];

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("Please enter what you wish to-do!");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };
    createListElement(newTodo);
    todos.push(newTodo);
    localStorage.setItem("TODOS", JSON.stringify(todos));
    todoInput.value = "";
  }
});

createListElement = (newTodo) => {
  const li = document.createElement("li");
  li.setAttribute("id", newTodo.id); // ALT: li.id = newTodo.id
  console.log(li);

  newTodo.completed ? li.classList.add("checked") : "";

  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);

  const p = document.createElement("p");
  const pTextNode = document.createTextNode(newTodo.text);
  p.appendChild(pTextNode);
  li.appendChild(p);

  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);

  todoUl.appendChild(li);
};

const renderSavedTodos = () => {
  todos.forEach((todo) => {
    createListElement(todo);
  });
};
renderSavedTodos();

todoUl.addEventListener("click", (e) => {
  const id = e.target.parentElement.getAttribute("id");
  console.log(id)
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
    todos = todos.filter((todo) => todo.id != Number(id));
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }

  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.toggle("checked");

    todos.map((todo, index) => {
      if (todo.id == id) {
        todos[index].completed = !todos[index].completed;
      }
    });
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }
  })


todoInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addBtn.click();
  }
})

window.onload = function () {
  todoInput.focus();
};
