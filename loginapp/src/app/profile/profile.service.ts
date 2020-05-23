import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class ProfleService {

    private infourl = 'http://localhost:5000/api/auth/userinfo';
    private allUser = 'http://localhost:5000/api/auth/users'

    constructor(private http: HttpClient) {}

    // User info on based of token
    getUserInfo(){
        return this.http.get(this.infourl, {headers: {'x-access-token': localStorage.getItem('_0yy')}});
    }

    getAllUser(){
        return this.http.get(this.allUser);
    }
}


