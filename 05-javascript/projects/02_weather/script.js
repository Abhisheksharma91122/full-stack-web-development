document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const weatherButton = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");
  const loader = document.getElementById("loader");

  const API_KEY = ""; // insert api key

  weatherButton.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    loader.classList.remove("hidden");
    console.log(city);
    try {
      const data = await fetchWeatherData(city);
      console.log(data);
      displayData(data);
    } catch (error) {
      displayError(error.message);
    }
  });

  cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") weatherButton.click();
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    // console.log(response);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    return data;
  }

  function displayData(data) {
    const { name, weather, main } = data;
    setTimeout(() => {
      loader.classList.add("hidden");
      cityName.textContent = name;
      description.textContent = `Description: ${weather[0].description}`;
      temperature.textContent = `Temperature: ${main.temp}°C`;
      document.getElementById("weather-icon").src =
        "https://openweathermap.org/img/wn/01d@2x.png";
      weatherInfo.classList.remove("hidden");
      errorMessage.classList.add("hidden");
    }, 1000);
  }

  function displayError(message = "City not found") {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
    weatherInfo.classList.add("hidden");
  }
});
