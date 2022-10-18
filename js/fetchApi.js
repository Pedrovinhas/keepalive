const states = {
  "Acre": 'AC',
  "Alagoas": 'AL',
  "Amapá": 'AP',
  "Bahia": 'BA',
  "Ceará": 'CE',
  "Distrito Federal": 'DF',
  "Espírito Santo": 'ES',
  "Goías": 'GO',
  "Maranhão": 'MA',
  "Mato Grosso": 'MT',
  "Mato Grosso do Sul": 'MS',
  "Pará": 'PA',
  "Paraíba": "PB",
  "Paraná": 'PR',
  "Pernambuco": 'PE',
  "Piauí": 'PI',
  "Rio de Janeiro": 'RJ',
  "Rio Grande do Norte": 'RN',
  "Rio Grande do Sul": 'RS',
  "Rondônia": 'RO',
  "Roraíma": 'RA',
  "Santa Catarina": 'SC',
  "São Paulo": 'SP',
  "Sergipe": 'SE',
  "Tocantins": 'TO'
}

navigator.geolocation.getCurrentPosition(showPosition)

function showPosition(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  // console.log(lat, lon)
  getGeoLocationPosition(lat, lon)
  getLocationWeather(lat, lon)

}

function getStateInitials(stateFullName) {
  return states[stateFullName]
}

function getGeoLocationPosition(lat, lon) {
  const url2 = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`

  axios.get(url2) // Com axios não precisamos usar o json() na resposta
    .then(response => {
      const data = response.data
      // console.log(data)
      const city = data.address.city;
      const state = data.address.state;

      getStateInitials(state)

      const locationSpn = document.getElementById('location').innerText = ` ${city}, ${states[state]}`


    })
    .then(error => console.log(error))
}

function getLocationWeather(lat, lon) {

  const url = `http://api.weatherapi.com/v1/current.json?key=5ecd8e83a4c744539fd15317221410&q=${lat}&q=${lon}&aqi=no`

  axios.get(url)
    .then(response => {

      const celsiusTemperature = response.data.current.temp_c
      const icon = response.data.current.condition.icon
      // console.log(region, state, celsiusTemperature, icon)
      // console.log(response.data)

      const weatherIcon = document.getElementById('weatherIcon')
      weatherIcon.setAttribute('src', icon)
      weatherIcon.classList.add('weather__icon')

      const temperatureSpn = document.getElementById('temp').innerText = `${celsiusTemperature}º`




    })
    .then(error => console.log(error))
}


// function displayWeatherData(data) {
//     const { name } = data;
// }

