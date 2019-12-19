import React, { Component } from 'react';


class TodayWeather extends Component {
    transformToCelsius(temp) {
        return temp = Math.round(temp - 273.15);
    }
    
    render() {
        const weatherData = {
            main: {
                temp: 284.04,
                temp_max: 285.37,
                temp_min: 282.59,
            },
            weather : [{
                main: 'Clouds',
                description: 'few clouds',
                icon: '02d'
            }]
        }
        return(
            <React.Fragment>
                <article className="today-weather">
                <div className="weather">
                    <span className="ico-temp">
                        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].main}/>
                        {weatherData.weather[0].main}
                    </span>
                    <h3 className="main-temp"> {this.transformToCelsius(weatherData.main.temp)} °C</h3> 
                    <p className="minmax-temp">
                        <span>Max: {this.transformToCelsius(weatherData.main['temp_max'])}°C</span>
                        <span>Min: {this.transformToCelsius(weatherData.main['temp_min'])}°C</span>
                    </p>
                    <p className="weather-description">Overall description: <span>{weatherData.weather[0].description}</span></p>
                </div>
           </article>
            </React.Fragment>
        )
    }
}

export default TodayWeather;