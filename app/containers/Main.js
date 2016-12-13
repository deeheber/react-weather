var React = require('react');

var Main = React.createClass({
    render: function(){
        return (
            <div className='col-sm-12 text-center'>
                {this.props.children}
            </div>   
        )
    }
});

module.exports = Main;