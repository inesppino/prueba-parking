import React, { Component } from 'react';

class Filter extends Component {
    
    render() {
        const { handleInput, labelTitle, placeholderText } = this.props;
        return(
            <div className="filter-wrapper">
                <label htmlFor="postalCode">{labelTitle}</label>
                <input type="text" name="postalCode" id="postalCode" placeholder={placeholderText} onKeyUp= {handleInput}/>
            </div>
        )
    }
}

export default Filter;