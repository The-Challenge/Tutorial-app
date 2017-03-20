import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

 class User {
    username: string;
    password: string;
    email: string;
}


@Injectable()
export class AuthenticationService {
    private loggedIn = false;
    constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('currentUser');
     }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
                    // console.log('!!!!!!!!!!!!!!jwt currentUser',currentUser)

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
                console.log('11111111111111111111loginn',user.token)
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.loggedIn = true;

                }
            });
    }


    signup(user: User) {

        console.log('!!!!!!!!!!!!!!signup',User)
        // localStorage.setItem('currentUser', JSON.stringify(user));
        return this.http.post('/api/UserSignup', user, this.jwt()).map((response: Response) =>{
            let user= response.json()
            if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

            });
    }

    logout() {
        this.loggedIn = false;
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    isLoggedIn() {
        console.log("in service")
        return this.loggedIn;
  }
}