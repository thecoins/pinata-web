import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersWithCommas'
})
export class NumbersWithCommasPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : '';
  }

}
