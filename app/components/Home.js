var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render: function(){
        return (
            <div className='col-sm-12 text-center'>
                <h1>Weather</h1>
                <p className='lead'>At your fingertips</p>
                <Link to='/selectCity'>
                    <button type='button' className='btn btn-large btn-info'>
                        Get Started
                    </button>
                </Link>
            </div>
        )
    }
});

module.exports = Home;