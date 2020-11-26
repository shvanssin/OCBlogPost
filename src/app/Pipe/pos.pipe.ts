import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pos'
})
export class PosPipe implements PipeTransform {

  transform(value: number): boolean {
    if(value>0) return true;
    if(value<0) return false;
    else return null;
  }

}
