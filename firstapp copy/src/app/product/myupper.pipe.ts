import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myupper'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: string, kindOf: string): string {
        if (kindOf == 'upper'){
            value = value.toUpperCase();
        }else{
            value = value.toLowerCase();
        }
        return value;
    }
}
