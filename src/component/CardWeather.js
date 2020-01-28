import React, { Component } from 'react';


class CardWeather extends Component {
    transformToCelsius(temp) {
        return temp = Math.round(temp - 273.15);
    }

    // var timestamp = 1400000000;
    // var a = new Date(timestamp*1000);
    // const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    // var dayOfWeek = days[a.getDay()]
    //NOT WORKING

    render() {
        const {weatherData} = this.props;
        const days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
        return(
            <ul className="weather-list">
                {weatherData.map((elem, index) => {
                    return(
                        <li className="today-weather" key={index}>
                            <div className="weather">
                                <h4 className="day-week">{days[(new Date(elem.dt)).getDay()]}</h4>
                                <span className="ico-temp">
                                    <img src={`http://openweathermap.org/img/w/${elem.weather[0].icon}.png`} alt={elem.weather[0].main}/>
                                    {elem.weather[0].main}
                                </span>
                                <h3 className="main-temp"> {this.transformToCelsius(elem.main.temp)} °C</h3> 
                                <p className="minmax-temp">
                                    <span>Min: {this.transformToCelsius(elem.main['temp_min'])}°C</span>
                                    <span>Max: {this.transformToCelsius(elem.main['temp_max'])}°C</span>
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
