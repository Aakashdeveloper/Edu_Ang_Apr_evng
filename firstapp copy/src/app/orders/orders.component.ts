import { Component, OnInit } from '@angular/core';
import {OrderService} from './order.service';
import {ActivatedRoute, Router} from '@angular/router';
import { IOrder } from './form.model';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  id: number;
  details: any[];
  totalprice: number;
  quntity: number;
  myUser = new IOrder(Math.floor(Math.random() * 10000), 'John', 'a@a.com', 'H22, NewDelhi', 998978986);

  constructor(private orderService: OrderService, private route: ActivatedRoute)
  {
  }



  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.orderService.getHotelDetails(this.id)
     .subscribe((data) => this.details = data);


    this.route.queryParams
     .subscribe((data) => {
         this.quntity = data['person']
     });

    this.totalprice = (((230) / 2) * this.quntity) ;

 }

 calclate(): void{
   console.log('heree');
 }

 submitForm(form: NgForm): void {
    this.orderService.placeOrder(form.value, this.totalprice, this.details[0].name)
    .subscribe((data) => console.log('data submitted'));
 }

}
