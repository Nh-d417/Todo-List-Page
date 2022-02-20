const weatherText = document.querySelector(".weather span");

function onTure(event){
  const lat = event.coords.latitude;
  const lon =event.coords.longitude;

  const API_KEY = "405f35630c677da93c17d994523bbcb0";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(url)
    .then((response)=>response.json())
    .then((result)=>{
      const city = result.name;
      const weather = result.weather[0].main;
      console.log(result);
      weatherText.innerText =`${city}, ${weather}`
    });
}

function onErr(){
  weatherText.innerText = "Can't find you.";
}

navigator.geolocation.getCurrentPosition(onTure, onErr);