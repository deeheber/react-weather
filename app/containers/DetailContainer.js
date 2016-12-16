var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
  componentWillMount: function(){
    console.log(this.props.location.state.weather);
  },
  render: function(){
    return (
      <div>
        Detail Container
        <Detail />
      </div>
    )
  }
});

module.exports = DetailContainer;