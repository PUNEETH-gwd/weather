document.addEventListener('DOMContentLoaded', () => {
  const cityInput = document.getElementById('city-input');
  const getWeatherBtn = document.getElementById('get-weather-btn');
  const weatherInfo = document.getElementById('weather-info');
  const errorMessage = document.getElementById('error-message');
  const cityName = document.getElementById('city-name');
  const temperature = document.getElementById('temperature');
  const humidity = document.getElementById('humidity');
  const description = document.getElementById('description');

  const apiKey = '44139bb962104f65a9b65626251008';
  const apiBase = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&aqi=yes`;

  getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
      fetchWeather(city);
    } else {
      alert('Please enter a city name.');
    }
  });

  async function fetchWeather(city) {
    const url = `${apiBase}&q=${encodeURIComponent(city)}`;
    console.log('Fetching URL:', url);

    try {
      const response = await fetch(url);
      console.log('Response status:', response.status, response.statusText);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('API response data:', data);

      // Update UI with the fetched data
      errorMessage.style.display = 'none';
      weatherInfo.style.display = 'block';
      cityName.textContent = `City: ${data.location.name}`;
      temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
      humidity.textContent = `Humidity: ${data.current.humidity}%`;
      description.textContent = `Weather: ${data.current.condition.text}`;
    } catch (err) {
      console.error('Fetch error:', err);
      weatherInfo.style.display = 'none';
      errorMessage.textContent = 'Could not fetch weather data. Please try again or check the city name.';
      errorMessage.style.display = 'block';
    }
  }
});
