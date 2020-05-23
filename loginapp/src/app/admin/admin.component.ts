import {Component, OnDestroy} from '@angular/core';
import {IAdmin } from './admin.model';
import { NgForm} from '@angular/forms';
import { RegsiterService } from '../register-form/register.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './admin.component.html'
})

export class AdminComponent implements OnDestroy{
    constructor(private router: Router,
                private registerService: RegsiterService){}

    myUser = new IAdmin('', '' , '', '');


    submitForm(form: NgForm): void {
        this.registerService.RegisterUser(form.value)
            .subscribe((res) => this.router.navigate(['/profile']));
    }

    ngOnDestroy(){
        alert("You are leaving a page")
    }

}

