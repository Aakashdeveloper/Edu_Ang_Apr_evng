import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl : './product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {
    id: number;
    name: string;
    city: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
       this.id = this.route.snapshot.params['id'];
       this.route.queryParams
                .subscribe((data) => {
                    this.name = data['name'];
                    this.city = data['city']
                });

    }

}
