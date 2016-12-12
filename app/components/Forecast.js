var React = require('react');
var PropTypes = React.PropTypes;

function Forecast(props){
  if(props.isLoading){
    return (
      <div>
        Forecast component loading is true
      </div>
    );
  }

  return (
    <div>
      Forecast component loading is false
    </div>
  )

}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

module.exports = Forecast;