var moment = require('moment');

function format(date){
  return moment.unix(date).format('ddd MMM Mo');
}

module.exports = format;