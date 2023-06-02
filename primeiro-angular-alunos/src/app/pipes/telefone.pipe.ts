import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length === 8) {
      return `${value.substr(0, 4)}-${value.substr(4)}`;
    } else if (value.length === 10) {
      const ddd = value.substr(0, 2);
      const number = `${value.substr(2, 4)}-${value.substr(6)}`;
      return `(${ddd}) ${number}`;
    } else if (value.length === 11) {
      const ddd = value.substr(0, 2);
      const number = `${value.substr(2, 5)}-${value.substr(7)}`;
      return `(${ddd}) ${number}`;
    } else {
      return value;
    }
  }

}
