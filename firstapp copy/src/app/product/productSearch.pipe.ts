import {Pipe, PipeTransform} from '@angular/core';
import {IProduct } from './product.model';

@Pipe({
    name: 'search'
})


export class ProductSearchPipe implements PipeTransform {
    transform(value: IProduct[], userInput: string): IProduct[]{
        userInput = userInput ? userInput.toLowerCase() : null;
        return userInput ? value.filter((data) =>
            ((data.name.toLowerCase().indexOf(userInput) !== -1) ||
             (data.city.toLowerCase().indexOf(userInput) !== -1))
        ) : value;
    }
}



/*
var age = [56,34,23,43,25,30]
age.filter((data) => {return data>30})
*/
