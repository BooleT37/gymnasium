import moment from 'moment';

const serverDateFormat = "DD.MM.YYYY";
const isoDateFormat = "YYYY-MM-DD";

export function serverToIso(str) {
    return moment(str, serverDateFormat).format(isoDateFormat);
}

export function isoToServer(str) {
    return moment(str, isoDateFormat).format(serverDateFormat);
}