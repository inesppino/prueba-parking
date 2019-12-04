import React, { Component } from 'react';

class ParkingList extends Component {
    getList() {
        const { filterByPostalCode, goToMaps } = this.props;
        if(filterByPostalCode().length === 0){
            return <p className="no-found"> No existe ningún parking en ese código postal</p>
        } else {
            return(
                <ol>
                    {filterByPostalCode().map((elem, index) => {
                    return (
                    <li key={index}> 
                        <h4 className="paking-title">{elem.title.split('.')[1]}</h4> 
                        <p className="parking-address">{elem.address['street-address']} <span className="parking-postal">{elem.address['postal-code']}</span></p>
                        <button id={elem.id} className="btn-get-there" onClick= {goToMaps}>Cómo llegar</button>
                    </li>
                    )
                    })}
                </ol>
            )
        }
    }
    render() {
        return(
            this.getList()
        )
    }
}

export default ParkingList;