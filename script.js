//store weather img
//sunny, rainy, clear, snow, haze, cloudy, mist, smoke, default
const img = [
  "https://github.com/AnnaSmith3110/openWeather-API/blob/main/sunny%20png.png?raw=true",
  "https://github.com/AnnaSmith3110/openWeather-API/blob/main/rainy%20png.png?raw=true",
  "https://github.com/AnnaSmith3110/openWeather-API/blob/main/clear%20png.png?raw=true",
  "https://github.com/AnnaSmith3110/openWeather-API/blob/main/snow%20png.png?raw=true",
  "https://github.com/AnnaSmith3110/openWeather-API/blob/main/haze%20png.png?raw=true",
  "https://github.com/AnnaSmith3110/openWeather-API/blob/main/cloudy%20png.png?raw=true",
"https://github.com/AnnaSmith3110/openWeather-API/blob/main/mist%20png.png?raw=true", "https://github.com/AnnaSmith3110/openWeather-API/blob/main/smoke%20png.png?raw=true", "" 
];
//get vars
const bg = document.querySelector(".app");
const input = document.querySelector("#input");
const desc = document.querySelector("#desc");
const temp = document.querySelector("#temp");
const wind = document.querySelector("#wind");
const humid = document.querySelector("#humidity");
const status = document.querySelector("#weather-status-icon");
const moreButton = document.querySelector("#more");
const more = document.querySelector(".more");
const closeButton = document.querySelector("#close");
const feelsLike =  document.querySelector("#feels-like");
const rain = document.querySelector("#rain");
const windSpeed = document.querySelector("#wind-speed");
const visibility = document.querySelector("#visibility");
//fetch API
input.addEventListener("input", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&units=metric&appid=412d12d981a20fc78e27a8684c2a0ecd"
  )
    .then((response) => response.json())
    .then((data) => {
    
    console.log(data);
    
      var description = data["weather"][0]["description"];
      var Temp = data["main"]["temp"];
      var windspeed = data["wind"]["speed"];
      var Humidity = data["main"]["humidity"];
      var feelslike = data['main']['feels_like']; 
      
      var visible = data['visibility'];
      
      desc.innerHTML = description;
      temp.innerHTML = Temp + "° c";
      wind.innerHTML = windspeed;
      humid.innerHTML = Humidity;
      feelsLike.innerHTML = "feels like " + feelslike + " ° c";
      //rain.innerHTML = "rain " + Rain;
      windSpeed.innerHTML = "windspeed " + windspeed;
      visibility.innerHTML = "visibility " + visible;
    
    
      //change pic according to weather data
      let weather = data["weather"][0]["main"];
      //valid status = sunny, rainy, clear, snow, haze, cloudy
      switch (weather) {
        case "Sunny":
          status.src = img[0];
          bg.style.background = "var(--sunny)";
          more.style.background = "var(--sunny)";
          break;
        case "Rain":
          status.src = img[1];
          bg.style.background = "var(--rain)";
          more.style.background = "var(--rain)";
          break;
        case "Light intensity drizzle":
          status.src = img[1];
          bg.style.background = "var(--rain)";
          more.style.background = "var(--rain)";
          break;
        case "Clear":
          status.src = img[2];
          bg.style.background = "var(--clear)";
          more.style.background = "var(--clear)";
          break;
        case "Snow":
          status.src = img[3];
          bg.style.background = "var(--snow)";
          more.style.background = "var(--snow)";
          break;
        case "Haze":
          status.src = img[4];
          bg.style.background = "var(--hazy)";
          more.style.background = "var(--hazy)";
          break;
        case "Clouds":
          status.src = img[5];
          bg.style.background = "var(--cloudy)";
          more.style.background = "var(--cloudy)";
          break;
        case "Mist":
          bg.style.background = "var(--misty)";
          more.style.background = "var(--misty)";
          status.src = img[6];
          break;
        case "Smoke":
          bg.style.background = "var(--smoke)";
          more.style.background = "var(--smoke)";
          status.src = img[7];
          break;
        default:
          status.src = img[8];
      }
    
    console.log(data);
    })
    .catch((err) => console.log("error"));
});

//open more div
moreButton.addEventListener("click", function () {
  more.style.display = "flex";
  more.style.background = "inherit";
});

//close more div
closeButton.addEventListener("click", function () {
  more.style.display = "none";
  more.style.background = "inherit";
});