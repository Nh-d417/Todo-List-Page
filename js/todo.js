const todoForm = document.querySelector(".todo-form");
const inputTodo = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

function handleSubmit(event){
  event.preventDefault();

  const newTodo = inputTodo.value;
  inputTodo.value = "";

  handleShowList(newTodo);

}

//추가 리스트 화면 표시

function handleShowList(newTodo){
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", handleDeleteList);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li)
}

//삭제 버튼 시 요소 삭제 
function handleDeleteList(event){
  const deletTarget = event.target.parentElement;
  todoList.removeChild(deletTarget);
}


todoForm.addEventListener("submit", handleSubmit);