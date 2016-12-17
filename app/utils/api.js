var axios = require('axios');
var apiKey = process.env.KEY || require('../../apiKey');

function getCurrentWeather(location){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&type=accurate&APPID='+apiKey;

    return axios.get(url)
        .then(function(currentWeather){
            console.log(currentWeather.data);
        });
}

// 5 day forecast
function getForecast(location){
    var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+location+'&type=accurate&APPID='+apiKey+'&cnt=5';

    return axios.get(url)
        .then(function(forecast){
            return forecast.data;
        });
}

module.exports = {
    getCurrentWeather: getCurrentWeather,
    getForecast: getForecast
};