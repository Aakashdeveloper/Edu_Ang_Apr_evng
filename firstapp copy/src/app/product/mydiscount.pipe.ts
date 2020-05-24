import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'discount'
})

export class MyDiscount implements PipeTransform{
    transform(value: number, dis: number): number{
        console.log(dis);
        value = value - dis;
        return value;
    }
}
