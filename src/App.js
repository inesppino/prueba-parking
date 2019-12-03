import React from 'react';
import './App.css';
import { fetchParking } from './services/ParkingApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingArray : [],
    }

    this.getParking = this.getParking.bind(this);
  };

  componentDidMount() {
    this.getParking();
  }

  getParking() {
    fetchParking()
      .then(data => {
        this.setState({
          parkingArray: data['@graph']
        })
      })
  };
  
  render () {
    return (
      <div className="App">
        <header className="App-header">
          aquí irá el encabezado
        </header>
        <form action="/signup" method="post">
          <label htmlFor="postalCode">Filtrar por cercanía</label>
          <input type="text" name="postalCode" id="postalCode" placeholder="Filtro por código postal" />
          <input type="submit" value="Filtrar"/>
        </form>
        <ol>
          {this.state.parkingArray.map((elem, index) => {
            return (
          <li key={index}> 
            <h4 className="paking-title">{elem.title.split('.')[1]}</h4> 
            <p className="parking-address">{elem.address['street-address']} <span className="parking-postal">{elem.address['postal-code']}</span></p>
            <button className="btn-get-there">Cómo llegar</button>
          </li>
            )
          })}
        </ol>
      </div>
    );
  }
}

export default App;
