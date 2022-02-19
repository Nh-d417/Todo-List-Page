const loginForm = document.querySelector(".login-form");
const input = loginForm.querySelector("input");
const greetingArea = document.querySelector(".greetingText");

const HIDDEN_CLASSNAME = "hidden";

//로그인 데이터 등록처리 
function handleLogin(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const loginName = input.value;

  localStorage.setItem( "UserName", loginName);
  handleWelcom(loginName)
}

//welcome 메시지를 표시
function handleWelcom(loginName){
  greetingArea.innerText = `Welcome ${loginName}!`; 
  
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greetingArea.classList.remove(HIDDEN_CLASSNAME);
}

const userName = localStorage.getItem("UserName");

if(userName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLogin);
}else{
  handleWelcom(userName);
}