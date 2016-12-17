import React, {Component} from 'react';

export default class Main extends Component {
  render(){
    return (
      <div className='col-sm-12 text-center'>
          {this.props.children}
      </div>   
    )
  }
}