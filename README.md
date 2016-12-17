# React Weather App

## Summary
Retrieves weather info when entering a city/state. Utilizes the Open Weather Map API for data.  

Available views: 5 day forecast and detailed daily view.

Live demo [here](http://weatherinreact.herokuapp.com/)

## To run locally
1. Clone the repo
2. `npm install`
3. Generate an api key [here](http://openweathermap.org/appid) if you don't have one yet
4. Create a file called `apiKey.js` in the root directory that contains:
    ```
    var apiKey = 'YOUR-API-KEY-HERE';

    module.exports = apiKey;

    ```
5. `npm start`
6. Navigate to `http://localhost:3000/` in a web browser

## Dev setup
- `npm run dev`
- Navigate to `http://localhost:8080`
- `npm run prod` will create a new production build in the /dist folder