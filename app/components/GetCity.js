var React = require('react');
var PropTypes = React.PropTypes;

//TODO: refactor inline style for margin later

function GetCity(props){
    return (
        <form onSubmit={props.onSubmitCity}>
            <div className='col-sm-6 col-sm-offset-3' >
                <input className='form-control input-md' placeholder='Enter a City and State' type='text' value={props.city} onChange={props.onUpdateCity} />
            </div>
            <div className='col-sm-12' style={{marginTop: '5px'}}>
                <button className='btn btn-info btn-md' type='submit'>Get Weather</button>
            </div>    
        </form>
    )
}

GetCity.propTypes = {
    city: PropTypes.string.isRequired,
    onUpdateCity: PropTypes.func.isRequired,
    onSubmitCity: PropTypes.func.isRequired
};

module.exports = GetCity;