const apiKey = "46f80a02ecae410460d59960ded6e1c6";
const weatherData = document.querySelector(".data");
const cityInput = document.getElementById("city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value;
  getWeatherData(city);
});

async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Network response not good");
    }

    const data = await response.json();
    const temp = Math.round(data.main.temp);

    const desc = data.weather[0].description;

    const icon = data.weather[0].icon;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];

    weatherData.querySelector(
      ".icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;

    weatherData.querySelector(".temp").textContent = `${temp}°C`;
    weatherData.querySelector(".desc").textContent = desc;
    weatherData.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    // set all the fields to empty or error messages
    weatherData.querySelector(".icon").innerHTML = "";

    weatherData.querySelector(".desc").textContent =
      "An error happened, please try again later";
    weatherData.querySelector(".details").innerHTML = "";
  }
}
