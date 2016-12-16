var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var PropTypes = React.PropTypes;
var formatDate = require('../utils/date');
var formatTemp = require('../utils/temp');

function Detail(props){

  var icon = props.weather.weather[0].icon;
  var date = formatDate(props.weather.dt);
  var description = props.weather.weather[0].description;
  var minTemp = formatTemp(props.weather.temp.min);
  var maxTemp = formatTemp(props.weather.temp.max);

  return (
    <div className='topSpace'>
      <img className='icon' src={'./app/images/weather-icons/' + icon + '.svg'}/>
      <h1 className='text-capitalize'>{props.city}</h1>
        <h2>{date}</h2>
          <h3 className='text-capitalize'>{description}</h3>
          <p>Min Temp: {minTemp}&deg;F</p>
          <p>Max Temp: {maxTemp}&deg;F</p>
          <div>
            <a className='pointer' onClick={browserHistory.goBack}>Back</a>
          </div>
    </div>
  )
}

Detail.propTypes = {
  weather: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired
};

module.exports = Detail;