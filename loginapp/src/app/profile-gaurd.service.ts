import { Injectable} from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable()

export class ProfileGaurdService implements CanActivate {
    token: string;

    constructor(private router: Router) {}

    canActivate(): boolean {
        this.token = localStorage.getItem('_0yy');
        if (this.token === null){
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }

}
