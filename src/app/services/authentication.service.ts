import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
// import { User } from './usersModel.js'
 class User {
    username: string;
    password: string;
    email: string;
}


@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
                    console.log('!!!!!!!!!!!!!!jwt currentUser',currentUser)

            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

    login(model) {
        return this.http.post('/api/UserSignin', model)
            .map((response: Response) => {
                         console.log('service component',JSON.stringify(model))

                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }
        create(user: User) {
            console.log('!!!!!!!!!!!!!!create',User)

        return this.http.post('/api/UserSignup', user, this.jwt()).map((response: Response) => response.json());
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}