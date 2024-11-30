document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessageDisplay = document.getElementById("error-message");
  const API_KEY = "a73ba665adda940567fea77635a79d71";

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    //It may throw an error
    //Server is always in another continent

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      displayErrorMessage();
    }
  });

  async function fetchWeatherData(city) {
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);
    console.log(response);
  }
  function displayWeatherData(data) {}

  function displayErrorMessage() {
    weatherInfo.classList.add("hidden");
    errorMessageDisplay.classList.remove("hidden");
  }
});
