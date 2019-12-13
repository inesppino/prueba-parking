import React, { Component } from 'react';

class WeatherContainer extends Component {
    //const { weatherData } = this.props;
    //http://openweathermap.org/img/w/10d.png

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
                <article className="header-weather">
                    <button style={{marginRight: 10}}>Hoy</button>
                    <span style={{fontSize: 40}}>|</span>
                    <button tyle={{marginLeft: 10}}>Esta semana</button>
               </article>
               <div className="weather">
                    <span> {this.transformToCelsius(weatherData.main.temp)}</span> 
                    <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].main}/>
                    <span>Max: {this.transformToCelsius(weatherData.main['temp_max'])}
                    Min: {this.transformToCelsius(weatherData.main['temp_min'])}</span>
                    <span>descripcion: {weatherData.weather[0].main} {weatherData.weather[0].description}</span>
               </div>

           </React.Fragment>

        )
    }
}

export default WeatherContainer;