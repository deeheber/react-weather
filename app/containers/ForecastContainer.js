var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
        city: this.props.routeParams.city,
        isLoading: true
    }        
  },
  render: function(){
    return (
      <Forecast isLoading={this.state.isLoading}/>
    )
  }
});

module.exports = ForecastContainer;