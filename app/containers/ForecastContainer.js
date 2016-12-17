var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast');
import getForecast from '../utils/api';

var ForecastContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
        city: this.props.routeParams.city,
        isLoading: true,
        forecast: {}
    }        
  },
  componentWillMount: function(){
    getForecast(this.state.city)
      .then(function(forecastData){
        this.setState({
          forecast: forecastData,
          isLoading: false
        });
      }.bind(this))
      .catch(function(err){
        alert(err);
        this.context.router.push('/');
      }.bind(this));
  },
  handleClick: function(dailyWeather){
    this.context.router.push({
      pathname: '/detail/' + this.state.city,
      state:{
        weather: dailyWeather,
        city: this.state.city
      }
    });
  },
  render: function(){
    return (
      <div>
        <Forecast 
          isLoading={this.state.isLoading}
          forecast={this.state.forecast}
          handleClick={this.handleClick}
        />
        <div className='back'>
          <a href='/'>Back</a>
        </div>
      </div>
    )
  }
});

module.exports = ForecastContainer;