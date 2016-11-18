var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');

function Home(props){
        return (
            <div className='col-sm-12 text-center'>
                <h1>Instant Weather</h1>
                <p className='lead'>at your fingertips</p>
                <GetCityContainer />
            </div>
        )
    }


module.exports = Home;