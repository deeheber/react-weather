var React = require('react');

//TODO: refactor inline style for margin later

function GetCity(props){
    return (
        <form>
            <div className='col-sm-6 col-sm-offset-3' >
                <input className='form-control input-md' placeholder='Enter a City and State' type='text'/>
            </div>
            <div className='col-sm-12' style={{marginTop: '5px'}}>
                <button className='btn btn-info btn-md'>Get Weather</button>
            </div>    
        </form>
    )
}

module.exports = GetCity;