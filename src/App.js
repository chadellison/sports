import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SportsData from './components/SportsData'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userCity: '',
            cities: {
                denver: {
                    "team": "Rockies",
                    "website": "https://www.mlb.com/rockies"
                },
                dallas: {
                    "team": "Rangers",
                    "website": "https://www.mlb.com/rangers"
                }
            }
        }
        this._onChange = this._onChange.bind(this)
    }

    _onChange(event) {
        this.setState({
            userCity: event.target.value
        })
    }

    render() {
        let sportsData;
        let currentCity = this.state.userCity.toLowerCase().trim()

        if (!this.state.cities[currentCity] && currentCity !== '') {
            sportsData = <div>{`${currentCity}? Never heard of it.`}</div>
        } else if (currentCity !== '') {
            sportsData = <SportsData
                image={`https://robohash.org/${Math.round(Math.random() * 100000).toString(16)}`}
                team={this.state.cities[currentCity].team}
                website={this.state.cities[currentCity].website}
            />
        } else {
            sportsData = <div>Go ahead, type in a city</div>
        }
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Sports Ball City</h2>
                </div>
                <label type="text">What's your favorite city?</label>
                <br></br>
                <input id="user-city" type="text" onChange={this._onChange}/>
                <br/>
                <br/>
                <div>
                    {sportsData}
                </div>
            </div>
        );
    }
}

export default App;
