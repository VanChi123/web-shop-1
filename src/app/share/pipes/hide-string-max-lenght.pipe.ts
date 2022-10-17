import { Pipe, PipeTransform } from '@angular/core';
import {stringNullOrEmpty} from "../utils/common-utils";

@Pipe({
  name: 'hideStringMaxLenght'
})
export class HideStringMaxLenghtPipe implements PipeTransform {

  transform(item: string, valueMax?: number): any {
    if (stringNullOrEmpty(item)) { return '';}

    const lengthValue = valueMax ? valueMax : 10;
    return item.length <= lengthValue ? item : (item.substring(0, lengthValue) + '...');
  }

}
