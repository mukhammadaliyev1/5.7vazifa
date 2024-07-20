function validate(nameInput, timeInput) {
  if (nameInput.value.length < 3) {
    alert("todo kamida 3 tadan kop bolishi kerak");
    nameInput.focus();
  }
  if (!timeInput.value.length) {
    alert("todo time is not defined");
    nameInput.focus();
    return false;
  }

  return true;
}

function getDate() {
  let date = [];
  if (localStorage.getItem("todos")) {
    date = JSON.parse(localStorage.getItem("todos"));
  }
  return date;
}

function createItem(todo) {
  let isChecked =todo.status == "active" ? false : true;
  return`<div class="todo-item">
          <div class="left">
            <input type="checkbox" checked = ${isChecked ? true : false}>
            <div class="info">
              <h2>  ${todo.name}</h2>
              <p>${todo.time}</p>
            </div>
          </div>
          <div class="right">
            <span class="delete"><i class="fa-solid fa-trash"></i></span>

            <span class="edit">
              <i class="fa-solid fa-pen"></i>
            </span>
          </div>
        </div>
         `;
}

export { validate, getDate, createItem };
