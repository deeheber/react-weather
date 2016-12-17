import React, {Component} from 'react';
import Forecast from '../components/Forecast';
import getForecast from '../utils/api';

export default class ForecastContainer extends Component{
  constructor(){
    super();
    this.state = {
      isLoading: true,
      forecast: {}
    };
  }
  componentWillMount(){
    getForecast(this.props.routeParams.city)
      .then(forecastData=>{
        this.setState({
          forecast: forecastData,
          isLoading: false
        });
      })
      .catch(err=>{
        alert(err);
        this.context.router.push('/');
      });
  }
  handleClick(dailyWeather){
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state:{
        weather: dailyWeather,
        city: this.props.routeParams.city
      }
    });
  }
  render(){
    return (
      <div>
        <Forecast 
          isLoading={this.state.isLoading}
          forecast={this.state.forecast}
          handleClick={dailyWeather=>this.handleClick(dailyWeather)}
        />
        <div className='back'>
          <a href='/'>Back</a>
        </div>
      </div>
    )
  }
}

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
