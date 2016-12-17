import React, {Component} from 'react';
import GetCity from '../components/GetCity';

export default class GetCityContainer extends Component {
    constructor(){
      super();
      this.state = {
        city: ''
      };
    }
    handleUpdateCity(e){
        this.setState({
            city: e.target.value
        });
    }
    handleSubmitCity(e){
        e.preventDefault();
        this.context.router.push('/forecast/' + this.state.city);
    }
    render(){
        return (
            <GetCity 
                city={this.state.city}
                onUpdateCity={e=>this.handleUpdateCity(e)}
                onSubmitCity={e=>this.handleSubmitCity(e)}
            />
        )
    }
}

GetCityContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};