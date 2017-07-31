import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            userCity: '',
            cities: {"denver": "Rockies", "dallas": "Rangers"}
        }
        this._onChange = this._onChange.bind(this)
        this.handleSportsTeam = this.handleSportsTeam.bind(this)
    }

    _onChange(event) {
        this.setState({
            userCity: event.target.value
        })
    }

    handleSportsTeam() {
        let userCity = this.state.userCity.toLowerCase().trim()
        if(userCity === '') {
            return 'Go ahead and type in a city'
        } else if(this.state.cities[userCity]) {
            return `Go ${this.state.cities[userCity]}`
        } else {
            return `${userCity} ? Never heard of it.`
        }
    }

    render() {
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
                <br/>
                <br/>
                <p>
                    {this.handleSportsTeam()}
                </p>
                <button>Find Out more...</button>
            </div>
        );
    }
}

export default App;
