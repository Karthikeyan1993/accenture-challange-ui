import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statementUtil'
})
export class StatementUtilPipe implements PipeTransform {

  transform(value: any, key: any): any {
    let val = '';
    switch (key) {
      case 'sex': {
        if (value == 1) {
          val = 'Male'
        } else if (value == 2) {
          val = 'Female'
        }
        break;
      }
      case 'education': {
        if (value == 1) {
          val = 'Graduate school';
        } else if (value == 2) {
          val = 'University'
        } else if (value == 3) {
          val = 'High school'
        } else if (value == 4) {
          val = 'Others'
        } else if (value == 5) {
          val = 'Unknown'
        } else if (value == 6) {
          val = 'Unknown'
        }
        break;
      }
      case 'marriage': {
        if (value == 1) {
          val = 'Married';
        } else if (value == 2) {
          val = 'Single'
        } else if (value == 3) {
          val = 'Others'
        }
        break;
      }
      case 'age': {
        val = value + ' ' + 'Years'
      }
    }
    return val;
  }

}