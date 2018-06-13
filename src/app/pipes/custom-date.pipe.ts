import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any, locale?: any, format?: any): any {
    const date = new Date(value);
    const dateMS = new Date(value).getTime();
    const currentDate = new Date().getTime();
    const differenceBetweenData = currentDate - dateMS;

    if (differenceBetweenData <= 3540000) {
      format = date.toLocaleString(locale, {minute: 'numeric'});

      if (format == 1  || format == 21 || format == 31 ||
          format == 41 || format == 51) {
          return `Опубликовано ${format} минуту назад`;
      }

      if (format == 2  || format == 3  || format == 4  || format == 22 ||
          format == 23 || format == 24 || format == 32 || format == 33 ||
          format == 34 || format == 42 || format == 43 || format == 44 ||
          format == 52 || format == 53 || format == 54) {
          return `Опубликовано ${format} минуты назад`;
      }

      if (format == 0  || format == 5  || format == 6  || format == 7  ||
          format == 8  || format == 9  || format == 10 || format == 11 ||
          format == 12 || format == 13 || format == 14 || format == 15 ||
          format == 16 || format == 17 || format == 18 || format == 19 ||
          format == 20 || format == 25 || format == 26 || format == 27 ||
          format == 28 || format == 29 || format == 30 || format == 35 ||
          format == 36 || format == 37 || format == 38 || format == 39 ||
          format == 40 || format == 45 || format == 46 || format == 47 ||
          format == 48 || format == 49 || format == 50 || format == 55 ||
          format == 56 || format == 57 || format == 58 || format == 59) {
          return `Опубликовано ${format} минут назад`;
      }
    }

    if (differenceBetweenData > 3540000 && differenceBetweenData <= 82800000) {
      format = date.toLocaleString(locale, {hour: 'numeric'});

      if (format == 1 || format == 21) {
          return `Опубликовано ${format} час назад`;
      }

      if (format == 2 || format == 3 || format == 4 || format == 22 || format == 23) {
          return `Опубликовано ${format} часа назад`;
      }

      if (format == 5  || format == 6  || format == 7  || format == 8  ||
          format == 9  || format == 10 || format == 11 || format == 12 ||
          format == 13 || format == 14 || format == 15 || format == 16 ||
          format == 17 || format == 18 || format == 19 || format == 20) {
          return `Опубликовано ${format} часов назад`;
      }
    }

    if (differenceBetweenData > 82800000) {
      format = date.toLocaleString(locale, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'});
      return `Опубликовано в ${format}`;
    }
  }
}
