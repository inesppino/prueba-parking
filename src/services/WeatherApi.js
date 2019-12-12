const weatherApi = 'https://api.openweathermap.org/data/2.5/weather?q=Madrid,ES&APPID=e0911626bb8e9d069605aa705cac6693'

const fetchWeather = ()=> fetch(weatherApi).then(response=> response.json());

export {fetchWeather};
