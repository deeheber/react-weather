# React Weather App

**Currently in progress**

## Summary
Retrieves weather info when entering a city/state. Utilizes the Open Weather Map API for data.  

Available views: 5 day forecast and detailed daily view.

## To run locally
1. Clone the repo
2. `npm install`
3. Generate an api key [here](http://openweathermap.org/appid) if you don't have one yet
4. Create a file called `apiKey.js` under the `/app/utils` directory that contains:
    ```
    var apiKey = 'YOUR-API-KEY-HERE';

    module.exports = apiKey;

    ```
5. `npm start`
6. Navigate to `http://localhost:8080/` in a web browser

## Production setup
- `npm run prod`
- the `/dist` folder in the root contains the minified and transpiled code