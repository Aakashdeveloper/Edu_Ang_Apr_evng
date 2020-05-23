import { Injectable} from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable()

export class AdminGaurdService implements CanActivate {
    token: string;
    role: string;

    constructor(private router: Router) {}

    canActivate(): boolean {
        this.token = localStorage.getItem('_0yy');
        this.role = localStorage.getItem('_1ux');
        if (this.token === null){
            this.router.navigate(['/login']);
            return false;
        }
        if (this.token !== null && this.role === 'admin'){
            return true;
        }else{
            this.router.navigate(['/profile']);
            return false;
        }
    }
}
