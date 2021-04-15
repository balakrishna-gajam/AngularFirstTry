import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my-test-pipe'
})
export class MyTestPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
