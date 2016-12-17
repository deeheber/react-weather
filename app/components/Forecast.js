var React = require('react');
var PropTypes = React.PropTypes;
import formatDate from '../utils/date';

function Day(props){
  var icon = props.day.weather[0].icon;
  var imageURL = require('../images/weather-icons/' + icon + '.svg');
  var date = formatDate(props.day.dt);

  return (
    <div className="col-md-4 col-xs-12">
      <img onClick={props.handleClick} className='icon pointer' src={imageURL}/>
      <p className='lead'>{date}</p>
    </div>
  )
}

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
            <Day day={listItem} handleClick={props.handleClick.bind(null, listItem)}/>
          )
        })
      }
      </div>
    </div>
  )

}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecast: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

module.exports = Forecast;