import { validate,getDate ,createItem} from "./util.js";
const form = document.getElementById('form');
const wrapper= document.getElementById('todo-wrapper');
const nameInput= document.getElementById('todo-name');
const timeInput=document.getElementById("todo-time");
const addButton=document.getElementById("add");
const filterInput=document.getElementById("filter");


function createItem(todo) {
    let  isChecked = todo.status =='active' ? false :true;
    return 
    
    ' <div class="todo-item">
          <div class="left">
            < input type="checkbox" checked = ${ isChecked  ? true : false }/>
            <div class="info">
              <h2>  $ {todo.name}</h2>
              <p>$ {todo.time}</p>
            </div>
          </div>
          <div class="right">
            <span class="delete"><i class="fa-solid fa-trash"></i></span>

            <span class="edit">
              <i class="fa-solid fa-pen"></i>
            </span>
          </div>
        </div>
         ';
}






addButton && addButton.addEventListener('click', function(event){
    event.preventDefault();
    const isValid=validate(nameInput,timeInput);


    if(!isValid){
        return;
    }

const todo={
    id:Date.now(),
    name: nameInput.value ,
    time:timeInput.value ,
    status:active
}
let todos=getDate()
todos.push(todo)
localStorage.setItem('todos',JSON.stringify(todos));
form.reset();
const card=createItem(todo)
wrapper.innerHTML+= card;
})
