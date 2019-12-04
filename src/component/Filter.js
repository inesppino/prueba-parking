import React, { Component } from 'react';

class Filter extends Component {
    
    render() {
        const { handleInput, labelTitle, placeholderText } = this.props;
        return(
            <React.Fragment>
                <label htmlFor="postalCode">{labelTitle}</label>
                <input type="text" name="postalCode" id="postalCode" placeholder={placeholderText} onKeyUp= {handleInput}/>
            </React.Fragment>
        )
    }
}

export default Filter;