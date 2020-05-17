import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class LoginService {
    private lurl = 'http://localhost:5000/api/auth/login';
    private infourl = 'http://localhost:5000/api/auth/userinfo';

    constructor(private http: HttpClient) {}

    // Give Token after login
    LoginUser(user): Observable<any[]> {
        return this.http.post<any[]>(this.lurl, user);
    }

    // User info on based of token
    getUserRole(token){
        localStorage.setItem('_0yy', token);
        return this.http.get(this.infourl, {headers: {'x-access-token': token}});
    }
}


