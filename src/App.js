import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { fetchParking } from './services/ParkingApi';
import ParkingContainer from './component/ParkingContainer';
import WeatherContainer from './component/WeatherContainer';

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

  goToMaps(e) {
    const selectedId = e.currentTarget.getAttribute('id');
    const item = this.state.parkingArray.filter(elem => elem.id === selectedId);
    const streetAddress = item[0].address['street-address'].split(' ');
    const popNumber = streetAddress.pop();
    const street = streetAddress.join('+')+`,+${popNumber}`;
    (window.open(`https://www.google.es/maps/place/${street}+${item[0].address['postal-code']}+Madrid/@${item[0].location.latitude},${item[0].location.longitude}/`, '_blank'));
  }

  toggleHeader(e) {
    let root = document.documentElement;
    e.target.getAttribute('id') ? root.style.setProperty('--header-height', '100vh') : root.style.setProperty('--header-height', '10vh');
  }
  
  render () {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link onClick={this.toggleHeader} className='link' to="/weather">Tiempo</Link>
              </li>
              <li>
                <Link id='home' onClick={this.toggleHeader} className='link' to="/">Home</Link>
              </li>
              <li>
                <Link onClick={this.toggleHeader} className='link' to="/parking">Parking</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" />
            <Route path="/weather" render={props => ( 
              <WeatherContainer match={props.match} handleInput={this.handleInput}/> )}/>
            <Route path="/parking" render={props => (
              <ParkingContainer match={props.match} filterByPostalCode={this.filterByPostalCode} goToMaps={this.goToMaps} handleInput={this.handleInput}/>)} />
          </Switch>
        </main>
          
      </div>
    );
  }
}

export default App;