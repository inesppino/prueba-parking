import React, { Component } from 'react';
import Filter from './Filter';

class WeatherContainer extends Component {
    
    render() {
        const { handleInput } = this.props;
        return(

            <React.Fragment>
               <Filter handleInput={handleInput} labelTitle="Busca tu ciudad" placeholderText="Escribe una ciudad"/>
            </React.Fragment>

        )
    }
}

export default WeatherContainer;