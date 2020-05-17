import {Component} from '@angular/core';
import {ILogin} from './login.model';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from './login.service';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent{

    constructor(private router: Router,
                private loginService: LoginService) {}

    myUser = new ILogin('', '');

    submitForm(form: NgForm): void {
        this.loginService.LoginUser(form.value)
        .subscribe((res) => this.loginService.getUserRole(res['token'])
        .subscribe((response) => this.userRole(response['role']))
        );
    }

    userRole(typeOfUser): void {
        localStorage.setItem('_1ux', typeOfUser);
        this.router.navigate(['/profile']);
    }

}

