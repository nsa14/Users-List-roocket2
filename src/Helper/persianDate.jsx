import moment from "jalali-moment";

export const ConvertTimestampToPersianDate = (getDate) => {

    return moment(new Date(getDate), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')

}