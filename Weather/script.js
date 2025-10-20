document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input")
    const getWeatherBtn = document.getElementById("get-weather-btn")
    const weatherInfo = document.getElementById("weather-info")
    const cityNameDisplay = document.getElementById("city-name")
    const temperatureDisplay = document.getElementById("temperature")
    const descriptionDisplay = document.getElementById("description")
    const errorMessage = document.getElementById("error-message")

    const API_KEY = '8c74786560b3e40dc1714f07dd0c01d8'

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim()
        if (!city) return

        try {
            const weatherData = await fetchWeatherData(city)
            console.log(weatherData)

            if (weatherData) {
                displayWeatherData(weatherData)
            } else {
                showError("City not found.")
            }
        } catch (error) {
            showError(error.message)
        }
    })

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error("City not found.")
            }

            const result = await response.json()
            return result
        } catch (error) {
            console.error(error.message)
            throw new Error("Failed to fetch weather data")
        }
    }

    function displayWeatherData(weatherData) {
        const { name, main, weather } = weatherData
        const temperature = main.temp
        const description = weather[0].description

        cityNameDisplay.textContent = name
        temperatureDisplay.textContent = `${temperature}°C`
        descriptionDisplay.textContent = description

        weatherInfo.classList.remove("hidden")
        errorMessage.classList.add("hidden")
    }

    function showError(message) {
        weatherInfo.classList.add("hidden")
        errorMessage.classList.remove("hidden")
        errorMessage.textContent = message
    }
})
