export default class WeatherServices {
    static fetchDailyWeather = () => {
        const weatherDailyApi = 'https://api.openweathermap.org/data/2.5/weather?q=Madrid,ES&APPID=e0911626bb8e9d069605aa705cac6693'
        return fetch(weatherDailyApi).then(response=> response.json());
    }

    static fetchWeeklyWeather = () => {
        const weatherWeeklyApi = 'https://api.openweathermap.org/data/2.5/forecast?q=Madrid,ES&APPID=b5dccfa4544e8efc7e3321969a3e1713'
        return fetch(weatherWeeklyApi).then(res => res.json());
    }

}