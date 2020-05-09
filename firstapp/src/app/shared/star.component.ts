import { Component, Input, OnChanges, OnInit,
        Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges, OnInit{
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;

    ngOnChanges() {
        console.log('>>>', this.rating);
        this.starWidth = 90 / 5 * this.rating;
        console.log('Inside ngOnChanges');
    }
    ngOnInit(){
        console.log('Inside ngOnInit');
    }

    onStar(): void{
        this.ratingClicked.emit(`The Rating clicked is ${this.rating}`);
    }
}



/*
90/5*rating

*/
