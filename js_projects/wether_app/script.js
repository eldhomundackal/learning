document.addEventListener('DOMContentLoaded', function () {

  const getWeatherBtn = document.getElementById('get-btn')
  const searchContent = document.getElementById('search-content')
  const weatherInfo = document.getElementById('weather-info-container')
  const API_KEY = "f6121d1a6ac8051dd075ca22da09614b"
  getWeatherBtn.addEventListener('click', async () => {
    inputText = searchContent.value.trim()
    removeDisplayedWeatherInfo()
    if (!inputText) return
    try {
      searchContent.value =""
      const data = await fetchWeatherData(inputText)
      displayWeatherInfo(data)
    } catch (error) {
      showError(error)
    }

  })
// Function to fetch weather data
  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    // Get weather data from external API

    let response = await fetch(url)

    if (!response.ok) {
      throw new Error(`${city} not found`);
    }
    const data = await response.json();
    return data
  }

// Function to display weather data
  function displayWeatherInfo(data) {
  
  const {main, weather, name} = data
  console.log(name)
  let cityName = document.createElement('h2')
  cityName.textContent = name
  weatherInfo.appendChild(cityName)
  let tempSpan =  document.createElement('span')
  tempSpan.classList.add('block')
  tempSpan.textContent = `Temperature : ${main.temp}`
  weatherInfo.appendChild(tempSpan)
  let weatherSpan =  document.createElement('span')
  weatherSpan.classList.add('block')
  weatherSpan.textContent = `Weather : ${weather[0].description}`
  weatherInfo.appendChild(weatherSpan)
  }

// function to display errors
  function showError(error) {
    let errorMessage = document.createElement('h2')
    errorMessage.textContent = error.message
    weatherInfo.appendChild(errorMessage)
  }

  function removeDisplayedWeatherInfo(){
    weatherInfo.innerHTML=""
  }






})