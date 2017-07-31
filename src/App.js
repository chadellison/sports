import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
        if (!this.state.cities[this.state.userCity] && this.state.userCity !== '') {
            sportsData = <div>{`${this.state.userCity}? Never heard of it.`}</div>
        } else if (this.state.userCity !== '') {
            sportsData = <SportsData
                image={`https://robohash.org/${Math.round(Math.random() * 100000).toString(16)}`}
                team={this.state.cities[this.state.userCity].team}
                website={this.state.cities[this.state.userCity].website}
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

class SportsData extends Component {
    render() {
        return (<div>
            <a href={this.props.website} target="_">Go {this.props.team}</a>
            <br/>
            <img src={this.props.image} alt="team logo"/>
        </div>)
    }
}

export default App;
