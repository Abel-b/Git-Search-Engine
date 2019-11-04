import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date: any): any {
    const dateObject = new Date(date);
    const monthsOfYear = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const formattedDate = `${daysOfWeek[dateObject.getDay()]}
                           ${dateObject.getDate()}th
                           ${monthsOfYear[dateObject.getMonth()]}
                           ${dateObject.getFullYear()} `;
    return formattedDate;
  }

}
