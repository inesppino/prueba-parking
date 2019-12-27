import React, { Component } from 'react';
import CardWeather from './CardWeather';

class WeatherContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          todayWeather: true,
          weeklyWeather: false,
          selectedButton: false,
        }
        this.handleChangeWeather = this.handleChangeWeather.bind(this);
        this.getChosenWeather = this.getChosenWeather.bind(this);
    }

    handleChangeWeather(e){
        let chosen = e.target.id;
        this.setState({
            todayWeather : chosen === 'todayWeather',
            weeklyWeather : chosen === 'weeklyWeather'
        })
    }

    getChosenWeather() {
        if(this.state.todayWeather) {
            return (
                <CardWeather weatherData={this.props.weatherDailyData}/>
            )
        } else if (this.state.weeklyWeather) {
            const { weatherWeeklyData } = this.props;
            const filteredWeek = weatherWeeklyData.filter( elem => elem['dt_txt'].split(' ')[1] === '12:00:00');
            return(
                <CardWeather weatherData={filteredWeek}/>
            )
        }
    }
    
    render() {
        return(
            <React.Fragment>
                <article className="header-weather">
                    <nav>
                        <ul>
                            <li className="selected-li" style={{marginRight: 10}} onClick={this.handleChangeWeather} id="todayWeather">Hoy</li>
                            <li style={{fontSize: 40}}>|</li>
                            <li tyle={{marginLeft: 10}} onClick={this.handleChangeWeather} id="weeklyWeather">Esta semana</li>
                        </ul>
                    </nav>
               </article>
               {this.getChosenWeather()}
           </React.Fragment>
        )
    }
}

export default WeatherContainer;