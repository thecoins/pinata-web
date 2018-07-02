import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersDigits'
})
export class NumbersDigitsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //如果小于1，小数保留6位
    //如果大于100，小数保留2位
    //其他情况，小数保留4位
    if (!value){
      return '';
    }
    else if (value < 1) {
      return value.toFixed(6);
    }
    else if (value > 100) {
      return value.toFixed(2);
    }
    else {
      return value.toFixed(4);
    }

  }

}
