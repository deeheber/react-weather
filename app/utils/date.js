var moment = require('moment');

function format(date){
  return moment.unix(date).format('ddd MMM Do');
}

module.exports = format;