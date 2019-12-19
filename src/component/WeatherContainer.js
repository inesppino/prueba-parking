import React, { Component } from 'react';
import TodayWeather from './TodayWeather';

class WeatherContainer extends Component {
    //const { weatherData } = this.props;
    //http://openweathermap.org/img/w/10d.png

    constructor(props) {
        super(props);
        this.state = {
          todayWeather: true,
          weeklyWeather: false
        }
        this.handleChangeWeather = this.handleChangeWeather.bind(this);
        this.getChosenWeather = this.getChosenWeather.bind(this);
    }

    handleChangeWeather(e){
        let chosen = e.target.id;
        if(chosen === 'todayWeather') {
            this.setState({
                todayWeather : true,
                weeklyWeather : false,
            })
        } else if (chosen === 'weeklyWeather') {
            this.setState({
                todayWeather : false,
                weeklyWeather : true,
            })
        }
    }

    getChosenWeather() {
        if(this.state.todayWeather) {
            return (
                <TodayWeather />
            )
        } else if (this.state.weeklyWeather) {
            return(
                <p>Working on it</p>
            )
        }
    }
    
    render() {
        return(
            <React.Fragment>
                <article className="header-weather">
                    <button style={{marginRight: 10}} onClick={this.handleChangeWeather} id="todayWeather">Hoy</button>
                    <span style={{fontSize: 40}}>|</span>
                    <button style={{marginLeft: 10}} onClick={this.handleChangeWeather} id="weeklyWeather">Esta semana</button>
               </article>
               {this.getChosenWeather()}
           </React.Fragment>
        )
    }
}

export default WeatherContainer;