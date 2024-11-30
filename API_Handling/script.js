document.addEventListener('DOMContentLoaded', () =>{
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info")
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessageDisplay = document.getElementById("error-message");  
    const API_KEY = "e4098447a5ddcc9c4f016c60a0fbd455";

    getWeatherBtn.addEventListener("click", () => {
        const city = cityInput.value.trim();
        if (!city) return;     


    })

    function fetchWeatherData(city) {
   
    }
    function displayWeatherData(data) {

    }

    function displayErrorMessage() {
        weatherInfo.classList.add("hidden");
        errorMessageDisplay.classList.remove("hidden");
    }

})