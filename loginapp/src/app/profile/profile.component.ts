import {Component, OnInit} from '@angular/core';
import { ProfleService } from './profile.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit{
    userinfo;
    allUser;

    constructor(private profleService: ProfleService,
                private router: Router){

    }

    ngOnInit(): void{
        this.profleService.getUserInfo()
            .subscribe((data) => this.userinfo = data);

        this.profleService.getAllUser()
            .subscribe((data) => this.allUser = data);
    }

    logout(): void {
        localStorage.removeItem('_0yy');
        localStorage.removeItem('_1ux');
        this.router.navigate(['/login']);
    }
}
