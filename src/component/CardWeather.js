import React, { Component } from 'react';


class CardWeather extends Component {
    transformToCelsius(temp) {
        return temp = Math.round(temp - 273.15);
    }

    render() {
        const {weatherData} = this.props;

        return(
            <ul className="weather-list">
                {weatherData.map((elem, index) => {
                    return(
                        <li className="today-weather" key={index}>
                            <div className="weather">
                                <span className="ico-temp">
                                    <img src={`http://openweathermap.org/img/w/${elem.weather[0].icon}.png`} alt={elem.weather[0].main}/>
                                    {elem.weather[0].main}
                                </span>
                                <h3 className="main-temp"> {this.transformToCelsius(elem.main.temp)} °C</h3> 
                                <p className="minmax-temp">
                                    <span>Max: {this.transformToCelsius(elem.main['temp_max'])}°C</span>
                                    <span>Min: {this.transformToCelsius(elem.main['temp_min'])}°C</span>
                                </p>
                                <span>Sensación térmica: {this.transformToCelsius(elem.main['feels_like'])}°C</span>
                                <p className="weather-description">Overall description: <span>{elem.weather[0].description}</span></p>
                            </div>
                        </li>
                    )
                })}
           </ul>
        )
    }
}

export default CardWeather;
