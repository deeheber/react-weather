var React = require('react');
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
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
        //TODO later
            //empty out input
            //redirect to forecast component
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