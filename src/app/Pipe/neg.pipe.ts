import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'neg'
})
export class NegPipe implements PipeTransform {

  transform(value: number): boolean {
    if(value>0) return false;
    if(value<0) return true;
    else return null;
  }

}
