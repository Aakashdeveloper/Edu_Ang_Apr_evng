import { Component, OnInit } from '@angular/core';
import {IProduct} from './product.model';
import {ProductService} from './product.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  styles: [
    `.bgclass {
        background-color:olive
    }`
  ]
})

export class ProductComponent implements OnInit {
  title = 'Resturant List';
  description: String = ' ';
  imageWidth = 150;
  condition = true;
  userText = '';
  discountPrice = Math.floor(Math.random() * (50 - 5)) + 5;
  message = this.discountPrice > 25 ? 'Super Lucky' : 'Lucky';
  restaurantList: IProduct[];

  // Any declaration
  constructor(public productService: ProductService){
  }



  ngOnInit(){
    this.productService.getHotels()
      .subscribe((data) => this.restaurantList = data);
  }

  toggleImage(): void {
    this.condition = !this.condition;
  }

  getColor(){
      return this.message === 'Lucky' ? 'red' : 'green';
  }

  dataRecive(message: string): void{
      this.description = message;
  }

}
