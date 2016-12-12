var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
//var getCurrentWeather = require('../utils/api').getCurrentWeather;
var getForecast = require('../utils/api').getForecast;

var GetCityContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
        return {
            city: ''
        }
    },
    handleUpdateCity: function(e){
        this.setState({
            city: e.target.value
        });
    },
    handleSubmitCity: function(e){
        e.preventDefault();
        console.log(this.state.city);
        //getCurrentWeather(this.state.city);
        getForecast(this.state.city);
        this.context.router.push('/forecast/' + this.state.city);
    },
    render: function(){
        return (
            <GetCity 
                city={this.state.city}
                onUpdateCity={this.handleUpdateCity}
                onSubmitCity={this.handleSubmitCity}
            />
        )
    }
});

module.exports = GetCityContainer;