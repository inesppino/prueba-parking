import React, { Component } from 'react';

class Filter extends Component {
    
    render() {
        const { handleInput } = this.props;
        return(
            <React.Fragment>
                <label htmlFor="postalCode">Filtrar por cercanía</label>
                <input type="text" name="postalCode" id="postalCode" placeholder="Filtro por código postal" onKeyUp= {handleInput}/>
            </React.Fragment>
        )
    }
}

export default Filter;