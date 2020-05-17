import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()

export class RegsiterService {

    private url = 'http://localhost:5000/api/auth/register';

    constructor(private http: HttpClient) {}

    RegisterUser(user): Observable<any[]>{
        return this.http.post<any[]>(this.url, user);
    }

}
