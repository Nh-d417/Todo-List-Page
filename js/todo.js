const todoForm = document.querySelector(".todo-form");
const inputTodo = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

const STORAGE_KEY = "toDo";
let toDo = [];

function handleSubmit(event){
  event.preventDefault();

  const newTodo = inputTodo.value;
  inputTodo.value = "";

  const newToDoObj = {
    text : newTodo,
    id : Date.now(),
  }

  toDo.push(newToDoObj);
  handleShowList(newToDoObj);
  saveLocalData();
}

//추가 리스트 화면 표시

function handleShowList(newToDoObj){
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const button = document.createElement("button");
  button.innerText = "🗑";
  button.addEventListener("click", handleDeleteList);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li)
}

//삭제 버튼 시 요소 삭제 
function handleDeleteList(event){
  const deletTarget = event.target.parentElement;
  todoList.removeChild(deletTarget);

  toDo = toDo.filter( (todo)=> todo.id != parseInt(deletTarget.id));
  saveLocalData();
}

function saveLocalData(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toDo));
}

todoForm.addEventListener("submit", handleSubmit);

const searchList = localStorage.getItem(STORAGE_KEY);

if(searchList !== null){
  //문자열인 요소들을 원래 상태로 되돌림
  const parsedTodo = JSON.parse(searchList)
  
  toDo = parsedTodo;
  parsedTodo.forEach(handleShowList);
}