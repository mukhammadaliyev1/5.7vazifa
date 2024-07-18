import { validate, getDate, createItem } from "./util.js";
const form = document.getElementById("form");
const todoWrapper = document.querySelector("#todo-wrapper");
const nameInput = document.getElementById("todo-name");
const timeInput = document.getElementById("todo-time");
const addButton = document.getElementById("add");
const filterInput = document.getElementById("filter");

addButton &&
  addButton.addEventListener("click", function (event) {
    event.preventDefault();
    const isValid = validate(nameInput, timeInput);

    if (!isValid) {
      return;
    }

    const todo = {
      id: Date.now(),
      name: nameInput.value,
      time: timeInput.value,
      status: "active",
    }
    
    let todos = getDate();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    form.reset();

    const card = createItem(todo);
    todoWrapper.innerHTML += card;
  });
