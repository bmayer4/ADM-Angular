import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, char: string): string {  //value is what we are passing in to transform, second param is pipe param we use in html
        return value.replace(char, ' ');
    }
}