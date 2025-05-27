import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenNumber',
  standalone: true
})
export class EvenNumberPipe implements PipeTransform {

transform(value: number[], ...args: any[]) {
  let output=value.sort((a,b)=> a-b);
  return output
}


}
