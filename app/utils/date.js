import moment from 'moment';

export default function format(date){
  return moment.unix(date).format('ddd MMM Do');
}

