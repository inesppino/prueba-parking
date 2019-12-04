import React, { Component } from 'react';
import Filter from './Filter';
import ParkingList from './ParkingList';

class ParkingContainer extends Component {
    
    render() {
        const { handleInput, filterByPostalCode, goToMaps } = this.props;
        return(
            <React.Fragment>
               <Filter handleInput={handleInput} />
               <ParkingList filterByPostalCode={filterByPostalCode} goToMaps={goToMaps} />
            </React.Fragment>
        )
    }
}

export default ParkingContainer;