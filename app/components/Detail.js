import React, {PropTypes} from 'react';
import ReactRouter, {browserHistory} from 'react-router';
import formatDate from '../utils/date';
import formatTemp from '../utils/temp';

export default function Detail(props){
  const icon = props.weather.weather[0].icon;
  const imageURL = require('../images/weather-icons/' + icon + '.svg');
  const date = formatDate(props.weather.dt);
  const description = props.weather.weather[0].description;
  const minTemp = formatTemp(props.weather.temp.min);
  const maxTemp = formatTemp(props.weather.temp.max);

  return (
    <div className='topSpace'>
      <img className='icon' src={imageURL}/>
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