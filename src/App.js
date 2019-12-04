import React from 'react';
import './App.css';
import { fetchParking } from './services/ParkingApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingArray : [],
      input: '',
    }

    this.getParking = this.getParking.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.filterByPostalCode = this.filterByPostalCode.bind(this);
    this.goToMaps = this.goToMaps.bind(this);
    this.saveParkingList = this.saveParkingList.bind(this);
    this.setParkingList = this.setParkingList.bind(this);
  };

  componentDidMount() {
    this.setState({
      parkingArray : this.setParkingList()
    });
  }

  filterByPostalCode() {
    const { parkingArray, input } = this.state;
    return parkingArray.filter(elem => elem.address['postal-code'].includes(input));
  }

  handleInput(e) {
    const newInput = e.currentTarget.value;
    this.setState({
      input: newInput
    });
  }

  saveParkingList(value) {
    localStorage.setItem('parking', JSON.stringify(value))
  }

  getParking() {
    fetchParking()
      .then(data => {
        data['@graph'].sort((a,b)=> {
          return a.address['postal-code'] - b.address['postal-code']
        })
        this.setState({
          parkingArray: data['@graph']
        })
        this.saveParkingList(this.state.parkingArray);
      })
  };

  setParkingList() {
    const parkingList = (localStorage.getItem('parking') !== null) ? JSON.parse(localStorage.getItem('parking')) : this.getParking();
    return parkingList;
  }

  goToMaps (e) {
    const selectedId = e.currentTarget.getAttribute('id');
    const item = this.state.parkingArray.filter(elem => elem.id === selectedId);
    const streetAddress = item[0].address['street-address'].split(' ');
    const popNumber = streetAddress.pop();
    const street = streetAddress.join('+')+`,+${popNumber}`;
    const googleUrl = `https://www.google.es/maps/place/${street}+${item[0].address['postal-code']}+Madrid/@${item[0].location.latitude},${item[0].location.longitude}/`
    console.log(googleUrl);
    (window.open(googleUrl, '_blank'));
  }
  
  render () {
    return (
      <div className="App">
        <header className="App-header">
          aquí irá el encabezado
        </header>
          <label htmlFor="postalCode">Filtrar por cercanía</label>
          <input type="text" name="postalCode" id="postalCode" placeholder="Filtro por código postal" onKeyUp= {this.handleInput}/>
        <ol>
          {this.filterByPostalCode().map((elem, index) => {
            return (
              <li key={index}> 
            <h4 className="paking-title">{elem.title.split('.')[1]}</h4> 
            <p className="parking-address">{elem.address['street-address']} <span className="parking-postal">{elem.address['postal-code']}</span></p>
            <button id={elem.id} className="btn-get-there" onClick= {this.goToMaps}>Cómo llegar</button>
          </li>
            )
          })}
        </ol>
      </div>
    );
  }
}

export default App;