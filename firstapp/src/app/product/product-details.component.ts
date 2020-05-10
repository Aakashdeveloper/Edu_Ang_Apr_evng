import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product.model';

@Component({
    templateUrl : './product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {
    id: number;
    details: IProduct[];
    quntity: number;

    constructor(private route: ActivatedRoute,
                private productService: ProductService,
                private router: Router
        ) {}

    ngOnInit(): void {
       this.id = this.route.snapshot.params['id'];
       this.productService.getHotelDetails(this.id)
        .subscribe((data) => this.details = data);

    }

    onBack(): void{
        this.router.navigate(['/restaurants']);
    }
}



/*
 placeorder(): void{
        this.router.navigate([`/orders/${this.quntity}/${this.details[0].name}`]);
    }
ngOnInit() {
       this.id = this.route.snapshot.params['id'];
       this.route.queryParams
                .subscribe((data) => {
                    this.name = data['name'];
                    this.city = data['city']
                });

    }
*/