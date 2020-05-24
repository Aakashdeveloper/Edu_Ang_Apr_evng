import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IProduct} from './product.model';

@Injectable()

export class ProductService{
    private restUrl = 'http://localhost:8900/restaurants';

    constructor(private http: HttpClient) {

    }

    getHotels(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.restUrl);
    }

    getHotelDetails(id): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.restUrl}?id=${id}`);
    }

}

/*
var a = 10
var b = "my age is "+a
var c = `my age is ${a}`
*/
