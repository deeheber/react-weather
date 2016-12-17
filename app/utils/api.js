import axios from 'axios';
const apiKey = process.env.KEY || require('../../apiKey');

export default function getForecast(location){
    const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&type=accurate&APPID=${apiKey}&cnt=5`;

    return axios.get(url)
        .then(function(forecast){
            return forecast.data;
        });
}

