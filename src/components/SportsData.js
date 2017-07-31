import React, {Component} from 'react'

class SportsData extends Component {
    render() {
        return (<div>
            <a href={this.props.website} target="_">Go {this.props.team}</a>
            <br/>
            <img src={this.props.image} alt="team logo"/>
        </div>)
    }
}

export default SportsData