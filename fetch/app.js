document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    var city = document.getElementById('city').value;
    var apiKey = 'dc356aefff6954c7a4076a859c9dcd5a'; // Replace with your OpenWeatherMap API key
    var url = `https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            var weatherResult = document.getElementById('weatherResult');
            if (data.cod === 200) {
                var weatherData = `
                    <h3 class="text-xl font-bold">${data.name}</h3>
                    <p class="text-lg">Temperature: ${data.main.temp}°C</p>
                    <p class="text-lg">Weather: ${data.weather[0].description}</p>
                    <p class="text-lg">Humidity: ${data.main.humidity}%</p>
                    <p class="text-lg">Wind Speed: ${data.wind.speed} m/s</p>
                `;
                weatherResult.innerHTML = weatherData;
            } else {
                weatherResult.innerHTML = `<p class="text-red-500">City not found. Please try again.</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            var weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = `<p class="text-red-500">Error fetching the weather data. Please try again later.</p>`;
        });
});