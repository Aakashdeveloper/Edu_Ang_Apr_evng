import {Component} from '@angular/core';
import { NgForm} from '@angular/forms';
import { IRegister} from './register.model';
import { Router } from '@angular/router';
import { RegsiterService } from './register.service';

@Component({
    templateUrl: './register.component.html'
})

export class RegisterComponent{

    constructor(private router: Router,
                private registerService: RegsiterService){}

    myUser = new IRegister('', '' , '');

    submitForm(form: NgForm): void {
        this.registerService.RegisterUser(form.value)
            .subscribe((res) => this.router.navigate(['/login']));
    }


}

