var axios = require('axios');
var apiKey = require('./apiKey');

function getCurrentWeather(location){
    //TODO seperate out creating the URl in a seperate function
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&type=accurate&APPID='+apiKey;

    axios.get(url)
        .then(function(currentWeather){
            console.log(currentWeather.data);
        })
        .catch(function(err){
            console.log(err);
        });
}

// 5 day forecast
function getForecast(location){
    //TODO seperate out creating the URl in a seperate function
    var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+location+'&type=accurate&APPID='+apiKey+'&cnt=5';

    axios.get(url)
        .then(function(forecast){
            console.log(forecast.data)
        })
        .catch(function(err){
            console.log(err);
        });
}

module.exports = {
    getCurrentWeather: getCurrentWeather,
    getForecast: getForecast
};