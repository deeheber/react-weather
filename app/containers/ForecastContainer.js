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
  render: function(){
    return (
      <div>
        <Forecast 
          isLoading={this.state.isLoading}
          forecast={this.state.forecast}
        />
        <div style={{margin: 3 + '%'}}>
          <a href='/'>Back</a>
        </div>
      </div>
    )
  }
});

module.exports = ForecastContainer;