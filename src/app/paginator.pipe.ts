import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginator'
})
export class PaginatorPipe implements PipeTransform {

  transform(value: [], page: number, limit: number): any {

    if (!value) { return [] };
    let begin = (page * limit) - limit,
      end = page * limit;
    return value.slice(begin, end);
  }

}