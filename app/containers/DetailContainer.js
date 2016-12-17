import React, {Component} from 'react';
import Detail from '../components/Detail';

export default class Main extends Component {
  render(){
    return (
      <Detail weather={this.props.location.state.weather} city={this.props.location.state.city}/>
    )
  }
}