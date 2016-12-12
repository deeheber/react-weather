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
  componentDidMount: function(){
    console.log(this.state.city);
    console.log(this.state.isLoading);
  },
  render: function(){
    return (
      <Forecast />
    )
  }
});

module.exports = ForecastContainer;