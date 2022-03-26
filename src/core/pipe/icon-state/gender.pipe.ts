import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      if (value.toLowerCase() === 'male') {
        return `${value} ♂`;
      } else if (value.toLowerCase() === 'female') {
        return `${value} ♀`;
      } else {
        return `${value} ❓`;
      }
    }
    return '';
  }
}
