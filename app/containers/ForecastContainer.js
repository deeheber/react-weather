var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast');
var getForecast = require('../utils/api').getForecast;

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
  componentDidMount: function(){
    getForecast(this.state.city)
      .then(function(forecastData){
        console.log(forecastData);
        this.setState({
          forecast: forecastData,
          isLoading: false
        });
      }.bind(this))
      .catch(function(err){
        //TODO add error messages to the UI
        console.log(err);
      });
  },
  handleClick: function(dailyWeather){
    //console.log(weather);
    this.context.router.push({
      pathname: '/detail/' + this.state.city,
      state:{
        weather: dailyWeather
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