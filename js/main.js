// Switching between light and dark themes

const themeSwitch = document.querySelector("#switch");

themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme", themeSwitch.checked);
});


// ---

const searchForm = document.querySelector(".search-container");
const cityInput = document.querySelector("#city-input");

const cityName = document.querySelector("#city-name");
const dateElement = document.querySelector("#date");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");

const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");
const pressure = document.querySelector("#pressure");

