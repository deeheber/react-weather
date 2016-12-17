import React from 'react';
import GetCityContainer from '../containers/GetCityContainer';

export default function Home(props){
  return (
    <div>
        <h1>Instant Weather</h1>
        <p className='lead'>at your fingertips</p>
        <GetCityContainer />
    </div>
  )
}