var React = require('react');
var PropTypes = React.PropTypes;
var formatDate = require('../utils/date');

// each day section
function Day(props){
  var icon = props.day.weather[0].icon;
  var description = props.day.weather[0].description;
  var date = formatDate(props.day.dt);

  return (
    <div className="col-md-4 col-xs-12">
      <img style={{height: 130 + 'px'}} src={'./app/images/weather-icons/' + icon + '.svg'}/>
      <p className='lead'>{date}</p>
    </div>
  )
}

// main forecast container
function Forecast(props){
  if(props.isLoading){
    return (
      <div>
        Loading...please wait.
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <h1>Five Day Forecast for {props.forecast.city.name}</h1>
      <div className="row">
      {
        props.forecast.list.map(function(listItem){
          return (
            <Day day={listItem} />
          )
        })
      }
      </div>
    </div>
  )

}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecast: PropTypes.object.isRequired
};

module.exports = Forecast;