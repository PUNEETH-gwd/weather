document.addEventListener("DOMContentLoaded", () => {

    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");

    const weatherInfo = document.getElementById("weather-info");
    const errorMessage = document.getElementById("error-message");

    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");
    const description = document.getElementById("description");


    getWeatherBtn.addEventListener("click", () => {

        const city = cityInput.value.trim();

        if (city) {
            fetchWeather(city);
        } else {
            alert("Please enter a city name.");
        }

    });


    async function fetchWeather(city) {

        const url =
            `http://localhost:5000/weather?city=${encodeURIComponent(city)}`;

        try {

            const response = await fetch(url);

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error?.message || "Weather request failed");
            }


            // Hide error
            errorMessage.style.display = "none";

            // Show weather information
            weatherInfo.style.display = "block";


            // Display data
            cityName.textContent =
                `City: ${data.location.name}`;

            temperature.textContent =
                `Temperature: ${data.current.temp_c}°C`;

            humidity.textContent =
                `Humidity: ${data.current.humidity}%`;

            description.textContent =
                `Weather: ${data.current.condition.text}`;


        } catch (error) {

            console.error("Error:", error);

            weatherInfo.style.display = "none";

            errorMessage.textContent =
                "Could not fetch weather data. Please check the city name.";

            errorMessage.style.display = "block";

        }

    }

});