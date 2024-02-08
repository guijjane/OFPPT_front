import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectValues'
})
export class ObjectValuesPipe implements PipeTransform {

  transform(value: Object): any[] {
    const values = Object.values(value);
    const keys = Object.keys(value);
    return values.map((val, index) => ({key: keys[index], value: val}));
  }

}
