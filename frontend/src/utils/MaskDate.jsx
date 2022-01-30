import moment from 'moment';
import Moment from 'moment';

function FormatDateIso(date) {
  if (date) {
    return moment(date).locale('pt-br').format('DD/MM/YYYY');
  }
}

function FormatDateHourDateIso(date) {
  if (date) {
    return moment(date).locale('pt-br').format('DD/MM/YYYY HH:mm:ss');
  }
}

export default { FormatDateIso, FormatDateHourDateIso };
