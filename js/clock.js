const clock = document.querySelector(".realTime");

function handleClock(){
  const today = new Date();
  const hour = String(today.getHours()).padStart(2,"0");
  const min = String(today.getMinutes()).padStart(2,"0");
  const sec =String(today.getSeconds()).padStart(2,"0");

  clock.innerText = `${hour} : ${min} : ${sec}`;
}


handleClock();
setInterval(handleClock, 1000);