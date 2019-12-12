import React, { Component } from 'react';

class WeatherContainer extends Component {
    
    render() {

        return(
            <React.Fragment>
               <button>Hoy</button>
               <button>Esta semana</button>
               <div>
                    Temp
                    Max:
                    Min:
                    desctipcion:
               </div>

           </React.Fragment>

        )
    }
}

export default WeatherContainer;